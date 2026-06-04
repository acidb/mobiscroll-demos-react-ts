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
