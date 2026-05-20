To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/doctors-availability-calendar-planner#).

## Demo description

You can tailor the scheduler to show availability per doctor using visual indicators in each column.
Availability is marked with a green status track on the left side of each doctor's column,
making open slots easy to spot and supporting quick scheduling decisions.

To create the visual indicator, we added extra resource columns with a narrow width, styled using a custom CSS class set via the `cssClass` property in the resource data. The availability track is shown using events placed on these columns, with their content hidden via renderSchedulerEvent option and resized responsively based on the narrow resource column width. Time ranges outside each doctor's working hours are disabled to reflect their actual schedule.
