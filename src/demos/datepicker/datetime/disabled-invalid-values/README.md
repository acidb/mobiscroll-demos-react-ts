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

## Implementation instructions

- **Picker mode** A `mbsc-segmented-group` switches the single `Datepicker` instance between four modes by changing its `controls` value: Date (`controls: ['date']`), Time list (`controls: ['time']`), Time grid (`controls: ['timegrid']`), and Date & time (`controls: ['datetime']`).
- **Invalid vs. valid** A second `mbsc-segmented-group` toggles between building an `invalid` array (disable listed dates/times, everything else stays selectable) and a `valid` array (only the listed dates/times are selectable); only one of `invalid`/`valid` is ever set at a time — the other is passed as `undefined` via `setOptions`.
- **Exact dates** In date mode, a multi-select anchored `calendar`-controls date picker (`selectMultiple: true`) lets the user pick specific days, formatted to `'YYYY-MM-DD'` strings via `mobiscroll.formatDate` and merged into `invalid`/`valid`.
- **Recurring dates** Checkboxes toggle recurring rules in/out of the array: weekends (`{ recurring: { repeat: 'weekly', weekDays: 'SA,SU' } }`) for invalid mode or weekdays (`{ recurring: { repeat: 'weekly', weekDays: 'MO, TU, WE, TH, FR' } }`) for valid mode, holidays as two yearly rules (`{ recurring: { repeat: 'yearly', day: 24, month: 12 } }`, `{ recurring: { repeat: 'yearly', day: 31, month: 12 } }`), and first/last of month (`{ recurring: { repeat: 'monthly', day: 1 } }`, `{ recurring: { repeat: 'monthly', day: -1 } }` — a negative `day` counts back from the end of the month).
- **Date ranges** A `select: 'range'` anchored `calendar`-controls date picker produces a `{ start, end }` pair (formatted `'YYYY-MM-DD'`) merged into the array; changing it also live-updates `min`/`max` on a separate picker instance in this demo's wiring.
- **Exact times** In time-list mode, a comma-separated textarea of times (e.g. `'11:30, 18:00'`) is parsed against an ISO-8601-time regex and each valid entry becomes `{ start: time, end: time, recurring: { repeat: 'daily' } }`.
- **Time ranges** A comma-separated textarea of `start - end` pairs (e.g. `'13:00 - 14:00, 15:00 - 15:30'`) becomes `{ start, end, recurring: { repeat: 'daily' } }` entries; the same exact-time/time-range textarea pattern is repeated independently for time-grid mode (`timegrid`) with its own checkboxes and textareas.
- **Exact datetimes and datetime ranges** In date & time mode, textareas accept full ISO 8601 datetime strings (e.g. `'2022-04-28T09:00'`) and `start - end` datetime pairs, producing `{ start, end }` objects (using the full ISO regex) or, when only a time-of-day is given, `{ start: time, end: time, recurring: { repeat: 'daily' } }`.
- Every checkbox/textarea change and the picker-mode switch rebuild the array and call `.setOptions({ invalid: [...] })` or `.setOptions({ valid: [...] })` (plus `.setOptions({ controls: [...] })` on mode switch) on the datepicker instance so the picker and the displayed code snippet stay in sync.
- Dates/times covered by `invalid` render disabled and cannot be selected; when `valid` is set, only the listed dates/times remain selectable.

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
