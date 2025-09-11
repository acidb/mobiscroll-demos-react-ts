import {
  Button,
  Datepicker,
  Dropdown,
  Eventcalendar,
  Input,
  MbscCalendarEvent,
  MbscDatepickerChangeEvent,
  MbscDatepickerControl,
  MbscDatepickerOptions,
  MbscDateType,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscEventCreatedEvent,
  MbscEventDeletedEvent,
  MbscPopupButton,
  MbscPopupOptions,
  MbscResponsiveOptions,
  Popup,
  Segmented,
  SegmentedGroup,
  setOptions,
  Snackbar,
  Switch,
  Textarea /* localeImport */,
} from '@mobiscroll/react';
import { ChangeEvent, FC, MouseEvent, useCallback, useMemo, useRef, useState } from 'react';
import './create-read-update-delete-CRUD.css';

setOptions({
  // localeJs,
  // themeJs
});

const defaultEvents: MbscCalendarEvent[] = [
  {
    id: 1,
    start: 'dyndatetime(y,m,8,13)',
    end: 'dyndatetime(y,m,8,13,45)',
    title: "Lunch @ Butcher's",
    description: '',
    allDay: false,
    bufferBefore: 15,
    free: true,
    color: '#009788',
  },
  {
    id: 2,
    start: 'dyndatetime(y,m,d,15)',
    end: 'dyndatetime(y,m,d,16)',
    title: 'Conference',
    description: '',
    allDay: false,
    bufferBefore: 30,
    free: false,
    color: '#ff9900',
  },
  {
    id: 3,
    start: 'dyndatetime(y,m,d-1,18)',
    end: 'dyndatetime(y,m,d-1,22)',
    title: 'Site Visit',
    description: '',
    allDay: false,
    bufferBefore: 60,
    free: true,
    color: '#3f51b5',
  },
  {
    id: 4,
    start: 'dyndatetime(y,m,d+1,10,30)',
    end: 'dyndatetime(y,m,d+1,11,30)',
    title: 'Stakeholder mtg.',
    description: '',
    allDay: false,
    free: false,
    color: '#f44437',
  },
];

const colors = ['#ffeb3c', '#ff9900', '#f44437', '#ea1e63', '#9c26b0', '#3f51b5', '', '#009788', '#4baf4f', '#7e5d4e'];

const App: FC = () => {
  const [myEvents, setMyEvents] = useState<MbscCalendarEvent[]>(defaultEvents);
  const [tempEvent, setTempEvent] = useState<MbscCalendarEvent>();
  const [undoEvent, setUndoEvent] = useState<MbscCalendarEvent>();
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isEdit, setEdit] = useState<boolean>(false);
  const [anchor, setAnchor] = useState<HTMLElement>();
  const [start, startRef] = useState<Input | null>(null);
  const [end, endRef] = useState<Input | null>(null);
  const [popupEventTitle, setTitle] = useState<string | undefined>('');
  const [popupEventDescription, setDescription] = useState<string>('');
  const [popupEventAllDay, setAllDay] = useState<boolean>(true);
  const [popupTravelTime, setTravelTime] = useState<number>(0);
  const [popupEventDate, setDate] = useState<MbscDateType[]>([]);
  const [popupEventStatus, setStatus] = useState<string>('busy');
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [colorAnchor, setColorAnchor] = useState<HTMLDivElement>();
  const [selectedColor, setSelectedColor] = useState('');
  const [tempColor, setTempColor] = useState('');
  const [isSnackbarOpen, setSnackbarOpen] = useState<boolean>(false);

  const calInst = useRef<Eventcalendar>(null);
  const colorPicker = useRef<Popup>(null);

  const myView: MbscEventcalendarView = useMemo(() => ({ calendar: { labels: true } }), []);

  const colorButtons = useMemo<(string | MbscPopupButton)[]>(
    () => [
      'cancel',
      {
        text: 'Set',
        keyCode: 'enter',
        handler: () => {
          setSelectedColor(tempColor);
          setColorPickerOpen(false);
        },
        cssClass: 'mbsc-popup-button-primary',
      },
    ],
    [tempColor],
  );

  const colorResponsive: MbscResponsiveOptions<MbscPopupOptions> = useMemo(
    () => ({
      medium: {
        display: 'anchored',
        touchUi: false,
        buttons: [],
      },
    }),
    [],
  );

  const snackbarButton = useMemo(
    () => ({
      action: () => {
        setMyEvents((prevEvents) => [...prevEvents, undoEvent!]);
      },
      text: 'Undo',
    }),
    [undoEvent],
  );

  const handleSnackbarClose = useCallback(() => {
    setSnackbarOpen(false);
  }, []);

  const saveEvent = useCallback(() => {
    const newEvent = {
      id: tempEvent!.id,
      title: popupEventTitle,
      description: popupEventDescription,
      start: popupEventDate![0],
      end: popupEventDate![1],
      allDay: popupEventAllDay,
      bufferBefore: popupTravelTime,
      status: popupEventStatus,
      color: selectedColor,
    };
    if (isEdit) {
      // Update the event in the list
      const index = myEvents.findIndex((x) => x.id === tempEvent!.id);
      const newEventList = [...myEvents];

      newEventList.splice(index, 1, newEvent);
      setMyEvents(newEventList);
      // Here you can update the event in your storage as well
      // ...
    } else {
      // Add the new event to the list
      setMyEvents([...myEvents, newEvent]);
      // Here you can add the event to your storage as well
      // ...
    }
    calInst.current?.navigateToEvent(newEvent);
    // Close the popup
    setOpen(false);
  }, [
    isEdit,
    myEvents,
    popupEventAllDay,
    popupTravelTime,
    popupEventDate,
    popupEventDescription,
    popupEventStatus,
    popupEventTitle,
    tempEvent,
    selectedColor,
  ]);

  const deleteEvent = useCallback(
    (event: MbscCalendarEvent) => {
      const filteredEvents = myEvents.filter((item) => item.id !== event.id);
      setMyEvents(filteredEvents);
      setUndoEvent(event);
      setTimeout(() => {
        setSnackbarOpen(true);
      });
    },
    [myEvents],
  );

  const loadPopupForm = useCallback((event: MbscCalendarEvent) => {
    setTitle(event.title);
    setDescription(event.description);
    setDate([event.start!, event.end!]);
    setAllDay(event.allDay || false);
    setTravelTime(event.bufferBefore || 0);
    setStatus(event.status || 'busy');
  }, []);

  const titleChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setTitle(ev.target.value);
  }, []);

  const descriptionChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setDescription(ev.target.value);
  }, []);

  const allDayChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setAllDay(ev.target.checked);
  }, []);

  const travelTimeChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setTravelTime(Number(ev.target.value));
  }, []);

  const dateChange = useCallback((args: MbscDatepickerChangeEvent) => {
    setDate(args.value as Array<MbscDateType>);
  }, []);

  const statusChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setStatus(ev.target.value);
  }, []);

  const onDeleteClick = useCallback(() => {
    deleteEvent(tempEvent!);
    setOpen(false);
  }, [deleteEvent, tempEvent]);

  const onEventClick = useCallback(
    (args: MbscEventClickEvent) => {
      setEdit(true);
      setTempEvent({ ...args.event });
      // Fill popup form with event data
      loadPopupForm(args.event);
      setAnchor(args.domEvent.target);
      setOpen(true);
    },
    [loadPopupForm],
  );

  const onEventCreated = useCallback(
    (args: MbscEventCreatedEvent) => {
      setEdit(false);
      setTempEvent(args.event);
      // Fill popup form with event data
      loadPopupForm(args.event);
      setAnchor(args.target);
      // Open the popup
      setOpen(true);
    },
    [loadPopupForm],
  );

  const onEventDeleted = useCallback(
    (args: MbscEventDeletedEvent) => {
      deleteEvent(args.event);
    },
    [deleteEvent],
  );

  const onEventUpdated = useCallback(() => {
    // Here you can update the event in your storage as well, after drag & drop or resize
    // ...
  }, []);

  const controls = useMemo(() => (popupEventAllDay ? ['date'] : ['datetime']) as MbscDatepickerControl[], [popupEventAllDay]);
  const datepickerResponsive: MbscResponsiveOptions<MbscDatepickerOptions> = useMemo(
    () =>
      popupEventAllDay
        ? {
            medium: {
              controls: ['calendar'],
              touchUi: false,
            },
          }
        : {
            medium: {
              controls: ['calendar', 'time'],
              touchUi: false,
            },
          },
    [popupEventAllDay],
  );

  const headerText = useMemo<string>(() => (isEdit ? 'Edit event' : 'New Event'), [isEdit]);
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

  const popupResponsive: MbscResponsiveOptions<MbscPopupOptions> = useMemo(
    () => ({
      medium: {
        display: 'anchored',
        width: 400,
        fullScreen: false,
        touchUi: false,
      },
    }),
    [],
  );

  const onClose = useCallback(() => {
    if (!isEdit) {
      // Refresh the list, if add popup was canceled, to remove the temporary event
      setMyEvents([...myEvents]);
    }
    setOpen(false);
  }, [isEdit, myEvents]);

  const selectColor = useCallback((color: string) => {
    setTempColor(color);
  }, []);

  const openColorPicker = useCallback(
    (ev: MouseEvent<HTMLDivElement>) => {
      selectColor(selectedColor || '');
      setColorAnchor(ev.currentTarget); //CurrentTarget
      setColorPickerOpen(true);
    },
    [selectColor, selectedColor],
  );

  const changeColor = useCallback(
    (ev: MouseEvent<HTMLDivElement>) => {
      const color = ev.currentTarget.getAttribute('data-value')!;
      selectColor(color);
      if (!colorPicker.current!.s.buttons!.length) {
        setSelectedColor(color);
        setColorPickerOpen(false);
      }
    },
    [selectColor, setSelectedColor],
  );

  return (
    <>
      <Eventcalendar
        clickToCreate={true}
        dragToCreate={true}
        dragToMove={true}
        dragToResize={true}
        data={myEvents}
        ref={calInst}
        view={myView}
        onEventClick={onEventClick}
        onEventCreated={onEventCreated}
        onEventDeleted={onEventDeleted}
        onEventUpdated={onEventUpdated}
      />
      <Popup
        display="bottom"
        fullScreen={true}
        contentPadding={false}
        headerText={headerText}
        anchor={anchor}
        buttons={popupButtons}
        isOpen={isOpen}
        onClose={onClose}
        responsive={popupResponsive}
      >
        <div className="mbsc-form-group">
          <Input label="Title" value={popupEventTitle} onChange={titleChange} />
          <Textarea label="Description" value={popupEventDescription} onChange={descriptionChange} />
        </div>
        <div className="mbsc-form-group">
          <Switch label="All-day" checked={popupEventAllDay} onChange={allDayChange} />
          <Input ref={startRef} label="Starts" />
          <Input ref={endRef} label="Ends" />
          {!popupEventAllDay && (
            <div id="travel-time-group">
              <Dropdown label="Travel time" value={String(popupTravelTime)} onChange={travelTimeChange}>
                <option value="0">None</option>
                <option value="5">5 minutes</option>
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
                <option value="60">1 hour</option>
                <option value="90">1.5 hours</option>
                <option value="120">2 hours</option>
              </Dropdown>
            </div>
          )}
          <Datepicker
            select="range"
            controls={controls}
            touchUi={true}
            startInput={start}
            endInput={end}
            showRangeLabels={false}
            responsive={datepickerResponsive}
            onChange={dateChange}
            value={popupEventDate}
          />
          <div onClick={openColorPicker} className="event-color-c">
            <div className="event-color-label">Color</div>
            <div className="event-color" style={{ background: selectedColor }}></div>
          </div>
          <SegmentedGroup onChange={statusChange}>
            <Segmented value="busy" checked={popupEventStatus === 'busy'}>
              Show as busy
            </Segmented>
            <Segmented value="free" checked={popupEventStatus === 'free'}>
              Show as free
            </Segmented>
          </SegmentedGroup>
          {isEdit ? (
            <div className="mbsc-button-group">
              <Button className="mbsc-button-block" color="danger" variant="outline" onClick={onDeleteClick}>
                Delete event
              </Button>
            </div>
          ) : null}
        </div>
      </Popup>
      <Popup
        display="bottom"
        contentPadding={false}
        showArrow={false}
        showOverlay={false}
        anchor={colorAnchor}
        isOpen={colorPickerOpen}
        buttons={colorButtons}
        responsive={colorResponsive}
        ref={colorPicker}
      >
        <div className="crud-color-row">
          {colors.map((color, index) =>
            index < 5 ? (
              <div
                key={index}
                onClick={changeColor}
                className={'crud-color-c ' + (tempColor === color ? 'selected' : '')}
                data-value={color}
              >
                <div className="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style={{ background: color }}></div>
              </div>
            ) : null,
          )}
        </div>
        <div className="crud-color-row">
          {colors.map((color, index) =>
            index >= 5 ? (
              <div
                key={index}
                onClick={changeColor}
                className={'crud-color-c ' + (tempColor === color ? 'selected' : '')}
                data-value={color}
              >
                <div className="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style={{ background: color }}></div>
              </div>
            ) : null,
          )}
        </div>
      </Popup>
      <Snackbar isOpen={isSnackbarOpen} message="Event deleted" button={snackbarButton} onClose={handleSnackbarClose} />
    </>
  );
};
export default App;
