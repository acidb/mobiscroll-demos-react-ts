import { googleCalendarSync } from '@mobiscroll/calendar-integration';
import {
  Button,
  CalendarNav,
  CalendarNext,
  CalendarPrev,
  CalendarToday,
  Confirm,
  Eventcalendar,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventCreateEvent,
  MbscEventDeleteEvent,
  MbscEventUpdateEvent,
  MbscPageLoadingEvent,
  Page,
  setOptions,
  Switch,
  Toast,
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
  const [calendarData, setCalendarData] = useState<{ [key: string]: { checked: boolean; color: string; name: string } }>({});
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [editable, setEditable] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isHidden, setHidden] = useState<boolean>(true);
  const [primaryCalendarId, setPrimaryCalendarId] = useState<string>('');
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [confirmEvent, setConfirmEvent] = useState<MbscCalendarEvent>();
  const [confirmOldEvent, setConfirmOldEvent] = useState<MbscCalendarEvent>();
  const [isUpdateConfirmOpen, setUpdateConfirmOpen] = useState(false);
  const [isDeleteConfirmOpen, setDeleteConfirmOpen] = useState(false);

  const { current: view } = useRef<MbscEventcalendarView>({ calendar: { labels: true } });

  const debounce = useRef<ReturnType<typeof setTimeout>>();
  const startDate = useRef<Date>();
  const endDate = useRef<Date>();

  const handleError = useCallback((resp: { error?: string; result: { error: { message: string } } }) => {
    setToastMessage(resp.error ? resp.error : resp.result.error.message);
    setToastOpen(true);
  }, []);

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  const extendDefaultEvent = useCallback(
    () => ({
      color: calendarData[primaryCalendarId].color,
    }),
    [calendarData, primaryCalendarId],
  );

  const signIn = useCallback(() => {
    googleCalendarSync.signIn().catch(handleError);
  }, [handleError]);

  const signOut = useCallback(() => {
    googleCalendarSync.signOut().catch(handleError);
  }, [handleError]);

  const toggleEditing = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setEditable(ev.target.checked);
  }, []);

  const toggleCalendar = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      const checked = ev.target.checked;
      const calendarId = ev.target.value;
      calendarData[calendarId].checked = checked;
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
        <div className="md-google-calendar-header">
          <CalendarPrev />
          <CalendarToday />
          <CalendarNext />
        </div>
      </>
    ),
    [],
  );

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
            .then((events) => {
              setLoading(false);
              setEvents(events);
            })
            .catch(handleError);
        }
      }, 200);
    },
    [calendarIds, handleError],
  );

  const handleEventCreate = useCallback(
    (args: MbscEventCreateEvent) => {
      if (googleCalendarSync.isSignedIn()) {
        const event = args.event;
        googleCalendarSync
          .addEvent(primaryCalendarId, event)
          .then((newEvent) => {
            newEvent.color = event.color;
            setEvents((oldEvents) => [...oldEvents, newEvent]);

            setToastMessage('Event created in "' + calendarData[primaryCalendarId].name + '" calendar');
            setToastOpen(true);
          })
          .catch((error) => {
            setEvents((oldEvents) => [...oldEvents]);
            handleError(error);
          });
      }
    },
    [calendarData, handleError, primaryCalendarId],
  );

  const handleEventUpdate = useCallback((args: MbscEventUpdateEvent) => {
    if (googleCalendarSync.isSignedIn()) {
      setConfirmEvent(args.event);
      setConfirmOldEvent(args.oldEvent);
      setUpdateConfirmOpen(true);
    }
  }, []);

  const handleEventDelete = useCallback((args: MbscEventDeleteEvent) => {
    if (googleCalendarSync.isSignedIn()) {
      setConfirmEvent(args.event);
      setDeleteConfirmOpen(true);
    }
    return false;
  }, []);

  const handleUpdateConfirmClose = useCallback(
    (result: boolean) => {
      if (result) {
        const calendarId = confirmEvent!.googleCalendarId;
        googleCalendarSync
          .updateEvent(calendarId, confirmEvent!)
          .then(() => {
            setToastMessage('Event updated on "' + calendarData[calendarId].name + '" calendar');
            setToastOpen(true);
          })
          .catch((error) => {
            setEvents((oldEvents) => [...oldEvents.filter((item) => item.id !== confirmEvent!.id), confirmOldEvent!]);
            handleError(error);
          });
      } else {
        setEvents((oldEvents) => [...oldEvents.filter((item) => item.id !== confirmEvent!.id), confirmOldEvent!]);
      }
      setUpdateConfirmOpen(false);
    },
    [calendarData, confirmEvent, confirmOldEvent, handleError],
  );

  const handleDeleteConfirmClose = useCallback(
    (result: boolean) => {
      if (result) {
        const calendarId = confirmEvent!.googleCalendarId;
        googleCalendarSync
          .deleteEvent(calendarId, confirmEvent!)
          .then(() => {
            setEvents((oldEvents) => oldEvents.filter((item) => item.id !== confirmEvent!.id));
            setToastMessage('Event deleted from "' + calendarData[calendarId].name + '" calendar');
            setToastOpen(true);
          })
          .catch(handleError);
      }
      setDeleteConfirmOpen(false);
    },
    [calendarData, confirmEvent, handleError],
  );

  useEffect(() => {
    const onSignedIn = () => {
      setIsLoggedIn(true);
      googleCalendarSync
        .getCalendars()
        .then((calendars) => {
          calendars.sort((c: { primary: boolean }) => (c.primary ? -1 : 1));

          const calData: { [key: string]: { checked: boolean; color: string; name: string } } = {};
          const primaryCalId = calendars[0].id;

          for (const c of calendars) {
            calData[c.id] = { name: c.summary, color: c.backgroundColor, checked: c.id === primaryCalId };
          }

          setCalendarIds([primaryCalId]);
          setPrimaryCalendarId(primaryCalId);
          setCalendarData(calData);
          setCalendars(calendars);
          setLoading(true);

          return googleCalendarSync.getEvents([primaryCalId], startDate.current!, endDate.current!);
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
    };

    setHidden(false);

    // Init google client
    googleCalendarSync.init({
      apiKey: '<YOUR_GOOGLE_API_KEY>',
      clientId: '<YOUR_GOOGLE_CLIENT_ID>',
      onSignedIn: onSignedIn,
      onSignedOut: onSignedOut,
    });
  }, [handleError]);

  return (
    <Page className="md-sync-events-google-cont">
      <div className={'md-sync-events-google-menu ' + (isHidden ? 'mbsc-hidden' : '')}>
        {isLoggedIn ? (
          <div aria-hidden={!isLoggedIn}>
            <div className="mbsc-form-group-inset mbsc-align-center">
              <p className="mbsc-italic mbsc-txt-muted">
                Editing events sync back to your calendar when enabled. You&#39;ll be asked for confirmation on every action.
              </p>
            </div>
            <div className="mbsc-form-group-inset">
              <Switch label="Enable editing" checked={editable} onChange={toggleEditing} />
            </div>
            <div className="mbsc-form-group-inset md-sync-events-google-inset">
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
          </div>
        ) : (
          <div aria-hidden={isLoggedIn}>
            <div className="mbsc-form-group-inset mbsc-align-center">
              <p className="mbsc-italic mbsc-txt-muted">Log into your Google account to view and edit your Google Calendar events</p>
              <button className="mbsc-reset md-sync-events-google-button" onClick={signIn}>
                Sign in with Google
              </button>
            </div>
          </div>
        )}
      </div>
      <div className={'md-sync-events-google-calendar ' + (isLoading ? 'md-loading-events' : '')}>
        <div className="md-sync-events-overlay"></div>
        <Eventcalendar
          view={view}
          data={myEvents}
          exclusiveEndDates={true}
          clickToCreate={editable}
          dragToCreate={editable}
          dragToMove={editable}
          dragToResize={editable}
          extendDefaultEvent={extendDefaultEvent}
          renderHeader={renderMyHeader}
          onPageLoading={handlePageLoading}
          onEventCreate={handleEventCreate}
          onEventUpdate={handleEventUpdate}
          onEventDelete={handleEventDelete}
        />
      </div>
      <Toast isOpen={isToastOpen} message={toastMessage} onClose={handleToastClose} />
      <Confirm
        isOpen={isUpdateConfirmOpen}
        title="Are you sure you want to update this event?"
        message="This action will affect your Google Calendar event."
        okText="Update"
        onClose={handleUpdateConfirmClose}
      />
      <Confirm
        isOpen={isDeleteConfirmOpen}
        title="Are you sure you want to delete this event?"
        message="This action will remove the event from your Google Calendar as well."
        okText="Delete"
        onClose={handleDeleteConfirmClose}
      />
    </Page>
  );
};
export default App;
