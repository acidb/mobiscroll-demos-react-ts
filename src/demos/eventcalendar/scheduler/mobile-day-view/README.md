To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/mobile-day-view#).

## Demo description

View daily schedules with a fixed week view at the top and a scrollable schedule for the day. The week view is optional and can be turned off.

All-day events are fixed at the top below the header and calendar.

The dates can be quickly navigated by clicking on the month & year indicator.

- **Interested in weekly schedule?** [Explore this example &#8594;](https://demo.mobiscroll.com/react/scheduler/desktop-week-view#)

## Implementation instructions

- Combine the daily scheduler with a week strip in the `view` configuration to keep week-based date navigation visible above the schedule.

## What this demo shows

- A mobile daily scheduler view with a fixed week strip at the top, a fixed all-day row below it, and a scrollable time grid for the selected day.
- **Header navigation** The month and year label in the top left opens date navigation, while the previous and next arrows and the blue Today button on the right make it easy to move between dates and jump back to the current day.
- **Week view** The fixed week strip below the header shows the surrounding dates for quick day switching. Dates highlight on hover, and the selected day is marked with a blue circle.
- **All-day events** All-day events are displayed in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler below the all-day row scrolls vertically through the hours of the selected day.
- **Hover feedback** Hovering the time grid shows a time indicator that follows the pointer in 15-minute increments.
- **Event rendering** Events appear as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event interactions** Hovering an event highlights it and shows resize and drag handles, indicating that events can be resized or repositioned.
- **Event creation** Double-clicking the time grid or dragging on it creates a new event.
- **Event selection** Clicking or selecting an event shows a toast message with the event title.
- **Current time** A blue line across the scheduler indicates the current time.

## Best for

- **Business schedules** Daily meeting-heavy calendars for product teams, leadership groups, internal planning, and other workdays with overlapping appointments.
- **Personal planning** Mobile calendar experiences that combine work, errands, travel, and personal plans in a single day view.
- **Dense mobile scheduling** Apps that need to fit a large number of events into a compact phone layout while keeping the schedule readable.
- **Operational scheduling** Use cases such as field service, medical scheduling, conference planning, or shift coordination where users need a fast day-by-day view on mobile.
- **Scheduler feature demos** Showcasing all-day events, current-time tracking, day navigation, drag-and-resize interactions, and overlapping event layout in one mobile scheduler example.
- **Overlap testing** Validating how the scheduler places side-by-side and overlapping events without fully hiding conflicts.
