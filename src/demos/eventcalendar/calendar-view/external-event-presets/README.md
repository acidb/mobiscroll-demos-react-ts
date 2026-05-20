To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/external-event-presets#).

## Demo description

Use external draggable events to create preset tasks that people can quickly copy and spawn events from. A great example is a car wrapping shop where different jobs need to be set up depending on the type of vehicle.

Print a list of predefined tasks and initialize them as `draggable` elements.
Enable `externalDrop` for the calendar and set up the predefined event skeletons for the
`draggable` component.

Whenever there is more information to be captured, like detailed task notes, customer information, the name of the technician... you can trigger a `popup` with the task form in the

`onEventCreate`

 lifecycle event.
For failed drops (trying to schedule a task during lunch breaks or weekends) the

`onEventCreateFailed`

 event will be triggered.
Want to see how external presets look & feel for a scheduler?&nbsp;
[Check out this example &#8594;](https://demo.mobiscroll.com/react/scheduler/external-event-presets#)
