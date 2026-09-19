To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/datetime/time-value-steps#).

## Demo description

Adjust the gaps between the time picker values as needed. Use these three options for setting the steps:

- `stepHour` - adjusts the gaps between the values for the time wheel
- `stepMinute` - adjusts the gaps between the values for the minute wheel
- `stepSecond` - adjusts the gaps between the values for the second wheel

## Implementation instructions

- Four separate input-bound picker instances, each with a fixed step configuration — there is no live switcher in this demo; each variant is a distinct static instance.
- **Date and time, 15-minute steps**: `controls: ['datetime'], stepMinute: 15` — combines the date wheel with hour/minute/AM-PM wheels, restricting the minute wheel to quarter-hour values.
- **Time, 5-minute steps**: `controls: ['time'], stepMinute: 5` — restricts the minute wheel to 5-minute increments.
- **Time, 2-hour steps**: `controls: ['time'], stepHour: 2` — restricts the hour wheel to 2-hour increments.
- **Time, 30-second steps**: `controls: ['time'], stepSecond: 30, timeFormat: 'HH:mm:ss'` — adds a second wheel (via the `HH:mm:ss` format) restricted to 30-second increments.
- Each instance is bound to a Mobiscroll-generated input (`mbsc-input`, `data-input-style="outline"`, `data-label-style="stacked"`) rather than rendered inline.
- `stepHour`, `stepMinute`, and `stepSecond` are independent options — a given instance sets only the step(s) relevant to the wheels it renders; unset step options default to 1.

## What this demo shows

- Four wheel-style date and time picker configurations for selecting a single date and time or a time value with different step intervals.
- **Date and time picker** The first example uses separate scrollable wheels for the date, hour, minute, and AM/PM. Minute values appear at 15-minute intervals. The current date is labeled `Today`, other dates use an abbreviated weekday, month, and date format.
- **Time picker with 5-minute steps** The second example uses separate scrollable wheels for the hour, minute, and AM/PM. Minute values appear at 5-minute intervals.
- **Time picker with 2-hour steps** The third example uses separate scrollable wheels for the hour, minute, and AM/PM. Hour values appear at 2-hour intervals.
- **Time picker with 30-second steps** The fourth example uses separate scrollable wheels for the hour, minute, and second. Second values appear at 30-second intervals.
- **Input behavior** Each picker opens at the bottom of the container over a darkened backdrop. Clicking outside the picker closes it.
- **Scrolling behavior** The selected values appear in a central selection area, while neighboring values are visually subdued. Users scroll vertically through each wheel to change the selection.
- **Footer actions** In the input-based examples, `Cancel` discards the changes and `Set` confirms the selected values.
- **Input value** After the user selects `Set`, the input displays the confirmed value in the format configured for that example.

## Best for

- **15-minute appointments** Booking interfaces for consultations, classes, or services that begin at quarter-hour intervals.
- **5-minute scheduling** Selecting precise start times for short appointments, transport departures, or other activities organized in 5-minute increments.
- **2-hour time blocks** Planning shifts, equipment reservations, or activities scheduled in larger blocks.
- **30-second precision** Selecting time values for short-duration processes, exercise intervals, or timed operational tasks that require half-minute increments.
