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
