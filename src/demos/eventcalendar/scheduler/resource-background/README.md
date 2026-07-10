To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/resource-background#).

## Demo description

Easily highlight resources or columns by adding a simple `background` color or craft a more specific look with the `cssClass` property of the resources data.

The output could be a custom background to individual resources or columns and it can be used for multiple purposes. For example:

- Different styling for certain columns, like thicker border acting as separator.
- Resource selection, where the selected resource has a different background.
- Setting different backgrounds for the resource titles and grid columns.

- **Interested in highlighting date ranges only?** [Explore this example &#8594;](https://demo.mobiscroll.com/react/scheduler/colored-cell-background#)

## Related demos

- [Explore this example &#8594;](https://demo.mobiscroll.com/react/scheduler/colored-cell-background#)

## Implementation instructions

- Use `view: { scheduler: { type: 'day' } }` with `groupBy: 'date'`. Resources appear as columns; time slots run vertically.
- Define 7 resources and 10 events inline using `dyndatetime` offsets. Resources C and F carry only `id`, `name`, and `color` with no special styling.
- **`background` property** (Resource A): set a CSS color string directly on the resource object — `background: 'rgba(71, 251, 34, 0.37)'`. Mobiscroll spans this color across the full resource column in the grid.
- **`cssClass` property**: use compound selectors combining the custom class with Mobiscroll's zone classes to target specific areas of a resource column:
  - `.mbsc-schedule-resource` — resource label cell only (leaves the grid column unaffected)
  - `.mbsc-schedule-column` — grid time-slot column only (leaves the label unaffected)
  - `.mbsc-schedule-all-day-item` — the all-day row cell for the resource
  - `.mbsc-schedule-resource.mbsc-schedule-col-width` — label including its width-defining element (used for border rules)
  - Combining multiple zone selectors in one CSS rule (`md-diff-custom-bg`) lets each zone carry a distinct background pattern independently.

## What this demo shows

- A desktop daily scheduler with date navigation, multiple resources, and a vertically scrollable time grid for the selected day.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between days and jump back to the current day.
- **Day header** The short weekday name and the selected date are shown below the main navigation.
- **All-day events** All-day events appear in a dedicated row that stays fixed above the time grid.
- **Resource strip** Seven resources are displayed across the scheduler. Resources C and F use the default appearance, while all other resources have customized backgrounds.
- **Resource background styles** Resource A uses a green background across the entire column. Resource B uses thicker borders to visually separate it from adjacent resources. Resource D customizes only the resource header background with an orange color. Resource E applies different background styles to the resource header, the all-day section, and the scheduler grid independently. Resource G customizes only the scheduler grid background.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected day.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Current time** A horizontal blue line marks the current time across the scheduler.
- **Hover feedback** Hovering over the time grid shows a time indicator that follows the pointer in 15-minute increments.
- **Timed events** Events are displayed as colored cards with a colored left stripe, the event title, and the exact start and end time.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles when the event allows those interactions.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Highlighting resource states**: Indicate availability, maintenance, occupancy, priority, or other statuses using customized resource backgrounds.
- **Differentiating resources**: Visually separate teams, departments, meeting rooms, equipment, vehicles, or staff with resource-specific styling while preserving the standard scheduling experience.
- **Custom resource branding**: Apply independent styling to the resource header, all-day section, and scheduler grid to match branding or emphasize contextual information.
- **Improving schedule readability**: Use background colors and custom CSS to make resource-heavy schedulers easier to scan without modifying event data or scheduling behavior.
