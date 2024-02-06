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
  // themeJs,
  // localeJs
});

const App: FC = () => {
  const [events, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [isToastOpen, setToastOpen] = useState<boolean>(false);

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      schedule: { type: 'day' },
    }),
    [],
  );

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  const handlePageLoading = useCallback((args: MbscPageLoadingEvent) => {
    const year = args.firstDay.getFullYear();
    const month = args.firstDay.getMonth();
    const day = args.firstDay.getDate();

    getJson(
      'https://trial.mobiscroll.com/weeklyevents/?year=' + year + '&month=' + month + '&day=' + day,
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
      <Eventcalendar
        // drag
        data={events}
        view={myView}
        onPageLoading={handlePageLoading}
      />
      <Toast message="New events loaded" isOpen={isToastOpen} onClose={handleCloseToast} />
    </div>
  );
};
export default App;
