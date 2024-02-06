import {
  Button,
  Eventcalendar,
  formatDate,
  getJson,
  Input,
  MbscCalendarEvent,
  MbscCalendarEventData,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscEventCreateEvent,
  MbscEventDeletedEvent,
  MbscPopupButton,
  MbscResource,
  Popup,
  Segmented,
  SegmentedGroup,
  setOptions,
  Snackbar,
  Textarea,
} from '@mobiscroll/react';
import { ChangeEvent, FC, useCallback, useEffect, useMemo, useState } from 'react';
import './meal-planner.css';

setOptions({
  // localeJs,
  // themeJs
});

const types = [
  {
    id: 1,
    name: 'Breakfast',
    color: '#e20f0f',
    kcal: '300 - 400 kcal',
    icon: '??',
  },
  {
    id: 2,
    name: 'Elevenses',
    color: '#157d13',
    kcal: '100 - 200 kcal',
    icon: '??',
  },
  {
    id: 3,
    name: 'Lunch',
    color: '#32a6de',
    kcal: '500 - 700 kcal',
    icon: '??',
  },
  {
    id: 4,
    name: 'Dinner',
    color: '#e29d1d',
    kcal: '400 - 600 kcal',
    icon: '??',
  },
  {
    id: 5,
    name: 'Snack',
    color: '#68169c',
    kcal: '100 - 200 kcal',
    icon: '??',
  },
];

const viewSettings: MbscEventcalendarView = {
  timeline: {
    type: 'week',
    eventList: true,
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

const App: FC = () => {
  const [myMeals, setMyMeals] = useState<MbscCalendarEvent[]>([]);
  const [tempMeal, setTempMeal] = useState<MbscCalendarEvent>();
  const [isPopupOpen, setOpen] = useState<boolean>(false);
  const [isEdit, setEdit] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [calories, setCalories] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [headerText, setHeader] = useState<string>('');
  const [type, setType] = useState<number>(1);
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);

  const saveEvent = useCallback(() => {
    const newEvent = {
      id: tempMeal!.id,
      title: name,
      calories: calories,
      notes: notes,
      start: tempMeal!.start,
      end: tempMeal!.end,
      resource: tempMeal!.resource,
    };

    if (isEdit) {
      // update the event in the list
      const index = myMeals.findIndex((x) => x.id === tempMeal!.id);
      const newEventList = [...myMeals];

      newEventList.splice(index, 1, newEvent);
      setMyMeals(newEventList);
    } else {
      // add the new event to the list
      setMyMeals([...myMeals, newEvent]);
    }

    // close the popup
    setOpen(false);
  }, [isEdit, myMeals, calories, notes, name, tempMeal]);

  const deleteEvent = useCallback(
    (event: MbscCalendarEvent) => {
      setMyMeals(myMeals.filter((item) => item.id !== event.id));
      setTempMeal(event);
      setSnackbarOpen(true);
    },
    [myMeals],
  );

  const loadPopupForm = useCallback((event: MbscCalendarEvent) => {
    setName(event.title!);
    setCalories(event.calories);
    setNotes(event.notes);
  }, []);

  // handle popup form changes

  const nameChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setName(ev.target.value);
  }, []);

  const caloriesChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setCalories(ev.target.value);
  }, []);

  const notesChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setNotes(ev.target.value);
  }, []);

  const onDeleteClick = useCallback(() => {
    deleteEvent(tempMeal!);
    setOpen(false);
  }, [deleteEvent, tempMeal]);

  // scheduler options
  const handleEventClick = useCallback(
    (args: MbscEventClickEvent) => {
      const event = args.event;
      setHeader(
        '<div>New meal</div><div class="md-meal-type">' + formatDate('DDDD, DD MMMM YYYY', new Date(event.start as string)) + '</div>',
      );
      setType(+event.resource!);
      setEdit(true);
      setTempMeal({ ...event });
      // fill popup form with event data
      loadPopupForm(event);
      setOpen(true);
    },
    [loadPopupForm],
  );

  const handleEventCreated = useCallback(
    (args: MbscEventCreateEvent) => {
      const event = args.event;
      const resource = types.find((obj) => obj.id === event.resource)!;
      setHeader(
        '<div>' +
          resource.name +
          '</div><div class="md-meal-type">' +
          formatDate('DDDD, DD MMMM YYYY', new Date(event.start as string)) +
          '</div>',
      );
      setType(+event.resource!);
      setEdit(false);
      setTempMeal(event);
      // fill popup form with event data
      loadPopupForm(event);
      // open the popup
      setOpen(true);
    },
    [loadPopupForm],
  );

  const typeChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      const value = ev.target.value;
      setType(+value);
      setTempMeal({ ...tempMeal, resource: +value });
    },
    [tempMeal],
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
      setMyMeals([...myMeals]);
    }
    setOpen(false);
  }, [isEdit, myMeals]);

  const extendMyDefaultEvent = useCallback(
    () => ({
      title: 'New meal',
      allDay: true,
    }),
    [],
  );

  const renderMyResource = (resource: MbscResource) => (
    <div className="md-meal-planner-cont">
      <div className="md-meal-planner-title" style={{ color: resource.color }}>
        <span className="md-meal-planner-icon" dangerouslySetInnerHTML={{ __html: resource.icon }}></span>
        {resource.name}
      </div>
      <div className="md-meal-planner-kcal">{resource.kcal}</div>
    </div>
  );

  const myScheduleEvent = useCallback((args: MbscCalendarEventData) => {
    const event = args.original!;
    return (
      <div className="md-meal-planner-event">
        <div className="md-meal-planner-event-title">{event.title}</div>
        {event.calories && <div className="md-meal-planner-event-desc">Calories {event.calories} kcal</div>}
      </div>
    );
  }, []);

  const handleSnackbarClose = useCallback(() => {
    setSnackbarOpen(false);
  }, []);

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/meal-planner/',
      (events: MbscCalendarEvent[]) => {
        setMyMeals(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <div>
      <Eventcalendar
        view={viewSettings}
        data={myMeals}
        resources={types}
        dragToCreate={false}
        dragToResize={false}
        dragToMove={true}
        clickToCreate={true}
        extendDefaultEvent={extendMyDefaultEvent}
        onEventClick={handleEventClick}
        onEventCreated={handleEventCreated}
        onEventDeleted={handleEventDeleted}
        renderResource={renderMyResource}
        renderScheduleEventContent={myScheduleEvent}
        cssClass="md-meal-planner-calendar"
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
        cssClass="md-meal-planner-popup"
      >
        <SegmentedGroup onChange={typeChange} value={type}>
          {types.map((type) => (
            <Segmented value={type.id} key={type.id}>
              {type.name}
            </Segmented>
          ))}
        </SegmentedGroup>
        <div className="mbsc-form-group">
          <Input label="Name" value={name} onChange={nameChange} />
          <Input label="Calories" value={calories} onChange={caloriesChange} />
          <Textarea label="Notes" value={notes} onChange={notesChange} />
        </div>
        {isEdit && (
          <div className="mbsc-button-group">
            <Button className="mbsc-button-block" color="danger" variant="outline" onClick={onDeleteClick}>
              Delete meal
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
            setMyMeals((prevEvents) => [...prevEvents, tempMeal!]);
          },
          text: 'Undo',
        }}
      />
    </div>
  );
};
export default App;
