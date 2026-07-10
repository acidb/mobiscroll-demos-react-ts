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
