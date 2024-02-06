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
  MbscResource,
  MbscSelectedDateChangeEvent,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './custom-range-view.css';

setOptions({
  // localeJs,
  // themeJs
});

const myResources: MbscResource[] = [
  {
    id: 1,
    name: 'Resource A',
    color: '#e20000',
  },
  {
    id: 2,
    name: 'Resource B',
    color: '#76e083',
  },
  {
    id: 3,
    name: 'Resource C',
    color: '#4981d6',
  },
  {
    id: 4,
    name: 'Resource D',
    color: '#e25dd2',
  },
  {
    id: 5,
    name: 'Resource E',
    color: '#1dab2f',
  },
  {
    id: 6,
    name: 'Resource F',
    color: '#d6d145',
  },
];

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [refDate, setRefDate] = useState<MbscDateType>();
  const [currentDate, setCurrentDate] = useState<MbscDateType>(new Date());
  const [rangeVal, setRangeVal] = useState<MbscDatepickerValue>([]);
  const [buttonText, setButtonText] = useState<string>();
  const [calView, setCalView] = useState<MbscEventcalendarView>({
    timeline: {
      type: 'day',
      size: 14,
      eventList: true,
    },
  });

  const startDate = useRef<Date>();
  const endDate = useRef<Date>();

  // returns the number of days between two dates
  const getNrDays = useCallback(
    (start: Date, end: Date) => Math.round(Math.abs((end.setHours(0) - start.setHours(0)) / (24 * 60 * 60 * 1000))) + 1,
    [],
  );

  // returns the formatted date
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
      // navigate the calendar
      setCurrentDate(startDate.current);
      // set calendar view
      setRefDate(startDate.current);
      setCalView({
        timeline: {
          type: 'day',
          size: getNrDays(startDate.current, endDate.current),
          eventList: true,
        },
      });
    }
    setRangeVal([startDate.current, endDate.current]);
  }, [getNrDays]);

  const onPageLoading = useCallback(
    (args: MbscPageLoadingEvent) => {
      const sDate = args.firstDay;
      const end = args.lastDay;
      const eDate = new Date(end.getFullYear(), end.getMonth(), end.getDate() - 1, 0);
      startDate.current = sDate;
      endDate.current = eDate;
      setTimeout(() => {
        // set button text
        setButtonText(getFormattedRange(sDate, eDate));
        // set range value
        setRangeVal([sDate, eDate]);
        // navigate the calendar
        setCurrentDate(sDate);
      });
    },
    [getFormattedRange],
  );

  const onSelectedDateChange = useCallback(
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
      'https://trial.mobiscroll.com/timeline-events/',
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
      selectedDate={currentDate}
      renderHeader={customWithNavButtons}
      view={calView}
      data={myEvents}
      resources={myResources}
      onPageLoading={onPageLoading}
      onSelectedDateChange={onSelectedDateChange}
      refDate={refDate}
    />
  );
};
export default App;
