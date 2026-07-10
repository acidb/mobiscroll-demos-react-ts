To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/show-task-progress-on-event#).

## Demo description

Showing percentage progress, or even having a visual overlay that indicates the progress of a task is sometimes necessary, not just for full fledged Gantt charts. Although being usually associated with Gantt charts, having a clear overview of progress with tools that enable live update is useful in a lot of situations.

Using the event templating capabilities, it is possible to render a live slider that reacts on hover and enables updating the progress inline. Use the [renderTimelineEvent](https://docs.mobiscroll.com/react/eventcalendar/timeline#renderer-renderTimelineEvent)
function to customize the template and adjust it to your needs.

Besides being able to update progress right on the event, it is also possible to add a slider that controls task progression - saved in a custom property of the event - inside an add/edit dialog.

## Implementation instructions

- Use `type: 'month'` with `eventDisplay: 'fill'` for a month-level Gantt-style view where tasks span multiple days.
- Give each event a custom `progress` property (0–100) representing task completion percentage.
- Define resources as a two-level tree of team groups (`eventCreation: false`) and individual members with a custom `title` (job role). Use `renderResource` (Angular: `resourceTemplate`, Vue: `resource`) to show the member name and role beneath it.
- Use `renderTimelineEvent` (Angular: `timelineEventTemplate`, Vue: `timelineEvent`) to render the progress bar layout: a container styled with the resource color, a progress fill div with `width` set to `${progress}%`, a draggable arrow handle element with a `data-event-id` attribute, the task title, and a percentage label.
- Implement inline progress dragging by attaching `onMouseDownCapture` on the calendar wrapper. On mousedown on the arrow handle, call `stopPropagation` to prevent Mobiscroll from treating it as an event click or drag, then attach `mousemove`/`mouseup` listeners to the document. On mousemove, compute new progress from the x-offset relative to the event container width. On mouseup, write the new value to the event in state and remove the listeners.
- Track drag state with an `isDraggingProgress` ref. In `onEventClick`, return early if `isDraggingProgress.current` is true so the edit popup does not open when the user finishes dragging the handle. Use a short `setTimeout` before resetting the ref to prevent the mouseup from immediately triggering a click.
- Enable `clickToCreate: true` and `dragToCreate: true` for event creation. Use `onEventCreated` to open the add popup with `args.target` as the anchor. Use `onEventClick` to open the edit popup with `args.domEvent.target` as the anchor. Use `onEventUpdated` to persist drag-to-move and drag-to-resize changes.
- Build the popup with `Popup`; default to full-screen bottom sheet on mobile and switch to an anchored 400px popup at the medium breakpoint.
- Include a `Datepicker` in range mode with `startInput`/`endInput` refs for editing the task date range, and a native `<input type="range">` (0–100) for updating the progress value directly in the form.
- On popup close when the add form is canceled, refresh the events list to remove the temporary placeholder event.

## What this demo shows

- A desktop monthly timeline for project planning and progress tracking, with days arranged horizontally and resources listed vertically on the left.
- **Header navigation** The month and year label opens date navigation. The previous and next arrows and the Today button move between months and return to the current day.
- **Timeline header** The fixed date strip shows the days of the selected month in `D DDD` format, with the current date highlighted.
- **Resources** Hierarchical resource groups organize team members into departments such as Designer Team, Development Team, and QA Team.
- **Resource details** Individual resources show custom information, including the team member's role or job title.
- **Event colors** Events for the same team member or group keep a consistent color in the timeline.
- **Event cards** Events are rendered as colored cards with the project name, a progress percentage, and an inline progress slider.
- **Inline progress** The progress slider reacts on hover and lets users update completion directly on the event.
- **Event positioning** Events are placed by assigned resource and by start and end date.
- **Event creation** Users can create events by double-clicking a resource row or by clicking and dragging across a date range.
- **Add form** Creating an event opens a form with title, start date, end date, and progress slider fields, plus Cancel and Add actions.
- **Event editing** Clicking an event selects it and opens a popup for modifying the event details.
- **Drag and resize** Events show drag and resize handles on hover for moving tasks or changing their duration.
- **Vertical scrolling** The resource area scrolls vertically so the timeline can display more resources in the same view.

## Best for

- **Project management** Tracking tasks, ownership, timing, and completion progress in a single timeline.
- **Sprint planning** Planning work across team members and date ranges while keeping progress visible.
- **Software development teams** Coordinating designers, developers, and QA resources across overlapping project tasks.
- **Task tracking** Updating task progress directly from the timeline without opening a separate detail view.
- **Team workload management** Reviewing who is assigned to what, when each task runs, and how far along the work is.
- **Gantt-style planning** Showing project spans and completion percentages without requiring a full Gantt chart implementation.
