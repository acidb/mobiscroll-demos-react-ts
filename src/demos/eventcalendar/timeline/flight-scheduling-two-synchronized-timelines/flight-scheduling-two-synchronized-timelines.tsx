import {
  Eventcalendar,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventCreatedEvent,
  MbscEventDeletedEvent,
  MbscEventDragEvent,
  MbscPageLoadingEvent,
  MbscResource,
  MbscSelectedDateChangeEvent,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useMemo, useRef, useState } from 'react';
import './flight-scheduling-two-synchronized-timelines.css';

setOptions({
  // localeJs,
  // themeJs
});

const bookings: MbscCalendarEvent[] = [
  {
    start: 'dyndatetime(y,m,d,6)',
    end: 'dyndatetime(y,m,d,10)',
    title: 'Budapest - Ljubljana',
    resource: 1,
  },
  {
    start: 'dyndatetime(y,m,d,15)',
    end: 'dyndatetime(y,m,d,18)',
    title: 'Ljubljana - Berlin',
    resource: 1,
  },
  {
    start: 'dyndatetime(y,m,d,4)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Los Angeles - Dublin',
    resource: 2,
  },
  {
    start: 'dyndatetime(y,m,d,18)',
    end: 'dyndatetime(y,m,d,23)',
    title: 'Dublin - Bucharest',
    resource: 2,
  },
  {
    start: 'dyndatetime(y,m,d,6)',
    end: 'dyndatetime(y,m,d,14)',
    title: 'Chicago - Amsterdam',
    resource: 3,
  },
  {
    start: 'dyndatetime(y,m,d,17)',
    end: 'dyndatetime(y,m,d,22)',
    title: 'Amsterdam - Cairo',
    resource: 3,
  },
  {
    start: 'dyndatetime(y,m,d,10)',
    end: 'dyndatetime(y,m,d,14)',
    title: 'Hong Kong - Sydney',
    resource: 4,
  },
  {
    start: 'dyndatetime(y,m,d,15)',
    end: 'dyndatetime(y,m,d,21)',
    title: 'Sydney - Tokyo',
    resource: 4,
  },
  {
    start: 'dyndatetime(y,m,d,4)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Paris - Washington, D.C.',
    resource: 5,
  },
  {
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,18)',
    title: 'Washington, D.C. - Los-Angeles',
    resource: 5,
  },
  {
    start: 'dyndatetime(y,m,d,3)',
    end: 'dyndatetime(y,m,d,11)',
    title: 'Los Angeles - Dublin',
    resource: 6,
  },
  {
    start: 'dyndatetime(y,m,d,13)',
    end: 'dyndatetime(y,m,d,18)',
    title: 'Dublin - Rome',
    resource: 6,
  },
  {
    start: 'dyndatetime(y,m,d,5)',
    end: 'dyndatetime(y,m,d,12)',
    title: 'Barcelona - Dubai',
    resource: 7,
  },
  {
    start: 'dyndatetime(y,m,d,13)',
    end: 'dyndatetime(y,m,d,20)',
    title: 'Dubai - Tokyo',
    resource: 7,
  },
  {
    start: 'dyndatetime(y,m,d,3,30)',
    end: 'dyndatetime(y,m,d,13)',
    title: 'Rome - Toronto',
    resource: 8,
  },
  {
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,19)',
    title: 'Toronto - New-York',
    resource: 8,
  },
  {
    start: 'dyndatetime(y,m,d,3)',
    end: 'dyndatetime(y,m,d,14)',
    title: 'Vienna - Shanghai',
    resource: 9,
  },
  {
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,23,30)',
    title: 'Shanghai - Moscow',
    resource: 9,
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,13)',
    title: 'London - Cairo',
    resource: 10,
  },
  {
    start: 'dyndatetime(y,m,d,15,30)',
    end: 'dyndatetime(y,m,d,19,30)',
    title: 'Cairo - Sofia',
    resource: 10,
  },
  {
    start: 'dyndatetime(y,m,d,2)',
    end: 'dyndatetime(y,m,d,13)',
    title: 'Istanbul - New York',
    resource: 11,
  },
  {
    start: 'dyndatetime(y,m,d,16)',
    end: 'dyndatetime(y,m,d,20)',
    title: 'New York - Montreal',
    resource: 11,
  },
  {
    start: 'dyndatetime(y,m,d,5)',
    end: 'dyndatetime(y,m,d,11)',
    title: 'Seattle - Miami',
    resource: 12,
  },
  {
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d,21)',
    title: 'Miami - Buenos-Aires',
    resource: 12,
  },
  {
    start: 'dyndatetime(y,m,d+1,4)',
    end: 'dyndatetime(y,m,d+1,16)',
    title: 'Hong Kong - Sydney',
    resource: 1,
  },
  {
    start: 'dyndatetime(y,m,d+1,6)',
    end: 'dyndatetime(y,m,d+1,10)',
    title: 'Los Angeles - Dublin',
    resource: 2,
  },
  {
    start: 'dyndatetime(y,m,d+1,3)',
    end: 'dyndatetime(y,m,d+1,11)',
    title: 'Budapest - Ljubljana',
    resource: 4,
  },
  {
    start: 'dyndatetime(y,m,d+1,5)',
    end: 'dyndatetime(y,m,d+1,12)',
    title: 'Los Angeles - Dublin',
    resource: 6,
  },
  {
    start: 'dyndatetime(y,m,d+1,13)',
    end: 'dyndatetime(y,m,d+1,23)',
    title: 'London - Cairo',
    resource: 7,
  },
  {
    start: 'dyndatetime(y,m,d+1,3)',
    end: 'dyndatetime(y,m,d+1,14)',
    title: 'Miami - Buenos-Aires',
    resource: 9,
  },
  {
    start: 'dyndatetime(y,m,d+1,6)',
    end: 'dyndatetime(y,m,d+1,12)',
    title: 'Barcelona - Dubai',
    resource: 10,
  },
  {
    start: 'dyndatetime(y,m,d+1,8)',
    end: 'dyndatetime(y,m,d+1,22)',
    title: 'Istanbul - New York',
    resource: 11,
  },
  {
    start: 'dyndatetime(y,m,d+1,5)',
    end: 'dyndatetime(y,m,d+1,11)',
    title: 'Vienna - Shanghai',
    resource: 12,
  },
];

const jets: MbscResource[] = [
  {
    id: 'Op 1',
    name: 'Prestige Air',
    eventCreation: false,
    children: [
      {
        id: 1,
        code: '#AF 7703',
        crew: 52,
        name: 'Red Bolt',
        color: '#1dab2f',
        img: 'https://img.mobiscroll.com/demos/jet-1.jpg',
      },
      {
        id: 2,
        code: '#BQ 4718',
        crew: 47,
        name: 'Skyroar',
        color: '#1dab2f',
        img: 'https://img.mobiscroll.com/demos/jet-2.jpg',
      },
      {
        id: 3,
        code: '#ZM 8430',
        crew: 24,
        name: 'Agile Raven',
        color: '#1dab2f',
        img: 'https://img.mobiscroll.com/demos/jet-3.jpg',
      },
    ],
  },
  {
    id: 'Op 2',
    name: 'Elite Wings',
    eventCreation: false,
    children: [
      {
        id: 4,
        code: '#XG 5500',
        crew: 43,
        name: 'Monsterbolt',
        color: '#1dab2f',
        img: 'https://img.mobiscroll.com/demos/jet-4.jpg',
      },
      {
        id: 5,
        code: '#FL 2531',
        crew: 22,
        name: 'Airrise',
        color: '#1dab2f',
        img: 'https://img.mobiscroll.com/demos/jet-5.jpg',
      },
      {
        id: 6,
        code: '#PA 6487',
        crew: 84,
        name: 'Starblast',
        color: '#1dab2f',
        img: 'https://img.mobiscroll.com/demos/jet-6.jpg',
      },
      {
        id: 7,
        code: '#PP 9812',
        crew: 28,
        name: 'Ebonfire',
        color: '#1dab2f',
        img: 'https://img.mobiscroll.com/demos/jet-7.jpg',
      },
    ],
  },
  {
    id: 'Op 3',
    name: 'Luxury Skies',
    eventCreation: false,
    children: [
      {
        id: 8,
        code: '#DN 3191',
        crew: 36,
        name: 'Dark Bee',
        color: '#1dab2f',
        img: 'https://img.mobiscroll.com/demos/jet-8.jpg',
      },
      {
        id: 9,
        code: '#ZW 2328',
        crew: 76,
        name: 'Keen Sparrow',
        color: '#1dab2f',
        img: 'https://img.mobiscroll.com/demos/jet-9.jpg',
      },
      {
        id: 10,
        code: '#RX 9898',
        crew: 37,
        name: 'Jagged Bolt',
        color: '#1dab2f',
        img: 'https://img.mobiscroll.com/demos/jet-10.jpg',
      },
    ],
  },
];

const App: FC = () => {
  const reservations = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: 'Alison Reyes',
      },
      {
        id: 2,
        name: 'Shauna Perry',
      },
      {
        id: 3,
        name: 'Jan Whitney',
      },
      {
        id: 4,
        name: 'Freddie Durham',
      },
      {
        id: 5,
        name: 'William Dillon',
      },
      {
        id: 6,
        name: 'Tyrell Edwards',
      },
      {
        id: 7,
        name: 'Caitlyn Riddle',
      },
      {
        id: 8,
        name: 'Liam Mays',
      },
      {
        id: 9,
        name: 'Frank Medina',
      },
      {
        id: 10,
        name: 'Calvin Larsen',
      },
      {
        id: 11,
        name: 'Heather Walsh',
      },
      {
        id: 12,
        name: 'Conner Paul',
      },
    ],
    [],
  );

  const [flights, setFlights] = useState<MbscCalendarEvent[]>([
    {
      start: 'dyndatetime(y,m,d,10)',
      end: 'dyndatetime(y,m,d,17)',
      title: 'Barcelona - Dubai',
      resource: 4,
    },
    {
      start: 'dyndatetime(y,m,d,7,30)',
      end: 'dyndatetime(y,m,d,16)',
      title: 'Toronto - Rome',
      resource: 8,
    },
    {
      start: 'dyndatetime(y,m,d,4)',
      end: 'dyndatetime(y,m,d,8)',
      title: 'Ljubljana - Budapest',
      resource: 1,
    },
    {
      start: 'dyndatetime(y,m,d,2)',
      end: 'dyndatetime(y,m,d,10)',
      title: 'Paris - Washington, D.C.',
      resource: 2,
    },
    {
      start: 'dyndatetime(y,m,d,12)',
      end: 'dyndatetime(y,m,d,23)',
      title: 'New York - Istanbul',
      resource: 7,
    },
    {
      start: 'dyndatetime(y,m,d,15)',
      end: 'dyndatetime(y,m,d,23)',
      title: 'Moscow - Tokyo',
      resource: 3,
    },
  ]);

  const [invalid, setInvalid] = useState<MbscCalendarEvent[]>();
  const firstCalCont = useRef<HTMLElement | null>(null);
  const secondCalCont = useRef<HTMLElement | null>(null);
  const skipScroll1 = useRef<boolean>(false);
  const skipScroll2 = useRef<boolean>(false);
  const [mySelectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastText, setToastText] = useState<string>('');

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: 'day',
        size: 1,
      },
    }),
    [],
  );

  const renderMyResource = (resource: MbscResource) => {
    if (!resource.children) {
      return (
        <div className="mbsc-flex mbsc-align-items-center mbsc-justify-content-start">
          <img className="md-drag-drop-bw-inst-avatar" src={resource.img} alt="Avatar" />
          <div className="md-drag-drop-bw-inst-details mbsc-flex-col mbsc-flex-1-0">
            <div>{resource.name}</div>
            <div className="md-aircraft-code mbsc-flex mbsc-justify-content-between">
              <div>{resource.code}</div>
              <div>
                {'\u{1F9D1}\u{1F3FC}\u{200D}\u{2708}\u{FE0F}'} {resource.crew}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div>{resource.name}</div>;
  };

  const handleScroll1 = useCallback((ev: Event) => {
    if (secondCalCont.current && !skipScroll2.current) {
      skipScroll1.current = true;
      secondCalCont.current.scrollLeft = (ev.target as HTMLDivElement).scrollLeft;
    }
    skipScroll1.current = false;
  }, []);

  const handleScroll2 = useCallback((ev: Event) => {
    if (firstCalCont.current && !skipScroll1.current) {
      skipScroll2.current = true;
      firstCalCont.current.scrollLeft = (ev.target as HTMLDivElement).scrollLeft;
    }
    skipScroll2.current = false;
  }, []);

  const handleFirstScroll = useCallback(() => {
    if (!firstCalCont.current) {
      firstCalCont.current = document.querySelector('.md-drag-drop-bw-inst-first .mbsc-timeline-grid-scroll');
      firstCalCont.current!.addEventListener('scroll', handleScroll1);
    }
  }, [handleScroll1]);

  const handleSecondScroll = useCallback(() => {
    if (!secondCalCont.current) {
      secondCalCont.current = document.querySelector('.md-drag-drop-bw-inst-second .mbsc-timeline-grid-scroll');
      secondCalCont.current!.addEventListener('scroll', handleScroll2);
    }
  }, [handleScroll2]);

  const detachFirstScroll = useCallback(() => {
    if (firstCalCont.current) {
      firstCalCont.current.removeEventListener('scroll', handleScroll1);
    }
  }, [handleScroll1]);

  const detachSecondScroll = useCallback(() => {
    if (secondCalCont.current) {
      secondCalCont.current.removeEventListener('scroll', handleScroll2);
    }
  }, [handleScroll2]);

  const handlePageLoading = useCallback((args: MbscPageLoadingEvent) => {
    if (secondCalCont.current) {
      setTimeout(() => {
        setSelectedDate(args.firstDay);
      }, 100);
    }
  }, []);

  const handleSelectedDateChange = useCallback((args: MbscSelectedDateChangeEvent) => {
    setSelectedDate(new Date(args.date as string));
  }, []);

  const handleEventCreated = useCallback((args: MbscEventCreatedEvent) => {
    setFlights((current) => [...current, args.event]);
    setToastText('Flight scheduled');
    setToastOpen(true);
  }, []);

  const handleEventDeleted = useCallback((args: MbscEventDeletedEvent) => {
    setFlights((current) => [...current.filter((flight) => flight.id !== args.event.id)]);
  }, []);

  const handleEventCreateUpdateFailed = useCallback(() => {
    setToastText("There's already a flight on this date");
    setToastOpen(true);
  }, []);

  const handleEventDragStart = useCallback(
    (args: MbscEventDragEvent) => {
      const unavailable: { [key: string]: boolean } = {};
      const invalid: MbscCalendarEvent = {
        cssClass: 'md-drag-drop-invalid',
        recurring: { repeat: 'daily' },
        resource: [],
      };
      // Filter unavailable jets
      flights.forEach((flight) => {
        if (
          flight.id !== args.event.id &&
          new Date(flight.start as string) < new Date(args.event.end as string) &&
          new Date(flight.end as string) > new Date(args.event.start as string)
        ) {
          unavailable[flight.resource as string] = true;
        }
      });
      flights.forEach((flight) => {
        if (unavailable[flight.resource as string]) {
          flight.cssClass = 'md-drag-drop-faded';
        }
      });
      jets.forEach((group) => {
        group.children!.forEach((jet) => {
          if (unavailable[jet.id]) {
            (invalid.resource as Array<number | string>).push(jet.id);
          }
        });
      });
      setInvalid([invalid]);
    },
    [flights],
  );

  const handleEventDragEnd = useCallback(() => {
    flights.forEach((flight) => {
      delete flight.cssClass;
    });
    setInvalid([]);
  }, [flights]);

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  return (
    <div className="mbsc-flex-col md-drag-drop-bw-inst-cont">
      <Eventcalendar
        className="md-drag-drop-bw-inst-first"
        data={bookings}
        resources={reservations}
        view={myView}
        dragToMove={false}
        dragToCreate={false}
        dragToResize={false}
        eventDelete={true}
        externalDrag={true}
        onPageLoading={handlePageLoading}
        onPageLoaded={handleFirstScroll}
        onDestroy={detachFirstScroll}
      />
      <Eventcalendar
        className="md-drag-drop-bw-inst-second"
        invalid={invalid}
        data={flights}
        resources={jets}
        view={myView}
        showControls={false}
        dragToCreate={false}
        dragToMove={true}
        dragToResize={false}
        dragInTime={false}
        externalDrop={true}
        eventDelete={true}
        eventOverlap={false}
        renderResource={renderMyResource}
        selectedDate={mySelectedDate}
        onSelectedDateChange={handleSelectedDateChange}
        onEventCreated={handleEventCreated}
        onEventCreateFailed={handleEventCreateUpdateFailed}
        onEventDeleted={handleEventDeleted}
        onEventUpdateFailed={handleEventCreateUpdateFailed}
        onEventDragStart={handleEventDragStart}
        onEventDragEnd={handleEventDragEnd}
        onPageLoaded={handleSecondScroll}
        onDestroy={detachSecondScroll}
      />
      <Toast display="center" message={toastText} isOpen={isToastOpen} onClose={handleCloseToast} />
    </div>
  );
};
export default App;
