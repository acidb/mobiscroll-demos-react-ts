To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/resource-view#).

## Demo description

The scheduler can handle multiple resources inside a single instance. Pass the resource list to the `resources` option with an `id`, `name`, `color` and `eventCreation`.

- `id` - This is an id that can be referenced in the event `data`
- `name` - The name of the resource that will be printed at the top of the respective column
- `color` - The color controls the default event color of the resource. Event colors can be specific above this. If the color is omitted the underlying events will inherit the default calendar color
- `eventCreation` - This controls if events can be created or dropped onto this resource

The `resources`
in which the resources appear follows the order of the array passed to the component.

Events can be [shared](https://demo.mobiscroll.com/react/scheduler/shared-events-across-resources#) between resources and it is possible to move events between resources. The move is handled automatically however you can block it if moving an event from one resource to the other is prohibited. Learn about [lifecycle event hooks](https://demo.mobiscroll.com/react/scheduler/event-hooks#).

## Implementation instructions

- Use `view: { scheduler: { type: 'week', allDay: false, startDay: 1, endDay: 5, startTime: '05:00', endTime: '22:00' } }` — Mon–Fri, 5am–10pm, no all-day row.
- Define 5 resources, each with `id`, `name`, and `color`: Flatiron Room, The Capital City (locked), Heroes Square, Thunderdome, King's Landing. Set `eventCreation: false` on "The Capital City (locked)" to prevent any events from being created or dropped there.
- Define 6 inline events with relative dates anchored to the current week's Monday, spread across Tue–Thu and assigned to individual resources.
- Add a `colors` entry for resource 2 spanning `05:00–22:00` with a daily recurrence and a semi-transparent background tint to visually indicate the locked resource column.

## What this demo shows

- A desktop weekly scheduler from Monday to Friday, with a fixed resource and week strip, and a vertically scrollable time grid running from 5 AM to 10 PM.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Resource grouping** The selected week is repeated under each resource, so every resource has its own week view in the scheduler grid.
- **Locked resource** The `The Capital City (locked)` resource does not allow events to be created, dragged, or deleted. Its time grid uses a light yellow background to indicate the restricted state.
- **Time grid** The scheduler displays a 17-hour range from 5 AM to 10 PM and supports vertical scrolling.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Team scheduling by person** Displaying multiple people side by side in a weekly scheduler, with each person represented by a resource header.
- **Resource-based week views** Giving each resource its own weekly schedule while keeping the same weekday and time range across all resources.
- **Restricted resource scheduling** Showing resources where event creation or moving is disabled, while keeping the restricted resource visible in the same scheduler.
- **Workweek planning** Managing weekday schedules where the relevant time range is limited to business hours or extended working hours.
