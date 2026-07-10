To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/assign-unassign-work-orders-fixed-top-row#).

## Demo description

The process of assigning and unassigning work orders with a large number of employees can get overly complicated.
The `timeline` with a row fixed to the top, containing the
unassigned work orders, can be of great help to create a work planner.

This will contain all scheduled but unassigned work and by vertically scrolling the content of the
timeline, the row will allways be visible and stuck to the top. The following resources are the employees themselves, where `eventOverlap` is not allowed to avoid double scheduling.

For more strict validation, the `dragInTime` and `dragToResize` options are set to `false` rendering the workorders fixed in time and only allowing vertical movement between and to resources for re-assignment and assignment.

## Implementation instructions

- Set `fixed: true` on the "Unassigned" resource so its row stays pinned at the top of the timeline while the employee rows scroll beneath it.
- Use `type: 'week'` with `startDay: 1`/`endDay: 5`, `startTime: '06:00'`/`endTime: '18:00'`, and `resolutionHorizontal: 'hour'` for a Mon–Fri hourly view.
- Set `dragToMove: true` so work orders can be dragged between the Unassigned row and employee rows.
- Set `dragInTime: false` to restrict dragging to vertical (resource) movement only — the time slot of a work order cannot change, only its assigned resource.
- Set `dragToResize: false` to keep work order durations fixed.
- Use the `min` option to prevent navigating or dropping events before the earliest allowed date.

## What this demo shows

- A desktop timeline view for assigning and unassigning work orders across multiple resources in a Monday-to-Friday work week.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed date strip shows the selected Monday-to-Friday work week in `DD DDD MMM YYYY` format, with the current date highlighted.
- **Invalid periods** Past dates are disabled, so work orders cannot be created or assigned in invalid time ranges.
- **Time grid** The timeline displays working hours from 6 AM to 6 PM with hourly columns under each day.
- **Resources** The Unassigned resource row stays fixed at the top and holds work orders that are waiting to be assigned to a technician.
- **Employee rows** The timeline lists 9 employee resources below the fixed Unassigned row.
- **Current time** The current time is marked with a vertical blue line and a time label.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event cards** Work orders are displayed as cards with a colored stripe, a bold title, and the exact start and end time.
- **Unassigned events** Work orders in the Unassigned row appear in gray until they are assigned to an employee resource.
- **Assignment behavior** Work orders can be dragged between employee resources, assigned from the Unassigned row, or moved back to the Unassigned row.
- **Time locking** Work orders are fixed in time, so dragging changes the assigned resource but does not change the work order's start time, end time, or duration.
- **Resource colors** Assigned work orders use a consistent color per resource, so work orders for the same employee share the same color.
- **Event overlapping** Overlapping work orders stack within the resource row so each one remains visible, with the row height increasing as needed.
- **Event creation** New work orders can be created by double-clicking in the timeline or by dragging across a time range.
- **Event interaction** Work orders highlight on hover and can be dragged vertically between resources.
- **Event selection** Clicking a work order selects and highlights it.
- **Vertical scrolling** The resource area scrolls vertically while the Unassigned row remains fixed at the top.
- **Horizontal scrolling** The timeline supports horizontal scrolling for navigating the visible date and time grid.

## Best for

- **Field service management** Tracking scheduled work orders before and after they are assigned to available technicians.
- **Technician dispatching** Assigning jobs to employee resources while keeping unassigned work visible at the top of the schedule.
- **Maintenance scheduling** Planning maintenance tasks across a fixed work week and preventing assignments in past or invalid time ranges.
- **Repair planning** Managing repair jobs with fixed start times, end times, and durations.
- **Work order assignment** Reassigning jobs between resources without allowing the scheduled time or duration to change.
