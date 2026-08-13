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

## What this demo shows

- Shows a mobile-friendly week calendar paired with a daily agenda list in a single view.
- **Locale selector** Clicking the `Locale` dropdown opens a list of available locales that updates the agenda localization.
- **Localization behavior** The localized setup affects date and time formatting, button labels, RTL layout support, and other built-in UI text and behaviors.
- **Header navigation** The month and year label in the top left opens date navigation. The previous and next arrows and the Today button on the right move between weeks and jump back to the current date.
- **Week view** A week calendar is displayed at the top of the view.
- **Week navigation** The week strip can be changed by clicking and dragging left or right.
- **Day cell states** Hovering a day highlights the day number with a gray background. Selecting a day highlights the day number with a blue background. The current date is highlighted by default.
- **Event markers** Days with events show a small dot marker inside the day cell.
- **Agenda list** The area below the calendar lists events for the selected day.
- **Date selection** Selecting a day in the week calendar updates the agenda to show events for that date.
- **Events** Events are displayed as agenda cards with a colored strip on the left, the event title next to it, and the start and end time stacked on the right.
- **Event interaction** Hovering an event highlights it.
- **Event selection** Clicking an event selects and highlights it, then shows a toast message with the event title.

## Best for

- **Multi-language agenda UIs** Apps that need the same agenda experience in multiple languages and regional formats.
- **Region-specific event experiences** Products that need localized date formats, time formats, and translated interface copy without rebuilding the agenda UI.
