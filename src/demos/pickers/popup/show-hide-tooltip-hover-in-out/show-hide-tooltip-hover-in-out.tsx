import {
  Eventcalendar,
  formatDate,
  MbscCalendarEvent,
  MbscEventcalendarView,
  Page,
  Popup,
  setOptions,
  /* localeImport */
} from '@mobiscroll/react';
import { useCallback, useMemo, useRef, useState } from 'react';
import './show-hide-tooltip-hover-in-out.css';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  const myEvents = useMemo<MbscCalendarEvent[]>(
    () => [
      {
        title: 'CEO Strategy Meeting',
        start: 'dyndatetime(y,m,1,10)',
        end: 'dyndatetime(y,m,1,11)',
        color: '#FF5733',
      },
      {
        title: 'Board of Directors Briefing',
        start: 'dyndatetime(y,m,3,14)',
        end: 'dyndatetime(y,m,3,15)',
        color: '#33C4FF',
      },
      {
        title: 'Quarterly Review',
        start: 'dyndatetime(y,m,5,9)',
        end: 'dyndatetime(y,m,5,10)',
        color: '#33FF77',
      },
      {
        title: 'Executive Team Lunch',
        start: 'dyndatetime(y,m,7,12)',
        end: 'dyndatetime(y,m,7,13)',
        color: '#FFC733',
      },
      {
        title: 'Investor Meeting',
        start: 'dyndatetime(y,m,10,11)',
        end: 'dyndatetime(y,m,10,12)',
        color: '#9B59B6',
      },
      {
        title: 'Product Launch Review',
        start: 'dyndatetime(y,m,12,13)',
        end: 'dyndatetime(y,m,12,14)',
        color: '#FF6347',
      },
      {
        title: 'Press Conference Preparation',
        start: 'dyndatetime(y,m,14,16)',
        end: 'dyndatetime(y,m,14,17)',
        color: '#1E90FF',
      },
      {
        title: 'Client Partnership Discussion',
        start: 'dyndatetime(y,m,18,10)',
        end: 'dyndatetime(y,m,18,11)',
        color: '#FFD700',
      },
      {
        title: 'CEO’s Weekly Report',
        start: 'dyndatetime(y,m,20,9)',
        end: 'dyndatetime(y,m,20,10)',
        color: '#20B2AA',
      },
      {
        title: 'Town Hall Meeting',
        start: 'dyndatetime(y,m,25,14)',
        end: 'dyndatetime(y,m,25,15)',
        color: '#FF4500',
      },
    ],
    [],
  );

  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
  const [myAnchor, setAnchor] = useState<HTMLElement>();
  const [eventTitle, setEventTitle] = useState<string>('');
  const [eventStart, setEventStart] = useState<string>('');
  const [eventEnd, setEventEnd] = useState<string>('');
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const handleEventHoverIn = useCallback((args: MbscCalendarEvent) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setEventTitle(args.event.title);
    setEventStart(formatDate('hh:mm A', new Date(args.event.start)));
    setEventEnd(formatDate('hh:mm A', new Date(args.event.end)));
    setAnchor(args.domEvent.target as HTMLElement);
    setPopupOpen(true);
  }, []);

  const handleEventHoverOut = useCallback(() => {
    timerRef.current = setTimeout(() => {
      setPopupOpen(false);
    }, 200);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    timerRef.current = setTimeout(() => {
      setPopupOpen(false);
    }, 200);
  }, []);

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      calendar: { type: 'month' },
    }),
    [],
  );

  return (
    <Page>
      <Eventcalendar data={myEvents} view={myView} onEventHoverIn={handleEventHoverIn} onEventHoverOut={handleEventHoverOut} />
      <Popup display="anchored" anchor={myAnchor} touchUi={false} isOpen={isPopupOpen} width={250} showOverlay={false}>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="mds-tooltip-event-title-cont">
            <span>{eventTitle}</span>
          </div>
          <div className="mds-tooltip-start-cont mbsc-flex">
            <span className="mds-tooltip-label">Start:</span>
            <span>{eventStart}</span>
          </div>
          <div className="mds-tooltip-end-cont mbsc-flex">
            <span className="mds-tooltip-label">End:</span>
            <span>{eventEnd}</span>
          </div>
        </div>
      </Popup>
    </Page>
  );
}

export default App;
