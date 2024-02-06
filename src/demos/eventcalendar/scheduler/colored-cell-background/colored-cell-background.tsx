import { Eventcalendar, getJson, MbscCalendarEvent, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useEffect, useMemo, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);

  const myView = useMemo<MbscEventcalendarView>(() => ({ schedule: { type: 'week' } }), []);

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <Eventcalendar
      // drag
      data={myEvents}
      view={myView}
      colors={[
        {
          date: 'dyndatetime(y,m,d-2)',
          background: '#f3c3d480',
        },
        {
          start: 'dyndatetime(y,m,d-1,7)',
          end: 'dyndatetime(y,m,d-1,14)',
          background: '#fde4c880',
        },
        {
          start: 'dyndatetime(y,m,d+1,12)',
          end: 'dyndatetime(y,m,d+2, 20)',
          background: '#d5f1ea80',
        },
        {
          start: 'dyndatetime(y,m,d+6,6)',
          end: 'dyndatetime(y,m,d+6,8)',
          background: '#d5eaf780',
        },
        {
          start: 'dyndatetime(y,m,d+10)',
          end: 'dyndatetime(y,m,d+13)',
          allDay: true,
          background: '#e7ffe280',
        },
        {
          start: 'dyndatetime(y,m,d+16,10)',
          end: 'dyndatetime(y,m,d+17,8)',
          background: '#fbedd080',
        },
        {
          start: '08:00',
          end: '10:00',
          background: '#ffdbdb80',
          recurring: {
            repeat: 'weekly',
            weekDays: 'WE',
          },
        },
      ]}
    />
  );
};
export default App;
