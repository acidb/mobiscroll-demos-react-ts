import { Eventcalendar, MbscCalendarEvent, MbscEventcalendarView, MbscResource, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useCallback, useMemo } from 'react';
import './setting-row-height.css';

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
        start: 'dyndatetime(y,m,2)',
        end: 'dyndatetime(y,m,5)',
        title: 'Event 1',
        resource: 'res1',
      },
      {
        start: 'dyndatetime(y,m,9)',
        end: 'dyndatetime(y,m,15)',
        title: 'Event 2',
        resource: 'res1',
      },
      {
        start: 'dyndatetime(y,m,5)',
        end: 'dyndatetime(y,m,9)',
        title: 'Event 3',
        resource: 'res2',
      },
      {
        start: 'dyndatetime(y,m,8)',
        end: 'dyndatetime(y,m,13)',
        title: 'Event 4',
        resource: 'res3',
      },
      {
        start: 'dyndatetime(y,m,7)',
        end: 'dyndatetime(y,m,12)',
        title: 'Event 5',
        resource: 'res3',
      },
      {
        start: 'dyndatetime(y,m,3)',
        end: 'dyndatetime(y,m,10)',
        title: 'Event 6',
        resource: 'res4',
      },
      {
        start: 'dyndatetime(y,m,15)',
        end: 'dyndatetime(y,m,23)',
        title: 'Event 7',
        resource: 'res4',
      },
      {
        start: 'dyndatetime(y,m,12)',
        end: 'dyndatetime(y,m,17)',
        title: 'Event 8',
        resource: 'res5',
      },
      {
        start: 'dyndatetime(y,m,8)',
        end: 'dyndatetime(y,m,13)',
        title: 'Event 9',
        resource: 'res6',
      },
      {
        start: 'dyndatetime(y,m,20)',
        end: 'dyndatetime(y,m,27)',
        title: 'Event 10',
        resource: 'res7',
      },
      {
        start: 'dyndatetime(y,m,6)',
        end: 'dyndatetime(y,m,12)',
        title: 'Event 11',
        resource: 'res8',
      },
      {
        start: 'dyndatetime(y,m,18)',
        end: 'dyndatetime(y,m,25)',
        title: 'Event 12',
        resource: 'res8',
      },
    ],
    [],
  );

  const myResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 'gro1',
        name: 'Team 1',
        color: '#ff1717',
        eventCreation: false,
        children: [
          {
            id: 'res1',
            name: 'Ryan',
            color: '#1dab2f',
            title: 'Cloud System Engineer',
            img: 'https://img.mobiscroll.com/demos/m1.png',
          },
          {
            id: 'res2',
            name: 'Kate',
            color: '#e20000',
            title: 'Help Desk Specialist',
            img: 'https://img.mobiscroll.com/demos/f1.png',
          },
          {
            id: 'res3',
            name: 'John',
            color: '#4981d6',
            title: 'Application Developer',
            img: 'https://img.mobiscroll.com/demos/m2.png',
          },
        ],
      },
      {
        id: 'gro2',
        name: 'Team 2',
        eventCreation: false,
        children: [
          {
            id: 'res4',
            name: 'Mark',
            color: '#f7961e',
            title: 'Data Quality Manager',
            img: 'https://img.mobiscroll.com/demos/m3.png',
          },
          {
            id: 'res5',
            name: 'Sharon',
            color: '#34c8e0',
            title: 'Network Administrator',
            img: 'https://img.mobiscroll.com/demos/f2.png',
          },
        ],
      },
      {
        id: 'gro3',
        name: 'Team 3',
        color: '#af0000',
        eventCreation: false,
        children: [
          {
            id: 'res6',
            name: 'Emma',
            color: '#843100',
            title: 'Client Services Manager',
            img: 'https://img.mobiscroll.com/demos/f3.png',
          },
          {
            id: 'res7',
            name: 'Ashley',
            color: '#4caf00',
            title: 'Instructional Designer',
            img: 'https://img.mobiscroll.com/demos/f4.png',
          },
          {
            id: 'res8',
            name: 'Derek',
            color: '#7056ff',
            title: 'Architectural Engineer',
            img: 'https://img.mobiscroll.com/demos/m4.png',
          },
        ],
      },
    ],
    [],
  );

  const renderMyResource = useCallback(
    (resource: MbscResource) => (
      <div>
        {resource.children ? (
          <div>{resource.name}</div>
        ) : (
          <div className="md-timeline-row-height-cont">
            <div className="md-timeline-row-height-name">{resource.name}</div>
            <div className="md-timeline-row-height-title">{resource.title}</div>
            <img className="md-timeline-row-height-avatar" src={resource.img} alt="Avatar" />
          </div>
        )}
      </div>
    ),
    [],
  );

  return (
    <Eventcalendar
      className="md-timeline-row-height"
      view={myView}
      data={myEvents}
      resources={myResources}
      renderResource={renderMyResource}
      clickToCreate={true}
      dragToCreate={true}
      dragToMove={true}
      dragToResize={true}
    />
  );
};
export default App;
