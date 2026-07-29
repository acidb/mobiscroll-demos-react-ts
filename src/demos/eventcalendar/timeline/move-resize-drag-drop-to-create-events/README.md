To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/move-resize-drag-drop-to-create-events#).

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

- Use `timeline: { type: 'day' }` — a single-day view with each resource as a row.
- Define 5 resources (Resource A–E), each with `id`, `name`, and `color`.
- Add 9 events across 4 categories, all using `dyndatetime` offsets spanning yesterday, today, and tomorrow:
  - **Fixed events** (gray `#9e9e9e`, `editable: false`) — 3 events demonstrating locked/read-only items
  - **"Drag me"** events (amber `#cc9900`) — demonstrating `dragToMove`
  - **"Resize me"** events (red `#ca4747`) — demonstrating `dragToResize`
  - **"Move me around"** events (green `#339966`) — demonstrating both move and resize
- Enable interactions via: `clickToCreate: true`, `dragToCreate: true`, `dragToMove: true`, `dragToResize: true`, `eventDelete: true`.
- Set `dragTimeStep: 15` to snap all drag actions to 15-minute increments.
- Mark fixed events with `editable: false` on the event object — this disables delete, drag-to-move, and drag-to-resize for those events only. Mobiscroll automatically adds the `mbsc-event-readonly` CSS class to them; use this class to apply custom CSS overrides (opacity, cursor, etc.).

## What this demo shows

- A desktop daily timeline where hours are arranged horizontally and resources are listed as rows on the left.
- **Header navigation** The month and year label opens date navigation, while the previous and next arrows move between weeks and the Today button returns to the current date.
- **Day view** The strip below the header shows the selected day, with the current date highlighted. The timeline displays hourly columns from 12 AM to 12 PM.
- **Resources** Multiple resources are shown as separate timeline rows.
- **Current time** A vertical blue line with a time label marks the current time.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **View controls** A configuration panel next to the timeline lets users switch between `Daily timeline` and `Weekly timeline`, with the daily timeline selected by default.
- **Weekly timeline** Selecting `Weekly timeline` updates the layout to display a weekly timeline view.
- **Interaction controls** Below the view controls a second panel titled `Granular control over the interaction` allows individual interaction modes to be enabled or disabled.
- **Toggles** The panel includes five switches, all enabled by default: `Click to create event (double click)`, `Drag to create event`, `Move & reorder`, `Drag to resize existing events`, and `Delete events`.
- **Create interactions** Double-clicking empty space on time grid creates a new event when click-to-create is enabled.
- **Drag-create interactions** Clicking and dragging across empty space on time grid creates a new event when drag-to-create is enabled.
- **Move interactions** Existing events can be dragged to a different date/ hour when move and reorder is enabled.
- **Resize interactions** Existing events can be resized from either end when drag-to-resize is enabled.
- **Delete interactions** The focused event can be deleted with the `Delete` or `Backspace` key when event deletion is enabled.
- **Drag sensitivity controls** A third panel titled `Control drag sensitivity` lets users define the snap interval in minutes used during drag operations.
- **Read-only events** Events marked with `editable: false` remain visible but cannot be moved, resized, or deleted.
- **Event cards** Events are shown as colored cards with a left color stripe, a bold title, a description, and a bold time range.
- **Date positioning** Events are positioned by their assigned resource and exact date range.
- **Event interaction** Events highlight on hover and show drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging across a time range.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through time and resources.

## Best for

- **Scheduling UIs with permissions** Scenarios where event creation, moving, resizing, and deletion need to be enabled or disabled independently.
- **Role-based workflows** Products where different users or application modes should allow different editing actions in the same timeline UI.
- **Guardrailed editing** Use cases where users should be able to interact with the calendar while specific actions remain restricted.
- **Mixed editable and fixed events** Timelines that combine movable events with locked entries that should remain visible but not editable.
- **Admin and operator dashboards** Interfaces where administrators need full editing capabilities while other users have limited access.
- **Workflow testing and configuration** Applications that need to demonstrate or dynamically configure timeline interaction behavior.
