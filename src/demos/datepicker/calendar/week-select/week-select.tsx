import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => (
  <div>
    <Datepicker display="inline" select="preset-range" firstSelectDay={1} selectSize={14} />
  </div>
);

export default App;
