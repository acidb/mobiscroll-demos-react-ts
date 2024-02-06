import { Datepicker, Input, Page, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useMemo, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [start, startRef] = useState<Input | null>(null);
  const [end, endRef] = useState<Input | null>(null);

  const inputProps = useMemo(
    () => ({
      placeholder: 'Please Select...',
    }),
    [],
  );

  const boxInputProps = useMemo(
    () => ({
      label: 'Range',
      labelStyle: 'stacked',
      inputStyle: 'outline',
      placeholder: 'Please Select...',
    }),
    [],
  );

  return (
    <Page>
      <Datepicker controls={['calendar']} select="range" inputComponent="input" inputProps={inputProps} />
      <Datepicker controls={['calendar']} select="range" inputProps={boxInputProps} />
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
      <Datepicker select="range" startInput={start} endInput={end} />
      <Datepicker controls={['calendar']} select="range" display="inline" />
    </Page>
  );
};
export default App;
