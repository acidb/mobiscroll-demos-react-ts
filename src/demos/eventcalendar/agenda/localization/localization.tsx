import { Dropdown, Eventcalendar, getJson, locale, MbscCalendarEvent, MbscEventcalendarView, Page, setOptions } from '@mobiscroll/react';
import { ChangeEvent, FC, useCallback, useEffect, useMemo, useState } from 'react';
import './localization.css';

setOptions({
  // themeJs
});

const App: FC = () => {
  const [localeStr, setLocaleStr] = useState('en');
  const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);

  const languages = useMemo(
    () => [
      { name: 'Arabic', value: 'ar' },
      { name: 'Bulgarian', value: 'bg' },
      { name: 'Catala', value: 'ca' },
      { name: 'Cestina', value: 'cs' },
      { name: 'Dansk', value: 'da' },
      { name: 'Deutsch', value: 'de' },
      { name: 'Greek', value: 'el' },
      { name: 'English', value: 'en' },
      { name: 'English-UK', value: 'en-GB' },
      { name: 'Espanol', value: 'es' },
      { name: 'Farsi', value: 'fa' },
      { name: 'Suomi', value: 'fi' },
      { name: 'Français', value: 'fr' },
      { name: 'Hebrew', value: 'he' },
      { name: 'Hindi', value: 'hi' },
      { name: 'Croatian', value: 'hr' },
      { name: 'Magyar', value: 'hu' },
      { name: 'Italiano', value: 'it' },
      { name: 'Japanese', value: 'ja' },
      { name: 'Korean', value: 'ko' },
      { name: 'Lietuvių', value: 'lt' },
      { name: 'Nederlands', value: 'nl' },
      { name: 'Norsk', value: 'no' },
      { name: 'Polski', value: 'pl' },
      { name: 'Português Brasileiro', value: 'pt-BR' },
      { name: 'Português Europeu', value: 'pt-PT' },
      { name: 'Română', value: 'ro' },
      { name: 'Russian UA', value: 'ru-UA' },
      { name: 'Russian', value: 'ru' },
      { name: 'Slovencina', value: 'sk' },
      { name: 'Serbian', value: 'sr' },
      { name: 'Svenska', value: 'sv' },
      { name: 'Thai', value: 'th' },
      { name: 'Türkçe', value: 'tr' },
      { name: 'Ukrainian', value: 'ua' },
      { name: 'Vietnamese', value: 'vi' },
      { name: 'Chinese', value: 'zh' },
    ],
    [],
  );

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      calendar: { type: 'week' },
      agenda: { type: 'day' },
    }),
    [],
  );

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setLocaleStr(event.target.value);
  }, []);

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
    <Page className="mds-full-height">
      <div className="mds-locale-cont mds-full-height mbsc-flex-col">
        <div className="mbsc-grid">
          <div className="mbsc-row">
            <div className="mbsc-col-sm-8">
              <Dropdown inputStyle="box" label="Locale" labelStyle="stacked" value={localeStr} onChange={handleChange}>
                {languages.map((lang) => (
                  <option key={lang.value} value={lang.value}>
                    {lang.name}
                  </option>
                ))}
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="mds-overflow-hidden mbsc-flex-1-1">
          <Eventcalendar locale={locale[localeStr]} data={myEvents} view={myView} />
        </div>
      </div>
    </Page>
  );
};
export default App;
