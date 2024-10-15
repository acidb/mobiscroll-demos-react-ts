import {
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  setOptions,
  Toast,
} from /* localeImport */ '@mobiscroll/react';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>();

  const myView = useMemo<MbscEventcalendarView>(() => ({ agenda: { type: 'month' } }), []);

  const handleEventClick = useCallback((args: MbscEventClickEvent) => {
    setToastMessage(args.event.title);
    setToastOpen(true);
  }, []);

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

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
    <>
      <Eventcalendar data={myEvents} view={myView} onEventClick={handleEventClick} />
      <Toast message={toastMessage} isOpen={isToastOpen} onClose={handleCloseToast} />
    </>
  );
};
export default App;
