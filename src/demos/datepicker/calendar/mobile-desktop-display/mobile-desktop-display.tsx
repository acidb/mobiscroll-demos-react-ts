import { Datepicker, Page, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => (
  <Page>
    <Datepicker display="inline" />
    <Datepicker display="anchored" label="Anchored" labelStyle="stacked" inputStyle="outline" placeholder="Please Select..." />
    <Datepicker display="top" label="Top" labelStyle="stacked" inputStyle="outline" placeholder="Please Select..." />
    <Datepicker display="bottom" label="Bottom" labelStyle="stacked" inputStyle="outline" placeholder="Please Select..." />
    <Datepicker display="center" label="Center" labelStyle="stacked" inputStyle="outline" placeholder="Please Select..." />
  </Page>
);
export default App;
