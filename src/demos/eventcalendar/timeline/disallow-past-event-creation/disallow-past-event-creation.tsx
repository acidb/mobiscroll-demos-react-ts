import {
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventCreateEvent,
  MbscEventCreateFailedEvent,
  MbscEventUpdateEvent,
  MbscEventUpdateFailedEvent,
  MbscResource,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import './disallow-past-event-creation.css';

setOptions({
  // localeJs,
  // themeJs
});

const now = new Date(new Date().setMinutes(59));
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const myInvalid = useMemo(() => [{ recurring: { repeat: 'daily', until: yesterday } }, { start: today, end: now }], []);
  const myResources = useMemo<MbscResource[]>(
    () => [
      { id: 1, name: 'Resource A', color: '#e20000' },
      { id: 2, name: 'Resource B', color: '#76e083' },
      { id: 3, name: 'Resource C', color: '#4981d6' },
      { id: 4, name: 'Resource D', color: '#e25dd2' },
      { id: 5, name: 'Resource E', color: '#1dab2f' },
      { id: 6, name: 'Resource F', color: '#d6d145' },
    ],
    [],
  );

  const myView = useMemo<MbscEventcalendarView>(() => ({ timeline: { type: 'month' } }), []);

  const handleEventCreateFailed = useCallback((args: MbscEventCreateFailedEvent) => {
    if (!args.originEvent) {
      setToastMessage("Can't create event in the past");
      setToastOpen(true);
    }
  }, []);

  const handleEventUpdateFailed = useCallback((args: MbscEventUpdateFailedEvent) => {
    if (!args.oldEventOccurrence) {
      setToastMessage("Can't move event in the past");
      setToastOpen(true);
    }
  }, []);

  const handleEventCreate = useCallback((args: MbscEventCreateEvent) => {
    const oldEvent = args.originEvent;
    const start = oldEvent && oldEvent.start ? oldEvent.start : null;

    // Handle recurring events
    if (start && start < today) {
      setToastMessage("Can't move past event");
      setToastOpen(true);
      return false;
    }
  }, []);

  const handleEventUpdate = useCallback((args: MbscEventUpdateEvent) => {
    const oldEvent = args.oldEvent;
    const start = oldEvent && oldEvent.start ? oldEvent.start : null;
    const oldEventOccurrence = args.oldEventOccurrence;
    const occurrenceStart = oldEventOccurrence && oldEventOccurrence.start ? oldEventOccurrence.start : null;

    // Handle recurring events
    if ((start && start < today) || (occurrenceStart && occurrenceStart < today)) {
      return false;
    }
  }, []);

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/multiday-events/',
      (events) => {
        for (const event of events) {
          // Convert dates to date objects
          event.start = event.start ? new Date(event.start) : event.start;
          event.end = event.end ? new Date(event.end) : event.end;
          // Mark past events as fixed by setting the event.editable property to false
          event.editable = event.start && today < event.start;
        }
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <>
      <Eventcalendar
        className="md-disallow-past-event-creation"
        view={myView}
        data={myEvents}
        resources={myResources}
        invalid={myInvalid}
        clickToCreate={true}
        dragToCreate={true}
        dragToMove={true}
        dragToResize={true}
        onEventCreateFailed={handleEventCreateFailed}
        onEventUpdateFailed={handleEventUpdateFailed}
        onEventCreate={handleEventCreate}
        onEventUpdate={handleEventUpdate}
      />
      <Toast message={toastMessage} isOpen={isToastOpen} onClose={handleCloseToast} />
    </>
  );
};

export default App;
