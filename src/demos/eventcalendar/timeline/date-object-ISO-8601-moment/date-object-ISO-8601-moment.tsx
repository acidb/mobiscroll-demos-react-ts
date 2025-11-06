import {
  Button,
  Eventcalendar,
  MbscCalendarEvent,
  MbscDateType,
  MbscEventcalendarView,
  MbscResource,
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
      resource: 2,
    },
  ]);

  const [dateISOEvents, setISOData] = useState<MbscCalendarEvent[]>([
    {
      start: '2020-05-20T07:00:00',
      end: '2020-05-20T08:00:00',
      title: 'Clever Conference',
      resource: 2,
    },
  ]);

  const [dateMomentEvents, setMomentData] = useState<MbscCalendarEvent[]>([
    {
      start: moment([2020, 4, 21, 7]),
      end: moment([2020, 4, 21, 8]),
      title: 'Product team mtg.',
      resource: 2,
    },
  ]);

  const myView = useMemo<MbscEventcalendarView>(() => ({ timeline: { type: 'day' } }), []);

  const myResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: 'Resource A',
        color: '#fdf500',
      },
      {
        id: 2,
        name: 'Resource B',
        color: '#ff0101',
      },
      {
        id: 3,
        name: 'Resource C',
        color: '#01adff',
      },
      {
        id: 4,
        name: 'Resource D',
        color: '#239a21',
      },
      {
        id: 5,
        name: 'Resource E',
        color: '#ff4600',
      },
    ],
    [],
  );

  const addDateObjEvent = useCallback(() => {
    const newEvent = {
      start: new Date(2020, 4, 19, 10, 45),
      end: new Date(2020, 4, 19, 11, 45),
      text: 'New Event',
      resource: 4,
    };
    setDateObjData((dateObjData) => [...dateObjData, newEvent]);
    setSelectedDateObj(new Date(2020, 4, 19));
  }, []);

  const addDateISOEvent = useCallback(() => {
    const newEvent = {
      start: '2020-05-20T12:30:00',
      end: '2020-05-20T13:00:00',
      text: 'New Event',
      resource: 1,
    };
    setISOData((isoData) => [...isoData, newEvent]);
    setSelectedDateISO('2020-05-20');
  }, []);

  const addDateMomentEvent = useCallback(() => {
    const newEvent = {
      start: moment([2020, 4, 21, 11]),
      end: moment([2020, 4, 21, 14]),
      text: 'New Event',
      resource: 5,
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
                resources={myResources}
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
                resources={myResources}
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
                resources={myResources}
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
