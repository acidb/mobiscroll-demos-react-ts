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

## What this demo shows

- A desktop weekly scheduler for 24-hour shift planning, with a fixed week strip, repeated resources for each day, and a vertically scrollable time grid running from 6 AM to 6 AM the following day.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week strip**: The fixed strip below the header displays the days in the selected week, with the current date highlighted by a blue circle.
- **Resources**: Each day shows the same three resources: Crew A, Crew B, and Crew C.
- **Resource columns**: Each crew has its own column within the day column, keeping resources grouped by date.
- **Time grid**: The scheduler uses a custom 24-hour range from 6 AM to 6 AM the next day, with midnight marked by a stronger horizontal line.
- **Scrolling behavior**: The time grid scrolls vertically through the hours of the selected week.
- **Timed events**: Shifts appear as colored event cards with a colored stripe, bold shift title, and start and end time. Morning Shift runs from 6 AM to 2 PM, Afternoon Shift from 2 PM to 10 PM, and Night Shift from 10 PM to 6 AM.
- **Event overlap**: Shift events cannot overlap.
- **Shift coverage**: By default, each resource has a scheduled shift. Users can delete, create, or move shifts.
- **Missing shifts**: When a shift is deleted, the affected resource column is highlighted with a red background to show that no shift is scheduled for that resource.
- **Available shift slots**: When a resource has no shift, hovering over an available 8-hour shift period highlights the slot in green.
- **Shift repositioning**: Moving a shift can automatically update another shift on the same day to preserve coverage.
- **Current time**: A blue current-time line appears across the time grid.
- **Hover behavior**: Hovering over the time grid shows a time indicator that follows the cursor in 8-hour increments.
- **Event interaction**: Hovering over or selecting an event highlights it.
- **Toast messages**: Clicking an occupied time slot or trying to create a shift when every slot is already assigned shows an "Already assigned" toast at the bottom center of the scheduler. Deleting a shift shows a deletion toast with the shift name.

## Best for

- **Manufacturing and production facilities**: Schedule morning, afternoon, and night shifts across production lines, departments, or work crews while maintaining continuous coverage.
- **Warehousing and logistics operations**: Coordinate warehouse teams, loading crews, dispatch staff, and distribution personnel across multiple shifts.
- **Construction and field service teams**: Manage rotating crews, subcontractors, inspectors, and site personnel working across different schedules and locations.
- **Security and monitoring services**: Plan guard rotations, patrol schedules, control room operators, and emergency response teams around the clock.
- **Healthcare and care facilities**: Organize nurse rotations, support staff schedules, and departmental coverage across day, evening, and overnight shifts.
- **Hospitality and tourism businesses**: Schedule hotel staff, front desk teams, housekeeping crews, event staff, and service personnel.
- **Retail operations**: Manage store associates, supervisors, cashiers, and department teams while balancing staffing levels during peak and off-peak hours.
- **Transportation and aviation services**: Coordinate drivers, dispatchers, pilots, cabin crews, ground staff, and maintenance teams.
- **Customer support and contact centers**: Plan agent coverage across time zones, shifts, and support channels to meet service level requirements.
- **Public services and emergency organizations**: Schedule firefighters, police officers, emergency medical personnel, and municipal service teams.
- **Media, broadcasting, and operations centers**: Coordinate production crews, technical operators, studio staff, and live-event teams that require continuous coverage.
- **IT and DevOps teams**: Manage on-call rotations, support shifts, operations coverage, and incident response schedules for 24/7 systems.
