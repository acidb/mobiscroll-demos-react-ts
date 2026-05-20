To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/timeline-resource-height#).

## Demo description

By default the height of the timeline tracks will adjust to accommodate the events inside. However, in some cases it is desired that the track heights remain equal, and distribute the overlapping events evenly inside the track. This can be achieved by using the `rowHeight: 'equal'` property under the `timeline` configuration of the `view` option.

The height of the timeline tracks have a minimum height of 52px. This means that regardless of the available vertical space the height of the timeline rows never shrinks below that number.

If there is more vertical space available the rows automatically grow to fill it. *Eg. if the parent container is 250px and there are only two resources, their height will grow to fill the full height minus the calendar header.*

This can however be overridden with a custom CSS rule:

.md-timeline-height .mbsc-timeline-resource,
.md-timeline-height .mbsc-timeline-row {
min-height: 120px;
}
