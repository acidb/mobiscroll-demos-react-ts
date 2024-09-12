import {
  Button,
  Eventcalendar,
  formatDate,
  getJson,
  MbscCalendarDayData,
  MbscCalendarEvent,
  MbscEventcalendarView,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import './customizing-day-header.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      agenda: {
        type: 'month',
        showEmptyDays: true,
      },
    }),
    [],
  );

  const addEvent = useCallback(
    (date: Date) => {
      const newEvent = {
        title: 'Event',
        start: date,
      };

      setEvents([...myEvents, newEvent]);
    },
    [myEvents],
  );

  const renderCustomDay = useCallback(
    (day: MbscCalendarDayData) => (
      <div className="mbsc-flex mbsc-flex-1-1 mbsc-align-items-center">
        <div className="mbsc-flex-1-1">
          <div>{formatDate('D MMM YYYY', day.date)}</div>
        </div>
        <Button className="mds-custom-day-header-btn" color="primary" startIcon="plus" variant="outline" onClick={() => addEvent(day.date)}>
          Add event
        </Button>
      </div>
    ),
    [addEvent],
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

  return <Eventcalendar className="mds-custom-day-header" view={myView} data={myEvents} renderDay={renderCustomDay} />;
};
export default App;
