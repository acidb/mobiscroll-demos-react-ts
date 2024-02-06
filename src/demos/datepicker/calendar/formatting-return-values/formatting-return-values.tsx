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
        <Datepicker label="Default" />
        <Datepicker dateFormat="DD.MM.YYYY" label="Separator" />
        <Datepicker dateFormat="MMMM" label="Month only" />
        <Datepicker dateFormat="D MMMM YYYY" label="Month name" />
        <Datepicker dateFormat="MM/YYYY" label="Month/year" />
        <Datepicker dateFormat="DDD DD MMM, YYYY" label="Day of week" />
        <Datepicker dateFormat="YYYY-MM-DD" label="ATOM" />
        <Datepicker dateFormat="DDD, DD MMM YYYY" label="COOKIE" />
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
        <Datepicker controls={['calendar', 'time']} label="Default date & time" />
        <Datepicker
          controls={['calendar', 'time']}
          dateFormat="DDD D MMM, YYYY"
          dateWheels="|DDD D MMM, YYYY|"
          timeFormat="H:mm"
          label="Day name"
        />
      </div>
    </Page>
  );
}

export default App;
