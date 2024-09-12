import {
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscResource,
  MbscResourceExpandEvent,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useMemo, useState } from 'react';
import './load-resources-on-demand.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: { type: 'day' },
    }),
    [],
  );

  const [myResources, setResources] = useState<MbscResource[]>([
    {
      id: 1,
      name: 'Group 1',
      collapsed: true,
      eventCreation: false,
      children: [
        {
          id: 11,
          color: '#e20000',
          name: 'Resource 1',
        },
        {
          id: 12,
          color: '#76e083',
          name: 'Resource 2',
        },
        {
          id: 13,
          color: '#4981d6',
          name: 'Resource 3',
        },
      ],
    },
    {
      id: 2,
      name: 'Group 2',
      collapsed: true,
      eventCreation: false,
      children: [
        {
          id: 21,
          name: 'Loading...',
        },
      ],
    },
    {
      id: 3,
      name: 'Group 3',
      collapsed: true,
      eventCreation: false,
      children: [
        {
          id: 31,
          name: 'Loading...',
        },
      ],
    },
    {
      id: 4,
      name: 'Group 4',
      collapsed: true,
      eventCreation: false,
      children: [
        {
          id: 41,
          name: 'Loading...',
        },
      ],
    },
    {
      id: 5,
      name: 'Group 5',
      collapsed: true,
      eventCreation: false,
      children: [
        {
          id: 51,
          color: '#af0000',
          name: 'Resource 12',
        },
        {
          id: 52,
          color: '#446f1c',
          name: 'Resource 13',
        },
        {
          id: 53,
          color: '#1dab2f',
          name: 'Resource 14',
        },
      ],
    },
    {
      id: 6,
      name: 'Resource 17',
      color: '#167593',
    },
    {
      id: 7,
      name: 'Resource 18',
      color: '#93166c',
    },
    {
      id: 8,
      name: 'Resource 19',
      color: '#e5e923',
    },
    {
      id: 9,
      name: 'Resource 20',
      color: '#935028',
    },
  ]);

  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([
    {
      start: 'dyndatetime(y,m,d,10)',
      end: 'dyndatetime(y,m,d,13)',
      title: 'Event 14',
      resource: 6,
    },
    {
      start: 'dyndatetime(y,m,d,15)',
      end: 'dyndatetime(y,m,d,17,30)',
      title: 'Event 15',
      resource: 7,
    },
    {
      start: 'dyndatetime(y,m,d,9)',
      end: 'dyndatetime(y,m,d,11)',
      title: 'Event 16',
      resource: 8,
    },
    {
      start: 'dyndatetime(y,m,d,17)',
      end: 'dyndatetime(y,m,d,20)',
      title: 'Event 17',
      resource: 9,
    },
  ]);

  const loadChildResources = useCallback(
    (args: MbscResourceExpandEvent) => {
      const resource = args.resourceObj!;

      if (!resource!.loaded) {
        getJson(
          'https://trial.mobiscroll.com/load-resources/?res=' + args.resource,
          (data) => {
            const newEvents = [...myEvents, ...data.events];

            resource!.children = data.resources;
            resource!.loaded = true;

            setEvents(newEvents);
            setResources([...myResources]);
            setToastOpen(true);
          },
          'jsonp',
        );
      }
    },
    [myEvents, myResources],
  );

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  return (
    <>
      <Eventcalendar
        // drag
        view={myView}
        resources={myResources}
        data={myEvents}
        onResourceExpand={loadChildResources}
        className="md-load-resources-on-demand"
      />
      <Toast message="Resources loaded" isOpen={isToastOpen} onClose={handleCloseToast} />
    </>
  );
};
export default App;
