import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => (
  <div>
    <Datepicker
      controls={['datetime']}
      select="range"
      display="inline"
      showRangeLabels={true}
      rangeStartLabel="Outbound"
      rangeEndLabel="Return"
      minRange={3}
      maxRange={10}
    />
  </div>
);
export default App;
