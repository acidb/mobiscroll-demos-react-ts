import {
  Button,
  CalendarNav,
  CalendarToday,
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscSelectedDateChangeEvent,
  Segmented,
  SegmentedGroup,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import './customizing-calendar-header.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState<string>('agenda');
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [myView, setView] = useState<MbscEventcalendarView>({ agenda: { type: 'month' } });

  const handleSelectedDateChange = useCallback((args: MbscSelectedDateChangeEvent) => {
    setCurrentDate(args.date as Date);
  }, []);

  const changeView = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    let view = {};
    switch (event.target.value) {
      case 'calendar':
        view = {
          calendar: { type: 'month' },
        };
        break;
      case 'agenda':
        view = {
          agenda: { type: 'month' },
        };
        break;
    }

    setCurrentView(event.target.value);
    setView(view);
  }, []);

  const prevPage = useCallback(() => {
    setCurrentDate((currentDate) => new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  }, []);

  const nextPage = useCallback(() => {
    setCurrentDate((currentDate) => new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  }, []);

  const customWithNavButtons = useCallback(
    () => (
      <>
        <CalendarNav className="mds-custom-header-nav" />
        <div className="mbsc-flex mbsc-flex-1-0 mbsc-justify-content-center">
          <Button onClick={prevPage} icon="material-arrow-back" variant="flat" className="mds-custom-header-button"></Button>
          <CalendarToday />
          <Button onClick={nextPage} icon="material-arrow-forward" variant="flat" className="mds-custom-header-button"></Button>
        </div>
        <div className="mds-custom-header-switch">
          <SegmentedGroup value={currentView} onChange={changeView}>
            <Segmented value="agenda" icon="material-view-day" />
            <Segmented value="calendar" icon="calendar" />
          </SegmentedGroup>
        </div>
      </>
    ),
    [changeView, nextPage, prevPage, currentView],
  );

  useEffect(() => {
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
      data={myEvents}
      renderHeader={customWithNavButtons}
      selectedDate={currentDate}
      view={myView}
      onSelectedDateChange={handleSelectedDateChange}
    />
  );
};

export default App;
