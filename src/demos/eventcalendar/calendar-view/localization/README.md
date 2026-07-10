To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/localization#).

## Demo description

The components are fully localized.
In case of the event calendar this covers date and time format, button copy, rtl and more.
You can see how each example shows up by clicking on the small flag icon or checking the examples below.

- **All settings can be manually overridden** See what options the localization impacts &#8594;

## Related demos

- See what options the localization impacts &#8594;

## Implementation instructions

- Use `view: { calendar: { labels: true } }`.
- Render a `Dropdown` above the calendar populated with ~35 language options (Arabic through Vietnamese). Default to `'en'`.
- Pass `locale={locale[localeStr]}` to the Eventcalendar, where `locale` is the map object imported from Mobiscroll and `localeStr` is the currently selected code. Changing the dropdown immediately re-renders the calendar in the new language including date formats, button labels, and RTL layout. For the imperative API, call `inst.setOptions({ locale: mobiscroll.locale[value] })` on dropdown `change`.
- Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. Angular: use `HttpClient.jsonp()` instead. JS/jQuery: call `inst.setEvents(events)` in the callback.

## What this demo shows

- A desktop month-view event calendar with a locale selector above the calendar for switching between supported localizations.
- **Locale selector** Clicking the `Locale` dropdown opens a list of available locales that updates the calendar localization.
- **Localization behavior** The localized setup affects date and time formatting, button labels, RTL layout support, and other built-in UI text and behaviors.
- **Month grid** The calendar displays events as labels inside day cells across a full monthly grid.
- **Event labels** Events use different label styles and colors to distinguish between all-day events, multi-day, and timed events.
- **Overflow handling** The number of visible event labels depends on the available height in each day cell. Additional events are collapsed behind an `X more` link.
- **Popover** Clicking the `X more` link opens a popover that shows the hidden events for that day.
- **Label interaction** Hovering over or clicking an event label selects it and highlights the selected label.
- **Day cell states for future days** Hovering a day cell highlights the day number with a gray background, while clicking the empty part of the cell selects the day and highlights the day number with a blue background.
- **Month navigation** The month can be changed by clicking and dragging the calendar left or right.
- **Calendar header** The header shows the current month and year on the left, and blue month navigation arrows with a `Today` button (for jumping back to the current date) between them on the right.

## Best for

- **Multi-language calendar UIs** Apps that need the same event calendar experience in multiple languages and regional formats.
- **Region-specific event experiences** Products that need localized date formats, time formats, and translated interface copy without rebuilding the calendar UI.
