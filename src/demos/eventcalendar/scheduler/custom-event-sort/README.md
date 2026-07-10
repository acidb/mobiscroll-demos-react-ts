To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/custom-event-sort#).

## Demo description

The rendering engine uses the following two concepts to determine how the events are rendered:

1. Event data order
2. Event layout

The data order is determined by the following logic:

- All-day events are placed at the top
- Non-all-day events follow, sorted by their start times
- Events with the same start time are ordered alphabetically by their title

The event layout process determines the visual positioning and dimensions of events. This is a built-in functionality and cannot be altered externally. The layout algorithm processes the sorted event list and calculates each event's position and size. The algorithm follows these steps:

1. The first event is placed in the first position of the event column
2. If two or more events overlap in their start/end times, the later event is placed in the next event column, positioned after to the previous event
3. If a subsequent event does not overlap with any already added events, it is placed back in the first event column
4. This process continues until all events are positioned within their respective columns

The `order` property of the event data can be used to override the default ordering. The `order` property takes precedence over the default rules. If two events have the same order value, the default rules apply. For a more advanced order logic, the eventOrder option can be used which expects a function that compares two events and returns an order (-1 or 1).

- **Do you want to learn about the event ordering?** [Learn more about it in the documentation &#8594;](https://docs.mobiscroll.com/react/eventcalendar/scheduler#event-order)

## Implementation instructions

- Use `view: { scheduler: { type: 'week' } }`.
- Define 12 events inline using `dyndatetime` offsets, spread across day−1, today, and day+1. Each event carries `id`, `start`, `end`, `title`, `order`, and `color`.
- The `order` property overrides the default event sort. Lower values are rendered first when events overlap in the same time slot. Event titles encode the assigned order value (e.g. `'Event 1 - order 2'`, `'Event 4 - order 1'`) to make the ordering effect immediately visible.
- Each order value maps to a distinct color, so priority groups are visually distinct in the rendered output.

## What this demo shows

- A desktop weekly scheduler layout with a fixed week strip at the top, a fixed all-day row below it, and a scrollable scheduler time grid for the selected week.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed strip below the header displays the days of the selected week, with the current date highlighted by a blue circle.
- **All-day events** All-day events appear in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected week.
- **Event styling** Event cards use distinct colors and a colored left stripe to make overlapping or differently ordered events easier to distinguish.
- **Custom event order** The demo shows how the event `order` property can override the default event ordering rules.
- **Default event order** Without a custom `order` value, all-day events are placed first, timed events are sorted by start time, and events with the same start time are sorted alphabetically by title.
- **Layout behavior** The built-in scheduler layout algorithm places overlapping events into adjacent columns and returns non-overlapping events to the first available column.
- **Advanced ordering** The `eventOrder` option can be used when event ordering needs custom comparison logic beyond the `order` property.
- **Current time** A blue current-time line appears across the time grid, with a small blue dot marking the current date.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Custom event ordering** Demonstrating how to control the order of overlapping events in a scheduler view.
- **Dense weekly schedules** Showing multiple events that share the same day or time range while keeping their visual order predictable.
- **Priority-based scheduling** Displaying events where priority, status, or another business rule should influence render order.
