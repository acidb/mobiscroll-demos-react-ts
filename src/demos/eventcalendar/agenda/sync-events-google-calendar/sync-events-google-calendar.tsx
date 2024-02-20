import { googleCalendarSync } from '@mobiscroll/calendar-integration';
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
import './sync-events-google-calendar.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [myCalendars, setCalendars] = useState<Array<{ summary: string; id: number }>>([]);
  const [calendarIds, setCalendarIds] = useState<string[]>([]);
  const [calendarData, setCalendarData] = useState<{ [key: string]: { checked: boolean } }>({});
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [myAnchor, setAnchor] = useState<HTMLElement>();
  const [mySelectedDate, setSelectedDate] = useState(new Date());
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const { current: view } = useRef<MbscEventcalendarView>({ agenda: { type: 'month' } });
  const buttonRef = useRef<Button>(null);
  const debounce = useRef<ReturnType<typeof setTimeout>>();
  const startDate = useRef<Date>();
  const endDate = useRef<Date>();

  const handleError = useCallback((resp: { error?: string; result: { error: { message: string } } }) => {
    setToastMessage(resp.error ? resp.error : resp.result.error.message);
    setToastOpen(true);
  }, []);

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  const popupClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handlePageLoading = useCallback(
    (args: MbscPageLoadingEvent) => {
      clearTimeout(debounce.current);
      startDate.current = args.viewStart;
      endDate.current = args.viewEnd;
      debounce.current = setTimeout(() => {
        if (googleCalendarSync.isSignedIn()) {
          setLoading(true);
          googleCalendarSync
            .getEvents(calendarIds, startDate.current!, endDate.current!)
            .then((resp) => {
              setEvents(resp);
              setLoading(false);
            })
            .catch(handleError);
        }
      }, 200);
    },
    [calendarIds, handleError],
  );

  const openPopup = useCallback(() => {
    setAnchor(buttonRef.current!.nativeElement);
    setOpen(true);
  }, []);

  const navigate = useCallback(() => {
    setSelectedDate(new Date());
  }, []);

  const handleSelectedDateChange = useCallback((event: MbscSelectedDateChangeEvent) => {
    setSelectedDate(new Date(event.date as string));
  }, []);

  const signIn = useCallback(() => {
    googleCalendarSync.signIn().catch(handleError);
  }, [handleError]);

  const signOut = useCallback(() => {
    googleCalendarSync.signOut().catch(handleError);
  }, [handleError]);

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
        googleCalendarSync
          .getEvents([calendarId], startDate.current!, endDate.current!)
          .then((events) => {
            setLoading(false);
            setEvents((oldEvents) => [...oldEvents, ...events]);
          })
          .catch(handleError);
      } else {
        setCalendarIds((calIds) => calIds.filter((item) => item !== calendarId));
        setEvents((oldEvents) => oldEvents.filter((item) => item.googleCalendarId !== calendarId));
      }
    },
    [calendarData, handleError],
  );

  const renderMyHeader = useCallback(
    () => (
      <>
        <CalendarNav />
        <div className="md-loader"></div>
        <div className="mbsc-flex mbsc-flex-1-0 mbsc-justify-content-end">
          {isLoggedIn ? (
            <Button ref={buttonRef} onClick={openPopup}>
              My Calendars
            </Button>
          ) : (
            <Button onClick={signIn}>Sync my google calendars</Button>
          )}
          <Button onClick={navigate}>Today</Button>
        </div>
        <CalendarPrev />
        <CalendarNext />
      </>
    ),
    [isLoggedIn, navigate, openPopup, signIn],
  );

  useEffect(() => {
    const onSignedIn = () => {
      setIsLoggedIn(true);
      googleCalendarSync
        .getCalendars()
        .then((calendars) => {
          const newCalendarIds: string[] = [];
          const calData: { [key: string]: { checked: boolean } } = {};

          calendars.sort((c: { primary: boolean }) => (c.primary ? -1 : 1));

          for (const c of calendars) {
            newCalendarIds.push(c.id);
            calData[c.id] = { checked: true };
          }

          setCalendarIds(newCalendarIds);
          setCalendarData(calData);
          setCalendars(calendars);
          setLoading(true);
          return googleCalendarSync.getEvents(newCalendarIds, startDate.current!, endDate.current!);
        })
        .then((events) => {
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
      setOpen(false);
    };

    // Init Google client
    googleCalendarSync.init({
      apiKey: '<YOUR_GOOGLE_API_KEY>',
      clientId: '<YOUR_GOOGLE_CLIENT_ID>',
      onSignedIn: onSignedIn,
      onSignedOut: onSignedOut,
    });
  }, [handleError]);

  return (
    <>
      <Eventcalendar
        cssClass={isLoading ? 'md-loading-events' : ''}
        view={view}
        data={myEvents}
        exclusiveEndDates={true}
        selectedDate={mySelectedDate}
        renderHeader={renderMyHeader}
        onPageLoading={handlePageLoading}
        onSelectedDateChange={handleSelectedDateChange}
      ></Eventcalendar>
      <Popup
        isOpen={isOpen}
        anchor={myAnchor}
        onClose={popupClose}
        width={400}
        touchUi={false}
        showOverlay={false}
        scrollLock={false}
        contentPadding={false}
        display="anchored"
      >
        <div className="mbsc-form-group-inset">
          <div className="mbsc-form-group-title">My Calendars</div>
          {myCalendars.map((cal) => (
            <Switch label={cal.summary} key={cal.id} value={cal.id} checked={calendarData[cal.id].checked} onChange={toggleCalendar} />
          ))}
        </div>
        <div className="mbsc-form-group-inset">
          <Button className="mbsc-button-block" onClick={signOut}>
            Log out of my account
          </Button>
        </div>
      </Popup>
      <Toast isOpen={isToastOpen} message={toastMessage} onClose={handleCloseToast} />
    </>
  );
};
export default App;
