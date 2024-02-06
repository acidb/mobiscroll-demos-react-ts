import { Eventcalendar, MbscCalendarEvent, MbscEventcalendarView, MbscResource, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useMemo } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const day = now.getDate();

const App: FC = () => {
  const myEvents = useMemo<MbscCalendarEvent[]>(
    () => [
      { title: 'Product team mtg.', start: '10:00', end: '14:00', recurring: 'FREQ=WEEKLY;BYDAY=MO', color: '#913aa7' },
      { title: 'Employment (Semi-weekly)', start: '11:00', end: '17:00', recurring: 'FREQ=WEEKLY;BYDAY=WE', color: '#228c73' },
      { title: 'Pizza Night', start: '16:00', end: '22:00', recurring: 'FREQ=WEEKLY;BYDAY=FR', color: '#d7be0d' },

      // Resource 1
      {
        title: 'Board Meeting',
        start: new Date(year, month, day + 1, 8),
        end: new Date(year, month, day + 1, 16),
        color: '#cfc014',
        resource: 1,
      },
      {
        title: 'Stakeholder mtg.',
        start: new Date(year, month, day + 1, 8),
        end: new Date(year, month, day + 1, 18),
        color: '#a144f6',
        resource: 1,
      },

      // Resource 1, 2
      {
        title: 'Clever Conference',
        start: new Date(year, month, day - 2, 10),
        end: new Date(year, month, day - 2, 18),
        color: '#a71111',
        resource: [1, 2],
      },
      {
        title: 'Clever Conference',
        start: new Date(year, month, day - 1, 10),
        end: new Date(year, month, day - 1, 18),
        color: '#a71111',
        resource: [1, 2],
      },
      {
        title: 'Clever Conference',
        start: new Date(year, month, day, 10),
        end: new Date(year, month, day, 18),
        color: '#a71111',
        resource: [1, 2],
      },
      {
        title: 'Clever Conference',
        start: new Date(year, month, day + 1, 10),
        end: new Date(year, month, day + 1, 18),
        color: '#a71111',
        resource: [1, 2],
      },
      {
        title: 'Clever Conference',
        start: new Date(year, month, day + 2, 10),
        end: new Date(year, month, day + 2, 18),
        color: '#a71111',
        resource: [1, 2],
      },

      // Resource 3
      {
        title: 'Webinar',
        start: new Date(year, month, day - 1, 8),
        end: new Date(year, month, day - 1, 16),
        color: '#43be5f',
        resource: 3,
      },
      {
        title: 'Solution Brainstorm',
        start: new Date(year, month, day - 1, 12),
        end: new Date(year, month, day - 1, 20),
        color: '#7456ca',
        resource: 3,
      },

      // Resource 4
      {
        title: 'Status update meeting',
        start: new Date(year, month, day, 8),
        end: new Date(year, month, day, 14),
        color: '#00aabb',
        resource: 4,
      },
      {
        title: 'Friends binge marathon',
        start: new Date(year, month, day, 6),
        end: new Date(year, month, day, 16),
        color: '#7bde83',
        resource: 4,
      },
      {
        title: 'Mtg. with Martin',
        start: new Date(year, month, day, 10),
        end: new Date(year, month, day, 14),
        color: '#de3d83',
        resource: 4,
      },
      {
        title: 'Road-to-Success Workshop',
        start: new Date(year, month, day, 8),
        end: new Date(year, month, day, 18),
        color: '#d64646',
        resource: 4,
      },

      // Resource 3, 4
      {
        title: 'Business of Software Conference',
        start: new Date(year, month, day - 3, 10),
        end: new Date(year, month, day - 3, 18),
        color: '#ff6d42',
        resource: [3, 4],
      },
      {
        title: 'Business of Software Conference',
        start: new Date(year, month, day - 2, 10),
        end: new Date(year, month, day - 2, 18),
        color: '#ff6d42',
        resource: [3, 4],
      },
      {
        title: 'Business of Software Conference',
        start: new Date(year, month, day - 1, 10),
        end: new Date(year, month, day - 1, 18),
        color: '#ff6d42',
        resource: [3, 4],
      },
      {
        title: 'Business of Software Conference',
        start: new Date(year, month, day, 10),
        end: new Date(year, month, day, 18),
        color: '#ff6d42',
        resource: [3, 4],
      },
    ],
    [],
  );

  const myResources = useMemo<MbscResource[]>(
    () => [
      { id: 1, name: 'Jude Chester' },
      { id: 2, name: 'Natalie Racquel' },
      { id: 3, name: 'Jon Drake' },
      { id: 4, name: 'Meredith Chantelle' },
    ],
    [],
  );

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        maxEventStack: 2,
        type: 'week',
        resolutionHorizontal: 'day',
        eventList: true,
      },
    }),
    [],
  );

  return (
    <Eventcalendar
      // drag
      data={myEvents}
      view={myView}
      resources={myResources}
    />
  );
};

export default App;
