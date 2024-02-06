import {
  Button,
  Eventcalendar,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscSelectedDateChangeEvent,
  Page,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useMemo, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const now = new Date();

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([
    {
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14),
      title: 'General orientation',
      color: '#35bb5a',
    },
  ]);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [isToastOpen, setToastOpen] = useState<boolean>(false);

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      agenda: {
        type: 'month',
      },
    }),
    [],
  );

  const handleSelectedDateChange = useCallback((args: MbscSelectedDateChangeEvent) => {
    setSelectedDate(new Date(args.date as string));
  }, []);

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

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
    setEvents((myEvents) => [...myEvents, newEvent]);
    setToastOpen(true);
  }, []);

  return (
    <Page>
      <Eventcalendar data={myEvents} view={myView} selectedDate={selectedDate} onSelectedDateChange={handleSelectedDateChange} />
      <div className="mbsc-button-group-block">
        <Button onClick={addEvent}>Add event to calendar</Button>
      </div>
      <Toast message="Event added" isOpen={isToastOpen} onClose={handleCloseToast} />
    </Page>
  );
};
export default App;
