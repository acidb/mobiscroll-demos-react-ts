To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/datetime/date-object-ISO-8601-moment#).

## Demo description

The date & time picker works with different date types:

- **JS date object** - a common way of passing a date is through a Date object: `new Date(1995, 11, 17, 15, 24)` (make sure to not simply pass a date string to `new Date()`)
- **ISO date string** - standardized way of passing dates: `'2008-09-15T15:53:00'` (make sure to pass it as a string)
- **Moment.js object** - a great solution that solves common date management difficulties: `moment([2018, 3, 27, 12, 15])` (make sure to have moment.js loaded)

When passing dates to the component - eg. [invalids](https://demo.mobiscroll.com/react/datetime/disabled-invalid-values#), [min/max](https://demo.mobiscroll.com/react/datetime/min-max-restrictions#) - you can do it in either format and the picker will automatically know what to do with it. If you want to specify how the picker should return values, you can do it in the `returnFormat` option.

## Implementation instructions

- Use `controls: ['date']` and `display: 'inline'` on a single `Datepicker`; the three example buttons each call `setVal(...)` on that same instance rather than mounting separate pickers.
- **JS date object** `Set JS date object` calls `setVal(new Date(2020, 10, 15, 10, 45), ...)` — pairing this with `returnFormat: 'jsdate'` (React/Vue/Angular/JS/jQuery all use the same `returnFormat` option name) makes `getVal()`/the bound value return a `Date` object.
- **ISO date string** `Set ISO string` calls `setVal('2020-05-20T12:30:00', ...)` with `returnFormat: 'iso8601'`, returning the value as an ISO 8601 string; the string must be passed to `setVal`/the model as a string, not passed through `new Date()` first.
- **Moment.js object** `Set moment.js object` calls `setVal(moment([2020, 2, 6, 15, 30]), ...)`. Note: the JS/jQuery init snippet sets `returnFormat: 'moment'`, but the on-page button handler (`dateTypeDate.setVal(new Date(2020, 2, 6, 15, 30), ...)`) actually passes a plain `Date`, not a `moment()` instance — a static-demo inconsistency; describe the option and framework snippets (which correctly use `moment([...])`) rather than that button wiring quirk.
- React binds via `value`/`onChange` (`ev.value`) with `useState`; Angular/Vue use `[(ngModel)]="date"` / `v-model="date"` two-way binding; JS uses `cal.setVal(...)`/`cal.getVal()`; jQuery uses `$('#cal').mobiscroll('setVal', ...)`/`.mobiscroll('getVal')`.
- `returnFormat` only controls the shape of the value handed back to the app — it does not change what input formats the picker accepts; dates, ISO strings, and Moment objects can all be passed in regardless of the configured `returnFormat`.

## What this demo shows

- An inline date picker for selecting a date from a wheel-style date picker.
- **Inline date picker** The picker is shown directly in the page without an input by using inline display mode.
- **Date selection** Separate scrollable wheels let users select the month, day, and year. The selected values appear in a central selection area, while neighboring values remain visually subdued.
- **Scrolling behavior** Users can scroll vertically through neighboring values to move between dates, including dates in other months or years.
- **Example panel** Three code snippets appear to the left of the picker, each demonstrating a supported date format.
- **Supported formats** The examples use a `JS date object`, an `ISO date string`, and a `Moment.js object`.
- **Navigate actions** Each code example includes a button that navigates the picker to a specific date using the corresponding format.
- **Button labels** The buttons are labeled `Set JS date object`, `Set ISO string`, and `Set moment.js object`.
- **Button interaction** Hovering over a button highlights it. Clicking the button navigates the picker to the example date.

## Best for

- **Supported date inputs** Showing developers which date formats the date picker accepts and how each format can be used to navigate to a specific date.
