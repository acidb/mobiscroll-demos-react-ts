To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/resource-data-structure#).

## Demo description

The resource data structure for the scheduler is straightforward with a couple of base properties that the component understands and uses to render the UI. Besides the base properties you can add any custom property, like title, job ...

- `id` - This is an id that can be referenced in the event `data`
- `name` - The name of the resource that will be printed at the top of the respective column
- `color` - The color controls the default event color of the resource. Event colors can be specific above this. If the color is omitted the underlying events will inherit the default calendar color
- `eventCreation` - This controls if events can be created or dropped onto this resource
- `children` - Array of resource objects which will render as a child of the specified resource
- `collapsed` - Defines the displayed state of the child resoruce group
- `eventDragBetweenResources` - Specifies whether the events in the specified resource are movable across resources. If set to `false` has precedence over `dragBetweenResources` option of the calendar.
- `eventDragInTime` - Specifies whether the events in the specified resource are movable in time. If set to `false` has precedence over `dragInTime` option of the calendar.
- `eventResize` - Specifies whether the events in the specified resource are resizable. If set to `false` has precedence over `dragToResize` option of the calendar.
- `eventOverlap` - Specifies whether the events in the specified resource are allowed to overlap. If set to `false` has precedence over `eventOverlap` option of the calendar.
- `fixed` - Specifies whether the resource is fixed to the top. If set to `true`, the specified resource will stick to the top when scrolling.
- `reorder` - Specifies whether the resource can be dragged and reordered. If set to `false` and the `resourceReorder` in view option is enabled , the specified resource cannot be dragged and reordered.

## Implementation instructions

- Use `timeline: { type: 'day' }` — a single-day view.
- Define one parent group resource (`id: 'team'`, `name: 'Team 1'`, `eventCreation: false`) with 6 child resources. Each child uses the standard base properties (`id`, `name`, `color`) plus two custom properties — `title` (job title) and `job` (project name) — demonstrating that arbitrary fields can be added to any resource object. Custom properties are passed through to the render layer and accessible in templates.
- Add 3 events for today spread across different resource rows.
- Implement a custom resource row renderer (`renderResource` / `resourceTemplate` / `resource` slot) that shows the resource `name` for all rows, and additionally shows `resource.title` in a smaller dimmed style for leaf (non-parent) rows. Use the `resource.isParent` boolean — injected automatically by Mobiscroll — to distinguish the group header row from individual member rows.

## What this demo shows

- A desktop daily timeline where hours are arranged horizontally and a hierarchical resource tree arranged vertically on the left.
- **Header navigation** The month and year label opens date navigation, while the previous and next arrows move between days and the Today button returns to the current date.
- **Day view** The strip below the header shows the selected days, with the current date highlighted. The timeline displays hourly columns from 12 AM to 12 PM.
- **Resources** The left side shows expandable and collapsible resource groups, including parent groups and fixed resources at the top.
- **Resource hierarchy** Nested resources are grouped under parent rows, such as Team 1, before listing individual resources.
- **Resource template** Each resource header shows the resource name in bold with the role shown below in a muted style.
- **Current time** A vertical blue line with a time label marks the current time.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event cards** Events are shown as colored cards with a left color stripe, a bold title, a description, and a bold time range.
- **Date positioning** Events are positioned by their assigned resource and exact date range.
- **Event interaction** Events highlight on hover and show drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging across a time range.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through time and resources.

## Best for

- **Resource-based schedules** Showing separate schedules for people, rooms, equipment, or other bookable resources in the same day view.
- **Team planning** Comparing each resource's assigned events side by side while keeping the time axis shared across the timeline.
- **Role-aware scheduling** Displaying extra resource details, such as job title or responsibility, directly in the resource header.
- **Resource-specific behavior** Using base resource properties to control event color, creation, dragging, resizing, and overlap behavior per resource.
- **Custom resource data** Extending resource objects with custom fields and rendering those fields in the scheduler header.
