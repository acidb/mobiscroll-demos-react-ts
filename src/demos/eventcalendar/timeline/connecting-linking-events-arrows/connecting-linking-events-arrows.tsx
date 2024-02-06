import {
  Eventcalendar,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventConnection,
  MbscResource,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { FC, useMemo } from 'react';
import './connecting-linking-events-arrows.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: 'month',
      },
    }),
    [],
  );

  const myEvents = useMemo<MbscCalendarEvent[]>(
    () => [
      {
        id: 1,
        start: 'dyndatetime(y,m,1)',
        end: 'dyndatetime(y,m,4)',
        title: 'Event 1',
        resource: 1,
      },
      {
        id: 2,
        start: 'dyndatetime(y,m,3)',
        end: 'dyndatetime(y,m,5)',
        title: 'Event 2',
        resource: 1,
      },
      {
        id: 3,
        start: 'dyndatetime(y,m,6)',
        end: 'dyndatetime(y,m,8)',
        title: 'Event 3',
        resource: 2,
      },
      {
        id: 4,
        start: 'dyndatetime(y,m,6)',
        end: 'dyndatetime(y,m,9)',
        title: 'Event 4',
        resource: 2,
      },
      {
        id: 5,
        start: 'dyndatetime(y,m,9)',
        end: 'dyndatetime(y,m,11)',
        title: 'Event 5',
        resource: 3,
      },
      {
        id: 6,
        start: 'dyndatetime(y,m,10)',
        end: 'dyndatetime(y,m,12)',
        title: 'Event 6',
        resource: 3,
      },
      {
        id: 7,
        start: 'dyndatetime(y,m,13)',
        end: 'dyndatetime(y,m,16)',
        title: 'Event 7',
        resource: 4,
      },
      {
        id: 8,
        start: 'dyndatetime(y,m,14)',
        end: 'dyndatetime(y,m,17)',
        title: 'Event 8',
        resource: 4,
      },
      {
        id: 9,
        start: 'dyndatetime(y,m,18)',
        end: 'dyndatetime(y,m,20)',
        title: 'Event 9',
        resource: 5,
      },
      {
        id: 10,
        start: 'dyndatetime(y,m,19)',
        end: 'dyndatetime(y,m,22)',
        title: 'Event 10',
        resource: 5,
      },
      {
        id: 11,
        start: 'dyndatetime(y,m,22)',
        end: 'dyndatetime(y,m,26)',
        title: 'Event 11',
        resource: 6,
      },
      {
        id: 12,
        start: 'dyndatetime(y,m,24)',
        end: 'dyndatetime(y,m,28)',
        title: 'Event 12',
        resource: 6,
      },
    ],
    [],
  );

  const myResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: 'Resource 1',
        color: '#fdf500',
      },
      {
        id: 2,
        name: 'Resource 2',
        color: '#ff4600',
      },
      {
        id: 3,
        name: 'Resource 3',
        color: '#ff0101',
      },
      {
        id: 4,
        name: 'Resource 4',
        color: '#239a21',
      },
      {
        id: 5,
        name: 'Resource 5',
        color: '#8f1ed6',
      },
      {
        id: 6,
        name: 'Resource 6',
        color: '#01adff',
      },
    ],
    [],
  );

  const myConnections = useMemo<MbscEventConnection[]>(
    () => [
      {
        from: 1,
        to: 2,
        color: 'green',
        arrow: 'bidirectional',
      },
      {
        from: 2,
        to: 3,
        color: 'orange',
        arrow: 'to',
      },
      {
        from: 3,
        to: 4,
        color: 'olive',
        arrow: 'to',
      },
      {
        from: 5,
        to: 4,
        color: 'blue',
        arrow: 'bidirectional',
        cssClass: 'dashed-line',
      },
      {
        from: 6,
        to: 8,
        color: 'black',
        arrow: 'from',
      },
      {
        from: 7,
        to: 6,
        color: 'purple',
        arrow: false,
      },
      {
        from: 8,
        to: 10,
        color: 'green',
        arrow: false,
      },
      {
        from: 9,
        to: 12,
        color: 'brown',
        arrow: 'from',
      },
      {
        from: 10,
        to: 9,
        color: 'red',
        arrow: false,
      },
      {
        from: 10,
        to: 11,
        color: 'orange',
        arrow: 'bidirectional',
      },
      {
        from: 12,
        to: 14,
        color: 'pink',
        arrow: 'to',
      },
    ],
    [],
  );

  return (
    <Eventcalendar
      // drag
      view={myView}
      data={myEvents}
      resources={myResources}
      connections={myConnections}
    />
  );
};

export default App;
