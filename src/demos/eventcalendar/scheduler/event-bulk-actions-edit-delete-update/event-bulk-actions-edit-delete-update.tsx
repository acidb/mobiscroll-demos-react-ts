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

const contextMenu = [
  {
    text: 'Update',
    value: 'update',
  },
  {
    text: 'Delete',
    value: 'delete',
  },
];

function App() {
  const [myEvents, setMyEvents] = useState<MbscCalendarEvent[]>([]);
  const [mySelectedEvents, setSelectedEvents] = useState<MbscCalendarEvent[]>([]);
  const [eventTitles, setEventTitles] = useState<Array<string>>([]);
  const [firstDay, setFirstDay] = useState<Date>();
  const [lastDay, setLastDay] = useState<Date>();
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement>();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [selectedValue, setSelected] = useState<string>('');
  const [confirmOpen, setConfirmOpen] = useState<boolean>(false);
  const [confirmMessage, setConfirmMessage] = useState<string>('');
  const [isToastOpen, setIsToastOpen] = useState<boolean>(false);
  const [toastText, setToastText] = useState<string>('');
  const toastContext = useMemo(() => '.md-bulk-operations-border', []);
  const myView = useMemo<MbscEventcalendarView>(() => ({ schedule: { type: 'week' } }), []);
  const calRef = useRef<Eventcalendar>(null);

  const getSelectedEventTitles = useCallback((events: MbscCalendarEvent[]) => {
    let titles: Array<string> = [];

    for (const event of events) {
      titles = [...titles, event.title!];
    }
    return titles;
  }, []);

  const refreshSelectedEvents = useCallback(
    (events: MbscCalendarEvent[]) => {
      setSelectedEvents(events);
      setEventTitles(getSelectedEventTitles(events));
    },
    [getSelectedEventTitles],
  );

  const deleteSelectedEvents = useCallback(() => {
    setConfirmMessage(getSelectedEventTitles(mySelectedEvents).join(', '));
    setConfirmOpen(true);
  }, [getSelectedEventTitles, mySelectedEvents]);

  const handleConfirmClose = useCallback(
    (result: boolean) => {
      if (result) {
        let eventsToUpdate = [...myEvents];

        for (const event of mySelectedEvents) {
          if (event.recurring) {
            const origEvent = event.original!;
            let exc = (origEvent.recurringException as Array<string>) || [];
            exc = [...exc, event.start as string];
            origEvent.recurringException = exc;

            // Update the event in the list
            const index = eventsToUpdate.findIndex((x) => x.id === origEvent.id);
            eventsToUpdate.splice(index, 1, origEvent);
          } else {
            eventsToUpdate = eventsToUpdate.filter((ev) => ev.id !== event.id);
          }
        }

        setMyEvents(eventsToUpdate);
        refreshSelectedEvents([]);

        setToastText('Deleted');
        setIsToastOpen(true);
      }
      setConfirmOpen(false);
    },
    [myEvents, mySelectedEvents, refreshSelectedEvents],
  );

  const updateSelectedEvents = useCallback(() => {
    const events = mySelectedEvents;
    let eventsToUpdate = [...myEvents];

    for (const event of events) {
      if (event.recurring) {
        const origEvent = event.original!;
        let exc = (origEvent.recurringException as Array<string>) || [];

        const newEvent = event;

        newEvent.recurring = undefined;
        newEvent.color = 'orange';
        newEvent.id += '_' + formatDate('YYYY-MM-DD', new Date(event.start as string));
        eventsToUpdate = [...eventsToUpdate, newEvent];

        exc = [...exc, event.start as string];
        origEvent.recurringException = exc;

        // Update the event in the list
        const index = eventsToUpdate.findIndex((x) => x.id === origEvent.id);
        eventsToUpdate.splice(index, 1, origEvent);
      } else {
        const newEv = event;
        newEv.color = 'orange';
        const index = eventsToUpdate.findIndex((x) => x.id === newEv.id);
        eventsToUpdate.splice(index, 1, newEv);
      }
    }

    setToastText("All selected event's color changed to orange");
    setIsToastOpen(true);

    setMyEvents(eventsToUpdate);
    refreshSelectedEvents([]);
  }, [myEvents, mySelectedEvents, refreshSelectedEvents]);

  const handleEventUpdate = useCallback(
    (args: MbscEventUpdateEvent) => {
      if (args.isDelete) {
        if (!confirmOpen) {
          deleteSelectedEvents();
        }
        return false;
      }
    },
    [confirmOpen, deleteSelectedEvents],
  );

  const handleEventDelete = useCallback(() => {
    if (!confirmOpen) {
      deleteSelectedEvents();
      return false;
    }
  }, [confirmOpen, deleteSelectedEvents]);

  const handlePageLoading = useCallback(() => {
    setTimeout(() => {
      setFirstDay(firstDay);
      setLastDay(lastDay);
    });
  }, [firstDay, lastDay]);

  const handleSelectedEventsChange = useCallback(
    (args: MbscSelectedEventsChangeEvent) => {
      refreshSelectedEvents(args.events);
    },
    [refreshSelectedEvents],
  );

  const handleEventRightClick = useCallback((args: MbscEventClickEvent) => {
    args.domEvent.preventDefault();
    setMenuAnchor(args.domEvent.target);
    setTimeout(() => {
      setMenuOpen(true);
    });
  }, []);

  const selectAllEvents = useCallback(() => {
    const selectedEvents = calRef.current!.getEvents(firstDay, lastDay);
    refreshSelectedEvents(selectedEvents);
    setToastText('All events selected from view');
    setIsToastOpen(true);
  }, [firstDay, lastDay, refreshSelectedEvents]);

  const resetSelection = useCallback(() => {
    refreshSelectedEvents([]);
    setToastText('Selection cleared');
    setIsToastOpen(true);
  }, [refreshSelectedEvents]);

  const selectChange = useCallback(
    (args: MbscSelectChangeEvent) => {
      setSelected(args.value);
      if (args.value === 'update') {
        updateSelectedEvents();
      } else if (args.value === 'delete') {
        deleteSelectedEvents();
      }
    },
    [deleteSelectedEvents, updateSelectedEvents],
  );

  const menuClose = useCallback(() => {
    setSelected('');
    setMenuOpen(false);
  }, []);

  const handleCloseToast = useCallback(() => {
    setIsToastOpen(false);
  }, []);

  const handleDeleteKey = useCallback(
    (ev: { keyCode: number }) => {
      if (!confirmOpen && (ev.keyCode === 8 || ev.keyCode === 46)) {
        deleteSelectedEvents();
      }
    },
    [confirmOpen, deleteSelectedEvents],
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
    <Page className="md-bulk-operations" onKeyDown={handleDeleteKey}>
      <div className="mbsc-grid mbsc-no-padding">
        <div className="mbsc-row">
          <div className="mbsc-col-sm-9 mbsc-push-sm-3">
            <Eventcalendar
              className="md-bulk-operations-border"
              ref={calRef}
              // drag
              data={myEvents}
              view={myView}
              selectMultipleEvents={true}
              selectedEvents={mySelectedEvents}
              onEventDelete={handleEventDelete}
              onEventUpdate={handleEventUpdate}
              onPageLoading={handlePageLoading}
              onSelectedEventsChange={handleSelectedEventsChange}
              onEventRightClick={handleEventRightClick}
            />
            <Select
              type="hidden"
              display="anchored"
              touchUi={false}
              anchor={menuAnchor}
              data={contextMenu}
              value={selectedValue}
              isOpen={menuOpen}
              onChange={selectChange}
              onClose={menuClose}
            />
          </div>
          <div className="mbsc-col-sm-3 mbsc-pull-sm-9">
            <div className="mbsc-form-group">
              <div className="mbsc-button-group-block">
                <Button onClick={selectAllEvents}>Select all this month</Button>
                <Button onClick={resetSelection}>Reset selection</Button>
                <Button onClick={updateSelectedEvents}>Update selected</Button>
              </div>
            </div>
            <div className="mbsc-form-group-title">Currently selected</div>
            <div className="mbsc-padding md-selected-event-list">
              <ul>
                {eventTitles.map((title, index) => (
                  <li key={index}>{title}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Confirm
        isOpen={confirmOpen}
        title="Are you sure you want to delete the following events?"
        message={confirmMessage}
        okText="Delete"
        onClose={handleConfirmClose}
      />
      <Toast message={toastText} context={toastContext} isOpen={isToastOpen} onClose={handleCloseToast} />
    </Page>
  );
}

export default App;
