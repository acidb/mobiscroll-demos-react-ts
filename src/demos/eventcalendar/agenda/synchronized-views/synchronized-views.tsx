import {
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscSelectedDateChangeEvent,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import './synchronized-views.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [mySelectedDate, setSelectedDate] = useState<Date>(new Date());
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);

  const monthView = useMemo<MbscEventcalendarView>(
    () => ({
      calendar: { popover: false, labels: false },
    }),
    [],
  );

  const dayView = useMemo<MbscEventcalendarView>(
    () => ({
      agenda: { type: 'day' },
    }),
    [],
  );

  const handleDateChange = useCallback((event: MbscSelectedDateChangeEvent) => {
    setSelectedDate(new Date(event.date as string));
  }, []);

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
    <div className="mbsc-grid md-demo-synchronized-views">
      <div className="mbsc-row mbsc-no-padding">
        <div className="mbsc-col-md-4 mbsc-col-12">
          <Eventcalendar view={monthView} data={myEvents} selectedDate={mySelectedDate} onSelectedDateChange={handleDateChange} />
        </div>
        <div className="mbsc-col-md-8 mbsc-col-12 md-col-right">
          <Eventcalendar view={dayView} data={myEvents} selectedDate={mySelectedDate} onSelectedDateChange={handleDateChange} />
        </div>
      </div>
    </div>
  );
};
export default App;
