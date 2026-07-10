To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/desktop-week-view#).

## Demo description

Render a full weeks worth of schedule on the screen. The header with days of the week remains planted at the top while the grid with the hours of the week and scheduled events is scrollable.

The current hour is displayed so that upcoming events can be spotted easily.

- **Interested in daily schedule?** [Explore this example &#8594;](https://demo.mobiscroll.com/react/scheduler/mobile-day-view#)

## Implementation instructions

- Use `view: { scheduler: { type: 'week' } }` — a full-week scheduler. The day-of-week header stays fixed at the top while the time grid scrolls vertically.
- Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. For the imperative API, call `inst.setEvents(events)` in the callback.
- Handle `onEventClick` to show a toast with `args.event.title`.

## What this demo shows

- A desktop weekly scheduler layout with a fixed week strip at the top, a fixed all-day row below it, and a scrollable scheduler time grid for the selected week.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed strip below the header displays the days of the selected week, with the current date highlighted by a blue circle.
- **All-day events** All-day events appear in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected week.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid, with a small blue dot marking the current date.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event highlights it and displays a toast message with the event title at the bottom center of the scheduler.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Employee scheduling and availability management** Display team schedules, vacations, days off, and availability across multiple employees in a single weekly calendar view.
- **Resource and shift planning** Organize shifts, assignments, and workload distribution while keeping meetings, tasks, and absences visible.
- **Team operations and project coordination** Track recurring meetings, deadlines, field activities, and employee commitments alongside personal time-off information.
