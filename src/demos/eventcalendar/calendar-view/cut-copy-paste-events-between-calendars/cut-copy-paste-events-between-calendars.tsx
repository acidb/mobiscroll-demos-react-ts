import {
  Eventcalendar,
  MbscCalendarEvent,
  MbscCellClickEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscEventDeletedEvent,
  MbscPageLoadingEvent,
  MbscSelectChangeEvent,
  MbscSelectedEventsChangeEvent,
  Page,
  Segmented,
  SegmentedGroup,
  Select,
  setOptions,
  Snackbar,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { ChangeEvent, FC, KeyboardEvent, useCallback, useRef, useState } from 'react';
import './cut-copy-paste-events-between-calendars.css';

setOptions({
  // localeJs,
  // themeJs
});

const today = new Date();

const viewSettings: MbscEventcalendarView = {
  calendar: { labels: 'all' },
};
const menu = [
  { text: 'Copy', value: 'c' },
  { text: 'Cut', value: 'x' },
  { text: 'Paste', value: 'v' },
  { text: 'Delete', value: 'delete' },
];
const disabledMenu = [
  { text: 'Copy', value: 'c', disabled: true },
  { text: 'Cut', value: 'x', disabled: true },
  { text: 'Paste', value: 'v' },
  { text: 'Delete', value: 'delete', disabled: true },
];

const App: FC = () => {
  const [selectValue, setSelectValue] = useState(null);
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement>();
  const [activeCalendar, setActiveCalendar] = useState<string>('first');
  const [cutCalendar, setCutCalendar] = useState<string>('first');
  const [toDate, setToDate] = useState(new Date());
  const [firstToDate, setFirstToDate] = useState(today);
  const [secondToDate, setSecondToDate] = useState(today);
  const [originDate, setOriginDate] = useState(today);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [menuData, setMenuData] = useState(menu);
  const [firstSelectedEvents, setFirstSelectedEvents] = useState<MbscCalendarEvent[]>([]);
  const [secondSelectedEvents, setSecondSelectedEvents] = useState<MbscCalendarEvent[]>([]);
  const [selectedEvents, setSelectedEvents] = useState<MbscCalendarEvent[]>([]);
  const [moveEvents, setMoveEvents] = useState<MbscCalendarEvent[]>([]);
  const [pastedEvents, setPastedEvents] = useState<MbscCalendarEvent[]>([]);
  const [deletedEvents, setDeletedEvents] = useState<MbscCalendarEvent[]>([]);
  const [isToastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarButton, setSnackbarButton] = useState<{ action: () => void; text: string }>();

  const [firstEvents, setFirstEvents] = useState<MbscCalendarEvent[]>([
    {
      start: 'dyndatetime(y,m,2,9)',
      end: 'dyndatetime(y,m,6,18)',
      title: 'Business of Software Conference',
      color: '#ff6d42',
    },
    {
      start: 'dyndatetime(y,m,10,7)',
      end: 'dyndatetime(y,m,10,8)',
      title: 'Green box to post office',
      color: '#6e7f29',
    },
    {
      start: 'dyndatetime(y,m,15,9,30)',
      end: 'dyndatetime(y,m,15,10,30)',
      title: 'Product team mtg.',
      color: '#f67944',
    },
    {
      start: 'dyndatetime(y,m,23,11,0)',
      end: 'dyndatetime(y,m,23,11,45)',
      title: 'Stakeholder mtg.',
      color: '#a144f6',
    },
    {
      start: 'dyndatetime(y,m,28,13,0)',
      end: 'dyndatetime(y,m,28,13,45)',
      title: "Lunch @ Butcher's",
      color: '#00aabb',
    },
  ]);

  const [secondEvents, setSecondEvents] = useState<MbscCalendarEvent[]>([
    {
      start: 'dyndatetime(y,m,4,8,45)',
      end: 'dyndatetime(y,m,4,10)',
      title: 'Quick mtg. with Martin',
      color: '#de3d83',
    },
    {
      start: 'dyndatetime(y,m,8,15,0)',
      end: 'dyndatetime(y,m,8,16,0)',
      title: 'General orientation',
      color: '#a71111',
    },
    {
      start: 'dyndatetime(y,m,10,13)',
      end: 'dyndatetime(y,m,14,21)',
      title: 'Friends binge marathon',
      color: '#7bde83',
    },
    {
      start: 'dyndatetime(y,m,23,8)',
      end: 'dyndatetime(y,m,27,9)',
      title: 'Product team mtg.',
      color: '#913aa7',
    },
  ]);

  const dummyRef = useRef<HTMLDivElement>(null);
  const isMenuOpen = useRef<boolean>();
  const action = useRef<string>();

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  const handleSnackbarClose = useCallback(() => {
    setSnackbarOpen(false);
  }, []);

  const handlePageLoading = useCallback(
    (args: MbscPageLoadingEvent) => {
      setTimeout(() => {
        if (activeCalendar === 'first') {
          setFirstToDate(args.month!);
        } else {
          setSecondToDate(args.month!);
        }
        setToDate(args.month!);
      });
    },
    [activeCalendar],
  );

  const handleCellRightClick = useCallback(
    (args: MbscCellClickEvent) => {
      if (!isMenuOpen.current) {
        args.domEvent.preventDefault();
        setMenuData(disabledMenu);
        setMenuAnchor(args.target);
        setTimeout(() => {
          setMenuOpen(true);
        });
      }
    },
    [isMenuOpen],
  );

  const handleEventRightClick = useCallback(
    (args: MbscEventClickEvent) => {
      const activeEvents = activeCalendar === 'first' ? firstEvents : secondEvents;
      if (activeEvents.length <= 1) {
        if (activeCalendar === 'first') {
          setFirstEvents([args.event]);
        } else {
          setSecondEvents([args.event]);
        }
      }
      args.domEvent.preventDefault();
      setMenuData(menu);
      setMenuAnchor(args.domEvent.target);
      setTimeout(() => {
        setMenuOpen(true);
      });
      isMenuOpen.current = true;
    },
    [activeCalendar, firstEvents, secondEvents],
  );

  const handleEventDeleted = useCallback(
    (args: MbscEventDeletedEvent) => {
      setDeletedEvents(args.events!);
      action.current = 'delete';
      setTimeout(() => {
        setSnackbarButton({
          action: () => {
            const activeEvents = activeCalendar === 'first' ? firstEvents : secondEvents;
            let eventsToUpdate = [...activeEvents];
            for (const event of deletedEvents) {
              eventsToUpdate = eventsToUpdate.filter((ev) => ev.id !== event.id);
            }

            if (activeCalendar === 'first') {
              setFirstEvents(eventsToUpdate);
            } else {
              setSecondEvents(eventsToUpdate);
            }

            setDeletedEvents([]);
          },
          text: 'Undo',
        });
        setSnackbarMessage('Event' + (deletedEvents.length === 1 ? '' : 's') + ' deleted');
        setSnackbarOpen(true);
      });
      dummyRef.current!.focus();
    },
    [activeCalendar, deletedEvents, firstEvents, secondEvents],
  );

  const getActiveEvents = useCallback(
    () => (activeCalendar === 'first' ? firstEvents : secondEvents),
    [activeCalendar, firstEvents, secondEvents],
  );

  const getActiveSelectedEvents = useCallback(
    () => (activeCalendar === 'first' ? firstSelectedEvents : secondSelectedEvents),
    [activeCalendar, firstSelectedEvents, secondSelectedEvents],
  );

  const monthDiff = useCallback((d1: Date, d2: Date) => d2.getMonth() - d1.getMonth() + 12 * (d2.getFullYear() - d1.getFullYear()), []);

  const pasteEvents = useCallback(() => {
    const activeEvents = getActiveEvents();
    const activeSelectedEvents = selectedEvents;
    let eventsToUpdate = [...activeEvents];
    if (activeSelectedEvents.length > 0) {
      for (const event of activeSelectedEvents) {
        const newEvent = Object.assign({}, event);
        const startDate = new Date(event.start as string);
        const endDate = new Date(event.end as string);
        const diff = Math.abs(+endDate - +startDate);

        newEvent.start = new Date(startDate.setMonth(startDate.getMonth() - monthDiff(toDate, originDate)));
        newEvent.end = new Date(startDate.getTime() + diff);

        delete newEvent.id;

        eventsToUpdate = [...eventsToUpdate, newEvent];

        setPastedEvents([...pastedEvents, newEvent]);
      }

      if (activeCalendar === 'first') {
        setFirstEvents(eventsToUpdate);
      } else {
        setSecondEvents(eventsToUpdate);
      }

      if (action.current === 'cut') {
        let cutEvs = activeCalendar === cutCalendar ? eventsToUpdate : cutCalendar === 'first' ? firstEvents : secondEvents;
        setMoveEvents([...selectedEvents]);
        for (const event of selectedEvents) {
          cutEvs = cutEvs.filter((ev) => ev.id !== event.id);
        }
        if (cutCalendar === 'first') {
          setFirstEvents(cutEvs);
        } else {
          setSecondEvents(cutEvs);
        }

        setTimeout(() => {
          setSnackbarButton({
            action: () => {
              let revertEvs = cutCalendar === 'first' ? firstEvents : secondEvents;
              for (const event of moveEvents) {
                revertEvs = [...revertEvs, event];
              }
              if (cutCalendar === 'first') {
                setFirstEvents(revertEvs);
              } else {
                setSecondEvents(revertEvs);
              }

              let cutEvs = getActiveEvents();
              for (const event of pastedEvents) {
                cutEvs = cutEvs.filter((ev) => ev.id !== event.id);
              }
              if (activeCalendar === 'first') {
                setFirstEvents(cutEvs);
              } else {
                setSecondEvents(cutEvs);
              }
              setToastMessage('Event' + (selectedEvents.length === 1 ? '' : 's') + ' reverted');
              setToastOpen(true);
            },
            text: 'Undo',
          });
          setSnackbarMessage('Event' + (selectedEvents.length === 1 ? '' : 's') + ' pasted');
          setSnackbarOpen(true);
        });
        dummyRef.current!.focus();
      } else {
        setToastMessage('Event' + (activeSelectedEvents.length === 1 ? '' : 's') + ' pasted');
        setToastOpen(true);
      }
      if (action.current !== 'copy') {
        setSelectedEvents([]);
      }
    }
  }, [
    action,
    activeCalendar,
    cutCalendar,
    firstEvents,
    getActiveEvents,
    monthDiff,
    moveEvents,
    originDate,
    pastedEvents,
    secondEvents,
    selectedEvents,
    toDate,
  ]);

  const deleteEvents = useCallback(() => {
    const activeEvents = getActiveEvents();
    let eventsToUpdate = [...activeEvents];
    action.current = 'delete';
    const activeSelectedEvents = getActiveSelectedEvents();

    if (activeSelectedEvents.length > 0) {
      setDeletedEvents(activeSelectedEvents);

      for (const event of activeSelectedEvents) {
        eventsToUpdate = eventsToUpdate.filter((ev) => ev.id !== event.id);
      }

      if (activeCalendar === 'first') {
        setFirstEvents(eventsToUpdate);
      } else {
        setSecondEvents(eventsToUpdate);
      }
      setTimeout(() => {
        setSnackbarButton({
          action: () => {
            for (const event of activeSelectedEvents) {
              eventsToUpdate = [...eventsToUpdate, event];
            }
            if (activeCalendar === 'first') {
              setFirstEvents(eventsToUpdate);
            } else {
              setSecondEvents(eventsToUpdate);
            }
            setDeletedEvents([]);
          },
          text: 'Undo',
        });
        setSnackbarMessage('Event' + (activeSelectedEvents.length === 1 ? '' : 's') + ' deleted');
        setSnackbarOpen(true);
      });
      dummyRef.current!.focus();
    }
  }, [activeCalendar, getActiveEvents, getActiveSelectedEvents]);

  const activateAction = useCallback(
    (type: string) => {
      if (selectedEvents.length > 0) {
        const act = type == 'copy' ? ' copied' : ' cut';
        setOriginDate(toDate);
        setToastMessage('Event' + (selectedEvents.length === 1 ? '' : 's') + act);
        setToastOpen(true);
      }
    },
    [selectedEvents, toDate],
  );

  const copyEvents = useCallback(() => {
    if (activeCalendar === 'first') {
      if (firstSelectedEvents.length > 0) {
        action.current = 'copy';
        setSelectedEvents(firstSelectedEvents);
        activateAction('copy');
      }
    } else {
      if (secondSelectedEvents.length > 0) {
        action.current = 'copy';
        setSelectedEvents(secondSelectedEvents);
        activateAction('copy');
      }
    }
  }, [activateAction, activeCalendar, firstSelectedEvents, secondSelectedEvents]);

  const cutEvents = useCallback(() => {
    if (activeCalendar === 'first') {
      if (firstSelectedEvents.length > 0) {
        action.current = 'cut';
        setSelectedEvents(firstSelectedEvents);
        setCutCalendar(activeCalendar);
        activateAction('cut');
        setDeletedEvents([]);
      }
    } else {
      if (secondSelectedEvents.length > 0) {
        action.current = 'cut';
        setSelectedEvents(secondSelectedEvents);
        setCutCalendar(activeCalendar);
        activateAction('cut');
        setDeletedEvents([]);
      }
    }
  }, [activateAction, activeCalendar, firstSelectedEvents, secondSelectedEvents]);

  const undoEvents = useCallback(() => {
    const activeEvents = getActiveEvents();
    let eventsToUpdate = [...activeEvents];
    if (action.current === 'delete') {
      for (const event of deletedEvents) {
        eventsToUpdate = [...eventsToUpdate, event];
      }
      if (activeCalendar === 'first') {
        setFirstEvents(eventsToUpdate);
      } else {
        setSecondEvents(eventsToUpdate);
      }
      setDeletedEvents([]);
    } else if (action.current === 'cut') {
      let revertEvs = cutCalendar === 'first' ? firstEvents : secondEvents;
      for (const event of moveEvents) {
        revertEvs = [...revertEvs, event];
      }
      if (cutCalendar === 'first') {
        setFirstEvents(revertEvs);
      } else {
        setSecondEvents(revertEvs);
      }

      let cutEvs = getActiveEvents();
      for (const event of pastedEvents) {
        cutEvs = cutEvs.filter((ev) => ev.id !== event.id);
      }
      if (activeCalendar === 'first') {
        setFirstEvents(cutEvs);
      } else {
        setSecondEvents(cutEvs);
      }

      setMoveEvents([]);
      setPastedEvents([]);
    }
  }, [action, activeCalendar, cutCalendar, deletedEvents, firstEvents, getActiveEvents, moveEvents, pastedEvents, secondEvents]);

  const detectAction = useCallback(
    (key: string) => {
      switch (key) {
        case 'delete': // delete
          deleteEvents();
          break;
        case 'c': // copy
          copyEvents();
          break;
        case 'x': // cut
          cutEvents();
          break;
        case 'z': // undo
          undoEvents();
          break;
        case 'v': // paste
          pasteEvents();
          break;
        default:
      }
    },
    [copyEvents, cutEvents, deleteEvents, pasteEvents, undoEvents],
  );

  const onFirstSelectedEventsChange = useCallback((args: MbscSelectedEventsChangeEvent) => {
    setFirstSelectedEvents(args.events);
  }, []);

  const onSecondSelectedEventsChange = useCallback((args: MbscSelectedEventsChangeEvent) => {
    setSecondSelectedEvents(args.events);
  }, []);

  const onSelectChange = useCallback(
    (args: MbscSelectChangeEvent) => {
      setSelectValue(args.value);
      detectAction(args.value);
    },
    [detectAction],
  );

  const onSelectClose = useCallback(() => {
    isMenuOpen.current = false;
    setMenuOpen(false);
    // clear selection
    setSelectValue(null);
  }, []);

  const switchCalendar = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      setActiveCalendar(ev.target.value);
      if (ev.target.value === 'first') {
        setToDate(firstToDate);
        setSecondSelectedEvents([]);
      } else {
        setToDate(secondToDate);
        setFirstSelectedEvents([]);
      }
    },
    [firstToDate, secondToDate, setFirstSelectedEvents, setSecondSelectedEvents],
  );

  const handleKeyDown = (ev: KeyboardEvent<HTMLDivElement>) => {
    if (ev.ctrlKey || ev.metaKey) {
      detectAction(ev.key);
    }
    if (ev.key === 'Delete') {
      detectAction('delete');
    }
  };

  return (
    <Page>
      <div onKeyDown={handleKeyDown}>
        <div className="mbsc-flex-col md-copy-cut-paste">
          <div className="mbsc-flex-none">
            <SegmentedGroup name="controlled" onChange={switchCalendar}>
              <Segmented value="first" checked={activeCalendar === 'first'}>
                First calendar
              </Segmented>
              <Segmented value="second" checked={activeCalendar === 'second'}>
                Second calendar
              </Segmented>
            </SegmentedGroup>
          </div>
          <div className="mbsc-flex-col mbsc-flex-1-1">
            <div id="demo-copy-cut-paste-first-cont" className="mbsc-flex-1-1 md-copy-cut-paste-cont">
              <Eventcalendar
                className={activeCalendar === 'first' ? '' : 'md-hide-calendar'}
                view={viewSettings}
                clickToCreate={true}
                dragToCreate={true}
                dragToMove={true}
                dragToResize={true}
                selectMultipleEvents={true}
                data={firstEvents}
                selectedEvents={firstSelectedEvents}
                onSelectedEventsChange={onFirstSelectedEventsChange}
                onPageLoading={handlePageLoading}
                onCellRightClick={handleCellRightClick}
                onEventRightClick={handleEventRightClick}
                onEventDeleted={handleEventDeleted}
              />
            </div>
            <div id="demo-copy-cut-paste-second-cont" className="mbsc-flex-1-1 md-copy-cut-paste-cont">
              <Eventcalendar
                className={activeCalendar === 'second' ? '' : 'md-hide-calendar'}
                view={viewSettings}
                clickToCreate={true}
                dragToCreate={true}
                dragToMove={true}
                dragToResize={true}
                selectMultipleEvents={true}
                data={secondEvents}
                selectedEvents={secondSelectedEvents}
                onSelectedEventsChange={onSecondSelectedEventsChange}
                onPageLoading={handlePageLoading}
                onCellRightClick={handleCellRightClick}
                onEventRightClick={handleEventRightClick}
                onEventDeleted={handleEventDeleted}
              />
            </div>
            <Select
              touchUi={false}
              display="anchored"
              anchor={menuAnchor}
              isOpen={menuOpen}
              buttons={[]}
              data={menuData}
              value={selectValue}
              onChange={onSelectChange}
              onClose={onSelectClose}
              inputProps={{ type: 'hidden' }}
            />
          </div>
        </div>
        <div tabIndex={-1} ref={dummyRef}></div>
      </div>
      <Toast isOpen={isToastOpen} message={toastMessage} onClose={handleToastClose} />
      <Snackbar isOpen={isSnackbarOpen} duration={3000} message={snackbarMessage} button={snackbarButton} onClose={handleSnackbarClose} />
    </Page>
  );
};
export default App;
