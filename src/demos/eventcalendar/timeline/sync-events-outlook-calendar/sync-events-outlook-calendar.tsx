import { outlookCalendarSync } from '@mobiscroll/calendar-integration';
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
  Page,
  Popup,
  setOptions,
  Switch,
  Toast,
} from '@mobiscroll/react';
import { ChangeEvent, FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
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

  const onError = useCallback((resp: { message: string }) => {
    setToastMessage(resp.message);
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
            const newResource = calendarData[calendarId];
            setLoading(false);
            setResources((resources) => [...resources, { id: calendarId, name: newResource.name, color: newResource.color }]);
            events.forEach((event: MbscCalendarEvent) => {
              event.resource = event.outlookCalendarId;
            });
            setEvents((oldEvents) => [...oldEvents, ...events]);
          })
          .catch(onError);
      } else {
        setResources((resources) => resources.filter((item) => item.id !== calendarId));
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
            .getEvents(calendarIds, startDate.current!, endDate.current!)
            .then((resp) => {
              resp.forEach((event: MbscCalendarEvent) => {
                event.resource = event.outlookCalendarId;
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

  const onEventCreate = useCallback(
    (args: MbscEventCreateEvent) => {
      if (outlookCalendarSync.isSignedIn()) {
        const event = args.event;
        const calendarId = event.resource;

        if (readonlyCalendars.indexOf(calendarId as string) !== -1) {
          setToastMessage('This calendar is readonly');
          setToastOpen(true);
        } else {
          outlookCalendarSync
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

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  useEffect(() => {
    const onSignedIn = () => {
      setIsLoggedIn(true);
      outlookCalendarSync
        .getCalendars()
        .then((calendars) => {
          const newCalendarIds: Array<string> = [];
          const newResources: MbscResource[] = [];
          const calData: { [key: string]: { name: string; color: string; checked: boolean } } = {};
          const readonlyCals = [];

          calendars.sort((c: { isDefaultCalendar: boolean }) => (c.isDefaultCalendar ? -1 : 1));

          for (const c of calendars) {
            newCalendarIds.push(c.id);
            newResources.push({ id: c.id, name: c.name, color: c.hexColor });
            calData[c.id] = { name: c.name, color: c.hexColor, checked: true };
            if (!c.canEdit) {
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

          return outlookCalendarSync.getEvents(newCalendarIds, startDate.current!, endDate.current!);
        })
        .then((events) => {
          events.forEach((event: MbscCalendarEvent) => {
            event.resource = event.outlookCalendarId;
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

    // init outlook client
    outlookCalendarSync.init({
      clientId: '<YOUR_OUTLOOK_CLIENT_ID>',
      redirectUri: '<YOUR_OUTLOOK_REDIRECT_URI>',
      onSignedIn: onSignedIn,
      onSignedOut: onSignedOut,
    });
  }, [onError]);

  return (
    <Page className={'md-sync-events-outlook-cont ' + (isLoading ? 'md-loading-events' : '')}>
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
        onPageLoading={onPageLoading}
        onEventCreate={onEventCreate}
        onEventUpdate={onEventUpdate}
        onEventDelete={onEventDelete}
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
      </Popup>
      <Toast isOpen={isToastOpen} message={toastMessage} onClose={handleToastClose} />
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
