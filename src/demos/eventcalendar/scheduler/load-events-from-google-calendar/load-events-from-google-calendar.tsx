import { googleCalendarSync } from '@mobiscroll/calendar-integration';
import {
  CalendarNav,
  CalendarNext,
  CalendarPrev,
  CalendarToday,
  Eventcalendar,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscPageLoadingEvent,
  SegmentedGroup,
  SegmentedItem,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { ChangeEvent, FC, useCallback, useEffect, useRef, useState } from 'react';
import './load-events-from-google-calendar.css';

const CALENDAR_ID = 'theacidmedia.net_8l6v679q5j2f7q8lpmcjr4mm3k@group.calendar.google.com';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [view, setView] = useState<string>('week');
  const [calView, setCalView] = useState<MbscEventcalendarView>({
    schedule: { type: 'week' },
  });
  const [isToastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const firstDay = useRef<Date>();
  const lastDay = useRef<Date>();

  const onError = useCallback((resp: { error?: string; result: { error: { message: string } } }) => {
    setToastMessage(resp.error ? resp.error : resp.result.error.message);
    setToastOpen(true);
  }, []);

  const loadEvents = useCallback(() => {
    setLoading(true);
    googleCalendarSync
      .getEvents(CALENDAR_ID, firstDay.current!, lastDay.current!)
      .then((resp) => {
        setLoading(false);
        setEvents(resp);
      })
      .catch(onError);
  }, [firstDay, lastDay, onError]);

  const handlePageLoading = useCallback(
    (event: MbscPageLoadingEvent) => {
      const start = event.viewStart;
      const end = event.viewEnd;

      // Calculate dates
      // (pre-load events for previous and next pages as well)
      if (view === 'month') {
        firstDay.current = start;
        lastDay.current = end;
      } else {
        firstDay.current = new Date(start.getFullYear(), start.getMonth(), start.getDate() - 7);
        lastDay.current = new Date(end.getFullYear(), end.getMonth(), end.getDate() + 7);
      }

      loadEvents();
    },
    [loadEvents, view],
  );

  const changeView = (event: ChangeEvent<HTMLInputElement>) => {
    let calView: MbscEventcalendarView;

    switch (event.target.value) {
      case 'month':
        calView = {
          calendar: { labels: true },
        };
        break;
      case 'week':
      default:
        calView = {
          schedule: { type: 'week' },
        };
        break;
      case 'day':
        calView = {
          schedule: { type: 'day' },
        };
        break;
      case 'agenda':
        calView = {
          calendar: { type: 'week' },
          agenda: { type: 'week' },
        };
        break;
    }

    setView(event.target.value);
    setCalView(calView);
  };

  const handleCloseToast = useCallback(() => setToastOpen(false), []);

  const customWithNavButtons = () => (
    <>
      <CalendarNav className="google-cal-header-nav" />
      <div className="md-spinner">
        <div className="md-spinner-blade"></div>
        <div className="md-spinner-blade"></div>
        <div className="md-spinner-blade"></div>
        <div className="md-spinner-blade"></div>
        <div className="md-spinner-blade"></div>
        <div className="md-spinner-blade"></div>
        <div className="md-spinner-blade"></div>
        <div className="md-spinner-blade"></div>
        <div className="md-spinner-blade"></div>
        <div className="md-spinner-blade"></div>
        <div className="md-spinner-blade"></div>
        <div className="md-spinner-blade"></div>
      </div>
      <div className="google-cal-header-picker">
        <SegmentedGroup value={view} onChange={changeView}>
          <SegmentedItem value="month">Month</SegmentedItem>
          <SegmentedItem value="week">Week</SegmentedItem>
          <SegmentedItem value="day">Day</SegmentedItem>
          <SegmentedItem value="agenda">Agenda</SegmentedItem>
        </SegmentedGroup>
      </div>
      <CalendarPrev className="google-cal-header-prev" />
      <CalendarToday className="google-cal-header-today" />
      <CalendarNext className="google-cal-header-next" />
    </>
  );

  useEffect(() => {
    googleCalendarSync.init({
      apiKey: '<YOUR_GOOGLE_API_KEY>',
      onInit: loadEvents,
    });
  }, [loadEvents]);

  return (
    <>
      <Eventcalendar
        className={'md-google-calendar ' + (isLoading ? 'md-loading-events' : '')}
        exclusiveEndDates={true}
        view={calView}
        data={myEvents}
        onPageLoading={handlePageLoading}
        renderHeader={customWithNavButtons}
      />
      <Toast message={toastMessage} isOpen={isToastOpen} onClose={handleCloseToast} />
    </>
  );
};
export default App;
