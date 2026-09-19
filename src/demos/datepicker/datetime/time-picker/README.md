To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/datetime/time-picker#).

## Demo description

The date picker ships with five built-in variations for rendering the UI. The controls option supports the following:

- `date` - renders a date-only scroller or dropdown control
- `time` - renders a time-only scroller or dropdown control
- `timegrid` - renders a time grid for time selection
- `datetime` - renders a date & time scroller or dropdown
- `calendar` - renders a calendar view for date picking

When passing `controls: ['time']`, it will render a time-only picker - scroller for `touchUi: true` and a dropdown for `touchUi: false`. For a time grid use `controls: ['timegrid'] instead.`

You can change the `timeFormat` or rely on the formats coming from the [locale settings](https://demo.mobiscroll.com/react/datetime/localization#).

- **Interested in date selection?** [Learn how to set up a date-only picker →](https://demo.mobiscroll.com/react/datetime/date-picker#)

## Related demos

- [Learn how to set up a date-only picker →](https://demo.mobiscroll.com/react/datetime/date-picker#)

## Implementation instructions

- Four separate input-bound picker instances share one `controls` value, driven by a single segmented control (`Time list` / `Time grid`) above them.
- Each instance is created with `controls: ['time']` (time list by default); the segmented control's `change` handler calls `setOptions({ controls: [control] })` on all four instances at once, swapping every one to `controls: ['timegrid']` when `Time grid` is selected — this is a shared live toggle, not four independent pickers.
- **Default time picker**: `controls: ['time']` with no `timeFormat` override — uses the locale's default hour/minute/AM-PM format.
- **24-hour time picker**: `controls: ['time'], timeFormat: 'H:mm'` — hour and minute wheels only, no AM/PM.
- **12-hour time picker**: `controls: ['time'], timeFormat: 'h:mm A'` — hour, minute, and AM/PM wheels.
- **Time picker with seconds**: `controls: ['time'], timeFormat: 'HH:mm:ss', headerText: 'Time: {value}'` — adds an hour/minute/second wheel set and overrides the picker header to show the live-selected value via the `{value}` placeholder.
- Each instance is bound to a Mobiscroll-generated input (`mbsc-input`, `data-input-style="outline"`, `data-label-style="stacked"`) rather than rendered inline.
- `touchUi` is also settable on each instance to force the touch-scroller wheels (`true`) or the desktop dropdown rendering (`false`) regardless of the detected device; this demo doesn't wire it to a live toggle, but it's a real, valid option on the same picker.

## What this demo shows

- Four time picker configurations for selecting a single time with different time formats.
- **Display mode** A segmented control above the examples switches between a time list and a time grid. The time list is selected by default.
- **Default time picker** Separate scrollable wheels let users select the hour, minute, and AM/PM value.
- **24-hour time picker** Separate scrollable wheels let users select the hour and minute in 24-hour format.
- **12-hour time picker** Separate scrollable wheels let users select the hour, minute, and AM/PM value.
- **Time picker with seconds** Separate scrollable wheels let users select the hour, minute, and second. The header displays the selected time.
- **Input behavior** The picker opens at the bottom of the container over a darkened backdrop. Clicking outside the picker closes it.
- **Scrolling behavior** The current values appear in a central selection area, while neighboring values are visually subdued. Users can scroll vertically through each wheel to change the selected time.
- **Footer actions** In the input-based examples, `Cancel` discards the change and `Set` confirms the selected time.
- **Input value** After the user selects `Set`, the input displays the confirmed time in the format configured for that example.

## Best for

- **Appointment and booking forms** Let users choose a single appointment, reservation, or service time from a wheel-style list or time grid.
- **Localized time entry** Support interfaces that need either 12-hour time with AM/PM or 24-hour time.
- **Precise time selection** Include seconds when users need to record or configure a time more precisely than hours and minutes.
- **Configurable scheduling workflows** Offer different time selection layouts and formats while keeping the interaction focused on a single time value.
