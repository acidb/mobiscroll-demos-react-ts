To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/daily-weekly-monthly-yearly-timeline#).

## Demo description

Set up `day`, `week`, `month` or `year` views.

For certain views you can customize the visible days along with the scale of the timeline through the `timeline` object under the view option. You can control the days shown (eg. Weekdays), set the time scale (eg. 30 minutes) and set the labels shown (eg. every 15 minutes).

- **Specify the first and last visible weekdays** - Use the `startDay` and `endDay` properties
- **Set the visible time range** - Use the `startTime` and `endTime` properties
- **Shift the visible time window** - Use the `startTime` and `endTime` properties to include ranges that extend into the previous or next day
- **Control the granularity of the timeline** - Use the `timeCellStep` and `timeLabelStep` properties
- **Week numbers** - Controlled through the `weekNumbers` property
- **Real time positioning or event listing** - Set `eventDisplay: 'fill'` if you want to list the events on a daily basis rather than have them positioned with minute precision

- **Interested in the time grid?** [Check out how you can configure the vertical time rendering &#8594;](https://demo.mobiscroll.com/react/scheduler/show-hide-hours-days#)

## Implementation instructions

- Set `timeline: { type: 'week', startDay: 1, endDay: 5, timeCellStep: 60, timeLabelStep: 60 }` under the `view` option to render a Monday–Friday weekly timeline with one-hour-wide columns and one-hour-interval labels. This is the default configuration shown in the demo.
- `type` accepts `'day'`, `'week'`, `'month'`, or `'year'`. Switching the type changes the horizontal resolution: `'day'` shows hours within a single day; `'week'` shows days within a week; `'month'` shows days within a month; `'year'` shows months within a year.
- `startDay` and `endDay` (0 = Sunday … 6 = Saturday) trim the visible weekdays. Setting `startDay: 1, endDay: 5` restricts the view to Monday–Friday and hides weekend columns.
- `timeCellStep` controls the width of each time column in minutes; `timeLabelStep` controls how often the header label repeats. Set both to the same value (e.g. 60) for uniform labeled columns, or set `timeLabelStep` to a multiple of `timeCellStep` to show a label every N cells.
- `startTime` and `endTime` limit the visible hour range within each day (e.g. `'08:00'` to `'18:00'`). Values can cross midnight to show overnight windows (e.g. `startTime: '22:00'`, `endTime: '06:00'`).
- Set `eventDisplay: 'fill'` to list events as daily blocks spanning the full cell height, rather than positioning them by exact start/end minute. Useful for month or year views where minute-precision layout is not meaningful.
- Define room or venue resources with `id`, `name`, and `color`. Load events from a remote endpoint using `getJson` (or any fetch helper) and pass them to `data`. Each event needs a `resource` id, `start`, `end`, and `title`.
