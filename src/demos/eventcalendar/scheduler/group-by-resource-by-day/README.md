To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/group-by-resource-by-day#).

## Demo description

Resources show up in the header of the calendar as the primary group and below them are the `days`. This can be switched up through the `groupBy` option that expects `'resource'` or `'day'`.

Combined with the day and week-view you can help people quickly find what they are looking for. [Learn how to add an integrated segmented control to the header.](https://demo.mobiscroll.com/react/scheduler/switching-calendar-scheduler-agenda#)

## Implementation instructions

- Use `view: { scheduler: { type: 'week', allDay: false, startDay: 1, endDay: 5, startTime: '08:00', endTime: '17:00' } }` — Mon–Fri, 8am–5pm, no all-day row.
- Define 3 resources, each with `id`, `name`, and `color`: Ryan, Kate, John.
- Load events via `getJson` from a JSONP endpoint on mount; for the imperative API, call `inst.setEvents(events)`.
- No explicit `groupBy` is set — the default scheduler layout renders resources as separate columns within each day.

## What this demo shows

- A desktop weekly scheduler from Monday to Friday, with a fixed resource and week strip, and a vertically scrollable time grid running from 8 AM to 5 PM.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Time grid** The scheduler displays a 9-hour range from 8 AM to 5 PM and supports vertical scrolling.
- **Group by controls** A configuration panel lets users switch between grouping by `Date` and grouping by `Resource`.
- **Resource grouping** With `Resource` selected by default, each resource gets its own week view in the scheduler grid.
- **Date grouping** Selecting `Date` updates the layout so resources are displayed under each date.
- **View controls** A configuration panel lets users switch between `Day` and `Week`, with the weekly scheduler selected by default.
- **Daily scheduler** Selecting `Day` updates the scheduler to show a daily scheduler layout.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Employee scheduling and availability management** Display employee schedules, availability across multiple people in a weekly calendar view.
- **Resource and shift planning** Organize shifts, assignments, and workload distribution while keeping meetings, tasks, and absences visible.
- **Team operations and project coordination** Track recurring meetings, deadlines, field activities, and employee commitments alongside time-off information.
