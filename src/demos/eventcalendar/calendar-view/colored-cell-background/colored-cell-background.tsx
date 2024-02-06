import { Eventcalendar, getJson, MbscCalendarColor, MbscCalendarEvent, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useEffect, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const myColors: MbscCalendarColor[] = [
  {
    start: 'dyndatetime(y,m,0)',
    end: 'dyndatetime(y,m,1)',
    background: '#fde4c880',
  },
  {
    start: 'dyndatetime(y,m,17)',
    end: 'dyndatetime(y,m,20)',
    background: '#d5f1ea80',
  },
  {
    date: 'dyndatetime(y,m,29)',
    background: '#ffdbdb80',
  },
  {
    date: 'dyndatetime(y,m+1,3)',
    background: '#fbedd080',
  },
  {
    date: 'dyndatetime(y,m+1,10)',
    background: '#fbedd080',
  },
  {
    background: '#d6e81e1a',
    recurring: {
      repeat: 'monthly',
      day: -1,
    },
  },
];

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);

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
      colors={myColors}
    />
  );
};
export default App;
