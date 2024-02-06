import { Datepicker, Page, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => (
  <Page>
    <Datepicker selectMultiple={false} label="Date" inputStyle="box" labelStyle="stacked" placeholder="Please Select..." />
    <Datepicker
      controls={['calendar', 'time']}
      selectMultiple={false}
      label="Date & time"
      inputStyle="box"
      labelStyle="stacked"
      placeholder="Please Select..."
    />
    <Datepicker
      controls={['calendar', 'timegrid']}
      selectMultiple={false}
      label="Date & timegrid"
      inputStyle="box"
      labelStyle="stacked"
      placeholder="Please Select..."
    />
  </Page>
);

export default App;
