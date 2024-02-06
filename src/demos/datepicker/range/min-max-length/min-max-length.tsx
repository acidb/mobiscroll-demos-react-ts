import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => (
  <div>
    <Datepicker controls={['calendar']} select="range" display="inline" minRange={3} maxRange={10} />
    <Datepicker controls={['date']} select="range" display="inline" minRange={3} maxRange={10} />
  </div>
);
export default App;
