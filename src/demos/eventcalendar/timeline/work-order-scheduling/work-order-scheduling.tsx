import {
  Button,
  Checkbox,
  Datepicker,
  Eventcalendar,
  formatDate,
  Input,
  MbscCalendarDayData,
  MbscCalendarEvent,
  MbscCalendarEventData,
  MbscDatepickerChangeEvent,
  MbscDateType,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscEventCreatedEvent,
  MbscEventDeletedEvent,
  MbscPopupButton,
  MbscResource,
  MbscSelectedDateChangeEvent,
  Popup,
  setOptions,
  Snackbar,
  Textarea /* localeImport */,
} from '@mobiscroll/react';
import { ChangeEvent, FC, useCallback, useMemo, useState } from 'react';
import './work-order-scheduling.css';

setOptions({
  // localeJs,
  // themeJs
});

const defaultEvents: MbscCalendarEvent[] = [
  {
    start: 'dyndatetime(y,m,d-4,6)',
    end: 'dyndatetime(y,m,d-4,14)',
    title: 'Farmhouse TPH',
    location: '3339 Spruce Drive',
    resource: ['d2', 'cm2', 'd4', 'cp1', 'cm2', 'ce2', 'b1'],
    color: '#12ca6c',
    cost: 48000,
  },
  {
    start: 'dyndatetime(y,m,d-3,8)',
    end: 'dyndatetime(y,m,d-3,18)',
    title: 'Block of flats KXT',
    location: '4698 Mercer Street',
    resource: ['d1', 'cm1', 'd3', 'cp1', 'cm3', 'ce2', 'b2'],
    color: '#c170c3',
    cost: 36000,
  },
  {
    start: 'dyndatetime(y,m,d-2,12)',
    end: 'dyndatetime(y,m,d-2,20)',
    title: 'Apartment house UGL',
    location: '3647 Tavern Place',
    resource: ['d3', 'cm2', 'd4', 'cp2', 'cm3', 'ce1', 'b2'],
    color: '#03c9d2',
    cost: 50000,
  },
  {
    start: 'dyndatetime(y,m,d-1,11)',
    end: 'dyndatetime(y,m,d-1,19)',
    title: 'Detached house WKB',
    location: '956 Dovetail Estates',
    resource: ['d1', 'cm3', 'd4', 'cp3', 'cm4', 'c2', 'b1', 'ce2'],
    color: '#ff1515',
    cost: 55000,
  },
  {
    start: 'dyndatetime(y,m,d,10)',
    end: 'dyndatetime(y,m,d,18)',
    title: 'Apartment house XAZ',
    location: '4919 Jett Lane, Inglewood',
    resource: ['d1', 'cm4', 'd4', 'cp1', 'cm2', 'c2', 'b2'],
    color: '#12ca6c',
    cost: 62000,
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,16)',
    title: 'Block of flats DRG',
    location: '486 Sycamore Fork Road',
    resource: ['d2', 'cm1', 'd3', 'cp2', 'ce2', 'c1', 'b1'],
    color: '#efd414',
    cost: 39000,
  },
  {
    start: 'dyndatetime(y,m,d+1,9)',
    end: 'dyndatetime(y,m,d+1,17)',
    title: 'Farmhouse YQK',
    location: '1563 Retreat Avenue',
    resource: ['d2', 'cm4', 'd4', 'cm2', 'cp1', 'c2', 'b2'],
    color: '#cf49d8',
    cost: 45000,
  },
  {
    start: 'dyndatetime(y,m,d+2,7)',
    end: 'dyndatetime(y,m,d+2,15)',
    title: 'Apartment house SWP',
    location: '628 Daylene Drive',
    resource: ['d2', 'cm3', 'd3', 'cm1', 'cp2', 'c1', 'b1'],
    color: '#c170c3',
    cost: 53000,
  },
  {
    start: 'dyndatetime(y,m,d+3,10)',
    end: 'dyndatetime(y,m,d+3,18)',
    title: 'Detached house OZL',
    location: '1830 Rinehart Road',
    resource: ['d3', 'cm2', 'd4', 'cp2', 'cm3', 'ce1', 'b2'],
    color: '#ff1515',
    cost: 47000,
  },
  {
    start: 'dyndatetime(y,m,d+4,11)',
    end: 'dyndatetime(y,m,d+4,19)',
    title: 'Farmhouse PSZ',
    location: '2410 Union Street',
    resource: ['d1', 'cm3', 'd4', 'cp3', 'cm4', 'c2', 'b1', 'ce2'],
    color: '#ff1515',
    cost: 64000,
  },
];

const myResources: MbscResource[] = [
  {
    id: 'contractors',
    name: 'Contractors',
    collapsed: true,
    eventCreation: false,
    children: [
      {
        id: 'builders',
        name: 'Builders',
        eventCreation: false,
        children: [
          {
            id: 'b1',
            name: 'Jude Chester',
          },
          {
            id: 'b2',
            name: 'Willis Kane',
          },
        ],
      },
      {
        id: 'carpenters',
        name: 'Carpenters',
        eventCreation: false,
        children: [
          {
            id: 'c1',
            name: 'Derek Austyn',
          },
          {
            id: 'c2',
            name: 'Merv Kenny',
          },
        ],
      },
    ],
  },
  {
    id: 'employees',
    name: 'Employees',
    eventCreation: false,
    children: [
      {
        id: 'cement_masons',
        name: 'Cement masons',
        eventCreation: false,
        children: [
          {
            id: 'ce1',
            name: 'Ford Kaiden',
          },
          {
            id: 'ce2',
            name: 'Jewell Ryder',
          },
        ],
      },
      {
        id: 'divers',
        name: 'Drivers',
        eventCreation: false,
        children: [
          {
            id: 'd1',
            name: 'Fred Valdez',
          },
          {
            id: 'd2',
            name: 'Jon Drake',
          },
          {
            id: 'd3',
            name: 'Lou Andie',
          },
          {
            id: 'd4',
            name: 'Leon Porter',
          },
        ],
      },
    ],
  },
  {
    id: 'equipment',
    name: 'Equipment',
    collapsed: true,
    eventCreation: false,
    children: [
      {
        id: 'concrete_mixers',
        name: 'Concrete mixers',
        eventCreation: false,
        children: [
          {
            id: 'cm1',
            name: 'AL 45 RFT',
          },
          {
            id: 'cm2',
            name: 'KQ 62 PVZ',
          },
          {
            id: 'cm3',
            name: 'RG 91 ZAL',
          },
          {
            id: 'cm4',
            name: 'XF 83 GFM',
          },
        ],
      },
      {
        id: 'concrete_pumps',
        name: 'Concrete pumps',
        eventCreation: false,
        children: [
          {
            id: 'cp1',
            name: 'GF 61 BVM',
          },
          {
            id: 'cp2',
            name: 'YC 55 ECT',
          },
        ],
      },
    ],
  },
];

const viewSettings: MbscEventcalendarView = {
  timeline: {
    type: 'week',
    startDay: 1,
    endDay: 5,
  },
};

const responsivePopup = {
  medium: {
    display: 'anchored',
    width: 520,
    fullScreen: false,
    touchUi: false,
  },
};

const App: FC = () => {
  const [myEvents, setMyEvents] = useState<MbscCalendarEvent[]>(defaultEvents);
  const [tempEvent, setTempEvent] = useState<MbscCalendarEvent>();
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
  const [isEdit, setEdit] = useState<boolean>(false);
  const [anchor, setAnchor] = useState<HTMLElement>();
  const [start, startRef] = useState<Input | null>(null);
  const [end, endRef] = useState<Input | null>(null);
  const [popupEventTitle, setTitle] = useState<string | undefined>('');
  const [popupEventLocation, setLocation] = useState<string | undefined>('');
  const [popupEventBill, setBill] = useState<number>(0);
  const [popupEventNotes, setNotes] = useState<string>('');
  const [popupEventDate, setDate] = useState<MbscDateType[]>([]);
  const [mySelectedDate, setSelectedDate] = useState<MbscDateType>(new Date());
  const [checkedResources, setCheckedResources] = useState<string[]>([]);
  const [isSnackbarOpen, setSnackbarOpen] = useState<boolean>(false);

  const snackbarButton = useMemo(
    () => ({
      action: () => {
        setMyEvents([...myEvents, tempEvent!]);
      },
      text: 'Undo',
    }),
    [myEvents, tempEvent],
  );

  const checkboxChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      const value = ev.target.value;

      if (ev.target.checked) {
        setCheckedResources((checkedResources) => [...checkedResources, value]);
      } else {
        setCheckedResources(checkedResources.filter((r) => r !== value));
      }
    },
    [checkedResources],
  );

  const saveEvent = useCallback(() => {
    const newEvent = {
      id: tempEvent!.id,
      title: popupEventTitle,
      location: popupEventLocation,
      cost: popupEventBill,
      notes: popupEventNotes,
      start: popupEventDate[0],
      end: popupEventDate[1],
      color: tempEvent!.color,
      resource: checkedResources,
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
    setPopupOpen(false);
  }, [isEdit, myEvents, popupEventDate, popupEventNotes, popupEventTitle, popupEventLocation, popupEventBill, tempEvent, checkedResources]);

  const deleteEvent = useCallback(
    (event: MbscCalendarEvent) => {
      setMyEvents(myEvents.filter((item) => item.id !== event.id));
      setTempEvent(event);
      setSnackbarOpen(true);
    },
    [myEvents],
  );

  const loadPopupForm = useCallback((event: MbscCalendarEvent) => {
    setTitle(event.title);
    setLocation(event.location);
    setBill(event.cost);
    setNotes(event.notes);
    setDate([event.start!, event.end!]);
    setCheckedResources([event.resource as string]);
  }, []);

  // handle popup form changes

  const titleChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setTitle(ev.target.value);
  }, []);

  const locationChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setLocation(ev.target.value);
  }, []);

  const billChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setBill(+ev.target.value || 0);
  }, []);

  const notesChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setNotes(ev.target.value);
  }, []);

  const dateChange = useCallback((args: MbscDatepickerChangeEvent) => {
    setDate(args.value as MbscDateType[]);
  }, []);

  const handleDeleteClick = useCallback(() => {
    deleteEvent(tempEvent!);
    setPopupOpen(false);
  }, [deleteEvent, tempEvent]);

  const handleSelectedDateChange = useCallback((event: MbscSelectedDateChangeEvent) => {
    setSelectedDate(event.date);
  }, []);

  const handleEventClick = useCallback(
    (args: MbscEventClickEvent) => {
      setEdit(true);
      setTempEvent({ ...args.event });
      // fill popup form with event data
      loadPopupForm(args.event);
      setAnchor(args.domEvent.target);
      setPopupOpen(true);
    },
    [loadPopupForm],
  );

  const handleEventCreated = useCallback(
    (args: MbscEventCreatedEvent) => {
      setEdit(false);
      setTempEvent(args.event);
      // fill popup form with event data
      loadPopupForm(args.event);
      setAnchor(args.target);
      // open the popup
      setPopupOpen(true);
    },
    [loadPopupForm],
  );

  const handleEventDeleted = useCallback(
    (args: MbscEventDeletedEvent) => {
      deleteEvent(args.event);
    },
    [deleteEvent],
  );

  const headerText = useMemo(() => (isEdit ? 'Edit work order' : 'New work order'), [isEdit]);

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

  const handlePopupClose = useCallback(() => {
    if (!isEdit) {
      // refresh the list, if add popup was canceled, to remove the temporary event
      setMyEvents([...myEvents]);
    }
    setPopupOpen(false);
  }, [isEdit, myEvents]);

  const handleSnackbarClose = useCallback(() => setSnackbarOpen(false), []);

  const extendDefaultEvent = useCallback(
    () => ({
      title: 'Work order',
      location: '',
      cost: 0,
    }),
    [],
  );

  const getCostString = (cost: number) => cost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const renderCustomDay = (args: MbscCalendarDayData) => {
    const events = args.events;
    let costs = 0;

    if (events) {
      for (const event of events) {
        costs += event.cost;
      }
    }

    return (
      <div>
        <div className="md-work-order-date">{formatDate('DD DDD MMM YYYY', args.date)}</div>
        <div className="md-work-order-date-title">{'Total revenue: $' + getCostString(costs)}</div>
      </div>
    );
  };

  const myScheduleEvent = useCallback(
    (event: MbscCalendarEventData) => (
      <div>
        {event.title}
        <span className="md-work-order-price-tag">${getCostString(event.original!.cost)}</span>
      </div>
    ),
    [],
  );

  return (
    <div>
      <Eventcalendar
        className="md-work-order-scheduling"
        view={viewSettings}
        data={myEvents}
        resources={myResources}
        clickToCreate="double"
        dragToCreate={true}
        dragToMove={true}
        dragToResize={true}
        dragTimeStep={30}
        selectedDate={mySelectedDate}
        onSelectedDateChange={handleSelectedDateChange}
        onEventClick={handleEventClick}
        onEventCreated={handleEventCreated}
        onEventDeleted={handleEventDeleted}
        extendDefaultEvent={extendDefaultEvent}
        renderDay={renderCustomDay}
        renderScheduleEventContent={myScheduleEvent}
      />
      <Popup
        display="bottom"
        fullScreen={true}
        contentPadding={false}
        headerText={headerText}
        anchor={anchor}
        buttons={popupButtons}
        isOpen={isPopupOpen}
        onClose={handlePopupClose}
        responsive={responsivePopup}
      >
        <div className="mbsc-form-group">
          <Input label="Title" value={popupEventTitle} onChange={titleChange} />
          <Input label="Location" value={popupEventLocation} onChange={locationChange} />
          <Input label="Bill to customer ($)" value={popupEventBill.toString()} onChange={billChange} />
          <Textarea label="Notes" value={popupEventNotes} onChange={notesChange} />
        </div>
        <div className="mbsc-form-group">
          <Input ref={startRef} label="Starts" />
          <Input ref={endRef} label="Ends" />
          <Datepicker
            select="range"
            controls={['time']}
            touchUi={true}
            startInput={start}
            endInput={end}
            showRangeLabels={false}
            onChange={dateChange}
            value={popupEventDate}
          />
        </div>
        <div className="mbsc-form-group">
          <div className="mbsc-grid mbsc-no-padding">
            <div className="mbsc-row">
              {myResources.map(
                (resources: MbscResource) =>
                  resources.children &&
                  resources.children.map((res: MbscResource) => (
                    <div className="mbsc-col-sm-4" key={res.id}>
                      <>
                        <div className="mbsc-form-group-title">{res.name}</div>
                        {res.children &&
                          res.children.map((r: MbscResource) => (
                            <Checkbox
                              key={r.id}
                              value={r.id}
                              checked={checkedResources.indexOf(r.id as string) > -1}
                              onChange={checkboxChange}
                              theme="material"
                              className="md-work-order-checkbox-label"
                            >
                              {r.name}
                            </Checkbox>
                          ))}
                      </>
                    </div>
                  )),
              )}
            </div>
          </div>
        </div>
        <div className="mbsc-form-group">
          {isEdit && (
            <div className="mbsc-button-group">
              <Button className="mbsc-button-block" color="danger" variant="outline" onClick={handleDeleteClick}>
                Delete work order
              </Button>
            </div>
          )}
        </div>
      </Popup>
      <Snackbar message="Event deleted" isOpen={isSnackbarOpen} onClose={handleSnackbarClose} button={snackbarButton} />
    </div>
  );
};
export default App;
