To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/calendar/disabled-invalid-values#).

## Demo description

Enforcing validation is essential to a great UX. First make sure to have the [min & max values right](https://demo.mobiscroll.com/react/calendar/min-max-restrictions#) and then work your way through disabled values.

Depending on your situation, you have two options:
- **Set invalid** - set the invalids through the `invalid` option.
- **Set valid** - set the valids through the `valid` option.

Both the `invalid` and `valid` options support the following:

- **Exact dates** - Passing exact values like: `'2020-05-20'` will disable/enable the specific day
- **Date ranges** - Passing `start` and `end` value pairs will disable/enable specific days and/or times that fall into that range
- **Recurring dates** - Passing recurrence rules as objects or in RRULE string format will be parsed. For [more information on recurrence check out the rule generator](https://demo.mobiscroll.com/react/calendar/recurring-values#)

Exact dates and the start/end pairs can be passed as [JS date objects, ISO date strings or Moment.js objects](https://demo.mobiscroll.com/react/calendar/date-object-ISO-8601-moment#).
Having invalids set up correctly not just enhances the UX, but improves performance.

The passed date-times can also contain timezone data which requires a `timezonePlugin` to be interpreted correctly.

- **Using date-times across different timezones?** [Learn more about timezone support →](https://demo.mobiscroll.com/react/calendar/setting-the-picker-timezone#)

## Implementation instructions

- `controls` can be set to `['calendar']` (Date), `['time']` (Time), or `['calendar', 'time']` (Date & time) to switch the single `Datepicker` instance between three modes.
- Only one of `invalid` (disables the listed dates/times, everything else stays selectable) or `valid` (only the listed dates/times are selectable) is set at a time — the other is passed as `undefined` via `setOptions`.
- Specific days can be added to `invalid`/`valid` as an array of `'YYYY-MM-DD'` date strings.
- Recurring rules can be added to `invalid`/`valid`, e.g. weekends (`{ recurring: { repeat: 'weekly', weekDays: 'SA,SU' } }`), weekdays (`{ recurring: { repeat: 'weekly', weekDays: 'MO,TU,WE,TH,FR' } }`), holidays as yearly rules (`{ recurring: { repeat: 'yearly', day: 24, month: 12 } }`, `{ recurring: { repeat: 'yearly', day: 31, month: 12 } }`), and first/last of month (`{ recurring: { repeat: 'monthly', day: 1 } }`, `{ recurring: { repeat: 'monthly', day: -1 } }` — a negative `day` counts back from the end of the month).
- A `{ start, end }` range (formatted as `'YYYY-MM-DD'` strings, via `select: 'range'`) can also be added to `invalid`/`valid`.
- Exact times can be added to `invalid`/`valid` as `{ start: time, end: time, recurring: { repeat: 'daily' } }` entries.
- Time ranges can be added to `invalid`/`valid` as `{ start, end, recurring: { repeat: 'daily' } }` entries.
- In date & time mode, full ISO 8601 datetime strings and `start - end` datetime pairs produce `{ start, end }` objects with no `recurring` (or `{ start: time, end: time, recurring: { repeat: 'daily' } }` when only a time-of-day is given).
- Changes are applied by calling `.setOptions({ invalid: [...] })` or `.setOptions({ valid: [...] })` on the calendar instance.
- Dates/times covered by `invalid` render disabled and cannot be selected; when `valid` is set, only the listed dates/times remain selectable.

## What this demo shows

- A segmented control switches between a date picker, selected by default, a time picker, and a date and time picker. Each mode demonstrates how to disable values relevant to that picker.
- **Header navigation** The month and year label in the upper-left corner opens month and year selection controls. The previous and next arrow buttons on the right move between months.
- **Month view** A fixed weekday header displays abbreviated day names from Sunday through Saturday, with dates arranged in a grid below.
- **Month navigation** Users can also change the displayed month by dragging the calendar left or right.
- **Day cell states** Hovering over a day gives its number a gray background. Selecting a day gives its number a blue background. The current date is highlighted by default and remains blue when another date is selected.
- **Disabled values** Disabled dates cannot be selected in the date picker or the date and time picker. Disabled times cannot be selected in the time pickers.
- **Adjacent months** Dates from the previous and next months use a muted style. Selecting one navigates to the corresponding month.
- **Date and time picker** In date and time mode, a scroller-based time picker appears beside the single-month calendar. Separate wheels provide hours from 1 to 12, minutes from 0 to 59, and AM/PM selection.
- **Time picker** In time picker mode, separate scroller wheels provide hours from 1 to 12, minutes from 0 to 59, and AM/PM selection.
- **Control panel** Below the picker-mode segmented control, users can switch between defining invalid values, selected by default, and setting valid rules. They can configure exact dates, recurring dates such as weekends or holidays, and one or more date ranges.

## Best for

- **Appointment booking** Prevent customers from selecting dates when a business is closed, fully booked, or unavailable.
- **Employee leave requests** Block weekends, company holidays, and dates outside an allowed request period.
- **Travel and accommodation booking** Disable sold-out dates, unavailable arrival dates, or maintenance periods.
- **Delivery scheduling** Exclude non-delivery days, public holidays, and dates when capacity is unavailable.
- **Course and event registration** Restrict selection to scheduled session dates and disable dates after registration closes.
