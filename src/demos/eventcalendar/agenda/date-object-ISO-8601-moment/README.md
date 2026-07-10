To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/date-object-ISO-8601-moment#).

## Demo description

Understanding how to work with dates inside the agenda is essential.
You can pass to the `data`, `marked`, `colors` and `labels` in four different formats.
The agenda can work with **Javascript date objects, ISO strings** and **Moment.js objects**.

## Implementation instructions

- Use `view: { agenda: { type: 'month' } }`. Render three Eventcalendar instances side by side in a `Page` + grid layout, each demonstrating a different date format: JavaScript `Date` object (e.g. `new Date(2020, 4, 19, 7)`), ISO 8601 string (e.g. `'2020-05-20T07:00:00'`), and Moment.js object (e.g. `moment([2020, 4, 21, 7])`). Each instance is pre-seeded with one event using its respective format and navigated to its date on init.
- Above each calendar place a Button displaying the date format syntax. On click, add a new event in the same format and navigate to that date. For the imperative API, call `inst.addEvent(event)` and `inst.navigate(date)` instead of updating `selectedDate`.
