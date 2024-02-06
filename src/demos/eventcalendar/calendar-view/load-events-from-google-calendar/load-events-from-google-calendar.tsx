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
  Segmented,
  SegmentedGroup,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { ChangeEvent, FC, useCallback, useEffect, useRef, useState } from 'react';
import './load-events-from-google-calendar.css';

setOptions({
  // localeJs,
  // themeJs
});

const CALENDAR_ID = 'theacidmedia.net_8l6v679q5j2f7q8lpmcjr4mm3k@group.calendar.google.com';

const App: FC = () => {
  const [events, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isToastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [view, setView] = useState<string>('month');
  const [calView, setCalView] = useState<MbscEventcalendarView>({
    calendar: { labels: true },
  });

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
      .then(function (resp) {
        setLoading(false);
        setEvents(resp);
      })
      .catch(onError);
  }, [firstDay, lastDay, onError]);

  const handlePageLoading = useCallback(
    (event: MbscPageLoadingEvent) => {
      const start = event.viewStart!;
      const end = event.viewEnd!;

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

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  const changeView = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    let calView: MbscEventcalendarView;

    switch (event.target.value) {
      case 'month':
      default:
        calView = {
          calendar: { labels: true },
        };
        break;
      case 'week':
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
  }, []);

  const customWithNavButtons = useCallback(() => {
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
          <Segmented value="month">Month</Segmented>
          <Segmented value="week">Week</Segmented>
          <Segmented value="day">Day</Segmented>
          <Segmented value="agenda">Agenda</Segmented>
        </SegmentedGroup>
      </div>
      <CalendarPrev className="google-cal-header-prev" />
      <CalendarToday className="google-cal-header-today" />
      <CalendarNext className="google-cal-header-next" />
    </>;
  }, [changeView, view]);

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
        data={events}
        onPageLoading={handlePageLoading}
        renderHeader={customWithNavButtons}
      />
      <Toast isOpen={isToastOpen} message={toastMessage} onClose={handleToastClose} />
    </>
  );
};
export default App;
