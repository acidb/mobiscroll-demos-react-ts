import { Datepicker, MbscDatepickerChangeEvent, MbscDateType, Page, setOptions /* localeImport */ } from '@mobiscroll/react';
import { useCallback, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const currentWeek = ['dyndatetime(y,m,d)', 'dyndatetime(y,m,d+6)'];
const currentTime = ['dyndatetime(y,m,d,h)', 'dyndatetime(y,m,d,h+2)'];

function App() {
  const [rangeValue, setRangeValue] = useState<MbscDateType[]>(currentWeek);
  const [separatorValue, setSeparatorValue] = useState<MbscDateType[]>(currentWeek);
  const [monthValue, setMonthValue] = useState<MbscDateType[]>(currentWeek);
  const [dayValue, setDayValue] = useState<MbscDateType[]>(currentWeek);
  const [atomValue, setAtomValue] = useState<MbscDateType[]>(currentWeek);
  const [cookieValue, setCookieValue] = useState<MbscDateType[]>(currentWeek);
  const [timeValue, setTimeValue] = useState<MbscDateType[]>(currentTime);
  const [h12Value, setH12Value] = useState<MbscDateType[]>(currentTime);
  const [h24Value, setH24Value] = useState<MbscDateType[]>(currentTime);
  const [hmsValue, setHmsValue] = useState<MbscDateType[]>(currentTime);
  const [dateTimeValue, setDateTimeValue] = useState<MbscDateType[]>(currentTime);
  const [dayNameValue, setDayNameValue] = useState<MbscDateType[]>(currentTime);

  const changeRange = useCallback((args: MbscDatepickerChangeEvent) => {
    setRangeValue(args.value as MbscDateType[]);
  }, []);
  const changeSeparator = useCallback((args: MbscDatepickerChangeEvent) => {
    setSeparatorValue(args.value as MbscDateType[]);
  }, []);
  const changeMonth = useCallback((args: MbscDatepickerChangeEvent) => {
    setMonthValue(args.value as MbscDateType[]);
  }, []);
  const changeDay = useCallback((args: MbscDatepickerChangeEvent) => {
    setDayValue(args.value as MbscDateType[]);
  }, []);
  const changeAtom = useCallback((args: MbscDatepickerChangeEvent) => {
    setAtomValue(args.value as MbscDateType[]);
  }, []);
  const changeCookie = useCallback((args: MbscDatepickerChangeEvent) => {
    setCookieValue(args.value as MbscDateType[]);
  }, []);
  const changeTime = useCallback((args: MbscDatepickerChangeEvent) => {
    setTimeValue(args.value as MbscDateType[]);
  }, []);
  const changeH12 = useCallback((args: MbscDatepickerChangeEvent) => {
    setH12Value(args.value as MbscDateType[]);
  }, []);
  const changeH24 = useCallback((args: MbscDatepickerChangeEvent) => {
    setH24Value(args.value as MbscDateType[]);
  }, []);
  const changeHms = useCallback((args: MbscDatepickerChangeEvent) => {
    setHmsValue(args.value as MbscDateType[]);
  }, []);
  const changeDateTime = useCallback((args: MbscDatepickerChangeEvent) => {
    setDateTimeValue(args.value as MbscDateType[]);
  }, []);
  const changeDayName = useCallback((args: MbscDatepickerChangeEvent) => {
    setDayNameValue(args.value as MbscDateType[]);
  }, []);
  return (
    <Page>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Date</div>
        <Datepicker
          controls={['calendar']}
          select="range"
          value={rangeValue}
          onChange={changeRange}
          inputProps={{
            label: 'Default',
          }}
        />
        <Datepicker
          controls={['calendar']}
          select="range"
          value={separatorValue}
          onChange={changeSeparator}
          dateFormat="DD.MM.YYYY"
          inputProps={{
            label: 'Separator',
          }}
        />
        <Datepicker
          controls={['calendar']}
          select="range"
          value={monthValue}
          onChange={changeMonth}
          dateFormat="D MMMM YYYY"
          inputProps={{
            label: 'Month name',
          }}
        />
        <Datepicker
          controls={['calendar']}
          select="range"
          value={dayValue}
          onChange={changeDay}
          dateFormat="DDD DD MMM, YYYY"
          inputProps={{
            label: 'Day of week',
          }}
        />
        <Datepicker
          controls={['calendar']}
          select="range"
          value={atomValue}
          onChange={changeAtom}
          dateFormat="YYYY-MM-DD"
          inputProps={{
            label: 'ATOM',
          }}
        />
        <Datepicker
          controls={['calendar']}
          select="range"
          value={cookieValue}
          onChange={changeCookie}
          dateFormat="DDD, DD MMM YYYY"
          inputProps={{
            label: 'COOKIE',
          }}
        />
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Time</div>
        <Datepicker
          controls={['time']}
          select="range"
          value={timeValue}
          onChange={changeTime}
          inputProps={{
            label: 'Default time',
          }}
        />
        <Datepicker
          controls={['time']}
          select="range"
          value={h12Value}
          onChange={changeH12}
          timeFormat="hh:mm A"
          inputProps={{
            label: '12h',
          }}
        />
        <Datepicker
          controls={['time']}
          select="range"
          value={h24Value}
          onChange={changeH24}
          timeFormat="HH:mm"
          inputProps={{
            label: '24h',
          }}
        />
        <Datepicker
          controls={['time']}
          select="range"
          value={hmsValue}
          onChange={changeHms}
          timeFormat="HH:mm:ss"
          inputProps={{
            label: 'Hour, min, sec',
          }}
        />
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Date & time</div>
        <Datepicker
          controls={['calendar', 'time']}
          select="range"
          value={dateTimeValue}
          onChange={changeDateTime}
          inputProps={{
            label: 'Default date & time',
          }}
        />
        <Datepicker
          controls={['calendar', 'time']}
          select="range"
          value={dayNameValue}
          onChange={changeDayName}
          dateFormat="DDD D MMM, YYYY"
          timeFormat="H:mm"
          dateWheels="|DDD D MMM, YYYY|"
          inputProps={{
            label: 'Day name',
          }}
        />
      </div>
    </Page>
  );
}
export default App;
