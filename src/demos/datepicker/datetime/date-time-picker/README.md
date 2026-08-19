To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/datetime/date-time-picker#).

## Demo description

The date picker ships with five built-in variations for rendering the UI. The controls option supports the following:

- `date` - renders a date-only scroller or dropdown control
- `time` - renders a time-only scroller or dropdown control
- `timegrid` - renders a time grid for time selection
- `datetime` - renders a date & time scroller or dropdown
- `calendar` - renders a calendar view for date picking

Use `controls: ['datetime']` for rendering a date & time picker within the same control, tied to the same input, or use them separately for two inputs - `controls: ['date']` and `controls: ['time']`. It will render a scrollers for `touchUi: true` and a dropdowns for `touchUi: false`.

- **Interested in dynamically switching between modes?** [Learn how to set up responsive behavior →](https://demo.mobiscroll.com/react/datetime/responsive#)

## Related demos

- [Learn how to set up responsive behavior →](https://demo.mobiscroll.com/react/datetime/responsive#)

## What this demo shows

- Three wheel-style configurations for selecting a single date and time.
- **Compact date and time picker** The first example uses separate scrollable wheels for the date, hour, minute, and AM/PM. The current date is labeled `Today`, while other dates use an abbreviated day, month, and date format.
- **Expanded date and time picker** The second example uses separate scrollable wheels for the month, date, and year, with the hour, minute, and AM/PM wheels displayed alongside them.
- **Date and time picker with separate inputs** The third example uses one input to open month, date, and year wheels and a second input to open hour, minute, and AM/PM wheels.
- **Input behavior** Each picker opens at the bottom of the container over a darkened backdrop. Clicking outside the picker closes it.
- **Scrolling behavior** The selected values appear in a central selection area, while neighboring values are visually subdued. Users scroll vertically through each wheel to change the selection.
- **Footer actions** In the input-based examples, `Cancel` discards the changes and `Set` confirms the selected values.
- **Input value** After the user selects `Set`, the input displays the confirmed value in the format configured for that example.

## Best for

- **Compact date and time selection** Forms and mobile interfaces where users need to choose a date and time in a space-efficient picker.
- **Detailed date and time selection** Workflows where displaying the month, date, year, and time wheels together makes each part of the selection easy to review.
- **Separate date and time fields** Forms that collect the date and time independently or apply separate validation and formatting to each value.
