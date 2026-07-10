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
