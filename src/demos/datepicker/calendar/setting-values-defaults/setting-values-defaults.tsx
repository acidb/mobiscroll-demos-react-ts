import { Button, Datepicker, MbscPopupButton, Page, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useCallback, useMemo, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const initialValue = new Date(2020, 11, 24);

const App: FC = () => {
  const [now, setNow] = useState<Datepicker | null>(null);
  const [custom, setCustom] = useState<Datepicker | null>(null);
  const [val, setVal] = useState<Date>();

  const nowButtons = useMemo<(string | MbscPopupButton)[]>(
    () => [
      {
        text: 'Now',
        handler: () => {
          now!.setVal(new Date());
          now!.close();
        },
      },
      'set',
      'cancel',
    ],
    [now],
  );

  const customButtons = useMemo<(string | MbscPopupButton)[]>(
    () => [
      {
        text: '05 Jan 2020',
        handler: () => {
          custom!.setVal(new Date(2020, 0, 5));
          custom!.close();
        },
      },
      'set',
      'cancel',
    ],
    [custom],
  );

  const autoButtons = useMemo<(string | MbscPopupButton)[]>(
    () => [
      {
        text: 'Close',
        handler: 'cancel',
      },
    ],
    [],
  );

  const setValue = useCallback(() => {
    setVal(new Date(2020, 0, 2));
  }, []);

  const setToday = useCallback(() => {
    setVal(new Date());
  }, []);

  return (
    <Page>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Controlling the default value</div>
        <Datepicker label="Default" controls={['calendar']} placeholder="Please select...">
          Default
        </Datepicker>
        <Datepicker label="Custom default" controls={['calendar']} defaultSelection={initialValue} placeholder="Please select...">
          Custom default
        </Datepicker>
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Setting a custom value</div>
        <div className="mbsc-button-group-block">
          <Button onClick={setValue}>02-01-2020</Button>
          <Button onClick={setToday}>Today</Button>
        </div>
        <Datepicker controls={['calendar']} display="inline" value={val} />
      </div>

      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Buttons API</div>
        <Datepicker controls={['calendar']} buttons={nowButtons} ref={setNow} label="Now" placeholder="Please select..."></Datepicker>
        <Datepicker
          controls={['calendar']}
          buttons={customButtons}
          ref={setCustom}
          label="Custom"
          placeholder="Please select..."
        ></Datepicker>
        <Datepicker controls={['calendar']} buttons={autoButtons} label="Auto set" placeholder="Please select...">
          Auto set
        </Datepicker>
      </div>
    </Page>
  );
};
export default App;
