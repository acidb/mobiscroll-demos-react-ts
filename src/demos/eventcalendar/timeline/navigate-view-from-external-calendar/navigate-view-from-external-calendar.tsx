import {
  Datepicker,
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscDatepickerChangeEvent,
  MbscDateType,
  MbscEventcalendarView,
  MbscResource,
  MbscSelectedDateChangeEvent,
  setOptions,
} from '@mobiscroll/react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import './navigate-view-from-external-calendar.css';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [mySelectedDate, setSelectedDate] = useState<MbscDateType>();
  const dayView = useMemo<MbscEventcalendarView>(() => ({ timeline: { type: 'day' } }), []);
  const myResources = useMemo<MbscResource[]>(
    () => [
      { id: 1, name: 'Resource 1', color: 'red' },
      { id: 2, name: 'Resource 2', color: 'orange' },
      { id: 3, name: 'Resource 3', color: 'blue' },
    ],
    [],
  );

  const handleDateChange = useCallback((args: MbscDatepickerChangeEvent) => {
    if (args.value) {
      setSelectedDate(args.value);
    }
  }, []);

  const handleSelectedDateChange = useCallback((args: MbscSelectedDateChangeEvent) => {
    setSelectedDate(args.date);
  }, []);

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/filter-resource-events/',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <div className="mds-external-nav-timeline mbsc-flex">
      <div className="mds-external-nav-dp">
        <Datepicker value={mySelectedDate} display="inline" onChange={handleDateChange} />
      </div>
      <div className="mds-external-nav-ec mbsc-flex-1-1">
        <Eventcalendar
          data={myEvents}
          selectedDate={mySelectedDate}
          view={dayView}
          resources={myResources}
          onSelectedDateChange={handleSelectedDateChange}
        />
      </div>
    </div>
  );
}

export default App;
