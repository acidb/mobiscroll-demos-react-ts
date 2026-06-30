import {
  Eventcalendar,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscResource,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { dyndatetime } from '../../../../dyndatetime';
import './role-based-views-with-different-permission.css';

setOptions({
  // localeJs,
  // themeJs
});

const initialEvents: MbscCalendarEvent[] = [
  {
    start: dyndatetime('y,m,d-1,11'),
    end: dyndatetime('y,m,d-1,15'),
    title: 'Task 1',
    resource: 1,
  },
  {
    start: dyndatetime('y,m,d-1,14'),
    end: dyndatetime('y,m,d-1,17'),
    title: 'Task 2',
    resource: 3,
  },
  {
    start: dyndatetime('y,m,d-1,12'),
    end: dyndatetime('y,m,d-1,14'),
    title: 'Task 3',
    resource: 4,
  },
  {
    start: dyndatetime('y,m,d,10'),
    end: dyndatetime('y,m,d,15'),
    title: 'Task 4',
    resource: 1,
  },
  {
    start: dyndatetime('y,m,d,11'),
    end: dyndatetime('y,m,d,13'),
    title: 'Task 5',
    resource: 2,
  },
  {
    start: dyndatetime('y,m,d,14'),
    end: dyndatetime('y,m,d,17'),
    title: 'Task 6',
    resource: 2,
  },
  {
    start: dyndatetime('y,m,d,12'),
    end: dyndatetime('y,m,d,15'),
    title: 'Task 7',
    resource: 3,
  },
  {
    start: dyndatetime('y,m,d,17'),
    end: dyndatetime('y,m,d,20'),
    title: 'Task 8',
    resource: 3,
  },
  {
    start: dyndatetime('y,m,d,8'),
    end: dyndatetime('y,m,d,11,30'),
    title: 'Task 9',
    resource: 4,
  },
  {
    start: dyndatetime('y,m,d,12'),
    end: dyndatetime('y,m,d,14'),
    title: 'Task 10',
    resource: 4,
  },
  {
    start: dyndatetime('y,m,d,10'),
    end: dyndatetime('y,m,d,13'),
    title: 'Task 11',
    resource: 5,
  },
  {
    start: dyndatetime('y,m,d,14'),
    end: dyndatetime('y,m,d,16'),
    title: 'Task 12',
    resource: 5,
  },
  {
    start: dyndatetime('y,m,d,16,30'),
    end: dyndatetime('y,m,d,19'),
    title: 'Task 13',
    resource: 5,
  },
  {
    start: dyndatetime('y,m,d+1,11'),
    end: dyndatetime('y,m,d+1,14'),
    title: 'Task 14',
    resource: 2,
  },
  {
    start: dyndatetime('y,m,d+1,16'),
    end: dyndatetime('y,m,d+1,20'),
    title: 'Task 15',
    resource: 5,
  },
];

const initialResources: MbscResource[] = [
  { id: 1, name: 'Jude Chester', color: '#af2ec3' },
  { id: 2, name: 'Willis Cane', color: '#cccc39' },
  { id: 3, name: 'Derek Austyn', color: '#56ca2c' },
  { id: 4, name: 'Merv Kenny', color: '#af2424' },
  { id: 5, name: 'Fred Waldez', color: '#256ebc' },
];

const App: FC = () => {
  const [isToastOpen, setToastOpen] = useState<boolean>(false);

  const user = useMemo(() => ({ id: 2, name: 'Willis Cane', role: 'limited' }), []);
  /* Other user examples
  const user = useMemo(() => ({ name: 'Client', role: 'readonly' }), []);
  const user = useMemo(() => ({ name: 'Project Manager', role: 'full' }), []); */

  const editEvents = useMemo<boolean>(() => user.role !== 'readonly', [user]);

  const toastMessage = useMemo(() => {
    if (user.role === 'readonly') {
      return 'Client with read-only access logged in';
    }
    if (user.role === 'limited') {
      return 'User ' + user.name + ' with limited access logged in';
    }
    return 'User with full access logged in';
  }, [user]);

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: 'week',
        startTime: '08:00',
        endTime: '20:00',
      },
    }),
    [],
  );

  const myEvents = useMemo<MbscCalendarEvent[]>(
    () =>
      initialEvents.map((task) => {
        if (user.role === 'readonly') {
          return { ...task, editable: false, color: '#af2ec3' };
        }
        if (user.role === 'limited') {
          return { ...task, editable: task.resource === user.id, color: task.resource !== user.id ? '#6a6a6a' : '#af2424' };
        }
        return task;
      }),
    [user],
  );

  const myResources = useMemo<MbscResource[]>(
    () => initialResources.map((res) => (user.role === 'limited' && res.id !== user.id ? { ...res, eventCreation: false } : res)),
    [user],
  );

  const getDefaultEvent = useCallback(
    () => ({
      color: user.role === 'limited' ? '#af2424' : '',
    }),
    [user.role],
  );

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setToastOpen(true);
    });
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Eventcalendar
        className="mds-role-based-timeline"
        view={myView}
        data={myEvents}
        resources={myResources}
        clickToCreate={editEvents}
        dragToCreate={editEvents}
        dragToMove={editEvents}
        dragToResize={editEvents}
        eventDelete={editEvents}
        extendDefaultEvent={getDefaultEvent}
      />
      <Toast message={toastMessage} isOpen={isToastOpen} onClose={handleCloseToast} />
    </>
  );
};
export default App;
