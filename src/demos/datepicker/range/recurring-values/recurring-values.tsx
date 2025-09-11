import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useMemo } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const myInvalid = useMemo(
    () => [
      {
        recurring: {
          repeat: 'daily', // Possible values: 'daily', 'weekly', 'monthly', 'yearly'
          from: '2020-12-01', // The start date of the occurrences
          until: '2021-01-31', // The end date of the occurrences
        },
        recurringException: ['2020-12-30', new Date(2020, 11, 31)], // Can contain string or date object
        recurringExceptionRule: {
          repeat: 'monthly',
          day: 10,
        },
      },
      {
        recurring: {
          repeat: 'weekly',
          weekDays: 'SA', // Comma separated list of the week days, possible values: 'SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'
          interval: 2, // The time interval for the rule (every 2 weeks in this example)
        },
      },
      {
        recurring: {
          repeat: 'monthly',
          day: 15,
          count: 12, // The number of occurrences
        },
      },
      {
        recurring: {
          repeat: 'yearly',
          day: 1,
          month: 1,
        },
      },
    ],
    [],
  );

  return <Datepicker controls={['calendar']} select="range" display="inline" invalid={myInvalid} />;
};
export default App;
