import { Datepicker, localeEs, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // themeJs
});

const App: FC = () => (
  <Datepicker
    controls={['date']}
    display="inline"
    locale={localeEs} // sets the language of the component
  />
);
export default App;
