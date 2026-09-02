To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/range/disabled-invalid-values#).

## Demo description

Enforcing validation is essential to a great UX. First make sure to have the [min & max values right](https://demo.mobiscroll.com/react/range/min-max-restrictions#) and then work your way through disabled values.

Depending on your situation, you have two options:
- **Set invalid** - set the invalids through the `invalid` option.
- **Set valid** - set the valids through the `valid` option.

Both the `invalid` and `valid` options support the following:

- **Exact dates** - Passing exact values like: `'2020-05-20'` will disable/enable the specific day
- **Date ranges** - Passing `start` and `end` value pairs will disable/enable specific days that fall into that range
- **Recurring dates** - Passing recurrence rules as objects or in RRULE string format will be parsed. For [more information on recurrence check out the rule generator](https://demo.mobiscroll.com/react/range/recurring-values#)

Exact dates and the start/end pairs can be passed as [JS date objects, ISO date strings or Moment.js objects](https://demo.mobiscroll.com/react/range/date-object-ISO-8601-moment#).
Having invalids set up correctly not just enhances the UX, but improves performance.

The passed date-times can also contain timezone data which requires a `timezonePlugin` to be interpreted correctly.

- **Using date-times across different timezones?** [Learn more about timezone support →](https://demo.mobiscroll.com/react/range/setting-the-picker-timezone#)

## What this demo shows

- Configures invalid or valid dates in a date range picker to control which dates are available for selection.
- **Disabled dates within a range** Allows disabled dates to appear inside a selected range while preventing them from being selected as the range start or end.
- **Disabled range end** Optionally allows a disabled date to be selected as the range end, such as an unavailable checkout date in an accommodation booking flow.
- **Exact dates** Disables specific dates or defines specific valid dates while treating all remaining dates as unavailable.
- **Recurring dates** Disables repeating dates, including weekends, holidays, or the first and last day of each month.
- **Date ranges** Disables complete ranges to block longer periods from selection.
- **Combined rules** Applies multiple invalid-date rules to represent more complex availability and booking restrictions.
- **Inline date range picker** Embeds the picker directly in the page without an input by using the inline display mode.
- **Start and end inputs** Displays clickable start and end inputs above the calendar. The active input has a white background, the inactive input has a gray background, and a clear button appears after a range is selected.
- **Header navigation** Opens the month and year picker from the label in the upper-left corner. Previous and next arrow buttons navigate between months.
- **Month view** Shows a fixed weekday header with abbreviated day names from Sunday through Saturday and dates arranged in a grid.
- **Month navigation** Supports dragging the calendar left or right to move between months.
- **Day cell states** Uses a muted appearance for disabled dates, a gray background on hover, and blue highlighting for selected dates. The current date is highlighted by default and remains blue when another date is selected.
- **Range selection** Uses the first selected date as the range start and the second selected date as the range end.
- **Adjacent months** Shows dates from the previous and next months in a muted style. Selecting one navigates to its corresponding month.

## Best for

- **Accommodation booking** Allowing an unavailable date to serve as the checkout date while preventing it from being used as the start of a stay.
- **Reservations and rentals** Enforcing availability windows, blackout periods, and recurring restrictions when users select a date range.
- **Appointment scheduling** Preventing bookings on unavailable dates or during blocked periods.
- **Leave management** Restricting date ranges around weekends, holidays, and other recurring non-working days.
- **Complex availability rules** Combining exact dates, recurring dates, and disabled ranges in a single date selection flow.
