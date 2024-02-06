import {
  Button,
  Datepicker,
  Eventcalendar,
  Input,
  MbscCalendarEvent,
  MbscDatepickerChangeEvent,
  MbscDatepickerControl,
  MbscDateType,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscEventCreatedEvent,
  MbscEventDeletedEvent,
  MbscPopupButton,
  MbscResource,
  MbscSelectedDateChangeEvent,
  Popup,
  SegmentedGroup,
  SegmentedItem,
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
    start: 'dyndatetime(y,m,d,13)',
    end: 'dyndatetime(y,m,d,15)',
    title: "Lunch @ Butcher's",
    description: '',
    allDay: false,
    free: true,
    resource: 3,
  },
  {
    id: 2,
    start: 'dyndatetime(y,m,d,14)',
    end: 'dyndatetime(y,m,d,16)',
    title: 'General orientation',
    description: '',
    allDay: false,
    free: false,
    resource: 5,
  },
  {
    id: 3,
    start: 'dyndatetime(y,m,d,18)',
    end: 'dyndatetime(y,m,d,22)',
    title: 'Dexter BD',
    description: '',
    allDay: false,
    free: true,
    resource: 4,
  },
  {
    id: 4,
    start: 'dyndatetime(y,m,d,10,30)',
    end: 'dyndatetime(y,m,d,13)',
    title: 'Stakeholder mtg.',
    description: '',
    allDay: false,
    free: false,
    resource: 1,
  },
];
const myResources = [
  {
    id: 1,
    name: 'Resource A',
    color: '#ffeb3c',
  },
  {
    id: 2,
    name: 'Resource B',
    color: '#f44437',
  },
  {
    id: 3,
    name: 'Resource C',
    color: '#3f51b5',
  },
  {
    id: 4,
    name: 'Resource D',
    color: '#4baf4f',
  },
  {
    id: 5,
    name: 'Resource E',
    color: '#ff9900',
  },
];
const viewSettings: MbscEventcalendarView = {
  timeline: { type: 'day' },
};
const responsivePopup = {
  medium: {
    display: 'anchored',
    width: 400,
    fullScreen: false,
    touchUi: false,
  },
};
const colorPopup = {
  medium: {
    display: 'anchored',
    touchUi: false,
    buttons: [],
  },
};
const colors = ['#ffeb3c', '#ff9900', '#f44437', '#ea1e63', '#9c26b0', '#3f51b5', '#5ac8fa', '#009788', '#4baf4f', '#7e5d4e'];

const App: FC = () => {
  const [myEvents, setMyEvents] = useState<MbscCalendarEvent[]>(defaultEvents);
  const [tempEvent, setTempEvent] = useState<MbscCalendarEvent>();
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isEdit, setEdit] = useState<boolean>(false);
  const [anchor, setAnchor] = useState<HTMLElement>();
  const [start, startRef] = useState<Input | null>(null);
  const [end, endRef] = useState<Input | null>(null);
  const [popupEventTitle, setTitle] = useState<string>('');
  const [popupEventDescription, setDescription] = useState<string>('');
  const [popupEventAllDay, setAllDay] = useState<boolean>(true);
  const [popupEventDate, setDate] = useState<MbscDateType[]>([]);
  const [popupEventStatus, setStatus] = useState<string>('busy');
  const [mySelectedDate, setSelectedDate] = useState<MbscDateType>(new Date());
  const [colorPickerOpen, setColorPickerOpen] = useState<boolean>(false);
  const [colorAnchor, setColorAnchor] = useState<HTMLElement>();
  const [selectedColor, setSelectedColor] = useState<string | undefined>('');
  const [tempColor, setTempColor] = useState<string>('');
  const [isSnackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const colorPicker = useRef<Popup | null>(null);
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

  const saveEvent = useCallback(() => {
    const newEvent = {
      id: tempEvent!.id,
      title: popupEventTitle,
      description: popupEventDescription,
      start: popupEventDate[0],
      end: popupEventDate[1],
      allDay: popupEventAllDay,
      status: popupEventStatus,
      color: selectedColor,
      resource: tempEvent!.resource,
    };
    if (isEdit) {
      // update the event in the list
      const index = myEvents.findIndex((x) => x.id === tempEvent!.id);
      const newEventList = [...myEvents];

      newEventList.splice(index, 1, newEvent);
      setMyEvents(newEventList);
      // here you can update the event in your storage as well
      // ...
    } else {
      // add the new event to the list
      setMyEvents([...myEvents, newEvent]);
      // here you can add the event to your storage as well
      // ...
    }
    setSelectedDate(popupEventDate[0]);
    // close the popup
    setOpen(false);
  }, [
    isEdit,
    myEvents,
    popupEventAllDay,
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
      setTempEvent(event);
      setMyEvents(filteredEvents);
      setSnackbarOpen(true);
    },
    [myEvents],
  );

  const loadPopupForm = useCallback((event: MbscCalendarEvent) => {
    setTitle(event.title!);
    setDescription(event.description);
    setDate([event.start!, event.end!]);
    setAllDay(event.allDay || false);
    setStatus(event.status || 'busy');
  }, []);

  // handle popup form changes

  const titleChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setTitle(ev.target.value);
  }, []);

  const descriptionChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setDescription(ev.target.value);
  }, []);

  const allDayChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setAllDay(ev.target.checked);
  }, []);

  const dateChange = useCallback((args: MbscDatepickerChangeEvent) => {
    setDate(args.value as MbscDateType[]);
  }, []);

  const statusChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setStatus(ev.target.value);
  }, []);

  const onDeleteClick = useCallback(() => {
    deleteEvent(tempEvent!);
    setOpen(false);
  }, [deleteEvent, tempEvent]);

  // scheduler options

  const handleSelectedDateChange = useCallback((event: MbscSelectedDateChangeEvent) => {
    setSelectedDate(event.date);
  }, []);

  const handleEventClick = useCallback(
    (args: MbscEventClickEvent) => {
      const resource: MbscResource = myResources.find((r) => r.id === args.event.resource)!;
      setEdit(true);
      setTempEvent({ ...args.event });
      setSelectedColor(args.event.color || resource.color);
      // fill popup form with event data
      loadPopupForm(args.event);
      setAnchor(args.domEvent.target);
      setOpen(true);
    },
    [loadPopupForm],
  );

  const handleEventCreated = useCallback(
    (args: MbscEventCreatedEvent) => {
      const resource: MbscResource = myResources.find((r) => r.id === args.event.resource)!;
      setEdit(false);
      setTempEvent(args.event);
      setSelectedColor(resource.color);
      // fill popup form with event data
      loadPopupForm(args.event);
      setAnchor(args.target);
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

  const handleEventUpdated = useCallback(() => {
    // here you can update the event in your storage as well, after drag & drop or resize
    // ...
  }, []);

  // datepicker options
  const controls = useMemo<MbscDatepickerControl[]>(() => (popupEventAllDay ? ['date'] : ['datetime']), [popupEventAllDay]);
  const headerText = useMemo<string>(() => (isEdit ? 'Edit event' : 'New Event'), [isEdit]);
  const respSetting = useMemo(
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
      setMyEvents([...myEvents]);
    }
    setOpen(false);
  }, [isEdit, myEvents]);

  const selectColor = useCallback((color: string) => {
    setTempColor(color);
  }, []);

  const openColorPicker = useCallback(
    (ev: MouseEvent<HTMLDivElement>) => {
      selectColor(selectedColor!);
      setColorAnchor(ev.currentTarget);
      setColorPickerOpen(true);
    },
    [selectColor, selectedColor],
  );

  const changeColor = useCallback(
    (ev: MouseEvent<HTMLDivElement>) => {
      const color = ev.currentTarget.getAttribute('data-value');
      selectColor(color!);
      if (!colorPicker.current!.s.buttons!.length) {
        setSelectedColor(color!);
        setColorPickerOpen(false);
      }
    },
    [selectColor, setSelectedColor],
  );

  const onPickerClose = useCallback(() => {
    setColorPickerOpen(false);
  }, []);

  const handleSnackbarClose = useCallback(() => setSnackbarOpen(false), []);

  return (
    <div>
      <Eventcalendar
        view={viewSettings}
        data={myEvents}
        resources={myResources}
        clickToCreate="double"
        dragToCreate={true}
        dragToMove={true}
        dragToResize={true}
        selectedDate={mySelectedDate}
        onSelectedDateChange={handleSelectedDateChange}
        onEventClick={handleEventClick}
        onEventCreated={handleEventCreated}
        onEventDeleted={handleEventDeleted}
        onEventUpdated={handleEventUpdated}
      />
      <Popup
        display="bottom"
        fullScreen={true}
        contentPadding={false}
        headerText={headerText}
        anchor={anchor}
        buttons={popupButtons}
        isOpen={isOpen}
        onClose={onPopupClose}
        responsive={responsivePopup}
      >
        <div className="mbsc-form-group">
          <Input label="Title" value={popupEventTitle} onChange={titleChange} />
          <Textarea label="Description" value={popupEventDescription} onChange={descriptionChange} />
        </div>
        <div className="mbsc-form-group">
          <Switch label="All-day" checked={popupEventAllDay} onChange={allDayChange} />
          <Input ref={startRef} label="Starts" />
          <Input ref={endRef} label="Ends" />
          <Datepicker
            select="range"
            controls={controls}
            touchUi={true}
            startInput={start}
            endInput={end}
            showRangeLabels={false}
            responsive={respSetting}
            onChange={dateChange}
            value={popupEventDate}
          />
          <div onClick={openColorPicker} className="event-color-c">
            <div className="event-color-label">Color</div>
            <div>
              <div className="event-color" style={{ background: selectedColor }}></div>
            </div>
          </div>
          <SegmentedGroup onChange={statusChange}>
            <SegmentedItem value="busy" checked={popupEventStatus === 'busy'}>
              Show as busy
            </SegmentedItem>
            <SegmentedItem value="free" checked={popupEventStatus === 'free'}>
              Show as free
            </SegmentedItem>
          </SegmentedGroup>
          {isEdit && (
            <div className="mbsc-button-group">
              <Button className="mbsc-button-block" color="danger" variant="outline" onClick={onDeleteClick}>
                Delete event
              </Button>
            </div>
          )}
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
        responsive={colorPopup}
        ref={colorPicker}
        onClose={onPickerClose}
      >
        <div className="crud-color-row">
          {colors.map((color, index) => {
            if (index < 5) {
              return (
                <div
                  key={index}
                  onClick={changeColor}
                  className={'crud-color-c ' + (tempColor === color ? 'selected' : '')}
                  data-value={color}
                >
                  <div className="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style={{ background: color }}></div>
                </div>
              );
            } else return null;
          })}
        </div>
        <div className="crud-color-row">
          {colors.map((color, index) => {
            if (index >= 5) {
              return (
                <div
                  key={index}
                  onClick={changeColor}
                  className={'crud-color-c ' + (tempColor === color ? 'selected' : '')}
                  data-value={color}
                >
                  <div className="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style={{ background: color }}></div>
                </div>
              );
            } else return null;
          })}
        </div>
      </Popup>
      <Snackbar
        message="Event deleted"
        isOpen={isSnackbarOpen}
        onClose={handleSnackbarClose}
        button={{
          action: () => {
            setMyEvents([...myEvents, tempEvent!]);
          },
          text: 'Undo',
        }}
      />
    </div>
  );
};
export default App;
