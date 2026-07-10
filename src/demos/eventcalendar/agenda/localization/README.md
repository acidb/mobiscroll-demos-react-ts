To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/localization#).

## Demo description

The components are fully localized.
In case of the agenda this covers date and time format, button copy, rtl and more.
You can see how each example shows up by clicking on the small flag icon or checking the examples below.

- **All settings can be manually overridden** See what options the localization impacts →

## Related demos

- See what options the localization impacts →

## Implementation instructions

- Use `view: { calendar: { type: 'week' }, agenda: { type: 'day' } }`. Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. Angular: use `HttpClient.jsonp()`. For the imperative API, call `inst.setEvents(events)` in the callback.
- Import the `locale` map object from the Mobiscroll package. It maps locale codes (e.g. `'en'`, `'de'`, `'ar'`) to locale configuration objects. Pass `locale[localeCode]` to the `locale` option of the Eventcalendar. Changing the locale updates date/time formatting, button labels, first day of week, and RTL direction.
- Add a Mobiscroll `Dropdown` (with `inputStyle: 'box'`, `labelStyle: 'stacked'`) populated with the full language list (~37 locales). On dropdown change, update the active locale code and re-pass `locale[localeCode]` to the Eventcalendar. For the imperative API, call `inst.setOptions({ locale: mobiscroll.locale[code] })` on change. Wrap the layout in a `Page` component with the Dropdown above and the Eventcalendar filling the remaining height.
