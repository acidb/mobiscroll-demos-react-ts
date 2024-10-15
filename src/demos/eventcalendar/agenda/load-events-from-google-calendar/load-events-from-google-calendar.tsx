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
  const [currentView, setCurrentView] = useState<string>('agenda');
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [myView, setMyView] = useState<MbscEventcalendarView>({
    calendar: { type: 'week' },
    agenda: { type: 'week' },
  });
  const [toastMessage, setToastMessage] = useState<string>('');

  const firstDay = useRef<Date>();
  const lastDay = useRef<Date>();

  const handleError = useCallback((resp: { error: string; result: { error: { message: string } } }) => {
    setToastMessage(resp.error ? resp.error : resp.result.error.message);
    setToastOpen(true);
  }, []);

  const loadEvents = useCallback(() => {
    setTimeout(() => {
      setLoading(true);
    });
    googleCalendarSync
      .getEvents(CALENDAR_ID, firstDay.current!, lastDay.current!)
      .then((resp: MbscCalendarEvent[]) => {
        setLoading(false);
        setEvents(resp);
      })
      .catch(handleError);
  }, [firstDay, lastDay, handleError]);

  const changeView = (event: ChangeEvent<HTMLInputElement>) => {
    let view: MbscEventcalendarView;

    switch (event.target.value) {
      case 'month':
        view = {
          calendar: { type: 'month' },
        };
        break;
      case 'week':
        view = {
          schedule: { type: 'week' },
        };
        break;
      case 'day':
        view = {
          schedule: { type: 'day' },
        };
        break;
      case 'agenda':
      default:
        view = {
          calendar: { type: 'week' },
          agenda: { type: 'week' },
        };
        break;
    }

    setCurrentView(event.target.value);
    setMyView(view);
  };

  const handlePageLoading = useCallback(
    (event: MbscPageLoadingEvent) => {
      const start = event.viewStart;
      const end = event.viewEnd;

      // Calculate dates
      // (pre-load events for previous and next pages as well)
      if (currentView === 'month') {
        firstDay.current = start;
        lastDay.current = end;
      } else {
        firstDay.current = new Date(start!.getFullYear(), start!.getMonth(), start!.getDate() - 7);
        lastDay.current = new Date(end!.getFullYear(), end!.getMonth(), end!.getDate() + 7);
      }

      loadEvents();
    },
    [loadEvents, currentView],
  );

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  const customHeader = () => (
    <>
      <CalendarNav className="mds-google-cal-nav" />
      <div className={'mds-loader' + (isLoading ? ' mds-loader-visible' : '')}></div>
      <div className="mds-google-cal-switch mbsc-flex-1-0">
        <SegmentedGroup value={currentView} onChange={changeView}>
          <Segmented value="month">Month</Segmented>
          <Segmented value="week">Week</Segmented>
          <Segmented value="day">Day</Segmented>
          <Segmented value="agenda">Agenda</Segmented>
        </SegmentedGroup>
      </div>
      <CalendarPrev className="mds-google-cal-prev" />
      <CalendarToday className="mds-google-cal-today" />
      <CalendarNext className="mds-google-cal-next" />
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
      <Eventcalendar data={myEvents} exclusiveEndDates={true} renderHeader={customHeader} view={myView} onPageLoading={handlePageLoading} />
      <Toast isOpen={isToastOpen} message={toastMessage} onClose={handleCloseToast} />
    </>
  );
};
export default App;
