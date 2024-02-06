import { Datepicker, hijriCalendar, jalaliCalendar, localeAr, localeFa, setOptions } from '@mobiscroll/react';
import { FC } from 'react';

setOptions({
  // themeJs
});

const App: FC = () => (
  <div>
    <Datepicker controls={['calendar']} select="range" display="inline" />
    <Datepicker controls={['calendar']} select="range" display="inline" calendarSystem={jalaliCalendar} locale={localeFa} />
    <Datepicker controls={['calendar']} select="range" display="inline" calendarSystem={hijriCalendar} locale={localeAr} />
  </div>
);
export default App;
