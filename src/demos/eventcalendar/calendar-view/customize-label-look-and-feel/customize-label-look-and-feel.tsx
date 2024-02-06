import {
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscCalendarEventData,
  MbscEventcalendarView,
  MbscEventClickEvent,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import './customize-label-look-and-feel.css';

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
      calendar: { labels: true },
    }),
    [],
  );

  const customLabel = useCallback((data: MbscCalendarEventData) => {
    const original = data.original!;
    if (data.isMultiDay) {
      return (
        <div style={{ background: original.color }} className="multi-day-event">
          {original!.title}
        </div>
      );
    } else {
      return (
        <>
          <div className="single-day-event-dot" style={{ background: original.color }}></div>
          <div className="single-day-event">{original.title}</div>
        </>
      );
    }
  }, []);

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  const onEventClick = useCallback((args: MbscEventClickEvent) => {
    setToastText(args.event.title);
    setToastOpen(true);
  }, []);

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
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
        renderLabel={customLabel}
        data={myEvents}
        view={myView}
        onEventClick={onEventClick}
      />
      <Toast message={toastText} isOpen={isToastOpen} onClose={handleToastClose} />
    </div>
  );
};
export default App;
