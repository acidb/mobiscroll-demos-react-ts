import { Datepicker, Page, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => (
  <Page>
    <Datepicker controls={['date']} inputComponent="input" inputProps={{ placeholder: 'Please Select...' }} />
    <Datepicker controls={['date']} inputStyle="outline" label="Date" labelStyle="stacked" placeholder="Please Select..." />
    <Datepicker controls={['date']} display="inline" />
  </Page>
);

export default App;
