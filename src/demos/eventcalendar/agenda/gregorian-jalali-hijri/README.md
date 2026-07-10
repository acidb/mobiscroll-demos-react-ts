To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/gregorian-jalali-hijri#).

## Demo description

The agenda supports multiple calendar systems. You can control it with the `calendarSystem` setting, and it supports the following options:

- **Gregorian** - it is included by default
- **Jalali** - it is the default system of the Persian calendar and is included within the Farsi language pack
- **Hijri** - it is included in the Arabic language pack

- **Interested in localization?** [Explore this example →](https://demo.mobiscroll.com/react/agenda/localization#)

## Related demos

- [Explore this example →](https://demo.mobiscroll.com/react/agenda/localization#)

## Implementation instructions

- Use a `Page` component with a `mbsc-grid` / `mbsc-row` / three `mbsc-col-sm-12 mbsc-col-md-4` columns to show three `Eventcalendar` instances side by side. Each uses `view: { calendar: { type: 'week' }, agenda: { type: 'day' } }`.
- Configure each instance with its calendar system and locale:
  - **Gregorian**: default (no `calendarSystem` needed), `locale: localeEn`
  - **Jalali**: `calendarSystem: jalaliCalendar`, `locale: localeFa`
  - **Hijri**: `calendarSystem: hijriCalendar`, `locale: localeAr`
  - Import `jalaliCalendar`, `hijriCalendar`, `localeEn`, `localeFa`, `localeAr` from the Mobiscroll package.
- Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP once using `getJson(url, callback, 'jsonp')`. Angular: use `HttpClient.jsonp()`. Pass the same events array to all three instances. For the imperative API, call `inst.setEvents(events)` on all three instances in the callback.
