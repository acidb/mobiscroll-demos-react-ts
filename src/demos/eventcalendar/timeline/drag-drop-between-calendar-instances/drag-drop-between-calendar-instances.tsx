import {
  Eventcalendar,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventCreatedEvent,
  MbscResource,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useMemo, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastText, setToastText] = useState<string>('');
  const [toastContext, setToastContext] = useState<string>();

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: 'month',
      },
    }),
    [],
  );

  const firstEvents = useMemo<MbscCalendarEvent[]>(
    () => [
      {
        start: 'dyndatetime(y,m,2)',
        end: 'dyndatetime(y,m,5)',
        title: 'Event 1',
        color: '#166f6f',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,15)',
        end: 'dyndatetime(y,m,19)',
        title: 'Event 2',
        color: '#e20000',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,10)',
        end: 'dyndatetime(y,m,14)',
        title: 'Event 3',
        color: '#1dab2f',
        resource: 2,
      },
      {
        start: 'dyndatetime(y,m,20)',
        end: 'dyndatetime(y,m,23)',
        title: 'Event 4',
        color: '#e25dd2',
        resource: 2,
      },
      {
        start: 'dyndatetime(y,m,3)',
        end: 'dyndatetime(y,m,10)',
        title: 'Event 5',
        color: '#4418d2',
        resource: 3,
      },
      {
        start: 'dyndatetime(y,m,16)',
        end: 'dyndatetime(y,m,19)',
        title: 'Event 6',
        color: '#4981d6',
        resource: 3,
      },
      {
        start: 'dyndatetime(y,m,8)',
        end: 'dyndatetime(y,m,12)',
        title: 'Event 7',
        color: '#6e7f29',
        resource: 4,
      },
      {
        start: 'dyndatetime(y,m,22)',
        end: 'dyndatetime(y,m,28)',
        title: 'Event 8',
        color: '#8b8b00',
        resource: 4,
      },
      {
        start: 'dyndatetime(y,m,2)',
        end: 'dyndatetime(y,m,7)',
        title: 'Event 9',
        color: '#a32f00',
        resource: 5,
      },
      {
        start: 'dyndatetime(y,m,18)',
        end: 'dyndatetime(y,m,23)',
        title: 'Event 10',
        color: '#152d2b',
        resource: 5,
      },
    ],
    [],
  );

  const firstResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: 'Resource A',
      },
      {
        id: 2,
        name: 'Resource B',
      },
      {
        id: 3,
        name: 'Resource C',
      },
      {
        id: 4,
        name: 'Resource D',
      },
      {
        id: 5,
        name: 'Resource E',
      },
    ],
    [],
  );

  const secondEvents = useMemo<MbscCalendarEvent[]>(
    () => [
      {
        start: 'dyndatetime(y,m,5)',
        end: 'dyndatetime(y,m,9)',
        title: 'Event 1',
        color: '#4418d2',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,16)',
        end: 'dyndatetime(y,m,20)',
        title: 'Event 2',
        color: '#8b1a1a',
        resource: 1,
      },
      {
        start: 'dyndatetime(y,m,8)',
        end: 'dyndatetime(y,m,11)',
        title: 'Event 3',
        color: '#e7b300',
        resource: 2,
      },
      {
        start: 'dyndatetime(y,m,22)',
        end: 'dyndatetime(y,m,25)',
        title: 'Event 4',
        color: '#a32f00',
        resource: 2,
      },
      {
        start: 'dyndatetime(y,m,12)',
        end: 'dyndatetime(y,m,17)',
        title: 'Event 5',
        color: '#21a833',
        resource: 3,
      },
      {
        start: 'dyndatetime(y,m,23)',
        end: 'dyndatetime(y,m,29)',
        title: 'Event 6',
        color: '#a917bb',
        resource: 3,
      },
      {
        start: 'dyndatetime(y,m,4)',
        end: 'dyndatetime(y,m,10)',
        title: 'Event 7',
        color: '#e20000',
        resource: 4,
      },
      {
        start: 'dyndatetime(y,m,18)',
        end: 'dyndatetime(y,m,25)',
        title: 'Event 8',
        color: '#4981d6',
        resource: 4,
      },
      {
        start: 'dyndatetime(y,m,7)',
        end: 'dyndatetime(y,m,12)',
        title: 'Event 9',
        color: '#166f6f',
        resource: 5,
      },
      {
        start: 'dyndatetime(y,m,20)',
        end: 'dyndatetime(y,m,27)',
        title: 'Event 10',
        color: '#d6d145',
        resource: 5,
      },
    ],
    [],
  );

  const secondResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: 'Resource A',
      },
      {
        id: 2,
        name: 'Resource B',
      },
      {
        id: 3,
        name: 'Resource C',
      },
      {
        id: 4,
        name: 'Resource D',
      },
      {
        id: 5,
        name: 'Resource E',
      },
    ],
    [],
  );

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  const handleFirstCalEventCreated = useCallback((args: MbscEventCreatedEvent) => {
    if (args.action === 'externalDrop') {
      setToastText('Event dropped to Calendar 1');
      setToastContext('.md-drag-drop-first-calendar');
      setToastOpen(true);
    }
  }, []);

  const handleSecondCalEventCreated = useCallback((args: MbscEventCreatedEvent) => {
    if (args.action === 'externalDrop') {
      setToastText('Event dropped to Calendar 2');
      setToastContext('.md-drag-drop-second-calendar');
      setToastOpen(true);
    }
  }, []);

  return (
    <div className="md-drag-drop-calendar">
      <div className="mbsc-form-group-title">Calendar 1</div>
      <Eventcalendar
        view={myView}
        data={firstEvents}
        resources={firstResources}
        height={420}
        dragToMove={true}
        eventDelete={true}
        externalDrag={true}
        externalDrop={true}
        onEventCreated={handleFirstCalEventCreated}
        className="md-drag-drop-first-calendar"
      />

      <div className="mbsc-form-group-title">Calendar 2</div>
      <Eventcalendar
        view={myView}
        data={secondEvents}
        resources={secondResources}
        height={420}
        dragToMove={true}
        eventDelete={true}
        externalDrag={true}
        externalDrop={true}
        onEventCreated={handleSecondCalEventCreated}
        className="md-drag-drop-second-calendar"
      />
      <Toast message={toastText} context={toastContext} isOpen={isToastOpen} onClose={handleCloseToast} />
    </div>
  );
};
export default App;
