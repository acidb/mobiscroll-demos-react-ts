import {
  Button,
  Datepicker,
  Eventcalendar,
  formatDate,
  Input,
  MbscCalendarEvent,
  MbscDatepickerChangeEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscEventCreatedEvent,
  MbscEventDeletedEvent,
  MbscNewEventData,
  MbscPopupButton,
  MbscResource,
  MbscSlot,
  Popup,
  setOptions,
  Snackbar,
  Textarea /* localeImport */,
} from '@mobiscroll/react';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import './employee-shifts.css';

setOptions({
  // localeJs,
  // themeJs
});

const staff: MbscResource[] = [
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
];

const defaultShifts: MbscCalendarEvent[] = [
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

const mySlots: MbscSlot[] = [
  {
    id: 1,
    name: 'Morning',
  },
  {
    id: 2,
    name: 'Afternoon',
  },
];

const myInvalid = [
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
];

const viewSettings: MbscEventcalendarView = {
  timeline: {
    type: 'week',
    eventList: true,
    startDay: 1,
    endDay: 5,
  },
};

const responsivePopup = {
  medium: {
    display: 'center',
    width: 400,
    fullScreen: false,
    touchUi: false,
    showOverlay: false,
  },
};

function App() {
  const [shifts, setShifts] = useState<MbscCalendarEvent[]>(defaultShifts);
  const [tempShift, setTempShift] = useState<MbscCalendarEvent>();
  const [start, startRef] = useState<Input | null>(null);
  const [end, endRef] = useState<Input | null>(null);
  const [min, setMinTime] = useState<string>('');
  const [max, setMaxTime] = useState<string>('');
  const [isPopupOpen, setOpen] = useState<boolean>(false);
  const [isEdit, setEdit] = useState<boolean>(false);
  const [headerText, setHeader] = useState<string>('');
  const [shiftDate, setDate] = useState<Date[]>([]);
  const [shiftNotes, setNotes] = useState<string>('');
  const [isSnackbarOpen, setSnackbarOpen] = useState<boolean>(false);

  const saveEvent = useCallback(() => {
    const start = new Date(shiftDate[0]);
    const end = new Date(shiftDate[1]);
    const newEvent = {
      id: tempShift!.id,
      title: formatDate('HH:mm', start) + ' - ' + formatDate('HH:mm', end),
      notes: shiftNotes,
      start: start,
      end: end,
      resource: tempShift!.resource,
      slot: tempShift!.slot,
    };
    if (isEdit) {
      // update the event in the list
      const index = shifts.findIndex((x) => x.id === tempShift!.id);
      const newEventList = [...shifts];

      newEventList.splice(index, 1, newEvent);
      setShifts(newEventList);
    } else {
      // add the new event to the list
      setShifts([...shifts, newEvent]);
    }
    // close the popup
    setOpen(false);
  }, [isEdit, shifts, shiftNotes, tempShift, shiftDate]);

  const deleteEvent = useCallback(
    (event: MbscCalendarEvent) => {
      setShifts(shifts.filter((item) => item.id !== event.id));
      setTempShift(event);
      setSnackbarOpen(true);
    },
    [shifts],
  );

  const loadPopupForm = useCallback((event: MbscCalendarEvent) => {
    setDate([new Date(event.start as string), new Date(event.end as string)]);
    setNotes(event.notes);
  }, []);

  // handle popup form changes
  const notesChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setNotes(ev.target.value);
  }, []);

  const onDeleteClick = useCallback(() => {
    deleteEvent(tempShift!);
    setOpen(false);
  }, [deleteEvent, tempShift]);

  // scheduler options
  const handleEventClick = useCallback(
    (args: MbscEventClickEvent) => {
      const event = args.event;
      const resource = staff.find((r) => r.id === event.resource);
      const slot = mySlots.find((s) => s.id === event.slot);
      setHeader(
        '<div>Edit ' +
          resource!.name +
          '\'s hours</div><div class="employee-shifts-day">' +
          formatDate('DDDD', new Date(event.start as string)) +
          ' ' +
          slot!.name +
          ',' +
          formatDate('DD MMMM YYYY', new Date(event.start as string)) +
          '</div>',
      );
      setMinTime(event.slot === 1 ? '07:00' : '12:00');
      setMaxTime(event.slot === 1 ? '13:00' : '18:00');
      setEdit(true);
      setTempShift({ ...event });
      // fill popup form with event data
      loadPopupForm(event);
      setOpen(true);
    },
    [loadPopupForm],
  );

  const handleEventCreated = useCallback(
    (args: MbscEventCreatedEvent) => {
      const event = args.event;
      const slot = mySlots.find((s) => s.id === event.slot);
      setHeader(
        '<div>New shift</div><div class="employee-shifts-day">' +
          formatDate('DDDD', new Date(event.start as string)) +
          ' ' +
          slot!.name +
          ',' +
          formatDate('DD MMMM YYYY', new Date(event.start as string)) +
          '</div>',
      );
      setEdit(false);
      setTempShift(event);
      // fill popup form with event data
      loadPopupForm(event);
      // open the popup
      setOpen(true);
    },
    [loadPopupForm],
  );

  const handleEventDeleted = useCallback(
    (args: MbscEventDeletedEvent) => {
      deleteEvent(args.event);
    },
    [deleteEvent],
  );

  // popup options
  const popupButtons = useMemo<(string | MbscPopupButton)[]>(() => {
    if (isEdit) {
      return [
        'cancel',
        {
          handler: () => {
            saveEvent();
          },
          keyCode: 'enter',
          text: 'Save',
          cssClass: 'mbsc-popup-button-primary',
        },
      ];
    } else {
      return [
        'cancel',
        {
          handler: () => {
            saveEvent();
          },
          keyCode: 'enter',
          text: 'Add',
          cssClass: 'mbsc-popup-button-primary',
        },
      ];
    }
  }, [isEdit, saveEvent]);

  const onPopupClose = useCallback(() => {
    if (!isEdit) {
      // refresh the list, if add popup was canceled, to remove the temporary event
      setShifts([...shifts]);
    }
    setOpen(false);
  }, [isEdit, shifts]);

  const extendMyDefaultEvent = useCallback((args: MbscNewEventData) => {
    const d = args.start;
    const start = new Date(d.getFullYear(), d.getMonth(), d.getDate(), args.slot === 1 ? 7 : 12);
    const end = new Date(d.getFullYear(), d.getMonth(), d.getDate(), args.slot === 1 ? 13 : 18);

    return {
      title: formatDate('HH:mm', start) + ' - ' + formatDate('HH:mm', end),
      start: start,
      end: end,
      resource: args.resource,
    };
  }, []);

  const renderMyResource = useCallback(
    (resource: MbscResource) => (
      <div className="employee-shifts-cont">
        <div className="employee-shifts-name">{resource.name}</div>
        <div className="employee-shifts-title">{resource.title}</div>
        <img className="employee-shifts-avatar" src={resource.img} alt="Avatar" />
      </div>
    ),
    [],
  );

  const dateChange = useCallback((args: MbscDatepickerChangeEvent) => {
    setDate(args.value as Date[]);
  }, []);

  const handleSnackbarClose = useCallback(() => {
    setSnackbarOpen(false);
  }, []);

  return (
    <div>
      <Eventcalendar
        view={viewSettings}
        data={shifts}
        resources={staff}
        slots={mySlots}
        invalid={myInvalid}
        dragToCreate={false}
        dragToResize={false}
        dragToMove={true}
        clickToCreate={true}
        extendDefaultEvent={extendMyDefaultEvent}
        onEventClick={handleEventClick}
        onEventCreated={handleEventCreated}
        onEventDeleted={handleEventDeleted}
        renderResource={renderMyResource}
        cssClass="md-employee-shifts"
      />
      <Popup
        display="bottom"
        fullScreen={true}
        contentPadding={false}
        headerText={headerText}
        buttons={popupButtons}
        isOpen={isPopupOpen}
        onClose={onPopupClose}
        responsive={responsivePopup}
        cssClass="employee-shifts-popup"
      >
        <div className="mbsc-form-group">
          <Input ref={startRef} dropdown={true} label="Shift start"></Input>
          <Input ref={endRef} dropdown={true} label="Shift end"></Input>
          <Datepicker
            select="range"
            controls={['time']}
            startInput={start}
            endInput={end}
            display="anchored"
            showRangeLabels={false}
            touchUi={false}
            onChange={dateChange}
            value={shiftDate}
            stepMinute={30}
            timeWheels="|h:mm A|"
            minTime={min}
            maxTime={max}
          />
        </div>
        <div className="mbsc-form-group">
          <Textarea label="Notes" value={shiftNotes} onChange={notesChange} />
        </div>
        {isEdit && (
          <div className="mbsc-button-group">
            <Button className="mbsc-button-block" color="danger" variant="outline" onClick={onDeleteClick}>
              Delete shift
            </Button>
          </div>
        )}
      </Popup>
      <Snackbar
        message="Event deleted"
        isOpen={isSnackbarOpen}
        onClose={handleSnackbarClose}
        button={{
          action: () => {
            setShifts((prevEvents) => [...prevEvents, tempShift!]);
          },
          text: 'Undo',
        }}
      />
    </div>
  );
}
export default App;
