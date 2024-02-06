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
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const myResources = [
    {
      id: 1,
      name: 'Resource A',
      color: '#fdf500',
    },
    {
      id: 2,
      name: 'Resource B',
      color: '#ff0101',
    },
    {
      id: 3,
      name: 'Resource C',
      color: '#01adff',
    },
    {
      id: 4,
      name: 'Resource D',
      color: '#239a21',
    },
    {
      id: 5,
      name: 'Resource E',
      color: '#ff4600',
    },
  ];

  const handlePageLoading = useCallback((args: MbscPageLoadingEvent) => {
    const year = args.firstDay.getFullYear();
    const month = args.firstDay.getMonth();
    const day = args.firstDay.getDate();

    getJson(
      'https://trial.mobiscroll.com/weeklyevents/?year=' + year + '&month=' + month + '&day=' + day,
      (data: MbscCalendarEvent[]) => {
        const newEvents = [];

        for (const d of data) {
          newEvents.push({
            start: d.start,
            end: d.end,
            title: d.title,
            resource: d.resource,
          });
        }
        setEvents(newEvents);
        setToastOpen(true);
      },
      'jsonp',
    );
  }, []);

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: { type: 'day' },
    }),
    [],
  );

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);
  return (
    <>
      <Eventcalendar
        // drag
        data={myEvents}
        view={myView}
        resources={myResources}
        onPageLoading={handlePageLoading}
      />
      <Toast message="New events loaded" isOpen={isToastOpen} onClose={handleCloseToast} />
    </>
  );
};
export default App;
