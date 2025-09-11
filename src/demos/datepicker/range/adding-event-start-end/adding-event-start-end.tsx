import {
  Datepicker,
  Input,
  MbscDatepickerControl,
  Page,
  Segmented,
  SegmentedGroup,
  setOptions,
  Switch,
  Textarea /* localeImport */,
} from '@mobiscroll/react';
import { ChangeEvent, FC, useCallback, useMemo, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [start, setStart] = useState<Input | null>(null);
  const [end, setEnd] = useState<Input | null>(null);
  const [allDay, setAllDay] = useState<boolean>(false);
  const [showAs, setShowAs] = useState<string>('busy');

  const controls = useMemo<MbscDatepickerControl[]>(() => (allDay ? ['date'] : ['datetime']), [allDay]);

  const controlChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setAllDay(ev.target.checked);
  }, []);

  const showAsChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setShowAs(ev.target.value);
  }, []);

  return (
    <Page>
      <Input label="Title" placeholder="Name of the event" />
      <Input label="Location" placeholder="Where will it be?" />
      <Switch label="All day" value={allDay} onChange={controlChange} />
      <Datepicker controls={controls} select="range" startInput={start} endInput={end} />
      <Input ref={setStart} label="Start" placeholder="Event start" />
      <Input ref={setEnd} label="End " placeholder="Event end" />
      <SegmentedGroup value={showAs} onChange={showAsChange}>
        <Segmented value="busy">Show as busy</Segmented>
        <Segmented value="free">Show as free</Segmented>
      </SegmentedGroup>
      <Textarea label="Notes" placeholder="Enter notes, URL, comments" />
    </Page>
  );
};
export default App;
