To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/multiple-days-weeks-months-quarters-years-variable-resolution#).

## Demo description

There are four types of timeline views: `day`, `week`, `month` and `year`. Use the `size` property of the configuration object to set the length of the view or page size.

Use the `resolutionHorizontal` property of the configuration object to set the horizontal unit of a timeline column, it can be
`'hour'`, `'day'`, `'week'`, `'month'`, `'quarter'` and `'year'`.
In case of hourly resolution, the columns can be split to minutes (1, 5, 15, 20, 30) or merged into multiple hours (2, 3, 4, 6, 8, 12) using the
`timeCellStep` and `timeLabelStep` properties.

Use the `resolutionVertical` property of the configuration object to set the vertical unit of a timeline rows, it can be
`'day'` or `'none'`.
If set to `'day'`, the days will be rendered on the vertical axis, while the hours of the day will be displayed on the horizontal axis.

Use the `hideEmptyRows` property to control the visibility of empty rows. If `hideEmptyRows` is set to `true`,
rows without any events will not be displayed. This has no effect on parent resources — they will remain visible unless
`resolutionVertical` is set to `'day'`, in which case an entire day will be hidden if all resources are empty.

Use the `hideInvalidRows` property to control the visibility of invalid rows. If `hideInvalidRows` is set to `true`,
rows that are fully invalid - consists of periods defined as `allDay: true`, date (`MbscDateType`), or time ranges that span a full day or multiple days - will be hidden.
This has no effect on parent resources — they will remain visible unless `resolutionVertical` is set to `'day'`, in which case an entire day will be hidden if all resources are fully invalid.

The reference date, controlled through the `refDate` option,
is today by default, but it can be set to any date, like the first day of the month, or the first day of the year.
The `refDate` serves as the start of the reference range. From that point on you can navigate forward and backward.

A couple of examples:

- **Rolling two weeks** - use `type: 'day'` and `size: 14`
- **Two weeks (starting with Sun/Mon)** - use `type: 'week'` and `size: 2`
- **Quarter view, starting from January** - use `type: 'year'` and `resolutionHorizontal: "quarter"`
- **Rolling three months** - use `type: 'month'` and `size: 3`
- **Year view** - use `type: 'year'`

## Implementation instructions

- Set `timeline: { type: 'week', size: 2 }` under the `view` option to display a rolling two-week timeline — the default configuration shown in the demo. The `size` property multiplies the span of the chosen `type`: `size: 2` with `type: 'week'` shows 14 days; `size: 3` with `type: 'month'` shows three months.
- `type` determines the page unit and available navigation steps: `'day'` (single days), `'week'` (calendar weeks), `'month'` (calendar months), or `'year'` (calendar years). Common presets: rolling 14 days → `type: 'day', size: 14`; quarter view from January → `type: 'year', resolutionHorizontal: 'quarter'`; rolling three months → `type: 'month', size: 3`.
- `resolutionHorizontal` overrides the default column width unit for the chosen type. Accepts `'hour'`, `'day'`, `'week'`, `'month'`, `'quarter'`, or `'year'`. For hourly resolution, use `timeCellStep` and `timeLabelStep` (in minutes) to split columns into finer intervals (e.g. 15 or 30 min) or merge them into multi-hour blocks (e.g. 120 for 2 hours).
- `resolutionVertical: 'day'` renders days on the vertical axis with hours on the horizontal axis — useful for a Gantt-style layout. The default `'none'` renders resources on the vertical axis.
- Set `hideEmptyRows: true` to suppress resource rows that have no events in the current view. Set `hideInvalidRows: true` to suppress rows that are entirely covered by `allDay` or full-day invalid ranges. Neither property affects parent resource rows unless `resolutionVertical: 'day'` is active.
- Use `refDate` to fix the start of the view to a specific date (e.g. the first of January for a year view). Without it, today is used as the reference point and navigation moves forward/backward from there.
- Define room or venue resources with `id`, `name`, and `color`. Load events from a remote endpoint using `getJson` (or any fetch helper) and pass them to `data`.

## What this demo shows

- A desktop timeline layout with a custom date range arranged horizontally and resources listed vertically on the left.
- **Range controls** A configuration panel beside the timeline lets users choose a numeric size from a select dropdown and switch the timeline type between `Day`, `Week`, `Month`, and `Year`, with `Day` selected by default.
- **Page size** The range controls define how many days, weeks, months, or years are shown in the timeline.
- **Horizontal resolution controls** A `Set the horizontal resolution` section lets users switch the timeline column unit between `Hour`, `Day`, `Week`, `Month`, `Quarter`, and `Year`, with `Day` selected by default.
- **Vertical resolution controls** A `Set the vertical resolution` section lets users switch the vertical resolution between `None` and `Day`, with `None` selected by default.
- **Hide controls** Two switch controls let users hide empty columns and hide invalid columns, with both options disabled by default.
- **Initial view date** The first optional date setting is titled `If unset, the initial view date is today`. When enabled, users can set the initial view date with the `Set the initial view date to` checkbox and date picker.
- **Reference date** The second optional date setting is titled `If unset, the reference date is today`. When enabled, users can set the date used for paging calculations with the `Paging is calculated from` checkbox and date picker.
- **Header navigation** The custom date range on the left opens date navigation, while the previous and next arrows and the `Today` button on the right move through the configured page range or return to the current day.
- **Month and day names** A fixed strip below the header shows month names and displays the days in the custom range using the `DD DDD` date format, with the current date highlighted.
- **Resources** The left resource column shows nine resources.
- **Event cards** Events appear as colored labels with the event title shown in bold.
- **Event positioning** Events are placed by assigned resource and date.
- **Event interaction** Events highlight on hover and expose drag and resize handles for moving events or changing their duration.
- **Event selection** Clicking an event selects and highlights it.
- **Scrolling** Horizontal and vertical scrolling are supported for navigating through the timeline range and resource list.

## Best for

- **Event planning** Planning projects, releases, or roadmaps that span multiple weeks or months.
- **Team management** Managing team schedules that need visibility beyond a single week.
- **Resource allocation** Assigning resources and reviewing capacity across extended date ranges.
- **Workload distribution** Comparing availability and workload across resources over larger timeline ranges.
