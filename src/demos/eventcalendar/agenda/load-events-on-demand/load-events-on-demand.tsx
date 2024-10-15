import {
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscPageLoadingEvent,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useMemo, useState } from 'react';
import './load-events-on-demand.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [events, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [isToastOpen, setToastOpen] = useState<boolean>(false);

  const view = useMemo<MbscEventcalendarView>(() => ({ agenda: { type: 'month' } }), []);

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  const handlePageLoading = useCallback((event: MbscPageLoadingEvent) => {
    const year = event.firstDay.getFullYear();
    const month = event.firstDay.getMonth();

    getJson(
      'https://trial.mobiscroll.com/monthlyevents/?year=' + year + '&month=' + month + '&vers=5',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
        setToastOpen(true);
      },
      'jsonp',
    );
  }, []);

  return (
    <>
      <Eventcalendar data={events} view={view} onPageLoading={handlePageLoading} />
      <Toast message="New events loaded" isOpen={isToastOpen} onClose={handleToastClose} />
    </>
  );
};

export default App;
