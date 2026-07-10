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

## What this demo shows

- A desktop weekly classroom timetable layout with Monday to Friday workdays, repeated room resources on the vertical axis, and working hours on the horizontal axis.
- **Header navigation** The month and year label in the top-left opens date navigation, while the previous and next arrows and the Today button move between weeks or return to the current day.
- **Time grid** The fixed strip below the header shows working hours from 8 AM to 8 PM in hourly columns.
- **Vertical week view** The strip on the left shows the selected work week from Monday to Friday.
- **Resources** Room resources are repeated in each day, with Green Hall, White Hall, Red Hall, Blue Hall, and Yellow Hall shown for every weekday.
- **Current time** The current time is shown with a vertical blue line and a time label.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event cards** Events are rendered as colored cards with a colored left stripe, the course name in bold, the professor name in bold light gray text, and the student year level.
- **Event positioning** Events are placed by resource, date, start time, and end time.
- **Event overlapping** Overlapping events are stacked within the resource row so they remain visible, with the row height increasing as needed.
- **Event creation** New events can be created by double-clicking in the timeline or by clicking and dragging across a time range.
- **Event interaction** Events highlight on hover and show drag and resize handles for moving or changing the event duration.
- **Event selection** Clicking an event selects and highlights it.
- **Vertical scrolling** The resource area scrolls vertically so the timeline can display many repeated room rows.

## Best for

- **School timetables** Weekly class schedules where courses need to be organized by day, time, and classroom.
- **University course scheduling** Multi-room academic schedules with parallel classes, professors, and student year levels.
- **Conference room planning** Room-based schedules where each location needs its own row for every workday.
- **Classroom management** Timetables that need to show room usage across a Monday to Friday week.
- **Facility scheduling** Resource planning scenarios where events are grouped by both date and location.
