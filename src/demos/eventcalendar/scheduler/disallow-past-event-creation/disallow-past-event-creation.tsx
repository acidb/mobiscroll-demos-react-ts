import {
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventCreateEvent,
  MbscEventCreateFailedEvent,
  MbscEventUpdateEvent,
  MbscEventUpdateFailedEvent,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import './disallow-past-event-creation.css';

setOptions({
  // localeJs,
  // themeJs
});

const now = new Date();
const today = new Date(now.setMinutes(59));
const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [isToastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const myInvalid = useMemo(
    () => [
      {
        recurring: {
          repeat: 'daily',
          until: yesterday,
        },
      },
      {
        start: yesterday,
        end: today,
      },
    ],
    [],
  );

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      schedule: {
        type: 'week',
      },
    }),
    [],
  );

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
    if (start && start < now) {
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
    if ((start && start < now) || (occurrenceStart && occurrenceStart < now)) {
      return false;
    }
  }, []);

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
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
      <Toast isOpen={isToastOpen} message={toastMessage} onClose={handleCloseToast} />
    </>
  );
};

export default App;
