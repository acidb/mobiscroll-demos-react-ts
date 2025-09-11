import {
  Draggable,
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscResource,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { FC, useEffect, useMemo, useState } from 'react';
import './event-hooks.css';

setOptions({
  // localeJs,
  // themeJs
});

const dragData1 = {
  title: 'External drag 1',
  color: '#ffdab8',
};

const dragData2 = {
  title: 'External drag 2',
  color: '#ddfcf7',
};

const dragData3 = {
  name: 'External resource',
  color: '#d19494',
};

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [draggable1, setDraggable1] = useState<HTMLElement | null>(null);
  const [draggable2, setDraggable2] = useState<HTMLElement | null>(null);
  const [draggable3, setDraggable3] = useState<HTMLElement | null>(null);

  const myInvalid = [
    {
      start: '12:00',
      end: '13:00',
      title: 'Lunch break',
      recurring: {
        repeat: 'weekly',
        weekDays: 'MO,TU,WE,TH,FR',
      },
    },
  ];

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: 'day',
        resourceReorder: true,
      },
    }),
    [],
  );

  const myResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: 'Ryan',
        color: '#fdf500',
      },
      {
        id: 2,
        name: 'Kate',
        color: '#ff4600',
      },
      {
        id: 3,
        name: 'John',
        color: '#ff0101',
      },
      {
        id: 4,
        name: 'Mark',
        color: '#239a21',
      },
      {
        id: 5,
        name: 'Sharon',
        color: '#8f1ed6',
      },
      {
        id: 6,
        name: 'Ashley',
        color: '#01adff',
      },
    ],
    [],
  );

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/timeline-events/',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <>
      <div ref={setDraggable1} className="event-hooks-draggable" style={{ background: '#ffdab8' }}>
        <div className="draggable-title">External drag 1</div>
        <div className="draggable-text">Drag me to calendar</div>
        <Draggable dragData={dragData1} element={draggable1} />
      </div>
      <div ref={setDraggable2} className="event-hooks-draggable" style={{ background: '#ddfcf7' }}>
        <div className="draggable-title">External drag 2</div>
        <div className="draggable-text">Drag me to calendar</div>
        <Draggable dragData={dragData2} element={draggable2} />
      </div>
      <div ref={setDraggable3} className="event-hooks-draggable" style={{ background: '#d19494' }}>
        <div className="draggable-title">External resource</div>
        <div className="draggable-text">Drag me to calendar</div>
        <Draggable dragData={dragData3} element={draggable3} type="resource" />
      </div>
      <Eventcalendar
        data={myEvents}
        dragToCreate={true}
        dragToMove={true}
        dragToResize={true}
        externalDrop={true}
        externalResourceDrop={true}
        view={myView}
        resources={myResources}
        invalid={myInvalid}
        onCellClick={() => {
          // Logic for cell click
        }}
        onCellDoubleClick={() => {
          // Logic for cell double click
        }}
        onCellRightClick={() => {
          // Logic for cell right click
        }}
        onCellHoverIn={() => {
          // Logic for cell hover in
        }}
        onCellHoverOut={() => {
          // Logic for cell hover out
        }}
        onDestroy={() => {
          // Your custom event handler goes here
        }}
        onEventClick={() => {
          // Logic for event click
        }}
        onEventCreate={() => {
          // Logic for event create
        }}
        onEventCreated={() => {
          // Logic for event created
        }}
        onEventCreateFailed={() => {
          // Logic for failed event create
        }}
        onEventDelete={() => {
          // Logic for event delete
        }}
        onEventDeleted={() => {
          // Logic for event deleted
        }}
        onEventDoubleClick={() => {
          // Logic for event double click
        }}
        onEventDragEnter={() => {
          // Logic for event drag enter
        }}
        onEventDragLeave={() => {
          // Logic for event drag leave
        }}
        onEventHoverIn={() => {
          // Logic for event hover in
        }}
        onEventHoverOut={() => {
          // Logic for event hover out
        }}
        onEventUpdate={() => {
          // Logic for event update
        }}
        onEventUpdated={() => {
          // Logic for event updated
        }}
        onEventUpdateFailed={() => {
          // Logic for failed event update
        }}
        onEventRightClick={() => {
          // Logic for event right click
        }}
        onInit={() => {
          // Logic running on component init
        }}
        onPageChange={() => {
          // Your custom event handler goes here
        }}
        onPageLoaded={() => {
          // Use it to inject custom markup & attach custom listeners
        }}
        onPageLoading={() => {
          // Use it to load data on demand
        }}
        onResourceClick={() => {
          // Logic for resource click
        }}
        onResourceDoubleClick={() => {
          // Logic for resource double click
        }}
        onResourceDragEnd={() => {
          /* Logic for resource drag end */
        }}
        onResourceDragStart={() => {
          /* Logic for resource drag start */
        }}
        onResourceOrderUpdate={() => {
          // Logic for resource update
        }}
        onResourceCreate={() => {
          // Logic for resource create
        }}
        onResourceCreated={() => {
          // Logic for resource created
        }}
        onResourceDelete={() => {
          // Logic for resource delete
        }}
        onResourceDeleted={() => {
          // Logic for resource deleted
        }}
        onResourceDragEnter={() => {
          // Logic for resource update
        }}
        onResourceDragLeave={() => {
          // Logic for resource update
        }}
        onResourceRightClick={() => {
          // Logic for resource right click
        }}
        onResourceHoverIn={() => {
          // Logic for resource hover in
        }}
        onResourceHoverOut={() => {
          // Logic for resource hover out
        }}
        onSelectedDateChange={() => {
          // Use it to keep track of the selected date externally
        }}
      />
    </>
  );
};
export default App;
