import {
  Eventcalendar,
  formatDate,
  getJson,
  Input,
  MbscCalendarEvent,
  MbscDateType,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscPageLoadingEvent,
  MbscResource,
  MbscSelectedDateChangeEvent,
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
  const [selectedDate, setSelectedDate] = useState<MbscDateType>(new Date());
  const [selectedEvent, setSelectedEvent] = useState<MbscCalendarEvent[]>([]);
  const [displayResults, setDisplayResults] = useState<boolean>(false);

  const timer = useRef<ReturnType<typeof setTimeout>>();

  const calView = useMemo<MbscEventcalendarView>(() => ({ timeline: { type: 'week' } }), []);
  const listView = useMemo<MbscEventcalendarView>(() => ({ agenda: { type: 'year', size: 5 } }), []);

  const myResources: MbscResource[] = useMemo(
    () => [
      { id: 1, name: 'Resource 1', color: '#fdf500' },
      { id: 2, name: 'Resource 2', color: '#ff4600' },
      { id: 3, name: 'Resource 3', color: '#ff0101' },
      { id: 4, name: 'Resource 4', color: '#239a21' },
      { id: 5, name: 'Resource 5', color: '#8f1ed6' },
      { id: 6, name: 'Resource 6', color: '#01adff' },
    ],
    [],
  );

  const handleInputChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    const text = ev.target.value;

    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (text.length > 0) {
        getJson(
          'https://trial.mobiscroll.com/searchevents-timeline/?text=' + text,
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
        'https://trial.mobiscroll.com/searchevents-timeline/?start=' + start + '&end=' + end,
        (data: MbscCalendarEvent[]) => {
          setCalEvents(data);
        },
        'jsonp',
      );
    });
  }, []);

  const handleSelectedDateChange = useCallback((args: MbscSelectedDateChangeEvent) => {
    setSelectedDate(args.date);
  }, []);

  const handleEventClick = useCallback((args: MbscEventClickEvent) => {
    setSelectedDate(args.event.start!);
    setSelectedEvent([args.event]);
  }, []);

  return (
    <Page className="mds-full-height">
      <div className="mds-full-height mbsc-flex">
        <div className="mds-search-sidebar mbsc-flex-col mbsc-flex-none">
          <Input startIcon="material-search" onChange={handleInputChange} inputStyle="outline" placeholder="Search events" />
          {displayResults && <Eventcalendar data={listEvents} showControls={false} view={listView} onEventClick={handleEventClick} />}
        </div>
        <div className="mds-search-calendar mbsc-flex-1-1">
          <Eventcalendar
            clickToCreate={false}
            data={calEvents}
            dragToCreate={false}
            dragToMove={false}
            dragToResize={false}
            resources={myResources}
            selectedDate={selectedDate}
            selectedEvents={selectedEvent}
            selectMultipleEvents={true}
            view={calView}
            onPageLoading={handlePageLoading}
            onSelectedDateChange={handleSelectedDateChange}
          />
        </div>
      </div>
    </Page>
  );
};

export default App;
