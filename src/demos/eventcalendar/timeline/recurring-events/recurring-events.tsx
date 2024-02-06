import { Eventcalendar, MbscCalendarEvent, MbscEventcalendarView, MbscResource, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useMemo } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const myEvents = useMemo<MbscCalendarEvent[]>(
    () => [
      {
        recurring: {
          repeat: 'daily', // possible values: 'daily', 'weekly', 'monthly', 'yearly'
          from: '2021-06-01', // the start date of the occurrences
          until: '2021-07-20', // the end date of the occurrences
        },
        recurringException: ['2021-07-05', new Date(2021, 6, 6)], // can contain string or date object
        recurringExceptionRule: {
          repeat: 'monthly',
          day: 1,
        },
        title: 'Holiday',
        allDay: true,
        resource: [1, 2, 3, 4, 5],
      },
      {
        recurring: {
          repeat: 'weekly',
          weekDays: 'SA', // comma separated list of the week days, possible values: 'SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'
          interval: 2, // the time interval for the rule (every 2 weeks in this example)
        },
        title: 'Shopping day',
        resource: 4,
      },
      {
        recurring: {
          repeat: 'monthly',
          day: 15,
          count: 12, // the number of occurrences
        },
        title: 'Pay day',
        resource: 5,
      },
      {
        recurring: {
          repeat: 'yearly',
          day: 1,
          month: 1,
        },
        title: "New Year's Eve",
        resource: 2,
      },
    ],
    [],
  );

  const myResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: 'Resource A',
        color: '#fdf500',
      },
      {
        id: 2,
        name: 'Resource B',
        color: '#ff0101',
      },
      {
        id: 3,
        name: 'Resource C',
        color: '#01adff',
      },
      {
        id: 4,
        name: 'Resource D',
        color: '#239a21',
      },
      {
        id: 5,
        name: 'Resource E',
        color: '#ff4600',
      },
    ],
    [],
  );

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: { type: 'week' },
    }),
    [],
  );

  return (
    <Eventcalendar
      // drag
      data={myEvents}
      view={myView}
      resources={myResources}
    />
  );
};
export default App;
