import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => (
  <div>
    <Datepicker controls={['calendar', 'time']} display="inline" />
    <Datepicker controls={['calendar', 'timegrid']} display="inline" />
  </div>
);
export default App;
