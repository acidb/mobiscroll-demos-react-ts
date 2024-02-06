import {
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastText, setToastText] = useState<string>();

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      calendar: { popover: true, count: true },
    }),
    [],
  );

  const handlehandleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  const handleEventClick = useCallback((args: MbscEventClickEvent) => {
    setToastText(args.event.title);
    setToastOpen(true);
  }, []);

  return (
    <>
      <Eventcalendar
        // drag
        data={myEvents}
        view={myView}
        onEventClick={handleEventClick}
      />
      <Toast message={toastText} isOpen={isToastOpen} onClose={handlehandleCloseToast} />
    </>
  );
};
export default App;
