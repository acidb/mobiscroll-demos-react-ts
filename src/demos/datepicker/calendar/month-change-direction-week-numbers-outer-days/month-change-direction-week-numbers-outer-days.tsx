import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => (
  <Datepicker controls={['calendar']} display="inline" calendarScroll="horizontal" showWeekNumbers={true} showOuterDays={true} />
);
export default App;
