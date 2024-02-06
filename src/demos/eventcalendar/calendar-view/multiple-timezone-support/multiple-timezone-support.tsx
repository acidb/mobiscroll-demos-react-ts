import {
  CalendarNav,
  CalendarNext,
  CalendarPrev,
  CalendarToday,
  Eventcalendar,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscSelectChangeEvent,
  momentTimezone,
  Select,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import './multiple-timezone-support.css';
import moment from 'moment-timezone';
import { useCallback, useMemo, useState } from 'react';

momentTimezone.moment = moment;

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const [timezone, setTimezone] = useState<string>('utc');

  const myEvents = useMemo<MbscCalendarEvent[]>(
    () => [
      {
        start: 'dyndatetime(y,m,d-2,7)',
        end: 'dyndatetime(y,m,d-2,9)',
        title: 'Stakeholder mtg.',
        color: '#408cff',
      },
      {
        start: 'dyndatetime(y,m,d-1,18)',
        end: 'dyndatetime(y,m,d-1,19,30)',
        title: 'Wrapup mtg.',
        color: '#ecbc72',
      },
      {
        start: 'dyndatetime(y,m,d,14)',
        end: 'dyndatetime(y,m,d,18)',
        title: 'Business of Software Conference',
        color: '#ff6d42',
      },
      {
        start: 'dyndatetime(y,m,d+1,20)',
        end: 'dyndatetime(y,m,d+1,21,50)',
        title: 'Product Team mtg.',
        color: '#913aa7',
      },
      {
        start: 'dyndatetime(y,m,d+2,13)',
        end: 'dyndatetime(y,m,d+2,15)',
        title: 'Decision Making mtg.',
        color: '#5bb7c5',
      },
      {
        start: 'dyndatetime(y,m,d+3,13)',
        end: 'dyndatetime(y,m,d+3,14)',
        title: 'Quick mtg. with Martin',
        color: '#fd002f',
      },
      {
        start: 'dyndatetime(y,m,d+4,12)',
        end: 'dyndatetime(y,m,d+4,16)',
        color: '#50b166',
        title: 'Team-Building',
      },
    ],
    [],
  );

  const timezones = useMemo(
    () => [
      {
        text: 'America/Los Angeles',
        value: 'America/Los_Angeles',
      },
      {
        text: 'America/Chicago',
        value: 'America/Chicago',
      },
      {
        text: 'America/New York',
        value: 'America/New_York',
      },
      {
        text: 'UTC',
        value: 'utc',
      },
      {
        text: 'Europe/London',
        value: 'Europe/London',
      },
      {
        text: 'Europe/Berlin',
        value: 'Europe/Berlin',
      },
      {
        text: 'Europe/Bucharest',
        value: 'Europe/Bucharest',
      },
      {
        text: 'Asia/Shanghai',
        value: 'Asia/Shanghai',
      },
      {
        text: 'Asia/Tokyo',
        value: 'Asia/Tokyo',
      },
    ],
    [],
  );

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      calendar: {
        labels: true,
      },
    }),
    [],
  );

  const handleChange = useCallback((ev: MbscSelectChangeEvent) => {
    setTimezone(ev.value);
  }, []);

  const myHeader = useCallback(
    () => (
      <>
        <CalendarNav />
        <div className="md-timezone-header">
          <CalendarPrev />
          <CalendarToday />
          <CalendarNext />
          <Select data={timezones} inputStyle="box" touchUi={false} display="anchored" value={timezone} onChange={handleChange} />
        </div>
      </>
    ),
    [handleChange, timezone, timezones],
  );

  return (
    <Eventcalendar
      dataTimezone="utc"
      displayTimezone={timezone}
      timezonePlugin={momentTimezone}
      data={myEvents}
      view={myView}
      dragToCreate={true}
      dragToMove={true}
      dragToResize={true}
      renderHeader={myHeader}
    />
  );
}

export default App;
