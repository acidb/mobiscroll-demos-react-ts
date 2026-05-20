To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/show-task-progress-on-event#).

## Demo description

Showing percentage progress, or even having a visual overlay that indicates the progress of a task is sometimes necessary, not just for full fledged Gantt charts. Although being usually associated with Gantt charts, having a clear overview of progress with tools that enable live update is useful in a lot of situations.

Using the event templating capabilities, it is possible to render a live slider that reacts on hover and enables updating the progress inline. Use the [renderTimelineEvent](https://docs.mobiscroll.com/react/eventcalendar/timeline#renderer-renderTimelineEvent)
function to customize the template and adjust it to your needs.

Besides being able to update progress right on the event, it is also possible to add a slider that controls task progression - saved in a custom property of the event - inside an add/edit dialog.
