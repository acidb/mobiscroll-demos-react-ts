import {
  CalendarNav,
  CalendarNext,
  CalendarPrev,
  CalendarToday,
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscEventcalendarView,
  Segmented,
  SegmentedGroup,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import './switching-calendar-scheduler-agenda.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [view, setView] = useState('month');
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);

  const [calView, setCalView] = useState<MbscEventcalendarView>({
    calendar: { labels: true },
  });

  const changeView = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    let calView = {};

    switch (event.target.value) {
      case 'year':
        calView = {
          calendar: { type: 'year' },
        };
        break;
      case 'month':
        calView = {
          calendar: { labels: true },
        };
        break;
      case 'week':
        calView = {
          schedule: { type: 'week' },
        };
        break;
      case 'day':
        calView = {
          schedule: { type: 'day' },
        };
        break;
      case 'agenda':
        calView = {
          calendar: { type: 'week' },
          agenda: { type: 'week' },
        };
        break;
    }

    setView(event.target.value);
    setCalView(calView);
  }, []);

  const customWithNavButtons = useCallback(
    () => (
      <>
        <CalendarNav className="cal-header-nav" />
        <div className="cal-header-picker">
          <SegmentedGroup value={view} onChange={changeView}>
            <Segmented value="year">Year</Segmented>
            <Segmented value="month">Month</Segmented>
            <Segmented value="week">Week</Segmented>
            <Segmented value="day">Day</Segmented>
            <Segmented value="agenda">Agenda</Segmented>
          </SegmentedGroup>
        </div>
        <CalendarPrev className="cal-header-prev" />
        <CalendarToday className="cal-header-today" />
        <CalendarNext className="cal-header-next" />
      </>
    ),
    [changeView, view],
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
      // drag
      renderHeader={customWithNavButtons}
      height={750}
      view={calView}
      data={myEvents}
      cssClass="md-switching-view-cont"
    />
  );
};
export default App;
