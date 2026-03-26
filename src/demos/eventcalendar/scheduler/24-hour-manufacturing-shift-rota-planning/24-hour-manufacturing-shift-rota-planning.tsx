import {
  Eventcalendar,
  MbscCalendarColor,
  MbscCalendarEvent,
  MbscCellHoverEvent,
  MbscDateType,
  MbscEventcalendarView,
  MbscEventCreateEvent,
  MbscEventDeleteEvent,
  MbscEventDragEvent,
  MbscEventUpdateEvent,
  MbscResource,
  setOptions,
  Toast /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useState } from 'react';
import { dyndatetime } from '../../../../dyndatetime';
import './24-hour-manufacturing-shift-rota-planning.css';

setOptions({
  // localeJs,
  // themeJs
});

interface Shift {
  startHour: number;
  endHour: number;
  title: string;
  color: string;
  nextDay?: boolean;
}

const morningColor = '#4a8c4d';
const afternoonColor = '#f87c6b';
const nightColor = '#8567AD';

const shifts: Record<string, Shift> = {
  morning: { startHour: 6, endHour: 14, title: 'Morning Shift', color: morningColor },
  afternoon: { startHour: 14, endHour: 22, title: 'Afternoon Shift', color: afternoonColor },
  night: { startHour: 22, endHour: 6, nextDay: true, title: 'Night Shift', color: nightColor },
};

const getShiftByHour = (hour: number): Shift => {
  if (hour >= 6 && hour < 14) {
    return shifts.morning;
  }
  if (hour >= 14 && hour < 22) {
    return shifts.afternoon;
  }
  if (hour >= 22 || hour < 6) {
    return shifts.night;
  }
  return shifts.afternoon;
};

const calculateStart = (start: Date): Date => {
  const d = new Date(start);
  const originalHour = d.getHours();
  const shift = getShiftByHour(originalHour);
  d.setHours(shift.startHour, 0, 0, 0);
  if (shift.startHour === 22 && originalHour < 6) {
    d.setDate(d.getDate() - 1);
  }
  return d;
};

const calculateEnd = (start: Date): Date => {
  const d = new Date(start);
  const startHour = d.getHours();
  const shift = getShiftByHour(d.getHours());
  d.setHours(shift.endHour, 0, 0, 0);
  if (shift.nextDay && startHour === 22) {
    d.setDate(d.getDate() + 1);
  }
  return d;
};

const getTitle = (startHours: number): string => getShiftByHour(startHours).title;

const getColor = (startHours: number): string => getShiftByHour(startHours).color;

const initialEvents: MbscCalendarEvent[] = [
  { id: 1, resource: 'A', title: 'Morning Shift', start: dyndatetime('y,m,d-6,6'), end: dyndatetime('y,m,d-6,14'), color: morningColor },
  {
    id: 2,
    resource: 'B',
    title: 'Afternoon Shift',
    start: dyndatetime('y,m,d-6,14'),
    end: dyndatetime('y,m,d-6,22'),
    color: afternoonColor,
  },
  { id: 3, resource: 'C', title: 'Night Shift', start: dyndatetime('y,m,d-6,22'), end: dyndatetime('y,m,d-5,6'), color: nightColor },
  { id: 4, resource: 'A', title: 'Morning Shift', start: dyndatetime('y,m,d-5,6'), end: dyndatetime('y,m,d-5,14'), color: morningColor },
  {
    id: 5,
    resource: 'B',
    title: 'Afternoon Shift',
    start: dyndatetime('y,m,d-5,14'),
    end: dyndatetime('y,m,d-5,22'),
    color: afternoonColor,
  },
  { id: 6, resource: 'C', title: 'Night Shift', start: dyndatetime('y,m,d-5,22'), end: dyndatetime('y,m,d-4,6'), color: nightColor },
  //<hide-comment>
  { id: 7, resource: 'A', title: 'Morning Shift', start: dyndatetime('y,m,d-4,6'), end: dyndatetime('y,m,d-4,14'), color: morningColor },
  {
    id: 8,
    resource: 'B',
    title: 'Afternoon Shift',
    start: dyndatetime('y,m,d-4,14'),
    end: dyndatetime('y,m,d-4,22'),
    color: afternoonColor,
  },
  { id: 9, resource: 'C', title: 'Night Shift', start: dyndatetime('y,m,d-4,22'), end: dyndatetime('y,m,d-3,6'), color: nightColor },
  { id: 10, resource: 'C', title: 'Morning Shift', start: dyndatetime('y,m,d-3,6'), end: dyndatetime('y,m,d-3,14'), color: morningColor },
  {
    id: 11,
    resource: 'A',
    title: 'Afternoon Shift',
    start: dyndatetime('y,m,d-3,14'),
    end: dyndatetime('y,m,d-3,22'),
    color: afternoonColor,
  },
  { id: 12, resource: 'B', title: 'Night Shift', start: dyndatetime('y,m,d-3,22'), end: dyndatetime('y,m,d-2,6'), color: nightColor },
  { id: 13, resource: 'C', title: 'Morning Shift', start: dyndatetime('y,m,d-2,6'), end: dyndatetime('y,m,d-2,14'), color: morningColor },
  {
    id: 14,
    resource: 'A',
    title: 'Afternoon Shift',
    start: dyndatetime('y,m,d-2,14'),
    end: dyndatetime('y,m,d-2,22'),
    color: afternoonColor,
  },
  { id: 15, resource: 'B', title: 'Night Shift', start: dyndatetime('y,m,d-2,22'), end: dyndatetime('y,m,d-1,6'), color: nightColor },
  { id: 16, resource: 'C', title: 'Morning Shift', start: dyndatetime('y,m,d-1,6'), end: dyndatetime('y,m,d-1,14'), color: morningColor },
  {
    id: 17,
    resource: 'A',
    title: 'Afternoon Shift',
    start: dyndatetime('y,m,d-1,14'),
    end: dyndatetime('y,m,d-1,22'),
    color: afternoonColor,
  },
  { id: 18, resource: 'B', title: 'Night Shift', start: dyndatetime('y,m,d-1,22'), end: dyndatetime('y,m,d,6'), color: nightColor },
  { id: 19, resource: 'B', title: 'Morning Shift', start: dyndatetime('y,m,d,6'), end: dyndatetime('y,m,d,14'), color: morningColor },
  { id: 20, resource: 'C', title: 'Afternoon Shift', start: dyndatetime('y,m,d,14'), end: dyndatetime('y,m,d,22'), color: afternoonColor },
  { id: 21, resource: 'A', title: 'Night Shift', start: dyndatetime('y,m,d,22'), end: dyndatetime('y,m,d+1,6'), color: nightColor },
  { id: 22, resource: 'B', title: 'Morning Shift', start: dyndatetime('y,m,d+1,6'), end: dyndatetime('y,m,d+1,14'), color: morningColor },
  {
    id: 23,
    resource: 'C',
    title: 'Afternoon Shift',
    start: dyndatetime('y,m,d+1,14'),
    end: dyndatetime('y,m,d+1,22'),
    color: afternoonColor,
  },
  { id: 24, resource: 'A', title: 'Night Shift', start: dyndatetime('y,m,d+1,22'), end: dyndatetime('y,m,d+2,6'), color: nightColor },
  { id: 25, resource: 'B', title: 'Morning Shift', start: dyndatetime('y,m,d+2,6'), end: dyndatetime('y,m,d+2,14'), color: morningColor },
  {
    id: 26,
    resource: 'C',
    title: 'Afternoon Shift',
    start: dyndatetime('y,m,d+2,14'),
    end: dyndatetime('y,m,d+2,22'),
    color: afternoonColor,
  },
  { id: 27, resource: 'A', title: 'Night Shift', start: dyndatetime('y,m,d+2,22'), end: dyndatetime('y,m,d+3,6'), color: nightColor },
  { id: 28, resource: 'A', title: 'Morning Shift', start: dyndatetime('y,m,d+3,6'), end: dyndatetime('y,m,d+3,14'), color: morningColor },
  {
    id: 29,
    resource: 'B',
    title: 'Afternoon Shift',
    start: dyndatetime('y,m,d+3,14'),
    end: dyndatetime('y,m,d+3,22'),
    color: afternoonColor,
  },
  { id: 30, resource: 'C', title: 'Night Shift', start: dyndatetime('y,m,d+3,22'), end: dyndatetime('y,m,d+4,6'), color: nightColor },
  { id: 31, resource: 'A', title: 'Morning Shift', start: dyndatetime('y,m,d+4,6'), end: dyndatetime('y,m,d+4,14'), color: morningColor },
  {
    id: 32,
    resource: 'B',
    title: 'Afternoon Shift',
    start: dyndatetime('y,m,d+4,14'),
    end: dyndatetime('y,m,d+4,22'),
    color: afternoonColor,
  },
  { id: 33, resource: 'C', title: 'Night Shift', start: dyndatetime('y,m,d+4,22'), end: dyndatetime('y,m,d+5,6'), color: nightColor },
  { id: 34, resource: 'A', title: 'Morning Shift', start: dyndatetime('y,m,d+5,6'), end: dyndatetime('y,m,d+5,14'), color: morningColor },
  {
    id: 35,
    resource: 'B',
    title: 'Afternoon Shift',
    start: dyndatetime('y,m,d+5,14'),
    end: dyndatetime('y,m,d+5,22'),
    color: afternoonColor,
  },
  { id: 36, resource: 'C', title: 'Night Shift', start: dyndatetime('y,m,d+5,22'), end: dyndatetime('y,m,d+6,6'), color: nightColor },
  { id: 37, resource: 'C', title: 'Morning Shift', start: dyndatetime('y,m,d+6,6'), end: dyndatetime('y,m,d+6,14'), color: morningColor },
  {
    id: 38,
    resource: 'B',
    title: 'Afternoon Shift',
    start: dyndatetime('y,m,d+6,14'),
    end: dyndatetime('y,m,d+6,22'),
    color: afternoonColor,
  },
  { id: 39, resource: 'A', title: 'Night Shift', start: dyndatetime('y,m,d+6,22'), end: dyndatetime('y,m,d+7,6'), color: nightColor },
  { id: 40, resource: 'C', title: 'Morning Shift', start: dyndatetime('y,m,d+7,6'), end: dyndatetime('y,m,d+7,14'), color: morningColor },
  {
    id: 41,
    resource: 'B',
    title: 'Afternoon Shift',
    start: dyndatetime('y,m,d+7,14'),
    end: dyndatetime('y,m,d+7,22'),
    color: afternoonColor,
  },
  { id: 42, resource: 'A', title: 'Night Shift', start: dyndatetime('y,m,d+7,22'), end: dyndatetime('y,m,d+8,6'), color: nightColor },
  { id: 43, resource: 'C', title: 'Morning Shift', start: dyndatetime('y,m,d+8,6'), end: dyndatetime('y,m,d+8,14'), color: morningColor },
  {
    id: 44,
    resource: 'B',
    title: 'Afternoon Shift',
    start: dyndatetime('y,m,d+8,14'),
    end: dyndatetime('y,m,d+8,22'),
    color: afternoonColor,
  },
  { id: 45, resource: 'A', title: 'Night Shift', start: dyndatetime('y,m,d+8,22'), end: dyndatetime('y,m,d+9,6'), color: nightColor },
  //</hide-comment>
];

const resources: MbscResource[] = [
  { id: 'A', name: 'Crew A' },
  { id: 'B', name: 'Crew B' },
  { id: 'C', name: 'Crew C' },
];

const view: MbscEventcalendarView = {
  scheduler: {
    type: 'week',
    allDay: false,
    startTime: '06:00',
    endTime: '06:00+1',
    timeCellStep: 120,
    timeLabelStep: 120,
  },
};

const App: FC = () => {
  const [myEvents, setMyEvents] = useState<MbscCalendarEvent[]>(initialEvents);
  const [colors, setColors] = useState<MbscCalendarColor[]>([]);
  const [redResources, setRedResources] = useState<Record<string, boolean>>({});
  const [draggedEventStart, setDraggedEventStart] = useState<Date | null>(null);
  const [draggedEventEnd, setDraggedEventEnd] = useState<Date | null>(null);
  const [draggedEventResource, setDraggedEventResource] = useState<string | null>(null);
  const [availableSlotOnHover, setAvailableSlotOnHover] = useState<MbscCalendarColor | null>(null);
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const getAvailableSlots = useCallback(
    (resourceId: string, dayStart: Date): Record<string, boolean> => {
      const dayEnd = new Date(dayStart);
      dayEnd.setDate(dayEnd.getDate() + 1);
      dayEnd.setHours(6, 0, 0, 0);
      const dayEvents = myEvents.filter((e) => {
        const eStart = new Date(e.start as Date);
        return eStart >= dayStart && eStart < dayEnd;
      });
      const slots: Record<string, boolean> = { morning: true, afternoon: true, night: true };
      dayEvents.forEach((e) => {
        if (e.resource === resourceId) {
          slots.morning = slots.afternoon = slots.night = false;
        } else {
          const startHour = new Date(e.start as Date).getHours();
          if (startHour === 6) {
            slots.morning = false;
          } else if (startHour === 14) {
            slots.afternoon = false;
          } else if (startHour === 22) {
            slots.night = false;
          }
        }
      });
      return slots;
    },
    [myEvents],
  );

  const clearColorsForResource = useCallback((currentColors: MbscCalendarColor[], resourceId: string, date: Date): MbscCalendarColor[] => {
    const base = new Date(date);
    base.setHours(0, 0, 0, 0);
    const baseTime = +base;
    return currentColors.filter((c) => {
      if (c.resource === resourceId) {
        const cDate = new Date(c.start as Date);
        cDate.setHours(0, 0, 0, 0);
        if (+cDate === baseTime) {
          const hour = new Date(c.start as Date).getHours();
          if (hour === 6 || hour === 14 || hour === 22) {
            return false;
          }
        }
      }
      return true;
    });
  }, []);

  const handleCellHoverIn = useCallback(
    (args: MbscCellHoverEvent) => {
      const hoveredDate = new Date(args.date);
      const shift = getShiftByHour(hoveredDate.getHours());
      if (!shift) return;

      const dayStart = new Date(args.date);
      dayStart.setHours(6, 0, 0, 0);
      const availableSlots = getAvailableSlots(String(args.resource.id), dayStart);
      const slotKey = Object.keys(availableSlots).find((key) => availableSlots[key] && shifts[key].startHour === shift.startHour);
      if (slotKey) {
        const startTime = new Date(dayStart);
        startTime.setHours(shifts[slotKey].startHour, 0, 0, 0);
        const endTime = new Date(+startTime + 8 * 60 * 60 * 1000 - 1);
        const slot: MbscCalendarColor = {
          background: '#c1ffe180',
          cssClass: 'available-slot mbsc-font-icon mbsc-icon-plus',
          start: startTime as MbscDateType,
          end: endTime,
          resource: String(args.resource.id),
        };
        setAvailableSlotOnHover(slot);
        setColors((prev) => [...prev, slot]);
      }
    },
    [getAvailableSlots],
  );

  const handleCellHoverOut = useCallback(() => {
    if (availableSlotOnHover) {
      setColors((prev) => prev.filter((c) => c !== availableSlotOnHover));
      setAvailableSlotOnHover(null);
    }
  }, [availableSlotOnHover]);

  const handleEventCreate = useCallback(
    (args: MbscEventCreateEvent) => {
      const event = { ...args.event, id: Date.now() };
      const dayStart = new Date(event.start as Date);
      dayStart.setHours(6, 0, 0, 0);
      const dayEnd = new Date(dayStart);
      dayEnd.setDate(dayEnd.getDate() + 1);
      dayEnd.setHours(6, 0, 0, 0);
      const dayEvents = myEvents.filter((e) => {
        const eStart = new Date(e.start as Date);
        return eStart >= dayStart && eStart < dayEnd;
      });
      const conflict = dayEvents.find(
        (ev) => ev.resource === event.resource || +new Date(ev.start as Date) === +new Date(event.start as Date),
      );
      if (conflict) {
        setToastMessage('Already assigned');
        setToastOpen(true);
        return false;
      }
      setColors((prev) => clearColorsForResource(prev, String(event.resource), event.start as Date));
      const day = new Date(event.start as Date);
      day.setHours(0, 0, 0, 0);
      setRedResources((prev) => ({ ...prev, [String(event.resource) + day.toISOString()]: false }));
      setAvailableSlotOnHover(null);
      setMyEvents((prev) => [...prev, event]);
    },
    [myEvents, clearColorsForResource],
  );

  const handleEventClick = useCallback(() => {
    setToastMessage('Already assigned');
    setToastOpen(true);
  }, []);

  const handleEventDelete = useCallback((args: MbscEventDeleteEvent) => {
    setMyEvents((prev) => prev.filter((e) => e.id !== args.event.id));
    const colorStart = new Date(args.event.start as Date);
    colorStart.setHours(6, 0, 0, 0);
    const colorEnd = new Date(args.event.start as Date);
    colorEnd.setDate(colorEnd.getDate() + 1);
    colorEnd.setHours(6, 0, 0, 0);
    setColors((prev) => [...prev, { start: colorStart, end: colorEnd, background: '#ffdbd280', resource: String(args.event.resource) }]);
    const resource = String(args.event.resource);
    const day = new Date(args.event.start as Date);
    day.setHours(0, 0, 0, 0);
    setRedResources((prev) => ({ ...prev, [resource + day.toISOString()]: true }));
    setToastMessage(args.event.title + ' deleted');
    setToastOpen(true);
  }, []);

  const handleEventDragStart = useCallback((args: MbscEventDragEvent) => {
    setDraggedEventStart(args.event.start as Date);
    setDraggedEventEnd(args.event.end as Date);
    setDraggedEventResource(String(args.event.resource));
  }, []);

  const handleEventUpdateFailed = useCallback(() => {
    setToastMessage('Already assigned');
    setToastOpen(true);
  }, []);

  const handleEventUpdate = useCallback(
    (args: MbscEventUpdateEvent) => {
      const event = args.event;
      const dayStart = new Date(event.start as Date);
      dayStart.setHours(6, 0, 0, 0);
      const dragStartDay = new Date(draggedEventStart!);
      dragStartDay.setHours(6, 0, 0, 0);
      if (+dayStart !== +dragStartDay) {
        return false;
      }

      const dayEnd = new Date(dayStart);
      dayEnd.setDate(dayEnd.getDate() + 1);
      dayEnd.setHours(6, 0, 0, 0);
      const dayEvents = myEvents.filter((e) => {
        const eStart = new Date(e.start as Date);
        return eStart >= dayStart && eStart < dayEnd;
      });
      const conflicts = dayEvents.filter(
        (ev) => ev.id !== event.id && (ev.resource === event.resource || +new Date(ev.start as Date) === +new Date(event.start as Date)),
      );
      const evStart = new Date(event.start as Date);
      event.title = getTitle(evStart.getHours());
      event.color = getColor(evStart.getHours());

      if (conflicts.length) {
        let shouldReturn = false;
        conflicts.forEach((sh, i) => {
          if (sh.resource === event.resource) {
            if (+(event.start as Date) === +new Date(sh.start as Date)) {
              shouldReturn = true;
            }
            sh.resource = draggedEventResource!;
            conflicts[i] = sh;
          } else {
            sh.start = draggedEventStart!;
            sh.end = draggedEventEnd!;
            const start = new Date(draggedEventStart!);
            sh.title = getTitle(start.getHours());
            sh.color = getColor(start.getHours());
            conflicts[i] = sh;
          }
        });
        if (shouldReturn) {
          return false;
        }
        setMyEvents((prev) =>
          prev.map((e) => {
            const updated = [...conflicts, event].find((u) => u.id === e.id);
            return updated || e;
          }),
        );
      } else {
        if (dayEvents.some((ev) => ev.id === event.id)) {
          setMyEvents((prev) => prev.map((e) => (e.id === event.id ? event : e)));
        }
      }

      setColors((prev) => clearColorsForResource(prev, String(event.resource), event.start as Date));
      const day = new Date(event.start as Date);
      day.setHours(0, 0, 0, 0);
      setRedResources((prev) => ({ ...prev, [String(event.resource) + day.toISOString()]: false }));
      if (!conflicts.length && event.resource !== draggedEventResource) {
        const colorEnd = new Date(dayStart);
        colorEnd.setDate(colorEnd.getDate() + 1);
        colorEnd.setHours(6, 0, 0, 0);
        setColors((prev) => [
          ...prev,
          { start: dayStart, resource: String(args.oldEvent!.resource), background: '#ffdbd280', end: colorEnd },
        ]);
        setRedResources((prev) => ({ ...prev, [String(args.oldEvent!.resource) + day.toISOString()]: true }));
      }
      setDraggedEventStart(null);
      setDraggedEventEnd(null);
      setDraggedEventResource(null);
    },
    [myEvents, draggedEventStart, draggedEventEnd, draggedEventResource, clearColorsForResource],
  );

  const extendDefaultEvent = useCallback((args: { start: Date }): MbscCalendarEvent => {
    const start = new Date(args.start);
    const newStart = calculateStart(start);
    const newEnd = calculateEnd(start);
    const title = getTitle(newStart.getHours());
    const color = getColor(newStart.getHours());
    return {
      title: title,
      start: newStart,
      end: newEnd,
      color: color,
    };
  }, []);

  const customResource = useCallback(
    (res: MbscResource, day: Date) => {
      const style = redResources[res.id + day.toISOString()]
        ? { color: '#53000080', background: '#ffdbd280', margin: '-0.5em', padding: '0.5em' }
        : {};
      return <div style={style}>{res.name}</div>;
    },
    [redResources],
  );

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  return (
    <>
      <Eventcalendar
        cssClass="mds-24-hour-manufacturing-calendar"
        data={myEvents}
        colors={colors}
        dragToMove={true}
        dragToCreate={false}
        clickToCreate="single"
        dragToResize={false}
        dragTimeStep={480}
        dragTimeStepBase="viewStart"
        eventDelete={true}
        eventOverlap={false}
        extendDefaultEvent={extendDefaultEvent}
        onCellHoverIn={handleCellHoverIn}
        onCellHoverOut={handleCellHoverOut}
        onEventCreate={handleEventCreate}
        onEventClick={handleEventClick}
        onEventDelete={handleEventDelete}
        onEventDragStart={handleEventDragStart}
        onEventUpdateFailed={handleEventUpdateFailed}
        onEventUpdate={handleEventUpdate}
        groupBy="date"
        resources={resources}
        renderResource={customResource}
        view={view}
      />
      <Toast isOpen={isToastOpen} message={toastMessage} onClose={handleToastClose} />
    </>
  );
};

export default App;
