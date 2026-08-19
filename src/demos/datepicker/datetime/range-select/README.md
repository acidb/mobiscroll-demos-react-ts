To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/datetime/range-select#).

## Demo description

To enable range selection set the `select` option to `range`.

The microcopy for `rangeStartLabel` and `rangeEndLabel` can be easily overridden. For flight booking *"Outbound"* and *"Return"* makes sense while for accommodation booking *"Check in"* and *"Check out"* might be more appropriate.

Besides [invalidating selection that is before and after a specific date](https://demo.mobiscroll.com/react/datetime/min-max-restrictions#), the minimum and maximum allowed length of a range selection can be enforced through the `minRange` and `maxRange` options.

Dynamically switching between single, multiple or range select can be done with option changes.

- **Looking for more range picker?** [Learn how to customize range selection →](https://demo.mobiscroll.com/react/range/#)

## Related demos

- [Learn how to customize range selection →](https://demo.mobiscroll.com/react/range/#)

## What this demo shows

- An inline date range picker for selecting a start and end date from a wheel-style date picker.
- **Display mode** A segmented control on the left side of the picker switches between a date, time list, time grid and date and time picker layout. The date picker is selected by default.
- **Range labels** The configuration panel to the left of the picker includes controls for showing or hiding the start and end labels and for replacing the localized labels with custom text. Labels are shown by default, while custom labels are disabled by default.
- **Range length** At the bottom of the configuration panel, minimum and maximum range length controls define how many days a user may select.
s.
- **Start and end inputs** Clickable inputs appear above the picker. The active input has a white background, while the inactive input has a gray background. A clear button appears after a range is selected.
- **Date selection** Separate scrollable wheels let users select the month, day, and year. The selected values appear in a central selection area, while neighboring values remain visually subdued.
- **Scrolling behavior** Users can scroll vertically through neighboring values to move between dates, including dates in other months or year

## Best for

- **Bookings and reservations** Hotel stays, travel dates, rentals, and other reservation workflows that require start and end dates.
- **Leave requests** Selecting a bounded period for time-off requests.
- **Reporting periods** Choosing a date range for reports and other time-based data views.
- **Constrained date ranges** Workflows that need minimum or maximum selection lengths, configurable range highlighting, or customized start and end labels.
