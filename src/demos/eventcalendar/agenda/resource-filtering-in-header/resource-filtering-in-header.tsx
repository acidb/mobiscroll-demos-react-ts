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
  SegmentedGroup,
  SegmentedItem,
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
  const [selected, setSelected] = useState<{ [key: number | string]: boolean }>({ 1: true });
  const [events, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<MbscCalendarEvent[]>([]);
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastText, setToastText] = useState<string>();

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      agenda: {
        type: 'month',
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

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  const filterEvents = useCallback((events: MbscCalendarEvent, selected: { [key: number | string]: boolean }) => {
    const evs = [];
    for (let i = 0; i < events.length; ++i) {
      const item = events[i];
      if (selected[item.resource]) {
        evs.push(item);
      }
    }
    setFilteredEvents(evs);
  }, []);

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

  const filter = (ev: ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value;
    const checked = ev.target.checked;

    selected[value] = checked;

    setSelected(selected);

    filterEvents(events, selected);

    setToastText((checked ? 'Showing ' : 'Hiding ') + document.querySelector('.md-header-filter-name-' + value)!.textContent + ' events');
    setToastOpen(true);
  };

  const customWithNavButtons = () => (
    <>
      <CalendarNav className="md-header-filter-nav" />
      <div className="md-header-filter-controls">
        <SegmentedGroup select="multiple">
          {myResources.map((res: MbscResource) => (
            <SegmentedItem key={res.id} value={res.id} checked={selected[res.id]} onChange={filter}>
              <img className="md-header-filter-img" src={res.img} alt={res.name} />
              <span className={'md-header-filter-name md-header-filter-name-' + res.id}>{res.name}</span>
            </SegmentedItem>
          ))}
        </SegmentedGroup>
      </div>
      <CalendarPrev className="md-header-filter-prev" />
      <CalendarToday />
      <CalendarNext className="md-header-filter-next" />
    </>
  );

  return (
    <div>
      <Eventcalendar
        renderHeader={customWithNavButtons}
        view={myView}
        resources={myResources}
        data={filteredEvents}
        cssClass="md-custom-header-filtering"
      />
      <Toast
        // theme
        message={toastText}
        isOpen={isToastOpen}
        onClose={handleCloseToast}
      />
    </div>
  );
};

export default App;
