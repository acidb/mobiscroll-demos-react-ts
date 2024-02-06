import {
  Datepicker,
  getJson,
  MbscCalendarLabel,
  MbscDatepickerChangeEvent,
  MbscDatepickerPageLoadingEvent,
  MbscDateType,
  Page,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useState } from 'react';
import './appointment-booking.css';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [multiple, setMultiple] = useState<MbscDateType[]>(['dyndatetime(y,m,11)', 'dyndatetime(y,m,16)', 'dyndatetime(y,m,17)']);
  const min = 'dyndatetime(y,m,d)';
  const max = 'dyndatetime(y,m+6,d)';
  const [singleLabels, setSingleLabels] = useState<MbscCalendarLabel[]>([]);
  const [singleInvalid, setSingleInvalid] = useState<Array<object>>([]);
  const [datetimeLabels, setDatetimeLabels] = useState<MbscCalendarLabel[]>([]);
  const [datetimeInvalid, setDatetimeInvalid] = useState<Array<object>>([]);
  const [multipleLabels, setMultipleLabels] = useState<MbscCalendarLabel[]>([]);
  const [multipleInvalid, setMultipleInvalid] = useState<Array<object>>([]);

  const handlePageLoadingSingle = useCallback((args: MbscDatepickerPageLoadingEvent) => {
    const d = args.firstDay;
    const invalid: Array<object> = [];
    const labels: MbscCalendarLabel[] = [];

    getJson(
      'https://trial.mobiscroll.com/getprices/?year=' + d.getFullYear() + '&month=' + d.getMonth(),
      (bookings) => {
        for (let i = 0; i < bookings.length; ++i) {
          const booking = bookings[i];
          const d = new Date(booking.d);

          if (booking.price > 0) {
            labels.push({
              start: d,
              title: '$' + booking.price,
              textColor: '#e1528f',
            });
          } else {
            invalid.push(d);
          }
        }
        setSingleLabels(labels);
        setSingleInvalid(invalid);
      },
      'jsonp',
    );
  }, []);

  const handlePageLoadingDatetime = useCallback((args: MbscDatepickerPageLoadingEvent) => {
    const d = args.firstDay;
    const invalid: Array<object> = [];
    const labels: MbscCalendarLabel[] = [];

    getJson(
      'https://trial.mobiscroll.com/getbookingtime/?year=' + d.getFullYear() + '&month=' + d.getMonth(),
      (bookings) => {
        for (let i = 0; i < bookings.length; ++i) {
          const booking = bookings[i];
          const d = new Date(booking.d);

          if (booking.nr > 0) {
            labels.push({
              start: d,
              title: booking.nr + ' SPOTS',
              textColor: '#e1528f',
            });
            invalid.push(...booking.invalid);
          } else {
            invalid.push(d);
          }
        }
        setDatetimeLabels(labels);
        setDatetimeInvalid(invalid);
      },
      'jsonp',
    );
  }, []);

  const handlePageLoadingMultiple = useCallback((args: MbscDatepickerPageLoadingEvent) => {
    const d = args.firstDay;
    const invalid: Array<object> = [];
    const labels: MbscCalendarLabel[] = [];

    getJson(
      'https://trial.mobiscroll.com/getbookings/?year=' + d.getFullYear() + '&month=' + d.getMonth(),
      (bookings) => {
        for (let i = 0; i < bookings.length; ++i) {
          const booking = bookings[i];
          const d = new Date(booking.d);

          if (booking.nr > 0) {
            labels.push({
              start: d,
              title: booking.nr + ' SPOTS',
              textColor: '#e1528f',
            });
          } else {
            invalid.push(d);
          }
        }
        setMultipleLabels(labels);
        setMultipleInvalid(invalid);
      },
      'jsonp',
    );
  }, []);

  const handleChangeMultiple = useCallback((args: MbscDatepickerChangeEvent) => {
    setMultiple(args.value as MbscDateType[]);
  }, []);

  return (
    <Page className="md-calendar-booking">
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Single date & appointment booking</div>
        <Datepicker
          display="inline"
          controls={['calendar']}
          min={min}
          max={max}
          labels={singleLabels}
          invalid={singleInvalid}
          pages="auto"
          onPageLoading={handlePageLoadingSingle}
        />
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Select date & time</div>
        <Datepicker
          display="inline"
          controls={['calendar', 'timegrid']}
          min={min}
          max={max}
          minTime="08:00"
          maxTime="19:59"
          stepMinute={60}
          labels={datetimeLabels}
          invalid={datetimeInvalid}
          onPageLoading={handlePageLoadingDatetime}
          cssClass="booking-datetime"
        />
      </div>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Booking multiple appointments</div>
        <Datepicker
          display="inline"
          controls={['calendar']}
          value={multiple}
          min={min}
          max={max}
          labels={multipleLabels}
          invalid={multipleInvalid}
          pages="auto"
          selectMultiple={true}
          onChange={handleChangeMultiple}
          onPageLoading={handlePageLoadingMultiple}
        />
      </div>
    </Page>
  );
};
export default App;
