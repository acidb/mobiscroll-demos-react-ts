import { Datepicker, hijriCalendar, jalaliCalendar, localeAr, localeFa, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // themeJs
});

const App: FC = () => (
  <div>
    <Datepicker controls={['calendar']} display="inline" />
    <Datepicker controls={['calendar']} display="inline" calendarSystem={jalaliCalendar} locale={localeFa} />
    <Datepicker controls={['calendar']} display="inline" calendarSystem={hijriCalendar} locale={localeAr} />
  </div>
);
export default App;
