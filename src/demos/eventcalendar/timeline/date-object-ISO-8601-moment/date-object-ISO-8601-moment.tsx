import {
  Button,
  Eventcalendar,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscResource,
  Page,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import moment from 'moment';
import { FC, useCallback, useMemo, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const myResources: MbscResource[] = [
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
];

const App: FC = () => {
  const [dateObjData, setDateObjData] = useState<MbscCalendarEvent[]>([
    {
      start: new Date(2020, 4, 19, 9),
      end: new Date(2020, 4, 19, 11),
      title: 'General orientation',
      resource: 2,
    },
  ]);
  const [selectedObj, setSelectedObj] = useState<Date>(new Date(2020, 4, 19));

  const [isoData, setISOData] = useState<MbscCalendarEvent[]>([
    {
      start: '2020-05-20T09:00:00',
      end: '2020-05-20T11:00:00',
      title: 'Clever Conference',
      resource: 2,
    },
  ]);
  const [selectedISO, setSelectedISO] = useState<string>('2020-05-20');

  const [momentData, setMomentData] = useState<MbscCalendarEvent[]>([
    {
      start: moment([2020, 4, 21, 9]),
      end: moment([2020, 4, 21, 11]),
      title: 'Product team mtg.',
      resource: 2,
    },
  ]);
  const [selectedMoment, setSelectedMoment] = useState<object>(moment([2020, 4, 21]));

  const addDate = useCallback(() => {
    const newEvent = {
      start: new Date(2020, 4, 19, 11, 15),
      end: new Date(2020, 4, 19, 13, 45),
      text: 'New Event',
      resource: 4,
    };
    setDateObjData((dateObjData) => [...dateObjData, newEvent]);
    setSelectedObj(new Date(2020, 4, 19));
  }, []);

  const addISO = useCallback(() => {
    const newEvent = {
      start: '2020-05-20T15:30:00',
      end: '2020-05-20T18:00:00',
      text: 'New Event',
      resource: 1,
    };
    setISOData((isoData) => [...isoData, newEvent]);
    setSelectedISO('2020-05-20');
  }, []);

  const addMoment = useCallback(() => {
    const newEvent = {
      start: moment([2020, 4, 21, 12]),
      end: moment([2020, 4, 21, 15]),
      text: 'New Event',
      resource: 5,
    };
    setMomentData((momentData) => [...momentData, newEvent]);
    setSelectedMoment(moment([2020, 4, 21]));
  }, []);

  const myView = useMemo<MbscEventcalendarView>(() => ({ timeline: { type: 'day' } }), []);

  return (
    <Page>
      <div className="mbsc-grid">
        <div className="mbsc-row">
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Date object</div>
              <div className="mbsc-button-group-block">
                <Button onClick={addDate}>
                  start: new Date(2020, 4, 19, 11, 15) <br /> end: new Date(2020, 4, 19, 13, 45)
                </Button>
              </div>
              <Eventcalendar data={dateObjData} resources={myResources} view={myView} selectedDate={selectedObj} />
            </div>
          </div>
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">ISO string</div>
              <div className="mbsc-button-group-block">
                <Button onClick={addISO}>
                  start: 2020-05-20T15:30:00 <br /> end: 2020-05-20T18:00:00
                </Button>
              </div>
              <Eventcalendar data={isoData} resources={myResources} view={myView} selectedDate={selectedISO} />
            </div>
          </div>
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Moment js</div>
              <div className="mbsc-button-group-block">
                <Button onClick={addMoment}>
                  start: moment([2020, 4, 21, 12]) <br /> end: moment([2020, 4, 21, 15])
                </Button>
              </div>
              <Eventcalendar data={momentData} resources={myResources} view={myView} selectedDate={selectedMoment} />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
export default App;
