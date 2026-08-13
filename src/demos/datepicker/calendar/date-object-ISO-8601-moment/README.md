To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/calendar/date-object-ISO-8601-moment#).

## Demo description

The date & time picker works with different date types:

- **JS date object** - a common way of passing a date is through a Date object: `new Date(1995, 11, 17, 15, 24)` (make sure to not simply pass a date string to `new Date()`)
- **ISO date string** - standardized way of passing dates: `'2008-09-15T15:53:00'` (make sure to pass it as a string)
- **Moment.js object** - a great solution that solves common date management difficulties: `moment([2018, 3, 27, 12, 15])` (make sure to have moment.js loaded)

When passing dates to the component - eg. [invalids](https://demo.mobiscroll.com/react/datetime/disabled-invalid-values#), [min/max](https://demo.mobiscroll.com/react/datetime/min-max-restrictions#) - you can do it in either format and the picker will automatically know what to do with it. If you want to specify how the picker should return values, you can do it in the `returnFormat` option.

## What this demo shows

- An inline date picker for selecting a date from a calendar.
- **Header navigation:** Clicking the month and year label in the upper-left corner opens the month and year picker. The previous and next arrow buttons on the right navigate between months.
- **Month view:** A fixed weekday header displays abbreviated day names from Sunday through Saturday, with dates arranged in a grid below.
- **Month navigation:** Dragging the calendar left or right moves between months.
- **Day cell states:** Hovering over a day highlights its number with a gray background. Selecting a day highlights its number with a blue background.
- **Current date:** The current date is highlighted by default and remains blue when another date is selected.
- **Adjacent months:** Dates from the previous and next months use a muted style. Selecting one navigates to the corresponding month.
- **Example panel:** Three code snippets appear to the left of the calendar, each demonstrating a supported date format.
- **Supported formats:** The examples use a `JS date object`, an `ISO date string`, and a `Moment.js object`.
- **Navigate actions:** Each code example includes a button that navigates the calendar to a specific date using the corresponding format.
- **Button labels:** The buttons are labeled `Set JS date object`, `Set ISO string`, and `Set moment.js object`.
- **Button interaction:** Hovering over a button highlights it. Clicking the button navigates the calendar to the example date.

## Best for

- **Supported date inputs:** Showing developers which date formats the date picker accepts and how each format can be used to navigate to a specific date.
