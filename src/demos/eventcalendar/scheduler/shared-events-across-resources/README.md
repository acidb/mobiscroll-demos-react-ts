To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/shared-events-across-resources#).

## Demo description

Events can be shared among resources. This can easily be the same resource type, like **people** in a **shared work calendar** scenario or different resource types, like **aircraft** and **instructor** in a **flight training** scenario where you'll have to schedule an instructor and an aircraft for a class which is the event.

Shared events will render correctly in the appropriate resource columns with drag & drop, validation across invalid dates and times will work out of the box. All you need to do is to add both `resourceIDs` to the event.

## Implementation instructions

- Use `view: { scheduler: { type: 'week', allDay: false, startDay: 1, endDay: 5, startTime: '05:00', endTime: '22:00' } }` — Mon–Fri, 5am–10pm, no all-day row. Enable `clickToCreate: true`, `dragToCreate: true`, `dragToMove: true`, `dragToResize: true`.
- Define 3 resources: Ryan (id: 1), Kate (id: 2), John (id: 3), each with a pastel background color.
- Define 7 inline events with relative dates (today ±3 days). Set `resource` as a single id or an array of ids to share an event across multiple resources: e.g. `resource: [2, 3]` renders the event in both Kate's and John's column. One event uses all three: `resource: [1, 2, 3]`.
- Set `extendDefaultEvent` to return `{ color: '#4a9e42' }` so newly created events default to green.
- On `onEventCreated`, store the event as `tempEvent`, set a "new event" flag, and open the popup. On `onEventDoubleClick`, clear the flag and open the popup to edit the existing event. React additionally registers `onEventDeleted` to filter the deleted event from the events array.
- The popup (anchored to `args.target ?? args.domEvent.target`, width 350) contains a title `Input` and a multi-select `SegmentedGroup` with one segment per resource name. Bind the title input to state and apply it on OK; for the imperative API, also keep `tempEvent.title` in sync live via an `input` listener on the title input. On OK: apply the selected resource ids to `tempEvent.resource` and call `inst.updateEvent(tempEvent)`. On cancel/close without confirming: if the event was new, filter it from the events array; for the imperative API, call `inst.removeEvent(tempEvent)` in the popup's `onClose`.

## What this demo shows

- A desktop weekly scheduler from Monday to Friday, with a fixed resource and week strip, and a vertically scrollable time grid running from 5 AM to 10 PM.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Resource grouping** The selected week is repeated under each resource, so every resource has its own week view in the scheduler grid.
- **Time grid** The scheduler shows 17-hours range from 5 AM to 10 PM and can be scrolled vertically.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Multi-resource events** Events assigned to more than one resource appear in each involved resource column for the same day.
- **Synchronized multi-resource updates** Dragging or resizing a multi-resource event updates the corresponding event instance for the other assigned resources.
- **Repeated event examples** The demo includes multi-resource events such as Impact Training for Kate and John on Monday, General orientation for Ryan, Kate, and John on Wednesday, and Product team mtg. for Kate and John on Thusday.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event and opens a popup below the event card.
- **Popup form** The popup includes a `Title` text field prefilled with `New event` and a multi-select segmented control with the resource names Ryan, Kate, and John. The same popup opens when an event card is double-clicked.
- **Popup confirmation** The popup footer includes an `Ok` button to confirm the event details and a `Cancel` button to discard them.

## Best for

- **Shared work calendars** Scheduling meetings, training sessions, or other events that involve more than one person while keeping the event visible under each assigned resource.
- **Mixed resource scheduling** Modeling scenarios where an event needs multiple resource types, such as scheduling both an instructor and an aircraft for a flight training class.
- **Multi-resource event editing** Keeping shared events in sync when users drag, resize, create, or edit events across resource columns.
