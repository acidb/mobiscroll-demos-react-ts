import {
  Button,
  Eventcalendar,
  MbscCalendarEvent,
  MbscDateType,
  MbscEventcalendarView,
  MbscSelectedDateChangeEvent,
  Page,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import moment from 'moment';
import { FC, useCallback, useMemo, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [selectedDateObj, setSelectedDateObj] = useState<MbscDateType>(new Date(2020, 4, 19));
  const [selectedDateISO, setSelectedDateISO] = useState<MbscDateType>('2020-05-20');
  const [selectedDateMoment, setSelectedDateMoment] = useState<MbscDateType>(moment([2020, 4, 21]));

  const [dateObjEvents, setDateObjData] = useState<MbscCalendarEvent[]>([
    {
      start: new Date(2020, 4, 19, 7),
      end: new Date(2020, 4, 19, 8),
      title: 'General orientation',
      color: '#35bb5a',
    },
  ]);

  const [dateISOEvents, setISOData] = useState<MbscCalendarEvent[]>([
    {
      start: '2020-05-20T07:00:00',
      end: '2020-05-20T08:00:00',
      title: 'Clever Conference',
      color: '#a71111',
    },
  ]);

  const [dateMomentEvents, setMomentData] = useState<MbscCalendarEvent[]>([
    {
      start: moment([2020, 4, 21, 7]),
      end: moment([2020, 4, 21, 8]),
      title: 'Product team mtg.',
      color: '#913aa7',
    },
  ]);

  const myView = useMemo<MbscEventcalendarView>(() => ({ schedule: { type: 'week' } }), []);

  const addDateObjEvent = useCallback(() => {
    const newEvent = {
      start: new Date(2020, 4, 19, 10, 45),
      end: new Date(2020, 4, 19, 11, 45),
      text: 'New Event',
    };
    setDateObjData((dateObjData) => [...dateObjData, newEvent]);
    setSelectedDateObj(new Date(2020, 4, 19));
  }, []);

  const addDateISOEvent = useCallback(() => {
    const newEvent = {
      start: '2020-05-20T12:30:00',
      end: '2020-05-20T13:00:00',
      text: 'New Event',
    };
    setISOData((isoData) => [...isoData, newEvent]);
    setSelectedDateISO('2020-05-20');
  }, []);

  const addDateMomentEvent = useCallback(() => {
    const newEvent = {
      start: moment([2020, 4, 21, 11]),
      end: moment([2020, 4, 21, 14]),
      text: 'New Event',
    };
    setMomentData((momentData) => [...momentData, newEvent]);
    setSelectedDateMoment(moment([2020, 4, 21]));
  }, []);

  const handleSelectedDateObjChange = useCallback((args: MbscSelectedDateChangeEvent) => {
    setSelectedDateObj(args.date);
  }, []);

  const handleSelectedDateISOChange = useCallback((args: MbscSelectedDateChangeEvent) => {
    setSelectedDateISO(args.date);
  }, []);

  const handleSelectedDateMomentChange = useCallback((args: MbscSelectedDateChangeEvent) => {
    setSelectedDateMoment(args.date);
  }, []);

  return (
    <Page>
      <div className="mbsc-grid">
        <div className="mbsc-row">
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Date object</div>
              <div className="mbsc-button-group-block">
                <Button onClick={addDateObjEvent}>
                  start: new Date(2020, 4, 19, 10, 45)
                  <br />
                  end: new Date(2020, 4, 19, 11, 45)
                </Button>
              </div>
              <Eventcalendar
                // drag
                data={dateObjEvents}
                view={myView}
                selectedDate={selectedDateObj}
                onSelectedDateChange={handleSelectedDateObjChange}
              />
            </div>
          </div>
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">ISO 8601 date string</div>
              <div className="mbsc-button-group-block">
                <Button onClick={addDateISOEvent}>
                  start: &apos;2020-05-20T12:30:00&apos;
                  <br />
                  end: &apos;2020-05-20T13:00:00&apos;
                </Button>
              </div>
              <Eventcalendar
                // drag
                data={dateISOEvents}
                view={myView}
                selectedDate={selectedDateISO}
                onSelectedDateChange={handleSelectedDateISOChange}
              />
            </div>
          </div>
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Moment.js object</div>
              <div className="mbsc-button-group-block">
                <Button onClick={addDateMomentEvent}>
                  start: moment([2020, 4, 21, 11])
                  <br />
                  end: moment([2020, 4, 21, 14])
                </Button>
              </div>
              <Eventcalendar
                // drag
                data={dateMomentEvents}
                view={myView}
                selectedDate={selectedDateMoment}
                onSelectedDateChange={handleSelectedDateMomentChange}
              />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default App;
