import { Button, Eventcalendar, MbscCalendarEvent, MbscEventcalendarView, setOptions, Toast /* localeImport */ } from '@mobiscroll/react';
import { FC, useCallback, useMemo, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([
    {
      start: 'dyndatetime(y,m,d,11)',
      end: 'dyndatetime(y,m,d,13)',
      title: 'General orientation',
      resource: 2,
    },
  ]);

  const [isToastOpen, setToastOpen] = useState(false);

  const myResources = [
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
  ];

  const view = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: 'day',
      },
    }),
    [],
  );

  const addEvent = () => {
    const newEvent = {
      // base properties
      title: 'Product planning',
      start: 'dyndatetime(y,m,d,15)',
      end: 'dyndatetime(y,m,d,17)',
      resource: 4,
      // add any property you'd like
      busy: true,
      description: 'Weekly meeting with team',
      location: 'Office',
    };

    setEvents([...myEvents, newEvent]);

    setToastOpen(true);
  };

  const handleCloseToast = useCallback(() => setToastOpen(false), []);

  return (
    <div>
      <Eventcalendar data={myEvents} view={view} resources={myResources} />
      <Toast message="Event added" isOpen={isToastOpen} onClose={handleCloseToast} />
      <div className="mbsc-button-group-block">
        <Button onClick={addEvent}>Add event to calendar</Button>
      </div>
    </div>
  );
};
export default App;
