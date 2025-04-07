import {
  Button,
  CalendarNav,
  CalendarNext,
  CalendarPrev,
  Eventcalendar,
  MbscCalendarEvent,
  MbscCalendarEventData,
  MbscEventcalendarView,
  MbscEventCreatedEvent,
  MbscEventDeletedEvent,
  MbscEventUpdatedEvent,
  MbscPageLoadingEvent,
  MbscPopupButton,
  MbscResource,
  Popup,
  Radio,
  RadioGroup,
  Segmented,
  SegmentedGroup,
  setOptions /* localeImport */,
  Snackbar,
  Toast,
} from '@mobiscroll/react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './dynamic-calculation-resource-sort.css';

setOptions({
  // localeJs,
  // themeJs
});

interface MyEvent extends MbscCalendarEvent {
  payload?: number;
}

interface MyResource extends MbscResource {
  standby?: number;
  deadhead?: number;
  payload?: number;
  model: string;
  location: string;
}

function App() {
  const [myEvents, setMyEvents] = useState<MyEvent[]>([
    {
      start: 'dyndatetime(y,m,d-1)',
      end: 'dyndatetime(y,m,d+3)',
      title: 'Tour #013 - Miami to Seattle',
      resource: 1,
      color: '#FF9933',
      payload: 25,
    },
    {
      start: 'dyndatetime(y,m,d+1)',
      end: 'dyndatetime(y,m,d+3)',
      title: 'Tour #014 - Denver to Boston',
      resource: 2,
      color: '#33FFA6',
      payload: 18,
    },
    {
      start: 'dyndatetime(y,m,d)',
      end: 'dyndatetime(y,m,d+3)',
      title: 'Tour #015 - Orlando to Austin',
      resource: 3,
      color: '#9933FF',
      payload: 20,
    },
    {
      start: 'dyndatetime(y,m,d+1)',
      end: 'dyndatetime(y,m,d+4)',
      title: 'Tour #016 - Detroit to Baltimore',
      resource: 4,
      color: '#33A6FF',
      payload: 0,
    },
    {
      start: 'dyndatetime(y,m,d+2)',
      end: 'dyndatetime(y,m,d+5)',
      title: 'Tour #017 - Las Vegas to Portland',
      resource: 5,
      color: '#FF5733',
      payload: 20,
    },
    {
      start: 'dyndatetime(y,m,d+2)',
      end: 'dyndatetime(y,m,d+5)',
      title: 'Tour #018 - Atlanta to Kansas City',
      resource: 6,
      color: '#33FF99',
      payload: 0,
    },
    {
      start: 'dyndatetime(y,m,d-4,11)',
      end: 'dyndatetime(y,m,d)',
      title: 'Tour #018 - Dallas to Atlanta',
      resource: 6,
      color: '#33FF99',
      payload: 14,
    },
    {
      start: 'dyndatetime(y,m,d)',
      end: 'dyndatetime(y,m,d+4)',
      title: 'Tour #019 - Charlotte to Indianapolis',
      resource: 7,
      color: '#FF5733',
      payload: 22,
    },
    {
      start: 'dyndatetime(y,m,d)',
      end: 'dyndatetime(y,m,d+2)',
      title: 'Tour #005 - Dallas to San Francisco',
      resource: 7,
      color: '#FF5733',
      payload: 18,
    },
    {
      start: 'dyndatetime(y,m,d+4)',
      end: 'dyndatetime(y,m,d+6)',
      title: 'Tour #001 - New York to Los Angeles',
      resource: 7,
      color: '#FF5733',
      payload: 20,
    },
    {
      start: 'dyndatetime(y,m,d)',
      end: 'dyndatetime(y,m,d+2)',
      title: 'Tour #009 - San Diego to Dallas',
      resource: 7,
      color: '#FF5733',
      payload: 16,
    },
    {
      start: 'dyndatetime(y,m,d+4)',
      end: 'dyndatetime(y,m,d+6)',
      title: 'Tour #006 - Los Angeles to Chicago',
      resource: 8,
      color: '#FF33A6',
      payload: 10,
    },
    {
      start: 'dyndatetime(y,m,d-2)',
      end: 'dyndatetime(y,m,d+2)',
      title: 'Tour #010 - San Francisco to Los Angeles',
      resource: 8,
      color: '#FF33A6',
      payload: 0,
    },
    {
      start: 'dyndatetime(y,m,d+3)',
      end: 'dyndatetime(y,m,d+6)',
      title: 'Tour #007 - Houston to New York',
      resource: 9,
      color: '#33FF57',
      payload: 0,
    },
    {
      start: 'dyndatetime(y,m,d)',
      end: 'dyndatetime(y,m,d+2)',
      title: 'Tour #003 - Philadelphia to Phoenix',
      resource: 9,
      color: '#33FF57',
      payload: 0,
    },
    {
      start: 'dyndatetime(y,m,d-4)',
      end: 'dyndatetime(y,m,d-1)',
      title: 'Tour #028 - Trenton to Philadelphia',
      resource: 9,
      color: '#33FF57',
      payload: 11,
    },
    {
      start: 'dyndatetime(y,m,d-4)',
      end: 'dyndatetime(y,m,d+1)',
      title: 'Tour #004 - San Antonio to San Diego',
      resource: 10,
      color: '#3357FF',
      payload: 15,
    },

    {
      start: 'dyndatetime(y,m,d+3)',
      end: 'dyndatetime(y,m,d+6)',
      title: 'Tour #022 - Cleveland to Cincinnati',
      resource: 10,
      color: '#3357FF',
      payload: 17,
    },
    {
      start: 'dyndatetime(y,m,d-4)',
      end: 'dyndatetime(y,m,d+1)',
      title: 'Tour #023 - Boston to Philadelphia',
      resource: 11,
      color: '#FF9933',
      payload: 19,
    },
    {
      start: 'dyndatetime(y,m,d)',
      end: 'dyndatetime(y,m,d+2)',
      title: 'Tour #024 - Las Vegas to San Diego',
      resource: 12,
      color: '#33FF57',
      payload: 28,
    },
    {
      start: 'dyndatetime(y,m,d-3)',
      end: 'dyndatetime(y,m,d)',
      title: 'Tour #025 - Miami to Charlotte',
      resource: 13,
      color: '#9933FF',
      payload: 26,
    },
    {
      start: 'dyndatetime(y,m,d+2)',
      end: 'dyndatetime(y,m,d+5)',
      title: 'Tour #026 - Seattle to Portland',
      resource: 14,
      color: '#33A6FF',
      payload: 12,
    },
    {
      start: 'dyndatetime(y,m,d-1)',
      end: 'dyndatetime(y,m,d+2)',
      title: 'Tour #027 - Atlanta to Orlando',
      resource: 15,
      color: '#FF5733',
      payload: 17,
    },
  ]);

  const myResources = useMemo<MyResource[]>(
    () => [
      { id: 1, name: 'NY-TRK-1200', capacity: 25, location: 'New York', model: 'Renault Magnum' },
      { id: 2, name: 'LA-TRK-0090', capacity: 18, location: 'Los Angeles', model: 'Mercedes Actros' },
      { id: 3, name: 'CH-TRK-0700', capacity: 22, location: 'Phoenix', model: 'Scania R500' },
      { id: 4, name: 'HO-TRK-0850', capacity: 28, location: 'Houston', model: 'Volvo FH16' },
      { id: 5, name: 'PH-TRK-0900', capacity: 24, location: 'Chicago', model: 'MAN TGX' },
      { id: 6, name: 'PA-TRK-0300', capacity: 15, location: 'Philadelphia', model: 'Renault T High' },
      { id: 8, name: 'SD-TRK-0250', capacity: 21, location: 'San Francisco', model: 'Mercedes Arocs' },
      { id: 9, name: 'DA-TRK-0400', capacity: 20, location: 'Dallas', model: 'DAF XF' },
      { id: 10, name: 'SF-TRK-0550', capacity: 17, location: 'San Diego', model: 'Iveco Stralis' },
      { id: 11, name: 'BO-TRK-1100', capacity: 23, location: 'Boston', model: 'Kenworth T680' },
      { id: 12, name: 'LV-TRK-2200', capacity: 30, location: 'Las Vegas', model: 'Volvo FH16' },
      { id: 13, name: 'MI-TRK-3300', capacity: 26, location: 'Miami', model: 'Peterbilt 579' },
      { id: 14, name: 'SE-TRK-4400', capacity: 16, location: 'Seattle', model: 'Mack Anthem' },
      { id: 15, name: 'AT-TRK-5500', capacity: 19, location: 'Atlanta', model: 'Renault Magnum' },
    ],
    [],
  );

  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
  const [isSnackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [popupAnchor, setPopupAnchor] = useState<HTMLButtonElement>();
  const [sortRequest, setSortRequest] = useState<number>(0);
  const [snackbarKey, setSnackbarKey] = useState<number>(0);
  const [sortedResources, setResources] = useState<MyResource[]>(myResources);
  const [tempSortColumn, setTempSortColumn] = useState<'standby' | 'payload' | 'deadhead' | 'name'>('standby');
  const [tempSortDirection, setTempSortDirection] = useState<'asc' | 'desc'>('asc');

  const buttonRef = useRef<Button>(null);
  const calRef = useRef<Eventcalendar | null>(null);
  const metricBarAnimation = useRef<boolean>(true);
  const sortColumn = useRef<'standby' | 'payload' | 'deadhead' | 'name'>('standby');
  const sortDirection = useRef<'asc' | 'desc'>('asc');
  const tempEvent = useRef<MyEvent>();
  const weekStart = useRef<Date>();
  const weekEnd = useRef<Date>();

  const myView = useMemo<MbscEventcalendarView>(() => ({ timeline: { type: 'week', resolutionHorizontal: 'day' } }), []);

  const sortColumnLabels = useMemo<{ [key: string]: string }>(
    () => ({
      standby: 'Standby Time',
      payload: 'Payload Efficiency',
      deadhead: 'Deadhead Time',
    }),
    [],
  );

  const calcMetrics = useCallback(() => {
    const loadedEvents: MyEvent[] = calRef.current ? calRef.current.getEvents() : [];

    myResources.forEach((resource) => {
      let standby = 168;
      let deadhead = 0;
      let payload = 0;
      let numberOfTours = 0;

      const resourceEvents = loadedEvents.filter((event) => event.resource === resource.id);

      resourceEvents.forEach((event) => {
        const eventStart = new Date(event.start as Date);
        const eventEnd = new Date(event.end as Date);
        const effectiveStart = eventStart < weekStart.current! ? weekStart.current : eventStart;
        const effectiveEnd = eventEnd > weekEnd.current! ? weekEnd.current : eventEnd;

        if (effectiveStart! < effectiveEnd!) {
          if (effectiveStart && effectiveEnd) {
            standby -= (effectiveEnd.getTime() - effectiveStart.getTime()) / (1000 * 60 * 60);
          }
        }

        if (effectiveStart! < effectiveEnd! && (!event.payload || event.payload <= 0)) {
          if (effectiveStart && effectiveEnd) {
            deadhead += (effectiveEnd.getTime() - effectiveStart.getTime()) / (1000 * 60 * 60);
          }
        }

        if (eventEnd > weekStart.current! && eventStart < weekEnd.current!) {
          numberOfTours++;
          payload += event.payload || 0;
        }
      });

      resource.standby = standby;
      resource.deadhead = deadhead;
      resource.payload = numberOfTours && resource.capacity ? Math.round((payload / numberOfTours / resource.capacity) * 100) : 0;
    });
  }, [myResources]);

  const sortResources = useCallback(() => {
    metricBarAnimation.current = true;
    const updatedResources = [...myResources].sort((resource1, resource2) => {
      let col = sortColumn.current;
      if (resource1[col] === resource2[col]) {
        col = 'name';
      }
      return sortDirection.current === 'asc' ? (resource1[col]! > resource2[col]! ? 1 : -1) : resource1[col]! < resource2[col]! ? 1 : -1;
    });
    setResources(updatedResources);
    setTimeout(() => {
      metricBarAnimation.current = false;
    }, 100);
  }, [myResources, sortColumn, sortDirection]);

  const delayedSort = useCallback((event: MbscCalendarEvent) => {
    tempEvent.current = event;
    setSnackbarOpen(false);
    setSortRequest((prevRequest) => prevRequest + 1);
  }, []);

  const popupButtons = useMemo<Array<MbscPopupButton | 'cancel'>>(
    () => [
      'cancel',
      {
        text: 'Apply',
        keyCode: 'enter',
        cssClass: 'mbsc-popup-button-primary',
        handler: function () {
          setPopupOpen(false);
          setToastOpen(true);
          sortColumn.current = tempSortColumn;
          sortDirection.current = tempSortDirection;
          sortResources();
        },
      },
    ],
    [sortResources, tempSortColumn, tempSortDirection],
  );

  const snackbarButton = useMemo(() => ({ text: 'Sort now' }), []);

  const handleSnackbarClose = useCallback(() => {
    setSnackbarOpen(false);
    const event = tempEvent.current;
    const resource = myResources.find((resource) => resource.id === event!.resource);
    const eventStart = new Date(event!.start as Date);
    const navStart = eventStart < weekStart.current! ? weekStart.current : eventStart;
    sortResources();
    if (calRef.current) {
      calRef.current.navigateToEvent({ start: navStart, resource: event!.resource });
    }
    if (resource) {
      resource.cssClass = 'mbsc-timeline-parent-hover';
      setTimeout(() => {
        resource.cssClass = '';
        setResources((prevResources) => prevResources.slice());
      }, 1000);
    }
  }, [myResources, sortResources]);

  const handlePopupOpen = useCallback(() => {
    setTempSortColumn(sortColumn.current);
    setTempSortDirection(sortDirection.current);
    if (buttonRef.current) {
      setPopupAnchor(buttonRef.current.nativeElement as HTMLButtonElement);
    }
    setPopupOpen(true);
  }, []);

  const handlePopupClose = useCallback(() => {
    setPopupOpen(false);
  }, []);

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  const handlePageLoading = useCallback(
    (args: MbscPageLoadingEvent) => {
      weekStart.current = args.firstDay;
      weekEnd.current = args.lastDay;
      setTimeout(() => {
        calcMetrics();
        sortResources();
      });
    },
    [calcMetrics, sortResources],
  );

  const handleEventCreated = useCallback(
    (args: MbscEventCreatedEvent) => {
      args.event.payload = Math.floor(Math.random() * (17 - 5 + 1)) + 5;
      setMyEvents((prevEvents) => [...prevEvents, args.event]);
      calcMetrics();
      delayedSort(args.event);
    },
    [calcMetrics, delayedSort],
  );

  const handleEventDeleted = useCallback(
    (args: MbscEventDeletedEvent) => {
      calcMetrics();
      delayedSort(args.event);
    },
    [calcMetrics, delayedSort],
  );

  const handleEventUpdated = useCallback(
    (args: MbscEventUpdatedEvent) => {
      const oldEventStart = new Date(args.oldEvent!.start as Date);
      const oldEventEnd = new Date(args.oldEvent!.end as Date);
      if (
        +oldEventStart !== +args.event.start! &&
        +oldEventEnd !== +args.event.end! &&
        oldEventStart >= weekStart.current! &&
        oldEventEnd <= weekEnd.current! &&
        args.event.start! >= weekStart.current! &&
        args.event.end! <= weekEnd.current! &&
        args.oldEvent!.resource === args.event.resource
      ) {
        return;
      }
      calcMetrics();
      delayedSort(args.event);
    },
    [calcMetrics, delayedSort],
  );

  const handleSortColumnChange = useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
    setTempSortColumn(ev.target.value as 'standby' | 'payload' | 'deadhead');
  }, []);

  const handleSortDirectionChange = useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
    setTempSortDirection(ev.target.value as 'asc' | 'desc');
  }, []);

  const myCustomHeader = useCallback(
    () => (
      <>
        <CalendarPrev />
        <CalendarNext />
        <CalendarNav />
        <div className="mbsc-flex mbsc-flex-1-1 mbsc-justify-content-end">
          <Button ref={buttonRef} startIcon="bars" variant="flat" onClick={handlePopupOpen}>
            Sort Trucks
          </Button>
        </div>
      </>
    ),
    [handlePopupOpen],
  );

  const myCustomResourceHeader = useCallback(() => <div className="mds-popup-sort-resource-header">Trucks</div>, []);

  const myCustomResource = useCallback(
    (resource: MyResource) => {
      const metricValue = resource[sortColumn.current];
      const barValue = sortColumn.current === 'payload' ? metricValue : ((metricValue as number) / 168) * 100;
      const barColor = (barValue as number) <= 33 ? 'green' : (barValue as number) <= 66 ? 'yellow' : 'red';

      return (
        <div className="mds-popup-sort-resource-cell">
          <strong>{resource.name}</strong>
          <div className="mds-popup-sort-resource-attr">Model: {resource.model}</div>
          <div className="mds-popup-sort-resource-attr">Capacity: {resource.capacity}T</div>
          <div className="mds-popup-sort-resource-attr">
            {sortColumnLabels[sortColumn.current]}: {metricValue}
            {sortColumn.current === 'payload' ? '%' : 'h'}
          </div>
          <div className="mds-popup-sort-bar-track">
            <div
              className={`mds-popup-sort-bar mds-popup-sort-bar-${barColor}${
                metricBarAnimation.current ? ' mds-popup-sort-bar-animation' : ''
              }`}
              style={{ width: `${barValue}%` }}
            ></div>
          </div>
        </div>
      );
    },
    [metricBarAnimation, sortColumnLabels],
  );

  const myScheduleEvent = useCallback(
    (event: MbscCalendarEventData) => (
      <>
        <div>{event.title}</div>
        <div className="mds-popup-sort-event-attr">Payload: {event.original!.payload ? `${event.original!.payload} T` : 'empty'}</div>
      </>
    ),
    [],
  );

  useEffect(() => {
    if (sortRequest > 0) {
      setSnackbarKey((prevKey) => prevKey + 1);
    }
  }, [sortRequest]);

  useEffect(() => {
    if (snackbarKey > 0) {
      setSnackbarOpen(true);
    }
  }, [snackbarKey]);

  return (
    <>
      <Eventcalendar
        ref={calRef}
        cssClass="mds-popup-sort"
        clickToCreate={true}
        data={myEvents}
        dragToCreate={true}
        dragToMove={true}
        dragToResize={true}
        eventOverlap={false}
        resources={sortedResources}
        view={myView}
        renderHeader={myCustomHeader}
        renderResourceHeader={myCustomResourceHeader}
        renderResource={myCustomResource}
        renderScheduleEventContent={myScheduleEvent}
        onPageLoading={handlePageLoading}
        onEventCreated={handleEventCreated}
        onEventDeleted={handleEventDeleted}
        onEventUpdated={handleEventUpdated}
      />
      <Popup
        anchor={popupAnchor}
        buttons={popupButtons}
        contentPadding={false}
        display="anchored"
        focusOnClose={false}
        focusOnOpen={false}
        isOpen={isPopupOpen}
        showOverlay={false}
        width={400}
        onClose={handlePopupClose}
      >
        <div className="mbsc-form-group">
          <div className="mbsc-form-group-title">Metric to calculate and sort by</div>
          <RadioGroup value={tempSortColumn} onChange={handleSortColumnChange}>
            <Radio value="standby" label="Standby Time" description="Time the truck is driven without cargo." />
            <Radio value="payload" label="Payload Efficiency" description="Truck capacity divided by the average cargo on tours." />
            <Radio value="deadhead" label="Deadhead Time" description="Time when the truck is not on a tour." />
          </RadioGroup>
        </div>
        <div className="mbsc-form-group">
          <div className="mbsc-form-group-title">Sort direction</div>
          <SegmentedGroup value={tempSortDirection} onChange={handleSortDirectionChange}>
            <Segmented value="asc">Ascending</Segmented>
            <Segmented value="desc">Descending</Segmented>
          </SegmentedGroup>
        </div>
      </Popup>
      <Snackbar
        key={snackbarKey}
        animation="pop"
        button={snackbarButton}
        cssClass="mds-popup-sort-snackbar"
        display="center"
        duration={3000}
        isOpen={isSnackbarOpen}
        onClose={handleSnackbarClose}
      />
      <Toast message="Resources sorted" isOpen={isToastOpen} onClose={handleToastClose} />
    </>
  );
}

export default App;
