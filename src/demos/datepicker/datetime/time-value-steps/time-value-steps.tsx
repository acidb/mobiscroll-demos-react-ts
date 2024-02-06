import { Datepicker, Page, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => (
  <Page>
    <Datepicker
      controls={['datetime']}
      stepMinute={15}
      label="Date & Time (every 15 min)"
      labelStyle="stacked"
      inputStyle="outline"
      placeholder="Please Select..."
    />
    <Datepicker
      controls={['time']}
      stepMinute={5}
      label="Time (every 5 min)"
      labelStyle="stacked"
      inputStyle="outline"
      placeholder="Please Select..."
    />
    <Datepicker
      controls={['time']}
      stepHour={2}
      label="Time (every 2 hours)"
      labelStyle="stacked"
      inputStyle="outline"
      placeholder="Please Select..."
    />
    <Datepicker
      controls={['time']}
      stepSecond={30}
      timeFormat="HH:mm:ss"
      label="Time (every 30 seconds)"
      labelStyle="stacked"
      inputStyle="outline"
      placeholder="Please Select..."
    />
  </Page>
);

export default App;
