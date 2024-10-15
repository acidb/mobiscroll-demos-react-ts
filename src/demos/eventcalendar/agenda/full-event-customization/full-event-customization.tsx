import {
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscCalendarEventData,
  MbscEventcalendarView,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import './full-event-customization.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);

  const myView = useMemo<MbscEventcalendarView>(() => ({ agenda: { type: 'month' } }), []);

  const customEvent = useCallback(
    (data: MbscCalendarEventData) => (
      <div className="mbsc-flex mbsc-flex-1-1">
        <img className="mds-agenda-event-img" alt={data.title} src={'https://img.mobiscroll.com/demos/' + data.original!.img} />
        <div className="mbsc-flex-1-1">
          <div className="mds-agenda-event-title">{data.title}</div>
          <div className="mbsc-flex">
            <div className="mds-agenda-event-location mbsc-flex-1-1">
              <div className="mds-agenda-event-label">Location</div>
              <div>{data.original!.location}</div>
            </div>
            <div className="mds-agenda-event-time">
              <div className="mds-agenda-event-label">Time</div>
              <div>{data.start}</div>
            </div>
          </div>
        </div>
      </div>
    ),
    [],
  );

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/agenda-events/',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return <Eventcalendar renderEvent={customEvent} data={myEvents} view={myView} />;
};
export default App;
