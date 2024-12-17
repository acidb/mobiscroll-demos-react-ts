import { Datepicker, MbscDatepickerOptions, MbscResponsiveOptions, Page, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useMemo } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const myResponsive: MbscResponsiveOptions<MbscDatepickerOptions> = useMemo(
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
      <Datepicker
        controls={['calendar']}
        responsive={myResponsive}
        select="range"
        showRangeLabels={true}
        inputOptions={{
          inputStyle: 'box',
          placeholder: 'Please Select...',
        }}
      />
    </Page>
  );
};
export default App;
