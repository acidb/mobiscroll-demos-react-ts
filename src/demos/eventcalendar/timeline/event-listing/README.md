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
- When the segmented selection changes, replace the active view config in state/options with the corresponding object above. In React, store `calView` in state and update it in the `onChange` handler. In Vue, use a `ref` for the view. In JS/jQuery, call `calendar.setOptions({ view: ... })` directly.
- Define 6 generic resources (Resource A–F) with `id`, `name`, and `color`.
- Populate events using `dyndatetime` offsets relative to today — scatter 13 timed events across resources 1–6 on days ranging from today−4 to today+2 so that multiple resources have concurrent events on the same day, making the fill layout's density-spotting advantage visible.
