To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/date-object-ISO-8601-moment#).

## Demo description

Understanding how to work with dates inside the agenda is essential.
You can pass to the `data`, `marked`, `colors` and `labels` in four different formats.
The agenda can work with **Javascript date objects, ISO strings** and **Moment.js objects**.

## Implementation instructions

- Use `view: { agenda: { type: 'month' } }`. Render three Eventcalendar instances side by side in a `Page` + grid layout, each demonstrating a different date format: JavaScript `Date` object (e.g. `new Date(2020, 4, 19, 7)`), ISO 8601 string (e.g. `'2020-05-20T07:00:00'`), and Moment.js object (e.g. `moment([2020, 4, 21, 7])`). Each instance is pre-seeded with one event using its respective format and navigated to its date on init.
- Above each calendar place a Button displaying the date format syntax. On click, add a new event in the same format and navigate to that date. For the imperative API, call `inst.addEvent(event)` and `inst.navigate(date)` instead of updating `selectedDate`.

## What this demo shows

- Shows a monthly agenda view with an empty agenda list by default, so no events appear until one is added from the examples.
- **Example panel** Three code snippets are displayed to the left of the agenda, each showing a supported event date format.
- **Supported formats** The examples cover `JS date object`, `ISO date string` and `Moment.js object`.
- **Add event actions** Each code example has a button that adds a new event to the agenda using that format.
- **Button labels**: The buttons are labeled `Add event with JS date object`, `Add event with ISO string` and `Add event with moment.js object`.
- **Button interaction** Hovering a button highlights it, and clicking it inserts a new event into the month view.
- **Header navigation** The month and year label in the top left opens date navigation. The previous and next arrows and the Today button on the right move between months and jump back to the current date.
- **Agenda list** The area below the header lists events for the selected month. Events in the agenda are grouped by date.
- **Sticky day headers** As the agenda scrolls vertically, each day stays visible with a sticky date header while its events appear underneath.
- **Events** Events appear as agenda cards with a colored strip on the left and the event title next to it. Start and end times are stacked on the right side of timed events. All-day events show the all-day label on the right.
- **Event interaction** Hovering an event highlights it.
- **Event selection** Clicking an event selects and highlights it.

## Best for

- **Supported date inputs** Explaining which date formats the agenda accepts for event-related data.
