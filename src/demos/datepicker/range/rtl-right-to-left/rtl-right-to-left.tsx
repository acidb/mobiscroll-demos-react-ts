import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => <Datepicker controls={['calendar']} select="range" rtl={true} display="inline" />;
export default App;
