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
