import { Datepicker, Page, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => (
  <Page>
    <Datepicker inputComponent="input" inputProps={{ placeholder: 'Please Select...' }} />
    <Datepicker inputStyle="outline" label="Date" labelStyle="stacked" placeholder="Please Select..." />
    <Datepicker display="inline" />
  </Page>
);
export default App;
