import { outlookCalendarSync } from '@mobiscroll/calendar-integration';
import {
  Button,
  CalendarNav,
  CalendarNext,
  CalendarPrev,
  Eventcalendar,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscPageLoadingEvent,
  MbscSelectedDateChangeEvent,
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
  const [calendarData, setCalendarData] = useState<{ [key: string]: { checked: boolean } }>({});
  const [calendarIds, setCalendarIds] = useState<string[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [myAnchor, setAnchor] = useState<HTMLElement>();
  const [myCalendars, setCalendars] = useState<Array<{ name: string; id: string }>>([]);
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [mySelectedDate, setSelectedDate] = useState(new Date());
  const [toastMessage, setToastMessage] = useState<string>('');

  const { current: view } = useRef<MbscEventcalendarView>({ agenda: { type: 'month' } });
  const buttonRef = useRef<Button>(null);
  const startDate = useRef<Date>();
  const endDate = useRef<Date>();
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const handleError = useCallback((resp: { error?: string; result: { error: { message: string } } }) => {
    setToastMessage(resp.error ? resp.error : resp.result.error.message);
    setToastOpen(true);
  }, []);

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  const handlePopupClose = useCallback(() => {
    setPopupOpen(false);
  }, []);

  const handleSelectedDateChange = useCallback((event: MbscSelectedDateChangeEvent) => {
    setSelectedDate(new Date(event.date as string));
  }, []);

  const handlePageLoading = useCallback(
    (args: MbscPageLoadingEvent) => {
      clearTimeout(timer.current);
      startDate.current = args.viewStart;
      endDate.current = args.viewEnd;
      timer.current = setTimeout(() => {
        if (outlookCalendarSync.isSignedIn()) {
          setLoading(true);
          outlookCalendarSync
            .getEvents(calendarIds, startDate.current!, endDate.current!)
            .then((resp: MbscCalendarEvent[]) => {
              setEvents(resp);
              setLoading(false);
            })
            .catch(handleError);
        }
      }, 200);
    },
    [calendarIds, handleError],
  );

  const toggleCalendar = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      const checked = ev.target.checked;
      const calendarId = ev.target.value;
      if (calendarData) {
        calendarData[calendarId].checked = checked;
      }
      if (checked) {
        setLoading(true);
        setCalendarIds((calIds) => [...calIds, calendarId]);
        outlookCalendarSync
          .getEvents([calendarId], startDate.current!, endDate.current!)
          .then((events) => {
            setLoading(false);
            setEvents((oldEvents) => [...oldEvents, ...events]);
          })
          .catch(handleError);
      } else {
        setCalendarIds((calIds) => calIds.filter((item) => item !== calendarId));
        setEvents((oldEvents) => oldEvents.filter((item) => item.outlookCalendarId !== calendarId));
      }
    },
    [calendarData, handleError],
  );

  const openPopup = useCallback(() => {
    setAnchor(buttonRef.current!.nativeElement);
    setPopupOpen(true);
  }, []);

  const navigate = useCallback(() => {
    setSelectedDate(new Date());
  }, []);

  const signIn = useCallback(() => {
    outlookCalendarSync.signIn().catch(handleError);
  }, [handleError]);

  const signOut = useCallback(() => {
    outlookCalendarSync.signOut().catch(handleError);
  }, [handleError]);

  const customHeader = useCallback(
    () => (
      <>
        <CalendarNav />
        <div className={'mds-loader' + (isLoading ? ' mds-loader-visible' : '')}></div>
        <div className="mbsc-flex mbsc-flex-1-0 mbsc-justify-content-end">
          {isLoggedIn ? (
            <Button ref={buttonRef} onClick={openPopup}>
              My Calendars
            </Button>
          ) : (
            <Button onClick={signIn}>Sync my outlook calendars</Button>
          )}
          <Button onClick={navigate}>Today</Button>
        </div>
        <CalendarPrev />
        <CalendarNext />
      </>
    ),
    [isLoading, isLoggedIn, navigate, openPopup, signIn],
  );

  useEffect(() => {
    const onSignedIn = () => {
      setIsLoggedIn(true);
      outlookCalendarSync
        .getCalendars()
        .then((calendars: { name: string; id: string; isDefaultCalendar: boolean }[]) => {
          const newCalendarIds: string[] = [];
          const newCalendarData: { [key: string]: { checked: boolean } } = {};

          calendars.sort((c) => (c.isDefaultCalendar ? -1 : 1));

          for (const c of calendars) {
            newCalendarIds.push(c.id);
            newCalendarData[c.id] = { checked: true };
          }

          setCalendarIds(newCalendarIds);
          setCalendarData(newCalendarData);
          setCalendars(calendars);
          setLoading(true);
          return outlookCalendarSync.getEvents(newCalendarIds, startDate.current!, endDate.current!);
        })
        .then((events: MbscCalendarEvent[]) => {
          setEvents(events);
          setLoading(false);
        })
        .catch(handleError);
    };

    const onSignedOut = () => {
      setIsLoggedIn(false);
      setCalendars([]);
      setCalendarIds([]);
      setCalendarData({});
      setEvents([]);
      setPopupOpen(false);
    };

    // Init Outlook client
    outlookCalendarSync.init({
      clientId: '<YOUR_OUTLOOK_CLIENT_ID>',
      redirectUri: '<YOUR_OUTLOOK_REDIRECT_URI>',
      onSignedIn: onSignedIn,
      onSignedOut: onSignedOut,
    });
  }, [handleError]);

  return (
    <>
      <Eventcalendar
        data={myEvents}
        exclusiveEndDates={true}
        renderHeader={customHeader}
        selectedDate={mySelectedDate}
        view={view}
        onPageLoading={handlePageLoading}
        onSelectedDateChange={handleSelectedDateChange}
      ></Eventcalendar>
      <Popup
        anchor={myAnchor}
        contentPadding={false}
        display="anchored"
        isOpen={isPopupOpen}
        scrollLock={false}
        showOverlay={false}
        touchUi={false}
        width={400}
        onClose={handlePopupClose}
      >
        <div className="mbsc-form-group-inset">
          <div className="mbsc-form-group-title">My Calendars</div>
          {myCalendars.map((cal) => (
            <Switch label={cal.name} key={cal.id} value={cal.id} checked={calendarData[cal.id].checked} onChange={toggleCalendar} />
          ))}
        </div>
        <div className="mbsc-form-group-inset">
          <Button className="mbsc-button-block" onClick={signOut}>
            Log out of my account
          </Button>
        </div>
      </Popup>
      <Toast isOpen={isToastOpen} message={toastMessage} onClose={handleToastClose} />
    </>
  );
};
export default App;
