import { Datepicker, Page, setOptions /* localeImport */ } from '@mobiscroll/react';

setOptions({
  // localeJs,
  // themeJs
});

function App() {
  return (
    <Page>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Date</div>
        <Datepicker controls={['date']} label="Default" />
        <Datepicker controls={['date']} dateFormat="DD.MM.YYYY" label="Separator" />
        <Datepicker controls={['date']} dateFormat="MMMM" label="Month only" />
        <Datepicker controls={['date']} dateFormat="D MMMM YYYY" label="Month name" />
        <Datepicker controls={['date']} dateFormat="MM/YYYY" label="Month/year" />
        <Datepicker controls={['date']} dateFormat="DDD DD MMM, YYYY" label="Day of week" />
        <Datepicker controls={['date']} dateFormat="YYYY-MM-DD" label="ATOM" />
        <Datepicker controls={['date']} dateFormat="DDD, DD MMM YYYY" label="COOKIE" />
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Time</div>
        <Datepicker controls={['time']} label="Default time" />
        <Datepicker controls={['time']} timeFormat="hh:mm A" label="12h" />
        <Datepicker controls={['time']} timeFormat="HH:mm" label="24h" />
        <Datepicker controls={['time']} timeFormat="HH:mm:ss" label="Hour, min, sec" />
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Date & time</div>
        <Datepicker controls={['date', 'time']} label="Default date & time" />
        <Datepicker
          controls={['date', 'time']}
          dateFormat="DDD D MMM, YYYY"
          timeFormat="H:mm"
          dateWheels="|DDD D MMM, YYYY|"
          label="Day name"
        />
      </div>
    </Page>
  );
}
export default App;
