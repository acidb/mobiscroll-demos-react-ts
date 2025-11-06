import {
  Eventcalendar,
  getJson,
  hijriCalendar,
  jalaliCalendar,
  localeAr,
  localeFa,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscResource,
  Page,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { FC, useEffect, useMemo, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const myResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: 'Ryan',
        color: '#fdf500',
      },
      {
        id: 2,
        name: 'Kate',
        color: '#ff4600',
      },
      {
        id: 3,
        name: 'John',
        color: '#ff0101',
      },
      {
        id: 4,
        name: 'Mark',
        color: '#239a21',
      },
      {
        id: 5,
        name: 'Sharon',
        color: '#8f1ed6',
      },
      {
        id: 6,
        name: 'Ashley',
        color: '#01adff',
      },
    ],
    [],
  );

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: { type: 'day' },
    }),
    [],
  );

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/timeline-events/',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <Page>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Gregorian calendar</div>
        <Eventcalendar
          // drag
          data={myEvents}
          view={myView}
          resources={myResources}
        />
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Jalali calendar</div>
        <Eventcalendar
          // drag
          data={myEvents}
          view={myView}
          resources={myResources}
          calendarSystem={jalaliCalendar}
          locale={localeFa}
        />
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Hijri calendar</div>
        <Eventcalendar
          // drag
          data={myEvents}
          view={myView}
          resources={myResources}
          calendarSystem={hijriCalendar}
          locale={localeAr}
        />
      </div>
    </Page>
  );
};
export default App;
