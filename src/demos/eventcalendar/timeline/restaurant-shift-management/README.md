To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/restaurant-shift-management#).

## Demo description

With the combination of the [timeline summary mode/event listing](https://demo.mobiscroll.com/react/timeline/event-listing#), time slots and the [time slot templating](https://demo.mobiscroll.com/react/timeline/shift-template#) features along with [hierarchical resources](https://demo.mobiscroll.com/react/timeline/resource-grouping-hierarchy#) you can create a restaurant shift planning UI.

The example features templating, dynamic occupancy count (how many employees are working on a specific shift), dynamically turning shifts on/off, switching between week and day view and much more. The [header features custom components](https://demo.mobiscroll.com/react/scheduler/customizing-header#) for filtering the view.

Try signing somone up for work by double clicking on an empty shift position.

## Implementation instructions

- Use the timeline view in summary mode with `eventDisplay: 'fill'`. For the week view, set `startDay: 1` and `endDay: 5` to show only working days; support switching to `type: 'day'` via a `Select` control in the header.
- Define the named shift buckets with the `slots` option. Each slot object needs an `id`, a `name`, and a custom `time` string (e.g. `"8AM – 12PM"`) for display. Each event references its slot via the `slot` field.
- Structure resources as a two-level tree: role groups (Barista, Bartenders, Chefs, etc.) at the top level with individual employee leaf nodes beneath them. Set `eventCreation: false` on every group node so shifts are only created on employee rows. Give each employee a `color` property that Mobiscroll automatically applies to their events.
- Use `renderResource` (Angular: `resourceTemplate`, Vue: `resource`) to differentiate group and leaf rows — show the role icon and a colored label for group nodes, and just the employee name for leaf nodes.
- Use `renderSlot` (Angular: `slotTemplate`, Vue: `slot`) to render a custom slot column header showing the slot name and time range, followed by a live occupancy count per role category (icon + number of assigned employees) for that slot and date. Show an "empty…" fallback when no shifts are assigned.
- Calculate occupancy counts by iterating over the current events array and counting how many employees per role category have a shift matching the given slot ID and date string.
- Use `renderHeader` (Angular: `headerTemplate`, Vue: `header`) to render a custom toolbar combining `CalendarNav`/`CalendarPrev`/`CalendarToday`/`CalendarNext` navigation controls with `Checkbox` components for toggling each slot's visibility and a `Select` for switching between day and week views.
- Toggle slot visibility by maintaining a filtered `slots` array in state: uncheck a checkbox to remove the slot, check it to add it back. When only one slot remains checked, disable its checkbox so at least one slot is always visible.
- Enable `clickToCreate` so users can sign an employee up for a shift by clicking an empty cell. Set `dragToMove: true` to allow repositioning shifts by dragging.
- Use `extendDefaultEvent` to pre-populate the newly created event's `title` with the employee's first name, looked up from the resource data using the event's `resource` ID.
- Use `onEventCreate` to validate new shifts before saving: call `inst.getEvents()` to check whether the same resource already has a shift in the same slot on the same day, and return `false` to cancel the creation if a duplicate is found.
- Use `onEventUpdate` to apply the same duplicate check after a drag; also update the event `title` when the resource changes so it reflects the new employee's name. Return `false` to revert if the target cell is already occupied.
- Use `onEventDeleted` to remove the deleted shift from the events array in state.
