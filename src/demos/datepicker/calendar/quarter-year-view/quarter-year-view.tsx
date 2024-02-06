import {
  CalendarNav,
  CalendarNext,
  CalendarPrev,
  CalendarToday,
  Datepicker,
  MbscDatepickerChangeEvent,
  MbscDatepickerPageChangeEvent,
  Segmented,
  SegmentedGroup,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { ChangeEvent, FC, useCallback, useMemo, useState } from 'react';
import './quarter-year-view.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [type, setType] = useState<string>('q4');
  const calType = useMemo<'year' | 'month' | 'week' | undefined>(() => (type === 'year' ? 'year' : 'month'), [type]);
  const [selectedDate, setDate] = useState<Date>(new Date());
  const [activeDate, setActiveDate] = useState<Date>(new Date());

  const handleTypeChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const tp = event.target.value;
      const year = activeDate.getFullYear();
      let date;
      switch (tp) {
        case 'q1':
          date = new Date(year, 0, 1);
          break;
        case 'q2':
          date = new Date(year, 3, 1);
          break;
        case 'q3':
          date = new Date(year, 6, 1);
          break;
        case 'q4':
          date = new Date(year, 9, 1);
          break;
        case 'year':
          date = new Date(year, activeDate.getMonth(), 1);
          break;
        default:
          break;
      }
      setType(tp);
      setDate(date!);
      setActiveDate(date!);
    },
    [activeDate],
  );

  const handlePageChange = useCallback(
    (event: MbscDatepickerPageChangeEvent) => {
      let t = '';
      if (type === 'year') {
        t = 'year';
      } else {
        const month = event.firstDay.getMonth();
        if (month < 3) {
          t = 'q1';
        } else if (month < 6) {
          t = 'q2';
        } else if (month < 9) {
          t = 'q3';
        } else {
          t = 'q4';
        }
      }
      setTimeout(() => {
        setActiveDate(event.firstDay);
        setType(t);
      });
    },
    [type],
  );

  const handleDateChange = useCallback((event: MbscDatepickerChangeEvent) => {
    setDate(new Date(event.value as string));
  }, []);

  const calendarHeaderSwitch = useCallback(
    () => (
      <>
        <CalendarNav />
        <div className="quarter-year-header-picker">
          <SegmentedGroup value={type} onChange={handleTypeChange}>
            <Segmented value="q1">Q1</Segmented>
            <Segmented value="q2">Q2</Segmented>
            <Segmented value="q3">Q3</Segmented>
            <Segmented value="q4">Q4</Segmented>
            <Segmented value="year">Year</Segmented>
          </SegmentedGroup>
        </div>
        <CalendarPrev />
        <CalendarToday />
        <CalendarNext />
      </>
    ),
    [handleTypeChange, type],
  );

  return (
    <Datepicker
      controls={['calendar']}
      display="inline"
      calendarType={calType}
      calendarSize={3}
      renderCalendarHeader={calendarHeaderSwitch}
      onPageChange={handlePageChange}
      onChange={handleDateChange}
      showWeekNumbers={true}
      value={selectedDate}
    />
  );
};
export default App;
