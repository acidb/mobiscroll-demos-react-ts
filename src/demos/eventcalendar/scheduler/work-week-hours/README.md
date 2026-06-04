To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/work-week-hours#).

## Demo description

Customize the scheduler by not only [disabling certain hours](https://demo.mobiscroll.com/react/scheduler/time-off-blocked-ranges#) but hide them through setting the `startTime` and `endTime` properties of the `view.schedule` option. Quikcly set up a work calendar that goes from Monday through Friday with the `startDay` and `endDay` properties and renders the schedule from 8AM to 6PM.

You can easily add breaks - like a "Lunch break" - or disable times with the invalid option.

## Implementation instructions

- Use `type: 'week'` with `startDay: 1`, `endDay: 5`, `startTime: '09:00'`, and `endTime: '18:00'` to restrict the scheduler to Mon–Fri working hours only.
- Define the lunch break as an `invalid` entry with `start: '12:00'`, `end: '13:00'`, a `title`, a custom `type: 'lunch'` property for identification, and `recurring: { repeat: 'weekly', weekDays: 'MO,TU,WE,TH,FR' }` so it blocks the slot on every weekday.
- Enable `dragToCreate` and `dragToMove` for full event management directly on the calendar.
- In `onEventCreateFailed` and `onEventUpdateFailed`, check `args.invalid.type === 'lunch'` and show a `Toast` with a descriptive error message when the user tries to place an event on the lunch break.
