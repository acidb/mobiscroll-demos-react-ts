import {
  Button,
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscCalendarEventData,
  MbscEventcalendarView,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import './event-content-customization.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>();

  const myParticipants: { [key: number]: { name: string; img: string } } = useMemo(
    () => ({
      1: { name: 'Barry L.', img: 'https://img.mobiscroll.com/demos/m1.png' },
      2: { name: 'Hortense T.', img: 'https://img.mobiscroll.com/demos/f1.png' },
      3: { name: 'Carl H.', img: 'https://img.mobiscroll.com/demos/m2.png' },
    }),
    [],
  );

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      calendar: { type: 'week' },
      agenda: { type: 'day' },
    }),
    [],
  );

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  const add = useCallback((data: MbscCalendarEvent) => {
    setToastMessage(data.title + ' clicked');
    setToastOpen(true);
  }, []);

  const customEventContent = useCallback(
    (data: MbscCalendarEventData) => {
      const original = data.original!;
      return (
        <>
          <div>{data.title}</div>
          <div className="mds-agenda-event-content mbsc-flex mbsc-align-items-center">
            <img className="mds-agenda-event-avatar" src={myParticipants[original.participant].img} />
            <div className="mbsc-flex-1-0">{myParticipants[original.participant].name}</div>
            <Button className="mds-agenda-event-btn" color="secondary" onClick={() => add(original)}>
              Add participant
            </Button>
          </div>
        </>
      );
    },
    [add, myParticipants],
  );

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/custom-events/',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <>
      <Eventcalendar renderEventContent={customEventContent} data={myEvents} view={myView} />
      <Toast message={toastMessage} isOpen={isToastOpen} onClose={handleCloseToast} />
    </>
  );
};
export default App;
