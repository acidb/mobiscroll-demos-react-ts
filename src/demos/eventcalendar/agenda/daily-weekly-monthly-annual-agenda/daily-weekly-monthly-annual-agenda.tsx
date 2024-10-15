import { Eventcalendar, getJson, MbscCalendarEvent, MbscEventcalendarView, Page, setOptions /* localeImport */ } from '@mobiscroll/react';
import { FC, useEffect, useMemo, useState } from 'react';

setOptions({
  // localeJs,
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);

  const dayView = useMemo<MbscEventcalendarView>(() => ({ agenda: { type: 'day' } }), []);
  const weekView = useMemo<MbscEventcalendarView>(() => ({ agenda: { type: 'week' } }), []);
  const monthView = useMemo<MbscEventcalendarView>(() => ({ agenda: { type: 'month' } }), []);

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
              <div className="mbsc-form-group-title">Daily agenda</div>
              <Eventcalendar view={dayView} data={myEvents} />
            </div>
          </div>
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Weekly agenda</div>
              <Eventcalendar view={weekView} data={myEvents} />
            </div>
          </div>
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Monthly agenda</div>
              <Eventcalendar view={monthView} data={myEvents} />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
export default App;
