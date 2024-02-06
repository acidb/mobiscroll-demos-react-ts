import { Eventcalendar, getJson, MbscCalendarEvent, setOptions, Toast /* localeImport */ } from '@mobiscroll/react';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastText, setToastText] = useState<string>();

  const myInvalid = useMemo(
    () => [
      {
        recurring: {
          repeat: 'weekly',
          weekDays: 'SA,SU',
        },
      },
      {
        allDay: true,
        start: 'dyndatetime(y,m,19)',
        end: 'dyndatetime(y,m,20)',
      },
      {
        allDay: true,
        start: 'dyndatetime(y,m,26)',
        end: 'dyndatetime(y,m,27)',
      },
    ],
    [],
  );

  const myView = useMemo(
    () => ({
      calendar: {
        labels: true,
      },
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

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/work-events/',
      (events: MbscCalendarEvent[]) => {
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
        invalid={myInvalid}
        onEventCreateFailed={handleEventCreateFailed}
        onEventUpdateFailed={handleEventUpdateFailed}
      />
      <Toast message={toastText} isOpen={isToastOpen} onClose={handleToastClose} />
    </div>
  );
};
export default App;
