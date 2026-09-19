To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/datetime/min-max-restrictions#).

## Demo description

Configuring minimum and maximum selectable values is great for reducing mistakes. Help people by limiting the selections for the task at hand. Use the `min` and `max` options to restrict the selection.
Setting the values will disable dates/times earlier than `min` and dates/times that come after `max`.

By default these options are empty and the date picker supports infinite navigation, while the time picker has all 24 hours/60 minutes/... available for selection.
Values can be passed as [JS date objects, ISO date strings or Moment.js objects](https://demo.mobiscroll.com/react/datetime/date-object-ISO-8601-moment#).

- **Looking to invalidate more dates/times?** [Discover how to disable specific values →](https://demo.mobiscroll.com/react/datetime/disabled-invalid-values#)

## Related demos

- [Discover how to disable specific values →](https://demo.mobiscroll.com/react/datetime/disabled-invalid-values#)

## Implementation instructions

- A single inline `Datepicker` instance is used; a four-way segmented control (`Date` / `Time list` / `Time grid` / `Date & time`) switches its `controls` at runtime between `['date']`, `['time']`, `['timegrid']`, and `['datetime']` via `setOptions` — it is not four separate side-by-side pickers.
- In `Date` mode, independent checkboxes enable a minimum and/or maximum date, each bound to its own anchored date input; both are enabled by default, with `min` defaulting to `1920-01-01` and `max` to `2050-01-01`.
- A separate "set a dynamically calculated date" checkbox (Date mode only, disabled by default) instead sets `max` to an 18-years-ago date, computed as `new Date(now.getFullYear() - 18, now.getMonth(), now.getDate())`; enabling it clears the exact min/max checkboxes.
- In `Time list` mode, independent min/max checkboxes (enabled by default) bind `min`/`max` to time-of-day values seeded relative to the current date, e.g. `10:30` and `19:30`.
- `Time grid` mode exposes the same independently toggled min/max time checkboxes, applied against `controls: ['timegrid']` instead of `['time']`.
- In `Date & time` mode, the min/max checkboxes instead bind full date-and-time values (e.g. `min: '2000-01-01T12:00'`, `max: '2050-01-01T12:00'`), toggled independently the same way.
- `min`/`max` values can be passed as ISO strings, `Date` objects, or Moment.js objects.

## What this demo shows

- Shows a wheel-style inline date picker for setting min and max values, restrictions.
- **Display mode** A segmented control on the left side of the picker switches between a date, time list, time grid and date and time picker layout. The date picker is selected by default.
- **Exact minimum and maximum values** The control panel enables both limits by default, with the minimum set to `01-01-1920` and the maximum set to `01-01-2050`. Dates or times before the minimum and after the maximum are disabled.
- **Dynamic restriction** The `Or set a dynamically calculated date` option disables dates more than 18 years in the past. This option is disabled by default.
- **Inline date picker** The example embeds the picker directly in the page without an input by using inline display mode.
- **Date selection** Separate scrollable wheels let users select the month, day, and year. The selected values appear in a central selection area, while neighboring values remain visually subdued.
- **Scrolling behavior** Users can scroll vertically through neighboring values to move between dates, including dates in other months or years.

## Best for

- **Appointment booking** Limit bookings to the dates and times when appointments can be offered.
- **Travel and accommodation** Prevent users from choosing arrival or departure dates outside an available booking window.
- **Age-based eligibility** Apply a dynamically calculated limit for workflows that require users to meet a minimum or maximum age.
- **Campaign and registration periods** Accept date selections only within a defined enrollment, promotion, or event window.
- **Historical and forecast data** Keep date filters within the period covered by the available data.
