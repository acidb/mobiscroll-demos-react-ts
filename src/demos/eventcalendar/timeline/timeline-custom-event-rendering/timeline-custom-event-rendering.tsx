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
        bufferBefore: 30,
        bufferAfter: 35,
        start: 'dyndatetime(y,m,d,10,30)',
        end: 'dyndatetime(y,m,d,13)',
        title: 'Tire change',
        color: '#7a5886',
        taskType: 'material-repeat',
        resource: 1,
      },
      {
        bufferAfter: 40,
        bufferBefore: 30,
        start: 'dyndatetime(y,m,d,7)',
        end: 'dyndatetime(y,m,d,10)',
        title: 'Brake maintenance',
        color: '#9da721',
        taskType: 'cogs',
        resource: 2,
      },
      {
        bufferAfter: 45,
        bufferBefore: 30,
        start: 'dyndatetime(y,m,d,13,30)',
        end: 'dyndatetime(y,m,d,16,30)',
        title: 'Fluid maintenance',
        color: '#cd6957',
        taskType: 'cogs',
        resource: 1,
      },
      {
        bufferAfter: 35,
        bufferBefore: 30,
        start: 'dyndatetime(y,m,d,11)',
        end: 'dyndatetime(y,m,d,14)',
        title: 'Oil change',
        color: '#637e57',
        taskType: 'material-repeat',
        resource: 3,
      },
      {
        bufferAfter: 60,
        bufferBefore: 30,
        start: 'dyndatetime(y,m,d,8)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Engine repair',
        color: '#6c5d45',
        taskType: 'material-search',
        resource: 3,
      },
      {
        bufferAfter: 45,
        bufferBefore: 30,
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

  const myScheduleEvent = useCallback((args: MbscCalendarEventData) => {
    const ev = args.original!;
    const color = args.color;
    return (
      <div className="md-timeline-template-event" style={{ borderColor: color, background: color }}>
        <div className="md-timeline-template-event-cont">
          <span className={'mbsc-icon mbsc-font-icon mbsc-icon-' + ev.taskType} style={{ background: color }}></span>
          <span className="md-timeline-template-time" style={{ color: color }}>
            {args.start}
          </span>
          <span className="md-timeline-template-title">{ev.title}</span>
        </div>
      </div>
    );
  }, []);

  const myBeforeBuffer = useCallback((args: MbscCalendarEventData) => {
    const event = args.original!;
    console.log('event?', event);
    const color = event.color;

    return (
      <div className="md-buffer md-before-buffer" style={{ background: color }}>
        Prep
        <span className="md-buffer-time">{event.bufferBefore} min</span>
        <div className="md-buffer-tail" style={{ background: color }}></div>
      </div>
    );
  }, []);

  const myAfterBuffer = useCallback((args: MbscCalendarEventData) => {
    const event = args.original!;
    const color = event.color;

    return (
      <div className="md-buffer md-after-buffer" style={{ background: color }}>
        Inspection
        <span className="md-buffer-time">{event.bufferAfter} min</span>
        <div className="md-buffer-tail" style={{ background: color }}></div>
      </div>
    );
  }, []);

  const myDefaultEvent = useCallback(
    () => ({
      taskType: 'cogs',
      bufferAfter: 60,
      bufferBefore: 30,
      color: '#239a21',
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
      renderBufferBefore={myBeforeBuffer}
      renderBufferAfter={myAfterBuffer}
      extendDefaultEvent={myDefaultEvent}
      cssClass="md-timeline-template"
    />
  );
};
export default App;
