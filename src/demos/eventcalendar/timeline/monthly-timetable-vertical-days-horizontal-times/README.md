To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/monthly-timetable-vertical-days-horizontal-times#).

## Demo description

While the timeline is great for [working with many resources](https://demo.mobiscroll.com/react/timeline/loading-big-data-sets#)
where each resource is rendered vertically with their own track, in case of a single resource
you can use the vertical space to render multiple days.

By setting the `resolutionVertical`
to day and keeping the horizontal resolution hourly,
you can easily render month views where the days of the month are listed vertically
and the daily timeline is laid out horizontally.

- **Want to learn about how you can configure the horizontal and vertical resolution?** [Play around with this example &#8594;](https://demo.mobiscroll.com/react/timeline/multiple-days-weeks-months-quarters-years-variable-resolution#)

## Related demos

- [Play around with this example &#8594;](https://demo.mobiscroll.com/react/timeline/multiple-days-weeks-months-quarters-years-variable-resolution#)

## Implementation instructions

- Set `type: 'month'` to show a full calendar month in a single view.
- Set `resolutionVertical: 'day'` so each row on the vertical axis represents one day of the month.
- Set `resolutionHorizontal: 'hour'` so the horizontal axis shows hourly time columns across the full day.
- No resources are needed — the single vertical day axis is sufficient for a personal or single-room timetable.

## What this demo shows

- A desktop monthly timetable layout where the days of the month are shown on the vertical axis and the hours of the day are shown on the horizontal axis.
- **Header navigation** The month and year label in the top left opens date navigation, while the previous and next arrows and the Today button move the timeline between months or back to the current day.
- **Time grid** The fixed strip below the header shows the 24-hour day in hourly columns.
- **Vertical month view** The left-side strip lists the days of the selected month using the `D DDD` date format, with the current date highlighted in blue.
- **Current time** The current time is marked with a vertical blue line and a time label.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event cards** Events are rendered as colored cards with a colored stripe on the left, the exact start and end time below the title, and the title in bold.
- **Event positioning** Events are placed according to their date, start time, and end time.
- **Event overlapping** Overlapping events are stacked within the day row so they remain visible, with the row height increasing as needed.
- **Event creation** New events can be created by double-clicking in the timeline or by clicking and dragging across a time range.
- **Event interaction** Events highlight on hover and show drag and resize handles for moving the event or changing its duration.
- **Event selection** Clicking an event selects and highlights it.
- **Scrolling** The timeline supports vertical and horizontal scrolling for navigating across days and hours.

## Best for

- **Meeting schedules** Organizing time-based meetings by calendar date in a single monthly timetable.
- **Training plans** Planning sessions across multiple days when each item needs a clear start and end time.
- **Project timelines** Mapping scheduled work across a month without using people, rooms, or other resources as rows.
- **Event planning** Coordinating date-based activities that need hourly placement and overlap handling.
- **Daily agenda management** Managing time-based activities by day when a resource-based timeline would add unnecessary complexity.
