import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => (
  <div>
    <Datepicker controls={['calendar']} display="inline" calendarType="month" pages={1} />
    <Datepicker controls={['calendar']} display="inline" calendarType="month" pages={2} />
    <Datepicker controls={['calendar']} display="inline" calendarType="month" pages={3} />
    <Datepicker controls={['calendar']} display="inline" calendarType="month" pages="auto" />
  </div>
);
export default App;
