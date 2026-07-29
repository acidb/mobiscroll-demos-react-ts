To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/drag-drop-between-calendar-instances#).

## Demo description

There are certain cases when moving the events between calendars can come in handy.

Dragging and dropping events between two scheduler instances can be enabled by turning on the
`externalDrag` and
`externalDrop` options.

## Implementation instructions

- Render two independent `Eventcalendar` instances on the same page, each with `view: { scheduler: { type: 'week' } }`. Each instance has its own separate dataset.
- Enable on both instances: `dragToMove: true`, `eventDelete: true`, `externalDrag: true`, `externalDrop: true`. Both `externalDrag` and `externalDrop` must be set on both calendars for bidirectional transfer — `externalDrag` permits dragging an event out, `externalDrop` permits receiving a drop from another instance.
- Handle `onEventCreated` on each instance. Check `args.action === 'externalDrop'` to distinguish a cross-calendar drop from a regular create. When true, show a `Toast` confirming which calendar received the event.
- Scope each `Toast` to its calendar using the `context` prop (a CSS class or element selector pointing to the receiving calendar's wrapper) so it appears near the correct calendar.

## What this demo shows

- Two separate scheduler instances are displayed one below the other, with `Calendar 1` above `Calendar 2`.
- **Scheduler layout** Each instance uses a desktop weekly scheduler layout with a fixed week strip, a fixed all-day row, and a vertically scrollable time grid.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed strip below the header displays the days of the selected week, with the current date highlighted by a blue circle.
- **All-day events** All-day events appear in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected week.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **External drag and drop** Events can be dragged from one scheduler instance and dropped into the other to move them between the two schedulers.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid, with a small blue dot marking the current date.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Multi-scheduler planning** Moving events between separate team, department, or location calendars.
- **Resource reassignment** Reassigning appointments, tasks, or shifts from one scheduler to another with direct drag and drop.
- **Parallel scheduler review** Comparing two weekly schedulers and adjusting event placement between them.
