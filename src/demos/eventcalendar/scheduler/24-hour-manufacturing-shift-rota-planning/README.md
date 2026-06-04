To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/24-hour-manufacturing-shift-rota-planning#).

## Demo description

The scheduler can be configured for industrial or service environments requiring 24/7 coverage, such as manufacturing lines or critical infrastructure maintenance.
This setup uses three resources (Crew A, Crew B, Crew C) to demonstrate a cyclical, rotating roster, like the 3-Crew, 3-Shift Rota.

To visualize the continuous operation and manage shifts that span midnight, the scheduler view is configured with a custom, 24-hour cycle, starting at 06:00 and ending at 06:00 the following day.
This is achieved using the custom day-offset feature added to the `startTime` (e.g., '20:00-1') and `endTime` (e.g., '08:00+1') properties under the `view` option, which initiates the view relative to the previous or next calendar day.
Furthermore, to ensure compliance with 8-hour shift lengths and prevent invalid scheduling, the drag-and-drop functionality is constrained by setting the `dragTimeStep` to 8 hours, requiring all events to be moved only in 8-hour increments
and anchoring the alignment with the dragTimeStepBase: 'viewStart' option. The drag-and-drop logic is implemented for automatic conflict resolution: when an event is dragged to a different time or resource column within the same day,
it automatically updates and shifts any conflicting events (those sharing the same time slot or resource column) to maintain scheduling integrity and prevent overlaps.

## Implementation instructions

- Use `type: 'week'` with `allDay: false`, `startTime: '06:00'`, `endTime: '06:00+1'`, `timeCellStep: 120`, and `timeLabelStep: 120`. The `+1` suffix in `endTime` extends the view past midnight into the next calendar day, creating a continuous 24-hour column anchored at 06:00 per day.
- Define 3 resources (Crew A, B, C) and set `groupBy: 'date'` so all crews appear side by side under each day column.
- Define 3 shift objects each with `startHour`, `endHour`, `title`, and `color`: Morning (06–14, green), Afternoon (14–22, orange), Night (22–06 with `nextDay: true`, purple). Write a `getShiftByHour(hour)` helper that returns the matching shift for any given hour.
- Set `dragToMove: true`, `dragToCreate: false`, `dragToResize: false`, `clickToCreate: 'single'`, `eventDelete: true`, and `eventOverlap: false`. Set `dragTimeStep: 480` (8 hours in minutes) and `dragTimeStepBase: 'viewStart'` to snap all move operations to exact shift boundaries aligned to the 06:00 view start.
- Use `extendDefaultEvent` to snap click-created events to shift boundaries: call `getShiftByHour` on the clicked hour to determine the containing shift, then set `start`/`end` to that shift's boundaries (advancing the end date by one day for the Night shift), and derive `title` and `color` from the shift.
- In `onCellHoverIn`, determine the hovered shift via `getShiftByHour`, call `getAvailableSlots` to find which of the 3 shift slots are free for that resource and day, and if the hovered slot is free, push a color entry with a green background and a plus-icon `cssClass` to the `colors` array. Remove it in `onCellHoverOut`.
- In `onEventCreate`, define the day window as 06:00–06:00+1 and look for a conflict — another event on the same resource or at the same start hour. If found, show an "Already assigned" `Toast` and return `false`. On success, clear the hover-slot color for that resource/day and reset the red-resource flag.
- Store the original start, end, and resource in state via `onEventDragStart`. In `onEventUpdate`, first block cross-day moves (return `false` if the drop day's 06:00 boundary differs from the drag day's). Then find conflicts within the same day: if a conflicting event shares the same resource, reassign it to the dragged event's original resource; if it shares the same time slot, move it to the dragged event's original time and update its title and color. Return `false` if the exact drop position is already occupied. After resolving, update `colors` and the red-resource indicator for the source resource.
- In `onEventDelete`, remove the event from state, apply a red color overlay spanning 06:00–06:00+1 for that resource, set `redResources[resourceId + dayISO]` to `true`, and show a `Toast`.
- Use `renderResource` (Angular: `resourceTemplate`, Vue: `resource`) with a `(resource, day)` signature: apply a red background style to the crew name div when `redResources[res.id + day.toISOString()]` is `true` for that crew and day.
