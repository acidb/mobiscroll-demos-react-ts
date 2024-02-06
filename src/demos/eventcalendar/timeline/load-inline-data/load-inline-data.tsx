import { Eventcalendar, MbscCalendarEvent, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useMemo } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const now = new Date();
const myEvents: MbscCalendarEvent[] = [
  {
    start: 'dyndatetime(y,m,d,9)',
    end: 'dyndatetime(y,m,d+3,18)',
    title: 'Business of Software Conference',
    resource: 2,
  },
  {
    start: 'dyndatetime(y,m,d,13)',
    end: 'dyndatetime(y,m,d+1,21)',
    title: 'Friends binge marathon',
    resource: 4,
  },
  {
    start: 'dyndatetime(y,m,d+7,13)',
    end: 'dyndatetime(y,m,d+8,21)',
    title: 'Friends binge marathon',
    resource: 1,
  },
  {
    start: 'dyndatetime(y,m,d,8)',
    end: 'dyndatetime(y,m,d,10)',
    title: 'Product team mtg.',
    resource: 5,
  },
  {
    start: 'dyndatetime(y,m,d+1,7)',
    end: 'dyndatetime(y,m,d+1,8)',
    title: 'Green box to post office',
    resource: 5,
  },
  {
    start: 'dyndatetime(y,m,d-1,8,30)',
    end: 'dyndatetime(y,m,d-1,10)',
    title: 'Quick mtg. with Martin',
    resource: 2,
  },
  {
    start: 'dyndatetime(y,m,8,9,30)',
    end: 'dyndatetime(y,m,8,12)',
    title: 'Product team mtg.',
    resource: 4,
  },
  {
    start: 'dyndatetime(y,m,8,11)',
    end: 'dyndatetime(y,m,8,12,30)',
    title: 'Stakeholder mtg.',
    resource: 2,
  },
  {
    start: 'dyndatetime(y,m,8,13)',
    end: 'dyndatetime(y,m,8,14,30)',
    title: "Lunch @ Butcher's",
    resource: 2,
  },
  {
    start: 'dyndatetime(y,m,8,15)',
    end: 'dyndatetime(y,m,8,17)',
    title: 'General orientation',
    resource: 4,
  },
  {
    recurring: {
      repeat: 'yearly',
      month: now.getMonth() + 1,
      day: 14,
    },
    allDay: true,
    title: 'Dexter BD',
    resource: 2,
  },
  {
    recurring: {
      repeat: 'yearly',
      month: now.getMonth() + 1,
      day: 25,
    },
    allDay: true,
    title: 'Luke BD',
    resource: 2,
  },
  {
    recurring: {
      repeat: 'weekly',
      weekDays: 'WE',
    },
    allDay: true,
    title: 'Employment (Semi-weekly)',
    resource: [1, 3],
  },
  {
    start: 'dyndatetime(y,m,10)',
    end: 'dyndatetime(y,m,15)',
    allDay: true,
    title: 'Sam OFF',
    resource: 4,
  },
  {
    start: 'dyndatetime(y,m,18)',
    end: 'dyndatetime(y,m,29)',
    allDay: true,
    title: 'Europe tour',
    resource: [1, 4, 5],
  },
  {
    start: 'dyndatetime(y,2,7)',
    end: 'dyndatetime(y,2,25)',
    allDay: true,
    title: 'Dean OFF',
    resource: 5,
  },
  {
    start: 'dyndatetime(y,3,5)',
    end: 'dyndatetime(y,3,14)',
    allDay: true,
    title: 'Mike OFF',
    resource: 2,
  },
  {
    start: 'dyndatetime(y,5,7)',
    end: 'dyndatetime(y,5,16)',
    allDay: true,
    title: 'John OFF',
    resource: 4,
  },
  {
    start: 'dyndatetime(y,6,1)',
    end: 'dyndatetime(y,6,11)',
    allDay: true,
    title: 'Carol OFF',
    resource: 1,
  },
  {
    start: 'dyndatetime(y,7,2)',
    end: 'dyndatetime(y,7,17)',
    allDay: true,
    title: 'Jason OFF',
    resource: 5,
  },
  {
    start: 'dyndatetime(y,8,6)',
    end: 'dyndatetime(y,8,14)',
    allDay: true,
    title: 'Ashley OFF',
    resource: 3,
  },
  {
    start: 'dyndatetime(y,9,10)',
    end: 'dyndatetime(y,9,20)',
    allDay: true,
    title: 'Marisol OFF',
    resource: 2,
  },
  {
    start: 'dyndatetime(y,10,1)',
    end: 'dyndatetime(y,10,12)',
    allDay: true,
    title: 'Sharon OFF',
    resource: 3,
  },
  {
    recurring: {
      repeat: 'yearly',
      month: 12,
      day: 25,
    },
    allDay: true,
    title: 'Christmas Day',
    resource: [1, 2, 3, 4, 5],
  },
  {
    recurring: {
      repeat: 'yearly',
      month: 1,
      day: 1,
    },
    allDay: true,
    title: "New Year's day",
    resource: [1, 2, 3, 4, 5],
  },
  {
    recurring: {
      repeat: 'yearly',
      month: 4,
      day: 1,
    },
    allDay: true,
    title: "April Fool's Day",
    resource: [1, 2, 3, 4, 5],
  },
  {
    recurring: {
      repeat: 'yearly',
      month: 11,
      day: 2,
    },
    allDay: true,
    title: 'File Form 720 for the third quarter',
    resource: 5,
  },
  {
    recurring: {
      repeat: 'yearly',
      month: 11,
      day: 2,
    },
    allDay: true,
    title: 'File Form 730 and pay tax on wagers accepted during September',
    resource: 1,
  },
  {
    recurring: {
      repeat: 'yearly',
      month: 11,
      day: 2,
    },
    allDay: true,
    title: 'File Form 2290 and pay the tax for vehicles first used during September',
    resource: 5,
  },
  {
    recurring: {
      repeat: 'yearly',
      month: 11,
      day: 2,
    },
    allDay: true,
    title: 'File Form 941 for the third quarter',
    resource: 2,
  },
  {
    recurring: {
      repeat: 'yearly',
      month: 11,
      day: 2,
    },
    allDay: true,
    title: 'Deposit FUTA owed through Sep if more than $500',
    resource: 14,
  },
  {
    recurring: {
      repeat: 'yearly',
      month: 11,
      day: 30,
    },
    allDay: true,
    title: 'Deposit payroll tax for payments on Nov 21-24 if the semiweekly deposit rule applies',
    resource: 2,
  },
  {
    recurring: {
      repeat: 'yearly',
      month: 11,
      day: 30,
    },
    allDay: true,
    title: 'File Form 730 and pay tax on wagers accepted during October',
    resource: 5,
  },
  {
    recurring: {
      repeat: 'yearly',
      month: 11,
      day: 30,
    },
    allDay: true,
    title: 'File Form 2290 and pay the tax for vehicles first used during October',
    resource: 4,
  },
];

const myResources = [
  {
    id: 1,
    name: 'Resource A',
    color: '#fdf500',
  },
  {
    id: 2,
    name: 'Resource B',
    color: '#ff0101',
  },
  {
    id: 3,
    name: 'Resource C',
    color: '#01adff',
  },
  {
    id: 4,
    name: 'Resource D',
    color: '#239a21',
  },
  {
    id: 5,
    name: 'Resource E',
    color: '#ff4600',
  },
];
const App: FC = () => {
  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: { type: 'day' },
    }),
    [],
  );

  return (
    <Eventcalendar
      // drag
      data={myEvents}
      view={myView}
      resources={myResources}
    />
  );
};
export default App;
