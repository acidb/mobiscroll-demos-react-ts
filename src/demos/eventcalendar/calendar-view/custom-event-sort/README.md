To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/custom-event-sort#).

## Demo description

When rendering events, the default logic determines the order:

- All-day events are placed at the top
- Non-all-day events follow, sorted by their start times
- Events with the same start time are ordered alphabetically by their title

The `order` property of the event data can be used to override the default ordering. The `order` property takes precedence over the default rules. If two events have the same order value, the default rules apply. For a more advanced order logic, the eventOrder option can be used which expects a function that compares two events and returns an order (-1 or 1).

Do you want to learn about the event ordering?&nbsp;
[Learn more about it in the documentation &#8594;](https://docs.mobiscroll.com/react/eventcalendar/calendar#event-order)
