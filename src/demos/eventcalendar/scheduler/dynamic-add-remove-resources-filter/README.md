To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/dynamic-add-remove-resources-filter#).

## Demo description

Resources can be dynamically turned on and off. This will show or hide the resource and can be done runtime the same way as for any other calendar option.

## Implementation instructions

- Use `view: { scheduler: { type: 'week', allDay: false, startDay: 1, endDay: 5, startTime: '08:00', endTime: '17:00' } }` — Mon–Fri, 8am–5pm, no all-day row. Enable `clickToCreate: true`, `dragToCreate: true`, `dragToMove: true`, `dragToResize: true`.
- Define 3 resources: Ryan (id:1), Kate (id:2), John (id:3), each with a pastel color. All three are visible by default.
- Load events via `getJson` from a JSONP endpoint on mount; for the imperative API, call `inst.setEvents(events)`.
- Render a sidebar with one `Checkbox` per resource, all initially checked. Keep a `participants` map (`{ 1: true, 2: true, 3: true }`) tracking each resource's visibility.
- On checkbox change, update the corresponding entry in `participants`, then set the active resources to `allResources.filter(r => participants[r.id])`; for the imperative API, call `inst.setOptions({ resources: filteredArray })`.

## What this demo shows

- A desktop weekly scheduler from Monday to Friday, with a fixed resource and week strip, and a vertically scrollable time grid running from 8 AM to 5 PM.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Resource list** A right-side panel titled `Show available tasks` lists `Ryan`, `Kate`, and `John`, each with a selected checkbox by default.
- **Resource filtering** Clearing one or more resource checkboxes hides those resources and their events from the scheduler.
- **Resource grouping** The selected week is repeated under each resource, so every resource has its own week view in the scheduler grid.
- **Time grid** The scheduler shows 9-hours range from 8 AM to 5 PM and can be scrolled vertically.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Multi-resource events** Events assigned to more than one resource appear in each involved resource column for the same day.
- **Synchronized multi-resource updates** Dragging or resizing a multi-resource event updates the corresponding event instance for the other assigned resources.
- **Repeated event examples** The demo includes multi-resource events such as Impact Training for Kate and John on Monday, General orientation for Ryan, Kate, and John on Wednesday, and Product team mtg. for Kate and John on Thusday.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Resource filtering** Showing only selected people, teams, rooms, equipment, or other resources in a scheduler.
- **Task and workload planning** Reviewing each visible resource’s assigned events without changing the underlying event data.
- **Multi-resource scheduling** Managing events that belong to more than one resource and need to stay synchronized when moved or resized.
- **Runtime configuration** Updating the visible resources at runtime the same way other calendar options can be updated.
