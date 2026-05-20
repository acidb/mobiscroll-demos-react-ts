To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/multi-classroom-timetable#).

## Demo description

While the timeline can easily render multiple days horizontally with hourly resolutions,
in some situations it makes sense to multiply the vertical scrolling height and set a
`resolutionVertical`
to day even if working with multiple resources.

To render a timetable for multiple classrooms for a whole week the horizontal timeline can be reduced
from 8AM to 8PM and days along with the classrooms can be listed vertically Monday to Friday.

Use the `resolutionVertical` and `startTime`/`endTime` properties
in combination with the `startDay`/`endDay`
properties of the timeline to set such a view up.
