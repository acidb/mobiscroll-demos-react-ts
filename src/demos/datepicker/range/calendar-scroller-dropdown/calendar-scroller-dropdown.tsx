import { Datepicker, Page, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => (
  <Page>
    <Datepicker
      controls={['calendar']}
      select="range"
      inputProps={{
        label: 'Calendar',
        labelStyle: 'stacked',
        inputStyle: 'outline',
        placeholder: 'Please Select...',
      }}
    />
    <Datepicker
      controls={['date']}
      select="range"
      inputProps={{
        label: 'Date',
        labelStyle: 'stacked',
        inputStyle: 'outline',
        placeholder: 'Please Select...',
      }}
    />
    <Datepicker
      controls={['datetime']}
      select="range"
      inputProps={{
        label: 'Date & Time',
        labelStyle: 'stacked',
        inputStyle: 'outline',
        placeholder: 'Please Select...',
      }}
    />
    <Datepicker
      controls={['calendar', 'time']}
      select="range"
      inputProps={{
        label: 'Calendar & Time',
        labelStyle: 'stacked',
        inputStyle: 'outline',
        placeholder: 'Please Select...',
      }}
    />
    <Datepicker
      controls={['time']}
      select="range"
      inputProps={{
        label: 'Time',
        labelStyle: 'stacked',
        inputStyle: 'outline',
        placeholder: 'Please Select...',
      }}
    />
  </Page>
);
export default App;
