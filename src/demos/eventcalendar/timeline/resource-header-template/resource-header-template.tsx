import {
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscResource,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import './resource-header-template.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: 'week',
        startDay: 1,
        endDay: 5,
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
      },
      {
        id: 2,
        name: 'The Capital City',
        seats: 250,
        color: '#ff0101',
      },
      {
        id: 3,
        name: 'Heroes Square',
        seats: 400,
        color: '#01adff',
      },
      {
        id: 4,
        name: 'Thunderdome',
        seats: 1200,
        color: '#239a21',
      },
      {
        id: 5,
        name: 'King’s Landing',
        seats: 550,
        color: '#ff4600',
      },
      {
        id: 6,
        name: 'Gathering Field',
        seats: 900,
        color: '#8f1ed6',
      },
    ],
    [],
  );

  const renderCustomResource = useCallback(
    (resource: MbscResource) => (
      <div className="md-resource-header-template-title">
        <div className="md-resource-header-template-name">{resource.name}</div>
        <div className="md-resource-header-template-seats">{resource.seats} seats</div>
      </div>
    ),
    [],
  );

  const renderCustomHeader = useCallback(
    () => (
      <div className="md-resource-header-template-title">
        <div className="md-resource-header-template-name">Room</div>
        <div className="md-resource-header-template-seats">Capacity</div>
      </div>
    ),
    [],
  );

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/resource-events/',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <Eventcalendar
      // drag
      view={myView}
      data={myEvents}
      resources={myResources}
      renderResource={renderCustomResource}
      renderResourceHeader={renderCustomHeader}
      cssClass="md-resource-header-template"
    />
  );
};

export default App;
