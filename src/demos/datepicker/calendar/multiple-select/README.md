To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/calendar/multiple-select#).

## Demo description

To enable multiple selection set the `selectMultiple` option to `true`.

The `selectMin` and `selectMax` options control how many values have to be and can be selected. Setting both works as a fixed selection count, which means the control can only be submitted if that count is met.

To customize the header you can pass a `headerText` or turn `selectCounter` on to display a localized text with the number of dates selected.

Dynamically switching between single, multiple or range select can be done with option changes.

## What this demo shows

- **Multiple date selection** The `selectMultiple` option lets users select more than one date in a single session.
- **Any number of dates** Without a selection limit, users can select as many dates as needed.
- **Maximum selection limit** The `selectMax` option limits the number of selected dates. Once the limit is reached, additional taps are ignored.
- **Selection counter** The `selectCounter` option displays a localized selection count, such as "3 dates selected," in the header and updates it as dates are selected.
- **Custom header text** The `headerText` option replaces the default header content with custom text, such as "Pick up to 5 days."
- **Selection without a header count** When neither `selectCounter` nor `headerText` is set, highlighted dates in the calendar grid indicate the current selection.

## Best for

- **Availability and override management** Select specific dates before applying an availability rule, exception, price override, or other configuration change.
- **Multi-date bookings and reservations** Let users book or reserve multiple non-contiguous dates in one flow.
- **Batch actions** Select a group of dates and apply one action to all of them, such as bulk scheduling or status updates.
- **Visual selection feedback** Use highlighted dates in the calendar grid as the primary indication of which dates are selected.
