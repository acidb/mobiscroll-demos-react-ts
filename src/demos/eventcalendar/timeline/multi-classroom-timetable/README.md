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

## Implementation instructions

- Use `type: 'week'` with `startDay: 1` and `endDay: 5` to limit the view to Monday through Friday.
- Set `startTime: '08:00'` and `endTime: '20:00'` to restrict the horizontal time axis to the relevant school hours.
- Set `resolutionHorizontal: 'hour'` so each column on the time axis represents one hour.
- Set `resolutionVertical: 'day'` to make the vertical axis repeat all resources under each day of the week, creating a timetable layout where rows represent classroom-per-day combinations rather than resources alone.
- Define resources as a flat list of classrooms. Each classroom row appears once under every day in the vertical axis.
- Use `renderTimelineDay` (Angular: `timelineDayTemplate`, Vue: `timelineDay`) to render a custom day label with the full day name and the formatted date.
- Use `renderTimelineEventContent` (Angular: `timelineEventContentTemplate`, Vue: `timelineEventContent`) to render a custom event body showing the class title, professor name, and student year level from custom event properties.
- Use `extendDefaultEvent` to pre-populate newly created events with a default title, professor, year level, and color.
