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

  const view = useMemo<MbscEventcalendarView>(
    () => ({
      agenda: { type: 'month' },
    }),
    [],
  );

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  const handlePageLoading = useCallback((event: MbscPageLoadingEvent) => {
    const year = event.firstDay.getFullYear();
    const month = event.firstDay.getMonth();

    getJson(
      'https://trial.mobiscroll.com/monthlyevents/?year=' + year + '&month=' + month + '&vers=5',
      (data: MbscCalendarEvent[]) => {
        const newEvents = [];

        for (const value of data) {
          newEvents.push({
            start: value.start,
            end: value.end || '',
            allDay: value.allDay,
            title: value.title,
            color: value.color,
          });
        }

        setEvents(newEvents);
        setToastOpen(true);
      },
      'jsonp',
    );
  }, []);

  return (
    <div>
      <Eventcalendar data={events} view={view} onPageLoading={handlePageLoading} />
      <Toast message="New events loaded" isOpen={isToastOpen} onClose={handleCloseToast} />
    </div>
  );
};
export default App;
