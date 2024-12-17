import {
  Button,
  Datepicker,
  Eventcalendar,
  formatDate,
  Input,
  MbscCalendarEvent,
  MbscDatepickerChangeEvent,
  MbscDatepickerValue,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscEventCreatedEvent,
  MbscEventDeletedEvent,
  MbscEventUpdatedEvent,
  MbscPopupButton,
  MbscPopupOptions,
  MbscResource,
  MbscResponsiveOptions,
  MbscSlot,
  Popup,
  setOptions,
  Snackbar,
  Textarea /* localeImport */,
  Toast,
} from '@mobiscroll/react';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import './employee-shifts.css';

setOptions({
  // localeJs,
  // themeJs
});

const defaultShifts = [
  {
    start: 'dyndatetime(y,m,d-2,7)',
    end: 'dyndatetime(y,m,d-2,13)',
    title: '07:00 - 13:00',
    resource: 2,
    slot: 1,
  },
  {
    start: 'dyndatetime(y,m,d-2,7)',
    end: 'dyndatetime(y,m,d-2,13)',
    title: '07:00 - 13:00',
    resource: 3,
    slot: 1,
  },
  {
    start: 'dyndatetime(y,m,d-2,7)',
    end: 'dyndatetime(y,m,d-2,13)',
    title: '07:00 - 13:00',
    resource: 6,
    slot: 1,
  },
  {
    start: 'dyndatetime(y,m,d-2,12)',
    end: 'dyndatetime(y,m,d-2,18)',
    title: '12:00 - 18:00',
    resource: 4,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d-2,12)',
    end: 'dyndatetime(y,m,d-2,18)',
    title: '12:00 - 18:00',
    resource: 5,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d-1,7)',
    end: 'dyndatetime(y,m,d-1,13)',
    title: '07:00 - 13:00',
    resource: 1,
    slot: 1,
  },
  {
    start: 'dyndatetime(y,m,d-1,7)',
    end: 'dyndatetime(y,m,d-1,13)',
    title: '07:00 - 13:00',
    resource: 2,
    slot: 1,
  },
  {
    start: 'dyndatetime(y,m,d-1,7)',
    end: 'dyndatetime(y,m,d-1,13)',
    title: '07:00 - 13:00',
    resource: 6,
    slot: 1,
  },
  {
    start: 'dyndatetime(y,m,d-1,12)',
    end: 'dyndatetime(y,m,d-1,18)',
    title: '12:00 - 18:00',
    resource: 3,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d-1,12)',
    end: 'dyndatetime(y,m,d-1,18)',
    title: '12:00 - 18:00',
    resource: 5,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d,7)',
    end: 'dyndatetime(y,m,d,13)',
    title: '07:00 - 13:00',
    resource: 1,
    slot: 1,
  },
  {
    start: 'dyndatetime(y,m,d,7)',
    end: 'dyndatetime(y,m,d,13)',
    title: '07:00 - 13:00',
    resource: 3,
    slot: 1,
  },
  {
    start: 'dyndatetime(y,m,d,7)',
    end: 'dyndatetime(y,m,d,13)',
    title: '07:00 - 13:00',
    resource: 4,
    slot: 1,
  },
  {
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,18)',
    title: '12:00 - 18:00',
    resource: 2,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,18)',
    title: '12:00 - 18:00',
    resource: 6,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d+1,7)',
    end: 'dyndatetime(y,m,d+1,13)',
    title: '07:00 - 13:00',
    resource: 5,
    slot: 1,
  },
  {
    start: 'dyndatetime(y,m,d+1,7)',
    end: 'dyndatetime(y,m,d+1,13)',
    title: '07:00 - 13:00',
    resource: 6,
    slot: 1,
  },
  {
    start: 'dyndatetime(y,m,d+1,12)',
    end: 'dyndatetime(y,m,d+1,18)',
    title: '12:00 - 18:00',
    resource: 2,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d+1,12)',
    end: 'dyndatetime(y,m,d+1,18)',
    title: '12:00 - 18:00',
    resource: 4,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d+2,7)',
    end: 'dyndatetime(y,m,d+2,13)',
    title: '07:00 - 13:00',
    resource: 1,
    slot: 1,
  },
  {
    start: 'dyndatetime(y,m,d+2,7)',
    end: 'dyndatetime(y,m,d+2,13)',
    title: '07:00 - 13:00',
    resource: 5,
    slot: 1,
  },
  {
    start: 'dyndatetime(y,m,d+2,12)',
    end: 'dyndatetime(y,m,d+2,18)',
    title: '12:00 - 18:00',
    resource: 2,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d+2,12)',
    end: 'dyndatetime(y,m,d+2,18)',
    title: '12:00 - 18:00',
    resource: 3,
    slot: 2,
  },
  {
    start: 'dyndatetime(y,m,d+2,12)',
    end: 'dyndatetime(y,m,d+2,18)',
    title: '12:00 - 18:00',
    resource: 6,
    slot: 2,
  },
];

function App() {
  const [shifts, setShifts] = useState<MbscCalendarEvent[]>(defaultShifts);
  const [shift, setShift] = useState<MbscCalendarEvent>();
  const [shiftDates, setShiftDates] = useState<MbscDatepickerValue>([]);
  const [shiftNotes, setShiftNotes] = useState<string>();
  const [deletedShift, setDeletedShift] = useState<MbscCalendarEvent>();
  const [startInput, setStartInput] = useState<Input | null>(null);
  const [endInput, setEndInput] = useState<Input | null>(null);
  const [minTime, setMinTime] = useState<string>();
  const [maxTime, setMaxTime] = useState<string>();
  const [popupHeader, setPopupHeader] = useState<string>();
  const [toastMessage, setToastMessage] = useState<string>();
  const [isEdit, setEdit] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);
  const [isToastOpen, setToastOpen] = useState(false);

  const getShiftTimes = useCallback((event: MbscCalendarEvent) => {
    const d = event.start as Date;
    const start = new Date(d.getFullYear(), d.getMonth(), d.getDate(), event.slot === 1 ? 7 : 12);
    const end = new Date(d.getFullYear(), d.getMonth(), d.getDate(), event.slot === 1 ? 13 : 18);

    return {
      title: formatDate('HH:mm', start) + ' - ' + formatDate('HH:mm', end),
      start: start,
      end: end,
    };
  }, []);

  const fillPopup = useCallback((event: MbscCalendarEvent, isEdit: boolean) => {
    setEdit(isEdit);
    setMinTime(event.slot === 1 ? '07:00' : '12:00');
    setMaxTime(event.slot === 1 ? '13:00' : '18:00');
    setShift(event);
    setShiftDates([new Date(event.start as Date), new Date(event.end as Date)]);
    setShiftNotes(event.notes);
  }, []);

  const deleteEvent = useCallback(
    (event: MbscCalendarEvent) => {
      setShifts(shifts.filter((s) => s.id !== event.id));
      setDeletedShift(event);
      setSnackbarOpen(true);
    },
    [shifts],
  );

  const updateEvent = useCallback(
    (event: MbscCalendarEvent) => {
      // Update the event in the list
      const index = shifts.findIndex((s) => s.id === event.id);
      const newShifts = [...shifts];

      newShifts.splice(index, 1, event);
      setShifts(newShifts);
    },
    [shifts],
  );

  const saveEvent = useCallback(
    (event: MbscCalendarEvent) => {
      const dates = shiftDates as Date[];
      const start = dates[0];
      const end = dates[1] ? dates[1] : dates[0];

      const shiftStart = new Date(event.start as Date);
      const shiftEnd = new Date(event.end as Date);

      shiftStart.setHours(start.getHours(), start.getMinutes(), 0, 0);
      shiftEnd.setHours(end.getHours(), end.getMinutes(), 0, 0);

      event.start = shiftStart;
      event.end = shiftEnd;
      event.title = formatDate('HH:mm', start) + ' - ' + formatDate('HH:mm', end);
      event.notes = shiftNotes;

      if (isEdit) {
        updateEvent(event);
      } else {
        // Add the new event to the list
        setShifts([...shifts, event]);
      }
      setPopupOpen(false);
    },
    [isEdit, shifts, shiftDates, shiftNotes, updateEvent],
  );

  const staff = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: 'Ryan',
        color: '#e20000',
        title: 'Cloud System Engineer',
        img: 'https://img.mobiscroll.com/demos/m1.png',
      },
      {
        id: 2,
        name: 'Kate',
        color: '#60e81a',
        title: 'Help Desk Specialist',
        img: 'https://img.mobiscroll.com/demos/f1.png',
      },
      {
        id: 3,
        name: 'John',
        color: '#3ba7ff',
        title: 'Application Developer',
        img: 'https://img.mobiscroll.com/demos/m2.png',
      },
      {
        id: 4,
        name: 'Mark',
        color: '#e25dd2',
        title: 'Network Administrator',
        img: 'https://img.mobiscroll.com/demos/m3.png',
      },
      {
        id: 5,
        name: 'Sharon',
        color: '#f1e920',
        title: 'Data Quality Manager',
        img: 'https://img.mobiscroll.com/demos/f2.png',
      },
      {
        id: 6,
        name: 'Emma',
        color: '#1ac38d',
        title: 'Product Tactics Agent',
        img: 'https://img.mobiscroll.com/demos/f3.png',
      },
    ],
    [],
  );

  const mySlots = useMemo<MbscSlot[]>(
    () => [
      { id: 1, name: 'Morning' },
      { id: 2, name: 'Afternoon' },
    ],
    [],
  );

  const myInvalids = useMemo(
    () => [
      {
        start: 'dyndatetime(y,m,d+1,0)',
        end: 'dyndatetime(y,m,d+1,23,59)',
        resource: 4,
        slot: 1,
      },
      {
        start: 'dyndatetime(y,m,d-1,0)',
        end: 'dyndatetime(y,m,d-1,23,59)',
        resource: 2,
        slot: 2,
      },
    ],
    [],
  );

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: 'week',
        eventList: true,
        startDay: 1,
        endDay: 5,
      },
    }),
    [],
  );

  const popupButtons = useMemo<Array<MbscPopupButton | string>>(
    () =>
      isEdit
        ? [
            'cancel',
            {
              handler: () => {
                saveEvent(shift!);
              },
              keyCode: 'enter',
              text: 'Save',
              cssClass: 'mbsc-popup-button-primary',
            },
          ]
        : [
            'cancel',
            {
              handler: () => {
                saveEvent(shift!);
              },
              keyCode: 'enter',
              text: 'Add',
              cssClass: 'mbsc-popup-button-primary',
            },
          ],
    [isEdit, saveEvent, shift],
  );

  const popupResponsive: MbscResponsiveOptions<MbscPopupOptions> = useMemo(
    () => ({
      medium: {
        display: 'center',
        fullScreen: false,
        touchUi: false,
        width: 400,
      },
    }),
    [],
  );

  const snackbarButton = useMemo(
    () => ({
      action: () => {
        setShifts((prevShifts) => [...prevShifts, deletedShift!]);
      },
      text: 'Undo',
    }),
    [deletedShift],
  );

  const handleEventClick = useCallback(
    (args: MbscEventClickEvent) => {
      const event = args.event;
      const resource = args.resourceObj!;
      const slot = args.slotObj!;

      fillPopup(event, true);
      setPopupHeader(
        '<div>Edit ' +
          resource.name +
          '\'s hours</div><div class="mds-employee-shifts-header">' +
          formatDate('DDDD', new Date(event.start as Date)) +
          ' ' +
          slot.name +
          ', ' +
          formatDate('D MMMM YYYY', new Date(event.start as Date)) +
          '</div>',
      );
      setPopupOpen(true);
    },
    [fillPopup],
  );

  const handleEventCreated = useCallback(
    (args: MbscEventCreatedEvent) => {
      const event = args.event;
      const slot = args.slotObj!;

      fillPopup(event, false);
      setPopupHeader(
        '<div>New shift</div><div class="mds-employee-shifts-header">' +
          formatDate('DDDD', new Date(event.start as Date)) +
          ' ' +
          slot.name +
          ', ' +
          formatDate('D MMMM YYYY', new Date(event.start as Date)) +
          '</div>',
      );
      setPopupOpen(true);
    },
    [fillPopup],
  );

  const handleEventCreateFailed = useCallback(() => {
    setToastMessage("Can't create shift");
    setToastOpen(true);
  }, []);

  const handleEventDeleted = useCallback(
    (args: MbscEventDeletedEvent) => {
      deleteEvent(args.event);
    },
    [deleteEvent],
  );

  const handleEventUpdated = useCallback(
    (args: MbscEventUpdatedEvent) => {
      const shift = args.event;
      if (shift.slot !== args.oldEvent!.slot) {
        const data = getShiftTimes(shift);
        shift.start = data.start;
        shift.end = data.end;
        shift.title = data.title;
        updateEvent(shift);
      }
    },
    [getShiftTimes, updateEvent],
  );

  const handleEventUpdateFailed = useCallback(() => {
    setToastMessage("Can't move shift");
    setToastOpen(true);
  }, []);

  const handleShiftNotesChange = useCallback((ev: ChangeEvent<HTMLTextAreaElement>) => {
    setShiftNotes(ev.target.value);
  }, []);

  const handleShiftDatesChange = useCallback((args: MbscDatepickerChangeEvent) => {
    setShiftDates(args.value);
  }, []);

  const handleShiftDeleteClick = useCallback(() => {
    deleteEvent(shift!);
    setPopupOpen(false);
  }, [deleteEvent, shift]);

  const handlePopupClose = useCallback(() => {
    if (!isEdit) {
      // Remove event if popup is cancelled
      setShifts([...shifts]);
    }
    setPopupOpen(false);
  }, [isEdit, shifts]);

  const handleSnackbarClose = useCallback(() => {
    setSnackbarOpen(false);
  }, []);

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  const renderMyResource = useCallback(
    (resource: MbscResource) => (
      <div className="mbsc-flex">
        <img className="mds-employee-shifts-avatar" alt={resource.name} src={resource.img} />
        <div className="mds-employee-shifts-cont">
          <div className="mds-employee-shifts-name">{resource.name}</div>
          <div className="mds-employee-shifts-title">{resource.title}</div>
        </div>
      </div>
    ),
    [],
  );

  return (
    <>
      <Eventcalendar
        cssClass="mds-employee-shifts"
        clickToCreate={true}
        dragToCreate={false}
        dragToResize={false}
        dragToMove={true}
        data={shifts}
        eventOverlap={false}
        invalid={myInvalids}
        resources={staff}
        slots={mySlots}
        view={myView}
        extendDefaultEvent={getShiftTimes}
        renderResource={renderMyResource}
        onEventClick={handleEventClick}
        onEventCreated={handleEventCreated}
        onEventCreateFailed={handleEventCreateFailed}
        onEventDeleted={handleEventDeleted}
        onEventUpdated={handleEventUpdated}
        onEventUpdateFailed={handleEventUpdateFailed}
      />
      <Popup
        buttons={popupButtons}
        display="bottom"
        contentPadding={false}
        fullScreen={true}
        headerText={popupHeader}
        isOpen={isPopupOpen}
        responsive={popupResponsive}
        scrollLock={false}
        onClose={handlePopupClose}
      >
        <Datepicker
          controls={['time']}
          display="anchored"
          minTime={minTime}
          maxTime={maxTime}
          select="range"
          showRangeLabels={false}
          stepMinute={30}
          startInput={startInput}
          endInput={endInput}
          timeWheels="|h:mm A|"
          touchUi={false}
          value={shiftDates}
          onChange={handleShiftDatesChange}
        />
        <div className="mbsc-form-group">
          <Input ref={setStartInput} dropdown={true} label="Shift start" />
          <Input ref={setEndInput} dropdown={true} label="Shift end" />
        </div>
        <div className="mbsc-form-group">
          <Textarea label="Notes" value={shiftNotes} onChange={handleShiftNotesChange} />
        </div>
        {isEdit && (
          <div className="mbsc-button-group">
            <Button className="mbsc-button-block" color="danger" variant="outline" onClick={handleShiftDeleteClick}>
              Delete shift
            </Button>
          </div>
        )}
      </Popup>
      <Snackbar message="Shift deleted" isOpen={isSnackbarOpen} onClose={handleSnackbarClose} button={snackbarButton} />
      <Toast message={toastMessage} isOpen={isToastOpen} onClose={handleToastClose} />
    </>
  );
}

export default App;
