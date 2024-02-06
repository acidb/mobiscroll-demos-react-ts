import { Eventcalendar, MbscCalendarEvent, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useMemo } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const now = new Date();
const myData: MbscCalendarEvent[] = [
  {
    title: 'Fixed event',
    start: new Date(now.getFullYear(), now.getMonth(), 18),
    end: new Date(now.getFullYear(), now.getMonth(), 19),
    color: '#9e9e9e',
    editable: false,
  },
  {
    title: 'Drag me',
    start: new Date(now.getFullYear(), now.getMonth(), 3),
    end: new Date(now.getFullYear(), now.getMonth(), 5),
    color: '#cc9900',
  },
  {
    title: 'Resize me',
    start: new Date(now.getFullYear(), now.getMonth(), 24),
    end: new Date(now.getFullYear(), now.getMonth(), 29),
    color: '#ca4747',
  },
  {
    title: 'Move me around',
    start: new Date(now.getFullYear(), now.getMonth(), 11),
    end: new Date(now.getFullYear(), now.getMonth(), 14),
    color: '#339966',
  },
];

const App: FC = () => {
  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      calendar: { labels: true },
    }),
    [],
  );

  return <Eventcalendar data={myData} view={myView} dragToCreate={true} dragToMove={true} dragToResize={true} dragTimeStep={15} />;
};

export default App;
