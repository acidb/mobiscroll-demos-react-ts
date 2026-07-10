To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/custom-resource-header-template#).

## Demo description

Use the `renderResource` option for rendering a custom resource header. Customize how the resource headers look and what they show. Utilize properties passed in the resources array.

- **Interested in displaying resource information on hover?** [Show details on hover &#8594;](https://demo.mobiscroll.com/react/timeline/display-resource-information-on-hover#)

## Related demos

- [Show details on hover &#8594;](https://demo.mobiscroll.com/react/timeline/display-resource-information-on-hover#)

## Implementation instructions

- Use `view: { scheduler: { type: 'week', allDay: false, startDay: 1, endDay: 5, startTime: '05:00', endTime: '22:00' } }` — Mon–Fri, 5am–10pm, no all-day row.
- Define 3 resources, each with `id`, `name`, `color`, `description` (job title), and `img` (avatar URL): Ryan (Sales representative), Kate (Web developer), John (Territory sales manager).
- Define 7 inline events with relative dates, each carrying `title`, `start`, `end`, `resource` (single id or array of ids), and `color`.
- Pass a custom resource renderer to `renderResource` (Angular: `resourceTemplate`, Vue: `#resource` slot). Render the resource's name, description, and avatar image.

## What this demo shows

- A desktop weekly scheduler from Monday to Friday, with a fixed resource and week strip, and a vertically scrollable time grid running from 5 AM to 10 PM.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Custom resource headers** Each resource header displays an avatar, the resource name, and the resource description or job title.
- **Resource grouping** The selected week is repeated under each resource, so every resource has its own week view in the scheduler grid.
- **Time grid** The scheduler shows 17-hours range from 5 AM to 10 PM and can be scrolled vertically.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Multi-resource events** Events assigned to more than one resource appear in each involved resource column for the same day.
- **Synchronized multi-resource updates** Dragging or resizing a multi-resource event updates the corresponding event instance for the other assigned resources.
- **Repeated event examples** The demo includes multi-resource events such as Impact Training for Kate and John on Monday and Tuesday, General orientation for Ryan, Kate, and John on Thursday, and Product team mtg. for Kate and John on Friday.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Team scheduling by person** Displaying several people side by side in a weekly scheduler, with each person represented by a custom resource header.
- **Role-aware resource planning** Showing names, avatars, and job titles directly in the resource header so users can identify who they are scheduling.
- **Workweek planning** Managing weekday schedules where the relevant working range is limited to business hours or extended working hours.
- **Shared meetings and training sessions** Representing events that involve multiple people while keeping the event visible under each assigned resource.
- **Drag-and-drop schedule editing** Supporting scheduler workflows where users need to move events, resize durations, and keep multi-resource assignments synchronized.
