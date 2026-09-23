To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/range/setting-the-picker-timezone#).

## Demo description

The range works with local times by default, but ships with support for changing the timezone. The conversions and correct output relies on either of these three external libraries: [luxon](https://moment.github.io/luxon/), [moment-timezone](https://momentjs.com/timezone/) and [day.js](https://day.js.org/). For installing and using these libraries check out this guide.

There are two angles regarding timezones:

- `dataTimezone` - the range expects this format and returns this format. It is `'local'` by default if the date-times don't contain any timezone information
- `displayTimezone` - the calendar displays everything in this timezone. The date-times will be converted from the `dataTimezone` and displayed accordingly. It is `'local'` by default

[Invalids](https://demo.mobiscroll.com/react/range/disabled-invalid-values#) as well as [marked, colored and labels](https://demo.mobiscroll.com/react/range/dots-colors-labels#) date-times will all be interpreted in `dataTimezone` when they contain no timezone info and will be shown in `displayTimezone` on the calendar.

## Implementation instructions

- Timezone conversion requires a `timezonePlugin` backed by one of three external libraries: Day.js (`dayjsTimezone`), Luxon, or Moment Timezone — extend the chosen library with its UTC/timezone plugin(s) first (e.g. `dayjs.extend(utc); dayjs.extend(timezone);`), then set `dayjsTimezone.dayjs = dayjs` (or the Luxon/Moment equivalent) before it's used.
- Set `dataTimezone` (the timezone the range value is read from/returned in, e.g. `'utc'`) and `displayTimezone` (the timezone the calendar renders in, e.g. `'local'` or an IANA zone name like `'America/New_York'`) on the range `Datepicker` (`select: 'range'`, `controls: ['calendar', 'time']`) along with `timezonePlugin`. Both default to `'local'` when omitted.
- React imports `dayjsTimezone` from `@mobiscroll/react` and passes `dataTimezone`, `displayTimezone`, and `timezonePlugin` as props; Vue imports it from `@mobiscroll/vue` and binds them with `dataTimezone`/`displayTimezone` (plain strings) plus `:timezonePlugin="dayjsTimezone"`; Angular imports it from `@mobiscroll/angular`, exposes it as a component field, and binds with `dataTimezone`/`displayTimezone` (plain attributes) plus `[timezonePlugin]="myDayjsTimezone"`; JS/jQuery import `mobiscroll.dayjsTimezone` and set `mobiscroll.dayjsTimezone.dayjs = dayjs` before passing `timezonePlugin: mobiscroll.dayjsTimezone` in the options object.
- `displayTimezone` can be changed at runtime via `.setOptions({ displayTimezone: newZone })` (JS/jQuery) or by updating the bound prop/state — the calendar and its selected range redraw in the new display zone while the underlying `dataTimezone` values are unchanged.
- Reading the current value with `.getVal()` returns the range's `[start, end]` in `dataTimezone`; the `onChange` handler receives the same timezone-converted values.
- `invalid`, `marked`, `colors`, and `labels` date-times with no explicit timezone info are interpreted in `dataTimezone` and shown to the user in `displayTimezone`.

## What this demo shows

- Configure the timezone used for date and time range selection and display.
- **Date anf time range picker with inputs** This example opens the range picker when the user focuses or clicks the input.
- **Input behavior** The range picker opens below the input over a darkened backdrop. Clicking outside the picker closes it. 
- **Start and end inputs** Clickable inputs appear above the calendar header. The active input has a white background, while the inactive input has a gray background. A clear button appears after a range is selected.
- **Header navigation** The month and year label in the upper-left corner opens the month and year picker. The previous and next arrow buttons on the right navigate between months.
- **Month view** A fixed weekday header shows abbreviated day names from Sunday through Saturday, with dates arranged in a grid below.
- **Month navigation** Drag the calendar left or right to move between months.
- **Day cell states** Hovering over a day highlights its number with a gray background. The first selected day becomes the range start, and the second becomes the range end. Selected days are highlighted in blue. The current date is highlighted by default and remains blue when another date is selected.
- **Adjacent months** Dates from the previous and next months use a muted style. Selecting one navigates to its corresponding month.
- **Time selection** Separate scrollable time picker with wheels for hour, minute, and AM/PM is displayed next to the calendar.
- **Footer actions** The gray `Cancel` button discards the change, while the blue `Set` button confirms the selected date range. Until a range is selected, the `Set` button remains inactive.
- **Input value** Confirming a date with `Set` displays the selected range in the input using a month, day, and year format.
- **Data timezone** View the calendar's data timezone, shown as UTC in a non-editable field labeled `Date timezone is:` next to the calendar on the left.
- **Display timezone** Use the selectable field labeled `Display timezone is:` below the data timezone field to open a timezone picker.
- **Timezone conversion** Select a different display timezone to update the date and time shown by the picker.

## Best for

- **Travel booking** Let users choose date and time ranges in the timezone of a flight, hotel, rental, or destination.
- **Remote appointments** Display appointment time ranges in each participant's local timezone while keeping the underlying date-time values in a consistent data timezone.
- **International scheduling** Support date and time range selection for meetings, interviews, or services involving users in different regions.
- **UTC-based systems** Store and return date-time range values in UTC while presenting them in a user-selected display timezone.
