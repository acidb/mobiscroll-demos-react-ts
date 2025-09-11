import {
  Draggable,
  Eventcalendar,
  MbscCalendarColor,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventDragEvent,
  MbscNewEventData,
  MbscResource,
  Page,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useState } from 'react';
import './dynamically-color-and-invalidate.css';

setOptions({
  // localeJs,
  // themeJs
});

const hwInvalids = [
  {
    recurring: {
      repeat: 'daily',
    },
    resource: ['res4', 'res5', 'res6'],
  },
];
const swInvalids = [
  {
    recurring: {
      repeat: 'daily',
    },
    resource: ['res1', 'res2', 'res3'],
  },
];
const hwColors: MbscCalendarColor[] = [
  {
    recurring: {
      repeat: 'daily',
    },
    resource: ['res1', 'res2', 'res3'],
    background: '#1ad4041a',
  },
];
const swColors: MbscCalendarColor[] = [
  {
    recurring: {
      repeat: 'daily',
    },
    resource: ['res4', 'res5', 'res6'],
    background: '#1ad4041a',
  },
];
const viewSettings: MbscEventcalendarView = {
  timeline: { type: 'day' },
};
const myResources: MbscResource[] = [
  {
    id: 'hwt',
    name: 'HW Team',
    eventCreation: false,
    children: [
      {
        id: 'res1',
        name: 'Resource 1',
        color: '#0e9ea5',
      },
      {
        id: 'res2',
        name: 'Resource 2',
        color: '#0e9ea5',
      },
      {
        id: 'res3',
        name: 'Resource 3',
        color: '#0e9ea5',
      },
    ],
  },
  {
    id: 'swt',
    name: 'SW Team',
    eventCreation: false,
    children: [
      {
        id: 'res4',
        name: 'Resource 4',
        color: '#c3b726',
      },
      {
        id: 'res5',
        name: 'Resource 5',
        color: '#c3b726',
      },
      {
        id: 'res6',
        name: 'Resource 6',
        color: '#c3b726',
      },
    ],
  },
];
const myTasks: MbscCalendarEvent[] = [
  {
    taskId: 1,
    title: 'Task 1',
    start: '08:00',
    end: '12:00',
    category: 'hw',
    color: '#0e9ea5',
  },
  {
    taskId: 2,
    title: 'Task 2',
    start: '08:00',
    end: '12:00',
    category: 'hw',
    color: '#0e9ea5',
  },
  {
    taskId: 3,
    title: 'Task 3',
    start: '08:00',
    end: '12:00',
    category: 'hw',
    color: '#0e9ea5',
  },
  {
    taskId: 4,
    title: 'Task 4',
    start: '08:00',
    end: '12:00',
    category: 'sw',
    color: '#c3b726',
  },
  {
    taskId: 5,
    title: 'Task 5',
    start: '08:00',
    end: '12:00',
    category: 'sw',
    color: '#c3b726',
  },
  {
    taskId: 6,
    title: 'Task 6',
    start: '08:00',
    end: '12:00',
    category: 'sw',
    color: '#c3b726',
  },
];

function Task(props: { data: MbscCalendarEvent }) {
  const [draggable, setDraggable] = useState<HTMLDivElement>();

  const setDragElm = useCallback((elm: HTMLDivElement) => {
    setDraggable(elm);
  }, []);

  return (
    <div ref={setDragElm} className="dynamically-color-and-invalidate-task">
      <div>
        {props.data.title}
        <span className="dynamically-color-and-invalidate-task-type">{props.data.category}</span>
      </div>
      <Draggable dragData={props.data} element={draggable} />
    </div>
  );
}

const App: FC = () => {
  const [myInvalids, setInvalids] = useState<Array<{ recurring: { repeat: string }; resource: Array<string> }>>();
  const [myColors, setColors] = useState<MbscCalendarColor[]>([]);
  const [toasterMessage, setToasterMessage] = useState('');
  const [isToastOpen, setToastOpen] = useState(false);

  const handleExtendDefaultEvent = useCallback((args: MbscNewEventData) => {
    const res = args.resource;

    if (res) {
      if (res === 'res1' || res === 'res2' || res === 'res3') {
        return {
          category: 'hw',
        };
      } else {
        return {
          category: 'sw',
        };
      }
    }

    return args;
  }, []);

  const handleEventDragStart = useCallback((args: MbscEventDragEvent) => {
    let event = args.event;

    if (event) {
      event = event.original || event;

      if (event.category === 'hw') {
        setInvalids(hwInvalids);
        setColors(hwColors);
      } else {
        setInvalids(swInvalids);
        setColors(swColors);
      }
    }
  }, []);

  const handleEventDragEnd = useCallback(() => {
    setInvalids([]);
    setColors([]);
  }, []);

  const handleEventCreated = useCallback(() => {
    setToasterMessage('Event created');
    setToastOpen(true);
  }, []);

  const handleEventUpdated = useCallback(() => {
    setToasterMessage('Event moved');
    setToastOpen(true);
  }, []);

  const handleEventCreateFailed = useCallback(() => {
    setToasterMessage("Can't create event");
    setToastOpen(true);
  }, []);

  const handleEventUpdateFailed = useCallback(() => {
    setToasterMessage("Can't move event");
    setToastOpen(true);
  }, []);

  const handleCloseToast = useCallback(() => setToastOpen(false), []);

  return (
    <Page>
      <div className="mbsc-grid mbsc-no-padding">
        <div className="mbsc-row">
          <div className="mbsc-col-sm-3">
            <div className="mbsc-form-group-title">Available tasks</div>
            {myTasks.map((task) => (
              <Task key={task.taskId} data={task} />
            ))}
          </div>
          <div className="mbsc-col-sm-9 dynamically-color-and-invalidate-calendar">
            <Eventcalendar
              view={viewSettings}
              resources={myResources}
              invalid={myInvalids}
              colors={myColors}
              dragToMove={true}
              externalDrop={true}
              extendDefaultEvent={handleExtendDefaultEvent}
              onEventDragStart={handleEventDragStart}
              onEventDragEnd={handleEventDragEnd}
              onEventCreated={handleEventCreated}
              onEventUpdated={handleEventUpdated}
              onEventCreateFailed={handleEventCreateFailed}
              onEventUpdateFailed={handleEventUpdateFailed}
            />
          </div>
        </div>
      </div>
      <Toast message={toasterMessage} isOpen={isToastOpen} onClose={handleCloseToast} />
    </Page>
  );
};
export default App;
