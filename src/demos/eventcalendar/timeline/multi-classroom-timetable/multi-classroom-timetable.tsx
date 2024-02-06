import {
  Eventcalendar,
  formatDate,
  getJson,
  // MbscCalendarDayData,
  MbscCalendarEvent,
  MbscCalendarEventData,
  MbscEventcalendarView,
  MbscResource,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import './multi-classroom-timetable.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: 'week',
        startDay: 1,
        endDay: 5,
        startTime: '08:00',
        endTime: '20:00',
        resolutionHorizontal: 'hour',
        resolutionVertical: 'day',
      },
    }),
    [],
  );

  const myResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: 'Green Hall',
      },
      {
        id: 2,
        name: 'White Hall',
      },
      {
        id: 3,
        name: 'Red Hall',
      },
      {
        id: 4,
        name: 'Blue Hall',
      },
      {
        id: 5,
        name: 'Yellow Hall',
      },
    ],
    [],
  );

  const myCustomDay = useCallback((day: { date: Date }) => {
    const date = day.date;
    return (
      <div className="md-timetable-day">
        <div className="md-timetable-day-name">{formatDate('DDDD', date)}</div>
        <div>{formatDate('MM/DD/YYY', date)}</div>
      </div>
    );
  }, []);

  const myCustomEvent = useCallback(
    (args: MbscCalendarEventData) => (
      <div>
        <div className="md-timetable-event-title">{args.title}</div>
        <div className="md-timetable-event-prop">Prof. {args.original!.prof}</div>
        <div className="md-timetable-event-class">{args.original!.class} year</div>
      </div>
    ),
    [],
  );

  const myDefaultEvent = useCallback(
    () => ({
      title: 'New class',
      prof: 'Stacia Jaden',
      class: 'Junior',
      color: '#ff0000',
    }),
    [],
  );

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/timetable-events/',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <Eventcalendar
      className="md-timetable"
      // drag
      view={myView}
      data={myEvents}
      resources={myResources}
      renderDay={myCustomDay}
      renderScheduleEventContent={myCustomEvent}
      extendDefaultEvent={myDefaultEvent}
    />
  );
};

export default App;
