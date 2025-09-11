import { Datepicker, dayjsTimezone, MbscDatepickerChangeEvent, setOptions /* localeImport */ } from '@mobiscroll/react';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { FC, useCallback, useState } from 'react';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjsTimezone.dayjs = dayjs;

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [selected, setSelected] = useState<string[] | null>(null);
  const selectedChange = useCallback((ev: MbscDatepickerChangeEvent) => {
    setSelected(ev.value as string[]);
  }, []);

  return (
    <Datepicker
      select="range"
      value={selected}
      onChange={selectedChange}
      dataTimezone="utc"
      displayTimezone="local"
      timezonePlugin={dayjsTimezone}
      inputStyle="outline"
      label="Pick Date & Time"
      labelStyle="stacked"
    />
  );
};

export default App;
