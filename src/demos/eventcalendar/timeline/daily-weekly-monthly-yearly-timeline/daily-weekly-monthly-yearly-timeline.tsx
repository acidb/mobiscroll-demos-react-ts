import {
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscResource,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { FC, useEffect, useMemo, useState } from 'react';
import './daily-weekly-monthly-yearly-timeline.css';

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
        allDay: false,
        startDay: 1,
        endDay: 5,
        timeCellStep: 60,
        timeLabelStep: 60,
      },
    }),
    [],
  );

  const myResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: 'Flatiron Room',
        color: '#fdf500',
      },
      {
        id: 2,
        name: 'The Capital City',
        color: '#ff0101',
      },
      {
        id: 3,
        name: 'Heroes Square',
        color: '#01adff',
      },
      {
        id: 4,
        name: 'Thunderdome',
        color: '#ff4600',
      },
      {
        id: 5,
        name: 'King’s Landing',
        color: '#239a21',
      },
      {
        id: 6,
        name: 'Gathering Field',
        color: '#8f1ed6',
      },
    ],
    [],
  );

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/daily-weekly-events/',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <Eventcalendar
      // drag
      view={myView}
      data={myEvents}
      resources={myResources}
    />
  );
};

export default App;
