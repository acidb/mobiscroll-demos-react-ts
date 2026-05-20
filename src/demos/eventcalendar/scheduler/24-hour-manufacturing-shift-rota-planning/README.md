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
