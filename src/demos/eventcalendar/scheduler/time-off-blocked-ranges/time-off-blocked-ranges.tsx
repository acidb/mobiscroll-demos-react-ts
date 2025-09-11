import { Eventcalendar, getJson, MbscCalendarEvent, MbscEventcalendarView, setOptions, Toast /* localeImport */ } from '@mobiscroll/react';
import { useCallback, useEffect, useMemo, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastText, setToastText] = useState<string>();

  const inv = useMemo(
    () => [
      {
        recurring: {
          repeat: 'weekly',
          weekDays: 'SA,SU',
        },
      },
      {
        start: '12:00',
        end: '13:00',
        title: 'Lunch break',
        recurring: {
          repeat: 'weekly',
          weekDays: 'MO,TU,WE,TH,FR',
        },
      },
      {
        start: '00:00',
        end: '08:00',
        recurring: {
          repeat: 'weekly',
          weekDays: 'MO,TU,WE,TH,FR',
        },
      },
      {
        start: '17:00',
        end: '23:59',
        recurring: {
          repeat: 'weekly',
          weekDays: 'MO,TU,WE,TH,FR',
        },
      },
    ],
    [],
  );

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      schedule: { type: 'week' },
    }),
    [],
  );

  const handleEventCreateFailed = useCallback(() => {
    setToastText("Can't create event on this date");
    setToastOpen(true);
  }, []);

  const handleEventUpdateFailed = useCallback(() => {
    setToastText("Can't add event on this date");
    setToastOpen(true);
  }, []);

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/workday-events/',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <div>
      <Eventcalendar
        data={myEvents}
        view={myView}
        dragToCreate={true}
        dragToMove={true}
        dragToResize={true}
        invalidateEvent="strict"
        invalid={inv}
        onEventCreateFailed={handleEventCreateFailed}
        onEventUpdateFailed={handleEventUpdateFailed}
      />
      <Toast message={toastText} isOpen={isToastOpen} onClose={handleCloseToast} />
    </div>
  );
}

export default App;
