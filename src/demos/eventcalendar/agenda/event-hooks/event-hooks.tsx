import {
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscPageChangeEvent,
  MbscPageLoadedEvent,
  MbscPageLoadingEvent,
  MbscSelectedDateChangeEvent,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);

  const myView = useMemo<MbscEventcalendarView>(() => ({ agenda: { type: 'month' } }), []);

  const handleDestroy = useCallback(() => {
    // Logic running on component destroy
    console.log('onDestroy');
  }, []);

  const handleEventClick = useCallback((args: MbscEventClickEvent) => {
    // Logic for event click
    console.log('onEventClick', args);
  }, []);

  const handleEventDoubleClick = useCallback((args: MbscEventClickEvent) => {
    // Logic for event double click
    console.log('onEventDoubleClick', args);
  }, []);

  const handleEventHoverIn = useCallback((args: MbscEventClickEvent) => {
    // Logic for event hover in
    console.log('onEventHoverIn', args);
  }, []);

  const handleEventHoverOut = useCallback((args: MbscEventClickEvent) => {
    // Logic for event hover out
    console.log('onEventHoverOut', args);
  }, []);

  const handleEventRightClick = useCallback((args: MbscEventClickEvent) => {
    // Logic for event right click
    console.log('onEventRightClick', args);
  }, []);

  const handleInit = useCallback(() => {
    // Logic running on component init
    console.log('onInit');
  }, []);

  const handlePageChange = useCallback((args: MbscPageChangeEvent) => {
    // Logic running on calendar page change
    console.log('onPageChange', args);
  }, []);

  const handlePageLoaded = useCallback((args: MbscPageLoadedEvent) => {
    // Use it to inject custom markup & attach custom listeners
    console.log('onPageLoaded', args);
  }, []);

  const handlePageLoading = useCallback((args: MbscPageLoadingEvent) => {
    // Use it to load data on demand
    console.log('onPageLoading', args);
  }, []);

  const handleSelectedDateChange = useCallback((args: MbscSelectedDateChangeEvent) => {
    // Use it to keep track of the selected date
    console.log('onSelectedDateChange', args);
  }, []);

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <Eventcalendar
      data={myEvents}
      view={myView}
      onDestroy={handleDestroy}
      onEventClick={handleEventClick}
      onEventDoubleClick={handleEventDoubleClick}
      onEventHoverIn={handleEventHoverIn}
      onEventHoverOut={handleEventHoverOut}
      onEventRightClick={handleEventRightClick}
      onInit={handleInit}
      onPageChange={handlePageChange}
      onPageLoaded={handlePageLoaded}
      onPageLoading={handlePageLoading}
      onSelectedDateChange={handleSelectedDateChange}
    />
  );
};

export default App;
