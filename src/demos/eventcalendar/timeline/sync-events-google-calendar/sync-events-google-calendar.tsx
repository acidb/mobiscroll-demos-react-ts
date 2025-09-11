import { googleCalendarSync } from '@mobiscroll/calendar-integration';
import {
  Button,
  CalendarNav,
  CalendarNext,
  CalendarPrev,
  Confirm,
  Eventcalendar,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventCreateEvent,
  MbscEventDeleteEvent,
  MbscEventUpdateEvent,
  MbscPageLoadingEvent,
  MbscResource,
  MbscSelectedDateChangeEvent,
  Page,
  Popup,
  setOptions,
  Switch,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { ChangeEvent, FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
  const [myResources, setResources] = useState<MbscResource[]>([]);
  const [readonlyCalendars, setReadonlyCalendars] = useState<string[]>([]);
  const [myInvalids, setInvalids] = useState<Array<object>>([]);
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
  const [myAnchor, setAnchor] = useState<HTMLElement>();
  const [mySelectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [confirmEvent, setConfirmEvent] = useState<MbscCalendarEvent>();
  const [confirmOldEvent, setConfirmOldEvent] = useState<MbscCalendarEvent>();
  const [isUpdateConfirmOpen, setUpdateConfirmOpen] = useState(false);
  const [isDeleteConfirmOpen, setDeleteConfirmOpen] = useState(false);

  const buttonRef = useRef<Button | null>(null);

  const debounce = useRef<ReturnType<typeof setTimeout>>();
  const startDate = useRef<Date>();
  const endDate = useRef<Date>();

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: 'week',
        eventList: true,
      },
    }),
    [],
  );

  const onError = useCallback((resp: { error?: string; result: { error: { message: string } } }) => {
    setToastMessage(resp.error ? resp.error : resp.result.error.message);
    setToastOpen(true);
  }, []);

  const onPopupClose = useCallback(() => {
    setPopupOpen(false);
  }, []);

  const openPopup = useCallback(() => {
    setAnchor(buttonRef.current!.nativeElement);
    setPopupOpen(true);
  }, []);

  const navigate = useCallback(() => {
    setSelectedDate(new Date());
  }, []);

  const handleSelectedDateChange = useCallback((event: MbscSelectedDateChangeEvent) => {
    setSelectedDate(new Date(event.date as string));
  }, []);

  const signIn = useCallback(() => {
    googleCalendarSync.signIn().catch(onError);
  }, [onError]);

  const signOut = useCallback(() => {
    googleCalendarSync.signOut().catch(onError);
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
        googleCalendarSync
          .getEvents([calendarId], startDate.current!, endDate.current!)
          .then((events) => {
            const newResource = calendarData[calendarId];
            setLoading(false);
            setResources((resources) => [...resources, { id: calendarId, name: newResource.name, color: newResource.color }]);
            events.forEach((event: MbscCalendarEvent) => {
              event.resource = event.googleCalendarId;
            });
            setEvents((oldEvents) => [...oldEvents, ...events]);
          })
          .catch(onError);
      } else {
        setResources((resources) => resources.filter((item) => item.id !== calendarId));
        setCalendarIds((calIds) => calIds.filter((item) => item !== calendarId));
        setEvents((oldEvents) => oldEvents.filter((item) => item.googleCalendarId !== calendarId));
      }
    },
    [calendarData, onError],
  );

  const renderMyHeader = useCallback(
    () => (
      <>
        <CalendarNav className="md-sync-events-google-nav" />
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
        <div className="md-google-calendar-buttons">
          {isLoggedIn ? (
            <Button ref={buttonRef} onClick={openPopup} className="md-sync-events-google-button">
              My Calendars
            </Button>
          ) : (
            <Button onClick={signIn} className="md-sync-events-google-button">
              Sync my google calendars
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
              resp.forEach((event: MbscCalendarEvent) => {
                event.resource = event.googleCalendarId;
              });
              setEvents(resp);
              setLoading(false);
            })
            .catch(onError);
        }
      }, 200);
    },
    [calendarIds, onError],
  );

  const handleEventCreate = useCallback(
    (args: MbscEventCreateEvent) => {
      if (googleCalendarSync.isSignedIn()) {
        const event = args.event;
        const calendarId = event.resource;

        if (readonlyCalendars.indexOf(calendarId as string) !== -1) {
          setToastMessage('This calendar is readonly');
          setToastOpen(true);
        } else {
          googleCalendarSync
            .addEvent(calendarId as string, event)
            .then((newEvent) => {
              newEvent.resource = event.resource;
              setEvents((oldEvents) => [...oldEvents, newEvent]);
              setToastMessage('Event created in "' + calendarData[calendarId as string].name + '" calendar');
              setToastOpen(true);
            })
            .catch((error) => {
              setEvents((oldEvents) => [...oldEvents]);
              onError(error);
            });
        }
      }
    },
    [calendarData, onError, readonlyCalendars],
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
        googleCalendarSync
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

  useEffect(() => {
    const onSignedIn = () => {
      setIsLoggedIn(true);
      googleCalendarSync
        .getCalendars()
        .then((calendars) => {
          const newCalendarIds: Array<string> = [];
          const newResources: MbscResource[] = [];
          const calData: { [key: string]: { checked: boolean; color: string; name: string } } = {};
          const readonlyCals = [];

          calendars.sort((c: { primary: boolean }) => (c.primary ? -1 : 1));

          for (const c of calendars) {
            newCalendarIds.push(c.id);
            newResources.push({ id: c.id, name: c.summary, color: c.backgroundColor });
            calData[c.id] = { name: c.summary, color: c.backgroundColor, checked: true };
            if (!(c.accessRole === 'writer' || c.accessRole === 'owner')) {
              readonlyCals.push(c.id);
            }
          }

          setCalendarIds(newCalendarIds);
          setResources(newResources);
          setCalendarData(calData);
          setReadonlyCalendars(readonlyCals);
          setCalendars(calendars);
          setLoading(true);
          setInvalids([
            {
              recurring: {
                repeat: 'daily',
                interval: 1,
              },
              resource: readonlyCals,
            },
          ]);

          return googleCalendarSync.getEvents(newCalendarIds, startDate.current!, endDate.current!);
        })
        .then((events) => {
          events.forEach((event: MbscCalendarEvent) => {
            event.resource = event.googleCalendarId;
          });
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
      setResources([]);
      setPopupOpen(false);
    };

    // Init google client
    googleCalendarSync.init({
      apiKey: '<YOUR_GOOGLE_API_KEY>',
      clientId: '<YOUR_GOOGLE_CLIENT_ID>',
      onSignedIn: onSignedIn,
      onSignedOut: onSignedOut,
    });
  }, [onError]);

  return (
    <Page className={'md-sync-events-google-cont ' + (isLoading ? 'md-loading-events' : '')}>
      <Eventcalendar
        view={myView}
        data={myEvents}
        exclusiveEndDates={true}
        clickToCreate={editable}
        dragToCreate={editable}
        dragToMove={editable}
        dragToResize={editable}
        resources={myResources}
        invalid={myInvalids}
        selectedDate={mySelectedDate}
        renderHeader={renderMyHeader}
        onPageLoading={handlePageLoading}
        onEventCreate={handleEventCreate}
        onEventUpdate={handleEventUpdate}
        onEventDelete={handleEventDelete}
        onSelectedDateChange={handleSelectedDateChange}
      ></Eventcalendar>
      <Popup
        isOpen={isPopupOpen}
        anchor={myAnchor}
        onClose={onPopupClose}
        width={400}
        touchUi={false}
        showOverlay={false}
        scrollLock={false}
        contentPadding={false}
        display="anchored"
      >
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
          <Button className="md-sync-events-google-button mbsc-button-block" onClick={signOut}>
            Log out of my account
          </Button>
        </div>
      </Popup>
      <Toast message={toastMessage} isOpen={isToastOpen} onClose={handleCloseToast} />
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
