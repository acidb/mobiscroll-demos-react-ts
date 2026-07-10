To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/date-object-ISO-8601-moment#).

## Demo description

Understanding how to work with dates inside the scheduler is essential.
You can pass to the `data`, `marked`, `colors` and `labels` in four different formats.
The scheduler can work with **Javascript date objects, ISO strings** and **Moment.js objects**.

## Implementation instructions

- Render three separate `Eventcalendar` instances side by side in a 3-column grid. Use `view: { scheduler: { type: 'week' } }` for all three.
- **Column 1 — JavaScript `Date` object**: pre-load one event using `new Date(2020, 4, 19, 7)` start and `new Date(2020, 4, 19, 8)` end. Navigate to `new Date(2020, 4, 19)` on init. A button adds a second event using `new Date(...)` format, then navigates.
- **Column 2 — ISO 8601 string**: pre-load one event with `'2020-05-20T07:00:00'` start and `'2020-05-20T08:00:00'` end. Navigate to `'2020-05-20'` on init. A button adds a second event using ISO strings, then navigates.
- **Column 3 — Moment.js object**: import `moment`; pre-load one event using `moment([2020, 4, 21, 7])` and `moment([2020, 4, 21, 8])`. Navigate to `moment([2020, 4, 21])` on init. A button adds a second event using moment objects.
- **Navigation**: bind `selectedDate` to a state variable using the same date format as that column; for the imperative API, call `inst.navigate(date)` with the matching format.
- The key insight: `start`, `end`, `selectedDate`, and `.navigate()` all accept Date objects, ISO strings, and Moment objects interchangeably.

## What this demo shows

- A desktop weekly scheduler layout with a fixed week strip at the top, a fixed all-day row below it, and a scrollable scheduler time grid for the selected week.
- **Example panel** Three code snippets are displayed to the left of the scheduler, each showing a supported event date format.
- **Supported formats** The examples cover `JS date object`, `ISO date string` and `Moment.js object`.
- **Add event actions** Each code example has a button that adds a new event to the scheduler using that format.
- **Button labels**: The buttons are labeled `Add event with JS date object`, `Add event with ISO string` and `Add event with moment.js object`.
- **Button interaction** Hovering a button highlights it, and clicking it inserts a new event into the scheduler view.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed strip below the header displays the days of the selected week, with the current date highlighted by a blue circle.
- **All-day events** All-day events appear in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected week.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid, with a small blue dot marking the current date.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Supported date inputs** Explaining which date formats the scheduler accepts for event-related data.
