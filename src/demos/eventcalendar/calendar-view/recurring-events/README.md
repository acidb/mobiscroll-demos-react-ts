To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/recurring-events#).

## Demo description

Configure `daily`, `weekly`, `monthly` and `yearly` recurring events. On top of setting up recurrence, you can exclude specific and recurring days. This is especially useful in cases when a single occurrence of an event is deleted or is moved to a different time.

You can pass the recurrence rule in the `recurring` property of the event as an object or a string in `RRULE` format. [Learn about the event data structure and where to place the recurring rules](https://demo.mobiscroll.com/react/eventcalendar/event-data-structure#).

Use the configurator to experiment, build strings and objects that you can grab and use.

- **Interested in adding recurrence configuration to your UI?** [Take a look at this add/edit dialog &#8594;](https://demo.mobiscroll.com/react/eventcalendar/recurring-event-add-edit-dialog#)

## Implementation instructions

- Set `view: { calendar: { labels: true } }`.
- Add a `recurring` object to an event to make it repeat. Set `repeat` to `'daily'`, `'weekly'`, `'monthly'`, or `'yearly'`. Control the range with `from` (start date of occurrences) and `until` (end date), or cap the total count with `count`. For `weekly`, set `weekDays` to a comma-separated string of day codes (`'SU'`, `'MO'`, `'TU'`, `'WE'`, `'TH'`, `'FR'`, `'SA'`) and optionally `interval` to repeat every N weeks. For `monthly`, set `day` to the day of month. For `yearly`, set `day` and `month`. The `recurring` value can also be passed as a string in RRULE format.
- To skip specific occurrences, add a `recurringException` array of dates (strings or Date objects) to the event. To skip occurrences that match a recurring pattern, add a `recurringExceptionRule` object with its own `repeat` rule.

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
