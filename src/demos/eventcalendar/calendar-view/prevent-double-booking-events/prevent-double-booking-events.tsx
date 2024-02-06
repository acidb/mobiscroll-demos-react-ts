import { Eventcalendar, MbscCalendarEvent, MbscEventcalendarView, setOptions, Toast /* localeImport */ } from '@mobiscroll/react';
import { FC, useCallback, useMemo, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const now = new Date();
const y = now.getFullYear();
const m = now.getMonth();
const d = now.getDate();

const App: FC = () => {
  const [isToastOpen, setToastOpen] = useState<boolean>(false);

  const myEvents = useMemo<MbscCalendarEvent[]>(
    () => [
      {
        start: new Date(y, m, d - 3),
        end: new Date(y, m, d - 1),
        title: 'Event 1',
      },
      {
        start: new Date(y, m, d),
        end: new Date(y, m, d + 2),
        title: 'Event 2 (no event overlap)',
        overlap: false,
      },
      {
        start: new Date(y, m, d + 3),
        end: new Date(y, m, d + 5),
        title: 'Event 3',
      },
      {
        start: new Date(y, m, d + 5),
        end: new Date(y, m, d + 7),
        title: 'Event 4 (no event overlap)',
        overlap: false,
      },
    ],
    [],
  );

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      calendar: { type: 'month', labels: 'all' },
    }),
    [],
  );

  const handleEventFailed = useCallback(() => {
    setToastOpen(true);
  }, []);

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  return (
    <div>
      <Eventcalendar
        data={myEvents}
        view={myView}
        dragToCreate={true}
        dragToMove={true}
        dragToResize={true}
        clickToCreate={true}
        eventOverlap={false}
        exclusiveEndDates={true}
        onEventUpdateFailed={handleEventFailed}
        onEventCreateFailed={handleEventFailed}
      />
      <Toast message="Make sure not to double book" isOpen={isToastOpen} onClose={handleCloseToast} />
    </div>
  );
};
export default App;
