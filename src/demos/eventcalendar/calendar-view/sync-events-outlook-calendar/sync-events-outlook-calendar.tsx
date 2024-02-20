import { outlookCalendarSync } from '@mobiscroll/calendar-integration';
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
import './sync-events-outlook-calendar.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [myCalendars, setCalendars] = useState<Array<{ name: string; id: number }>>([]);
  const [calendarIds, setCalendarIds] = useState<string[]>([]);
  const [calendarData, setCalendarData] = useState<{ [key: string]: { checked: boolean; color: string; name: string } }>({});
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [editable, setEditable] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [primaryCalendarId, setPrimaryCalendarId] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string>('');
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [confirmEvent, setConfirmEvent] = useState<MbscCalendarEvent>();
  const [confirmOldEvent, setConfirmOldEvent] = useState<MbscCalendarEvent>();
  const [isUpdateConfirmOpen, setUpdateConfirmOpen] = useState(false);
  const [isDeleteConfirmOpen, setDeleteConfirmOpen] = useState(false);

  const { current: view } = useRef<MbscEventcalendarView>({ calendar: { labels: true } });

  const debounce = useRef<ReturnType<typeof setTimeout>>();
  const startDate = useRef<Date>();
  const endDate = useRef<Date>();

  const onError = useCallback((resp: { message: string }) => {
    setToastMessage(resp.message);
    setToastOpen(true);
  }, []);

  const extendDefaultEvent = useCallback(
    () => ({
      color: calendarData[primaryCalendarId].color,
    }),
    [calendarData, primaryCalendarId],
  );

  useEffect(() => {
    const onSignedIn = () => {
      setIsLoggedIn(true);
      outlookCalendarSync
        .getCalendars()
        .then((calendars) => {
          calendars.sort((c: { isDefaultCalendar: boolean }) => (c.isDefaultCalendar ? -1 : 1));

          const calData: { [key: string]: { name: string; color: string; checked: boolean } } = {};
          const primaryCalId = calendars[0].id;

          for (const c of calendars) {
            calData[c.id] = { name: c.name, color: c.hexColor, checked: c.id === primaryCalId };
          }

          setCalendarIds([primaryCalId]);
          setPrimaryCalendarId(primaryCalId);
          setCalendarData(calData);
          setCalendars(calendars);
          setLoading(true);

          return outlookCalendarSync.getEvents([primaryCalId], startDate.current!, endDate.current!);
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
    };

    // init outlook client
    outlookCalendarSync.init({
      clientId: '<YOUR_OUTLOOK_CLIENT_ID>',
      redirectUri: '<YOUR_OUTLOOK_REDIRECT_URI>',
      onSignedIn: onSignedIn,
      onSignedOut: onSignedOut,
    });
  }, [onError]);

  const signIn = useCallback(() => {
    outlookCalendarSync.signIn().catch(onError);
  }, [onError]);

  const signOut = useCallback(() => {
    outlookCalendarSync.signOut().catch(onError);
  }, [onError]);

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
        outlookCalendarSync
          .getEvents([calendarId], startDate.current!, endDate.current!)
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
        <div className="md-outlook-calendar-header">
          <CalendarPrev />
          <CalendarToday />
          <CalendarNext />
        </div>
      </>
    ),
    [],
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
            .getEvents(calendarIds, startDate.current!, endDate.current!)
            .then((events) => {
              setLoading(false);
              setEvents(events);
            })
            .catch(onError);
        }
      }, 200);
    },
    [calendarIds, onError],
  );

  const onEventCreate = useCallback(
    (args: MbscEventCreateEvent) => {
      if (outlookCalendarSync.isSignedIn()) {
        const event = args.event;
        outlookCalendarSync
          .addEvent(primaryCalendarId, event)
          .then((newEvent) => {
            newEvent.color = event.color;
            setEvents((oldEvents) => [...oldEvents, newEvent]);
            setToastMessage('Event created in "' + calendarData[primaryCalendarId].name + '" calendar');
            setToastOpen(true);
          })
          .catch((error) => {
            setEvents((oldEvents) => [...oldEvents]);
            onError(error);
          });
      }
    },
    [calendarData, onError, primaryCalendarId],
  );

  const onEventUpdate = useCallback((args: MbscEventUpdateEvent) => {
    if (outlookCalendarSync.isSignedIn()) {
      setConfirmEvent(args.event);
      setConfirmOldEvent(args.oldEvent);
      setUpdateConfirmOpen(true);
    }
  }, []);

  const onEventDelete = useCallback((args: MbscEventDeleteEvent) => {
    if (outlookCalendarSync.isSignedIn()) {
      setConfirmEvent(args.event);
      setUpdateConfirmOpen(true);
    }
    return false;
  }, []);

  const handleUpdateConfirmClose = useCallback(
    (result: boolean) => {
      if (result) {
        const calendarId = confirmEvent!.googleCalendarId;
        outlookCalendarSync
          .updateEvent(calendarId, confirmEvent!)
          .then(() => {
            setToastMessage('Event updated on "' + calendarData[calendarId].name + '" calendar');
            setToastOpen(true);
          })
          .catch((error) => {
            setEvents((oldEvents) => [...oldEvents.filter((item) => item.id !== confirmEvent!.id), confirmOldEvent!]);
            onError(error);
          });
      } else {
        setEvents((oldEvents) => [...oldEvents.filter((item) => item.id !== confirmEvent!.id), confirmOldEvent!]);
      }
      setUpdateConfirmOpen(false);
    },
    [calendarData, confirmEvent, confirmOldEvent, onError],
  );

  const handleDeleteConfirmClose = useCallback(
    (result: boolean) => {
      if (result) {
        const calendarId = confirmEvent!.googleCalendarId;
        outlookCalendarSync
          .deleteEvent(calendarId, confirmEvent!)
          .then(() => {
            setEvents((oldEvents) => oldEvents.filter((item) => item.id !== confirmEvent!.id));
            setToastMessage('Event deleted from "' + calendarData[calendarId].name + '" calendar');
            setToastOpen(true);
          })
          .catch(onError);
      }
      setDeleteConfirmOpen(false);
    },
    [calendarData, confirmEvent, onError],
  );

  const handleCloseToast = useCallback(() => setToastOpen(false), []);

  return (
    <Page className="md-sync-events-outlook-cont">
      <div className="md-sync-events-outlook-menu">
        {isLoggedIn ? (
          <div>
            <div className="mbsc-form-group-inset mbsc-align-center">
              <p className="mbsc-italic mbsc-txt-muted">
                Editing events sync back to your calendar when enabled. You'll be asked for confirmation on every action.
              </p>
            </div>
            <div className="mbsc-form-group-inset">
              <Switch label="Enable editing" checked={editable} onChange={toggleEditing} />
            </div>
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
          </div>
        ) : (
          <div>
            <div className="mbsc-form-group-inset mbsc-align-center">
              <p className="mbsc-italic mbsc-txt-muted">Log into your Outlook account to view and edit your Outlook Calendar events</p>
              <Button className="md-sync-events-outlook-button mbsc-button-block" onClick={signIn}>
                Sync my outlook calendars
              </Button>
            </div>
          </div>
        )}
      </div>
      <div className={'md-sync-events-outlook-calendar ' + (isLoading ? 'md-loading-events' : '')}>
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
          onPageLoading={onPageLoading}
          onEventCreate={onEventCreate}
          onEventUpdate={onEventUpdate}
          onEventDelete={onEventDelete}
        ></Eventcalendar>
      </div>
      <Toast message={toastMessage} isOpen={isToastOpen} onClose={handleCloseToast} />
      <Confirm
        isOpen={isUpdateConfirmOpen}
        title="Are you sure you want to update this event?"
        message="This action will affect your Outlook Calendar event."
        okText="Update"
        onClose={handleUpdateConfirmClose}
      />
      <Confirm
        isOpen={isDeleteConfirmOpen}
        title="Are you sure you want to delete this event?"
        message="This action will remove the event from your Outlook Calendar as well."
        okText="Delete"
        onClose={handleDeleteConfirmClose}
      />
    </Page>
  );
};
export default App;
