To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/load-inline-data#).

## Demo description

What is a scheduler without any events in it? To populate it with events all you have to do is pass the event array to the `data` option.

In a real-world scenario you would probably [load the events from a remote resource](https://demo.mobiscroll.com/react/scheduler/load-events-from-remote-api#) or event better, [load them on demand](https://demo.mobiscroll.com/react/scheduler/load-events-on-demand#). However the point of this example is to understand how easy it is to add events to the scheduler.

- **Do you want to learn about the event data sctructure?** [See how the event object is built &#8594;](https://demo.mobiscroll.com/react/scheduler/event-data-structure#)

## Related demos

- [See how the event object is built &#8594;](https://demo.mobiscroll.com/react/scheduler/event-data-structure#)

## Implementation instructions

- Use a combined view: `view: { calendar: { type: 'week' }, scheduler: { type: 'day' } }` — a week calendar strip above and a day scheduler below.
- Pass a static array directly to the `data` option. The dataset demonstrates the full range of event patterns:
  - **Timed events** with `dyndatetime` offsets for relative dates
  - **Multi-day events** spanning several days (e.g., conferences, vacations)
  - **All-day events** via `allDay: true`
  - **Recurring yearly events** using `recurring: { repeat: 'yearly', month: M, day: D }`
  - **Recurring weekly events** using `recurring: { repeat: 'weekly', weekDays: 'WE' }`

## What this demo shows

- A mobile daily scheduler view with a fixed week strip at the top, a fixed all-day row below it, and a scrollable time grid for the selected day.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between dates and jump back to the current day.
- **Week view** The fixed week strip below the header shows the surrounding dates for quick day switching. Dates highlight on hover, and the selected day is marked with a blue circle.
- **All-day events** All-day events are displayed in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler below the all-day row scrolls vertically through the hours of the selected day.
- **Hover feedback** Hovering the time grid shows a time indicator that follows the pointer in 15-minute increments.
- **Event rendering** Events appear as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Event interactions** Hovering an event highlights it and shows resize and drag handles, indicating that events can be resized or repositioned.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.
- **Event selection** Clicking an event selects and highlights it.
- **Current time** A blue line across the scheduler indicates the current time.

## Best for

- **Business schedules** Daily meeting-heavy calendars for product teams, leadership groups, internal planning, and other workdays with overlapping appointments.
- **Operational scheduling** Use cases such as field service, medical scheduling, conference planning, or shift coordination where users need a fast day-by-day view on mobile.
