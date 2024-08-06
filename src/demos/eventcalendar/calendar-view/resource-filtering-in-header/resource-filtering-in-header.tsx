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
  const [filteredEvents, setFilteredEvents] = useState<MbscCalendarEvent[]>([]);
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [selectedResources, setSelectedResources] = useState<{ [key: number | string]: boolean }>({ 1: true });
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>();

  const myView = useMemo<MbscEventcalendarView>(() => ({ calendar: { labels: true } }), []);

  const myResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: 'Barry',
        color: '#328e39',
        img: 'https://img.mobiscroll.com/demos/m1.png',
      },
      {
        id: 2,
        name: 'Hortense',
        color: '#00aabb',
        img: 'https://img.mobiscroll.com/demos/f1.png',
      },
      {
        id: 3,
        name: 'Carl',
        color: '#ea72c0',
        img: 'https://img.mobiscroll.com/demos/m2.png',
      },
    ],
    [],
  );

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  const handleChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      const value = +ev.target.value;
      const checked = ev.target.checked;
      const resource = myResources.find((r) => r.id === value);

      selectedResources[value] = checked;

      setSelectedResources(selectedResources);
      setFilteredEvents(myEvents.filter((e) => selectedResources[e.resource as number]));
      setToastMessage((checked ? 'Showing ' : 'Hiding ') + (resource ? resource.name : '') + ' events');
      setToastOpen(true);
    },
    [myEvents, myResources, selectedResources],
  );

  const customHeader = useCallback(
    () => (
      <>
        <CalendarNav className="mds-header-filter-nav" />
        <div className="mds-header-filter mbsc-flex-1-0">
          <SegmentedGroup select="multiple">
            {myResources.map((res) => (
              <Segmented
                key={res.id}
                value={res.id}
                checked={selectedResources[res.id]}
                className={'mds-header-filter-' + res.id}
                onChange={handleChange}
              >
                <img className="mds-header-filter-img" src={res.img} alt={res.name} />
                <span className="mds-header-filter-name">{res.name}</span>
              </Segmented>
            ))}
          </SegmentedGroup>
        </div>
        <CalendarPrev className="mds-header-filter-prev" />
        <CalendarToday className="mds-header-filter-today" />
        <CalendarNext className="mds-header-filter-next" />
      </>
    ),
    [handleChange, myResources, selectedResources],
  );

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/filter-resource-events/',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
        setFilteredEvents(events.filter((e) => e.resource === 1));
      },
      'jsonp',
    );
  }, []);

  return (
    <>
      <Eventcalendar
        clickToCreate={false}
        dragToCreate={false}
        dragToMove={true}
        dragToResize={true}
        data={filteredEvents}
        renderHeader={customHeader}
        resources={myResources}
        view={myView}
      />
      <Toast message={toastMessage} isOpen={isToastOpen} onClose={handleToastClose} />
    </>
  );
};

export default App;
