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
- Label each event with IATA airport codes in `"ORIG → DEST"` format and assign a `color` per aircraft family.
- Use `renderResourceHeader` (Angular: `resourceHeaderTemplate`, Vue: `resourceHeader`) to render a static `"TIMES SHOWN IN UTC"` label in the resource column header.

## What this demo shows

- A desktop timeline configured as a 36-hour rolling window for aircraft scheduling.
- **Timeline layout** Displays time horizontally and aircraft resources vertically, with a hierarchical resource tree on the left.
- **Resource grouping** Organizes aircraft under aircraft model and base airport combinations, such as A330-200 / DXB, A330-300 / JFK, and A350-900 / HND.
- **Aircraft resources** Shows individual aircraft registrations as child resources within each aircraft group.
- **Flight assignments** Places flight events on the timeline by assigned aircraft, date, start time, and end time.
- **Flight details** Displays flight cards with origin and destination airport codes, departure time, and arrival time.
- **Multiple legs** Shows multiple flight legs assigned to the same aircraft within the visible scheduling window.
- **Overnight flights** Includes flights that continue across the day boundary into the following date.
- **Event styling** Uses different event colors to distinguish flight assignments or aircraft schedules.
- **UTC display** Shows the schedule in UTC, with a resource-header label indicating that times are shown in UTC.
- **Current time** Displays a current time indicator as a vertical blue line with a time label.
- **Hover behavior** Shows a time indicator over the grid that follows the cursor in 15-minute increments.
- **Expandable groups** Supports expanding and collapsing aircraft groups to make larger fleets easier to navigate.
- **Scrolling behavior** Supports horizontal and vertical scrolling for working across many aircraft and time periods.
- **Event interaction** Highlights events on hover and exposes drag and resize handles for moving events or changing their duration.
- **Event selection** Selects and highlights an event when it is clicked.

## Best for

- **Airline operations** Managing flight assignments across multiple aircraft in a single timeline.
- **Aircraft scheduling** Planning aircraft usage by tail number, aircraft model, and base airport.
- **Fleet management** Reviewing grouped aircraft schedules while still allowing drill-down to individual registrations.
- **Flight planning** Coordinating multiple flight legs, overnight flights, and long-haul routes across a forward-looking time window.
- **Operations control rooms** Monitoring time-sensitive aircraft activity in a UTC-based view.
- **Large resource sets** Navigating schedules that require hierarchical grouping, expandable resource rows, and both horizontal and vertical scrolling.
