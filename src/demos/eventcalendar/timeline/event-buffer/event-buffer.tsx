import { Eventcalendar, MbscCalendarEvent, MbscEventcalendarView, MbscResource, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useMemo } from 'react';

setOptions({
  // theme,
  // locale
});

const App: FC = () => {
  const myEvents = useMemo<MbscCalendarEvent[]>(
    () => [
      {
        bufferAfter: 30,
        start: 'dyndatetime(y,m,d,6)',
        end: 'dyndatetime(y,m,d,8)',
        title: 'Morning routine',
        resource: 1,
      },
      {
        bufferAfter: 120,
        bufferBefore: 30,
        start: 'dyndatetime(y,m,d,16)',
        end: 'dyndatetime(y,m,d,20)',
        title: 'Friends binge marathon',
        resource: 4,
      },
      {
        bufferAfter: 120,
        bufferBefore: 30,
        start: 'dyndatetime(y,m,d,13)',
        end: 'dyndatetime(y,m,d,21)',
        title: 'Mastering CSS class',
        resource: 2,
      },
      {
        bufferAfter: 10,
        bufferBefore: 15,
        start: 'dyndatetime(y,m,d,8)',
        end: 'dyndatetime(y,m,d,10)',
        title: 'Product team mtg.',
        resource: 2,
      },
      {
        bufferAfter: 20,
        bufferBefore: 30,
        start: 'dyndatetime(y,m,d,16,30)',
        end: 'dyndatetime(y,m,d,19, 30)',
        title: 'Cinema afternoon',
        resource: 3,
      },
      {
        bufferAfter: 10,
        bufferBefore: 10,
        start: 'dyndatetime(y,m,d,8,30)',
        end: 'dyndatetime(y,m,d,10)',
        title: 'Quick mtg. with Martin',
        resource: 3,
      },
      {
        bufferBefore: 45,
        start: 'dyndatetime(y,m,d,9,30)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Product team mtg.',
        resource: 4,
      },
    ],
    [],
  );

  const myResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: 'Resource 1',
        color: '#e20000',
      },
      {
        id: 2,
        name: 'Resource 2',
        color: '#76e083',
      },
      {
        id: 3,
        name: 'Resource 3',
        color: '#4981d6',
      },
      {
        id: 4,
        name: 'Resource 4',
        color: '#f7961e',
      },
    ],
    [],
  );

  const view = useMemo<MbscEventcalendarView>(() => ({ timeline: { type: 'day' } }), []);

  return (
    <Eventcalendar
      // drag
      showEventBuffer={true}
      data={myEvents}
      view={view}
      resources={myResources}
    />
  );
};
export default App;
