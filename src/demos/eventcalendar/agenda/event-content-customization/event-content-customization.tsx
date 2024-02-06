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
  const [toastText, setToastText] = useState<string>();

  const calView = useMemo<MbscEventcalendarView>(
    () => ({
      calendar: { type: 'week' },
      agenda: { type: 'day' },
    }),
    [],
  );

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  const getParticipant = useCallback((id: number) => {
    switch (id) {
      case 1:
        return {
          img: 'https://img.mobiscroll.com/demos/m1.png',
          name: 'Barry L.',
        };
      case 2:
        return {
          img: 'https://img.mobiscroll.com/demos/f1.png',
          name: 'Hortense T.',
        };
      case 3:
        return {
          img: 'https://img.mobiscroll.com/demos/m2.png',
          name: 'Carl H.',
        };
      default:
        return {
          img: '',
          name: '',
        };
    }
  }, []);

  const add = useCallback((data: MbscCalendarEvent) => {
    setToastText(data.title + ' clicked');
    setToastOpen(true);
  }, []);

  const customEventContent = useCallback(
    (data: MbscCalendarEventData) => {
      const original = data.original!;
      return (
        <>
          <div>{data.title}</div>
          <div className="md-custom-event-cont">
            <img className="md-custom-event-img" src={getParticipant(original.participant).img} />
            <div className="mbsc-custom-event-name">{getParticipant(original.participant).name}</div>
            <Button className="md-custom-event-btn" color="secondary" variant="outline" onClick={() => add(original)}>
              Add participant
            </Button>
          </div>
        </>
      );
    },
    [add, getParticipant],
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
    <div className="md-switching-view-cont">
      <div className="md-switching-view-cal-cont">
        <Eventcalendar renderEventContent={customEventContent} view={calView} data={myEvents} />
      </div>
      <Toast
        // theme
        message={toastText}
        isOpen={isToastOpen}
        onClose={handleCloseToast}
      />
    </div>
  );
};
export default App;
