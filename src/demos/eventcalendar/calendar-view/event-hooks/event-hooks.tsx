import {
  Draggable,
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscEventcalendarView,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import './event-hooks.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);

  const myInvalid = useMemo(
    () => [
      {
        recurring: {
          repeat: 'weekly',
          weekDays: 'SA,SU',
        },
      },
    ],
    [],
  );

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      calendar: { labels: true },
    }),
    [],
  );

  const dragData1 = useMemo(
    () => ({
      title: 'External drag 1',
      color: '#ffdab8',
    }),
    [],
  );

  const dragData2 = useMemo(
    () => ({
      title: 'External drag 2',
      color: '#ddfcf7',
    }),
    [],
  );

  const [draggable1, setDraggable1] = useState<HTMLDivElement>();
  const [draggable2, setDraggable2] = useState<HTMLDivElement>();

  const setDragElm1 = useCallback((elm: HTMLDivElement) => {
    setDraggable1(elm);
  }, []);

  const setDragElm2 = useCallback((elm: HTMLDivElement) => {
    setDraggable2(elm);
  }, []);

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <>
      <div ref={setDragElm1} className="event-hooks-draggable" style={{ background: '#ffdab8' }}>
        <div className="draggable-title">External drag 1</div>
        <div className="draggable-text">Drag me to calendar</div>
        <Draggable dragData={dragData1} element={draggable1} theme="auto" />
      </div>
      <div ref={setDragElm2} className="event-hooks-draggable" style={{ background: '#ddfcf7' }}>
        <div className="draggable-title">External drag 2</div>
        <div className="draggable-text">Drag me to calendar</div>
        <Draggable dragData={dragData2} element={draggable2} theme="auto" />
      </div>
      <Eventcalendar
        data={myEvents}
        dragToCreate={true}
        dragToMove={true}
        dragToResize={true}
        externalDrop={true}
        view={myView}
        invalid={myInvalid}
        onCellClick={() => {
          // Logic for event click
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
        onEventDragStart={() => {
          // Logic for event drag start
        }}
        onEventDragEnd={() => {
          // Logic for event drag end
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
        onLabelClick={() => {
          // Logic for label click
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
        onSelectedDateChange={() => {
          // Use it to keep track of the selected date externally
        }}
      />
    </>
  );
};
export default App;
