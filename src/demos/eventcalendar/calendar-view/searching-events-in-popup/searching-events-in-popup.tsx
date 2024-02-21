import {
  CalendarNav,
  CalendarNext,
  CalendarPrev,
  CalendarToday,
  Eventcalendar,
  formatDate,
  getJson,
  Input,
  MbscCalendarEvent,
  MbscDateType,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscPageLoadingEvent,
  Popup,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { ChangeEvent, FC, useCallback, useMemo, useRef, useState } from 'react';
import './searching-events-in-popup.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [calEvents, setCalEvents] = useState<MbscCalendarEvent[]>([]);
  const [listEvents, setListEvents] = useState<MbscCalendarEvent[]>([]);
  const [mySelectedEvent, setSelectedEvent] = useState<MbscCalendarEvent[]>([]);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [currentDate, setCurrentDate] = useState<MbscDateType>(new Date());
  const [searchInput, setSearchInput] = useState<HTMLElement>();
  const inputRef = useRef<Input>();
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const calView = useMemo<MbscEventcalendarView>(
    () => ({
      calendar: {
        labels: true,
      },
    }),
    [],
  );

  const listView = useMemo<MbscEventcalendarView>(
    () => ({
      agenda: {
        type: 'year',
        size: 5,
      },
    }),
    [],
  );

  const handleInputChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    const text = ev.target.value;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      if (text.length > 0) {
        getJson(
          'https://trial.mobiscroll.com/searchevents/?text=' + text,
          (data: MbscCalendarEvent[]) => {
            setListEvents(data);
            setOpen(true);
          },
          'jsonp',
        );
      } else {
        setOpen(false);
      }
    }, 200);
  }, []);

  const handleInputFocus = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    if (ev.target.value.length > 0) {
      setOpen(true);
    }
  }, []);

  const searchInputRef = useCallback((input: Input) => {
    setSearchInput(input && input.nativeElement);
  }, []);

  const myHeader = () => (
    <>
      <CalendarNav />
      <div className="md-seach-header-bar mbsc-flex-1-0">
        <Input
          startIcon="material-search"
          ref={searchInputRef}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          inputStyle="box"
          placeholder="Search events"
        />
      </div>
      <CalendarPrev />
      <CalendarToday />
      <CalendarNext />
    </>
  );

  const handlePageLoading = useCallback((args: MbscPageLoadingEvent) => {
    const start = formatDate('YYYY-MM-DD', args.viewStart!);
    const end = formatDate('YYYY-MM-DD', args.viewEnd!);

    setTimeout(() => {
      getJson(
        'https://trial.mobiscroll.com/searchevents/?start=' + start + '&end=' + end,
        (data: MbscCalendarEvent[]) => {
          setCalEvents(data);
        },
        'jsonp',
      );
    });
  }, []);

  const popupInit = useCallback(() => {
    setSearchInput(inputRef.current && inputRef.current.nativeElement);
  }, []);

  const popupClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleEventClick = useCallback((args: MbscEventClickEvent) => {
    setCurrentDate(args.event.start!);
    setSelectedEvent([args.event]);
    setOpen(false);
  }, []);

  return (
    <>
      <Eventcalendar
        className="md-search-events"
        clickToCreate={false}
        dragToCreate={false}
        dragToMove={false}
        dragToResize={false}
        selectMultipleEvents={true}
        view={calView}
        data={calEvents}
        selectedEvents={mySelectedEvent}
        selectedDate={currentDate}
        renderHeader={myHeader}
        onPageLoading={handlePageLoading}
      />
      <Popup
        className="md-search-popup"
        display="anchored"
        showArrow={false}
        showOverlay={false}
        scrollLock={false}
        contentPadding={false}
        focusOnOpen={false}
        focusOnClose={false}
        anchor={searchInput}
        focusElm={searchInput}
        isOpen={isOpen}
        onInit={popupInit}
        onClose={popupClose}
      >
        <Eventcalendar
          className="mbsc-popover-list"
          view={listView}
          data={listEvents}
          showControls={false}
          onEventClick={handleEventClick}
        />
      </Popup>
    </>
  );
};
export default App;
