To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/36-hour-rolling-window-aircraft-view#).

## Demo description

The timeline component is ideal for highly dynamic resource management scenarios, such as tracking a global aircraft fleet, offering a powerful visualization solution. 
The primary technical focus is on creating a 36-hour continuous, forward-looking window that automatically updates to start from the current hour, providing an adaptive "rolling" schedule view.

To implement the dynamic 36-hour window, a single-day timeline view is configured. The `startTime` and `endTime` properties are calculated in JavaScript based on the 
current system time prior to initialization. This calculation ensures the view always spans exactly 36 hours ahead, which is achieved by setting the `endTime` with a calculated date offset (e.g., +1 or +2 days) to leverage the shifted days feature for continuous rendering. 
The time axis resolution is hourly, which is optimal for monitoring time-sensitive flights and maintenance events.

The `resources`, representing individual aircraft (tail numbers), are organized in a hierarchical structure (e.g., Airbus A350-900/Base: LAX → N351AD). This grouping allows managers to quickly drill down from a fleet level to an individual aircraft's current status. 
`Events`, which represent flights, are labeled concisely with common IATA airport codes (e.g., "JFK → LHR") for immediate route identification.

## Implementation instructions

- Use `type: 'day'` with dynamically computed `startTime` and `endTime` (both in `useMemo` with empty deps) to create a 36-hour rolling window anchored to the current UTC hour.
- Compute `startTime` as `dayjs.utc().format('HH:00')`. Compute `endTime` by adding 36 hours to `dayjs.utc().startOf('hour')`, then appending a `'+N'` day-offset suffix when the window extends into a later calendar day — subtract 1 minute from the end before comparing dates to avoid counting exact midnight as the next day.
- Set `dataTimezone` and `displayTimezone` both to `'utc'` and pass the `dayjsTimezone` plugin to `timezonePlugin` so all timestamps are interpreted and displayed in UTC.
- Set `showControls={false}` — the view is always anchored to now and needs no date navigation.
- Define resources as a two-level tree: parent nodes encode aircraft model and home base (e.g., `"A350-900 / LAX"`) with `eventCreation: false`, and child leaf nodes carry individual tail number IDs.
- Label each event with IATA airport codes in `"ORIG → DEST"` format and assign a `color` per aircraft family. Set no drag, move, or creation options — the calendar is purely read-only.
- Use `renderResourceHeader` (Angular: `resourceHeaderTemplate`, Vue: `resourceHeader`) to render a static `"TIMES SHOWN IN UTC"` label in the resource column header.
