To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/resource-data-structure#).

## Demo description

The resource data structure for the scheduler is straightforward with a couple of base properties that the component understands and uses to render the UI. Besides the base properties you can add any custom property, like title, job ...

- `id` - This is an id that can be referenced in the event `data`
- `name` - The name of the resource that will be printed at the top of the respective column
- `color` - The color controls the default event color of the resource. Event colors can be specific above this. If the color is omitted the underlying events will inherit the default calendar color
- `eventCreation` - This controls if events can be created or dropped onto this resource
- `eventDragBetweenResources` - Specifies whether the events in the specified resource are movable across resources. If set to `false` has precedence over `dragBetweenResources` option of the calendar.
- `eventDragInTime` - Specifies whether the events in the specified resource are movable in time. If set to `false` has precedence over `dragInTime` option of the calendar.
- `eventResize` - Specifies whether the events in the specified resource are resizable. If set to `false` has precedence over `dragToResize` option of the calendar.
- `eventOverlap` - Specifies whether the events in the specified resource are allowed to overlap. If set to `false` has precedence over `eventOverlap` option of the calendar.

## Implementation instructions

- Use `view: { scheduler: { type: 'day' } }`.
- Define 3 resources. Each uses the standard base properties (`id`, `name`, `color`) plus two custom properties — `title` (job title) and `job` (project name) — demonstrating that arbitrary fields can be added to any resource object and passed through to the render layer.
- Add 3 events for today assigned to the resource rows.
- Implement a custom resource row renderer — `renderResource` (React/JS/jQuery), `[resourceTemplate]` (Angular), `#resource` slot (Vue) — that shows `resource.name` for all rows and `resource.title` in a smaller, dimmed style.

## What this demo shows

- A desktop daily scheduler with date navigation, multiple resources, and a vertically scrollable time grid for the selected day.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between days and jump back to the current day.
- **Day header** The short weekday name and the selected date are shown below the main navigation.
- **All-day events** All-day events appear in a dedicated row that stays fixed above the time grid.
- **Resource strip** Three resources are displayed across the scheduler: `Ryan UX Designer`, `Kate Product Developer`, and `John Data Analyst`.
- **Resource template** Each resource header shows the resource name in bold with the role shown below in a muted style.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected day.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Current time** A horizontal blue line marks the current time across the scheduler.
- **Hover feedback** Hovering over the time grid shows a time indicator that follows the pointer in 15-minute increments.
- **Timed events** Events are displayed as colored cards with a colored left stripe, the event title, and the exact start and end time.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles when the event allows those interactions.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Resource-based schedules** Showing separate schedules for people, rooms, equipment, or other bookable resources in the same day view.
- **Team planning** Comparing each resource's assigned events side by side while keeping the time axis shared across the scheduler.
- **Role-aware scheduling** Displaying extra resource details, such as job title or responsibility, directly in the resource header.
- **Resource-specific behavior** Using base resource properties to control event color, creation, dragging, resizing, and overlap behavior per resource.
- **Custom resource data** Extending resource objects with custom fields and rendering those fields in the scheduler header.
