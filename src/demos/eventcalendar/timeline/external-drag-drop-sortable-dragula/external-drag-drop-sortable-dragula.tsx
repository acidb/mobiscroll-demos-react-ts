import {
  Draggable,
  dragulaDraggable,
  Dropcontainer,
  Eventcalendar,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventCreatedEvent,
  MbscEventDeletedEvent,
  MbscExternalDropEvent,
  MbscItemDragEvent,
  MbscResource,
  MbscResourceCreatedEvent,
  setOptions,
  sortableJsDraggable,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import dragula, { Drake } from 'dragula';
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
  const [dropCont, setDropCont] = useState<HTMLDivElement | null>();
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
      title: 'Task 5',
      color: '#d1891f',
      start: 'dyndatetime(y,m,d,8)',
      end: 'dyndatetime(y,m,d,9,30)',
    },
    {
      id: 'sortable-2',
      title: 'Task 6',
      color: '#d1891f',
      start: 'dyndatetime(y,m,d,12)',
      end: 'dyndatetime(y,m,d,15)',
    },
    {
      id: 'sortable-3',
      title: 'Task 7',
      color: '#d1891f',
      start: 'dyndatetime(y,m,d,8,30)',
      end: 'dyndatetime(y,m,d,11)',
    },
    {
      id: 'sortable-4',
      title: 'Task 8',
      color: '#d1891f',
      start: 'dyndatetime(y,m,d,16)',
      end: 'dyndatetime(y,m,d,21)',
    },
  ]);

  const [myDragulaTasks, setDragulaTasks] = useState<MbscCalendarEvent[]>([
    {
      id: 'dragula-1',
      title: 'Task 9',
      color: '#1ca11a',
      start: 'dyndatetime(y,m,d,8)',
      end: 'dyndatetime(y,m,d,9,30)',
    },
    {
      id: 'dragula-2',
      title: 'Task 10',
      color: '#1ca11a',
      start: 'dyndatetime(y,m,d,12)',
      end: 'dyndatetime(y,m,d,15)',
    },
    {
      id: 'dragula-3',
      title: 'Task 11',
      color: '#1ca11a',
      start: 'dyndatetime(y,m,d,8,30)',
      end: 'dyndatetime(y,m,d,11)',
    },
    {
      id: 'dragula-4',
      title: 'Task 12',
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

  const handleEventDeleted = useCallback((args: MbscEventDeletedEvent) => {
    setToastMessage(args.event.title + ' unscheduled');
    setToastOpen(true);
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

  const handleItemDrop = useCallback((args: MbscItemDragEvent) => {
    if (args.data) {
      setDraggableTasks((tasks) => [...tasks, args.data]);
    }
  }, []);

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  useEffect(() => {
    let sortableTaskInstance: Sortable;
    if (sortableTaskCont) {
      sortableTaskInstance = new Sortable(sortableTaskCont, {
        animation: 150,
        forceFallback: true,
      });

      sortableJsDraggable.init(sortableTaskInstance, {
        cloneSelector: '.sortable-drag',
        externalDrop: true,
        onExternalDrop: (a: MbscExternalDropEvent) => {
          const dragData = a.dragData;
          setSortableTasks((prev) => {
            const newTasks = [...prev];
            newTasks.splice(a.position, 0, dragData);
            return newTasks;
          });
        },
      });
    }

    let sortableResourceInstance: Sortable;
    if (sortableResourceCont) {
      sortableResourceInstance = new Sortable(sortableResourceCont, {
        animation: 150,
        forceFallback: true,
      });

      sortableJsDraggable.init(sortableResourceInstance, {
        cloneSelector: '.sortable-drag',
        type: 'resource',
      });
    }

    let drake1: Drake;
    if (dragulaTaskCont) {
      drake1 = dragula([dragulaTaskCont]);
      dragulaDraggable.init(drake1, {
        externalDrop: true,
        onExternalDrop: (a: MbscExternalDropEvent) => {
          const dragData = a.dragData;
          setDragulaTasks((prev) => {
            const newTasks = [...prev];
            newTasks.splice(a.position, 0, dragData);
            return newTasks;
          });
        },
      });
    }

    let drake2: Drake;
    if (dragulaResourceCont) {
      drake2 = dragula([dragulaResourceCont]);
      dragulaDraggable.init(drake2, {
        type: 'resource',
      });
    }

    return () => {
      if (sortableTaskInstance) {
        sortableTaskInstance.destroy();
      }
      if (sortableResourceInstance) {
        sortableResourceInstance.destroy();
      }
      if (drake1) {
        drake1.destroy();
      }
      if (drake2) {
        drake2.destroy();
      }
    };
  }, [dragulaTaskCont, dragulaResourceCont, sortableTaskCont, sortableResourceCont]);

  return (
    <div className="mbsc-grid mbsc-no-padding mds-drag-drop-sort mds-full-height">
      <div className="mbsc-row mds-full-height">
        <div className="mbsc-col-sm-3 mds-drag-drop-sort-container-wrapper mds-full-height">
          <div className="mbsc-txt-muted mds-third-party-title">Mobiscroll draggable</div>
          <div className="mbsc-flex">
            <div className="mbsc-col-sm-6 mbsc-flex-col">
              <div className="mds-drag-drop-sort-container mbsc-flex-col mbsc-flex-1-0" ref={setDropCont}>
                <div className="mbsc-txt-muted mds-third-party-list-title">Event list</div>
                <Dropcontainer onItemDrop={handleItemDrop} element={dropCont}>
                  {myDraggableTasks.map((task) => (
                    <Task key={task.id} data={task} isDraggable />
                  ))}
                </Dropcontainer>
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
            view={myView}
            externalDrop={true}
            externalResourceDrop={true}
            dragToMove={true}
            dragToCreate={true}
            externalDrag={true}
            onEventCreated={handleEventCreated}
            onResourceCreated={handleResourceCreated}
            onEventDeleted={handleEventDeleted}
            resources={myResources}
          />
        </div>
      </div>
      <Toast message={toastMessage} isOpen={isToastOpen} onClose={handleToastClose} />
    </div>
  );
};

export default App;
