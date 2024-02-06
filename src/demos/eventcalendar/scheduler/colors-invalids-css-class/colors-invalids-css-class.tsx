import {
  Eventcalendar,
  getJson,
  MbscCalendarColor,
  MbscCalendarEvent,
  MbscEventcalendarView /* localeImport */,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { FC, useEffect, useMemo, useState } from 'react';
import './colors-invalids-css-class.css';

setOptions({
  // localeJs,
  // themeJs
});

const myInvalid = [
  {
    start: '12:00',
    end: '13:00',
    title: 'Lunch break',
    recurring: {
      repeat: 'weekly',
      weekDays: 'MO,TU,WE,TH,FR',
    },
    cssClass: 'md-lunch-break-class mbsc-flex',
  },
];

const myColors: MbscCalendarColor[] = [
  {
    start: '03:00',
    end: '10:00',
    recurring: {
      repeat: 'weekly',
      weekDays: 'MO',
    },
    cssClass: 'md-rect-bg',
  },
  {
    start: '16:00',
    end: '22:00',
    recurring: {
      repeat: 'weekly',
      weekDays: 'TH',
    },
    cssClass: 'md-rect-bg',
  },
  {
    start: '15:00',
    end: '21:00',
    recurring: {
      repeat: 'weekly',
      weekDays: 'MO',
    },
    cssClass: 'md-stripes-bg',
  },
  {
    start: '04:00',
    end: '10:00',
    recurring: {
      repeat: 'weekly',
      weekDays: 'FR',
    },
    cssClass: 'md-stripes-bg',
  },
  {
    start: '02:00',
    end: '09:00',
    recurring: {
      repeat: 'weekly',
      weekDays: 'TU',
    },
    cssClass: 'md-dots-bg',
  },
  {
    start: '14:00',
    end: '20:00',
    recurring: {
      repeat: 'weekly',
      weekDays: 'WE',
    },
    cssClass: 'md-dots-bg',
  },
];

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      schedule: {
        allDay: false,
        type: 'week',
        startDay: 1,
        endDay: 5,
      },
    }),
    [],
  );

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/workday-events/',
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
      invalid={myInvalid}
      colors={myColors}
    />
  );
};
export default App;
