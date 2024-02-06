import {
  CalendarNav,
  CalendarNext,
  CalendarPrev,
  CalendarToday,
  Datepicker,
  Segmented,
  SegmentedGroup,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { ChangeEvent, FC, useCallback, useState } from 'react';
import './customizing-header.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [calendarType, setCalendarType] = useState<'week' | 'year' | 'month' | undefined>('week');

  const calendarHeaderCustom = useCallback(
    () => (
      <>
        <CalendarPrev className="custom-prev" />
        <CalendarNav className="custom-nav" />
        <CalendarNext className="custom-next" />
      </>
    ),
    [],
  );

  const calendarHeaderToday = useCallback(
    () => (
      <>
        <CalendarNav />
        <div className="custom-buttons">
          <CalendarPrev />
          <CalendarToday />
          <CalendarNext />
        </div>
      </>
    ),
    [],
  );

  const calendarHeaderSwitch = useCallback(
    () => (
      <>
        <CalendarNav className="custom-view-nav" />
        <div className="custom-view">
          <SegmentedGroup value={calendarType} onChange={changeView}>
            <Segmented value="week" icon="material-date-range" />
            <Segmented value="month" icon="material-event-note" />
          </SegmentedGroup>
        </div>
        <CalendarPrev />
        <CalendarNext />
      </>
    ),
    [calendarType],
  );
  const changeView = (event: ChangeEvent<HTMLInputElement>) => {
    setCalendarType(event.target.value as 'week' | 'year' | 'month' | undefined);
  };
  return (
    <div>
      <Datepicker controls={['calendar']} display="inline" calendarType="week" calendarSize={2} />
      <Datepicker controls={['calendar']} display="inline" renderCalendarHeader={calendarHeaderCustom} />
      <Datepicker controls={['calendar']} display="inline" renderCalendarHeader={calendarHeaderToday} />
      <Datepicker
        controls={['calendar']}
        display="inline"
        calendarType={calendarType}
        calendarSize={2}
        renderCalendarHeader={calendarHeaderSwitch}
      />
      <Datepicker controls={['calendar']} display="inline" calendarType="week" calendarSize={2} headerText="You selected {value}" />
    </div>
  );
};
export default App;
