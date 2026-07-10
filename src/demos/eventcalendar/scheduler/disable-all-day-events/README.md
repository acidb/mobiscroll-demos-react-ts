To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/disable-all-day-events#).

## Demo description

Hide the all-day events section of the scheduler by setting the `allDay` property under the `view.scheduler` option.

## Implementation instructions

- Use `view: { scheduler: { type: 'week', allDay: false } }` — setting `allDay: false` hides the all-day events row entirely.
- Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. For the imperative API, call `inst.setEvents(events)` in the callback.

## What this demo shows

- A desktop weekly scheduler layout with a fixed week strip, a fixed all-day row, and a vertically scrollable time grid for the selected week.
- **View selection** A configuration panel next to the scheduler lets users switch between `Day view` and `Week view`, with `Week view` selected by default.
- **All-day section control** A switch titled `Control over the all-day section` is enabled by default and labeled `Show all-day events`.
- **All-day visibility** The switch controls whether the all-day section below the header is shown or hidden.
- **Header navigation** The month and year label in the top left opens date navigation, while the previous and next arrows and the `Today` button on the right move between weeks or jump back to the current day.
- **Week strip** The fixed strip below the header displays the days of the selected week, with the current date highlighted by a blue circle.
- **All-day events** All-day events appear in a dedicated row that stays fixed above the time grid if the option is enabled.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected week.
- **Timed events** Timed events are shown as colored cards with a colored stripe on the left, the exact start and end time above the title, and the event title in bold.
- **Event overlapping** Overlapping events are placed side by side so each event remains visible.
- **Current time** A blue current-time line appears across the time grid, with a small blue marker on the current date.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning events or changing their duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Resource planning** Resource planning scenarios where only timed appointments and shifts are relevant.
- **Service scheduling** Service scheduling applications such as healthcare, field service, or consultations where all events have a specific start and end time.
- **Booking and reservation systems** Booking and reservation systems that do not support all-day appointments.
