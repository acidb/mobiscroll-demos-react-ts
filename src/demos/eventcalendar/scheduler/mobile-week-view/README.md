To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/mobile-week-view#).

## Demo description

A full week can be rendered on small screens if needed. The header with the days of the week fixed at the top while the schedule is scrollable.

The screen can easily become crowded so it might be a good idea to think in a responsive implementation - [daily schedule on small screens and weekly schedule on bigger screens](https://demo.mobiscroll.com/react/scheduler/responsive-day-week-schedule#).

- **Interested in daily schedule?** [Explore this example &#8594;](https://demo.mobiscroll.com/react/scheduler/mobile-day-view#)

## Implementation instructions

- Configure the weekly scheduler view with the `view` option.

## What this demo shows

- A mobile weekly scheduler layout with a fixed week strip at the top, a fixed all-day row below it, and a scrollable scheduler time grid for the selected week.
- **Week navigation** The visible week can be changed from the month and year label in the top-left header area or with the previous, next, and Today controls in the top-right header area.
- **All-day events** All-day events are shown in a dedicated row that stays visible below the header and week strip.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored event cards with a colored stripe, the event time range, and a bold event title.
- **Current time** A blue current-time line is shown across the time grid to indicate the current time.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event creation** Double-clicking in the time grid or dragging across a time range creates a new event.
- **Event selection** Selecting an event shows a toast message with the title of the selected event.

## Best for

- **Mobile weekly scheduling** Showing a full weekly scheduler experience on small screens with both all-day and timed events in a compact layout.
- **Event scheduling apps** Managing meetings, appointments, reminders, and longer events in a single weekly timeline.
- **Resource booking** Scheduling rooms, staff, vehicles, equipment, or other shared resources across multiple days and times.
- **Travel and itinerary planning** Combining all-day trips or multi-day plans with timed activities in the same weekly view.
- **Team calendars** Visualizing work schedules, standups, client calls, and overlapping events with clear time-based placement.
- **Busy weekly schedules** Helping users scan dense schedules quickly when the week includes overlapping, long-running, and all-day events.
