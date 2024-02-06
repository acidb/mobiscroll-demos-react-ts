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
import { ChangeEvent, FC, useCallback, useEffect, useMemo, useState } from 'react';
import './quarter-year-view.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [calendarType, setCalendarType] = useState<string>('quarter');
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);

  const myView = useMemo<MbscEventcalendarView>(
    () =>
      calendarType === 'quarter'
        ? {
            calendar: {
              type: 'month',
              size: 3,
            },
          }
        : {
            calendar: {
              type: 'year',
            },
          },
    [calendarType],
  );

  const calHeight = useMemo<string>(() => (calendarType === 'quarter' ? 'auto' : 'height:100%'), [calendarType]);

  const changeView = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setCalendarType(event.target.value);
  }, []);

  const calendarHeader = useCallback(
    () => (
      <>
        <CalendarNav />
        <div className="quarter-year-header-picker">
          <SegmentedGroup value={calendarType} onChange={changeView}>
            <Segmented value="quarter">Quarter</Segmented>
            <Segmented value="year">Year</Segmented>
          </SegmentedGroup>
        </div>
        <CalendarPrev />
        <CalendarToday />
        <CalendarNext />
      </>
    ),
    [calendarType, changeView],
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

  return <Eventcalendar data={myEvents} view={myView} height={calHeight} renderHeader={calendarHeader} />;
};

export default App;
