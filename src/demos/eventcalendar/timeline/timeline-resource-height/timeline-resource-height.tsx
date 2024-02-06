import { Eventcalendar, MbscCalendarEvent, MbscEventcalendarView, MbscResource, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useMemo } from 'react';
import './timeline-resource-height.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        rowHeight: 'equal',
        type: 'week',
        timeCellStep: 240,
        timeLabelStep: 240,
      },
    }),
    [],
  );

  const myEvents = useMemo<MbscCalendarEvent[]>(
    () => [
      {
        start: 'dyndatetime(y,m,d,4)',
        end: 'dyndatetime(y,m,d,22)',
        title: 'Event1',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d,5)',
        end: 'dyndatetime(y,m,d,18)',
        title: 'Event2',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d,8)',
        end: 'dyndatetime(y,m,d,23,59)',
        title: 'Event3',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d+1,5)',
        end: 'dyndatetime(y,m,d+1,20)',
        title: 'Event4',
        resource: 2,
      },
      {
        start: 'dyndatetime(y,m,d+1,8)',
        end: 'dyndatetime(y,m,d+1,22)',
        title: 'Event5',
        resource: 2,
      },
      {
        start: 'dyndatetime(y,m,d+2,2)',
        end: 'dyndatetime(y,m,d+2,16)',
        title: 'Event6',
        resource: 4,
      },
      {
        start: 'dyndatetime(y,m,d+2,4)',
        end: 'dyndatetime(y,m,d+2,20)',
        title: 'Event7',
        resource: 4,
      },
      {
        start: 'dyndatetime(y,m,d+2,6)',
        end: 'dyndatetime(y,m,d+2,17)',
        title: 'Event8',
        resource: 4,
      },
      {
        start: 'dyndatetime(y,m,d+2,9)',
        end: 'dyndatetime(y,m,d+2,23)',
        title: 'Event9',
        resource: 4,
      },
    ],
    [],
  );

  const myResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: 'Flatiron Room',
        seats: 90,
        color: '#fdf500',
      },
      {
        id: 2,
        name: 'The Capital City',
        seats: 250,
        color: '#ff0101',
      },
      {
        id: 3,
        name: 'Heroes Square',
        seats: 400,
        color: '#01adff',
      },
      {
        id: 4,
        name: 'Thunderdome',
        seats: 1200,
        color: '#239a21',
      },
      {
        id: 5,
        name: 'King’s Landing',
        seats: 550,
        color: '#ff4600',
      },
      {
        id: 6,
        name: 'Gathering Field',
        seats: 900,
        color: '#8f1ed6',
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
      cssClass="md-timeline-height"
    />
  );
};

export default App;
