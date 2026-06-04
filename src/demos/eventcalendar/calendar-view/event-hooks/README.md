To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/event-hooks#).

## Demo description

The event calendar ships with different hooks for deep customization. Events are triggered through the lifecycle of the component where you can tie in custom functionality and code.

While users interact with the UI events like `onEventClick`, `onInit`, `onSelectedDateChange` ... will be triggered.

- **For a complete list of events go to the documentation** See available lifecycle events &#8594;

## Related demos

- See available lifecycle events &#8594;

## Implementation instructions

- Use lifecycle event callbacks to capture interactions such as initialization, hover, date selection, event selection, drag-and-drop, and event creation.

## What this demo shows

- A desktop month-view event calendar that demonstrates lifecycle events triggered by calendar interactions.
- **External drag & drop** Two external events are shown above the calendar and can be dragged onto the month grid.
- **Month grid** The calendar displays a full month view with weekends disabled.
- **Event labels** Days with events show colored labels inside the day cells, with different colors distinguishing different events.
- **Overflow handling** The number of visible event labels depends on the available space in the day cell.
- **More events popover** When not all events fit, the day cell shows an `X more` label that opens a popover with the hidden events.
- **Event selection** Clicking an event label highlights the selected event.
- **Cell hover** Hovering over a day cell highlights the day number in the top-right corner with a gray background.
- **Date selection** Clicking the empty area of a day cell selects the day and highlights its day number with a blue background.
- **Month navigation** The calendar supports navigating between months by dragging left or right.
- **Header controls** The header shows the current month and year, previous and next navigation arrows, and a Today button for returning to the current date.
- **Event log** An Event log panel is shown at the bottom left and lists the lifecycle events fired during interactions such as event creation, hover, drag, and similar actions.

## Best for

- **Lifecycle event discovery** Understanding which Event calendar lifecycle hooks fire during common user interactions.
- **Interaction testing** Exploring how the calendar behaves during hover, selection, drag-and-drop, and event creation flows.
- **Custom event handling** Learning where to attach custom logic when users interact with month-view calendar cells and events.
- **Implementation planning** Using a practical reference when building custom workflows on top of the Event calendar component.
