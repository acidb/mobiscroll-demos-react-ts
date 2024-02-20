import { Eventcalendar, MbscCalendarEvent, MbscEventcalendarView, MbscResource, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useCallback, useMemo } from 'react';
import './resource-background.css';

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

  const myResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: 'Resource A - Row background with "background" property',
        color: '#e20000',
        background: 'rgba(108, 166, 166, 0.37)',
      },
      {
        id: 2,
        name: 'Resource B - Thicker borders with "cssClass" property',
        color: '#1dab2f',
        cssClass: 'md-tick-border',
      },
      {
        id: 3,
        name: 'Resource C',
        color: '#4981d6',
      },
      {
        id: 4,
        name: 'Resource D - Resource background with "cssClass" property',
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
        name: 'Resource H - Grid background with "cssClass" property',
        color: '#34c8e0',
        cssClass: 'md-row-only-bg'
      },
    ],
    [],
  );

  const myEvents = useMemo<MbscCalendarEvent[]>(
    () => [
      {
        start: 'dyndatetime(y,m,2)',
        end: 'dyndatetime(y,m,5)',
        title: 'Event 1',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,10,9)',
        end: 'dyndatetime(y,m,15,15)',
        title: 'Event 2',
        resource: 3,
      },
      {
        start: 'dyndatetime(y,m,12)',
        end: 'dyndatetime(y,m,14)',
        title: 'Event 3',
        resource: 4,
      },
      {
        start: 'dyndatetime(y,m,15,7)',
        end: 'dyndatetime(y,m,20,12)',
        title: 'Event 4',
        resource: 5,
      },
      {
        start: 'dyndatetime(y,m,3)',
        end: 'dyndatetime(y,m,10)',
        title: 'Event 5',
        resource: 6,
      },
      {
        start: 'dyndatetime(y,m,10,8)',
        end: 'dyndatetime(y,m,11,20)',
        title: 'Event 6',
        resource: 7,
      },
    ],
    [],
  );

  const customSidebar = useCallback(
    (resource: MbscResource) => (
      <div className="md-resource-bg-res-cont">
        {resource.name} Sidebar
      </div>
    ),
    [],
  );

  return (
    <Eventcalendar
      // drag
      view={myView}
      data={myEvents}
      resources={myResources}
      renderSidebar={customSidebar}
    />
  );
};

export default App;
