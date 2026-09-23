To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/range/adding-event-start-end#).

## Demo description

Use the range picker for a new event creation. Let people pick start and end dates when adding events.

Dynamically switch between date only and date-time entry based on an "all-day" switch by changing the `controls` to `'date'` or `'datetime'`.

- **Interested in an event calendar solution?** [Check out the event calendar →](https://demo.mobiscroll.com/react/eventcalendar/#)

## Related demos

- [Check out the event calendar →](https://demo.mobiscroll.com/react/eventcalendar/#)

## Implementation instructions

- Set `select: 'range'` with `controls: ['datetime']` (or `['date']` for all-day) on a single `Datepicker` instance to collect a start and end date/time pair.
- Bind the picker to two separate fields via `startInput`/`endInput` instead of a single value input: React/Vue pass input element refs, Angular passes template reference variables through `[startInput]`/`[endInput]`, and JS/jQuery pass CSS selector strings (e.g. `'#start'`, `'#end'`).
- Toggling an "all-day" control switches `controls` between `['date']` and `['datetime']` at runtime: JS/jQuery call `.setOptions({ controls: [control] })` on the picker instance; React recomputes the `controls` prop from state; Angular/Vue update the bound `controls` array reactively.
- The picker only manages the date/time range itself — title, location, busy/free, and notes are ordinary form fields with no picker-option equivalent.

## What this demo shows

- Shows a mobile form for creating and editing calendar events with a date range picker.
- **Event details** Fields for the title, location, all-day status, start and end date and time, availability, and notes.
- **Initial values** The editor can open with predefined start and end values or empty date fields for the user to complete.
- **All-day events** A toggle switches between timed and all-day events, changing the picker controls from date and time to date only.
- **Availability** A segmented control sets the event status to busy or free.
- **Date and time selection** Selecting the start or end field opens a wheel-style picker optimized for touch interaction.
- **Range editing** The start and end values can be edited independently while both remain visible in the picker for context.
- **Picker actions** Cancel discards date and time changes, while Set confirms them.

## Best for

- **Calendar event creation** Mobile forms for adding or updating calendar events.
- **Appointment scheduling** Editors that collect event details, date ranges, and availability.
- **Meeting editors** Workflows for switching between timed and all-day meetings.
