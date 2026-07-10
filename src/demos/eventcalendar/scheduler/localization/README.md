To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/localization#).

## Demo description

The components are fully localized.
In case of the scheduler this covers date and time format, button copy, rtl and more.
You can see how each example shows up by clicking on the small flag icon or checking the examples below.

- **All settings can be manually overridden** See what options the localization impacts &#8594;

## Related demos

- See what options the localization impacts &#8594;

## Implementation instructions

- Use `view: { scheduler: { type: 'week' } }`.
- Render a `Dropdown` above the calendar populated with ~35 language options (Arabic through Vietnamese). Default to `'en'`.
- Pass `locale={locale[localeStr]}` to the Eventcalendar, where `locale` is the map object imported from Mobiscroll and `localeStr` is the currently selected code. Changing the dropdown immediately re-renders the calendar in the new language including date formats, button labels, and RTL layout. For the imperative API, call `inst.setOptions({ locale: mobiscroll.locale[value] })` on dropdown `change`.
- Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. For the imperative API, call `inst.setEvents(events)` in the callback.

## What this demo shows

- A desktop weekly scheduler layout with a fixed week strip at the top, a fixed all-day row below it, and a scrollable scheduler time grid for the selected week.
- **Locale selector** Clicking the `Locale` dropdown opens a list of available locales that updates the scheduler localization.
- **Localization behavior** The localized setup affects date and time formatting, button labels, RTL layout support, and other built-in UI text and behaviors.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed strip below the header displays the days of the selected week, with the current date highlighted by a blue circle.
- **All-day events** All-day events appear in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected week.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid, with a small blue dot marking the current date.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Multi-language calendar UIs** Apps that need the same scheduler experience in multiple languages and regional formats.
- **Region-specific event experiences** Products that need localized date formats, time formats, and translated interface copy without rebuilding the scheduler UI.
