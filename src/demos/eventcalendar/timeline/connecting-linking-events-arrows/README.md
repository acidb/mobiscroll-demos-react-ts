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
