import {
  Eventcalendar,
  MbscCalendarEvent,
  MbscCalendarEventData,
  MbscEventcalendarView,
  MbscNewEventData,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { useCallback, useMemo, useState } from 'react';
import './property-booking-calendar.css';

setOptions({
  // localeJs,
  // themeJs
});

const airBnB = 'https://img.mobiscroll.com/demos/air-bnb-icon.png';
const booking = 'https://img.mobiscroll.com/demos/booking-icon.png';
const makeMyTrip = 'https://img.mobiscroll.com/demos/make-my-trip-icon.png';

function App() {
  const [isToastOpen, setToastOpen] = useState(false);

  const myEvents = useMemo<MbscCalendarEvent[]>(
    () => [
      {
        start: 'dyndatetime(y,m,d-18,12)',
        end: 'dyndatetime(y,m,d-15,12)',
        icon: airBnB,
        title: 'Mary Smith',
        color: '#fffa61',
      },
      {
        start: 'dyndatetime(y,m,d-7,12)',
        end: 'dyndatetime(y,m,d-1,12)',
        title: 'James Johnson',
        icon: airBnB,
        color: '#fffa61',
      },
      {
        start: 'dyndatetime(y,m,d-12,12)',
        end: 'dyndatetime(y,m,d-9,12)',
        title: 'Patricia Williams',
        icon: airBnB,
        color: '#fffa61',
      },
      {
        start: 'dyndatetime(y,m,d+3,12)',
        end: 'dyndatetime(y,m,d+5,12)',
        title: 'Michael Brown',
        icon: airBnB,
        color: '#fffa61',
      },
      {
        start: 'dyndatetime(y,m,d+10,12)',
        end: 'dyndatetime(y,m,d+11,12)',
        title: 'Jennifer Jones',
        icon: booking,
        color: '#ff9999',
      },
      {
        start: 'dyndatetime(y,m,d,12)',
        end: 'dyndatetime(y,m,d+3,12)',
        title: 'Robert Garcia',
        icon: booking,
        color: '#ff9999',
      },
      {
        start: 'dyndatetime(y,m,d+19,12)',
        end: 'dyndatetime(y,m,d+20,12)',
        title: 'Linda Miller',
        icon: booking,
        color: '#ff9999',
      },
      {
        start: 'dyndatetime(y,m,d+26,12)',
        end: 'dyndatetime(y,m,d+27,12)',
        title: 'John Davis',
        icon: booking,
        color: '#ff9999',
      },
      {
        start: 'dyndatetime(y,m,d-15,12)',
        end: 'dyndatetime(y,m,d-13,12)',
        title: 'Elizabeth Rodriguez',
        icon: makeMyTrip,
        color: '#a0efaa',
      },
      {
        start: 'dyndatetime(y,m,d+13,12)',
        end: 'dyndatetime(y,m,d+15,12)',
        title: 'David Martinez',
        icon: makeMyTrip,
        color: '#a0efaa',
      },
      {
        start: 'dyndatetime(y,m,d+16,12)',
        end: 'dyndatetime(y,m,d+18,12)',
        title: 'Barbara Wilson',
        icon: makeMyTrip,
        color: '#a0efaa',
      },
      {
        start: 'dyndatetime(y,m,d-9,12)',
        end: 'dyndatetime(y,m,d-8,12)',
        title: 'William Anderson',
        icon: makeMyTrip,
        color: '#a0efaa',
      },
      {
        start: 'dyndatetime(y,m,d+23,12)',
        end: 'dyndatetime(y,m,d+26,12)',
        title: 'Susan Taylor',
        icon: makeMyTrip,
        color: '#a0efaa',
      },
      {
        start: 'dyndatetime(y,m,d+6,12)',
        end: 'dyndatetime(y,m,d+9,12)',
        title: 'Richard Jackson',
        icon: airBnB,
        color: '#fffa61',
      },
    ],
    [],
  );

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      calendar: {
        type: 'month',
        eventDisplay: 'exact',
      },
    }),
    [],
  );

  const customDefaultEvent = useCallback((args: MbscNewEventData) => {
    const start = new Date(args.start.setHours(12));
    const end = new Date(args.start.getFullYear(), args.start.getMonth(), args.start.getDate() + 1, 12);
    return {
      title: 'New reservation',
      start,
      end,
    };
  }, []);

  const customLabelContent = useCallback(
    (event: MbscCalendarEventData) => (
      <div className="mbsc-flex mds-booking-item mbsc-align-items-center">
        {event.original!.icon && <img className="mds-booking-icon" draggable="false" src={event.original!.icon} />}
        <span>{event.title}</span>
      </div>
    ),
    [],
  );

  const handleOverlap = useCallback(() => {
    setToastOpen(true);
  }, []);

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);

  return (
    <>
      <Eventcalendar
        cssClass="mds-booking-calendar"
        view={myView}
        data={myEvents}
        clickToCreate={true}
        dragToCreate={true}
        dragToMove={true}
        dragToResize={true}
        eventOverlap={false}
        extendDefaultEvent={customDefaultEvent}
        renderLabelContent={customLabelContent}
        onEventCreateFailed={handleOverlap}
        onEventUpdateFailed={handleOverlap}
      />
      <Toast message="Reservations cannot overlap" isOpen={isToastOpen} onClose={handleCloseToast} />
    </>
  );
}

export default App;
