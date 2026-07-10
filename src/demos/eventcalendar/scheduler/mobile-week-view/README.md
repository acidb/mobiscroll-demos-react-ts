To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/mobile-week-view#).

## Demo description

A full week can be rendered on small screens if needed. The header with the days of the week fixed at the top while the schedule is scrollable.

The screen can easily become crowded so it might be a good idea to think in a responsive implementation - [daily schedule on small screens and weekly schedule on bigger screens](https://demo.mobiscroll.com/react/scheduler/responsive-day-week-schedule#).

- **Interested in daily schedule?** [Explore this example &#8594;](https://demo.mobiscroll.com/react/scheduler/mobile-day-view#)

## Implementation instructions

- Use `view: { scheduler: { type: 'week' } }` — a full-week scheduler. The day-of-week header stays fixed at the top while the time grid scrolls vertically.
- Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. For the imperative API, call `inst.setEvents(events)` in the callback.
- Handle `onEventClick` to show a toast with `args.event.title`.

## What this demo shows

- A mobile weekly scheduler layout with a fixed week strip at the top, a fixed all-day row below it, and a scrollable scheduler time grid for the selected week.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed weekly strip below the header shows the days of the week, with the current date highlighted by a blue circle.
- **All-day events** All-day events are displayed in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected week.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid, with a small blue dot marking the current date.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event highlights it and displays a toast message with the event title at the bottom center of the scheduler.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Mobile weekly scheduling** Showing a full weekly scheduler experience on small screens with both all-day and timed events in a compact layout.
- **Event scheduling apps** Managing meetings, appointments, reminders, and longer events in a single weekly timeline.
- **Team calendars** Visualizing work schedules, standups, client calls, and overlapping events with clear time-based placement.
- **Busy weekly schedules** Helping users scan dense schedules quickly when the week includes overlapping, long-running, and all-day events.
