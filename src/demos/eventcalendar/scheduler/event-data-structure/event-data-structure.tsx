import { Button, Eventcalendar, MbscCalendarEvent, MbscEventcalendarView, setOptions, Toast /* localeImport */ } from '@mobiscroll/react';
import { FC, useCallback, useMemo, useState } from 'react';

const now = new Date();

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([
    {
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14),
      title: 'General orientation',
      color: '#35bb5a',
    },
  ]);
  const [mySelectedDate, setSelectedDate] = useState<Date>();
  const [isToastOpen, setToastOpen] = useState<boolean>(false);

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      schedule: {
        type: 'day',
      },
    }),
    [],
  );

  const addEvent = useCallback(() => {
    const newEvent = {
      // base properties
      title: 'Product planning',
      color: '#56ca70',
      start: new Date(2018, 11, 21, 13),
      end: new Date(2018, 11, 21, 14),
      // add any property you'd like
      busy: true,
      description: 'Weekly meeting with team',
      location: 'Office',
    };

    setSelectedDate(new Date(2018, 11, 21));
    setEvents([...myEvents, newEvent]);
    setToastOpen(true);
  }, [myEvents]);

  return (
    <div>
      <Eventcalendar data={myEvents} view={myView} selectedDate={mySelectedDate} />
      <div className="mbsc-button-group-block">
        <Button onClick={addEvent}>Add event to calendar</Button>
      </div>
      <Toast message="Event added" isOpen={isToastOpen} onClose={handleCloseToast} />
    </div>
  );
};
export default App;
