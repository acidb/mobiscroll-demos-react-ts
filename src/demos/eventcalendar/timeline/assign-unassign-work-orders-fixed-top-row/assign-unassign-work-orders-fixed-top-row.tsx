import { Eventcalendar, MbscCalendarEvent, MbscEventcalendarView, MbscResource, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useMemo } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const myEvents = useMemo<MbscCalendarEvent[]>(
    () => [
      {
        start: 'dyndatetime(y,m,d,16)',
        end: 'dyndatetime(y,m,d,18)',
        title: 'Work order #85884',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d,15)',
        end: 'dyndatetime(y,m,d,18)',
        title: 'Work order #16543',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d,11)',
        end: 'dyndatetime(y,m,d,16)',
        title: 'Work order #52376',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d,14)',
        end: 'dyndatetime(y,m,d,18)',
        title: 'Work order #97268',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d+1,6)',
        end: 'dyndatetime(y,m,d+1,8)',
        title: 'Work order #48585',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d+1,9)',
        end: 'dyndatetime(y,m,d+1,12)',
        title: 'Work order #93534',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d+1,7)',
        end: 'dyndatetime(y,m,d+1,13)',
        title: 'Work order #34630',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d+1,12)',
        end: 'dyndatetime(y,m,d+1,14)',
        title: 'Work order #59332',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d+1,15)',
        end: 'dyndatetime(y,m,d+1,18)',
        title: 'Work order #20165',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d+1,13)',
        end: 'dyndatetime(y,m,d+1,17)',
        title: 'Work order #23446',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d+1,10)',
        end: 'dyndatetime(y,m,d+1,11)',
        title: 'Work order #07029',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d+1,6)',
        end: 'dyndatetime(y,m,d+1,9)',
        title: 'Work order #43339',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d+1,8)',
        end: 'dyndatetime(y,m,d+1,13)',
        title: 'Work order #44976',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d+2,6)',
        end: 'dyndatetime(y,m,d+2,8)',
        title: 'Work order #42752',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d+2,9)',
        end: 'dyndatetime(y,m,d+2,12)',
        title: 'Work order #55593',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d+2,7)',
        end: 'dyndatetime(y,m,d+2,13)',
        title: 'Work order #86969',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d+2,12)',
        end: 'dyndatetime(y,m,d+2,14)',
        title: 'Work order #39933',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d+2,15)',
        end: 'dyndatetime(y,m,d+2,18)',
        title: 'Work order #26899',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d+3,13)',
        end: 'dyndatetime(y,m,d+3,17)',
        title: 'Work order #86327',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d+3,10,8)',
        end: 'dyndatetime(y,m,d+3,11,14)',
        title: 'Work order #05183',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d+3,6)',
        end: 'dyndatetime(y,m,d+3,9)',
        title: 'Work order #60657',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d+3,8)',
        end: 'dyndatetime(y,m,d+3,13)',
        title: 'Work order #94701',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d+4,6)',
        end: 'dyndatetime(y,m,d+4,8)',
        title: 'Work order #23487',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d+4,9)',
        end: 'dyndatetime(y,m,d+4,12)',
        title: 'Work order #79070',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d+4,7)',
        end: 'dyndatetime(y,m,d+4,13)',
        title: 'Work order #33909',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d+1,11)',
        end: 'dyndatetime(y,m,d+1,17)',
        title: 'Work order #88532',
        resource: 2,
      },
      {
        start: 'dyndatetime(y,m,d+1,6)',
        end: 'dyndatetime(y,m,d+1,9)',
        title: 'Work order #26661',
        resource: 2,
      },
      {
        start: 'dyndatetime(y,m,d+2,15)',
        end: 'dyndatetime(y,m,d+2,18)',
        title: 'Work order #99287',
        resource: 2,
      },
      {
        start: 'dyndatetime(y,m,d+3,6)',
        end: 'dyndatetime(y,m,d+3,18)',
        title: 'Work order #63266',
        resource: 2,
      },
      {
        start: 'dyndatetime(y,m,d,10)',
        end: 'dyndatetime(y,m,d,18)',
        title: 'Work order #40352',
        resource: 3,
      },
      {
        start: 'dyndatetime(y,m,d+1,8)',
        end: 'dyndatetime(y,m,d+1,10)',
        title: 'Work order #74954',
        resource: 3,
      },
      {
        start: 'dyndatetime(y,m,d+1,10)',
        end: 'dyndatetime(y,m,d+1,13)',
        title: 'Work order #83242',
        resource: 3,
      },
      {
        start: 'dyndatetime(y,m,d+2,6)',
        end: 'dyndatetime(y,m,d+2,14)',
        title: 'Work order #40527',
        resource: 3,
      },
      {
        start: 'dyndatetime(y,m,d+3,11)',
        end: 'dyndatetime(y,m,d+3,13)',
        title: 'Work order #32765',
        resource: 3,
      },
      {
        start: 'dyndatetime(y,m,d+3,10)',
        end: 'dyndatetime(y,m,d+3,13)',
        title: 'Work order #35417',
        resource: 3,
      },
      {
        start: 'dyndatetime(y,m,d,8)',
        end: 'dyndatetime(y,m,d,10)',
        title: 'Work order #61083',
        resource: 4,
      },
      {
        start: 'dyndatetime(y,m,d+1,10)',
        end: 'dyndatetime(y,m,d+1,14)',
        title: 'Work order #95696',
        resource: 4,
      },
      {
        start: 'dyndatetime(y,m,d+1,14)',
        end: 'dyndatetime(y,m,d+1,16)',
        title: 'Work order #84834',
        resource: 4,
      },
      {
        start: 'dyndatetime(y,m,d+1,16)',
        end: 'dyndatetime(y,m,d+1,18)',
        title: 'Work order #75277',
        resource: 4,
      },
      {
        start: 'dyndatetime(y,m,d+2,12)',
        end: 'dyndatetime(y,m,d+2,14)',
        title: 'Work order #82197',
        resource: 4,
      },
      {
        start: 'dyndatetime(y,m,d+3,8)',
        end: 'dyndatetime(y,m,d+3,10)',
        title: 'Work order #22580',
        resource: 4,
      },
      {
        start: 'dyndatetime(y,m,d+3,16)',
        end: 'dyndatetime(y,m,d+3,18)',
        title: 'Work order #24495',
        resource: 4,
      },
      {
        start: 'dyndatetime(y,m,d+1,10)',
        end: 'dyndatetime(y,m,d+1,11)',
        title: 'Work order #52180',
        resource: 5,
      },
      {
        start: 'dyndatetime(y,m,d+1,11)',
        end: 'dyndatetime(y,m,d+1,12)',
        title: 'Work order #41989',
        resource: 5,
      },
      {
        start: 'dyndatetime(y,m,d+2,6)',
        end: 'dyndatetime(y,m,d+2,8)',
        title: 'Work order #68289',
        resource: 5,
      },
      {
        start: 'dyndatetime(y,m,d+2,9)',
        end: 'dyndatetime(y,m,d+2,10)',
        title: 'Work order #08025',
        resource: 5,
      },
      {
        start: 'dyndatetime(y,m,d+3,8)',
        end: 'dyndatetime(y,m,d+3,15)',
        title: 'Work order #71563',
        resource: 5,
      },
      {
        start: 'dyndatetime(y,m,d,11)',
        end: 'dyndatetime(y,m,d,15)',
        title: 'Work order #85448',
        resource: 6,
      },
      {
        start: 'dyndatetime(y,m,d+1,14)',
        end: 'dyndatetime(y,m,d+1,18)',
        title: 'Work order #00802',
        resource: 6,
      },
      {
        start: 'dyndatetime(y,m,d+2,7)',
        end: 'dyndatetime(y,m,d+2,9)',
        title: 'Work order #11659',
        resource: 6,
      },
      {
        start: 'dyndatetime(y,m,d+2,9)',
        end: 'dyndatetime(y,m,d+2,16)',
        title: 'Work order #79903',
        resource: 6,
      },
      {
        start: 'dyndatetime(y,m,d+3,16)',
        end: 'dyndatetime(y,m,d+3,18)',
        title: 'Work order #92281',
        resource: 6,
      },
      {
        start: 'dyndatetime(y,m,d+3,12)',
        end: 'dyndatetime(y,m,d+3,14)',
        title: 'Work order #17912',
        resource: 6,
      },
      {
        start: 'dyndatetime(y,m,d+1,6)',
        end: 'dyndatetime(y,m,d+1,14)',
        title: 'Work order #56823',
        resource: 7,
      },
      {
        start: 'dyndatetime(y,m,d+2,12)',
        end: 'dyndatetime(y,m,d+2,14)',
        title: 'Work order #56366',
        resource: 7,
      },
      {
        start: 'dyndatetime(y,m,d+2,14)',
        end: 'dyndatetime(y,m,d+2,16)',
        title: 'Work order #28671',
        resource: 7,
      },
      {
        start: 'dyndatetime(y,m,d+2,16)',
        end: 'dyndatetime(y,m,d+2,18)',
        title: 'Work order #60491',
        resource: 7,
      },
      {
        start: 'dyndatetime(y,m,d+3,17)',
        end: 'dyndatetime(y,m,d+3,18)',
        title: 'Work order #42901',
        resource: 7,
      },
      {
        start: 'dyndatetime(y,m,d,12)',
        end: 'dyndatetime(y,m,d,18)',
        title: 'Work order #90838',
        resource: 8,
      },
      {
        start: 'dyndatetime(y,m,d+2,6)',
        end: 'dyndatetime(y,m,d+2,12)',
        title: 'Work order #61919',
        resource: 8,
      },
      {
        start: 'dyndatetime(y,m,d+2,14)',
        end: 'dyndatetime(y,m,d+2,18)',
        title: 'Work order #59672',
        resource: 8,
      },
      {
        start: 'dyndatetime(y,m,d+3,6)',
        end: 'dyndatetime(y,m,d+3,8)',
        title: 'Work order #60923',
        resource: 8,
      },
      {
        start: 'dyndatetime(y,m,d+1,12)',
        end: 'dyndatetime(y,m,d+1,14)',
        title: 'Work order #04985',
        resource: 9,
      },
      {
        start: 'dyndatetime(y,m,d+1,15)',
        end: 'dyndatetime(y,m,d+1,18)',
        title: 'Work order #18580',
        resource: 9,
      },
      {
        start: 'dyndatetime(y,m,d+2,8)',
        end: 'dyndatetime(y,m,d+2,12)',
        title: 'Work order #60443',
        resource: 9,
      },
      {
        start: 'dyndatetime(y,m,d+2,8)',
        end: 'dyndatetime(y,m,d+2,14)',
        title: 'Work order #16725',
        resource: 10,
      },
      {
        start: 'dyndatetime(y,m,d+3,8)',
        end: 'dyndatetime(y,m,d+3,14)',
        title: 'Work order #44331',
        resource: 10,
      },
    ],
    [],
  );

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: 'week',
        resolutionHorizontal: 'hour',
        startTime: '06:00',
        endTime: '18:00',
        startDay: 1,
        endDay: 5,
      },
    }),
    [],
  );

  const myResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: 'Unassigned',
        color: '#c8cdcf',
        fixed: true,
      },
      {
        id: 2,
        name: 'James',
        color: '#76e083',
      },
      {
        id: 3,
        name: 'Joseph',
        color: '#4981d6',
      },
      {
        id: 4,
        name: 'David',
        color: '#d6d145',
      },
      {
        id: 5,
        name: 'Daniel',
        color: '#e25dd2',
      },
      {
        id: 6,
        name: 'Thomas',
        color: '#4caf00',
      },
      {
        id: 7,
        name: 'Michael',
        color: '#843100',
      },
      {
        id: 8,
        name: 'Samuel',
        color: '#843100',
      },
      {
        id: 9,
        name: 'Benjamin',
        color: '#42bcf5',
      },
      {
        id: 10,
        name: 'John',
        color: '#f542ef',
      },
    ],
    [],
  );

  return (
    <Eventcalendar
      data={myEvents}
      resources={myResources}
      dragToMove={true}
      dragInTime={false}
      dragToResize={false}
      view={myView}
      min={'dyndatetime(y,m,d,6)'}
    />
  );
};

export default App;
