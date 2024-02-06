import { Eventcalendar, getJson, MbscCalendarEvent, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useEffect, useMemo, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);

  const myResponsive = useMemo(
    () => ({
      xsmall: {
        view: {
          schedule: { type: 'day' },
        },
      },
      custom: {
        // Custom breakpoint
        breakpoint: 600,
        view: {
          schedule: { type: 'week' },
        },
      },
    }),
    [],
  );

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
      responsive={myResponsive}
    />
  );
};
export default App;
