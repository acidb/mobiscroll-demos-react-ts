import {
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscCalendarEventData,
  MbscEventcalendarView,
  MbscResource,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import './variable-event-height.css';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: 'week',
        eventHeight: 'variable',
        startTime: '07:00',
        endTime: '21:00',
      },
    }),
    [],
  );

  const myResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: 'Franklin Hall',
        color: '#e20000',
      },
      {
        id: 2,
        name: 'Jefferson Commons',
        color: '#76e083',
      },
      {
        id: 3,
        name: 'Lincoln Residence',
        color: '#4981d6',
      },
      {
        id: 4,
        name: 'Roosevelt House',
        color: '#e25dd2',
      },
      {
        id: 5,
        name: 'Adams Hall',
        color: '#f7961e',
      },
      {
        id: 6,
        name: 'Washington Tower',
        color: '#d6d145',
      },
    ],
    [],
  );

  const customScheduleEventContent = useCallback(
    (event: MbscCalendarEventData) => (
      <>
        <div className="mds-variable-event-height-title">{event.title}</div>
        <div className="mds-variable-event-height-description">{event.original!.description}</div>
      </>
    ),
    [],
  );

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events-variable-height/',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <Eventcalendar
      view={myView}
      data={myEvents}
      resources={myResources}
      dragToCreate={false}
      clickToCreate={false}
      dragToMove={true}
      dragToResize={true}
      dragInTime={true}
      renderScheduleEventContent={customScheduleEventContent}
    />
  );
}

export default App;
