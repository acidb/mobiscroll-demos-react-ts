import { Button, Datepicker, MbscDatepickerChangeEvent, Page, setOptions /* localeImport */ } from '@mobiscroll/react';
import moment from 'moment';
import { FC, useCallback, useMemo, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [dateObj, setDateObj] = useState<Date[]>();
  const [iso, setISO] = useState<string[]>();
  const [momentObj, setMomentObj] = useState<object[]>();

  const objString = useMemo(() => (dateObj ? dateObj.toString() : null), [dateObj]);
  const momentString = useMemo(() => (momentObj ? momentObj[0].toString() + ' - ' + momentObj[1].toString() : null), [momentObj]);

  const setCustomObj = useCallback(() => {
    setDateObj([new Date(2020, 10, 15), new Date(2020, 10, 21)]);
  }, []);

  const setCustomISO = useCallback(() => {
    setISO(['2020-05-20', '2020-05-26']);
  }, []);

  const setCustomMoment = useCallback(() => {
    setMomentObj([moment([2020, 2, 6]), moment([2020, 2, 12])]);
  }, []);

  const handleDateObjChange = useCallback((ev: MbscDatepickerChangeEvent) => {
    setDateObj(ev.value as Date[]);
  }, []);

  const handleIsoChange = useCallback((ev: MbscDatepickerChangeEvent) => {
    setISO(ev.value as string[]);
  }, []);

  const handleMomentChange = useCallback((ev: MbscDatepickerChangeEvent) => {
    setMomentObj(ev.value as object[]);
  }, []);

  return (
    <Page>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Working with Js Date Objects</div>
        <div className="mbsc-button-group-block">
          <Button onClick={setCustomObj}>Set: Sun Nov 15 2020 - Sat Nov 21 2020</Button>
        </div>
        <Datepicker
          controls={['calendar']}
          select="range"
          value={dateObj}
          onChange={handleDateObjChange}
          inputStyle="outline"
          label="Date object"
          labelStyle="stacked"
        />
      </div>
      <div className="mbsc-padding">Return value: {objString}</div>

      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Working with Date strings</div>
        <div className="mbsc-button-group-block">
          <Button onClick={setCustomISO}>Set: 2020-05-20 - 2020-05-26</Button>
        </div>
        <Datepicker
          controls={['calendar']}
          select="range"
          returnFormat="iso8601"
          value={iso}
          onChange={handleIsoChange}
          inputStyle="outline"
          label="ISO string"
          labelStyle="stacked"
        />
      </div>
      <div className="mbsc-padding">Return value: {iso}</div>

      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Working with Moment JS Objects</div>
        <div className="mbsc-button-group-block">
          <Button onClick={setCustomMoment}>Set: 2020-03-06 - 2020-03-12</Button>
        </div>
        <Datepicker
          controls={['calendar']}
          select="range"
          returnFormat="moment"
          value={momentObj}
          onChange={handleMomentChange}
          inputStyle="outline"
          label="Moment JS"
          labelStyle="stacked"
        />
      </div>
      <div className="mbsc-padding">Return value: {momentString}</div>
    </Page>
  );
};

export default App;
