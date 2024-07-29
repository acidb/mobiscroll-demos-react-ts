import {
  Button,
  Eventcalendar,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscResource,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useMemo, useState } from 'react';
import './compare-resources-fixed-at-top.css';

setOptions({
  // localeJs,
  // themeJs
});

const resources: MbscResource[] = [
  {
    id: 1,
    name: 'Emma Smith',
    color: '#c8cdcf',
  },
  {
    id: 2,
    name: 'James Brown',
    color: '#76e083',
  },
  {
    id: 3,
    name: 'Olivia Miller',
    color: '#4981d6',
  },
  {
    id: 4,
    name: 'David Johnson',
    color: '#d6d145',
  },
  {
    id: 5,
    name: 'Sarah Jones',
    color: '#e25dd2',
  },
  {
    id: 6,
    name: 'Joseph Davis',
    color: '#62ab50',
  },
  {
    id: 7,
    name: 'Sophia Williams',
    color: '#eb5b34',
  },
  {
    id: 8,
    name: 'Daniel Wilson',
    color: '#7134eb',
  },
  {
    id: 9,
    name: 'Alice Clark',
    color: '#a1eb34',
  },
  {
    id: 10,
    name: 'Robert Taylor',
    color: '#9b77d9',
  },
  {
    id: 11,
    name: 'Anthony Lopez',
    color: '#6bede7',
  },
  {
    id: 12,
    name: 'Grace Moore',
    color: '#262f80',
  },
  {
    id: 13,
    name: 'Peter Jackson',
    color: '#788026',
  },
];

const App: FC = () => {
  const [myResources, setMyResources] = useState<MbscResource[]>(resources);
  const [fixedNr, setFixedNr] = useState<number>(0);
  const [fixedResources, setFixedResources] = useState<MbscResource[]>([]);
  const [isToastOpen, setIsToastOpen] = useState<boolean>(false);

  const myEvents = useMemo<MbscCalendarEvent[]>(
    () => [
      {
        start: 'dyndatetime(y,m,d,9)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Task 1',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d,15)',
        end: 'dyndatetime(y,m,d,17)',
        title: 'Task 2',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d-1,11)',
        end: 'dyndatetime(y,m,d-1,16)',
        title: 'Task 3',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d+1,14)',
        end: 'dyndatetime(y,m,d+1,17)',
        title: 'Task 4',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d+2,9)',
        end: 'dyndatetime(y,m,d+2,14)',
        title: 'Task 5',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,d,12)',
        end: 'dyndatetime(y,m,d,17)',
        title: 'Task 6',
        resource: 2,
      },
      {
        start: 'dyndatetime(y,m,d+1,9)',
        end: 'dyndatetime(y,m,d+1,14)',
        title: 'Task 7',
        resource: 2,
      },
      {
        start: 'dyndatetime(y,m,d-1,9)',
        end: 'dyndatetime(y,m,d-1,16)',
        title: 'Task 8',
        resource: 2,
      },
      {
        start: 'dyndatetime(y,m,d+2,9)',
        end: 'dyndatetime(y,m,d+2,11)',
        title: 'Task 9',
        resource: 2,
      },
      {
        start: 'dyndatetime(y,m,d+2,13)',
        end: 'dyndatetime(y,m,d+2,17)',
        title: 'Task 10',
        resource: 2,
      },
      {
        start: 'dyndatetime(y,m,d,10)',
        end: 'dyndatetime(y,m,d,14)',
        title: 'Task 11',
        resource: 3,
      },
      {
        start: 'dyndatetime(y,m,d,15)',
        end: 'dyndatetime(y,m,d,17)',
        title: 'Task 12',
        resource: 3,
      },
      {
        start: 'dyndatetime(y,m,d+1,9)',
        end: 'dyndatetime(y,m,d+1,13)',
        title: 'Task 13',
        resource: 3,
      },
      {
        start: 'dyndatetime(y,m,d+2,9)',
        end: 'dyndatetime(y,m,d+2,10)',
        title: 'Task 14',
        resource: 3,
      },
      {
        start: 'dyndatetime(y,m,d+2,14)',
        end: 'dyndatetime(y,m,d+2,16)',
        title: 'Task 15',
        resource: 3,
      },
      {
        start: 'dyndatetime(y,m,d,14)',
        end: 'dyndatetime(y,m,d,17)',
        title: 'Task 16',
        resource: 4,
      },
      {
        start: 'dyndatetime(y,m,d-1,9)',
        end: 'dyndatetime(y,m,d-1,14)',
        title: 'Task 17',
        resource: 4,
      },
      {
        start: 'dyndatetime(y,m,d+1,10)',
        end: 'dyndatetime(y,m,d+1,12)',
        title: 'Task 18',
        resource: 4,
      },
      {
        start: 'dyndatetime(y,m,d+1,14)',
        end: 'dyndatetime(y,m,d+1,17)',
        title: 'Task 19',
        resource: 4,
      },
      {
        start: 'dyndatetime(y,m,d+2,10,9)',
        end: 'dyndatetime(y,m,d+2,11,17)',
        title: 'Task 20',
        resource: 4,
      },
      {
        start: 'dyndatetime(y,m,d,12)',
        end: 'dyndatetime(y,m,d,15)',
        title: 'Task 21',
        resource: 5,
      },
      {
        start: 'dyndatetime(y,m,d,16)',
        end: 'dyndatetime(y,m,d,17)',
        title: 'Task 22',
        resource: 5,
      },
      {
        start: 'dyndatetime(y,m,d-1,11)',
        end: 'dyndatetime(y,m,d-1,15)',
        title: 'Task 23',
        resource: 5,
      },
      {
        start: 'dyndatetime(y,m,d+1,9)',
        end: 'dyndatetime(y,m,d+1,12)',
        title: 'Task 24',
        resource: 5,
      },
      {
        start: 'dyndatetime(y,m,d+2,11)',
        end: 'dyndatetime(y,m,d+2,16)',
        title: 'Task 25',
        resource: 5,
      },
      {
        start: 'dyndatetime(y,m,d,12)',
        end: 'dyndatetime(y,m,d,17)',
        title: 'Task 26',
        resource: 6,
      },
      {
        start: 'dyndatetime(y,m,d-1,10)',
        end: 'dyndatetime(y,m,d-1,14)',
        title: 'Task 27',
        resource: 6,
      },
      {
        start: 'dyndatetime(y,m,d+1,9)',
        end: 'dyndatetime(y,m,d+1,11)',
        title: 'Task 28',
        resource: 6,
      },
      {
        start: 'dyndatetime(y,m,d+1,14)',
        end: 'dyndatetime(y,m,d+1,15)',
        title: 'Task 29',
        resource: 6,
      },
      {
        start: 'dyndatetime(y,m,d+2,16)',
        end: 'dyndatetime(y,m,d+2,17)',
        title: 'Task 30',
        resource: 6,
      },
      {
        start: 'dyndatetime(y,m,d-1,15)',
        end: 'dyndatetime(y,m,d-1,17)',
        title: 'Task 31',
        resource: 7,
      },
      {
        start: 'dyndatetime(y,m,d+1,9)',
        end: 'dyndatetime(y,m,d+1,12)',
        title: 'Task 32',
        resource: 7,
      },
      {
        start: 'dyndatetime(y,m,d+1,13)',
        end: 'dyndatetime(y,m,d+1,17)',
        title: 'Task 33',
        resource: 7,
      },
      {
        start: 'dyndatetime(y,m,d+2,14)',
        end: 'dyndatetime(y,m,d+2,17)',
        title: 'Task 34',
        resource: 7,
      },
      {
        start: 'dyndatetime(y,m,d,10)',
        end: 'dyndatetime(y,m,d,12)',
        title: 'Task 35',
        resource: 8,
      },
      {
        start: 'dyndatetime(y,m,d,14)',
        end: 'dyndatetime(y,m,d,17)',
        title: 'Task 36',
        resource: 8,
      },
      {
        start: 'dyndatetime(y,m,d+1,10)',
        end: 'dyndatetime(y,m,d+1,14)',
        title: 'Task 37',
        resource: 8,
      },
      {
        start: 'dyndatetime(y,m,d+2,9)',
        end: 'dyndatetime(y,m,d+2,16)',
        title: 'Task 38',
        resource: 8,
      },
      {
        start: 'dyndatetime(y,m,d,9)',
        end: 'dyndatetime(y,m,d,17)',
        title: 'Task 39',
        resource: 9,
      },
      {
        start: 'dyndatetime(y,m,d+1,9)',
        end: 'dyndatetime(y,m,d+1,13)',
        title: 'Task 40',
        resource: 9,
      },
      {
        start: 'dyndatetime(y,m,d+1,14)',
        end: 'dyndatetime(y,m,d+1,17)',
        title: 'Task 41',
        resource: 9,
      },
      {
        start: 'dyndatetime(y,m,d-1,10)',
        end: 'dyndatetime(y,m,d-1,14)',
        title: 'Task 42',
        resource: 9,
      },
      {
        start: 'dyndatetime(y,m,d,10)',
        end: 'dyndatetime(y,m,d,15)',
        title: 'Task 43',
        resource: 10,
      },
      {
        start: 'dyndatetime(y,m,d-1,9)',
        end: 'dyndatetime(y,m,d-1,13)',
        title: 'Work order #41989',
        resource: 10,
      },
      {
        start: 'dyndatetime(y,m,d+1,9)',
        end: 'dyndatetime(y,m,d+1,17)',
        title: 'Task 44',
        resource: 10,
      },
      {
        start: 'dyndatetime(y,m,d+2,9)',
        end: 'dyndatetime(y,m,d+2,13)',
        title: 'Task 45',
        resource: 10,
      },
      {
        start: 'dyndatetime(y,m,d+2,14)',
        end: 'dyndatetime(y,m,d+2,17)',
        title: 'Task 46',
        resource: 10,
      },
      {
        start: 'dyndatetime(y,m,d+2,9)',
        end: 'dyndatetime(y,m,d+2,17)',
        title: 'Task 47',
        resource: 11,
      },
      {
        start: 'dyndatetime(y,m,d-1,12)',
        end: 'dyndatetime(y,m,d-1,17)',
        title: 'Task 48',
        resource: 11,
      },
      {
        start: 'dyndatetime(y,m,d,9)',
        end: 'dyndatetime(y,m,d,15)',
        title: 'Task 49',
        resource: 12,
      },
      {
        start: 'dyndatetime(y,m,d+2,11)',
        end: 'dyndatetime(y,m,d+2,17)',
        title: 'Task 50',
        resource: 12,
      },
      {
        start: 'dyndatetime(y,m,d,11)',
        end: 'dyndatetime(y,m,d,15)',
        title: 'Task 51',
        resource: 13,
      },
      {
        start: 'dyndatetime(y,m,d+1,9)',
        end: 'dyndatetime(y,m,d+1,17)',
        title: 'Task 52',
        resource: 13,
      },
    ],
    [],
  );

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: 'week',
        resolutionHorizontal: 'hour',
        startTime: '09:00',
        endTime: '17:00',
        startDay: 1,
        endDay: 5,
      },
    }),
    [],
  );

  const handleCloseToast = useCallback(() => {
    setIsToastOpen(false);
  }, []);

  const toggleComparison = useCallback(
    (resource: MbscResource) => {
      const isFixed = resource.fixed;
      const origResource = myResources.find((r) => r.id === resource.id)!;
      let newFixedResources = [];
      let newFixedNr = fixedNr;

      if (!isFixed) {
        origResource!.fixed = true;
        newFixedResources = [...fixedResources, origResource];
        newFixedNr++;
      } else {
        origResource!.fixed = false;
        newFixedResources = fixedResources.filter((r) => r.id !== resource.id);
        newFixedNr--;
      }

      const newResources = [...newFixedResources];
      myResources.forEach((r) => {
        if (!r.fixed) {
          newResources.push(r);
        }
      });

      setMyResources(newResources);
      setFixedResources(newFixedResources);
      setFixedNr(newFixedNr);

      if (newFixedNr > 2) {
        setIsToastOpen(true);
      }
    },
    [fixedNr, fixedResources, myResources],
  );

  const customResource = useCallback(
    (r: MbscResource) => (
      <div className="md-compare-resource mbsc-flex mbsc-align-items-center mbsc-justify-content-between">
        <div>{r.name}</div>
        {r.fixed || (!r.fixed && fixedNr <= 2) ? (
          <Button
            className="md-compare-button"
            color={r.fixed ? 'danger' : 'success'}
            variant="outline"
            onClick={() => toggleComparison(r)}
          >
            {r.fixed ? 'Remove' : 'Compare'}
          </Button>
        ) : (
          ''
        )}
      </div>
    ),
    [fixedNr, toggleComparison],
  );

  return (
    <>
      <Eventcalendar data={myEvents} resources={myResources} dragToMove={true} renderResource={customResource} view={myView} />
      <Toast message="Comparing up to 3 schedules" isOpen={isToastOpen} onClose={handleCloseToast} />
    </>
  );
};

export default App;
