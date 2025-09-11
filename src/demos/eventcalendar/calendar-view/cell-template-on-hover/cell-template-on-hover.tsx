import {
  Eventcalendar,
  formatDate,
  MbscCalendarDayData,
  MbscCalendarEvent,
  MbscCellHoverEvent,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useMemo, useState } from 'react';
import './cell-template-on-hover.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>(() => [
    {
      start: 'dyndatetime(y,m,2,12)',
      end: 'dyndatetime(y,m,2,16)',
      title: 'Company Strategy Offsite',
      color: '#90bcff',
    },
    {
      start: 'dyndatetime(y,m,7,9)',
      end: 'dyndatetime(y,m,7,17)',
      title: 'R&D Innovation Workshop',
      color: '#ffdfaf',
    },
    {
      start: 'dyndatetime(y,m,15,10)',
      end: 'dyndatetime(y,m,15,15)',
      title: 'Client Feedback Review',
      color: '#ffb9ad',
    },
    {
      start: 'dyndatetime(y,m,19,9)',
      end: 'dyndatetime(y,m,19,19)',
      title: 'Team Building Adventure',
      color: '#f3c1ff',
    },
    {
      start: 'dyndatetime(y,m,23,11)',
      end: 'dyndatetime(y,m,23,15)',
      title: 'Sales Summit & Training',
      color: '#b5eff8',
    },
    {
      start: 'dyndatetime(y,m,25,10)',
      end: 'dyndatetime(y,m,25,15)',
      title: 'Executive Planning Retreat',
      color: '#c7ffbb',
    },
    {
      start: 'dyndatetime(y,m,29,14)',
      end: 'dyndatetime(y,m,29,17)',
      title: 'Marketing Team Conference',
      color: '#ffeeb6',
    },
  ]);

  const myView = useMemo(
    () => ({
      calendar: {
        labels: 2,
      },
    }),
    [],
  );

  const addEvent = useCallback(() => {
    const newEvent: MbscCalendarEvent = {
      start: hoveredDate!,
      title: 'New Event',
    };

    setEvents((myEvents) => [...myEvents, newEvent]);
    setToastMessage('Event added on ' + formatDate('YYYY-MM-DD', hoveredDate!));
    setToastOpen(true);
  }, [hoveredDate]);

  const customDayContent = useCallback(
    (args: MbscCalendarDayData) => {
      const isHovered = hoveredDate && hoveredDate.getTime() === args.date.getTime();

      return (
        isHovered && (
          <button onClick={addEvent} className="mds-cell-summary-btn">
            Add event
          </button>
        )
      );
    },
    [hoveredDate, addEvent],
  );

  const handleCellHoverIn = useCallback((args: MbscCellHoverEvent) => {
    setHoveredDate(args.date);
  }, []);

  const handleCellHoverOut = useCallback(() => {
    setHoveredDate(null);
  }, []);

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  return (
    <>
      <Eventcalendar
        data={myEvents}
        view={myView}
        className="mds-cell-summary"
        renderDayContent={customDayContent}
        onCellHoverIn={handleCellHoverIn}
        onCellHoverOut={handleCellHoverOut}
      />
      <Toast isOpen={isToastOpen} message={toastMessage} onClose={handleToastClose} />
    </>
  );
};
export default App;
