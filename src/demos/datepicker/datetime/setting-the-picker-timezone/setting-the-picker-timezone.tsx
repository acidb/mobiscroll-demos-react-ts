import { Datepicker, MbscDatepickerChangeEvent, momentTimezone, setOptions /* localeImport */ } from '@mobiscroll/react';
import moment from 'moment-timezone';
import { FC, useCallback, useState } from 'react';

// setup Mobiscroll Timezone plugin with Moment
momentTimezone.moment = moment;

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
      timezonePlugin={momentTimezone}
    />
  );
};

export default App;
