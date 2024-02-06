import { Datepicker, Page, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => (
  <Page>
    <Datepicker controls={['time']} label="Time picker" labelStyle="stacked" inputStyle="outline" placeholder="Please Select..." />
    <Datepicker
      controls={['time']}
      timeFormat="HH:mm"
      label="24 hour picker"
      labelStyle="stacked"
      inputStyle="outline"
      placeholder="Please Select..."
    />
    <Datepicker
      controls={['time']}
      timeFormat="h:mm A"
      label="12 h picker with AM/PM"
      labelStyle="stacked"
      inputStyle="outline"
      placeholder="Please Select..."
    />
    <Datepicker
      controls={['time']}
      timeFormat="HH:mm:ss"
      headerText="Time: {value}"
      label="Hour, Min, Sec"
      labelStyle="stacked"
      inputStyle="outline"
      placeholder="Please Select..."
    />
  </Page>
);
export default App;
