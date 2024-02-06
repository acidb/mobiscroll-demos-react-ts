import { Datepicker, Page, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useMemo } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const myResponsive = useMemo(
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

  return (
    <Page>
      <Datepicker responsive={myResponsive} inputStyle="box" placeholder="Please Select..." />
    </Page>
  );
};
export default App;
