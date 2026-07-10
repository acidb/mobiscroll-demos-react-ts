To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/recurring-events#).

## Demo description

Configure `daily`, `weekly`, `monthly` and `yearly` recurring events. On top of setting up recurrence, you can exclude specific and recurring days. This is especially useful in cases when a single occurrence of an event is deleted or is moved to a different time.

You can pass the recurrence rule in the `recurring` property of the event as an object or a string in `RRULE` format. [Learn about the event data structure and where to place the recurring rules](https://demo.mobiscroll.com/react/agenda/event-data-structure#).

Use the configurator to experiment, build strings and objects that you can grab and use.

- **Interested in adding recurrence configuration to your UI?** [Take a look at this add/edit dialog →](https://demo.mobiscroll.com/react/eventcalendar/recurring-event-add-edit-dialog#)

## Implementation instructions

- Use `view: { agenda: { type: 'month' } }`. Pass a static event array directly to the `data` option. The array contains one event for each `repeat` type to demonstrate the full range:
  - **Daily** (`repeat: 'daily'`): bounded with `from` (ISO date) and `until` (ISO date); also shows `recurringException` (array of specific dates to skip — accepts ISO strings or Date objects) and `recurringExceptionRule` (recurring pattern to skip, e.g. every 1st of the month).
  - **Weekly** (`repeat: 'weekly'`): `weekDays` is a comma-separated string of day codes (`'SU'`, `'MO'`, `'TU'`, `'WE'`, `'TH'`, `'FR'`, `'SA'`); `interval` sets the repeat interval (e.g. `2` = every 2 weeks).
  - **Monthly** (`repeat: 'monthly'`): `day` is the day of the month; `count` limits the total number of occurrences.
  - **Yearly** (`repeat: 'yearly'`): `day` and `month` set the specific date each year.
- The `recurring` rule object is set directly on the event. Events with recurring rules have no `start`/`end` unless bounded by `from`/`until`.
