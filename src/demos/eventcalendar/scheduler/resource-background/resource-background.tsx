import { Eventcalendar, MbscCalendarEvent, MbscEventcalendarView, MbscResource, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useMemo } from 'react';
import './resource-background.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      schedule: {
        type: 'day',
      },
    }),
    [],
  );

  const myResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: 'Resource - Full column background with "background" property',
        color: '#e20000',
        background: 'rgba(71, 251, 34, 0.37)',
      },
      {
        id: 2,
        name: 'Resource B - Thicker borders with "cssClass" property',
        color: '#1dab2f',
        cssClass: 'md-col-tick-border',
      },
      {
        id: 3,
        name: 'Resource C',
        color: '#4981d6',
      },
      {
        id: 4,
        name: 'Resource D - Resource only background with "cssClass" property',
        color: '#e25dd2',
        cssClass: 'md-resource-only-bg',
      },
      {
        id: 5,
        name: 'Resource E - Different backgrounds with "cssClass" property',
        color: '#4981d6',
        cssClass: 'md-diff-custom-bg',
      },
      {
        id: 6,
        name: 'Resource F',
        color: '#d6d145',
      },
      {
        id: 7,
        name: 'Resource G - Grid only background with "cssClass" property',
        color: '#34c8e0',
        cssClass: 'md-colum-only-bg',
      },
    ],
    [],
  );

  const myEvents = useMemo<MbscCalendarEvent[]>(
    () => [
      {
        start: 'dyndatetime(y,m,d,8)',
        end: 'dyndatetime(y,m,d, 10)',
        title: 'Event 1',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d,9)',
        end: 'dyndatetime(y,m,d,15)',
        title: 'Event 2',
        resource: 3,
      },
      {
        start: 'dyndatetime(y,m,d,14)',
        end: 'dyndatetime(y,m,d,21)',
        title: 'Event 3',
        resource: 4,
      },
      {
        start: 'dyndatetime(y,m,d,7)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Event 4',
        resource: 5,
      },
      {
        start: 'dyndatetime(y,m,d,11)',
        end: 'dyndatetime(y,m,d,20)',
        title: 'Event 6',
        resource: 6,
      },
      {
        start: 'dyndatetime(y,m,d,4)',
        end: 'dyndatetime(y,m,d,10)',
        title: 'Event 7',
        resource: 2,
      },
      {
        start: 'dyndatetime(y,m,d,15)',
        end: 'dyndatetime(y,m,d,18)',
        title: 'Event 8',
        resource: 7,
      },
      {
        start: 'dyndatetime(y,m,d,12)',
        end: 'dyndatetime(y,m,d,14)',
        title: 'Event 9',
        resource: 4,
      },
      {
        start: 'dyndatetime(y,m,d,10)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Event 10',
        resource: 2,
      },
    ],
    [],
  );

  return (
    <Eventcalendar
      // drag
      view={myView}
      groupBy="date"
      data={myEvents}
      resources={myResources}
    />
  );
};

export default App;
