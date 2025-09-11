import {
  CalendarNav,
  CalendarNext,
  CalendarPrev,
  CalendarToday,
  Confirm,
  dayjsTimezone,
  Eventcalendar,
  formatDate,
  MbscCalendarColor,
  MbscCalendarEvent,
  MbscCalendarEventData,
  MbscEventcalendarView,
  MbscEventCreatedEvent,
  MbscEventCreateFailedEvent,
  MbscEventDeletedEvent,
  MbscEventUpdatedEvent,
  MbscEventUpdateFailedEvent,
  MbscResource,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { FC, useCallback, useMemo, useState } from 'react';
import './timezone-meeting-planner.css';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjsTimezone.dayjs = dayjs;

setOptions({
  // localeJs,
  // themeJs
});

const defaultEvents: MbscCalendarEvent[] = [
  {
    start: 'dyndatetime(y,m,d,13)',
    end: 'dyndatetime(y,m,d,15)',
    title: 'General orientation',
    color: '#1ad404',
  },
];

const App: FC = () => {
  const [myEvents, setMyEvents] = useState<MbscCalendarEvent[]>([defaultEvents]);
  const [isToastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [isConfirmOpen, setConfirmOpen] = useState<boolean>(false);
  const [tempEvent, setTempEvent] = useState<MbscCalendarEvent>();
  const [isNewEvent, setIsNewEvent] = useState<boolean>(false);

  const myResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: 'Keila Delores',
        timezone: 'utc',
        img: 'https://img.mobiscroll.com/demos/f1.png',
        utcOffset: '(UTC)',
        organizer: true,
      },
      {
        id: 2,
        name: 'Gene Cortez',
        timezone: 'America/Chicago',
        img: 'https://img.mobiscroll.com/demos/m1.png',
        utcOffset: 'UTC - 5',
      },
      {
        id: 3,
        name: 'Paula Bush',
        timezone: 'America/New_York',
        img: 'https://img.mobiscroll.com/demos/f2.png',
        utcOffset: 'UTC - 4',
      },
      {
        id: 4,
        name: 'Pete Nichols',
        timezone: 'Europe/London',
        img: 'https://img.mobiscroll.com/demos/m2.png',
        utcOffset: 'UTC + 1',
      },
      {
        id: 5,
        name: 'Jean Pearson',
        timezone: 'Europe/Berlin',
        img: 'https://img.mobiscroll.com/demos/m3.png',
        utcOffset: 'UTC + 2',
      },
      {
        id: 6,
        name: 'Thelma Cain',
        timezone: 'Europe/Bucharest',
        img: 'https://img.mobiscroll.com/demos/f3.png',
        utcOffset: 'UTC + 3',
      },
    ],
    [],
  );

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: 'week',
        timeLabelStep: 1440,
      },
    }),
    [],
  );

  const getUtcOffset = useCallback((timezone: string) => {
    switch (timezone) {
      case 'America/Los_Angeles':
        return -7;
      case 'America/Chicago':
        return -5;
      case 'America/New_York':
        return -4;
      case 'Europe/London':
        return 1;
      case 'Europe/Berlin':
        return 2;
      case 'Europe/Bucharest':
        return 3;
      case 'Asia/Shanghai':
        return 8;
      case 'Asia/Tokyo':
        return 9;
      default:
        return 0;
    }
  }, []);

  const getProps = useCallback((h: number) => {
    if (h < 6) {
      return { color: '#ffbaba4d', invalid: true };
    } else if (h < 8) {
      return { color: '#a5ceff4d' };
    } else if (h < 18) {
      return { color: '#f7f7bb4d' };
    } else if (h < 22) {
      return { color: '#a5ceff4d' };
    } else return { color: '#ffbaba4d', invalid: true };
  }, []);

  const details = useMemo(() => {
    const colors: MbscCalendarColor[] = [];
    const invalid = [];

    for (let j = 0; j < myResources.length; ++j) {
      const resource = myResources[j];

      for (let i = 0; i < 24; ++i) {
        const hour = i + getUtcOffset(resource.timezone);
        const isAM = i < 12 ? hour >= 0 && hour < 12 : !(hour >= 12 && hour < 24);
        const startTime = (i < 10 ? '0' : '') + i + ':00';
        const endTime = (i < 9 ? '0' : '') + (i + 1) + ':00';
        const title = hour % 12 === 0 ? 12 : hour < 0 ? 12 + hour : hour <= 12 ? hour : hour % 12;
        const props = getProps(title + ((title === 12 && !isAM) || (title !== 12 && isAM) ? 0 : 12));

        colors.push({
          start: startTime,
          end: endTime,
          title: title + (isAM ? ' AM' : ' PM'),
          background: props.color,
          recurring: {
            repeat: 'daily',
          },
          resource: resource.id,
        });

        if (props.invalid) {
          invalid.push({
            start: startTime,
            end: endTime,
            resource: resource.id,
            recurring: {
              repeat: 'daily',
            },
          });
        }
      }
    }
    return { colors, invalid };
  }, [getProps, getUtcOffset, myResources]);

  const myScheduleEvent = useCallback((data: MbscCalendarEventData) => {
    const start = (data.startDate as MyDate).clone();
    const end = (data.endDate as MyDate).clone();

    start.setTimezone(data.currentResource!.timezone);
    end.setTimezone(data.currentResource!.timezone);

    return (
      <div className="md-meeting-planner-cont" style={{ background: data.color }}>
        <div className="md-meeting-planner-wrapper">
          <div className="md-meeting-planner-title">{data.title}</div>
          <div className="md-meeting-planner-time">
            {formatDate('hh:mm A', start)} - {formatDate('hh:mm A', end)}
          </div>
        </div>
      </div>
    );
  }, []);

  const myHeader = () => (
    <>
      <CalendarNav />
      <div className="md-meeting-planner-header">
        <div className="md-meeting-planner-zone md-meeting-planner-work">working hours</div>
        <div className="md-meeting-planner-zone md-meeting-planner-flex">flex hours</div>
        <div className="md-meeting-planner-zone md-meeting-planner-off">time off</div>
        <CalendarPrev />
        <CalendarToday />
        <CalendarNext />
      </div>
    </>
  );

  const myResource = (resource: MbscResource) => (
    <div className="md-meeting-participant-cont">
      <div className="md-meeting-participant-name">{resource.name}</div>
      <div>
        {resource.organizer && <span>Organizer </span>}
        <span className="md-meeting-participant-offset">{resource.utcOffset}</span>
      </div>
      <img className="md-meeting-participant-avatar" src={resource.img} alt="avatar" />
    </div>
  );

  const myDefaultEvent = useCallback(
    () => ({
      resource: [1, 2, 3, 4, 5, 6],
    }),
    [],
  );

  const handleEventCreated = useCallback(
    (args: MbscEventCreatedEvent) => {
      setMyEvents([...myEvents, args.event]);
      setTimeout(() => {
        setToastMessage('Event created');
        setToastOpen(true);
      });
    },
    [myEvents],
  );

  const handleEventUpdated = useCallback(
    (args: MbscEventUpdatedEvent) => {
      const index = myEvents.findIndex((x) => x.id === args.event.id);
      const newEventList = [...myEvents];

      newEventList.splice(index, 1, args.event);
      setMyEvents(newEventList);
      setTimeout(() => {
        setToastMessage('Event updated');
        setToastOpen(true);
      });
    },
    [myEvents],
  );

  const handleEventDeleted = useCallback(
    (args: MbscEventDeletedEvent) => {
      setMyEvents(myEvents.filter((item) => item.id !== args.event.id));
    },
    [myEvents],
  );

  const createUpdateEvent = useCallback((event: MbscCalendarEvent, isNew: boolean) => {
    setTempEvent(event);
    setIsNewEvent(isNew);
    setConfirmOpen(true);
  }, []);

  const handleEventCreateFailed = useCallback(
    (args: MbscEventCreateFailedEvent) => {
      createUpdateEvent(args.event, true);
    },
    [createUpdateEvent],
  );

  const handleEventUpdateFailed = useCallback(
    (args: MbscEventUpdateFailedEvent) => {
      createUpdateEvent(args.event, false);
    },
    [createUpdateEvent],
  );

  const handleCloseToast = useCallback(() => setToastOpen(false), []);

  const handleConfirmClose = useCallback(
    (res: boolean) => {
      if (res) {
        if (isNewEvent) {
          setMyEvents([...myEvents, tempEvent!]);
        } else {
          const index = myEvents.findIndex((x) => x.id === tempEvent!.id);
          const newEventList = [...myEvents];

          newEventList.splice(index, 1, tempEvent!);
          setMyEvents(newEventList);
        }
        setToastMessage(isNewEvent ? 'Event created' : 'Event updated');
        setToastOpen(true);
      }
      setConfirmOpen(false);
    },
    [isNewEvent, myEvents, tempEvent],
  );

  return (
    <>
      <Eventcalendar
        timezonePlugin={dayjsTimezone}
        dataTimezone="utc"
        displayTimezone="utc"
        clickToCreate={true}
        dragToCreate={true}
        dragToMove={true}
        dragToResize={true}
        dragTimeStep={60}
        height={400}
        view={myView}
        data={myEvents}
        resources={myResources}
        colors={details.colors}
        invalid={details.invalid}
        extendDefaultEvent={myDefaultEvent}
        renderScheduleEvent={myScheduleEvent}
        renderHeader={myHeader}
        renderResource={myResource}
        onEventCreated={handleEventCreated}
        onEventUpdated={handleEventUpdated}
        onEventDeleted={handleEventDeleted}
        onEventCreateFailed={handleEventCreateFailed}
        onEventUpdateFailed={handleEventUpdateFailed}
      />
      <Toast message={toastMessage} isOpen={isToastOpen} onClose={handleCloseToast} />
      <Confirm
        isOpen={isConfirmOpen}
        title="Are you sure you want to proceed?"
        message="It looks like someone from the team won't be able to join the meeting."
        okText="Yes"
        cancelText="No"
        onClose={handleConfirmClose}
      />
    </>
  );
};
export default App;

interface MyDate extends Date {
  clone(): MyDate;
  setTimezone(timezone: MyDate): void;
}
