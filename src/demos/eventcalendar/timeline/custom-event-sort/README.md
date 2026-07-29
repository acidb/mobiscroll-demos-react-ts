To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/custom-event-sort#).

## Demo description

The rendering engine uses the following two concepts to determine how the events are rendered:
1. Event data order
2. Event layout

The data order is determined by the following logic:
- All-day events are placed at the top
- Non-all-day events follow, sorted by their start times
- Events with the same start time are ordered alphabetically by their title

The event layout process determines the visual positioning and dimensions of events. This is a built-in functionality and cannot be altered externally. The layout algorithm processes the sorted event list and calculates each event's position and size. The algorithm follows these steps:
1. The first event is placed in the first position of the event track
2. If two or more events overlap in their start/end times, the later event is placed in the next event track, positioned below to the previous event
3. If a subsequent event does not overlap with any already added events, it is placed back in the first event track
4. This process continues until all events are positioned within their respective rows

The `order` property of the event data can be used to override the default ordering. The `order` property takes precedence over the default rules. If two events have the same order value, the default rules apply. For a more advanced order logic, the eventOrder option can be used which expects a function that compares two events and returns an order (-1 or 1).

- **Do you want to learn about the event ordering?** [Learn more about it in the documentation &#8594;](https://docs.mobiscroll.com/react/eventcalendar/timeline#event-order)

## Implementation instructions

- Use `timeline: { type: 'week', eventDisplay: 'fill', startDay: 1, endDay: 5 }` — a Monday–Friday week with no resources. All events are `allDay: true`, so they render as full-width fill blocks grouped by day.
- Add a custom `order` property to each event. Lower values are rendered first (higher up within a day cell). Assign `order: 1` to PROPOSED events and `order: 2` to APPROVED events so pending requests always appear above approved ones, regardless of alphabetical title order.
- Color-code by status: yellow (`#e7b300`) for PROPOSED, green (`#00ca10`) for APPROVED. Optionally add a custom `accepted` boolean property as a semantic marker for use in other logic or renderers.
- Compute the current week's Monday from today: `monday = now.getDate() - now.getDay() + (now.getDay() === 0 ? -6 : 1)`. Offset each event's `start` by `monday + N` to distribute entries across Mon–Fri of the current week.
- No `eventOrder` comparator function is needed here — the per-event `order` property is sufficient. For more advanced sorting logic (e.g. sorting by a computed priority), use the `eventOrder` prop with a comparator function `(a, b) => ...` that returns `-1` or `1`.

## What this demo shows

- A desktop weekly timeline for Monday through Friday, with days arranged horizontally and resources arranged vertically on the left.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed strip below the header shows the selected work week from Monday to Friday, with the current date highlighted.
- **Resources** Shows two resources vertically on the left side of the timeline as individual rows.
- **Event labels** Renders events as colored labels inside the day cells with event title shown in bold.
- **Custom event order** The demo shows how the event `order` property can override the default event ordering rules.
- **Default event order** Without a custom `order` value, all-day events are placed first, timed events are sorted by start time, and events with the same start time are sorted alphabetically by title.
- **Layout behavior** The built-in timeline layout algorithm places overlapping events into adjacent columns and returns non-overlapping events to the first available column.
- **Advanced ordering** The `eventOrder` option can be used when event ordering needs custom comparison logic beyond the `order` property.
- **Date positioning** Positions events according to both their assigned resource and exact date range.
- **Event interaction** Highlights events on hover and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Selects and highlights an event when it is clicked.
- **Event creation** Creates a new event by double-clicking the timeline or by clicking and dragging on it.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through time and resources.

## Best for

- **Custom event ordering** Demonstrating how to control the order of overlapping events in a timeline view.
- **Dense weekly schedules** Showing multiple events that share the same day or time range while keeping their visual order predictable.
- **Priority-based scheduling** Displaying events where priority, status, or another business rule should influence render order.
