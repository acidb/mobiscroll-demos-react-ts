import { Eventcalendar, MbscCalendarEvent, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useMemo } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const now = new Date();

const App: FC = () => {
  const myEvents: MbscCalendarEvent[] = useMemo(
    () => [
      {
        start: 'dyndatetime(y,m,d,9)',
        end: 'dyndatetime(y,m,d+3,18)',
        title: 'Business of Software Conference',
        color: '#ff6d42',
      },
      {
        start: 'dyndatetime(y,m,d,13)',
        end: 'dyndatetime(y,m,d+1,21)',
        title: 'Friends binge marathon',
        color: '#7bde83',
      },
      {
        start: 'dyndatetime(y,m,d+7,13)',
        end: 'dyndatetime(y,m,d+8,21)',
        title: 'Friends binge marathon',
        color: '#7bde83',
      },
      {
        start: 'dyndatetime(y,m,d,8)',
        end: 'dyndatetime(y,m,d,9)',
        title: 'Product team mtg.',
        color: '#913aa7',
      },
      {
        start: 'dyndatetime(y,m,d+1,7)',
        end: 'dyndatetime(y,m,d+1,8)',
        title: 'Green box to post office',
        color: '#6e7f29',
      },
      {
        start: 'dyndatetime(y,m,d-1,8,45)',
        end: 'dyndatetime(y,m,d-1,10)',
        title: 'Quick mtg. with Martin',
        color: '#de3d83',
      },
      {
        start: 'dyndatetime(y,m,8,9,30)',
        end: 'dyndatetime(y,m,8,10,30)',
        title: 'Product team mtg.',
        color: '#f67944',
      },
      {
        start: 'dyndatetime(y,m,8,11,0)',
        end: 'dyndatetime(y,m,8,11,45)',
        title: 'Stakeholder mtg.',
        color: '#a144f6',
      },
      {
        start: 'dyndatetime(y,m,8,13,0)',
        end: 'dyndatetime(y,m,8,13,45)',
        title: "Lunch @ Butcher's",
        color: '#00aabb',
      },
      {
        start: 'dyndatetime(y,m,8,15,0)',
        end: 'dyndatetime(y,m,8,16,0)',
        title: 'General orientation',
        color: '#a71111',
      },
      {
        recurring: {
          repeat: 'yearly',
          month: now.getMonth() + 1,
          day: 14,
        },
        allDay: true,
        title: 'Dexter BD',
        color: '#37bbe4',
      },
      {
        recurring: {
          repeat: 'yearly',
          month: now.getMonth() + 1,
          day: 25,
        },
        allDay: true,
        title: 'Luke BD',
        color: '#37bbe4',
      },
      {
        recurring: {
          repeat: 'weekly',
          weekDays: 'WE',
        },
        allDay: true,
        title: 'Employment (Semi-weekly)',
        color: '#228c73',
      },
      {
        start: 'dyndatetime(y,m,10)',
        end: 'dyndatetime(y,m,15)',
        allDay: true,
        title: 'Sam OFF',
        color: '#ca4747',
      },
      {
        start: 'dyndatetime(y,m,18)',
        end: 'dyndatetime(y,m,29)',
        allDay: true,
        title: 'Europe tour',
        color: '#56ca70',
      },
      {
        start: 'dyndatetime(y,2,7)',
        end: 'dyndatetime(y,2,25)',
        allDay: true,
        title: 'Dean OFF',
        color: '#99ff33',
      },
      {
        start: 'dyndatetime(y,3,5)',
        end: 'dyndatetime(y,3,14)',
        allDay: true,
        title: 'Mike OFF',
        color: '#e7b300',
      },
      {
        start: 'dyndatetime(y,5,7)',
        end: 'dyndatetime(y,5,16)',
        allDay: true,
        title: 'John OFF',
        color: '#669900',
      },
      {
        start: 'dyndatetime(y,6,1)',
        end: 'dyndatetime(y,6,11)',
        allDay: true,
        title: 'Carol OFF',
        color: '#6699ff',
      },
      {
        start: 'dyndatetime(y,7,2)',
        end: 'dyndatetime(y,7,17)',
        allDay: true,
        title: 'Jason OFF',
        color: '#cc9900',
      },
      {
        start: 'dyndatetime(y,8,6)',
        end: 'dyndatetime(y,8,14)',
        allDay: true,
        title: 'Ashley OFF',
        color: '#339966',
      },
      {
        start: 'dyndatetime(y,9,10)',
        end: 'dyndatetime(y,9,20)',
        allDay: true,
        title: 'Marisol OFF',
        color: '#8701a9',
      },
      {
        start: 'dyndatetime(y,10,1)',
        end: 'dyndatetime(y,10,12)',
        allDay: true,
        title: 'Sharon OFF',
        color: '#cc6699',
      },
      {
        recurring: {
          repeat: 'yearly',
          month: 12,
          day: 25,
        },
        allDay: true,
        title: 'Christmas Day',
        color: '#ff0066',
      },
      {
        recurring: {
          repeat: 'yearly',
          month: 1,
          day: 1,
        },
        allDay: true,
        title: "New Year's day",
        color: '#99ccff',
      },
      {
        recurring: {
          repeat: 'yearly',
          month: 4,
          day: 1,
        },
        allDay: true,
        title: "April Fool's Day",
        color: '#ff6666',
      },
      {
        recurring: {
          repeat: 'yearly',
          month: 11,
          day: 2,
        },
        allDay: true,
        title: 'File Form 720 for the third quarter',
        color: '#147ea6',
      },
      {
        recurring: {
          repeat: 'yearly',
          month: 11,
          day: 2,
        },
        allDay: true,
        title: 'File Form 730 and pay tax on wagers accepted during September',
        color: '#a73a4e',
      },
      {
        recurring: {
          repeat: 'yearly',
          month: 11,
          day: 2,
        },
        allDay: true,
        title: 'File Form 2290 and pay the tax for vehicles first used during September',
        color: '#218e0d',
      },
      {
        recurring: {
          repeat: 'yearly',
          month: 11,
          day: 2,
        },
        allDay: true,
        title: 'File Form 941 for the third quarter',
        color: '#a67914',
      },
      {
        recurring: {
          repeat: 'yearly',
          month: 11,
          day: 2,
        },
        allDay: true,
        title: 'Deposit FUTA owed through Sep if more than $500',
        color: '#3c0707',
      },
      {
        recurring: {
          repeat: 'yearly',
          month: 11,
          day: 30,
        },
        allDay: true,
        title: 'Deposit payroll tax for payments on Nov 21-24 if the semiweekly deposit rule applies',
        color: '#14a618',
      },
      {
        recurring: {
          repeat: 'yearly',
          month: 11,
          day: 30,
        },
        allDay: true,
        title: 'File Form 730 and pay tax on wagers accepted during October',
        color: '#722ac1',
      },
      {
        recurring: {
          repeat: 'yearly',
          month: 11,
          day: 30,
        },
        allDay: true,
        title: 'File Form 2290 and pay the tax for vehicles first used during October',
        color: '#256069',
      },
    ],
    [],
  );

  const myView = useMemo<MbscEventcalendarView>(() => ({ calendar: { labels: true } }), []);

  return <Eventcalendar data={myEvents} view={myView} />;
};
export default App;
