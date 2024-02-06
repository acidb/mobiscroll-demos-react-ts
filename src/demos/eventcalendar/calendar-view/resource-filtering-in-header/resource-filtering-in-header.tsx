import {
  CalendarNav,
  CalendarNext,
  CalendarPrev,
  CalendarToday,
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscResource,
  Segmented,
  SegmentedGroup,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { ChangeEvent, FC, useCallback, useEffect, useMemo, useState } from 'react';
import './resource-filtering-in-header.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({ 1: true });
  const [events, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<MbscCalendarEvent[]>([]);
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastText, setToastText] = useState<string>();

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  const calView = useMemo<MbscEventcalendarView>(
    () => ({
      calendar: {
        labels: true,
      },
    }),
    [],
  );

  const myResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: 'Barry',
        color: '#328e39',
        img: 'https://img.mobiscroll.com/demos/m1.png',
        checked: true,
      },
      {
        id: 2,
        name: 'Hortense',
        color: '#00aabb',
        img: 'https://img.mobiscroll.com/demos/f1.png',
        checked: false,
      },
      {
        id: 3,
        name: 'Carl',
        color: '#ea72c0',
        img: 'https://img.mobiscroll.com/demos/m2.png',
        checked: false,
      },
    ],
    [],
  );

  const filterEvents = useCallback((events: MbscCalendarEvent, selected: { [key: string]: boolean }) => {
    const evs = [];
    for (let i = 0; i < events.length; ++i) {
      const item = events[i];
      if (selected[item.resource]) {
        evs.push(item);
      }
    }
    setFilteredEvents(evs);
  }, []);

  const filter = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      const value = ev.target.value;
      const checked = ev.target.checked;

      selected[value] = checked;

      setSelected(selected);

      filterEvents(events, selected);

      setToastText((checked ? 'Showing ' : 'Hiding ') + document.querySelector('.md-header-filter-name-' + value)!.textContent + ' events');
      setToastOpen(true);
    },
    [events, filterEvents, selected],
  );

  const customWithNavButtons = useCallback(
    () => (
      <>
        <CalendarNav className="md-header-filter-nav" />
        <div className="md-header-filter-controls">
          <SegmentedGroup select="multiple">
            {myResources.map((res) => (
              <Segmented key={res.id} value={res.id} checked={selected[res.id]} onChange={filter}>
                <img className="md-header-filter-img" src={res.img} alt={res.name} />
                <span className={'md-header-filter-name md-header-filter-name-' + res.id}>{res.name}</span>
              </Segmented>
            ))}
          </SegmentedGroup>
        </div>
        <CalendarPrev className="md-header-filter-prev" />
        <CalendarToday />
        <CalendarNext className="md-header-filter-next" />
      </>
    ),
    [filter, myResources, selected],
  );

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/filter-resource-events/',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
        filterEvents(events, selected);
      },
      'jsonp',
    );
  }, [filterEvents, selected]);

  return (
    <div>
      <Eventcalendar
        // drag
        renderHeader={customWithNavButtons}
        view={calView}
        resources={myResources}
        data={filteredEvents}
        cssClass="md-custom-header-filtering"
      />
      <Toast message={toastText} isOpen={isToastOpen} onClose={handleCloseToast} />
    </div>
  );
};
export default App;
