import { Datepicker, Page, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useMemo } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const responsiveDrop = useMemo(
    () => ({
      xsmall: {
        display: 'bottom',
      },
      small: {
        display: 'anchored',
      },
      custom: {
        // Custom breakpoint
        breakpoint: 800,
        display: 'anchored',
        touchUi: false,
      },
    }),
    [],
  );

  const responsiveCal = useMemo(
    () => ({
      xsmall: {
        controls: ['date'],
        display: 'bottom',
        touchUi: true,
      },
      small: {
        controls: ['date'],
        display: 'anchored',
        touchUi: true,
      },
      custom: {
        // Custom breakpoint
        breakpoint: 800,
        controls: ['calendar'],
        display: 'anchored',
        touchUi: false,
      },
    }),
    [],
  );

  return (
    <Page>
      <Datepicker controls={['date']} responsive={responsiveDrop} inputStyle="box" placeholder="Please Select..." />
      <Datepicker controls={['date']} responsive={responsiveCal} inputStyle="box" placeholder="Please Select..." />
    </Page>
  );
};
export default App;
