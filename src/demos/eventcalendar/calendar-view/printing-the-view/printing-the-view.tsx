import { print } from '@mobiscroll/print';
import { Button, Eventcalendar, getJson, MbscCalendarEvent, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useCallback, useEffect, useState } from 'react';

const MY_MODULES = [print];

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [inst, setInst] = useState<Eventcalendar | null>(null);

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const printView = useCallback(() => {
    inst!.print();
  }, [inst]);

  return (
    <>
      <Button onClick={printView}>Print calendar</Button>
      <Eventcalendar
        // drag
        data={myEvents}
        ref={setInst}
        modules={MY_MODULES}
      />
    </>
  );
};

export default App;
