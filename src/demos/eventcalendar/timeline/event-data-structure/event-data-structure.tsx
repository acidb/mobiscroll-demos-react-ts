import {
  Button,
  Eventcalendar,
  MbscCalendarEvent,
  MbscEventcalendarView,
  Page,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useMemo, useRef, useState } from 'react';
import './event-data-structure.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([
    {
      start: 'dyndatetime(y,m,d,11)',
      end: 'dyndatetime(y,m,d,13)',
      title: 'General orientation',
      resource: 2,
      bufferBefore: 20,
      bufferAfter: 30,
    },
  ]);

  const myResources = [
    { id: 1, name: 'Resource A', color: '#fdf500' },
    { id: 2, name: 'Resource B', color: '#ff0101' },
    { id: 3, name: 'Resource C', color: '#01adff' },
    { id: 4, name: 'Resource D', color: '#239a21' },
    { id: 5, name: 'Resource E', color: '#ff4600' },
  ];

  const calInst = useRef<Eventcalendar>(null);

  const myView = useMemo<MbscEventcalendarView>(() => ({ timeline: { type: 'day' } }), []);

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  const addEvent = useCallback(() => {
    const newEvent = {
      // base properties
      title: 'Product planning',
      start: 'dyndatetime(y,m,d,15)',
      end: 'dyndatetime(y,m,d,17)',
      resource: 4,
      bufferBefore: 20,
      bufferAfter: 30,
      // add any property you'd like
      busy: true,
      description: 'Weekly meeting with team',
      location: 'Office',
    };

    setEvents((myEvents) => [...myEvents, newEvent]);
    setToastOpen(true);

    calInst.current?.navigateToEvent(newEvent);
  }, []);

  return (
    <Page className="mds-full-height">
      <div className="mds-full-height mbsc-flex-col">
        <div className="mbsc-flex-none">
          <Button onClick={addEvent} startIcon="plus">
            Add event to calendar
          </Button>
        </div>
        <div className="mds-overflow-hidden mbsc-flex-1-1">
          <Eventcalendar data={myEvents} ref={calInst} resources={myResources} view={myView} />
        </div>
      </div>
      <Toast message="Event added" isOpen={isToastOpen} onClose={handleToastClose} />
    </Page>
  );
};
export default App;
