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
import { ChangeEvent, FC, useCallback, useEffect, useMemo, useState } from 'react';
import './customize-event-popover.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastText, setToastText] = useState<string>();

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      calendar: {
        labels: false,
        popover: true,
        popoverClass: 'custom-event-popover',
      },
    }),
    [],
  );

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  const getParticipant = (id: number) => {
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
  };

  const add = useCallback((ev: ChangeEvent<HTMLInputElement>, data: MbscCalendarEvent) => {
    ev.stopPropagation();
    setToastText(getParticipant(data.participant).name + "'s event clicked");
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
            <Button
              className="md-custom-event-btn"
              color="primary"
              variant="outline"
              onClick={(domEvent: ChangeEvent<HTMLInputElement>) => add(domEvent, original)}
            >
              Add participant
            </Button>
          </div>
        </>
      );
    },
    [add],
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
    <div>
      <Eventcalendar
        // drag
        renderEventContent={customEventContent}
        data={myEvents}
        view={myView}
      />
      <Toast message={toastText} isOpen={isToastOpen} onClose={handleToastClose} />
    </div>
  );
};
export default App;
