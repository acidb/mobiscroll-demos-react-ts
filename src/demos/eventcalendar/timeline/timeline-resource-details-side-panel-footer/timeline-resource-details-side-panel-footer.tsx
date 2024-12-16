import {
  Eventcalendar,
  formatDate,
  getJson,
  MbscCalendarDayData,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscResource,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './timeline-resource-details-side-panel-footer.css';

setOptions({
  // localeJs,
  // themeJs
});

interface MyResource extends MbscResource {
  busyHours?: number;
  price: number;
  revenue?: number;
  seats: number;
}

const App: FC = () => {
  const myView = useMemo<MbscEventcalendarView>(() => ({ timeline: { type: 'month' } }), []);

  const myResources = useMemo<MyResource[]>(
    () => [
      { id: 1, name: 'Horizon', seats: 1200, color: '#4a4a4a', price: 1000 },
      { id: 2, name: 'Apex Hall', seats: 90, color: '#fdf500', price: 600 },
      { id: 3, name: 'Jade Room', seats: 700, color: '#00aaff', price: 900 },
      { id: 4, name: 'Dome Arena', seats: 850, color: '#239a21', price: 750 },
      { id: 5, name: 'Forum Plaza', seats: 900, color: '#8f1ed6', price: 700 },
      { id: 6, name: 'Gallery', seats: 300, color: '#0077b6', price: 650 },
      { id: 7, name: 'Icon Hall', seats: 450, color: '#e63946', price: 850 },
      { id: 8, name: 'Broadway', seats: 250, color: '#ff0101', price: 800 },
      { id: 9, name: 'Central Hub', seats: 400, color: '#01adff', price: 1100 },
      { id: 10, name: 'Empire Hall', seats: 550, color: '#ff4600', price: 950 },
    ],
    [],
  );

  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [sortedResources, setResources] = useState(myResources);

  const calRef = useRef<Eventcalendar>(null);
  const sortColumn = useRef<string>('');
  const sortDirection = useRef<string>('');
  const sortDay = useRef<number>();
  const loadedEvents = useRef<MbscCalendarEvent[]>([]);

  const getUTCDateOnly = useCallback((d: Date) => Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()), []);

  const getDayDiff = useCallback(
    (d1: Date, d2: Date) => Math.round((getUTCDateOnly(d2) - getUTCDateOnly(d1)) / (60000 * 60 * 24)) + 1,
    [getUTCDateOnly],
  );

  const getRevenue = useCallback(
    (resource: MyResource) => {
      let days = 0;
      for (const event of loadedEvents.current) {
        if (event.resource === resource.id) {
          days += getDayDiff(new Date(event.start as string), new Date(event.end as string));
        }
      }
      return days * resource.price;
    },
    [getDayDiff],
  );

  const getSortArrow = useCallback((column: string, day?: number) => {
    if (sortColumn.current === column && day === sortDay.current) {
      return sortDirection.current === 'asc' ? 'asc' : sortDirection.current === 'desc' ? 'desc' : 'def';
    }
    return 'def';
  }, []);

  const getBusyHours = useCallback((resource: MyResource, timestamp: number) => {
    const startOfDay = new Date(timestamp);
    const endOfDay = new Date(startOfDay.getFullYear(), startOfDay.getMonth(), startOfDay.getDate() + 1);
    return loadedEvents.current.reduce((totalHours, event) => {
      if (event.resource === resource.id) {
        const eventStart = Math.max(+startOfDay, +new Date(event.start as Date));
        const eventEnd = Math.min(+endOfDay, +new Date(event.end as Date));
        return totalHours + (eventStart < eventEnd ? (eventEnd - eventStart) / (60 * 60 * 1000) : 0);
      }
      return totalHours;
    }, 0);
  }, []);

  const sortResources = useCallback(
    (column?: string, day?: number) => {
      if (column) {
        if (sortColumn.current === column && day === sortDay.current) {
          sortDirection.current = sortDirection.current === 'asc' ? 'desc' : sortDirection.current === 'desc' ? 'def' : 'asc';
        } else {
          sortColumn.current = column;
          sortDirection.current = 'asc';
        }
        sortDay.current = day;
      }

      if (sortDay.current) {
        // Precalculate busy hours for the clicked day
        myResources.forEach((resource) => {
          resource.busyHours = getBusyHours(resource, sortDay.current as number);
        });
      }

      const updatedResources = [...myResources].sort((a: MyResource, b: MyResource) => {
        if (sortDirection.current === 'asc') {
          return a[sortColumn.current] > b[sortColumn.current] ? 1 : -1;
        }
        if (sortDirection.current === 'desc') {
          return a[sortColumn.current] < b[sortColumn.current] ? 1 : -1;
        }
        return +a.id - +b.id;
      });

      setResources(updatedResources);
    },
    [getBusyHours, myResources],
  );

  const refreshData = useCallback(() => {
    loadedEvents.current = calRef.current ? calRef.current.getEvents() : [];

    myResources.forEach((resource) => {
      resource.revenue = getRevenue(resource);
    });

    setTotalRevenue(myResources.reduce((total, resource) => total + resource.revenue!, 0));
  }, [getRevenue, myResources]);

  const handlePageLoading = useCallback(() => {
    refreshData();
  }, [refreshData]);

  const handleEventChange = useCallback(() => {
    refreshData();
    sortResources();
  }, [refreshData, sortResources]);

  const myCustomResourceHeader = useCallback(
    () => (
      <>
        <div
          className={`mds-resource-sort-header mds-resource-cell mds-resource-cell-name mds-resource-sort-${getSortArrow('name')}`}
          onClick={() => sortResources('name')}
        >
          Room
        </div>
        <div
          className={`mds-resource-sort-header mds-resource-cell mds-resource-cell-seats mds-resource-sort-${getSortArrow('seats')}`}
          onClick={() => sortResources('seats')}
        >
          Capacity
        </div>
        <div
          className={`mds-resource-sort-header mds-resource-cell mds-resource-cell-price mds-resource-sort-${getSortArrow('price')}`}
          onClick={() => sortResources('price')}
        >
          Price/day
        </div>
      </>
    ),
    [getSortArrow, sortResources],
  );

  const myCustomResource = useCallback(
    (resource: MyResource) => (
      <>
        <div className="mds-resource-cell mds-resource-cell-name">{resource.name}</div>
        <div className="mds-resource-cell mds-resource-cell-seats">{resource.seats} seats</div>
        <div className="mds-resource-cell mds-resource-cell-price">{'$' + resource.price}</div>
      </>
    ),
    [],
  );

  const myCustomResourceFooter = useCallback(
    () => <div className="mds-resource-details-footer mds-resource-details-occuppancy">Occuppancy</div>,
    [],
  );

  const myCustomDay = useCallback(
    (data: MbscCalendarDayData) => {
      const day = data.date.getTime();

      return (
        <div
          className={`mds-resource-sort-header mds-resource-sort-${getSortArrow('busyHours', day)}`}
          onClick={() => sortResources('busyHours', day)}
        >
          {formatDate('D DDD', data.date)}
        </div>
      );
    },
    [getSortArrow, sortResources],
  );

  const myCustomDayFooter = useCallback(
    (data: MbscCalendarDayData) => {
      const events = data.events;
      let occuppancy = 0;
      if (events) {
        const resourceIds = [];
        let nr = 0;
        for (const event of events) {
          if (resourceIds.indexOf(event.resource) < 0) {
            nr++;
            resourceIds.push(event.resource);
          }
        }
        occuppancy = (nr * 100) / myResources.length;
      }
      return <div className="mds-resource-details-footer mds-resource-details-footer-day">{occuppancy.toFixed(0) + '%'}</div>;
    },
    [myResources.length],
  );

  const myCustomSidebarHeader = useCallback(
    () => (
      <div className={`mds-resource-sort-header mds-resource-sort-${getSortArrow('revenue')}`} onClick={() => sortResources('revenue')}>
        Revenue
      </div>
    ),
    [getSortArrow, sortResources],
  );

  const myCustomSidebar = useCallback((resource: MyResource) => <div className="mds-resource-cell">{'$' + resource.revenue}</div>, []);

  const myCustomSidebarFooter = useCallback(
    () => <div className="mds-resource-details-footer mds-resource-details-total">{'$' + totalRevenue}</div>,
    [totalRevenue],
  );
  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/multiday-events/',
      (events) => {
        setEvents(events);
        setTimeout(() => {
          refreshData();
        });
      },
      'jsonp',
    );
  }, [refreshData]);

  return (
    <Eventcalendar
      cssClass="mds-resource-details"
      clickToCreate={true}
      data={myEvents}
      dragToCreate={true}
      dragToMove={true}
      dragToResize={true}
      ref={calRef}
      resources={sortedResources}
      renderResourceHeader={myCustomResourceHeader}
      renderResource={myCustomResource}
      renderSidebarHeader={myCustomSidebarHeader}
      renderSidebar={myCustomSidebar}
      renderResourceFooter={myCustomResourceFooter}
      renderDay={myCustomDay}
      renderDayFooter={myCustomDayFooter}
      renderSidebarFooter={myCustomSidebarFooter}
      onPageLoading={handlePageLoading}
      onEventCreated={handleEventChange}
      onEventDeleted={handleEventChange}
      onEventUpdated={handleEventChange}
      view={myView}
    />
  );
};
export default App;
