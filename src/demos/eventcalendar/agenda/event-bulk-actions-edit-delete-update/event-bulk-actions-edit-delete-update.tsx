import {
  Button,
  Confirm,
  Eventcalendar,
  formatDate,
  getJson,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscEventUpdateEvent,
  MbscSelectChangeEvent,
  MbscSelectedEventsChangeEvent,
  Page,
  Select,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './event-bulk-actions-edit-delete-update.css';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [confirmMessage, setConfirmMessage] = useState<string>('');
  const [menuAnchor, setMenuAnchor] = useState();
  const [menuAction, setMenuAction] = useState<string>('');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [myEvents, setMyEvents] = useState<MbscCalendarEvent[]>([]);
  const [isConfirmOpen, setConfirmOpen] = useState<boolean>(false);
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<MbscCalendarEvent>();
  const [selectedEvents, setSelectedEvents] = useState<MbscCalendarEvent[]>([]);
  const [toastMessage, setToastMessage] = useState<string>('');

  const calRef = useRef<Eventcalendar>(null);

  const myView: MbscEventcalendarView = useMemo(() => ({ agenda: { type: 'month' } }), []);

  const menuData = useMemo(
    () => [
      { text: 'Update', value: 'update' },
      { text: 'Delete', value: 'delete' },
    ],
    [],
  );

  const updateSelectedEvents = useCallback(() => {
    const updatedEvents = [...myEvents];
    const events = selectedEvents.length === 0 && selectedEvent ? [selectedEvent] : selectedEvents;
    for (const event of events) {
      const index = updatedEvents.findIndex((x) => x.id === event.id);
      // Handle recurring event occurrence
      if (event.recurring) {
        // Create a new event, with updated color and id
        const newEvent = {
          ...event,
          color: 'orange',
          id: event.id + '_' + formatDate('YYYY-MM-DD', new Date(event.start as string)),
          recurring: undefined,
        };
        // Update the original event with a recurring exception
        const updatedEvent = event.original;
        const updatedExceptionDates = (updatedEvent!.recurringException as Array<string>) || [];
        updatedExceptionDates.push(event.start as string);
        updatedEvent!.recurringException = updatedExceptionDates;
        updatedEvents.splice(index, 1, updatedEvent!);
        updatedEvents.push(newEvent);
      } else {
        // Update the event color
        const updatedEvent = { ...event, color: 'orange' };
        updatedEvents.splice(index, 1, updatedEvent);
      }
    }
    setMyEvents(updatedEvents);
    setSelectedEvents([]);
    setToastMessage("All selected event's color changed to orange");
    setToastOpen(true);
  }, [myEvents, selectedEvent, selectedEvents]);

  const deleteSelectedEvents = useCallback(() => {
    setConfirmMessage(selectedEvents.map((e) => e.title).join(', '));
    setConfirmOpen(true);
  }, [selectedEvents]);

  const selectAllEvents = useCallback(() => {
    const selectedEvents = calRef.current!.getEvents();
    setSelectedEvents(selectedEvents);
    setToastMessage('All events selected from view');
    setToastOpen(true);
  }, []);

  const resetSelection = useCallback(() => {
    setSelectedEvents([]);
    setToastMessage('Selection cleared');
    setToastOpen(true);
  }, []);

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  const handleConfirmClose = useCallback(
    (result: boolean) => {
      if (result) {
        const events = selectedEvents.length === 0 && selectedEvent ? [selectedEvent] : selectedEvents;
        const updatedEvents = [...myEvents];
        for (const event of events) {
          const index = updatedEvents.findIndex((x) => x.id === event.id);
          // Handle recurring event occurrence
          if (event.recurring) {
            // Update the original event with a recurring exception
            const updatedEvent = event.original!;
            const updatedExceptionDates = (updatedEvent.recurringException as Array<string>) || [];
            updatedExceptionDates.push(event.start as string);
            updatedEvent.recurringException = updatedExceptionDates;
            updatedEvents.splice(index, 1, updatedEvent);
          } else {
            // Remove the event
            updatedEvents.splice(index, 1);
          }
        }
        setMyEvents(updatedEvents);
        setSelectedEvents([]);
        setToastMessage('Deleted');
        setToastOpen(true);
      }
      setConfirmOpen(false);
    },
    [myEvents, selectedEvent, selectedEvents],
  );

  const handleEventUpdate = useCallback(
    (args: MbscEventUpdateEvent) => {
      if (args.isDelete) {
        if (!isConfirmOpen) {
          deleteSelectedEvents();
        }
        return false;
      }
    },
    [isConfirmOpen, deleteSelectedEvents],
  );

  const handleEventDelete = useCallback(() => {
    if (!isConfirmOpen) {
      deleteSelectedEvents();
      return false;
    }
  }, [isConfirmOpen, deleteSelectedEvents]);

  const handleEventRightClick = useCallback((args: MbscEventClickEvent) => {
    args.domEvent.preventDefault();
    setSelectedEvent(args.event);
    setMenuAnchor(args.domEvent.target);
    setTimeout(() => {
      setMenuOpen(true);
    });
  }, []);

  const handleSelectedEventsChange = useCallback((args: MbscSelectedEventsChangeEvent) => {
    setSelectedEvents(args.events);
  }, []);

  const handleMenuChange = useCallback(
    (args: MbscSelectChangeEvent) => {
      setMenuAction(args.value);
      if (args.value === 'update') {
        updateSelectedEvents();
      } else if (args.value === 'delete') {
        deleteSelectedEvents();
      }
    },
    [deleteSelectedEvents, updateSelectedEvents],
  );

  const handleMenuClose = useCallback(() => {
    setMenuAction('');
    setMenuOpen(false);
  }, []);

  const handleDeleteKey = useCallback(
    (ev: KeyboardEvent) => {
      if (!isConfirmOpen && (ev.code === 'Delete' || ev.code === 'Backspace' || ev.keyCode === 8 || ev.keyCode === 46)) {
        deleteSelectedEvents();
      }
    },
    [isConfirmOpen, deleteSelectedEvents],
  );

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events) => {
        setMyEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <Page className="mds-bulk-actions" onKeyDown={handleDeleteKey}>
      <div className="mbsc-grid mbsc-no-padding">
        <div className="mbsc-row">
          <div className="mds-bulk-actions-calendar mbsc-col-sm-9 mbsc-push-sm-3">
            <Eventcalendar
              data={myEvents}
              ref={calRef}
              view={myView}
              selectMultipleEvents={true}
              selectedEvents={selectedEvents}
              onEventDelete={handleEventDelete}
              onEventUpdate={handleEventUpdate}
              onEventRightClick={handleEventRightClick}
              onSelectedEventsChange={handleSelectedEventsChange}
            />
            <Select
              anchor={menuAnchor}
              data={menuData}
              display="anchored"
              isOpen={menuOpen}
              showInput={false}
              touchUi={false}
              value={menuAction}
              onChange={handleMenuChange}
              onClose={handleMenuClose}
            />
          </div>
          <div className="mbsc-col-sm-3 mbsc-pull-sm-9 mbsc-flex-col">
            <div className="mbsc-button-group-block">
              <Button onClick={selectAllEvents}>Select all from view</Button>
              <Button onClick={resetSelection}>Reset selection</Button>
              <Button onClick={updateSelectedEvents}>Update selected</Button>
            </div>
            <div className="mbsc-form-group-title">Currently selected</div>
            <div className="mds-bulk-actions-event-list mbsc-padding mbsc-flex-1-1">
              <ul>
                {selectedEvents.map((e, i) => (
                  <li key={i}>{e.title}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Confirm
        isOpen={isConfirmOpen}
        title="Are you sure you want to delete the following events?"
        message={confirmMessage}
        okText="Delete"
        onClose={handleConfirmClose}
      />
      <Toast isOpen={isToastOpen} message={toastMessage} onClose={handleToastClose} />
    </Page>
  );
}

export default App;
