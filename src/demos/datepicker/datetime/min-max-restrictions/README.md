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
