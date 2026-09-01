To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/range/formatting-return-values#).

## Demo description

Use the `dateFormat`, `timeFormat` options to customize how the values show up in the inputs after selection. If the formats are not explicitly set, they are inherited from the localization settings.

Besides customizing the date and time formats you can reorder the time picker wheels and change its formats with the `timeWheels` options.

- **Interested in learning about localization?** [Check out how the return format changes based on locale →](https://demo.mobiscroll.com/react/range/localization#)

## Related demos

- [Check out how the return format changes based on locale →](https://demo.mobiscroll.com/react/range/localization#)

## What this demo shows

- Fourteen input-based date, month, time, and date-time range pickers demonstrate different ways to format selected values.
- **Date range picker with inputs** These examples opens the range picker when the user focuses or clicks the input.
- **Input behavior** The range picker opens below the input over a darkened backdrop. Clicking outside the picker closes it. 
- **Start and end inputs** Clickable inputs appear above the calendar header. The active input has a white background, while the inactive input has a gray background. A clear button appears after a range is selected.
- **Header navigation** The month and year label in the upper-left corner opens the month and year picker. The previous and next arrow buttons on the right navigate between months.
- **Month view** A fixed weekday header shows abbreviated day names from Sunday through Saturday, with dates arranged in a grid below.
- **Month navigation** Drag the calendar left or right to move between months.
- **Day cell states** Hovering over a day highlights its number with a gray background. The first selected day becomes the range start, and the second becomes the range end. Selected days are highlighted in blue. The current date is highlighted by default and remains blue when another date is selected.
- **Adjacent months** Dates from the previous and next months use a muted style. Selecting one navigates to its corresponding month.
- **Footer actions** The gray `Cancel` button discards the change, while the blue `Set` button confirms the selected date range. Until a range is selected, the `Set` button remains inactive.
- **Input value** Confirming a date with `Set` displays the selected range in the input using a month, day, and year format.
- **Example 1 - Default date format** Displays the month, day, and year as numbers separated by `/`.
- **Example 2 - Numeric date** Uses `dateFormat: 'DD.MM.YYYY'`.
- **Example 3 - Month only** Uses `dateFormat: 'MMMM'`.
- **Example 4 - Full month name** Uses `dateFormat: 'D MMMM YYYY'`.
- **Example 5 - Month and year** Uses `dateFormat: 'MM/YYYY'`.
- **Example 6 - Weekday and abbreviated month** Uses `dateFormat: 'DDD DD MMM, YYYY'`.
- **Example 7 - ATOM date** Uses `dateFormat: 'YYYY-MM-DD'`.
- **Example 8 - COOKIE date** Uses `dateFormat: 'DDD, DD MMM YYYY'`.
- **Example 9 - Default time format** Uses a time-only scroller with the default time format.
- **Example 10 - 12-hour time** Uses a time-only scroller with `timeFormat: 'hh:mm A'`.
- **Example 11 - 24-hour time** Uses a time-only scroller with `timeFormat: 'HH:mm'`.
- **Example 12 - 24-hour time with seconds** Uses a time-only scroller with `timeFormat: 'HH:mm:ss'`.
- **Example 13 - Date and time** Combines a date picker with a time scroller using `timeFormat: 'HH:mm:ss'`.
- **Example 14 - Custom date and time** Combines a date picker with a time scroller using `dateFormat: 'DDD D MMM, YYYY'` and `timeFormat: 'H:mm'`.

## Best for

- **Regional date conventions** Displaying date ranges in the numeric or text-based order expected by a specific audience.
- **Standardized date values** Presenting selections in formats such as the ATOM-style `YYYY-MM-DD` pattern.
- **Month-based workflows** Collecting a month or a month-and-year range values without displaying a full date range in the input.
- **Time entry** Supporting 12-hour or 24-hour time values, with optional seconds.
- **Date-time forms** Showing combined date and time range selections in a format suited to the surrounding form or workflow.
- **Readable summaries** Using weekday and month names when a more descriptive input value is easier to scan than a fully numeric date.
