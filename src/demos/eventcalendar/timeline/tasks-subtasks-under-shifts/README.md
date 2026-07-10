To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/tasks-subtasks-under-shifts#).

## Demo description

Visualize shifts and tasks within them using the timeline view. With the help of the `order` property of the data object you can always guarantee that shifts are always displayed at the top (alternatively below tasks) and tasks within those shifts are rendered below.

The shift and task events are bind together with custom data properties. Every shift contains the task IDs in the `tasks` property, and every task has a `shift` property which indicates the parent shift.
These properties are used later in the validation logic to handle the two distinct event type behaviours. The validation is implemented by dynamically setting invalid ranges through the 

`onEventCreated`

,

`onEventUpdated`

 and

`onEventDeleted`

 lifecycle events.

- **Do you want to learn about the event ordering?** [Learn more about it in the documentation &#8594;](https://docs.mobiscroll.com/react/eventcalendar/timeline#event-order)

## Related demos

- [Learn more about it in the documentation &#8594;](https://docs.mobiscroll.com/react/eventcalendar/timeline#event-order)

## Implementation instructions

- Use `timeline: { type: 'week', startDay: 1, endDay: 5, startTime: '05:00', endTime: '19:00', eventHeight: 'variable' }` — a Mon–Fri week view with a variable row height so shifts and tasks can stack at different heights in the same resource row.
- Define 5 resources: Emma Smith (`#ff0101`), James Brown (`#239a21`), Olivia Miller (`#8f1ed6`), Robert Taylor (`#01adff`), John Doe (`#F58585`). Set `eventDragBetweenResources: false` on every resource — tasks and shifts must stay on their assigned person.
- **Shift/task data model** — every event carries an `order` property to control stacking:
  - **Shifts**: `order: 1`, `cssClass: 'mds-task-shift'`, `color: '#513737'`, and a `tasks` array listing the IDs of their child subtasks (e.g. `tasks: ['es-1', 'es-2', 'es-3']`).
  - **Subtasks**: `order: 2`, `cssClass: 'mds-task-subtask'`, and a `shift` property holding the parent shift's ID (e.g. `shift: 1`). Lower `order` renders first (top), higher `order` renders below — shifts always appear above their tasks.
- **Static invalids** — block 00:00–05:00 and 19:00–00:00 daily with `workOff: true` on each entry, forming the base `myInvalids` list that is always active.
- Enable `dragToCreate: true`, `dragToMove: true`, `dragToResize: true`.
- **`extendDefaultEvent`** — determines whether a new drag-create produces a shift or a subtask. Use `inst.getEvents(args.start, args.start + 1h)` filtered by `args.resource`: if no event overlaps, the slot is empty → create a shift (`order: 1`, `tasks: []`); otherwise create a subtask (`order: 2`, `shift: overlappingEvent.id`).
- **`onEventCreated`** — if the new event has a `shift` property (it is a task):
  - If `overlapEvents.length > 2` (shift + existing task + new task), remove the new event and show a toast: "No space for task".
  - Otherwise: push the new task's ID into `shift.tasks`, clamp the task's start/end within the shift bounds, and persist both updates.
- **`onEventDeleted`** — if the deleted event is a shift, also remove all its child task IDs from the event list. If it is a subtask, remove its ID from the parent shift's `tasks` array.
- **`onEventDragStart`** — build temporary invalid ranges to visually block illegal drop zones during drag:
  - Dragging a **shift**: mark every other shift on the same resource as blocked (class `mds-task-blocked`, custom `shift: true` flag).
  - Dragging a **subtask**: block the 7-day windows before `shift.start` and after `shift.end` on the same resource (class `mds-task-blocked`, custom `task: true` flag).
  - Merge with `blockedOutTimes` and set as the current `invalid` list.
- **`onEventDragEnd`** — reset `invalid` back to `blockedOutTimes` only.
- **`onEventUpdated`** — if the updated event is a **shift**: compute `startDiff` / `endDiff` to detect move vs. resize; propagate the same offset to all child tasks. If the resize would make the shift smaller than the combined subtask durations, clamp the shift edge. If the updated event is a **subtask**: reject the update (revert to `oldEvent`) and show a toast if it would overlap another event on the same resource.
- **`onEventUpdateFailed`** — inspect `args.invalid` for the three custom flags to show a contextual toast:
  - `workOff` → "Shift falls out of working hours"
  - `task` → "Task falls out of shift"
  - `shift` → "Shifts cannot overlap"
- **`renderTimelineEventContent`** — render the event title plus a duration badge for subtasks: `"<title> - <N>h"` / `"<title> - <N>hrs"`. Subtask events have a smaller, lighter-weight duration label rendered after the title.
- Angular: define a `MyEvent` interface extending `MbscCalendarEvent` with `shift?: number | string` and `tasks?: (string | number)[]`. Inject `Notifications` for toasts. Use `@ViewChild('timeline') timelineInst` to access the instance. Pass event-handler methods in `calendarOptions` instead of inline template bindings.
- Vue: use `MbscToast` component with `isOpen` / `message` reactive refs for toast feedback.
- JavaScript/jQuery: use `inst.removeEvent()` and `inst.updateEvent()` for imperative event mutations; use `inst.setOptions({ invalid: ... })` to swap the invalid list on drag.

## What this demo shows

- A desktop weekly timeline for planning shifts and tasks together, with Monday to Friday workdays arranged horizontally and employee resources listed vertically on the left.
- **Header navigation** The month and year label opens date navigation, while the previous and next arrows and the Today button move between weeks or return to the current day.
- **Week view** The fixed date strip shows the selected work week from Monday to Friday using the `DD DDD MMM YYYY` date format, with the current date highlighted.
- **Time grid** The timeline displays working hours from 5 AM to 7 PM with hourly columns under each day.
- **Resources** The left side lists five employee resources.
- **Current time** A vertical blue line and time label mark the current time.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Shift labels** Shifts are rendered as gray labels above the task events and can span an employee's working hours, including shift types such as Daily Shift and Flex Shift.
- **Shift constraints** Shift labels can be moved in time, but they cannot be moved between resources or overlap with other shifts.
- **Grouped tasks** Task events are grouped under their parent shifts. When a shift is updated, the tasks assigned to that shift move with it.
- **Task constraints** Task events can be moved in time only within their parent shift period.
- **Event cards** Task events are rendered as colored cards with a colored stripe on the left, a bold task name, a calculated duration next to the title, and the exact start and end time below the title.
- **Event creation** New events can be created by double-clicking an individual resource row or by clicking and dragging across a time range.
- **Shift-first creation** Empty time ranges create a shift first; tasks can then be created and assigned to that shift.
- **Event interaction** Events are highlighted on hover and show drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Horizontal scrolling** Horizontal scrolling moves across multiple days while keeping employee rows visible.

## Best for

- **Workforce scheduling** Planning employee shifts and the tasks assigned within each shift.
- **Shift management** Coordinating daily and flexible shifts while keeping work items tied to the correct employee and time range.
- **Service operations** Scheduling field, support, or operations work where shift coverage and task timing need to be managed together.
- **IT support planning** Assigning support tasks within employee availability windows.
- **Maintenance teams** Organizing maintenance work by employee, workday, shift, and task duration.
- **Employee workload management** Reviewing how individual work items fit into each employee's scheduled working hours.
