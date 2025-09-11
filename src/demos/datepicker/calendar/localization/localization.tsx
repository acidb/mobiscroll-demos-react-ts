import { Datepicker, localeEs, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // themeJs
});

const App: FC = () => (
  <Datepicker
    controls={['calendar']}
    display="inline"
    locale={localeEs} // Sets the language of the component
  />
);
export default App;
