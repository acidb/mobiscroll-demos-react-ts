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
      timezonePlugin={momentTimezone}
      inputStyle="outline"
      label="Pick Date & Time"
      labelStyle="stacked"
    />
  );
};

export default App;
