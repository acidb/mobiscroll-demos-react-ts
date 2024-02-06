import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => (
  <div>
    <Datepicker display="inline" calendarType="week" calendarSize={1} />
    <Datepicker display="inline" calendarType="week" calendarSize={2} />
    <Datepicker display="inline" calendarType="week" calendarSize={3} />{' '}
  </div>
);
export default App;
