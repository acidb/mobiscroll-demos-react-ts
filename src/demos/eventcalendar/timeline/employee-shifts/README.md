To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/employee-shifts#).

## Demo description

Use the summary mode of the timeline view with `eventDisplay: 'fill'` that can be configured under the `timeline` settings of the `view` option.

This will give you summarized daily events similar to the [event calendar labels](https://demo.mobiscroll.com/react/eventcalendar/event-labels#) where each event is printed under the appropriate day, time slot (shift) for the appropriate resource one after the other.

Build a custom add/edit dialog with the necessary fields. The event dialog can be fully custom as seen in this [CRUD example](https://demo.mobiscroll.com/react/scheduler/create-read-update-delete-CRUD#).

Customize the dialog header with a custom header renderer function using the `renderHeader` option.

## Implementation instructions

- Use the timeline view in summary mode with `eventDisplay: 'fill'` to render shift events within resource rows and named slot buckets. Set `startDay: 1` and `endDay: 5` to show only work days.
- Define the Morning and Afternoon shift buckets with the `slots` option. Each slot object needs an `id` and a `name`, and each event references its slot via the `slot` field.
- Give each employee a `color` property on the resource object. Mobiscroll automatically applies the resource color to its events, so no extra event-level styling is needed.
- Use `renderResource` (Angular: `resourceTemplate`, Vue: `resource`) to display a custom resource row with the employee's avatar image, name, and job title.
- Enable `clickToCreate` so users can create a new shift by clicking an empty cell. Set `dragToMove: true` so existing shifts can be repositioned by dragging, and set `dragToCreate: false` and `dragToResize: false` to prevent accidental event creation by drag and to keep shift boundaries tied to the slot definition.
- Use `extendDefaultEvent` to set the correct start and end times on every newly created event based on which slot it lands in — for example, Morning maps to 07:00–13:00 and Afternoon to 12:00–18:00.
- Set `eventOverlap: false` to block placing a second shift for the same employee in the same slot on the same day.
- Use the `invalid` option to mark specific resource-slot-day combinations where shifts cannot be created or moved, such as an employee's day off or a slot they are not eligible for.
- Use `onEventCreated` to intercept the newly created event, populate the popup with the slot-derived time range, and open the add form. The `slotObj` in the event args provides the slot name for the popup header.
- Use `onEventClick` to open the edit form for an existing shift. Read `resourceObj` and `slotObj` from the event args to build a descriptive popup header showing the employee name, day, and slot.
- Use `onEventUpdated` to detect when a shift has been dragged from one slot to another. When the slot changes, recalculate and overwrite the event's start, end, and title to match the new slot's fixed time range.
- Use `onEventCreateFailed` and `onEventUpdateFailed` to show a toast message when a shift cannot be placed or moved, for example because the target cell is marked invalid or blocked by `eventOverlap`.
- Build the add/edit popup with the `Popup` component. Use the `responsive` option to switch from a full-screen bottom sheet on mobile to a centered fixed-width dialog on larger screens.
- Render a custom popup header with a primary line — such as "Edit Ryan's hours" or "New shift" — and a secondary line with the day name, slot name, and date.
- Inside the popup, use a `Datepicker` in range mode with `controls={['time']}`. Connect it to two `Input` fields via `startInput` and `endInput` refs so the start and end times appear as separate labelled inputs that open the shared range picker. Constrain the allowed range with `minTime` and `maxTime` derived from the current slot.
- For deletion, add a Delete button to the edit popup that removes the shift immediately and closes the popup, then shows a `Snackbar` with an Undo action that restores the deleted shift if the user reverses the action.

## What this demo shows

- A weekly timeline-based shift planner that displays employees as resource rows and shows only work days.
- **Shift structure** Each day is divided into two named slots, Morning and Afternoon, instead of showing shifts by exact position on a time grid.
- **Resources** Each row represents an employee, and the events shown in that row are the scheduled shifts for that employee.
- **Visual distinction** Each employee has an assigned color, and their shifts use that color in the timeline.
- **Editing shifts** Clicking an existing shift opens a popup with an edit form where the shift start and end times can be changed and notes can be added.
- **Deleting shifts** The edit popup includes a delete action that removes the shift immediately, then shows a snackbar confirmation with an Undo action to restore it.
- **Creating shifts** Double-clicking an empty timeline slot opens a popup for adding a new shift.
- **Add form** The create popup lets users set the shift start and end times and add notes before saving.

## Best for

- **Employee shift planning** Weekly rota and shift scheduling interfaces where employees are shown as resources.
- **Work-week scheduling** Setups that focus on working days only rather than a full seven-day timeline.
- **Named-shift layouts** Scenarios where shifts are organized into fixed slots such as Morning and Afternoon instead of being positioned by exact time.
- **Color-coded teams** Calendars where resource-based color coding helps users quickly identify which shifts belong to which employee.
- **Direct calendar editing** Applications where users need to create, update, delete, and restore shifts directly from the calendar UI.
