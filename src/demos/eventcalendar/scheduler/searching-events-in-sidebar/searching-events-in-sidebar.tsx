import {
  Eventcalendar,
  formatDate,
  getJson,
  Input,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscPageLoadingEvent,
  Page,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { ChangeEvent, FC, useCallback, useMemo, useRef, useState } from 'react';
import './searching-events-in-sidebar.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [calEvents, setCalEvents] = useState<MbscCalendarEvent[]>([]);
  const [listEvents, setListEvents] = useState<MbscCalendarEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<MbscCalendarEvent[]>([]);
  const [displayResults, setDisplayResults] = useState<boolean>(false);

  const calInst = useRef<Eventcalendar | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const calView = useMemo<MbscEventcalendarView>(() => ({ schedule: { type: 'week' } }), []);
  const listView = useMemo<MbscEventcalendarView>(() => ({ agenda: { type: 'year', size: 5 } }), []);

  const handleInputChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    const text = ev.target.value;

    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (text.length > 0) {
        getJson(
          'https://trial.mobiscroll.com/searchevents/?text=' + text,
          (data: MbscCalendarEvent[]) => {
            setListEvents(data);
            setDisplayResults(true);
          },
          'jsonp',
        );
      } else {
        setDisplayResults(false);
      }
    }, 200);
  }, []);

  const handlePageLoading = useCallback((args: MbscPageLoadingEvent) => {
    const start = formatDate('YYYY-MM-DD', args.viewStart);
    const end = formatDate('YYYY-MM-DD', args.viewEnd);

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

  const handleEventClick = useCallback((args: MbscEventClickEvent) => {
    setSelectedEvent([args.event]);
    calInst.current?.navigateToEvent(args.event);
  }, []);

  return (
    <Page className="mds-full-height">
      <div className="mds-full-height mbsc-flex">
        <div className="mds-search-sidebar mbsc-flex-col mbsc-flex-none">
          <Input
            autoComplete="off"
            startIcon="material-search"
            onChange={handleInputChange}
            inputStyle="outline"
            placeholder="Search events"
          />
          {displayResults && <Eventcalendar data={listEvents} showControls={false} view={listView} onEventClick={handleEventClick} />}
        </div>
        <div className="mds-search-calendar mbsc-flex-1-1">
          <Eventcalendar
            clickToCreate={false}
            data={calEvents}
            dragToCreate={false}
            dragToMove={false}
            dragToResize={false}
            ref={calInst}
            selectedEvents={selectedEvent}
            selectMultipleEvents={true}
            view={calView}
            onPageLoading={handlePageLoading}
          />
        </div>
      </div>
    </Page>
  );
};

export default App;
