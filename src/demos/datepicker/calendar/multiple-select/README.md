To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/calendar/multiple-select#).

## Demo description

To enable multiple selection set the `selectMultiple` option to `true`.

The `selectMin` and `selectMax` options control how many values have to be and can be selected. Setting both works as a fixed selection count, which means the control can only be submitted if that count is met.

To customize the header you can pass a `headerText` or turn `selectCounter` on to display a localized text with the number of dates selected.

Dynamically switching between single, multiple or range select can be done with option changes.

## What this demo shows

- Multiple date selection is enabled via the `selectMultiple` option — the calendar lets users pick more than one date in a single session.
- **Any number of dates** — by default there is no upper limit; users can select as many dates as they want.
- **Maximum selection cap** — the `selectMax` option limits how many dates can be selected; once the cap is reached, further taps are ignored.
- **Select counter in the header** — the `selectCounter` option adds a localized count (e.g. "3 dates selected") to the header, updating live as dates are tapped.
- **Custom header text** — `headerText` replaces the default header with a static string, such as "Pick up to 5 days".
- **No header count** — when neither `selectCounter` nor `headerText` is active, the number of selected dates is still visible through the highlighted dates in the calendar grid.

## Best for

- **Availability and override management** — selecting a set of specific days to apply a rule, exception, or configuration change to (e.g. marking days as unavailable, setting price overrides, or flagging special dates).
- **Multi-date booking and reservations** — any flow where a user needs to reserve or book more than one non-contiguous date at once.
- **Batch actions on dates** — UI patterns where the user picks a collection of dates and then applies a single action to all of them (bulk scheduling, bulk status changes, etc.).
- Any use case that needs clear visual feedback of which dates are selected, with the highlighted dates in the calendar serving as the primary indicator.
