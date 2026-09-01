To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/range/min-max-length#).

## Demo description

Besides [invalidating selection that is before and after a specific date](https://demo.mobiscroll.com/react/range/min-max-restrictions#), the minimum and maximum allowed length of a range selection can be enforced through the `minRange` and `maxRange` options.

This form of validation is easy to understand and reduces erroneous entries.

## What this demo shows

- An inline date range picker for selecting a start and end date from a calendar.
- **Start and end inputs** Clickable inputs appear above the calendar header. The active input has a white background, while the inactive input has a gray background. A clear button appears after a range is selected.
- **Header navigation** The month and year label in the upper-left corner opens the month and year picker. The previous and next arrow buttons on the right navigate between months.
- **Month view** A fixed weekday header shows abbreviated day names from Sunday through Saturday, with dates arranged in a grid below.
- **Month navigation** Drag the calendar left or right to move between months.
- **Day cell states** Hovering over a day highlights its number with a gray background. The first selected day becomes the range start, and the second becomes the range end. Selected days are highlighted in blue. The current date is highlighted by default and remains blue when another date is selected.
- **Adjacent months** Dates from the previous and next months use a muted style. Selecting one navigates to its corresponding month.
- **Customize the selection** The configuration panel to the left of the calendar includes a selection list where users can select to show a date only calendar, a date only scroller, a date and time picker and a time only picker.
- **Range length** Below the view type selection, a minimum and maximum range length controls define how many days a user may select.

## Best for

- **Bookings and reservations** Hotel stays, travel dates, rentals, and other reservation workflows that require start and end dates.
- **Leave requests** Selecting a bounded period for time-off requests.
- **Reporting periods** Choosing a date range for reports and other time-based data views.
- **Constrained date ranges** Workflows that need minimum or maximum selection lengths, configurable range highlighting, or customized start and end labels.
