import {
  CalendarNav,
  CalendarNext,
  CalendarPrev,
  CalendarToday,
  Confirm,
  dayjsTimezone,
  Eventcalendar,
  formatDate,
  MbscCalendarCellData,
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
  const [myEvents, setMyEvents] = useState<MbscCalendarEvent[]>(defaultEvents);
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

  const getHourProps = useCallback(
    (h: number, timezone: string) => {
      const offset = getUtcOffset(timezone);
      const hour = h + offset;
      const isAM = hour % 24 < 12;
      const title = ((hour % 12) + 12) % 12 || 12;
      const hForProps = title + ((title === 12 && !isAM) || (title !== 12 && isAM) ? 0 : 12);
      let color = '#f7f7bb4d';
      let invalid = false;

      if (hForProps < 6 || hForProps >= 22) {
        color = '#ffbaba4d';
        invalid = true;
      } else if (hForProps < 8 || (hForProps >= 18 && hForProps < 22)) {
        color = '#a5ceff4d';
      }

      return {
        hour: hour,
        isAM: isAM,
        title: title,
        color: color,
        invalid: invalid,
      };
    },
    [getUtcOffset],
  );

  const getInvalids = useMemo(() => {
    const invalid = [];

    for (let j = 0; j < myResources.length; ++j) {
      const resource = myResources[j];

      for (let i = 0; i < 24; ++i) {
        if (getHourProps(i, resource.timezone).invalid) {
          const startTime = (i < 10 ? '0' : '') + i + ':00:00';
          const endTime = (i < 9 ? '0' : '') + (i + 1) + ':00:00';

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
    return invalid;
  }, [getHourProps, myResources]);

  const myScheduleEvent = useCallback((data: MbscCalendarEventData) => {
    const start = (data.startDate as MyDate).clone();
    const end = (data.endDate as MyDate).clone();

    start.setTimezone(data.currentResource!.timezone);
    end.setTimezone(data.currentResource!.timezone);

    return (
      <div className="mds-meeting-planner-cont" style={{ background: data.color }}>
        <div className="mds-meeting-planner-wrapper">
          <div className="mds-meeting-planner-title">{data.title}</div>
          <div className="mds-meeting-planner-time">
            {formatDate('hh:mm A', start)} - {formatDate('hh:mm A', end)}
          </div>
        </div>
      </div>
    );
  }, []);

  const myHeader = () => (
    <>
      <CalendarNav />
      <div className="mds-meeting-planner-header">
        <div className="mds-meeting-planner-zone mds-meeting-planner-work">working hours</div>
        <div className="mds-meeting-planner-zone mds-meeting-planner-flex">flex hours</div>
        <div className="mds-meeting-planner-zone mds-meeting-planner-off">time off</div>
        <CalendarPrev />
        <CalendarToday />
        <CalendarNext />
      </div>
    </>
  );

  const myResource = (resource: MbscResource) => (
    <div className="mds-meeting-participant-cont">
      <div className="mds-meeting-participant-name">{resource.name}</div>
      <div>
        {resource.organizer && <span>Organizer </span>}
        <span className="mds-meeting-participant-offset">{resource.utcOffset}</span>
      </div>
      <img className="mds-meeting-participant-avatar" src={resource.img} alt="avatar" />
    </div>
  );

  const myCell = useCallback(
    (args: MbscCalendarCellData) => {
      const hProps = getHourProps(args.date.getHours(), args.resource.timezone);
      return (
        <div className="mds-meeting-planner-time-slot mbsc-flex mbsc-justify-content-center" style={{ background: hProps.color }}>
          {hProps.title}
          {hProps.isAM ? ' AM' : ' PM'}
        </div>
      );
    },
    [getHourProps],
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
        view={myView}
        data={myEvents}
        resources={myResources}
        invalid={getInvalids}
        extendDefaultEvent={myDefaultEvent}
        renderScheduleEvent={myScheduleEvent}
        renderHeader={myHeader}
        renderResource={myResource}
        renderCell={myCell}
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
