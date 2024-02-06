import {
  Button,
  CalendarNav,
  CalendarToday,
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscSelectedDateChangeEvent,
  SegmentedGroup,
  SegmentedItem,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import './customizing-header.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [view, setView] = useState<string>('schedule');
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [calView, setCalView] = useState<MbscEventcalendarView>({
    schedule: {
      type: 'week',
    },
  });

  const changeView = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    let calendarView = {};
    switch (event.target.value) {
      case 'calendar':
        calendarView = {
          calendar: {
            labels: true,
          },
        };
        break;
      case 'schedule':
        calendarView = {
          schedule: {
            type: 'week',
          },
        };
        break;
    }

    setView(event.target.value);
    setCalView(calendarView);
  }, []);

  const handleSelectedDateChange = useCallback(
    (event: MbscSelectedDateChangeEvent) => {
      setCurrentDate(new Date(event.date as string));
    },
    [setCurrentDate],
  );

  const getFirstDayOfWeek = useCallback((d: Date, prev: boolean) => {
    const day = d.getDay();
    const diff = d.getDate() - day + (prev ? -7 : 7);
    return new Date(d.setDate(diff));
  }, []);

  const navigatePage = useCallback(
    (prev: boolean) => {
      if (view === 'calendar') {
        const prevNextPage = new Date(currentDate.getFullYear(), currentDate.getMonth() + (prev ? -1 : 1), 1);
        setCurrentDate(prevNextPage);
      } else {
        const prevNextSunday = getFirstDayOfWeek(currentDate, prev);
        setCurrentDate(prevNextSunday);
      }
    },
    [view, currentDate, setCurrentDate, getFirstDayOfWeek],
  );

  const customWithNavButtons = useCallback(
    () => (
      <>
        <CalendarNav className="md-custom-header-nav" />
        <div className="md-custom-header-controls">
          <Button onClick={() => navigatePage(true)} icon="material-arrow-back" variant="flat" className="md-custom-header-button"></Button>
          <CalendarToday className="md-custom-header-today" />
          <Button
            onClick={() => navigatePage(false)}
            icon="material-arrow-forward"
            variant="flat"
            className="md-custom-header-button"
          ></Button>
        </div>
        <div className="md-custom-header-view">
          <SegmentedGroup value={view} onChange={changeView}>
            <SegmentedItem value="calendar" icon="calendar" />
            <SegmentedItem value="schedule" icon="material-list" />
          </SegmentedGroup>
        </div>
      </>
    ),
    [changeView, navigatePage, view],
  );

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <Eventcalendar
      className="md-custom-header"
      onSelectedDateChange={handleSelectedDateChange}
      selectedDate={currentDate}
      renderHeader={customWithNavButtons}
      view={calView}
      data={myEvents}
    />
  );
};
export default App;
