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
