To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/timeline-resource-height#).

## Demo description

By default the height of the timeline tracks will adjust to accommodate the events inside. However, in some cases it is desired that the track heights remain equal, and distribute the overlapping events evenly inside the track. This can be achieved by using the `rowHeight: 'equal'` property under the `timeline` configuration of the `view` option.

The height of the timeline tracks have a minimum height of 52px. This means that regardless of the available vertical space the height of the timeline rows never shrinks below that number.

If there is more vertical space available the rows automatically grow to fill it. *Eg. if the parent container is 250px and there are only two resources, their height will grow to fill the full height minus the calendar header.*

This can however be overridden with a custom CSS rule:

```css
.md-timeline-height .mbsc-timeline-resource,
.md-timeline-height .mbsc-timeline-row {
min-height: 120px;
}
```

## Implementation instructions

- Set `timeline: { rowHeight: 'equal', type: 'week', timeCellStep: 240, timeLabelStep: 240 }`. The `rowHeight: 'equal'` option locks all resource rows to the same height; overlapping events are stacked within that fixed space instead of expanding the row. `timeCellStep: 240` / `timeLabelStep: 240` produces 4-hour-wide columns.
- Use `cssClass` to apply a custom class to the calendar, then override the default minimum row height by targeting `.mbsc-timeline-resource` (resource label column) and `.mbsc-timeline-row` (event track area) with a custom `min-height` value.
- Define 5 venue/room resources. Leave some resources without any events so the demo shows that equal-height rows also apply to empty rows, not only to rows with overlapping events.
- Place varying numbers of overlapping timed events on different resources (e.g. 3 overlaps on resource 1 today, 2 on resource 2 tomorrow, 4 on resource 4 two days from now) to make the equal-height constraint visually obvious across rows with different event densities. Use relative date offsets for today/today+1/today+2.

## What this demo shows

- A desktop weekly timeline layout with days arranged horizontally and resources arranged vertically on the left.
- **Header navigation** The month and year label opens date navigation, while the previous and next arrows and the Today button move the timeline between weeks or back to the current day.
- **Week view** The fixed strip below the header shows the selected week from Sunday to Saturday, with the current date highlighted.
- **Time grid** The timeline displays hourly columns from 12 AM to 9 PM.
- **Resources** Five resources are shown as individual rows on the left side of the timeline.
- **Equal row height** Resource rows keep the same height instead of expanding independently based on the number of events inside each row.
- **Overlapping events** Overlapping events are distributed within the equal-height resource row.
- **Minimum row height** Timeline rows keep a minimum height of 52px, so they do not shrink below the default minimum even when vertical space is limited.
- **Available space** When more vertical space is available, resource rows grow to fill the available height below the calendar header.
- **Custom row height** The default minimum row height can be overridden with a custom CSS rule targeting the timeline resource and row elements.
- **Current time** A vertical blue line with a time label marks the current time.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event cards** Events appear as colored cards with a left color stripe, a bold title, and the time range below the title.
- **Date positioning** Events are positioned by their assigned resource and exact date range.
- **Event interaction** Events highlight on hover and show drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging on it.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through time and resources.

## Best for

- **Consistent resource comparison** Keeping resource rows visually aligned when users need to compare availability, workload, or bookings across resources.
- **Room and equipment planning** Managing room, venue, vehicle, equipment, or asset schedules where each resource should have the same visual weight.
- **Operations dashboards** Building timeline views that need stable row heights for scanning, monitoring, or reviewing resource usage.
- **Custom layout control** Applying a fixed or larger minimum row height with CSS when the default timeline row sizing does not match the surrounding page layout.
