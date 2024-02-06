import {
  Eventcalendar,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventCreatedEvent,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useMemo, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [isToastOpen, setToastOpen] = useState(false);
  const [toastText, setToastText] = useState<string>();
  const [toastContext, setToastContext] = useState<string>();

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      schedule: {
        type: 'week',
      },
    }),
    [],
  );

  const firstEvents = useMemo<MbscCalendarEvent[]>(
    () => [
      {
        start: 'dyndatetime(y,m,d-5,10)',
        end: 'dyndatetime(y,m,d-5,14)',
        title: 'Event 1',
        color: '#de3d83',
      },
      {
        start: 'dyndatetime(y,m,d-4,7)',
        end: 'dyndatetime(y,m,d-4,8)',
        title: 'Event 2',
        color: '#6e7f29',
      },
      {
        start: 'dyndatetime(y,m,d-3,16)',
        end: 'dyndatetime(y,m,d-3,18)',
        title: 'Event 3',
        color: '#e7b300',
      },
      {
        start: 'dyndatetime(y,m,d-1,11)',
        end: 'dyndatetime(y,m,d-1,12)',
        title: 'Event 4',
        color: '#e9967a',
      },
      {
        start: 'dyndatetime(y,m,d,14)',
        end: 'dyndatetime(y,m,d,17)',
        title: 'Event 5',
        color: '#a917bb',
      },
      {
        start: 'dyndatetime(y,m,d+1,8)',
        end: 'dyndatetime(y,m,d+1,10)',
        title: 'Event 6',
        color: '#3d9140',
      },
      {
        start: 'dyndatetime(y,m,d+2,15)',
        end: 'dyndatetime(y,m,d+2,16)',
        title: 'Event 7',
        color: '#8b8b00',
      },
      {
        start: 'dyndatetime(y,m,d+3,13)',
        end: 'dyndatetime(y,m,d+3,15)',
        title: 'Event 8',
        color: '#6e7f29',
      },
      {
        start: 'dyndatetime(y,m,d+5,10)',
        end: 'dyndatetime(y,m,d+5,12)',
        title: 'Event 9',
        color: '#37bbe4',
      },
      {
        start: 'dyndatetime(y,m,d+6,16)',
        end: 'dyndatetime(y,m,d+6,17)',
        title: 'Event 10',
        color: '#ee9572',
      },
      {
        start: 'dyndatetime(y,m,d+8,11)',
        end: 'dyndatetime(y,m,d+8,14)',
        title: 'Event 11',
        color: '#c67171',
      },
      {
        start: 'dyndatetime(y,m,d+10,7)',
        end: 'dyndatetime(y,m,d+10,9)',
        title: 'Event 12',
        color: '#8b1a1a',
      },
    ],
    [],
  );

  const secondEvents = useMemo<MbscCalendarEvent[]>(
    () => [
      {
        start: 'dyndatetime(y,m,d-5,14)',
        end: 'dyndatetime(y,m,d-5,17)',
        title: 'Event 1',
        color: '#e7b300',
      },
      {
        start: 'dyndatetime(y,m,d-4,10)',
        end: 'dyndatetime(y,m,d-4,12)',
        title: 'Event 2',
        color: '#6e7f29',
      },
      {
        start: 'dyndatetime(y,m,d-3,8)',
        end: 'dyndatetime(y,m,d-3,9)',
        title: 'Event 3',
        color: '#37bbe4',
      },
      {
        start: 'dyndatetime(y,m,d-1,15)',
        end: 'dyndatetime(y,m,d-1,17)',
        title: 'Event 4',
        color: '#8b1a1a',
      },
      {
        start: 'dyndatetime(y,m,d,12)',
        end: 'dyndatetime(y,m,d,13)',
        title: 'Event 5',
        color: '#c67171',
      },
      {
        start: 'dyndatetime(y,m,d+1,17)',
        end: 'dyndatetime(y,m,d+1,20)',
        title: 'Event 6',
        color: '#6e7f29',
      },
      {
        start: 'dyndatetime(y,m,d+2,14)',
        end: 'dyndatetime(y,m,d+2,16)',
        title: 'Event 7',
        color: '#a917bb',
      },
      {
        start: 'dyndatetime(y,m,d+3,10)',
        end: 'dyndatetime(y,m,d+3,13)',
        title: 'Event 8',
        color: '#7ac5cd',
      },
      {
        start: 'dyndatetime(y,m,d+5,15)',
        end: 'dyndatetime(y,m,d+5,16)',
        title: 'Event 9',
        color: '#de3d83',
      },
      {
        start: 'dyndatetime(y,m,d+6,11)',
        end: 'dyndatetime(y,m,d+6,12)',
        title: 'Event 10',
        color: '#3d9140',
      },
      {
        start: 'dyndatetime(y,m,d+8,8)',
        end: 'dyndatetime(y,m,d+8,10)',
        title: 'Event 11',
        color: '#8b8b00',
      },
      {
        start: 'dyndatetime(y,m,d+10,17)',
        end: 'dyndatetime(y,m,d+10,19)',
        title: 'Event 12',
        color: '#ee9572',
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
        height={450}
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
        height={450}
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
