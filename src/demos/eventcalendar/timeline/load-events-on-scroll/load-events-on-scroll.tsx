import {
  Eventcalendar,
  formatDate,
  getJson,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscResource,
  MbscVirtualLoadEvent,
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
  const [isToastOpen, setToastOpen] = useState(false);
  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: 'month',
        resolutionHorizontal: 'hour',
      },
    }),
    [],
  );

  const myResources: MbscResource[] = useMemo(
    () => [
      { id: 1, name: 'Resource 1', color: '#FF5733' },
      { id: 2, name: 'Resource 2', color: '#33FF57' },
      { id: 3, name: 'Resource 3', color: '#3357FF' },
      { id: 4, name: 'Resource 4', color: '#FF33A6' },
      { id: 5, name: 'Resource 5', color: '#FFC300' },
      { id: 6, name: 'Resource 6', color: '#DAF7A6' },
      { id: 7, name: 'Resource 7', color: '#581845' },
      { id: 8, name: 'Resource 8', color: '#900C3F' },
      { id: 9, name: 'Resource 9', color: '#C70039' },
      { id: 10, name: 'Resource 10', color: '#FF5733' },
      { id: 11, name: 'Resource 11', color: '#33FFBD' },
      { id: 12, name: 'Resource 12', color: '#FFC300' },
      { id: 13, name: 'Resource 13', color: '#FF33F6' },
      { id: 14, name: 'Resource 14', color: '#33FF57' },
      { id: 15, name: 'Resource 15', color: '#33A6FF' },
      { id: 16, name: 'Resource 16', color: '#DAF7A6' },
      { id: 17, name: 'Resource 17', color: '#581845' },
      { id: 18, name: 'Resource 18', color: '#900C3F' },
      { id: 19, name: 'Resource 19', color: '#C70039' },
      { id: 20, name: 'Resource 20', color: '#FF33F6' },
      { id: 21, name: 'Resource 21', color: '#FF5733' },
      { id: 22, name: 'Resource 22', color: '#33FF57' },
      { id: 23, name: 'Resource 23', color: '#3357FF' },
      { id: 24, name: 'Resource 24', color: '#FF33A6' },
      { id: 25, name: 'Resource 25', color: '#FFC300' },
    ],
    [],
  );

  const handleVirtualLoading = useCallback((args: MbscVirtualLoadEvent) => {
    const start = formatDate('YYYY-MM-DD', args.viewStart);
    const end = formatDate('YYYY-MM-DD', args.viewEnd);

    getJson(
      'https://trial.mobiscroll.com/load-data-scroll/?start=' + start + '&end=' + end,
      (data) => {
        setEvents(data.events);
        setToastOpen(true);
      },
      'jsonp',
    );
  }, []);

  return (
    <>
      <Eventcalendar view={myView} data={myEvents} resources={myResources} onVirtualLoading={handleVirtualLoading} />
      <Toast message="Loading Resources..." duration={1000} isOpen={isToastOpen} onClose={handleToastClose} />
    </>
  );
};
export default App;
