To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/recurring-events#).

## Demo description

Configure `daily`, `weekly`, `monthly` and `yearly` recurring events. On top of setting up recurrence, you can exclude specific and recurring days. This is especially useful in cases when a single occurrence of an event is deleted or is moved to a different time.

You can pass the recurrence rule in the `recurring` property of the event as an object or a string in `RRULE` format. [Learn about the event data structure and where to place the recurring rules](https://demo.mobiscroll.com/react/timeline/event-data-structure#).

Use the configurator to experiment, build strings and objects that you can grab and use.

- **Interested in adding recurrence configuration to your UI?** [Take a look at this add/edit dialog &#8594;](https://demo.mobiscroll.com/react/eventcalendar/recurring-event-add-edit-dialog#)

## Implementation instructions

- Use `timeline: { type: 'week' }` — a week view.
- Define 5 resources: Resource A (yellow `#fdf500`), Resource B (red `#ff0101`), Resource C (blue `#01adff`), Resource D (green `#239a21`), Resource E (orange `#ff4600`).
- Define 4 events, each demonstrating a different `recurring` repeat type:

  1. **Daily** — "Holiday" (`allDay: true`, assigned to all 5 resources via `resource: [1, 2, 3, 4, 5]`):
     ```
     recurring: { repeat: 'daily', from: '2021-06-01', until: '2021-07-20' }
     recurringException: ['2021-07-05', new Date(2021, 6, 6)]
     recurringExceptionRule: { repeat: 'monthly', day: 1 }
     ```
     - `from`/`until` bound the occurrence range to June 1–July 20, 2021.
     - `recurringException` removes specific dates: July 5 (ISO string) and July 6 (Date object) — showing that both formats are accepted.
     - `recurringExceptionRule` removes all occurrences that fall on the 1st of any month (in this range, July 1).

  2. **Weekly** — "Shopping day" (resource D):
     ```
     recurring: { repeat: 'weekly', weekDays: 'SA', interval: 2 }
     ```
     Repeats every other Saturday. `weekDays` accepts a comma-separated string of day codes: `'SU'`, `'MO'`, `'TU'`, `'WE'`, `'TH'`, `'FR'`, `'SA'`.

  3. **Monthly** — "Pay day" (resource E):
     ```
     recurring: { repeat: 'monthly', day: 15, count: 12 }
     ```
     Repeats on the 15th of each month for 12 occurrences total.

  4. **Yearly** — "New Year's Eve" (resource B):
     ```
     recurring: { repeat: 'yearly', day: 1, month: 1 }
     ```
     Repeats on January 1st every year.

## What this demo shows

- Shows an interactive recurrence configurator with three selectable sections for defining recurrence rules, excluded dates, and recurring exclusions.
- **Recurring rule** Displays a selectable row with an input that reflects the currently selected recurrence settings and a dark blue `Edit` button.
- **Recurring rule popup** Clicking the input or the `Edit` button opens a popup below the input.
- **Recurrence type** The top of the popup contains a segmented control with `Daily`, `Weekly`, `Monthly`, and `Yearly` options, where the selected option defines the recurrence type.
- **Repeat interval** Below the segmented control, the popup shows a `Repeat every [input] days` field with helper text explaining that the event repeats every day or every `x` days based on the entered value.
- **Stop condition** The bottom part of the popup contains a `Stop condition` section with three options for ending the recurrence.
- **Never stop** Shows an option that repeats the event indefinitely.
- **Run until date** Shows an option with a date input that opens a date picker and repeats the event until a specific date.
- **Run until occurrences** Shows an option with a numeric input that repeats the event until it reaches a specified number of occurrences.
- **Code preview** Next to the recurrence rule configurator, a code snippet updates to show the selected values and how the recurring rule should be configured.
- **Exclude specific dates** Shows a selectable section for excluding dates from recurring events with an `Exclude [input] from recurring events` field.
- **Date exclusion picker** Clicking the exclude input opens a date picker where multiple dates can be selected.
- **Recurring exclusions** Shows a third selectable section for defining a specific recurring rule for the days to exclude.
- **Recurring exclusions code preview** Next to this section, a code snippet shows the selected exclusion values and how that recurring rule should be configured.

## Best for

- **Learning recurrence setup** Explaining to Mobiscroll users how recurring event rules can be configured.
