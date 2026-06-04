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
