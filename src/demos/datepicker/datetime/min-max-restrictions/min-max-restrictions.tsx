import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => (
  <div>
    <Datepicker controls={['date']} display="inline" min="1920-01-01" max="2050-01-01" />
    <Datepicker controls={['time']} display="inline" min="10:30" max="19:30" />
    <Datepicker controls={['timegrid']} display="inline" min="10:30" max="19:30" />
    <Datepicker controls={['datetime']} display="inline" min="2000-01-01T12:00" max="2050-01-01T12:00" />
  </div>
);
export default App;
