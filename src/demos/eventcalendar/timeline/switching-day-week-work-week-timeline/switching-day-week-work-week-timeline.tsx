import {
  CalendarNav,
  CalendarNext,
  CalendarPrev,
  CalendarToday,
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscResource,
  Segmented,
  SegmentedGroup,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { ChangeEvent, FC, useCallback, useEffect, useMemo, useState } from 'react';
import './switching-day-week-work-week-timeline.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [view, setView] = useState<string>('week');
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [calView, setCalView] = useState<MbscEventcalendarView>({
    timeline: {
      type: 'week',
    },
  });

  const myResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: 'Ryan',
        color: '#ff0101',
        title: 'Cloud System Engineer',
        img: 'https://img.mobiscroll.com/demos/m1.png',
      },
      {
        id: 2,
        name: 'Kate',
        color: '#239a21',
        title: 'Help Desk Specialist',
        img: 'https://img.mobiscroll.com/demos/f1.png',
      },
      {
        id: 3,
        name: 'John',
        color: '#8f1ed6',
        title: 'Application Developer',
        img: 'https://img.mobiscroll.com/demos/m2.png',
      },
      {
        id: 4,
        name: 'Mark',
        color: '#01adff',
        title: 'Network Administrator',
        img: 'https://img.mobiscroll.com/demos/m3.png',
      },
      {
        id: 5,
        name: 'Sharon',
        color: '#d8ca1a',
        title: 'Data Quality Manager',
        img: 'https://img.mobiscroll.com/demos/f2.png',
      },
    ],
    [],
  );

  const myInvalids = useMemo(
    () => [
      {
        start: '00:00',
        end: '06:00',
        recurring: {
          repeat: 'weekly',
          weekDays: 'MO,TU,WE,TH,FR',
        },
      },
      {
        start: '20:00',
        end: '23:59',
        recurring: {
          repeat: 'weekly',
          weekDays: 'MO,TU,WE,TH,FR',
        },
      },
      {
        recurring: {
          repeat: 'weekly',
          weekDays: 'SA,SU',
        },
      },
    ],
    [],
  );

  const changeView = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    let calView: MbscEventcalendarView;

    switch (event.target.value) {
      case 'day':
        calView = {
          timeline: { type: 'day' },
        };
        break;
      case 'workweek':
        calView = {
          timeline: {
            type: 'week',
            startDay: 1,
            endDay: 5,
          },
        };
        break;
      case 'week':
      default:
        calView = {
          timeline: {
            type: 'week',
          },
        };
        break;
    }

    setView(event.target.value);
    setCalView(calView);
  }, []);

  const renderMyHeader = useCallback(
    () => (
      <>
        <CalendarNav className="md-work-week-nav" />
        <div className="md-work-week-picker">
          <SegmentedGroup value={view} onChange={changeView}>
            <Segmented value="day">Day</Segmented>
            <Segmented value="workweek">Work week</Segmented>
            <Segmented value="week">Week</Segmented>
          </SegmentedGroup>
        </div>
        <CalendarPrev className="md-work-week-prev" />
        <CalendarToday className="md-work-week-today" />
        <CalendarNext className="md-work-week-next" />
      </>
    ),
    [changeView, view],
  );

  const renderMyResource = useCallback(
    (resource: MbscResource) => (
      <div className="md-work-week-cont">
        <div className="md-work-week-name">{resource.name}</div>
        <div className="md-work-week-title">{resource.title}</div>
        <img className="md-work-week-avatar" src={resource.img} alt="Avatar" />
      </div>
    ),
    [],
  );

  const handleEventUpdateFail = useCallback(() => {
    setToastOpen(true);
  }, []);

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/timeline-events/',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <div>
      <Eventcalendar
        view={calView}
        data={myEvents}
        invalid={myInvalids}
        resources={myResources}
        renderHeader={renderMyHeader}
        renderResource={renderMyResource}
        onEventCreateFailed={handleEventUpdateFail}
        onEventUpdateFailed={handleEventUpdateFail}
        cssClass="md-switching-timeline-view-cont"
      />
      <Toast message="Can't schedule outside of working hours" isOpen={isToastOpen} onClose={handleCloseToast} />
    </div>
  );
};
export default App;
