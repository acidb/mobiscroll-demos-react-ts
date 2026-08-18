To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/datetime/date-picker#).

## Demo description

The date picker ships with five built-in variations for rendering the UI. The controls option supports the following:

- `date` - renders a date-only scroller or dropdown control
- `time` - renders a time-only scroller or dropdown control
- `timegrid` - renders a time grid for time selection
- `datetime` - renders a date & time scroller or dropdown
- `calendar` - renders a calendar view for date picking

When passing `controls: ['date']`, the date picker will render a date-only picker - scroller for `touchUi: true` and a dropdown for `touchUi: false`.

You can further customize the `dateFormat` and `dateWheels` to fine-tune the UX... use it as a credit card expiration picker.

- **Interested in dynamically switching between modes?** [Learn how to set up responsive behavior →](https://demo.mobiscroll.com/react/datetime/responsive#)

## Related demos

- [Learn how to set up responsive behavior →](https://demo.mobiscroll.com/react/datetime/responsive#)

## What this demo shows

- Two wheel-style date picker configurations: one for selecting a specific date and another for selecting only a month and year.
- **Date picker** The first example opens when the user focuses or clicks the input. Separate scrollable wheels let users select the month, day, and year.
- **Month and year picker** The second example opens when the user focuses or clicks the input. Separate scrollable wheels let users select the month and year without choosing a day.
- **Selection** The selected values appear in the central selection area, while neighboring values remain visually subdued.
- **Scrolling behavior** Users can scroll vertically through neighboring values to move between dates, months, and years.
- **Input behavior** Each picker opens at the bottom of the container over a darkened backdrop. Clicking outside the picker closes it.
- **Footer actions** The gray `Cancel` button discards the change, while the blue `Set` button confirms the selection.
- **Input value** Confirming a selection with `Set` displays the selected value in the associated input.

## Best for

- **Single-date selection** Choosing a specific date while keeping neighboring month, day, and year values visible.
- **Month and year selection** Choosing month-and-year values when a specific day is unnecessary, such as for credit card expiration dates.
