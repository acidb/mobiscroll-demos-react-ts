import {
  Eventcalendar,
  getJson,
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

const oneDay = 60000 * 60 * 24;

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
  const calRef = useRef<Eventcalendar | null>(null);

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: 'month',
      },
    }),
    [],
  );

  const myResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: 'Flatiron Room',
        seats: 90,
        color: '#fdf500',
        price: 600,
      },
      {
        id: 2,
        name: 'The Capital City',
        seats: 250,
        color: '#ff0101',
        price: 800,
      },
      {
        id: 3,
        name: 'Heroes Square',
        seats: 400,
        color: '#01adff',
        price: 1100,
      },
      {
        id: 4,
        name: 'Hall of Faces',
        seats: 850,
        color: '#239a21',
        price: 750,
      },
      {
        id: 5,
        name: 'King’s Landing',
        seats: 550,
        color: '#ff4600',
        price: 950,
      },
      {
        id: 6,
        name: 'Gathering Field',
        seats: 900,
        color: '#8f1ed6',
        price: 700,
      },
    ],
    [],
  );

  const getUTCDateOnly = useCallback((d: Date) => Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()), []);

  const getDayDiff = useCallback(
    (d1: Date, d2: Date) => Math.round((getUTCDateOnly(d2) - getUTCDateOnly(d1)) / oneDay) + 1,
    [getUTCDateOnly],
  );

  const getRevenue = useCallback(
    (resource: MbscResource) => {
      if (calRef.current) {
        let days = 0;
        for (const event of calRef.current.getEvents()) {
          if (event.resource === resource.id) {
            days += getDayDiff(new Date(event.start as string), new Date(event.end as string));
          }
        }
        return days * resource.price;
      } else {
        return 0;
      }
    },
    [getDayDiff],
  );

  const getTotal = useCallback(() => {
    let total = 0;
    for (const resource of myResources) {
      total += getRevenue(resource);
    }
    return total;
  }, [getRevenue, myResources]);

  const myCustomResourceHeader = () => (
    <div className="md-resource-details-title">
      <div className="md-resource-header md-resource-details-name">Room</div>
      <div className="md-resource-header md-resource-details-seats">Capacity</div>
      <div className="md-resource-header md-resource-details-price">Price</div>
    </div>
  );

  const myCustomResource = (resource: MbscResource) => (
    <div className="md-resource-details-cont">
      <div className="md-resource-header md-resource-details-name">{resource.name}</div>
      <div className="md-resource-header md-resource-details-seats">{resource.seats} seats</div>
      <div className="md-resource-header md-resource-details-price">{'$' + resource.price}</div>
    </div>
  );

  const myCustomSidebarHeader = () => <div className="md-resource-details-sidebar-header">Revenue</div>;

  const myCustomSidebar = (resource: MbscResource) => <div className="md-resource-details-sidebar">{'$' + getRevenue(resource)}</div>;

  const myCustomResourceFooter = () => <div className="md-resource-details-footer md-resource-details-occuppancy">Occuppancy</div>;

  const myCustomDayFooter = (data: { date: Date; events: Array<MbscCalendarEvent> }) => {
    const events = data.events;
    let occuppancy = 0;
    if (events) {
      let resourceIds: Array<string> = [];
      let nr = 0;
      for (const event of myEvents) {
        if (resourceIds.indexOf(event.resource as string) < 0) {
          nr++;
          resourceIds = [...resourceIds, event.resource as string];
        }
      }
      occuppancy = +((nr * 100) / myResources.length).toFixed(0);
    }
    return <div className="md-resource-details-footer md-resource-details-footer-day">{occuppancy + '%'}</div>;
  };

  const myCustomSidebarFooter = () => <div className="md-resource-details-footer md-resource-details-total">{'$' + getTotal()}</div>;

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/multiday-events/',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <Eventcalendar
      ref={calRef}
      view={myView}
      data={myEvents}
      resources={myResources}
      cssClass="md-resource-details"
      renderResourceHeader={myCustomResourceHeader}
      renderResource={myCustomResource}
      renderSidebarHeader={myCustomSidebarHeader}
      renderSidebar={myCustomSidebar}
      renderResourceFooter={myCustomResourceFooter}
      renderDayFooter={myCustomDayFooter}
      renderSidebarFooter={myCustomSidebarFooter}
    />
  );
};
export default App;
