import {
  Draggable,
  dragulaDraggable,
  Eventcalendar,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventCreatedEvent,
  MbscResource,
  MbscResourceCreatedEvent,
  setOptions,
  sortableJsDraggable,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import dragula from 'dragula';
import { FC, useEffect, useMemo, useState } from 'react';
import './external-drag-drop-sortable-dragula.css';
import { useCallback } from 'react';
import Sortable from 'sortablejs';
import 'dragula/dist/dragula.css';

setOptions({
  // localeJs,
  // themeJs
});

const Task = (props: { data: MbscCalendarEvent; isDraggable?: boolean }) => {
  const data = props.data;
  const isDraggable = props.isDraggable;
  const [draggable, setDraggable] = useState<HTMLDivElement>();

  const setDragElm = useCallback((elm: HTMLDivElement) => {
    setDraggable(elm);
  }, []);

  const eventLength = Math.round(
    Math.abs(new Date(data.end as string).getTime() - new Date(data.start as string).getTime()) / (60 * 60 * 1000),
  );

  return (
    <div
      className="mds-drag-drop-sort-task"
      ref={isDraggable ? setDragElm : null}
      style={{ background: data.color }}
      data-drag-data={!isDraggable && JSON.stringify(data)}
    >
      <div>{data.title}</div>
      <div>{eventLength + ' hour' + (eventLength > 1 ? 's' : '')}</div>
      {isDraggable && <Draggable dragData={data} element={draggable} />}
    </div>
  );
};

const Resource = (props: { data: MbscResource; isDraggable?: boolean }) => {
  const data = props.data;
  const isDraggable = props.isDraggable;

  const [draggable, setDraggable] = useState<HTMLDivElement>();

  const setDragElm = useCallback((elm: HTMLDivElement) => {
    setDraggable(elm);
  }, []);

  return (
    <div
      ref={isDraggable ? setDragElm : null}
      className="mds-drag-drop-sort-task"
      style={{ background: '#80808099' }}
      data-drag-data={!isDraggable && JSON.stringify(data)}
    >
      <div>{data.name}</div>
      {isDraggable && <Draggable dragData={data} element={draggable} type="resource" />}
    </div>
  );
};

const App: FC = () => {
  const [sortableTaskCont, setSortableTaskCont] = useState<HTMLDivElement | null>();
  const [dragulaTaskCont, setDragulaTaskCont] = useState<HTMLDivElement | null>();
  const [sortableResourceCont, setSortableResourceCont] = useState<HTMLDivElement | null>();
  const [dragulaResourceCont, setDragulaResourceCont] = useState<HTMLDivElement | null>();
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const [myDraggableTasks, setDraggableTasks] = useState<MbscCalendarEvent[]>([
    {
      id: 'draggable-1',
      title: 'Task 1',
      color: '#cf4343',
      start: 'dyndatetime(y,m,d,8)',
      end: 'dyndatetime(y,m,d,9,30)',
    },
    {
      id: 'draggable-2',
      title: 'Task 2',
      color: '#cf4343',
      start: 'dyndatetime(y,m,d,8)',
      end: 'dyndatetime(y,m,d,10)',
    },
    {
      id: 'draggable-3',
      title: 'Task 3',
      color: '#cf4343',
      start: 'dyndatetime(y,m,d,10)',
      end: 'dyndatetime(y,m,d,14)',
    },
    {
      id: 'draggable-4',
      title: 'Task 4',
      color: '#cf4343',
      start: 'dyndatetime(y,m,d,12)',
      end: 'dyndatetime(y,m,d,18)',
    },
  ]);

  const [mySortableTasks, setSortableTasks] = useState<MbscCalendarEvent[]>([
    {
      id: 'sortable-1',
      title: 'Task 1',
      color: '#d1891f',
      start: 'dyndatetime(y,m,d,8)',
      end: 'dyndatetime(y,m,d,9,30)',
    },
    {
      id: 'sortable-2',
      title: 'Task 2',
      color: '#d1891f',
      start: 'dyndatetime(y,m,d,12)',
      end: 'dyndatetime(y,m,d,15)',
    },
    {
      id: 'sortable-3',
      title: 'Task 3',
      color: '#d1891f',
      start: 'dyndatetime(y,m,d,8,30)',
      end: 'dyndatetime(y,m,d,11)',
    },
    {
      id: 'sortable-4',
      title: 'Task 4',
      color: '#d1891f',
      start: 'dyndatetime(y,m,d,16)',
      end: 'dyndatetime(y,m,d,21)',
    },
  ]);

  const [myDragulaTasks, setDragulaTasks] = useState<MbscCalendarEvent[]>([
    {
      id: 'dragula-1',
      title: 'Task 5',
      color: '#1ca11a',
      start: 'dyndatetime(y,m,d,8)',
      end: 'dyndatetime(y,m,d,9,30)',
    },
    {
      id: 'dragula-2',
      title: 'Task 6',
      color: '#1ca11a',
      start: 'dyndatetime(y,m,d,12)',
      end: 'dyndatetime(y,m,d,15)',
    },
    {
      id: 'dragula-3',
      title: 'Task 7',
      color: '#1ca11a',
      start: 'dyndatetime(y,m,d,8,30)',
      end: 'dyndatetime(y,m,d,11)',
    },
    {
      id: 'dragula-4',
      title: 'Task 8',
      color: '#1ca11a',
      start: 'dyndatetime(y,m,d,16)',
      end: 'dyndatetime(y,m,d,20,30)',
    },
  ]);

  const [myDraggableResources, setDraggableResources] = useState<MbscResource[]>([
    {
      id: 'draggable-1',
      name: 'Resource 1',
    },
    {
      id: 'draggable-2',
      name: 'Resource 2',
    },
    {
      id: 'draggable-3',
      name: 'Resource 3',
    },
    {
      id: 'draggable-4',
      name: 'Resource 4',
    },
  ]);

  const [mySortableResources, setSortableResources] = useState<MbscResource[]>([
    {
      id: 'sortable-1',
      name: 'Resource 5',
    },
    {
      id: 'sortable-2',
      name: 'Resource 6',
    },
    {
      id: 'sortable-3',
      name: 'Resource 7',
    },
    {
      id: 'sortable-4',
      name: 'Resource 8',
    },
  ]);

  const [myDragulaResources, setDragulaResources] = useState<MbscResource[]>([
    {
      id: 'dragula-1',
      name: 'Resource 9',
    },
    {
      id: 'dragula-2',
      name: 'Resource 10',
    },
    {
      id: 'dragula-3',
      name: 'Resource 11',
    },
    {
      id: 'dragula-4',
      name: 'Resource 12',
    },
  ]);

  const myResources = useMemo<MbscResource[]>(
    () => [
      { name: 'Resource A', id: 'res-1' },
      { name: 'Resource B', id: 'res-2' },
      { name: 'Resource C', id: 'res-3' },
      { name: 'Resource D', id: 'res-4' },
      { name: 'Resource E', id: 'res-5' },
    ],
    [],
  );

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: { type: 'day' },
    }),
    [],
  );

  const handleEventCreated = useCallback((args: MbscEventCreatedEvent) => {
    if (args.action === 'externalDrop') {
      setDraggableTasks((tasks) => tasks.filter((item) => item.id !== args.event.id));
      setSortableTasks((tasks) => tasks.filter((item) => item.id !== args.event.id));
      setDragulaTasks((tasks) => tasks.filter((item) => item.id !== args.event.id));
      setToastMessage(args.event.title + ' added');
      setToastOpen(true);
    }
  }, []);

  const handleResourceCreated = useCallback((args: MbscResourceCreatedEvent) => {
    if (args.type === 'onResourceCreated') {
      setDraggableResources((resources) => resources.filter((item) => item.id !== args.resource.id));
      setSortableResources((resources) => resources.filter((item) => item.id !== args.resource.id));
      setDragulaResources((resources) => resources.filter((item) => item.id !== args.resource.id));
      setToastMessage(args.resource.name + ' added');
      setToastOpen(true);
    }
  }, []);

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  useEffect(() => {
    if (sortableTaskCont) {
      const sortableTaskInstance = new Sortable(sortableTaskCont, {
        animation: 150,
        forceFallback: true,
      });

      sortableJsDraggable.init(sortableTaskInstance, {
        cloneSelector: '.sortable-drag',
      });
    }

    if (sortableResourceCont) {
      const sortableResourceInstance = new Sortable(sortableResourceCont, {
        animation: 150,
        forceFallback: true,
      });

      sortableJsDraggable.init(sortableResourceInstance, {
        cloneSelector: '.sortable-drag',
        type: 'resource',
      });
    }

    if (dragulaTaskCont) {
      const drake1 = dragula([dragulaTaskCont]);
      dragulaDraggable.init(drake1);
    }

    if (dragulaResourceCont) {
      const drake2 = dragula([dragulaResourceCont]);
      dragulaDraggable.init(drake2, {
        type: 'resource',
      });
    }
  }, [dragulaTaskCont, dragulaResourceCont, sortableTaskCont, sortableResourceCont]);

  return (
    <div className="mbsc-grid mbsc-no-padding mds-drag-drop-sort mds-full-height">
      <div className="mbsc-row mds-full-height">
        <div className="mbsc-col-sm-3 mds-drag-drop-sort-container-wrapper mds-full-height">
          <div className="mbsc-txt-muted mds-third-party-title">Mobiscroll draggable</div>
          <div className="mbsc-flex">
            <div className="mbsc-col-sm-6 mbsc-flex-col">
              <div className="mds-drag-drop-sort-container mbsc-flex-col mbsc-flex-1-0">
                <div className="mbsc-txt-muted mds-third-party-list-title">Event list</div>
                {myDraggableTasks.map((task) => (
                  <Task key={task.id} data={task} isDraggable />
                ))}
              </div>
            </div>
            <div className="mbsc-col-sm-6 mbsc-flex-col">
              <div className="mds-drag-drop-sort-container mbsc-flex-col mbsc-flex-1-0">
                <div className="mds-third-party-list-title mbsc-txt-muted">Resource list</div>
                {myDraggableResources.map((res) => (
                  <Resource key={res.id} data={res} isDraggable />
                ))}
              </div>
            </div>
          </div>
          <div className="mbsc-txt-muted mds-third-party-title">SortableJS (externally sortable)</div>
          <div className="mbsc-flex">
            <div className="mbsc-col-sm-6 mbsc-flex-col">
              <div className="mds-drag-drop-sort-container mbsc-flex-col mbsc-flex-1-0">
                <div className="mds-third-party-list-title mbsc-txt-muted">Event list</div>
                <div className="mbsc-flex-col mbsc-flex-1-0" ref={setSortableTaskCont}>
                  {mySortableTasks.map((task) => (
                    <Task key={task.id} data={task} />
                  ))}
                </div>
              </div>
            </div>
            <div className="mbsc-col-sm-6 mbsc-flex-col">
              <div className="mds-drag-drop-sort-container mbsc-flex-col mbsc-flex-1-0">
                <div className="mds-third-party-list-title mbsc-txt-muted">Resource list</div>
                <div className="mbsc-flex-col mbsc-flex-1-0" ref={setSortableResourceCont}>
                  {mySortableResources.map((res) => (
                    <Resource key={res.id} data={res} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mbsc-txt-muted mds-third-party-title">Dragula (externally sortable)</div>
          <div className="mbsc-flex">
            <div className="mbsc-col-sm-6 mbsc-flex-col">
              <div className="mds-drag-drop-sort-container mbsc-flex-col mbsc-flex-1-0">
                <div className="mds-third-party-list-title mbsc-txt-muted">Event list</div>
                <div className="mbsc-flex-col mbsc-flex-1-0" ref={setDragulaTaskCont}>
                  {myDragulaTasks.map((task) => (
                    <Task key={task.id} data={task} />
                  ))}
                </div>
              </div>
            </div>
            <div className="mbsc-col-sm-6 mbsc-flex-col">
              <div className="mds-drag-drop-sort-container mbsc-flex-col mbsc-flex-1-0">
                <div className="mds-third-party-list-title mbsc-txt-muted">Resource list</div>
                <div className="mbsc-flex-col mbsc-flex-1-0" ref={setDragulaResourceCont}>
                  {myDragulaResources.map((res) => (
                    <Resource key={res.id} data={res} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mbsc-col-sm-9 mds-drag-drop-sort-calendar mds-full-height">
          <Eventcalendar
            // drag
            externalDrop={true}
            externalResourceDrop={true}
            onEventCreated={handleEventCreated}
            onResourceCreated={handleResourceCreated}
            resources={myResources}
            view={myView}
          />
        </div>
      </div>
      <Toast message={toastMessage} isOpen={isToastOpen} onClose={handleToastClose} />
    </div>
  );
};

export default App;
