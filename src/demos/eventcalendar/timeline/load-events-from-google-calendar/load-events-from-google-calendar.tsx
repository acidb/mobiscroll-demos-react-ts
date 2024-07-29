import { googleCalendarSync } from '@mobiscroll/calendar-integration';
import {
  Eventcalendar,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscPageLoadingEvent,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './load-events-from-google-calendar.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [events, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const firstDay = useRef<Date>();
  const lastDay = useRef<Date>();

  const calView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: 'month',
        eventList: true,
      },
    }),
    [],
  );

  const calendars = useMemo(
    () => [
      { id: 'en.french#holiday@group.v.calendar.google.com', name: 'Holidays in France', color: '#D81B60' },
      { id: 'en.german#holiday@group.v.calendar.google.com', name: 'Holidays in Germany', color: '#F4511E' },
      { id: 'en.hungarian#holiday@group.v.calendar.google.com', name: 'Holidays in Hungary', color: '#AD1457' },
      { id: 'en.indian#holiday@group.v.calendar.google.com', name: 'Holidays in India', color: '#E4C441' },
      { id: 'en.romanian#holiday@group.v.calendar.google.com', name: 'Holidays in Romania', color: '#0B8043' },
      { id: 'en.uk#holiday@group.v.calendar.google.com', name: 'Holidays in United Kingdom', color: '#3F51B5' },
      { id: 'en.usa#holiday@group.v.calendar.google.com', name: 'Holidays in United States', color: '#8E24AA' },
    ],
    [],
  );

  const calendarIds = useMemo(
    () =>
      calendars.map((cal) => cal.id),
    [calendars],
  );

  const onError = useCallback((resp: { error?: string; result: { error: { message: string } } }) => {
    setToastMessage(resp.error ? resp.error : resp.result.error.message);
    setToastOpen(true);
  }, []);

  const loadEvents = useCallback(() => {
    googleCalendarSync
      .getEvents(calendarIds, firstDay.current!, lastDay.current!)
      .then((resp) => {
        resp.forEach((event: MbscCalendarEvent) => {
          event.resource = event.googleCalendarId;
        });
        setEvents(resp);
      })
      .catch(onError);
  }, [calendarIds, firstDay, lastDay, onError]);

  const handlePageLoading = useCallback(
    (args: MbscPageLoadingEvent) => {
      const start = args.firstDay;
      const end = args.lastDay;

      // Calculate dates
      // (pre-load events for previous and next pages as well)
      firstDay.current = new Date(start.getFullYear(), start.getMonth() - 1, start.getDate());
      lastDay.current = new Date(end.getFullYear(), end.getMonth() + 1, end.getDate());

      loadEvents();
    },
    [loadEvents],
  );

  const handleCloseToast = useCallback(() => setToastOpen(false), []);

  useEffect(() => {
    googleCalendarSync.init({
      apiKey: '<YOUR_GOOGLE_API_KEY>',
      onInit: loadEvents,
    });
  }, [loadEvents]);

  return (
    <>
      <Eventcalendar
        clickToCreate={false}
        dragToCreate={false}
        exclusiveEndDates={true}
        resources={calendars}
        view={calView}
        data={events}
        onPageLoading={handlePageLoading}
      />
      <Toast message={toastMessage} isOpen={isToastOpen} onClose={handleCloseToast} />
    </>
  );
};
export default App;
