import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => <Datepicker controls={['datetime']} rtl={true} display="inline" />;
export default App;
