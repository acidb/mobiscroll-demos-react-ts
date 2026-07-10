To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/desktop-day-view#).

## Demo description

Daily schedules can be displayed on large screens as well as small screens.

All-day events are fixed at the top below the header and calendar, while the schedule view is scrollable.

The dates can be quickly navigated by clicking on the month & year indicator.

- **Interested in weekly schedule?** [Explore this example &#8594;](https://demo.mobiscroll.com/react/scheduler/desktop-week-view#)

## Implementation instructions

- Use `view: { scheduler: { type: 'day' } }` — a single-day scheduler with a scrollable time grid.
- Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. For the imperative API, call `inst.setEvents(events)` in the callback.
- Handle `onEventClick` to show a toast with `args.event.title`.

## What this demo shows

- A desktop daily scheduler layout with a fixed week strip at the top, a fixed all-day event row below it, and a scrollable time grid for the selected day.
- **Responsive layout** The daily scheduler expands horizontally to fill the available width of the parent container as the screen size or browser width changes.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between dates and jump back to the current day.
- **Week view** The fixed week strip below the header shows the surrounding dates for quick day switching. Dates highlight on hover, and the selected day is marked with a blue circle.
- **All-day events** All-day events are displayed in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler below the all-day row scrolls vertically through the hours of the selected day.
- **Hover feedback** Hovering the time grid shows a time indicator that follows the pointer in 15-minute increments.
- **Event rendering** Events appear as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Event interactions** Hovering an event highlights it and shows resize and drag handles, indicating that events can be resized or repositioned.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.
- **Event selection** Clicking an event highlights it and displays a toast message with the event title at the bottom center of the scheduler.
- **Current time** A blue line across the scheduler indicates the current time.

## Best for

- **Daily team scheduling** Managing meetings, check-ins, and work blocks in a day-based scheduler with quick access to nearby dates.
- **Workforce and shift planning** Viewing all-day and timed items together when teams need to coordinate daily schedules across a structured timeline.
- **Event-dense planning interfaces** Helping users spot categories, overlaps, and gaps quickly through color-coded event blocks.
