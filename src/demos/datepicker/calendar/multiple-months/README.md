To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/calendar/multiple-months#).

## Demo description

Showing multiple months helps when people need to be looking at longer stretches of times. When the `calendarType` is set to `'month'` the month count can be set through the `pages` option.
By setting `pages: 1`, `pages: 2`, the calendar will render the exact number of months regardless of the `width` of the parent container. Passing `pages: 'auto'` renders as many months as can be fitted in the parent container.

You can dynamically change the number of months or [switch between month and week view](https://demo.mobiscroll.com/react/calendar/week-to-month#) without the need for recycling the whole component.

## What this demo shows

- This example demonstrate different ways to display one/two/ three or as many as fit months of calendar for date selection.
- **Month count switcher** A segmented control above the date picker switches between `1`, `2`, `3`, and `auto` month layouts, updating the calendar view dynamically.
- **Automatic month count** Setting `pages: 'auto'` displays as many months as fit within the parent container.
- **Dynamic view updates** The number of displayed months can change without recreating the date picker component.
- **Header navigation** The month and year label in the top left opens a month and year picker. The blue previous and next arrow buttons on the right navigate between months.
- **Month view** A fixed weekday header displays abbreviated day names from Sunday through Saturday, with the dates arranged in a grid below it.
- **Month navigation** The months can be changed by clicking and dragging the calendar left or right.
- **Day cell states** Hovering a day highlights the day number with a gray background. Selecting a day highlights the day number with a blue background. The current date is highlighted by default and remains blue when the user selects another date.

## Best for

- **Travel planning** Comparing dates across adjacent months when choosing a departure or return date.
- **Accommodation and rental bookings** Choosing a booking date from a longer window without moving through one month at a time.
- **Appointment planning** Giving users a broader view when available dates are spread across several months.
- **Long-range date selection** Helping users choose deadlines, renewal dates, or future milestones without navigating one month at a time.
- **Responsive date pickers** Automatically displaying the number of months that fit the available space.
