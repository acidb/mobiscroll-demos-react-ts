import { Eventcalendar, getJson, MbscCalendarEvent, MbscEventcalendarView, Page, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useEffect, useMemo, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);

  const oneWeekView = useMemo<MbscEventcalendarView>(
    () => ({
      calendar: { type: 'week' },
    }),
    [],
  );

  const twoWeekView = useMemo<MbscEventcalendarView>(
    () => ({
      calendar: { type: 'week', size: 2 },
    }),
    [],
  );

  const threeWeekView = useMemo<MbscEventcalendarView>(
    () => ({
      calendar: { type: 'week', size: 3 },
    }),
    [],
  );

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      (events: MbscCalendarEvent[]) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <Page>
      <div className="mbsc-grid">
        <div className="mbsc-row">
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">One week view</div>
              <Eventcalendar view={oneWeekView} data={myEvents} />
            </div>
          </div>
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Two week view</div>
              <Eventcalendar view={twoWeekView} data={myEvents} />
            </div>
          </div>
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Three week view</div>
              <Eventcalendar view={threeWeekView} data={myEvents} />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
export default App;
