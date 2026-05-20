To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/assign-unassign-work-orders-fixed-top-row#).

## Demo description

The process of assigning and unassigning work orders with a large number of employees can get overly complicated.
The `timeline` with a row fixed to the top, containing the
unassigned work orders, can be of great help to create a work planner.

This will contain all scheduled but unassigned work and by vertically scrolling the content of the
timeline, the row will allways be visible and stuck to the top. The following resources are the employees themselves, where `eventOverlap` is not allowed to avoid double scheduling.

For more strict validation, the `dragInTime` and `dragToResize` options are set to `false` rendering the workorders fixed in time and only allowing vertical movement between and to resources for re-assignment and assignment.
