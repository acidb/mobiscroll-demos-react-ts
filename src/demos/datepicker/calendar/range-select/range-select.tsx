import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => <Datepicker controls={['calendar']} display="inline" select="range" showRangeLabels={true} />;
export default App;
