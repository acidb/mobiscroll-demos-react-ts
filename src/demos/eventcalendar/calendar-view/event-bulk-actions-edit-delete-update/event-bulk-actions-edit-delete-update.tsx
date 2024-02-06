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
  MbscPageLoadingEvent,
  MbscSelectChangeEvent,
  MbscSelectedEventsChangeEvent,
  Page,
  Select,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './event-bulk-actions-edit-delete-update.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [mySelectedEvents, setSelectedEvents] = useState<MbscCalendarEvent[]>([]);
  const [firstDay, setFirstDay] = useState<Date>();
  const [lastDay, setLastDay] = useState<Date>();
  const [menuAnchor, setMenuAnchor] = useState();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [selectedValue, setSelected] = useState<string>('');
  const [confirmOpen, setConfirmOpen] = useState<boolean>(false);
  const [toastOpen, setToastOpen] = useState<boolean>(false);
  const [confirmMessage, setConfirmMessage] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string>('');

  const { current: myView } = useRef<MbscEventcalendarView>({ calendar: { labels: true } });
  const calRef = useRef<Eventcalendar>(null);

  const selectData = useMemo(
    () => [
      { text: 'Update', value: 'update' },
      { text: 'Delete', value: 'delete' },
    ],
    [],
  );

  const deleteSelectedEvents = useCallback(() => {
    setConfirmMessage(mySelectedEvents.map((e) => e.title).join(', '));
    setConfirmOpen(true);
  }, [mySelectedEvents]);

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
        origEvent!.recurringException = exc;

        // update the event in the list
        const index = eventsToUpdate.findIndex((x) => x.id === origEvent.id);
        eventsToUpdate.splice(index, 1, origEvent);
      } else {
        const newEv = event;
        newEv.color = 'orange';
        const index = eventsToUpdate.findIndex((x) => x.id === newEv.id);
        eventsToUpdate.splice(index, 1, newEv);
      }
    }

    setToastMessage("All selected event's color changed to orange");
    setToastOpen(true);
    setEvents(eventsToUpdate);
    setSelectedEvents([]);
  }, [myEvents, mySelectedEvents]);

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

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

            // update the event in the list
            const index = eventsToUpdate.findIndex((x) => x.id === origEvent.id);
            eventsToUpdate.splice(index, 1, origEvent);
          } else {
            eventsToUpdate = eventsToUpdate.filter((ev) => ev.id !== event.id);
          }
        }

        setEvents(eventsToUpdate);
        setSelectedEvents([]);
        setToastMessage('Deleted');
        setToastOpen(true);
      }
      setConfirmOpen(false);
    },
    [myEvents, mySelectedEvents],
  );

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

  const handlePageLoading = useCallback((args: MbscPageLoadingEvent) => {
    setTimeout(() => {
      setFirstDay(args.firstDay);
      setLastDay(args.lastDay);
    });
  }, []);

  const handleSelectedEventsChange = useCallback((args: MbscSelectedEventsChangeEvent) => {
    setSelectedEvents(args.events);
  }, []);

  const handleEventRightClick = useCallback((args: MbscEventClickEvent) => {
    args.domEvent.preventDefault();
    setMenuAnchor(args.domEvent.target);
    setTimeout(() => {
      setMenuOpen(true);
    });
  }, []);

  const selectAllEvents = useCallback(() => {
    const selectedEvents = calRef.current!.getEvents(firstDay, lastDay);
    setSelectedEvents(selectedEvents);
    setToastMessage('All events selected from view');
    setToastOpen(true);
  }, [firstDay, lastDay]);

  const resetSelection = useCallback(() => {
    setSelectedEvents([]);
    setToastMessage('Selection cleared');
    setToastOpen(true);
  }, []);

  const handleSelectChange = useCallback(
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

  const handleSelectClose = useCallback(() => {
    setSelected('');
    setMenuOpen(false);
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
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
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
              onEventRightClick={handleEventRightClick}
              onPageLoading={handlePageLoading}
              onSelectedEventsChange={handleSelectedEventsChange}
            />
            <Select
              inputProps={{ type: 'hidden' }}
              display="anchored"
              touchUi={false}
              anchor={menuAnchor}
              data={selectData}
              value={selectedValue}
              isOpen={menuOpen}
              onChange={handleSelectChange}
              onClose={handleSelectClose}
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
                {mySelectedEvents.map((e, i) => (
                  <li key={i}>{e.title}</li>
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
      <Toast isOpen={toastOpen} message={toastMessage} onClose={handleToastClose} />
    </Page>
  );
};
export default App;
