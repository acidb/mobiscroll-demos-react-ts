import {
  CalendarNav,
  CalendarNext,
  CalendarPrev,
  CalendarToday,
  Datepicker,
  formatDate,
  getJson,
  MbscCalendarColor,
  MbscCalendarLabel,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { FC, useCallback, useEffect, useState } from 'react';
import './book-rental-months-ahead.css';

setOptions({
  // localeJs,
  // themeJs
});

const now = new Date();

const App: FC = () => {
  const [labels, setLabels] = useState<MbscCalendarLabel[]>([]);
  const [invalid, setInvalid] = useState([]);
  const [colors, setColors] = useState<MbscCalendarColor[]>([]);

  const getColors = useCallback(
    (start: Date, end: Date) => [
      {
        date: start,
        cellCssClass: 'vacation-check-in',
      },
      {
        date: end,
        cellCssClass: 'vacation-check-out',
      },
      {
        start: new Date(start.getFullYear(), start.getMonth(), start.getDate() + 1),
        end: new Date(end.getFullYear(), end.getMonth(), end.getDate() - 1),
        background: '#ffbaba80',
        cellCssClass: 'vacation-booked',
      },
    ],
    [],
  );

  const calendarHeader = useCallback(
    () => (
      <>
        <CalendarNav />
        <div className="md-book-rental-header">
          <div className="md-book-rental-zone md-book-rental-pre">pre-season</div>
          <div className="md-book-rental-zone md-book-rental-in">in-season</div>
          <div className="md-book-rental-zone md-book-rental-off">off-season</div>
          <div className="md-book-rental-zone md-book-rental-booked">booked</div>
        </div>
        <CalendarPrev />
        <CalendarToday />
        <CalendarNext />
      </>
    ),
    [],
  );

  useEffect(() => {
    const monthColors: MbscCalendarColor[] = [
      {
        background: '#b2f1c080',
        start: 'dyndatetime(y,1,1)',
        end: 'dyndatetime(y,1,31)',
        cellCssClass: 'md-book-rental-bg-off',
        recurring: {
          repeat: 'yearly',
          month: 1,
          day: 1,
        },
      },
      {
        background: '#b2f1c080',
        start: 'dyndatetime(y,2,1)',
        end: 'dyndatetime(y,2,28)',
        cellCssClass: 'md-book-rental-bg-off',
        recurring: {
          repeat: 'yearly',
          month: 2,
          day: 1,
        },
      },
      {
        background: '#b2f1c080',
        cellCssClass: 'md-book-rental-bg-off',
        recurring: {
          repeat: 'yearly',
          month: 2,
          day: 29,
        },
      },
      {
        background: '#a3cdff80',
        start: 'dyndatetime(y,3,1)',
        end: 'dyndatetime(y,3,31,23,59)',
        cellCssClass: 'md-book-rental-bg-pre',
        recurring: {
          repeat: 'yearly',
          month: 3,
          day: 1,
        },
      },
      {
        background: '#a3cdff80',
        start: 'dyndatetime(y,4,1)',
        end: 'dyndatetime(y,4,30)',
        cellCssClass: 'md-book-rental-bg-pre',
        recurring: {
          repeat: 'yearly',
          month: 4,
          day: 1,
        },
      },
      {
        background: '#a3cdff80',
        start: 'dyndatetime(y,5,1)',
        end: 'dyndatetime(y,5,31)',
        cellCssClass: 'md-book-rental-bg-pre',
        recurring: {
          repeat: 'yearly',
          month: 5,
          day: 1,
        },
      },
      {
        background: '#f7f7bb80',
        start: 'dyndatetime(y,6,1)',
        end: 'dyndatetime(y,6,30)',
        cellCssClass: 'md-book-rental-bg-in',
        recurring: {
          repeat: 'yearly',
          month: 6,
          day: 1,
        },
      },
      {
        background: '#f7f7bb80',
        start: 'dyndatetime(y,7,1)',
        end: 'dyndatetime(y,7,31)',
        cellCssClass: 'md-book-rental-bg-in',
        recurring: {
          repeat: 'yearly',
          month: 7,
          day: 1,
        },
      },
      {
        background: '#f7f7bb80',
        start: 'dyndatetime(y,8,1)',
        end: 'dyndatetime(y,8,31)',
        cellCssClass: 'md-book-rental-bg-in',
        recurring: {
          repeat: 'yearly',
          month: 8,
          day: 1,
        },
      },
      {
        background: '#f7f7bb80',
        start: 'dyndatetime(y,9,1)',
        end: 'dyndatetime(y,9,30)',
        cellCssClass: 'md-book-rental-bg-in',
        recurring: {
          repeat: 'yearly',
          month: 9,
          day: 1,
        },
      },
      {
        background: '#f7f7bb80',
        start: 'dyndatetime(y,10,1)',
        end: 'dyndatetime(y,10,31,23,59)',
        cellCssClass: 'md-book-rental-bg-in',
        recurring: {
          repeat: 'yearly',
          month: 10,
          day: 1,
        },
      },
      {
        background: '#b2f1c080',
        start: 'dyndatetime(y,11,1)',
        end: 'dyndatetime(y,11,30)',
        cellCssClass: 'md-book-rental-bg-off',
        recurring: {
          repeat: 'yearly',
          month: 11,
          day: 1,
        },
      },
      {
        background: '#b2f1c080',
        start: 'dyndatetime(y,12,1)',
        end: 'dyndatetime(y,12,31)',
        cellCssClass: 'md-book-rental-bg-off',
        recurring: {
          repeat: 'yearly',
          month: 12,
          day: 1,
        },
      },
    ];

    getJson(
      'https://trial.mobiscroll.com/getrentals/?year=' + now.getFullYear() + '&month=' + now.getMonth(),
      (data) => {
        const prices = data.prices;
        const bookings = data.bookings;
        const labels: Array<MbscCalendarLabel> = [];
        const invalids: Array<object> = [];
        let colors: Array<MbscCalendarColor> = [];
        let endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0);

        for (let i = 0; i < prices.length; ++i) {
          const price = prices[i];
          const booked = bookings.find((b: { checkIn: string }) => formatDate('YYYY-M-D', new Date(b.checkIn)) === price.date);
          if (booked) {
            const checkIn = new Date(booked.checkIn);
            const checkOut = new Date(booked.checkOut);
            const newCheckOut = new Date(checkOut.getFullYear(), checkOut.getMonth(), checkOut.getDate() - 1);
            colors = [...colors, ...getColors(checkIn, checkOut)];
            labels.push({
              start: checkIn,
              end: newCheckOut,
              text: 'booked',
              textColor: '#1e1e1ecc',
            });
            invalids.push({
              start: checkIn,
              end: newCheckOut,
            });
            endDate = checkOut;
          } else if (new Date(price.date) >= endDate) {
            labels.push({
              date: new Date(price.date),
              text: price.text,
              textColor: price.textColor,
            });
          }
        }
        setLabels(labels);
        setInvalid(invalid);
        setColors([...colors, ...monthColors]);
      },
      'jsonp',
    );
  }, [getColors, invalid]);

  return (
    <Datepicker
      cssClass="md-book-rental"
      controls={['calendar']}
      select="range"
      display="inline"
      calendarType="month"
      calendarSize={6}
      min="dyndatetime(y,m,d)"
      showRangeLabels={false}
      inRangeInvalid={false}
      rangeEndInvalid={true}
      renderCalendarHeader={calendarHeader}
      labels={labels}
      invalid={invalid}
      colors={colors}
    />
  );
};
export default App;
