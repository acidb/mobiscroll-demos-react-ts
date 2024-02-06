import { Button, MbscSelectChangeEvent, Select, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useCallback, useMemo, useState } from 'react';
import './mobile-desktop-usage.css';

setOptions({
  // localeJs,
  // themeJs
});

const myData = [
  {
    text: 'Atlanta',
    value: 'atl',
  },
  {
    text: 'Berlin',
    value: 'ber',
  },
  {
    text: 'Chicago',
    value: 'chi',
  },
  {
    text: 'London',
    value: 'lon',
  },
];

const App: FC = () => {
  const [openPicker, setOpenPicker] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>('1');

  const handleClick = useCallback(() => {
    setOpenPicker(true);
  }, []);

  const handleChange = useCallback((ev: MbscSelectChangeEvent) => {
    setSelected(ev.value);
  }, []);

  const handleClose = useCallback(() => {
    setOpenPicker(false);
  }, []);

  const inputProps = useMemo(
    () => ({
      className: 'md-mobile-picker-input',
      placeholder: 'Please Select...',
    }),
    [],
  );

  const boxInputProps = useMemo(
    () => ({
      className: 'md-mobile-picker-box-label',
      inputStyle: 'outline',
      placeholder: 'Please Select...',
    }),
    [],
  );

  return (
    <>
      <div className="mbsc-grid">
        <div className="mbsc-form-group">
          <div className="mbsc-row">
            <div className="mbsc-col-12">
              <div className="mbsc-txt-muted md-mobile-picker-header">Use the picker with any inputs & show on focus/click</div>
              <Select data={myData} inputComponent="input" inputProps={inputProps} />
            </div>
          </div>
        </div>
        <div className="mbsc-form-group">
          <div className="mbsc-row">
            <div className="mbsc-col-12 mbsc-txt-muted md-mobile-picker-header">
              Disable <code>onClick/onFocus</code> and only show on button
            </div>
            <div className="mbsc-col-8">
              <Select
                data={myData}
                inputComponent="input"
                inputProps={inputProps}
                showOnClick={false}
                showOnFocus={false}
                isOpen={openPicker}
                value={selected}
                onChange={handleChange}
                onClose={handleClose}
              />
            </div>
            <div className="mbsc-col-4">
              <Button variant="outline" color="primary" className="md-mobile-picker-button" onClick={handleClick}>
                Show picker
              </Button>
            </div>
          </div>
        </div>
        <div className="mbsc-form-group">
          <div className="mbsc-row">
            <div className="mbsc-col-12">
              <div className="mbsc-txt-muted md-mobile-picker-header">Use the picker with a Mobiscroll input</div>
              <Select data={myData} inputProps={boxInputProps} touchUi={true} />
            </div>
          </div>
        </div>
        <div className="mbsc-txt-muted md-mobile-picker-header">Use the picker inline in any page</div>
      </div>
      <div className="md-mobile-picker-inline">
        <Select display="inline" data={myData} />
      </div>
    </>
  );
};
export default App;
