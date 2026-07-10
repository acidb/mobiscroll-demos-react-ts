To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/move-resize-drag-drop-to-create-events#).

## Demo description

Drag & drop is a core feature of the event calendar and it is composed of four sub-features:

- **Click to create events** - double click to create events. This can be turned off or set to single click
- **Drag to create events** - tap/click to start creating an event and drag to the desired length
- **Move events** - grab an event and move it wherever needed
- **Resize events** - change the length of an event, grab it from either end and resize it
- **Delete events** - pressing the `Delete` or `Backspace` keys on the keyboard will delete the focused event

You have granular control over features through the `clickToCreate`,
`dragToCreate`, `dragToMove`,
`dragToResize` and `eventDelete` options, which are `false` by default.

Use the `dragTimeStep` option (defaults to 15 minutes) to set the snap resolution of all drag actions.

Events can be marked as fixed by setting their `editable` property to false. This turns delete, drag & drop move and resize off for the event. The `mbsc-event-readonly` CSS class will be added to the events. This means if you would like to add opacity, override the mouse cursor or apply any other CSS override, you can add it to this class.

## Implementation instructions

- Use `view: { scheduler: { type: 'week' } }`.
- Define events across 4 categories with relative dates: **Fixed events** (`editable: false`, grey) — locked against all interactions; **"Drag me"** (yellow) — moveable; **"Resize me"** (red) — resizable; **"Move me around"** (green) — both moveable and resizable.
- Enable `dragToCreate: true`, `dragToMove: true`, `dragToResize: true`. Set `dragTimeStep: 15` to snap all drag actions to 15-minute increments.
- Events with `editable: false` are locked — Mobiscroll adds `mbsc-event-readonly` to their CSS class, which can be targeted for visual overrides.

## What this demo shows

- A desktop weekly scheduler layout with a fixed week strip at the top, a fixed all-day row below it, and a scrollable scheduler time grid for the selected week.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed strip below the header displays the days of the selected week, with the current date highlighted by a blue circle.
- **All-day events** All-day events appear in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected week.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **View controls** A configuration panel next to the scheduler lets users switch between `Daily scheduler` and `Weekly scheduler`, with the weekly scheduler selected by default.
- **Daily scheduler** Selecting `Daily scheduler` updates the layout to display a daily scheduler view.
- **Interaction controls** Below the view controls a second panel titled `Granular control over the interaction` allows individual interaction modes to be enabled or disabled.
- **Toggles** The panel includes five switches, all enabled by default: `Click to create event (double click)`, `Drag to create event`, `Move & reorder`, `Drag to resize existing events`, and `Delete events`.
- **Create interactions** Double-clicking empty space on time grid creates a new event when click-to-create is enabled.
- **Drag-create interactions** Clicking and dragging across empty space on time grid creates a new event when drag-to-create is enabled.
- **Move interactions** Existing events can be dragged to a different date/ hour when move and reorder is enabled.
- **Resize interactions** Existing events can be resized from either end when drag-to-resize is enabled.
- **Delete interactions** The focused event can be deleted with the `Delete` or `Backspace` key when event deletion is enabled.
- **Drag sensitivity controls** A third panel titled `Control drag sensitivity` lets users define the snap interval in minutes used during drag operations.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid, with a small blue dot marking the current date.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Read-only events** Events marked with `editable: false` remain visible but cannot be moved, resized, or deleted.

## Best for

- **Scheduling UIs with permissions** Scenarios where event creation, moving, resizing, and deletion need to be enabled or disabled independently.
- **Role-based workflows** Products where different users or application modes should allow different editing actions in the same scheduler UI.
- **Guardrailed editing** Use cases where users should be able to interact with the calendar while specific actions remain restricted.
- **Mixed editable and fixed events** Schedulers that combine movable events with locked entries that should remain visible but not editable.
- **Admin and operator dashboards** Interfaces where administrators need full editing capabilities while other users have limited access.
- **Workflow testing and configuration** Applications that need to demonstrate or dynamically configure scheduler interaction behavior.
