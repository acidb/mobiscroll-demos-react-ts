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

- **Picker mode** The single `Datepicker` instance's `controls` value can be changed at runtime between `['date']`, `['time']`, `['timegrid']`, and `['datetime']` via `setOptions`.
- **Invalid vs. valid** `invalid` disables listed dates/times (everything else stays selectable); `valid` restricts selection to only the listed dates/times. Only one of `invalid`/`valid` is set at a time — the other is passed as `undefined` via `setOptions`.
- **Exact dates** Individual dates for `invalid`/`valid` are passed as `'YYYY-MM-DD'` strings (formattable via `mobiscroll.formatDate`).
- **Recurring dates** Recurring rule entries can be combined in the `invalid`/`valid` array, e.g. weekends `{ recurring: { repeat: 'weekly', weekDays: 'SA,SU' } }`, weekdays `{ recurring: { repeat: 'weekly', weekDays: 'MO,TU,WE,TH,FR' } }`, holidays as two yearly rules `{ recurring: { repeat: 'yearly', day: 24, month: 12 } }` / `{ recurring: { repeat: 'yearly', day: 31, month: 12 } }`, and first/last of month `{ recurring: { repeat: 'monthly', day: 1 } }` / `{ recurring: { repeat: 'monthly', day: -1 } }` (a negative `day` counts back from the end of the month).
- **Date ranges** A range entry is passed as a `{ start, end }` pair (e.g. formatted `'YYYY-MM-DD'`) merged into the `invalid`/`valid` array.
- **Exact times** In time-list mode, individual times (e.g. `'11:30'`, `'18:00'`) each become `{ start: time, end: time, recurring: { repeat: 'daily' } }` entries.
- **Time ranges** `start - end` time-of-day pairs (e.g. `'13:00 - 14:00'`) become `{ start, end, recurring: { repeat: 'daily' } }` entries; the same exact-time/time-range entry shapes apply independently for time-grid mode (`timegrid`).
- **Exact datetimes and datetime ranges** In date & time mode, full ISO 8601 datetime strings (e.g. `'2022-04-28T09:00'`) and `start - end` datetime pairs produce `{ start, end }` objects, or, when only a time-of-day is given, `{ start: time, end: time, recurring: { repeat: 'daily' } }`.
- The `invalid`/`valid` array (and `controls`, when switching mode) can be updated at runtime via `.setOptions({ invalid: [...] })`, `.setOptions({ valid: [...] })`, and `.setOptions({ controls: [...] })` on the datepicker instance.
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
