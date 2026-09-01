To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/range/min-max-restrictions#).

## Demo description

Configuring minimum and maximum selectable values is great for reducing mistakes. Help people by limiting the selections for the task at hand. Use the `min` and `max` options to restrict the selection.
Setting the values will disable dates/times earlier than `min` and dates/times that come after `max`.

By default these options are empty and the date picker supports infinite navigation, while the time picker has all 24 hours/60 minutes/... available for selection.
Values can be passed as [JS date objects, ISO date strings or Moment.js objects](https://demo.mobiscroll.com/react/range/date-object-ISO-8601-moment#).

- **Looking to invalidate more dates/times?** [Discover how to disable specific values →](https://demo.mobiscroll.com/react/range/disabled-invalid-values#)

## Related demos

- [Discover how to disable specific values →](https://demo.mobiscroll.com/react/range/disabled-invalid-values#)

## What this demo shows

- Shows a segmented control switcher between a date picker, which is selected by default, and a date-time picker. Both modes support minimum and maximum selectable values.
- **Display mode** A segmented control on the left side of the picker switches between a date and date and time picker layout. The date picker is selected by default.
- **Exact minimum and maximum values** The control panel enables both limits by default, with the minimum set to `01-01-1920` and the maximum set to `01-01-2050`. Dates or times before the minimum and after the maximum are disabled.
- **Dynamic restriction** The `Or set a dynamically calculated date` option disables dates more than 18 years in the past. This option is disabled by default.
- **Start and end inputs** Clickable inputs appear above the calendar header. The active input has a white background, while the inactive input has a gray background. A clear button appears after a range is selected.
- **Header navigation** The month and year label in the upper-left corner opens the month and year picker. The previous and next arrow buttons on the right navigate between months.
- **Month view** A fixed weekday header shows abbreviated day names from Sunday through Saturday, with dates arranged in a grid below.
- **Month navigation** Drag the calendar left or right to move between months.
- **Day cell states** Hovering over a day highlights its number with a gray background. The first selected day becomes the range start, and the second becomes the range end. Selected days are highlighted in blue. The current date is highlighted by default and remains blue when another date is selected.
- **Adjacent months** Dates from the previous and next months use a muted style. Selecting one navigates to its corresponding month.

## Best for

- **Appointment booking** Limit bookings to the dates and times when appointments can be offered.
- **Travel and accommodation** Prevent users from choosing arrival or departure dates outside an available booking window.
- **Age-based eligibility** Apply a dynamically calculated limit for workflows that require users to meet a minimum or maximum age.
- **Campaign and registration periods** Accept date selections only within a defined enrollment, promotion, or event window.
- **Historical and forecast data** Keep date filters within the period covered by the available data.
