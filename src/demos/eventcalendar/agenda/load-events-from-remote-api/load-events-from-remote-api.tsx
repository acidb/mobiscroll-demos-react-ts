import { Eventcalendar, getJson, MbscCalendarEvent, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useEffect, useMemo, useState } from 'react';
import './load-events-from-remote-api.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);

  const myView = useMemo<MbscEventcalendarView>(() => ({ agenda: { type: 'month' } }), []);

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return <Eventcalendar data={myEvents} view={myView} />;
};

export default App;
