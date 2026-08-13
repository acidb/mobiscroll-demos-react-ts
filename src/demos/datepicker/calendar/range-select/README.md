To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/calendar/range-select#).

## Demo description

To enable range selection set the `select` option to `range`.

The microcopy for `rangeStartLabel` and `rangeEndLabel` can be easily overridden. For flight booking *"Outbound"* and *"Return"* makes sense while for accommodation booking *"Check in"* and *"Check out"* might be more appropriate.

The range start/end labels can also be hidden in some cases if needed. Use the `showRangeLabels` option for that.

Furthermore, you have the option to toggle the range highlight with the `rangeHighlight` option, if needed.

Besides [invalidating selection that is before and after a specific date](https://demo.mobiscroll.com/react/calendar/min-max-restrictions#), the minimum and maximum allowed length of a range selection can be enforced through the `minRange` and `maxRange` options.

Dynamically switching between single, multiple or range select can be done with option changes.

- **Looking for more range picker?** [Learn how to customize range selection →](https://demo.mobiscroll.com/react/range/#)

## Related demos

- [Learn how to customize range selection →](https://demo.mobiscroll.com/react/range/#)

## What this demo shows

- An inline date range picker for selecting a start and end date from a calendar.
- **Start and end inputs:** Clickable inputs appear above the calendar header. The active input has a white background, while the inactive input has a gray background. A clear button appears after a range is selected.
- **Header navigation:** The month and year label in the upper-left corner opens the month and year picker. The previous and next arrow buttons on the right navigate between months.
- **Month view:** A fixed weekday header shows abbreviated day names from Sunday through Saturday, with dates arranged in a grid below.
- **Month navigation:** Drag the calendar left or right to move between months.
- **Day cell states:** Hovering over a day highlights its number with a gray background. The first selected day becomes the range start, and the second becomes the range end. Selected days are highlighted in blue. The current date is highlighted by default and remains blue when another date is selected.
- **Adjacent months:** Dates from the previous and next months use a muted style. Selecting one navigates to its corresponding month.
- **Range highlighting:** The configuration panel to the left of the calendar includes an enabled switch for highlighting the complete selected range or only its start and end dates.
- **Range labels:** The panel includes controls for showing or hiding the start and end labels and for replacing the localized labels with custom text. Labels are shown by default, while custom labels are disabled by default.
- **Range length:** Minimum and maximum range length controls define how many days a user may select.

## Best for

- **Bookings and reservations:** Hotel stays, travel dates, rentals, and other reservation workflows that require start and end dates.
- **Leave requests:** Selecting a bounded period for time-off requests.
- **Reporting periods:** Choosing a date range for reports and other time-based data views.
- **Constrained date ranges:** Workflows that need minimum or maximum selection lengths, configurable range highlighting, or customized start and end labels.
