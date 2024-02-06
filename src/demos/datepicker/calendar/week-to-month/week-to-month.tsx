import {
  CalendarNav,
  CalendarNext,
  CalendarPrev,
  Datepicker,
  Segmented,
  SegmentedGroup,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { ChangeEvent, FC, useCallback, useState } from 'react';
import './week-to-month.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [calendarType, setCalendarType] = useState<'week' | 'month' | 'year' | undefined>('week');
  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setCalendarType(event.target.value as 'week' | 'month' | 'year' | undefined);
  }, []);

  const calendarHeaderSwitch = useCallback(
    () => (
      <>
        <CalendarNav className="custom-view-nav" />
        <div className="custom-view">
          <SegmentedGroup value={calendarType} onChange={handleChange}>
            <Segmented value="week" icon="material-date-range" />
            <Segmented value="month" icon="material-event-note" />
          </SegmentedGroup>
        </div>
        <CalendarPrev />
        <CalendarNext />
      </>
    ),
    [calendarType, handleChange],
  );

  return (
    <div>
      <Datepicker display="inline" calendarType={calendarType} calendarSize={1} renderCalendarHeader={calendarHeaderSwitch} />
    </div>
  );
};

export default App;
