To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/custom-event-sort#).

## Demo description

When rendering events, the default logic determines the order: 
- All-day events are placed at the top
- Non-all-day events follow, sorted by their start times
- Events with the same start time are ordered alphabetically by their title

The `order` property of the event data can be used to override the default ordering. The `order` property takes precedence over the default rules. If two events have the same order value, the default rules apply. For a more advanced order logic, the eventOrder option can be used which expects a function that compares two events and returns an order (-1 or 1).

- **Do you want to learn about the event ordering?** [Learn more about it in the documentation &#8594;](https://docs.mobiscroll.com/react/eventcalendar/calendar#event-order)

## Implementation instructions

- Use the event `order` property to override the default event ordering in the calendar.
- For more advanced custom sorting logic, use the `eventOrder` option with a compare function that returns `-1` or `1`.

## What this demo shows

- A weekly event calendar view where events are rendered as labels inside the day cells.
- **Event label ordering** Event labels are normally ordered with all-day events first, followed by non-all-day events sorted by start time, then alphabetically by title when start times match.
- **Custom event order** This demo reorganizes the labels with custom event ordering.
- **Event states** Labels use different visual styles to distinguish states such as `PROPOSED` and `APPROVED`.
- **Event selection** Clicking or hovering over an event label highlights it as the selected event.
- **Day hover state** Hovering over a day cell highlights the day number in the top-right corner with a gray background.
- **Day selection** Clicking the empty area of a day cell selects that day and highlights the day number with a blue background.
- **Calendar navigation** The visible week can be changed by clicking and dragging the calendar left or right.
- **Header controls** The header shows the current month and year on the left, with previous and next navigation arrows and a `Today` button on the right.

## Best for

- **Staff absence planning** Showing multiple time-off requests on the same day in a compact weekly calendar.
- **Leave management** Tracking proposed and approved leave requests with distinct visual states.
- **Team availability overview** Giving HR teams, managers, and team leads a quick view of who is unavailable across the week.
