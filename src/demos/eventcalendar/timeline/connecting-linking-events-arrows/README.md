To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/connecting-linking-events-arrows#).

## Demo description

Link events together, show dependency or event sequence through the
`connections` option.

Pass an array of connection objects where you can specify:

- `from`- The ID of the event where the connection starts
- `to`- The ID of the event where the connection ends
- `color`- Defines the color of the connection
- `arrow`- Defines the arrow style of the connection. Can be:
    + `'from'`- The arrow points to the starting event
    + `'to'`- The arrow points to the ending event
    + `'bidirectional'`- The arrow points to both events
    + `false`- No arrow is displayed
- `type`- Defines the type of the connection. Can be:
    + `'fs'`- finish-to-start: connects the finish of the starting event with the start of the ending event
    + `'sf'` - start-to-finish: connects the start of the starting event with the finish of the ending event
    + `'ss'` - start-to-start: connects the events' start times
    + `'ff'` - finish-to-finish: connects the events' finish times
- `cssClass` A custom css class to the connection SVG paths. E.g. if you want to render a dashed line in some cases or add hover effects, you can do it through a custom `cssClass`

## Implementation instructions

- Use `timeline: { type: 'month' }` — a full-month view.
- Define 6 resources (1–6) with distinct colors: yellow, orange-red, red, green, purple, blue.
- Add 12 events (ids 1–12) distributed in pairs across the 6 resources, each with a numeric `id` — connections reference events by `id`. Use `dyndatetime` for dates within the current month.
- Pass a `connections` array as a separate calendar option (not part of `data`). Each connection object specifies `from` (source event id), `to` (target event id), `color`, and `arrow`. The demo uses all four `arrow` values to illustrate the differences:
  - `'bidirectional'` — arrowheads on both ends
  - `'to'` — arrow points toward the target event
  - `'from'` — arrow points back toward the source event
  - `false` — plain line, no arrowhead
- One connection (5→4) uses `cssClass: 'dashed-line'` to apply a custom CSS rule to the SVG path, rendering it as a dashed line. Define `.dashed-line` in CSS with a `stroke-dasharray` style on the path element.
- The default connection type is `'fs'` (finish-to-start) when `type` is omitted. The `type` option (`'fs'`, `'sf'`, `'ss'`, `'ff'`) controls which endpoints of the two events are joined.

## What this demo shows

- A desktop monthly timeline where days are arranged horizontally and resources are listed as rows on the left.
- **Header navigation** The month and year label opens date navigation, the previous and next arrows move between months, and the Today button returns to the current date.
- **Month view** The strip below the header shows the days of the selected month, with the current date highlighted.
- **Resources** Multiple resources are shown as separate timeline rows.
- **Event cards** Events appear as colored cards with a colored stripe on the left, a bold event title, and the exact start and end time below the title.
- **Date positioning** Events are positioned by their assigned resource and exact date range.
- **Event connections** Connector lines visualize dependencies between events directly on the timeline.
- **Dependency direction** Arrows show predecessor and successor relationships so the execution order of scheduled tasks is easier to follow.
- **Cross-resource dependencies** Connections can link events across different resources and dates.
- **Connection types** The demo shows finish-to-start, start-to-start, finish-to-finish, and start-to-finish dependency types with configurable connector styling.
- **Connection styling** Connector lines can use custom colors, arrow styles, and CSS classes, including dashed-line styling.
- **Event interaction** Events highlight on hover and show drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging across a time range.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through time and resources.

## Best for

- **Task dependencies** Applications that need to show predecessor and successor relationships between scheduled tasks.
- **Critical path planning** Project schedules where users need to understand task order, downstream impact, and dependency chains.
- **Workflow management** Resource-based workflows where work items depend on other tasks being started or completed.
- **Project scheduling** Planning interfaces that need to connect events across teams, equipment, rooms, jobs, or other resources.
- **Production planning** Manufacturing, maintenance, construction, and production schedules where task sequencing needs to stay visible on the timeline.
