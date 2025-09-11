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

const now = new Date();

const App: FC = () => {
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([
    {
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14),
      title: 'General orientation',
      color: '#35bb5a',
    },
  ]);

  const calInst = useRef<Eventcalendar>(null);

  const myView = useMemo<MbscEventcalendarView>(() => ({ calendar: { labels: true } }), []);

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  const addEvent = useCallback(() => {
    const newEvent = {
      // Base properties
      title: 'Product planning',
      color: '#56ca70',
      start: new Date(2018, 11, 21, 13),
      end: new Date(2018, 11, 21, 14),
      // Add any property you'd like
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
          <Eventcalendar data={myEvents} ref={calInst} view={myView} />
        </div>
      </div>
      <Toast message="Event added" isOpen={isToastOpen} onClose={handleToastClose} />
    </Page>
  );
};
export default App;
