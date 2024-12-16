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
  MbscEventDeleteEvent,
  MbscEventUpdateEvent,
  MbscPageLoadingEvent,
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
import { useCallback, useMemo, useRef, useState } from 'react';
import './dynamic-calculation-resource-sort.css';

setOptions({
  // localeJs,
  // themeJs
});

interface MyResource extends MbscResource {
  standby?: number;
  deadhead?: number;
  payload?: number;
  model: string;
  location: string;
}

function App() {
  const myEvents: MbscCalendarEvent[] = [
    {
      start: 'dyndatetime(y,m,d-1)',
      end: 'dyndatetime(y,m,d+3)',
      title: 'Tour #013 - Miami to Seattle',
      resource: 1,
      color: '#FF9933',
      payload: 25,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d+1)',
      end: 'dyndatetime(y,m,d+3)',
      title: 'Tour #014 - Denver to Boston',
      resource: 2,
      color: '#33FFA6',
      payload: 18,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d)',
      end: 'dyndatetime(y,m,d+3)',
      title: 'Tour #015 - Orlando to Austin',
      resource: 3,
      color: '#9933FF',
      payload: 20,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d+1)',
      end: 'dyndatetime(y,m,d+4)',
      title: 'Tour #016 - Detroit to Baltimore',
      resource: 4,
      color: '#33A6FF',
      payload: 0,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d+2)',
      end: 'dyndatetime(y,m,d+5)',
      title: 'Tour #017 - Las Vegas to Portland',
      resource: 5,
      color: '#FF5733',
      payload: 20,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d+2)',
      end: 'dyndatetime(y,m,d+5)',
      title: 'Tour #018 - Atlanta to Kansas City',
      resource: 6,
      color: '#33FF99',
      payload: 0,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d-4,11)',
      end: 'dyndatetime(y,m,d)',
      title: 'Tour #018 - Dallas to Atlanta',
      resource: 6,
      color: '#33FF99',
      payload: 14,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d)',
      end: 'dyndatetime(y,m,d+4)',
      title: 'Tour #019 - Charlotte to Indianapolis',
      resource: 7,
      color: '#FF5733',
      payload: 22,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d)',
      end: 'dyndatetime(y,m,d+2)',
      title: 'Tour #005 - Dallas to San Francisco',
      resource: 7,
      color: '#FF5733',
      payload: 18,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d+4)',
      end: 'dyndatetime(y,m,d+6)',
      title: 'Tour #001 - New York to Los Angeles',
      resource: 7,
      color: '#FF5733',
      payload: 20,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d)',
      end: 'dyndatetime(y,m,d+2)',
      title: 'Tour #009 - San Diego to Dallas',
      resource: 7,
      color: '#FF5733',
      payload: 16,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d+4)',
      end: 'dyndatetime(y,m,d+6)',
      title: 'Tour #006 - Los Angeles to Chicago',
      resource: 8,
      color: '#FF33A6',
      payload: 10,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d-2)',
      end: 'dyndatetime(y,m,d+2)',
      title: 'Tour #010 - San Francisco to Los Angeles',
      resource: 8,
      color: '#FF33A6',
      payload: 0,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d+3)',
      end: 'dyndatetime(y,m,d+6)',
      title: 'Tour #007 - Houston to New York',
      resource: 9,
      color: '#33FF57',
      payload: 0,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d)',
      end: 'dyndatetime(y,m,d+2)',
      title: 'Tour #003 - Philadelphia to Phoenix',
      resource: 9,
      color: '#33FF57',
      payload: 0,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d-4)',
      end: 'dyndatetime(y,m,d-1)',
      title: 'Tour #028 - ? to Philadelphiax',
      resource: 9,
      color: '#33FF57',
      payload: 11,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d-4)',
      end: 'dyndatetime(y,m,d+1)',
      title: 'Tour #004 - San Antonio to San Diego',
      resource: 10,
      color: '#3357FF',
      payload: 15,
      overlap: false,
    },

    {
      start: 'dyndatetime(y,m,d+3)',
      end: 'dyndatetime(y,m,d+6)',
      title: 'Tour #022 - Cleveland to Cincinnati',
      resource: 10,
      color: '#3357FF',
      payload: 17,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d-4)',
      end: 'dyndatetime(y,m,d+1)',
      title: 'Tour #023 - Boston to Philadelphia',
      resource: 11,
      color: '#FF9933',
      payload: 19,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d)',
      end: 'dyndatetime(y,m,d+2)',
      title: 'Tour #024 - Las Vegas to San Diego',
      resource: 12,
      color: '#33FF57',
      payload: 28,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d-3)',
      end: 'dyndatetime(y,m,d)',
      title: 'Tour #025 - Miami to Charlotte',
      resource: 13,
      color: '#9933FF',
      payload: 26,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d+2)',
      end: 'dyndatetime(y,m,d+5)',
      title: 'Tour #026 - Seattle to Portland',
      resource: 14,
      color: '#33A6FF',
      payload: 12,
      overlap: false,
    },
    {
      start: 'dyndatetime(y,m,d-1)',
      end: 'dyndatetime(y,m,d+2)',
      title: 'Tour #027 - Atlanta to Orlando',
      resource: 15,
      color: '#FF5733',
      payload: 17,
      overlap: false,
    },
  ];

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

  const calRef = useRef<Eventcalendar | null>(null);
  const [myAnchor, setAnchor] = useState<HTMLElement>();
  const buttonRef = useRef<Button | null>();
  const event = useRef<MbscCalendarEvent>();
  const initialSort = useRef<boolean>(true);
  const initialSortColumn = useRef<string>('');
  const initialSortDirection = useRef<string>('');
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
  const [isSnackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const loadedEvents = useRef<MbscCalendarEvent[]>([]);
  const metricBarAnimation = useRef<boolean>(true);
  const resource = useRef<MyResource>();
  const selectedMetric: string = 'standby';
  const selectedMetricDesc: string = 'Standby Time';
  const [sortColumn, setSortColumn] = useState<string>('standby');
  const [sortDirection, setSortDirection] = useState<string>('asc');
  const [sortedResources, setResources] = useState<MyResource[]>(myResources);
  const weekStart = useRef<Date>();
  const weekEnd = useRef<Date>();

  const myView = useMemo<MbscEventcalendarView>(() => ({ timeline: { type: 'week', resolutionHorizontal: 'day' } }), []);

  const refreshData = useCallback(() => {
    loadedEvents.current = calRef.current ? calRef.current.getEvents() : [];

    myResources.forEach((resource) => {
      const resourceEvents = loadedEvents.current.filter((event) => event.resource === resource.id);

      if (selectedMetric === 'standby') {
        resource.standby = 168;
        resourceEvents.forEach((event) => {
          const eventStart = new Date(event.start as Date);
          const eventEnd = new Date(event.end as Date);
          const effectiveStart = weekStart.current && eventStart < weekStart.current ? weekStart.current : eventStart;
          const effectiveEnd = weekEnd.current && eventEnd > weekEnd.current ? weekEnd.current : eventEnd;

          if (effectiveStart < effectiveEnd) {
            resource.standby -= (effectiveEnd.getTime() - effectiveStart.getTime()) / (1000 * 60 * 60);
          }
        });
      } else if (selectedMetric === 'deadhead') {
        resource.deadhead = resourceEvents.reduce((total, event) => {
          const eventStart = new Date(event.start as Date);
          const eventEnd = new Date(event.end as Date);
          const effectiveStart = weekStart.current && eventStart < weekStart.current ? weekStart.current : eventStart;
          const effectiveEnd = weekEnd.current && eventEnd > weekEnd.current ? weekEnd.current : eventEnd;

          if (effectiveStart < effectiveEnd && (!event.payload || event.payload <= 0)) {
            return total + (effectiveEnd.getTime() - effectiveStart.getTime()) / (1000 * 60 * 60);
          }
          return total;
        }, 0);
      } else if (selectedMetric === 'payload') {
        const weekEvents = resourceEvents.filter(
          (event) => new Date(event.end as Date) > weekStart.current! && new Date(event.start as Date) < weekEnd.current!,
        );

        const totalPayload = weekEvents.reduce((total, event) => total + (event.payload || 0), 0);
        const numberOfTours = weekEvents.length;

        resource.payload =
          numberOfTours > 0 && resource.capacity ? Math.round((totalPayload / numberOfTours / resource.capacity) * 100) : 0;
      }
    });
  }, [myResources, selectedMetric, calRef, weekStart, weekEnd]);

  const sortResources = useCallback(() => {
    initialSort.current = false;
    metricBarAnimation.current = false;
    const updatedResources = [...myResources].sort((a, b) => {
      if (sortDirection === 'asc') {
        return a[sortColumn] > b[sortColumn] ? 1 : -1;
      } else {
        return a[sortColumn] < b[sortColumn] ? 1 : -1;
      }
    });

    setResources(updatedResources);

    setTimeout(() => {
      metricBarAnimation.current = false;
    }, 100);
  }, [myResources, sortColumn, sortDirection]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const delayedToastSort = useCallback((resourceId: any, event: MbscCalendarEvent) => {
    resource.current = myResources.find((resource) => resource.id === resourceId);
    event.current = event;
    setSnackbarOpen(true);
    // Add progress animation after rendering the snackbar
    setTimeout(() => {
      document.querySelector('.mbsc-toast-background')?.classList.add('start-progress');
    });
  });

  const handlePopupOpen = useCallback(() => {
    setAnchor(buttonRef.current!.nativeElement);
    setPopupOpen(true);
  }, []);

  const handlePopupClose = useCallback(() => {
    setPopupOpen(false);
  }, []);

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  const handleSnackbarClose = useCallback(() => {
    setSnackbarOpen(false);
    resource.current!.cssClass = 'mds-resource-highlight';
    sortResources();
    setTimeout(() => {
      resource.current!.cssClass = '';
      setResources(myResources.slice());
    }, 1000);
    calRef.current!.navigateToEvent(event);
  }, [myResources, sortResources]);

  const handlePageLoading = useCallback(
    (args: MbscPageLoadingEvent) => {
      weekStart.current = args.firstDay;
      weekEnd.current = args.lastDay;
      refreshData();
    },
    [refreshData],
  );

  const handlePageLoaded = useCallback(() => {
    refreshData();
    // setTimeout(() => {
    //   if (initialSort) {
    //     sortResources();
    //   }
    // }, 100);
  }, [refreshData]);

  const handleEventCreated = useCallback(
    (args: MbscEventCreatedEvent) => {
      args.event.payload = Math.floor(Math.random() * (17 - 5 + 1)) + 5;
      args.event.overlap = false;
      refreshData();
      // snackbar trigger rerender, event dissapear
      delayedToastSort(args.event.resource, args.event);
    },
    [delayedToastSort, refreshData],
  );

  const handleEventDelete = useCallback(
    (args: MbscEventDeleteEvent) => {
      refreshData();
      delayedToastSort(args.event.resource, args.event);
    },
    [delayedToastSort, refreshData],
  );

  const handleEventUpdate = useCallback(
    (args: MbscEventUpdateEvent) => {
      if (args.oldEvent) {
        if (
          new Date(args.oldEvent.start as string).getTime() !== new Date(args.event.start as string).getTime() &&
          new Date(args.oldEvent.end as string).getTime() !== new Date(args.event.end as string).getTime()
        ) {
          return;
        }
      }
      refreshData();
      delayedToastSort(args.event.resource, args.event);
    },
    [delayedToastSort, refreshData],
  );

  const handleSortDirectionChange = useCallback((ev) => {
    setSortDirection(ev.target.value);
  }, []);

  const handleSortColumnChange = useCallback((ev) => {
    setSortColumn(ev.target.value);
  }, []);

  const myCustomHeader = useCallback(
    () => (
      <>
        <CalendarPrev />
        <CalendarNext />
        <CalendarNav />
        <Button ref={buttonRef} style={{ marginLeft: 'auto' }} startIcon="bars" variant="flat" onClick={handlePopupOpen}>
          Sort Trucks
        </Button>
      </>
    ),
    [handlePopupOpen],
  );

  const myCustomResourceHeader = useCallback(
    () => (
      <>
        <div className="mds-popup-sort-resource-cell mds-popup-sort-resource-cell-name">Trucks</div>
        <div className="mds-popup-sort-resource-cell mds-popup-sort-resource-cell-custom">{selectedMetricDesc}</div>
      </>
    ),
    [selectedMetricDesc],
  );

  const myCustomResource = useCallback(
    (resource: MyResource) => {
      const metricValue = resource[selectedMetric];

      const barValue =
        selectedMetric === 'payload' ? metricValue : ['standby', 'deadhead'].includes(selectedMetric) ? (metricValue / 168) * 100 : 100;

      const animationClass = metricBarAnimation.current ? 'mds-metric-bar-animation' : 'mds-metric-bar-no-animation';

      const barColorClass =
        barValue <= 33
          ? `mds-resource-green-bar ${animationClass}`
          : barValue <= 66
            ? `mds-resource-yellow-bar ${animationClass}`
            : `mds-resource-red-bar ${animationClass}`;

      return (
        <div className="mds-popup-sort-resource-cell mds-popup-sort-resource-cell-name">
          <strong>{resource.name}</strong>
          <div className="mds-resource-attribute">Model: {resource.model || 'N/A'}</div>
          <div className="mds-resource-attribute">Capacity: {resource.capacity}T</div>
          <div className="mds-resource-attribute">
            {selectedMetricDesc}: {metricValue}
            {selectedMetric === 'payload' ? '%' : ['standby', 'deadhead'].includes(selectedMetric) ? 'h' : ''}
          </div>
          <div className="mds-metric-bar-container" style={{ marginTop: '5px' }}>
            <div className={`${barColorClass}`} style={{ width: `${barValue}%` }}></div>
            <div className="mds-metric-bar-overlay" style={{ width: `${100 - barValue}%` }}></div>
          </div>
        </div>
      );
    },
    [selectedMetric, selectedMetricDesc, metricBarAnimation],
  );

  const myScheduleEvent = useCallback(
    (event: MbscCalendarEventData) => (
      <div>
        <div>{event.title}</div>
        <div style={{ fontSize: '11px' }}>Payload: {event.original!.payload ? `${event.original!.payload} T` : 'empty'}</div>
      </div>
    ),
    [],
  );

  return (
    <>
      <Eventcalendar
        ref={calRef}
        cssClass="mds-timeline-popup-sort"
        clickToCreate={true}
        data={myEvents}
        dragToCreate={true}
        dragToMove={true}
        dragToResize={true}
        resources={sortedResources}
        renderResourceHeader={myCustomResourceHeader}
        renderResource={myCustomResource}
        renderHeader={myCustomHeader}
        renderScheduleEventContent={myScheduleEvent}
        onPageLoading={handlePageLoading}
        onPageLoaded={handlePageLoaded}
        onEventCreated={handleEventCreated}
        onEventDelete={handleEventDelete}
        onEventUpdate={handleEventUpdate}
        view={myView}
      />
      <Popup
        contentPadding={false}
        display="anchored"
        anchor={myAnchor}
        width={400}
        buttons={[
          'cancel',
          {
            text: 'Apply',
            keyCode: 'enter',
            handler: function () {
              if (initialSortColumn.current != sortColumn) {
                refreshData();
              }
              sortResources();
              initialSortColumn.current = sortColumn;
              initialSortDirection.current = sortDirection;
              setPopupOpen(false);
              setToastOpen(true);
            },
            cssClass: 'mbsc-popup-button-primary',
          },
        ]}
        focusOnClose={false}
        focusOnOpen={false}
        showOverlay={false}
        isOpen={isPopupOpen}
        onClose={handlePopupClose}
      >
        <div className="mbsc-form-group">
          <div className="mbsc-form-group-title">Metric to calculate and sort by</div>
          <RadioGroup onChange={handleSortColumnChange}>
            <Radio
              value="standby"
              label="Standby Time"
              description="Time the truck is driven without cargo."
              checked={sortColumn === 'standby'}
            />
            <Radio
              value="payload"
              label="Payload Efficiency"
              description="Truck capacity divided by the average cargo on tours."
              checked={sortColumn === 'payload'}
            />
            <Radio
              value="deadhead"
              label="Deadhead Time"
              description="Time when the truck is not on a tour."
              checked={sortColumn === 'deadhead'}
            />
          </RadioGroup>
        </div>
        <div className="mbsc-form-group">
          <div className="mbsc-form-group-title">Sort direction</div>
          <SegmentedGroup onChange={handleSortDirectionChange}>
            <Segmented value="asc" checked={sortDirection === 'asc'}>
              Ascending
            </Segmented>
            <Segmented value="desc" checked={sortDirection === 'desc'}>
              Descending
            </Segmented>
          </SegmentedGroup>
        </div>
      </Popup>
      <Snackbar
        animation={'pop'}
        button={{
          text: 'Sort now',
          action: function () {
            sortResources();
          },
        }}
        cssClass="mds-popup-sort-snackbar"
        display={'bottom'}
        duration={3000}
        isOpen={isSnackbarOpen}
        onClose={handleSnackbarClose}
      />
      <Toast message={'Resouces sorted'} isOpen={isToastOpen} onClose={handleToastClose} />
    </>
  );
}

export default App;
