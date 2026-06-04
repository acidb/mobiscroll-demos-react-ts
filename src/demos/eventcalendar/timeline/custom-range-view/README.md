To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/custom-range-view#).

## Demo description

The timeline comes with [built-in support for day, week, month and year views](https://demo.mobiscroll.com/react/timeline/multiple-days-weeks-months-quarters-years-variable-resolution#). For those situations where a custom range makes more sense, it is possible to override the calendar navigation component with a [range picker](https://demo.mobiscroll.com/react/range/date-filtering-with-predefined-ranges#).

The calendar header can be easily customized and a two-way synchronization needs to be kept between the timeline and range picker.

## Implementation instructions

- Start with `timeline: { type: 'day', size: 14, eventDisplay: 'fill' }` as the default view — a 14-day rolling window with events filling their cells. Store the view config in state so it can be replaced when the user picks a new range.
- Use `renderHeader` (Angular: `headerTemplate`, Vue: `header`) to replace the default navigation with two elements: a `Button` that shows the current date range label and opens the range picker, and a group of `CalendarPrev`, `CalendarToday`, `CalendarNext` controls aligned to the right.
- Render a `Datepicker` in `select: 'range'`, `display: 'anchored'`, `showOverlay: false`, `touchUi: true`, `buttons: []` mode as the range picker. In React, pass it directly as `inputComponent={Button}` with `inputProps` containing the label text as children. In Vue/Angular, keep the picker hidden (hidden input or no visible input) and call `.open()` on the instance from the button's click handler, passing the button element as the anchor.
- In the Datepicker `onChange` handler, store the selected `[start, end]` pair in a ref/variable (not yet applied to the calendar — wait for close).
- In the Datepicker `onClose` handler, compute `size = getNrDays(start, end)` and update the timeline view to `{ timeline: { type: 'day', size, eventDisplay: 'fill' } }`. Also set `refDate` to the start date and update `selectedDate` to navigate the calendar to the start.
- In the `onPageLoaded` event, read `args.firstDay` as the range start. The `args.lastDay` is exclusive (one day past the last visible day), so compute the actual end as `new Date(lastDay.getFullYear(), lastDay.getMonth(), lastDay.getDate() - 1)`. Use both to update the button label text and the range picker's value — this keeps the picker in sync when the user navigates with the prev/next buttons.
- Implement a `getNrDays(start, end)` helper: `Math.round(Math.abs((end.setHours(0) - start.setHours(0)) / 86400000)) + 1`. Use `formatDate('MMM D, YYYY', date)` from Mobiscroll to build the label string; show a single date when the range spans one day, or "Start - End" for multiple days.
- Define 6 generic resources with `id`, `name`, and `color`. Load events from a remote endpoint using `getJson` and pass them to `data`.
