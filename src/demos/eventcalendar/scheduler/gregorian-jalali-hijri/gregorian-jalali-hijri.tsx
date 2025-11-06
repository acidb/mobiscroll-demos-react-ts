import {
  Eventcalendar,
  getJson,
  hijriCalendar,
  jalaliCalendar,
  localeAr,
  localeFa,
  MbscCalendarEvent,
  MbscEventcalendarView,
  Page,
  setOptions /* localeImport */,
} from '@mobiscroll/react';
import { FC, useEffect, useMemo, useState } from 'react';

setOptions({
  // themeJs
});

const App: FC = () => {
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      schedule: { type: 'day' },
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
              <div className="mbsc-form-group-title">Gregorian calendar</div>
              <Eventcalendar
                // drag
                data={myEvents}
                view={myView}
              />
            </div>
          </div>
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Jalali calendar</div>
              <Eventcalendar
                // drag
                data={myEvents}
                view={myView}
                calendarSystem={jalaliCalendar}
                locale={localeFa}
              />
            </div>
          </div>
          <div className="mbsc-col-sm-12 mbsc-col-md-4">
            <div className="mbsc-form-group">
              <div className="mbsc-form-group-title">Hijri calendar</div>
              <Eventcalendar
                // drag
                data={myEvents}
                view={myView}
                calendarSystem={hijriCalendar}
                locale={localeAr}
              />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
export default App;
