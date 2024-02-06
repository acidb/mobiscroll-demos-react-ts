import { Button, Eventcalendar, MbscCalendarEvent, MbscEventcalendarView, Page, setOptions /* localeImport */ } from '@mobiscroll/react';
import moment from 'moment';
import { FC, useCallback, useMemo, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [dateObjData, setDateObjData] = useState<MbscCalendarEvent[]>([
    {
      start: new Date(2020, 4, 19, 7),
      end: new Date(2020, 4, 19, 8),
      title: 'General orientation',
      color: '#35bb5a',
    },
  ]);
  const [selectedObj, setSelectedObj] = useState(new Date(2020, 4, 19));

  const [isoData, setISOData] = useState<MbscCalendarEvent[]>([
    {
      start: '2020-05-20T07:00:00',
      end: '2020-05-20T08:00:00',
      title: 'Clever Conference',
      color: '#a71111',
    },
  ]);
  const [selectedISO, setSelectedISO] = useState('2020-05-20');

  const [momentData, setMomentData] = useState<MbscCalendarEvent[]>([
    {
      start: moment([2020, 4, 21, 7]),
      end: moment([2020, 4, 21, 8]),
      title: 'Product team mtg.',
      color: '#913aa7',
    },
  ]);
  const [selectedMoment, setSelectedMoment] = useState(moment([2020, 4, 21]));

  const addDate = useCallback(() => {
    const newEvent = {
      start: new Date(2020, 4, 19, 10, 45),
      end: new Date(2020, 4, 19, 11, 45),
      text: 'New Event',
    };
    setDateObjData([...dateObjData, newEvent]);
    setSelectedObj(new Date(2020, 4, 19));
  }, [dateObjData]);

  const addISO = useCallback(() => {
    const newEvent = {
      start: '2020-05-20T12:30:00',
      end: '2020-05-20T13:00:00',
      text: 'New Event',
    };
    setISOData([...isoData, newEvent]);
    setSelectedISO('2020-05-20');
  }, [isoData]);

  const addMoment = useCallback(() => {
    const newEvent = {
      start: moment([2020, 4, 21, 11]),
      end: moment([2020, 4, 21, 14]),
      text: 'New Event',
    };
    setMomentData([...momentData, newEvent]);
    setSelectedMoment(moment([2020, 4, 21]));
  }, [momentData]);

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      calendar: {
        type: 'month',
        popover: true,
        count: true,
      },
    }),
    [],
  );

  return (
    <Page>
      <div className="mbsc-grid">
        <div className="mbsc-row">
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Date object</div>
              <div className="mbsc-button-group-block">
                <Button onClick={addDate}>
                  start: new Date(2020, 4, 19, 10, 45) <br /> end: new Date(2020, 4, 19, 11, 45)
                </Button>
              </div>
              <Eventcalendar data={dateObjData} view={myView} selectedDate={selectedObj} />
            </div>
          </div>
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">ISO string</div>
              <div className="mbsc-button-group-block">
                <Button onClick={addISO}>
                  start: 2020-05-20T12:30:00 <br /> end: 2020-05-20T13:00:00
                </Button>
              </div>
              <Eventcalendar data={isoData} view={myView} selectedDate={selectedISO} />
            </div>
          </div>
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Moment js</div>
              <div className="mbsc-button-group-block">
                <Button onClick={addMoment}>
                  start: moment([2020, 4, 21, 11]) <br /> end: moment([2020, 4, 21, 14])
                </Button>
              </div>
              <Eventcalendar data={momentData} view={myView} selectedDate={selectedMoment} />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
export default App;
