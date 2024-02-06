import {
  Eventcalendar,
  Input,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscEventCreatedEvent,
  MbscEventDeletedEvent,
  MbscPopupButton,
  MbscResource,
  Popup,
  Segmented,
  SegmentedGroup,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { ChangeEvent, FC, useCallback, useMemo, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [tempEvent, setTempEvent] = useState<MbscCalendarEvent>();
  const [title, setTitle] = useState<string>('New event');
  const [participants, setParticipants] = useState<Array<number>>([]);
  const [anchor, setAnchor] = useState<HTMLElement>();
  const [isNewEvent, setIsNewEvent] = useState<boolean>(false);
  const [isOpen, setOpen] = useState<boolean>(false);

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      schedule: {
        type: 'week',
        allDay: false,
        startDay: 1,
        endDay: 5,
        startTime: '08:00',
        endTime: '17:00',
      },
    }),
    [],
  );

  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([
    {
      start: 'dyndatetime(y,m,d-3,10)',
      end: 'dyndatetime(y,m,d-3,15)',
      title: 'Impact Training',
      resource: [2, 3],
      color: '#35bb5a',
    },
    {
      start: 'dyndatetime(y,m,d-2,10)',
      end: 'dyndatetime(y,m,d-2,15)',
      title: 'Impact Training',
      resource: [2, 3],
      color: '#35bb5a',
    },
    {
      start: 'dyndatetime(y,m,d,8,30)',
      end: 'dyndatetime(y,m,d,10)',
      title: 'Quick mtg. with Martin',
      resource: 3,
      color: '#913aa7',
    },
    {
      start: 'dyndatetime(y,m,d,12)',
      end: 'dyndatetime(y,m,d,13)',
      title: 'General orientation',
      resource: [1, 2, 3],
      color: '#a71111',
    },
    {
      start: 'dyndatetime(y,m,d+1,10)',
      end: 'dyndatetime(y,m,d+1,11)',
      title: 'Product team mtg.',
      resource: [2, 3],
      color: '#6e7f29',
    },
    {
      start: 'dyndatetime(y,m,d+2,14)',
      end: 'dyndatetime(y,m,d+2,16)',
      title: 'Stakeholder mtg.',
      resource: 1,
      color: '#dcd234',
    },
    {
      start: 'dyndatetime(y,m,d+3,10)',
      end: 'dyndatetime(y,m,d+3,14)',
      title: 'Innovation mtg.',
      resource: [1, 2],
      color: '#de3d83',
    },
  ]);

  const myResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: 'Ryan',
        color: '#f7c4b4',
      },
      {
        id: 2,
        name: 'Kate',
        color: '#c6f1c9',
      },
      {
        id: 3,
        name: 'John',
        color: '#e8d0ef',
      },
    ],
    [],
  );

  const showPopup = useCallback((args: MbscEventCreatedEvent | MbscEventClickEvent) => {
    const event = args.event;
    const resources = Array.isArray(event.resource) ? (event.resource as Array<number>) : [event.resource as number];

    // store temporary event
    setTempEvent(event);

    // fill popup with the current event data
    setTitle(event.title!);
    setParticipants(resources);

    // set anchor for the popup
    if (args as MbscEventCreatedEvent) {
      setAnchor((args as MbscEventCreatedEvent).target);
    } else if (args as MbscEventClickEvent) {
      setAnchor((args as MbscEventClickEvent).domEvent.target);
    }
    setOpen(true);
  }, []);

  const handleEventCreated = useCallback(
    (args: MbscEventCreatedEvent) => {
      setIsNewEvent(true);
      showPopup(args);
    },
    [showPopup],
  );

  const handleEventDoubleClick = useCallback(
    (args: MbscEventClickEvent) => {
      setIsNewEvent(false);
      showPopup(args);
    },
    [showPopup],
  );

  const handleEventDeleted = useCallback(
    (args: MbscEventDeletedEvent) => {
      setEvents(myEvents.filter((item) => item.id !== args.event.id));
    },
    [myEvents],
  );

  const popupButtons = useMemo<(string | MbscPopupButton)[]>(
    () => [
      'cancel',
      {
        text: 'OK',
        keyCode: 'enter',
        handler: () => {
          tempEvent!.resource = participants;
          tempEvent!.title = title;

          if (isNewEvent) {
            setEvents([...myEvents, tempEvent!]);
          } else {
            setEvents([...myEvents]);
          }

          // update event with the new properties on OK button click
          setIsNewEvent(false);

          setOpen(false);
        },
        cssClass: 'mbsc-popup-button-primary',
      },
    ],
    [myEvents, participants, tempEvent, title, isNewEvent],
  );

  const onClose = useCallback(() => {
    if (isNewEvent) {
      setEvents(myEvents.filter((item) => item.id !== tempEvent!.id));
    }
    setOpen(false);
  }, [isNewEvent, myEvents, tempEvent]);

  const titleChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setTitle(ev.target.value);
  }, []);

  const changeParticipants = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      const value = +ev.target.value;
      let p;

      if (ev.target.checked) {
        p = [...participants, value];
      } else {
        p = participants.filter((item) => item !== value);
      }
      setParticipants(p);
    },
    [participants],
  );

  return (
    <div>
      <Eventcalendar
        data={myEvents}
        resources={myResources}
        view={myView}
        clickToCreate={true}
        dragToCreate={true}
        dragToMove={true}
        dragToResize={true}
        onEventCreated={handleEventCreated}
        onEventDoubleClick={handleEventDoubleClick}
        onEventDeleted={handleEventDeleted}
      />
      <Popup
        display="anchored"
        contentPadding={false}
        touchUi={false}
        width={350}
        buttons={popupButtons}
        onClose={onClose}
        isOpen={isOpen}
        anchor={anchor}
      >
        <div className="mbsc-form-group">
          <Input label="Title" value={title} onChange={titleChange} inputStyle="box" labelStyle="stacked" />
          <div className="mbsc-padding">
            <label className="mbsc-txt-muted">Select event participants</label>
          </div>
          <SegmentedGroup select="multiple" value={participants} onChange={changeParticipants}>
            <Segmented value={1}>Ryan</Segmented>
            <Segmented value={2}>Kate</Segmented>
            <Segmented value={3}>John</Segmented>
          </SegmentedGroup>
        </div>
      </Popup>
    </div>
  );
};
export default App;
