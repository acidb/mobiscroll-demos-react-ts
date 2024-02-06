import { Datepicker, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => (
  <div>
    <Datepicker controls={['calendar']} display="inline" selectMultiple={true} />
    <Datepicker controls={['calendar']} display="inline" selectMultiple={true} selectMax={5} headerText="Pick up to 5 days" />
    <Datepicker controls={['calendar']} display="inline" selectMultiple={true} selectCounter={true} />
  </div>
);
export default App;
