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
