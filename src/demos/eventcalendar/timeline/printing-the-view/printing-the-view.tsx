import { print } from '@mobiscroll/print';
import {
  Button,
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscResource,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';

const MY_MODULES = [print];

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [inst, setInst] = useState<Eventcalendar | null>(null);
  const myResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: 'Flatiron Room',
        color: '#fdf500',
      },
      {
        id: 2,
        name: 'The Capital City',
        color: '#ff0101',
      },
      {
        id: 3,
        name: 'Heroes Square',
        color: '#01adff',
      },
      {
        id: 4,
        name: 'Thunderdome',
        color: '#ff4600',
      },
      {
        id: 5,
        name: 'King’s Landing',
        color: '#239a21',
      },
      {
        id: 6,
        name: 'Gathering Field',
        color: '#8f1ed6',
      },
    ],
    [],
  );

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: 'week',
        allDay: false,
        startDay: 1,
        endDay: 5,
      },
    }),
    [],
  );

  const printView = useCallback(() => {
    inst!.print();
  }, [inst]);

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/daily-weekly-events/',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <>
      <Button onClick={printView}>Print timeline</Button>
      <Eventcalendar
        // drag
        data={myEvents}
        resources={myResources}
        view={myView}
        ref={setInst}
        modules={MY_MODULES}
      />
    </>
  );
};

export default App;
