import {
  Button,
  CalendarNav,
  CalendarNext,
  CalendarPrev,
  CalendarToday,
  Eventcalendar,
  formatDate,
  MbscCalendarEvent,
  MbscCellClickEvent,
  MbscEventcalendarView,
  MbscSelectedDateChangeEvent,
  Segmented,
  SegmentedGroup,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useRef, useState } from 'react';
import './day-cell-aggregate-information.css';

setOptions({
  // localeJs,
  // themeJs
});

interface WeatherData {
  date: Date;
  degree: number;
  emoji: string;
}

interface WeatherCache {
  [key: number]: WeatherData;
}

const App: FC = () => {
  const [myCssClass, setCssClass] = useState<string>('mds-cell-template mds-cell-template-month-view');
  const [selectedView, setSelectedView] = useState<string>('month');
  const [previousView, setPreviousView] = useState<string>('month');
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const weatherCacheRef = useRef<WeatherCache>({});

  const [myView, setView] = useState<MbscEventcalendarView>({
    calendar: {
      type: 'month',
    },
  });

  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>(() => [
    {
      start: 'dyndatetime(y,m,d-1,15)',
      end: 'dyndatetime(y,m,d-1,17)',
      title: 'Operations Huddle',
      type: 'meeting',
      color: '#634b67',
    },
    {
      start: 'dyndatetime(y,m,d-1,12)',
      end: 'dyndatetime(y,m,d-1,13)',
      title: 'HR Policy Update',
      type: 'meeting',
      color: '#634b67',
    },
    {
      start: 'dyndatetime(y,m,d,8)',
      end: 'dyndatetime(y,m,d,10)',
      title: 'Team Retrospective',
      type: 'meeting',
      color: '#634b67',
    },
    {
      start: 'dyndatetime(y,m,d,10)',
      end: 'dyndatetime(y,m,d,11,30)',
      title: 'Proposal Review Meeting',
      type: 'meeting',
      color: '#634b67',
    },
    {
      start: 'dyndatetime(y,m,d,12)',
      end: 'dyndatetime(y,m,d,13)',
      title: 'Solutions Presentation',
      type: 'appointment',
      color: '#656d49',
    },
    {
      start: 'dyndatetime(y,m,d,14)',
      end: 'dyndatetime(y,m,d,15)',
      title: 'Follow-up Discussion',
      type: 'appointment',
      color: '#656d49',
    },
    {
      start: 'dyndatetime(y,m,d,15)',
      end: 'dyndatetime(y,m,d,16)',
      title: 'Performance Review',
      type: 'meeting',
      color: '#634b67',
    },
    {
      start: 'dyndatetime(y,m,d+1,10)',
      end: 'dyndatetime(y,m,d+1,13)',
      title: 'Client Onboarding',
      type: 'appointment',
      color: '#656d49',
    },
    {
      start: 'dyndatetime(y,m,d+1,15)',
      end: 'dyndatetime(y,m,d+1,16)',
      title: 'Marketing Campaign Brainstorm',
      type: 'meeting',
      color: '#634b67',
    },
    {
      start: 'dyndatetime(y,m,2,10)',
      end: 'dyndatetime(y,m,2,12)',
      title: 'Innovation Brainstorm',
      type: 'meeting',
      color: '#634b67',
    },
    {
      start: 'dyndatetime(y,m,2,13)',
      end: 'dyndatetime(y,m,2,15,30)',
      title: 'Onboarding Session',
      type: 'appointment',
      color: '#656d49',
    },
    {
      start: 'dyndatetime(y,m,2,16)',
      end: 'dyndatetime(y,m,2,17)',
      title: 'Discovery Call',
      type: 'appointment',
      color: '#656d49',
    },
    {
      start: 'dyndatetime(y,m,9,9)',
      end: 'dyndatetime(y,m,9,10)',
      title: 'Partnership Exploration',
      type: 'appointment',
      color: '#656d49',
    },
    {
      start: 'dyndatetime(y,m,9,11)',
      end: 'dyndatetime(y,m,9,13)',
      title: 'Service Implementation',
      type: 'appointment',
      color: '#656d49',
    },
    {
      start: 'dyndatetime(y,m,9,14)',
      end: 'dyndatetime(y,m,9,15)',
      title: 'Future Planning Summit',
      type: 'meeting',
      color: '#634b67',
    },
    {
      start: 'dyndatetime(y,m,15,10)',
      end: 'dyndatetime(y,m,15,12)',
      title: 'Strategy Alignment',
      type: 'meeting',
      color: '#634b67',
    },
    {
      start: 'dyndatetime(y,m,18,12)',
      end: 'dyndatetime(y,m,18,14)',
      title: 'Project Kick-off',
      type: 'appointment',
      color: '#656d49',
    },
    {
      start: 'dyndatetime(y,m,18,15)',
      end: 'dyndatetime(y,m,18,16)',
      title: 'Account Review',
      type: 'appointment',
      color: '#656d49',
    },
    {
      start: 'dyndatetime(y,m,22,12)',
      end: 'dyndatetime(y,m,22,14)',
      title: 'Deep Dive Session',
      type: 'meeting',
      color: '#634b67',
    },
    {
      title: 'Fresh start meeting',
      start: '09:00',
      end: '10:00',
      type: 'meeting',
      color: '#634b67',
      recurring: {
        repeat: 'weekly',
        weekDays: 'MO',
      },
    },
    {
      title: 'Weekly wrapup',
      start: '16:00',
      end: '16:30',
      type: 'meeting',
      color: '#634b67',
      recurring: {
        repeat: 'weekly',
        weekDays: 'FR',
      },
    },
  ]);

  const myDefaultEvent = useCallback(
    () => ({
      title: 'New appointment',
      type: 'appointment',
      color: '#656d49',
    }),
    [],
  );

  const generateRandomWeather = useCallback((date: Date): WeatherData => {
    const weatherTypes = [
      { emoji: '☀️', min: 24, max: 30 },
      { emoji: '🌤️', min: 20, max: 25 },
      { emoji: '☁️', min: 17, max: 22 },
      { emoji: '🌧️', min: 15, max: 20 },
    ];
    const type = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
    const degree = Math.floor(Math.random() * (type.max - type.min + 1)) + type.min;

    return {
      date: date,
      degree: degree,
      emoji: type.emoji,
    };
  }, []);

  const getWeatherForDate = useCallback(
    (date: Date): WeatherData => {
      const key = date.getTime();
      if (!weatherCacheRef.current[key]) {
        weatherCacheRef.current[key] = generateRandomWeather(date);
      }
      return weatherCacheRef.current[key];
    },
    [generateRandomWeather],
  );

  const getStressLevel = useCallback((nrEvents: number) => {
    let emoji = '';
    let color = '';

    if (nrEvents < 1) {
      emoji = '';
      color = '';
    } else if (nrEvents < 3) {
      emoji = '😃';
      color = '#6ece86ff';
    } else if (nrEvents < 5) {
      emoji = '😐';
      color = '#d89c6aff';
    } else {
      emoji = '😫';
      color = '#d6727aff';
    }
    return { emoji: emoji, color: color };
  }, []);

  const getNrEvents = useCallback((events: MbscCalendarEvent[]) => {
    let nrMeetings = 0;
    let nrAppointments = 0;

    for (const event of events) {
      if (event['type'] === 'meeting') {
        nrMeetings++;
      } else {
        nrAppointments++;
      }
    }

    return { meetings: nrMeetings, appointments: nrAppointments };
  }, []);

  const setCalendarView = useCallback(
    (view: string, date?: Date) => {
      if (view === 'day') {
        setPreviousView(selectedView);
      }

      setSelectedView(view);

      switch (view) {
        case 'month':
          setCssClass('mds-cell-template mds-cell-template-month-view');
          setView({
            calendar: { type: 'month' },
          });
          break;
        case 'week':
          setCssClass('mds-cell-template mds-cell-template-week-view');
          setView({
            schedule: {
              type: 'week',
              allDay: false,
              startTime: '08:00',
              endTime: '17:00',
            },
          });
          break;
        case 'day':
          setCssClass('mds-cell-template mds-cell-template-day-view');
          setView({
            schedule: {
              type: 'day',
              allDay: false,
              startTime: '08:00',
              endTime: '17:00',
            },
          });
          break;
      }

      if (date) {
        setCurrentDate(date);
      }
    },
    [selectedView],
  );

  const handleViewChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      setCalendarView(ev.target.value);
    },
    [setCalendarView],
  );

  const handleBackToView = useCallback(() => {
    setCalendarView(previousView);
  }, [setCalendarView, previousView]);

  const handleDayClick = useCallback(
    (date: Date) => {
      if (selectedView === 'week') {
        setCalendarView('day', date);
      }
    },
    [setCalendarView, selectedView],
  );

  const customDay = useCallback(
    (args: { date: Date; events: MbscCalendarEvent[] }) => {
      const date = args.date;
      const events = args.events;
      const nrEvents = getNrEvents(events);
      const nrAllEvents = events.length;
      const stressLevel = getStressLevel(nrAllEvents);
      const weather = getWeatherForDate(date);

      return (
        <div
          className="mds-cell-template-cont"
          style={{
            background: stressLevel.color && selectedView !== 'day' ? stressLevel.color : '',
          }}
          onClick={() => handleDayClick(date)}
        >
          <div className="mds-cell-template-day">{formatDate('DDD D, MMM', date) + ' ' + stressLevel.emoji + ' '}</div>
          <div>{weather.emoji + ' ' + weather.degree + '°C'}</div>
          <div className="mds-cell-template-info" style={{ color: '#634b67' }}>
            Internal mtgs: {nrEvents.meetings}
          </div>
          <div className="mds-cell-template-info" style={{ color: '#656d49' }}>
            Client mtgs: {nrEvents.appointments}
          </div>
          <Button className="mds-cell-template-add" icon="plus"></Button>
        </div>
      );
    },
    [selectedView, getNrEvents, getWeatherForDate, getStressLevel, handleDayClick],
  );

  const customHeader = useCallback(
    () => (
      <>
        <CalendarNav className="mds-cell-template-nav" />
        <div className="mds-cell-template-view-controls mbsc-flex-1-0">
          <Button color="secondary" startIcon="close" className="mds-cell-template-back" onClick={handleBackToView}>
            Back to calendar
          </Button>
          <div className="mds-cell-template-view-switch">
            <SegmentedGroup value={selectedView} onChange={handleViewChange}>
              <Segmented value="month" icon="material-date-range" className="mds-cell-template-view">
                Calendar
              </Segmented>
              <Segmented value="week" icon="material-event-note" className="mds-cell-template-view">
                Week view
              </Segmented>
            </SegmentedGroup>
          </div>
        </div>
        <CalendarPrev />
        <CalendarToday />
        <CalendarNext />
      </>
    ),
    [selectedView, handleViewChange, handleBackToView],
  );

  const onCellClick = useCallback(
    (args: MbscCellClickEvent) => {
      const date = args.date;
      const target = args.domEvent.target as HTMLElement;

      if (target.closest('.mds-cell-template-add')) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();

        const newEvent = {
          title: 'New appointment',
          start: new Date(year, month, day, 9),
          end: new Date(year, month, day, 10),
          color: '#ecee8d',
        };

        setEvents((prev) => [...prev, newEvent]);

        setToastMessage('Appointment added to ' + formatDate('DDD D, MMM', date));
        setToastOpen(true);
      } else if (selectedView === 'month') {
        setCalendarView('day', date);
      }
    },
    [selectedView, setCalendarView],
  );

  const handleSelectedDateChange = useCallback((args: MbscSelectedDateChangeEvent) => {
    setCurrentDate(args.date as Date);
  }, []);

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  return (
    <>
      <Eventcalendar
        clickToCreate={true}
        dragToCreate={true}
        dragToMove={true}
        dragToResize={true}
        eventDelete={true}
        cssClass={myCssClass}
        data={myEvents}
        view={myView}
        selectedDate={currentDate}
        extendDefaultEvent={myDefaultEvent}
        renderDay={customDay}
        renderHeader={customHeader}
        onCellClick={onCellClick}
        onSelectedDateChange={handleSelectedDateChange}
      />
      <Toast isOpen={isToastOpen} message={toastMessage} onClose={handleToastClose} />
    </>
  );
};
export default App;
