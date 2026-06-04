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
