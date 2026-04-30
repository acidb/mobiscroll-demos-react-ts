import {
  Eventcalendar,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscPageLoadingEvent,
  MbscResource,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useMemo, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

const resourceNr = 20;
const eventsNr = 2000;
const myResources: MbscResource[] = [];
const myEventColors = ['#ff0101', '#239a21', '#8f1ed6', '#01adff', '#d8ca1a'];

for (let i = 1; i <= resourceNr; i++) {
  myResources.push({ name: 'Resource ' + i, id: i });
}

const App: FC = () => {
  const [myEvents, setMyEvents] = useState<MbscCalendarEvent[]>([]);

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      scheduler: {
        type: 'month',
        timeCellStep: 15,
        timeLabelStep: 15,
      },
    }),
    [],
  );

  const handlePageLoading = useCallback((args: MbscPageLoadingEvent) => {
    setTimeout(() => {
      const newEvents: MbscCalendarEvent[] = [];
      const year = args.firstDay.getFullYear();
      const month = args.firstDay.getMonth();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      // Generate random events for the visible month
      for (let i = 0; i < eventsNr; i++) {
        const day = getRandomInt(1, daysInMonth + 1);
        const resource = getRandomInt(1, resourceNr + 1);
        const color = getRandomInt(0, myEventColors.length);
        const startHour = getRandomInt(0, 23);
        const startMinute = getRandomInt(0, 4) * 15;
        const start = new Date(year, month, day, startHour, startMinute);
        const end = new Date(start.getTime() + getRandomInt(2, 9) * 15 * 60 * 1000);
        if (end.getDate() === start.getDate()) {
          newEvents.push({
            color: myEventColors[color],
            end: end,
            resource: resource,
            start: start,
            title: 'Event ' + i,
          });
        }
      }
      setMyEvents(newEvents);
    });
  }, []);

  return <Eventcalendar view={myView} data={myEvents} resources={myResources} groupBy="date" onPageLoading={handlePageLoading} />;
};

export default App;
