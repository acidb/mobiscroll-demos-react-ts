import {
  Button,
  CalendarNext,
  CalendarPrev,
  CalendarToday,
  Datepicker,
  Eventcalendar,
  formatDate,
  getJson,
  MbscCalendarEvent,
  MbscDatepickerChangeEvent,
  MbscDatepickerValue,
  MbscDateType,
  MbscEventcalendarView,
  MbscPageLoadingEvent,
  MbscSelectedDateChangeEvent,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './custom-range-view.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [myRefDate, setRefDate] = useState<MbscDateType>();
  const [currentDate, setCurrentDate] = useState<MbscDateType>(new Date());
  const [rangeVal, setRangeVal] = useState<MbscDatepickerValue>([]);
  const [buttonText, setButtonText] = useState<string>();
  const [calView, setCalView] = useState<MbscEventcalendarView>({
    schedule: {
      type: 'day',
      size: 14,
    },
  });

  const startDate = useRef<Date>();
  const endDate = useRef<Date>();

  // Returns the number of days between two dates
  const getNrDays = useCallback(
    (start: Date, end: Date) => Math.round(Math.abs((new Date(end).setHours(0) - start.setHours(0)) / (24 * 60 * 60 * 1000))) + 1,
    [],
  );

  // Returns the formatted date
  const getFormattedRange = useCallback(
    (start: Date, end: Date) =>
      formatDate('MMM D, YYYY', new Date(start)) +
      (end && getNrDays(start, end) > 1 ? ' - ' + formatDate('MMM D, YYYY', new Date(end)) : ''),
    [getNrDays],
  );

  const onChange = useCallback((args: MbscDatepickerChangeEvent) => {
    const date = args.value as Date[];
    setRangeVal(date);
    if (date[0] && date[1]) {
      startDate.current = date[0];
      endDate.current = date[1];
    }
  }, []);

  const onClose = useCallback(() => {
    if (startDate.current && endDate.current) {
      // Navigate the calendar
      setCurrentDate(startDate.current);
      // Set calendar view
      setRefDate(startDate.current);
      setCalView({
        schedule: {
          type: 'day',
          size: getNrDays(startDate.current, endDate.current),
        },
      });
    }
    setRangeVal([startDate.current, endDate.current]);
  }, [getNrDays]);

  const handlePageLoading = useCallback(
    (args: MbscPageLoadingEvent) => {
      const sDate = args.firstDay;
      const end = args.lastDay;
      const eDate = new Date(end.getFullYear(), end.getMonth(), end.getDate() - 1, 0);
      startDate.current = sDate;
      endDate.current = eDate;
      setTimeout(() => {
        // Set button text
        setButtonText(getFormattedRange(sDate, eDate));
        // Set range value
        setRangeVal([sDate, eDate]);
        // Navigate the calendar
        setCurrentDate(sDate);
      });
    },
    [getFormattedRange],
  );

  const handleSelectedDateChange = useCallback(
    (event: MbscSelectedDateChangeEvent) => {
      setCurrentDate(event.date);
    },
    [setCurrentDate],
  );

  const buttonProps = useMemo(() => {
    const content = <span className="mbsc-calendar-title">{buttonText}</span>;
    return {
      children: content,
      className: 'mbsc-calendar-button',
      variant: 'flat',
    };
  }, [buttonText]);

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  const customWithNavButtons = () => (
    <>
      <div>
        <Datepicker
          select="range"
          display="anchored"
          showOverlay={false}
          touchUi={true}
          buttons={[]}
          inputComponent={Button}
          inputProps={buttonProps}
          onClose={onClose}
          onChange={onChange}
          value={rangeVal}
        />
      </div>
      <div className="md-custom-range-view-controls">
        <CalendarPrev />
        <CalendarToday />
        <CalendarNext />
      </div>
    </>
  );

  return (
    <Eventcalendar
      // drag
      selectedDate={currentDate}
      renderHeader={customWithNavButtons}
      view={calView}
      data={myEvents}
      onPageLoading={handlePageLoading}
      onSelectedDateChange={handleSelectedDateChange}
      refDate={myRefDate}
    />
  );
};
export default App;
