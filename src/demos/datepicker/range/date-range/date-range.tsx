import { Datepicker, Input, Page, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [start, startRef] = useState<Input | null>(null);
  const [end, endRef] = useState<Input | null>(null);

  return (
    <Page>
      <Datepicker controls={['calendar']} select="range" calendarType="month" pages={2} display="inline" />
      <Datepicker controls={['date']} select="range" display="inline" />
      <Datepicker controls={['calendar']} select="preset-range" display="inline" pages={2} firstSelectDay={2} selectSize={10} />
      <Datepicker
        controls={['calendar']}
        select="range"
        label="Range"
        labelStyle="stacked"
        inputStyle="outline"
        placeholder="Please Select..."
      />
      <Datepicker controls={['calendar']} select="range" startInput={start} endInput={end} />
      <div className="mbsc-grid mbsc-no-padding">
        <div className="mbsc-row">
          <div className="mbsc-col-6">
            <Input ref={startRef} label="Start" labelStyle="stacked" inputStyle="outline" placeholder="Please Select..."></Input>
          </div>
          <div className="mbsc-col-6">
            <Input ref={endRef} label="End" labelStyle="stacked" inputStyle="outline" placeholder="Please Select..."></Input>
          </div>
        </div>
      </div>
    </Page>
  );
};
export default App;
