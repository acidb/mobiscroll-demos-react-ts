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
import './mobile-month-view.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>();

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      calendar: { type: 'month' },
      agenda: { type: 'month' },
    }),
    [],
  );

  const handleEventClick = useCallback((args: MbscEventClickEvent) => {
    setToastMessage(args.event.title);
    setToastOpen(true);
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
      <Eventcalendar
        // drag
        data={myEvents}
        view={myView}
        onEventClick={handleEventClick}
      />
      <Toast message={toastMessage} isOpen={isToastOpen} onClose={handleCloseToast} />
    </>
  );
};
export default App;
