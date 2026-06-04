To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/move-resize-drag-drop-to-create-events#).

## Demo description

Drag & drop is a core feature of the event calendar and it is composed of four sub-features:

- **Click to create events** - double click to create events. This can be turned off or set to single click
- **Drag to create events** - tap/click to start creating an event and drag to the desired length
- **Move events** - grab an event and move it wherever needed
- **Resize events** - change the length of an event, grab it from either end and resize it
- **Delete events** - pressing the `Delete` or `Backspace` keys on the keyboard will delete the focused event

You have granular control over features through the
`clickToCreate`,
`dragToCreate`,
`dragToMove`,
`dragToResize` and
`eventDelete` options, which are `false` by default.

Events can be marked as fixed by setting their `editable` property to false. This turns delete, drag & drop move and resize off for the event. The `mbsc-event-readonly` CSS class will be added to the events. This means if you would like to add opacity, override the mouse cursor or apply any other CSS override, you can add it to this class.

## Implementation instructions

- Use the `clickToCreate`, `dragToCreate`, `dragToMove`, `dragToResize`, and `eventDelete` options to control event creation, moving, resizing, and deletion independently. These options are `false` by default.
- Set an event's `editable` property to `false` to mark it as fixed. This disables delete, drag-and-drop move, and resize behavior for that event.
- Use the `mbsc-event-readonly` class for visual overrides such as reduced opacity, a different cursor, or other styling that helps distinguish fixed events from editable ones.

## What this demo shows

- A desktop month view event calendar with drag-and-drop interactions enabled.
- **Month grid** Each day cell can display one or more event labels directly inside the month view.
- **Event styling** Event labels can use different visual styles to distinguish different kinds of events.
- **Event labels** Each label has a colored line on the left, the event title, and an `end` value that shows the event end time.
- **Event selection** Clicking an event highlights the selected event label.
- **Interaction controls** A control panel appears next to the calendar under the text `Granular control over the interaction`.
- **Toggles** The panel includes five switches, all enabled by default: `Click to create event (double click)`, `Drag to create event`, `Move & reorder`, `Drag to resize existing events`, and `Delete events`.
- **Create interactions** Double-clicking empty space in a day cell creates a new event when click-to-create is enabled.
- **Drag-create interactions** Dragging across empty space in a day cell creates a new event when drag-to-create is enabled.
- **Move interactions** Existing events can be dragged to a different date when move and reorder is enabled.
- **Resize interactions** Existing events can be resized from either end when drag-to-resize is enabled.
- **Delete interactions** The focused event can be deleted with the `Delete` or `Backspace` key when event deletion is enabled.
- **Cell hover state** Hovering a day cell highlights the day number and any events in that cell.
- **Day selection** Clicking the empty area of a day cell selects the day and highlights the day number with a blue background.
- **Calendar header** The header shows the current month and year, previous and next month navigation arrows, and a `Today` button to return to the current date.

## Best for

- **Scheduling UIs with permissions** Scenarios where event creation, moving, resizing, and deletion need to be enabled or disabled independently.
- **Role-based workflows** Products where different users or modes should allow different editing actions in the same calendar UI.
- **Interactive planning tools** Team calendars, availability planners, and internal scheduling tools where users need direct drag-and-drop editing in month view.
- **Guardrailed editing** Use cases where users should be able to interact with the calendar while specific actions stay restricted.
- **Mixed editable and fixed events** Calendars that combine movable events with locked entries that should remain visible but not editable.
- **Feature evaluation** Comparing which interaction model works best for a given workflow, such as double-click creation versus drag-to-create.
