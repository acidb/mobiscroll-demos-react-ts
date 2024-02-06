import {
  Eventcalendar,
  MbscCalendarEvent,
  MbscCalendarEventData,
  MbscEventcalendarView,
  MbscResource,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useMemo } from 'react';
import './timeline-custom-event-rendering.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: 'day',
      },
    }),
    [],
  );

  const myEvents = useMemo<MbscCalendarEvent[]>(
    () => [
      {
        start: 'dyndatetime(y,m,d,10,30)',
        end: 'dyndatetime(y,m,d,13)',
        title: 'Tire change',
        color: '#7a5886',
        taskType: 'material-repeat',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d,7)',
        end: 'dyndatetime(y,m,d,10)',
        title: 'Brake maintenance',
        color: '#9da721',
        taskType: 'cogs',
        resource: 2,
      },
      {
        start: 'dyndatetime(y,m,d,13,30)',
        end: 'dyndatetime(y,m,d,16,30)',
        title: 'Fluid maintenance',
        color: '#cd6957',
        taskType: 'cogs',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d,11)',
        end: 'dyndatetime(y,m,d,14)',
        title: 'Oil change',
        color: '#637e57',
        taskType: 'material-repeat',
        resource: 3,
      },
      {
        start: 'dyndatetime(y,m,d,8)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Engine inspection',
        color: '#6c5d45',
        taskType: 'material-search',
        resource: 3,
      },
      {
        start: 'dyndatetime(y,m,d,14)',
        end: 'dyndatetime(y,m,d,19)',
        title: 'Car painting',
        color: '#50789d',
        taskType: 'material-format-paint',
        resource: 2,
      },
    ],
    [],
  );

  const myResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: 'Ryan',
        color: '#239a21',
      },
      {
        id: 2,
        name: 'Kate',
        color: '#01adff',
      },
      {
        id: 3,
        name: 'John',
        color: '#ff0101',
      },
    ],
    [],
  );

  const myScheduleEvent = useCallback((data: MbscCalendarEventData) => {
    const ev = data.original;
    const color = data.color;

    return (
      <div className="md-timeline-template-event" style={{ borderColor: color, background: color }}>
        <div className="md-timeline-template-event-cont">
          <span className={'mbsc-icon mbsc-font-icon mbsc-icon-' + ev!.taskType} style={{ background: color }}></span>
          <span className="md-timeline-template-time" style={{ color: color }}>
            {data.start}
          </span>
          <span className="md-timeline-template-title">{ev!.title}</span>
        </div>
      </div>
    );
  }, []);

  const myDefaultEvent = useCallback(
    () => ({
      taskType: 'cogs',
    }),
    [],
  );

  return (
    <Eventcalendar
      // drag
      view={myView}
      data={myEvents}
      resources={myResources}
      renderScheduleEvent={myScheduleEvent}
      extendDefaultEvent={myDefaultEvent}
      cssClass="md-timeline-template"
    />
  );
};
export default App;
