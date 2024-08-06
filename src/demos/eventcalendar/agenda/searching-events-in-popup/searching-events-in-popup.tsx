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
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
  const [listEvents, setListEvents] = useState<MbscCalendarEvent[]>([]);
  const [searchInput, setSearchInput] = useState<HTMLElement>();
  const [selectedEvent, setSelectedEvent] = useState<MbscCalendarEvent[]>([]);

  const calInst = useRef<Eventcalendar | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const calView = useMemo<MbscEventcalendarView>(() => ({ agenda: { type: 'month' } }), []);
  const listView = useMemo<MbscEventcalendarView>(() => ({ agenda: { type: 'year', size: 5 } }), []);

  const handleInputChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    const searchText = ev.target.value;

    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (searchText.length > 0) {
        getJson(
          'https://trial.mobiscroll.com/searchevents/?text=' + searchText,
          (data: MbscCalendarEvent[]) => {
            setListEvents(data);
            setPopupOpen(true);
          },
          'jsonp',
        );
      } else {
        setPopupOpen(false);
      }
    }, 200);
  }, []);

  const handleInputFocus = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    if (ev.target.value.length > 0) {
      setPopupOpen(true);
    }
  }, []);

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

  const handlePopupClose = useCallback(() => {
    setPopupOpen(false);
  }, []);

  const handleEventClick = useCallback((args: MbscEventClickEvent) => {
    setSelectedEvent([args.event]);
    setPopupOpen(false);
    calInst.current?.navigateToEvent(args.event);
  }, []);

  const searchInputRef = useCallback((input: Input) => {
    setSearchInput(input && input.nativeElement);
  }, []);

  const customHeader = useCallback(
    () => (
      <>
        <CalendarNav />
        <div className="mds-search-bar mbsc-flex-1-0">
          <Input
            autoComplete="off"
            inputStyle="box"
            placeholder="Search events"
            startIcon="material-search"
            ref={searchInputRef}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <CalendarPrev />
        <CalendarToday />
        <CalendarNext />
      </>
    ),
    [handleInputChange, handleInputFocus, searchInputRef],
  );

  return (
    <>
      <Eventcalendar
        data={calEvents}
        ref={calInst}
        renderHeader={customHeader}
        selectedEvents={selectedEvent}
        selectMultipleEvents={true}
        view={calView}
        onPageLoading={handlePageLoading}
      />
      <Popup
        anchor={searchInput}
        contentPadding={false}
        display="anchored"
        focusElm={searchInput}
        focusOnOpen={false}
        focusOnClose={false}
        isOpen={isPopupOpen}
        scrollLock={false}
        showArrow={false}
        showOverlay={false}
        width={400}
        onClose={handlePopupClose}
      >
        <Eventcalendar
          className="mds-search-results"
          data={listEvents}
          showControls={false}
          view={listView}
          onEventClick={handleEventClick}
        />
      </Popup>
    </>
  );
};

export default App;
