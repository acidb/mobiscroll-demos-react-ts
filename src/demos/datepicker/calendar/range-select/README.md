To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/calendar/range-select#).

## Demo description

To enable range selection set the `select` option to `range`.

The microcopy for `rangeStartLabel` and `rangeEndLabel` can be easily overridden. For flight booking *"Outbound"* and *"Return"* makes sense while for accommodation booking *"Check in"* and *"Check out"* might be more appropriate.

The range start/end labels can also be hidden in some cases if needed. Use the `showRangeLabels` option for that.

Furthermore, you have the option to toggle the range highlight with the `rangeHighlight` option, if needed.

Besides [invalidating selection that is before and after a specific date](https://demo.mobiscroll.com/react/calendar/min-max-restrictions#), the minimum and maximum allowed length of a range selection can be enforced through the `minRange` and `maxRange` options.

Dynamically switching between single, multiple or range select can be done with option changes.

## Related demos

- **Looking for more range picker?** [Learn how to customize range selection →](https://demo.mobiscroll.com/react/range/#)
