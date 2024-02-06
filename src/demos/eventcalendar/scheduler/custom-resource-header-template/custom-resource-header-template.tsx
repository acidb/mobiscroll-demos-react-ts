import { Eventcalendar, MbscCalendarEvent, MbscEventcalendarView, MbscResource, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useCallback, useMemo } from 'react';
import './custom-resource-header-template.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      schedule: {
        type: 'week',
        allDay: false,
        startDay: 1,
        endDay: 5,
        startTime: '05:00',
        endTime: '22:00',
      },
    }),
    [],
  );

  const myEvents = useMemo<MbscCalendarEvent[]>(
    () => [
      {
        start: 'dyndatetime(y,m,d-3,10)',
        end: 'dyndatetime(y,m,d-3,15)',
        title: 'Impact Training',
        resource: [2, 3],
        color: '#35bb5a',
      },
      {
        start: 'dyndatetime(y,m,d-2,10)',
        end: 'dyndatetime(y,m,d-2,15)',
        title: 'Impact Training',
        resource: [2, 3],
        color: '#35bb5a',
      },
      {
        start: 'dyndatetime(y,m,d, 8, 30)',
        end: 'dyndatetime(y,m,d, 10)',
        title: 'Quick mtg. with Martin',
        resource: 3,
        color: '#913aa7',
      },
      {
        start: 'dyndatetime(y,m,d,12)',
        end: 'dyndatetime(y,m,d,13)',
        title: 'General orientation',
        resource: [1, 2, 3],
        color: '#a71111',
      },
      {
        start: 'dyndatetime(y,m,d+1,10)',
        end: 'dyndatetime(y,m,d+1,11)',
        title: 'Product team mtg.',
        resource: [2, 3],
        color: '#6e7f29',
      },
      {
        start: 'dyndatetime(y,m,d+2,14)',
        end: 'dyndatetime(y,m,d+2,16)',
        title: 'Stakeholder mtg.',
        resource: 1,
        color: '#dcd234',
      },
      {
        start: 'dyndatetime(y,m,d+3,10)',
        end: 'dyndatetime(y,m,d+3,14)',
        title: 'Innovation mtg.',
        resource: [1, 2],
        color: '#de3d83',
      },
    ],
    [],
  );

  const myResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: 'Ryan',
        color: '#f7c4b4',
        description: 'Sales representative',
        img: 'https://img.mobiscroll.com/demos/m1.png',
      },
      {
        id: 2,
        name: 'Kate',
        color: '#c6f1c9',
        description: 'Web developer',
        img: 'https://img.mobiscroll.com/demos/f3.png',
      },
      {
        id: 3,
        name: 'John',
        color: '#e8d0ef',
        description: 'Territory sales manager',
        img: 'https://img.mobiscroll.com/demos/m2.png',
      },
    ],
    [],
  );

  const renderCustomResource = useCallback(
    (resource: MbscResource) => (
      <div className="resource-template-content">
        <div className="resource-name">{resource.name}</div>
        <div className="resource-description">{resource.description}</div>
        <img className="resource-avatar" src={resource.img} alt="Avatar" />
      </div>
    ),
    [],
  );

  return (
    <Eventcalendar
      // drag
      data={myEvents}
      resources={myResources}
      view={myView}
      renderResource={renderCustomResource}
    />
  );
};
export default App;
