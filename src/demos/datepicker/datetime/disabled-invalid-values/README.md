To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/datetime/disabled-invalid-values#).

## Demo description

Enforcing validation is essential to a great UX. First make sure to have the [min & max values right](https://demo.mobiscroll.com/react/datetime/min-max-restrictions#) and then work your way through disabled values.

Depending on your situation, you have two options:
- **Set invalid** - set the invalids through the `invalid` option.
- **Set valid** - set the valids through the `valid` option.

Both the `invalid` and `valid` options support the following:

- **Exact dates** - Passing exact values like: `'2020-05-20'` will disable/enable the specific day
- **Date ranges** - Passing `start` and `end` value pairs will disable/enable specific days and/or times that fall into that range
- **Recurring dates** - Passing recurrence rules as objects or in RRULE string format will be parsed. For [more information on recurrence check out the rule generator](https://demo.mobiscroll.com/react/datetime/recurring-values#)

Exact dates and the start/end pairs can be passed as [JS date objects, ISO date strings or Moment.js objects](https://demo.mobiscroll.com/react/datetime/date-object-ISO-8601-moment#).
Having invalids set up correctly not just enhances the UX, but improves performance.

## What this demo shows

- Shows a wheel-style inline date picker with disabled values.
- **Display mode** A segmented control on the left side of the picker switches between a date, time list, time grid and date and time picker layout. The date picker is selected by default.
- **Control panel** Below the picker-mode segmented control, users can switch between defining invalid values, selected by default, and setting valid rules. They can configure exact dates, recurring dates such as weekends or holidays, and one or more date ranges.
- **Inline date picker** The example embeds the picker directly in the page without an input by using inline display mode.
- **Date selection** Separate scrollable wheels let users select the month, day, and year. The selected values appear in a central selection area, while neighboring values remain visually subdued.
- **Disabled values** Disabled dates cannot be selected in the picker or from the date and time picker. Disabled times cannot be selected in the time pickers.
- **Scrolling behavior** Users can scroll vertically through neighboring values to move between dates, including dates in other months or years.

## Best for

- **Appointment booking** Prevent customers from selecting dates when a business is closed, fully booked, or unavailable.
- **Employee leave requests** Block weekends, company holidays, and dates outside an allowed request period.
- **Travel and accommodation booking** Disable sold-out dates, unavailable arrival dates, or maintenance periods.
- **Delivery scheduling** Exclude non-delivery days, public holidays, and dates when capacity is unavailable.
- **Course and event registration** Restrict selection to scheduled session dates and disable dates after registration closes.
