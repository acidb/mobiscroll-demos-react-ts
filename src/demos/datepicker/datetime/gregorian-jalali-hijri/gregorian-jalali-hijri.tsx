import { Datepicker, hijriCalendar, jalaliCalendar, localeAr, localeFa, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // themeJs
});

const App: FC = () => (
  <div>
    <Datepicker controls={['date']} display="inline" />
    <Datepicker controls={['date']} display="inline" calendarSystem={jalaliCalendar} locale={localeFa} />
    <Datepicker controls={['date']} display="inline" calendarSystem={hijriCalendar} locale={localeAr} />
  </div>
);
export default App;
