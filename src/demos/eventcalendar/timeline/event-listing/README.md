To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/event-listing#).

## Demo description

In situations when users are interested in seeing a daily summary rather than an hour-by-hour layout of events use the `eventDisplay: 'fill'` property under the `timeline` configuration of the `view` option.

This is especially useful for spotting overloaded resources/days and helps in managing and creating efficient schedules.

- **Are you building UI for planning employee shifts?** [Check out this example &#8594;](https://demo.mobiscroll.com/react/timeline/employee-shifts#)

## Implementation instructions

- Set `timeline: { type: 'month', eventDisplay: 'fill' }` as the default view. `eventDisplay: 'fill'` makes each event span the full width of its day column regardless of its time range, turning the timeline into a daily event listing instead of an hour-by-hour grid.
- Add a three-option view switcher in the custom header using `renderHeader` (Angular: `headerTemplate`, Vue: `#header` slot). The three views and their configs are:
  - **Work week**: `timeline: { type: 'week', eventDisplay: 'fill', startDay: 1, endDay: 5 }`
  - **Week**: `timeline: { type: 'week', eventDisplay: 'fill' }`
  - **Month** (default): `timeline: { type: 'month', eventDisplay: 'fill' }`
- Build the custom header from: `CalendarNav`, a centered `SegmentedGroup` containing three `Segmented` options (`workweek` / `week` / `month`), then `CalendarPrev`, `CalendarToday`, `CalendarNext`.
- When the segmented selection changes, update the active view config; for the imperative API, call `calendar.setOptions({ view: ... })` directly.
- Define 6 generic resources (Resource A–F) with `id`, `name`, and `color`.
- Populate events using `dyndatetime` offsets relative to today — scatter 13 timed events across resources 1–6 on days ranging from today−4 to today+2 so that multiple resources have concurrent events on the same day, making the fill layout's density-spotting advantage visible.

## What this demo shows

- A desktop timeline layout where days are arranged horizontally and resources are listed as rows on the left.
- **Header navigation** The month and year label opens date navigation, the previous and next arrows move between months, and the Today button returns to the current date.
- **View switcher** The header includes Work week, Week, and Month options, with Month selected by default.
- **Work week view** Selecting Work week updates the timeline to show Monday through Friday.
- **Week view** Selecting Week updates the timeline to show a full Sunday-to-Saturday week.
- **Month view** Selecting Month updates the timeline to show the full month. The date strip below the header shows the visible days, with the current date highlighted.
- **Resources** Multiple resources are shown as separate timeline rows.
- **Event labels** Events appear as colored labels with bold titles.
- **Daily event listing** The timeline uses `eventDisplay: 'fill'` so events fill the day column instead of being shown in an hour-by-hour layout.
- **Date positioning** Events are placed by their assigned resource.
- **Event interaction** Events highlight on hover.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging across a time range.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through dates and resources.

## Best for

- **Daily resource summaries** Showing which resources have events on each day without using an hourly schedule layout.
- **Capacity checks** Spotting overloaded resources or busy days across a team, location, room, asset, or equipment list.
- **Shift and assignment planning** Reviewing daily work assignments where the exact time of day is less important than the resource and date.
- **Multi-resource scheduling** Comparing availability and workload across several resources in the same timeline.
- **Planning over longer ranges** Switching between work week, full week, and month views depending on the level of overview needed.
- **Operational dashboards** Giving planners a compact view of scheduled work while still allowing event selection, creation, and scrolling.
