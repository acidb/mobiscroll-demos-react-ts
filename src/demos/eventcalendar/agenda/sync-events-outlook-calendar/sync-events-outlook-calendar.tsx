import { outlookCalendarSync } from '@mobiscroll/calendar-integration';
import {
  Button,
  CalendarNav,
  CalendarNext,
  CalendarPrev,
  Eventcalendar,
  MbscCalendarEvent,
  MbscDateType,
  MbscEventcalendarView,
  MbscPageLoadingEvent,
  MbscSelectedDateChangeEvent,
  Page,
  Popup,
  setOptions,
  Switch,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { ChangeEvent, FC, useCallback, useEffect, useRef, useState } from 'react';
import './sync-events-outlook-calendar.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [myCalendars, setCalendars] = useState<Array<{ name: string; id: number }>>([]);
  const [calendarIds, setCalendarIds] = useState<string[]>([]);
  const [calendarData, setCalendarData] = useState<{ [key: string]: { checked: boolean } }>({});
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isOpen, setOpen] = useState<boolean>(false);
  const buttonRef = useRef<Button>(null);
  const [myAnchor, setAnchor] = useState<HTMLElement>();
  const [mySelectedDate, setSelectedDate] = useState(new Date());
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const { current: view } = useRef<MbscEventcalendarView>({ agenda: { type: 'month' } });

  const debounce = useRef<number>();
  const startDate = useRef<MbscDateType>();
  const endDate = useRef<MbscDateType>();

  const onError = useCallback((resp: { message: string }) => {
    setToastMessage(resp.message);
    setToastOpen(true);
  }, []);

  useEffect(() => {
    const onSignedIn = () => {
      setIsLoggedIn(true);
      outlookCalendarSync
        .getCalendars()
        .then((calendars) => {
          const newCalendarIds = [];
          const calData: { [key: string]: { checked: boolean } } = {};

          calendars.sort((c: { isDefaultCalendar: boolean }) => (c.isDefaultCalendar ? -1 : 1));

          for (const c of calendars) {
            newCalendarIds.push(c.id);
            calData[c.id] = { checked: true };
          }

          setCalendarIds(newCalendarIds);
          setCalendarData(calData);
          setCalendars(calendars);
          setLoading(true);
          return outlookCalendarSync.getEvents(newCalendarIds, startDate.current as Date, endDate.current as Date);
        })
        .then((events) => {
          setEvents(events);
          setLoading(false);
        })
        .catch(onError);
    };

    const onSignedOut = () => {
      setIsLoggedIn(false);
      setCalendars([]);
      setCalendarIds([]);
      setCalendarData({});
      setEvents([]);
      setOpen(false);
    };

    // init outlook client
    outlookCalendarSync.init({
      clientId: '<YOUR_OUTLOOK_CLIENT_ID>',
      redirectUri: '<YOUR_OUTLOOK_REDIRECT_URI>',
      onSignedIn: onSignedIn,
      onSignedOut: onSignedOut,
    });
  }, [onError]);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  const openPopup = useCallback(() => {
    setAnchor(buttonRef.current!.nativeElement);
    setOpen(true);
  }, []);

  const navigate = useCallback(() => {
    setSelectedDate(new Date());
  }, []);

  const onSelectedDateChange = useCallback((event: MbscSelectedDateChangeEvent) => {
    setSelectedDate(new Date(event.date as string));
  }, []);

  const signIn = useCallback(() => {
    outlookCalendarSync.signIn().catch(onError);
  }, [onError]);

  const signOut = useCallback(() => {
    outlookCalendarSync.signOut().catch(onError);
  }, [onError]);

  const toggleCalendar = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      const checked = ev.target.checked;
      const calendarId = ev.target.value;
      calendarData[calendarId].checked = checked;
      if (checked) {
        setLoading(true);
        setCalendarIds((calIds) => [...calIds, calendarId]);
        outlookCalendarSync
          .getEvents([calendarId], startDate.current as Date, endDate.current as Date)
          .then((events) => {
            setLoading(false);
            setEvents((oldEvents) => [...oldEvents, ...events]);
          })
          .catch(onError);
      } else {
        setCalendarIds((calIds) => calIds.filter((item) => item !== calendarId));
        setEvents((oldEvents) => oldEvents.filter((item) => item.outlookCalendarId !== calendarId));
      }
    },
    [calendarData, onError],
  );

  const renderMyHeader = useCallback(
    () => (
      <>
        <CalendarNav className="md-sync-events-outlook-nav" />
        <div className="md-spinner">
          <div className="md-spinner-blade"></div>
          <div className="md-spinner-blade"></div>
          <div className="md-spinner-blade"></div>
          <div className="md-spinner-blade"></div>
          <div className="md-spinner-blade"></div>
          <div className="md-spinner-blade"></div>
          <div className="md-spinner-blade"></div>
          <div className="md-spinner-blade"></div>
          <div className="md-spinner-blade"></div>
          <div className="md-spinner-blade"></div>
          <div className="md-spinner-blade"></div>
          <div className="md-spinner-blade"></div>
        </div>
        <div className="md-outlook-calendar-buttons">
          {isLoggedIn ? (
            <Button ref={buttonRef} onClick={openPopup} className="md-sync-events-outlook-button">
              My Calendars
            </Button>
          ) : (
            <Button onClick={signIn} className="md-sync-events-outlook-button">
              Sync my outlook calendars
            </Button>
          )}
          <Button onClick={navigate}>Today</Button>
          <CalendarPrev />
          <CalendarNext />
        </div>
      </>
    ),
    [isLoggedIn, navigate, openPopup, signIn],
  );

  const onPageLoading = useCallback(
    (args: MbscPageLoadingEvent) => {
      clearTimeout(debounce.current);
      startDate.current = args.viewStart;
      endDate.current = args.viewEnd;
      debounce.current = setTimeout(() => {
        if (outlookCalendarSync.isSignedIn()) {
          setLoading(true);
          outlookCalendarSync
            .getEvents(calendarIds, startDate.current as Date, endDate.current as Date)
            .then((resp) => {
              setEvents(resp);
              setLoading(false);
            })
            .catch(onError);
        }
      }, 200);
    },
    [calendarIds, onError],
  );

  const handleToastClose = useCallback(() => setToastOpen(false), []);

  return (
    <Page className={'md-sync-events-outlook-cont ' + (isLoading ? 'md-loading-events' : '')}>
      <Eventcalendar
        view={view}
        data={myEvents}
        exclusiveEndDates={true}
        selectedDate={mySelectedDate}
        renderHeader={renderMyHeader}
        onPageLoading={onPageLoading}
        onSelectedDateChange={onSelectedDateChange}
      ></Eventcalendar>
      <Popup
        isOpen={isOpen}
        anchor={myAnchor}
        onClose={onClose}
        width={400}
        touchUi={false}
        showOverlay={false}
        scrollLock={false}
        contentPadding={false}
        display="anchored"
      >
        <div className="mbsc-form-group-inset md-sync-events-outlook-inset">
          <div className="mbsc-form-group-title">My Calendars</div>
          {myCalendars.map((cal: { name: string; id: number }) => (
            <Switch label={cal.name} key={cal.id} value={cal.id} checked={calendarData[cal.id].checked} onChange={toggleCalendar} />
          ))}
        </div>
        <div className="mbsc-form-group-inset">
          <Button className="md-sync-events-outlook-button mbsc-button-block" onClick={signOut}>
            Log out of my account
          </Button>
        </div>
      </Popup>
      <Toast message={toastMessage} isOpen={isToastOpen} onClose={handleToastClose} />
    </Page>
  );
};
export default App;
