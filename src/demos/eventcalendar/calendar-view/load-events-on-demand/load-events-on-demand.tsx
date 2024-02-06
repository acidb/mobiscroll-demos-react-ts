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

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [events, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [isToastOpen, setToastOpen] = useState(false);

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  const onPageLoading = useCallback((event: MbscPageLoadingEvent) => {
    const year = event.firstDay.getFullYear();
    const month = event.firstDay.getMonth();

    getJson(
      'https://trial.mobiscroll.com/monthlyevents/?year=' + year + '&month=' + month + '&vers=5',
      (data: MbscCalendarEvent[]) => {
        setEvents(data);
        setToastOpen(true);
      },
      'jsonp',
    );
  }, []);

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      calendar: { labels: true },
    }),
    [],
  );

  return (
    <>
      <Eventcalendar
        // drag
        data={events}
        view={myView}
        onPageLoading={onPageLoading}
      />
      <Toast message="New events loaded" isOpen={isToastOpen} onClose={handleCloseToast} />
    </>
  );
};
export default App;
