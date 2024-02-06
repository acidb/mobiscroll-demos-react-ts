import { Eventcalendar, getJson, MbscCalendarEvent, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/react';
import React from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: React.FC = () => {
  const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([]);

  const myView = React.useMemo<MbscEventcalendarView>(
    () => ({
      agenda: {
        type: 'month',
      },
    }),
    [],
  );

  React.useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <Eventcalendar
      // theme
      // locale
      data={myEvents}
      view={myView}
      onDestroy={() => {
        // Your custom event handler goes here
      }}
      onEventClick={() => {
        // Logic for event click
      }}
      onEventDoubleClick={() => {
        // Logic for event double click
      }}
      onEventHoverIn={() => {
        // Logic for event hover in
      }}
      onEventHoverOut={() => {
        // Logic for event hover out
      }}
      onEventRightClick={() => {
        // Logic for event right click
      }}
      onInit={() => {
        // Logic running on component init
      }}
      onPageChange={() => {
        // Your custom event handler goes here
      }}
      onPageLoaded={() => {
        // Use it to inject custom markup & attach custom listeners
      }}
      onPageLoading={() => {
        // Use it to load data on demand
      }}
      onSelectedDateChange={() => {
        // Use it to keep track of the selected date externally
      }}
    />
  );
};
export default App;
