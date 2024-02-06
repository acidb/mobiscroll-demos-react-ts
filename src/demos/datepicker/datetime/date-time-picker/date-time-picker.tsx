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
      label="Compact date & time picker"
      labelStyle="stacked"
      inputStyle="outline"
      placeholder="Please Select..."
    />
    <Datepicker
      controls={['date', 'time']}
      label="Expanded date & time picker"
      labelStyle="stacked"
      inputStyle="outline"
      placeholder="Please Select..."
    />
    <div className="mbsc-grid mbsc-no-padding">
      <div className="mbsc-row">
        <div className="mbsc-col-6">
          <Datepicker controls={['date']} label="Date" labelStyle="stacked" inputStyle="outline" placeholder="Please Select..." />
        </div>
        <div className="mbsc-col-6">
          <Datepicker controls={['time']} label="Time" labelStyle="stacked" inputStyle="outline" placeholder="Please Select..." />
        </div>
      </div>
    </div>
  </Page>
);

export default App;
