import { Datepicker, Page, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => (
  <Page>
    <Datepicker
      controls={['date']}
      selectMultiple={false}
      label="Date"
      inputStyle="box"
      labelStyle="stacked"
      placeholder="Please Select..."
    />
    <Datepicker
      controls={['time']}
      selectMultiple={false}
      label="Time"
      inputStyle="box"
      labelStyle="stacked"
      placeholder="Please Select..."
    />
    <Datepicker
      controls={['timegrid']}
      selectMultiple={false}
      label="Time grid"
      inputStyle="box"
      labelStyle="stacked"
      placeholder="Please Select..."
    />
    <Datepicker
      controls={['date', 'time']}
      selectMultiple={false}
      label="Date & time"
      inputStyle="box"
      labelStyle="stacked"
      placeholder="Please Select..."
    />
  </Page>
);
export default App;
