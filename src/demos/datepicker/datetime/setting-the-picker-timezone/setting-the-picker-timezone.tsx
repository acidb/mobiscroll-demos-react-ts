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
  const [selected, setSelected] = useState<string | null>(null);

  const handleChange = useCallback((ev: MbscDatepickerChangeEvent) => {
    setSelected(ev.value as string);
  }, []);

  return (
    <Datepicker
      controls={['datetime']}
      value={selected}
      onChange={handleChange}
      dataTimezone="utc"
      displayTimezone="local"
      inputStyle="outline"
      label="Pick date & time"
      labelStyle="stacked"
      timezonePlugin={dayjsTimezone}
    />
  );
};

export default App;
