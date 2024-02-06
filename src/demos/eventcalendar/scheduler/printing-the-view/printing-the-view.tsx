import { print } from '@mobiscroll/print';
import {
  Button,
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscEventcalendarView,
  Page,
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

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      schedule: { type: 'week' },
    }),
    [],
  );

  const printView = useCallback(() => {
    inst!.print();
  }, [inst]);

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
    <Page>
      <Button onClick={printView}>Print scheduler</Button>
      <Eventcalendar
        // drag
        data={myEvents}
        view={myView}
        ref={setInst}
        modules={MY_MODULES}
      />
    </Page>
  );
};
export default App;
