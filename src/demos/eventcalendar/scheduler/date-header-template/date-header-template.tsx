import {
  Eventcalendar,
  formatDate,
  getJson,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscResource /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import './date-header-template.css';
// eslint-disable-next-line import/order
import { MbscCalendarDayData } from '@mobiscroll/react/dist/src/core/shared/calendar-view/calendar-day';

const milestones = [
  {
    date: 'dyndatetime(y,m,d-2)',
    name: 'Project review',
    color: '#f5da7b',
  },
  {
    date: 'dyndatetime(y,m,d-1)',
    name: 'Product shipping',
    color: '#acf3a3',
  },
  {
    date: 'dyndatetime(y,m,d+1)',
    name: 'Cycle finish',
    color: '#ff84a0',
  },
];

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      schedule: {
        type: 'week',
        allDay: false,
        startDay: 1,
        endDay: 5,
        startTime: '08:00',
        endTime: '17:00',
      },
    }),
    [],
  );

  const myResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: 'Ryan',
        color: '#f7c4b4',
        img: 'https://img.mobiscroll.com/demos/m1.png',
      },
      {
        id: 2,
        name: 'Kate',
        color: '#c6f1c9',
        img: 'https://img.mobiscroll.com/demos/f1.png',
      },
      {
        id: 3,
        name: 'John',
        color: '#e8d0ef',
        img: 'https://img.mobiscroll.com/demos/m2.png',
      },
    ],
    [],
  );

  const renderCustomDay = useCallback((args: MbscCalendarDayData) => {
    const date = args.date;
    const task: { date: string; name: string; color: string } = milestones.find((obj) => +new Date(obj.date) === +date)!;

    return (
      <div className="header-template-container">
        <div className="header-template-date">
          <div className="header-template-day-name">{formatDate('DDDD', date)}</div>
          <div className="header-template-day">{formatDate('MMMM DD', date)}</div>
        </div>
        <div className="header-template-task" style={{ background: task.color }}>
          {task.name}
        </div>
      </div>
    );
  }, []);

  const renderCustomResource = useCallback(
    (resource: MbscResource) => (
      <div className="header-resource-template-content">
        <img className="header-resource-avatar" src={resource.img} alt="Avatar" />
        <div className="header-resource-name">{resource.name}</div>
      </div>
    ),
    [],
  );

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/resource-events/',
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
      groupBy="date"
      renderDay={renderCustomDay}
      renderResource={renderCustomResource}
    />
  );
};
export default App;
