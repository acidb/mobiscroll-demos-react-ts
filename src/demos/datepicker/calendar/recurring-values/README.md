To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/calendar/recurring-values#).

## Demo description

Disable recurring days, set marked or colored days with the help of the `recurring` object. Learn how to configure `daily`, `weekly`, `monthly` and `yearly` recurring dates and pass a rule in the `recurring` property under the `invalid`, `marked`, `colors` or `labels` options. Exceptions for specific and recurring days can be configured.

Use the configurator to experiment, build strings and objects that you can grab and use.

- **Interested in disabling dates?** [Discover how invalids work →](https://demo.mobiscroll.com/react/calendar/disabled-invalid-values#)

## Related demos

- [Discover how invalids work →](https://demo.mobiscroll.com/react/calendar/disabled-invalid-values#)

## What this demo shows

- Shows an interactive recurrence configurator with three selectable sections for defining recurrence rules, excluded dates, and recurring exclusions.
- **Recurring rule** Displays a selectable row with an input that reflects the currently selected recurrence settings and a dark blue `Edit` button.
- **Recurring rule popup** Clicking the input or the `Edit` button opens a popup below the input.
- **Recurrence type** The top of the popup contains a segmented control with `Daily`, `Weekly`, `Monthly`, and `Yearly` options, where the selected option defines the recurrence type.
- **Repeat interval** Below the segmented control, the popup shows a `Repeat every [input] days` field with helper text explaining that the date repeats every day or every `x` days based on the entered value.
- **Stop condition** The bottom part of the popup contains a `Stop condition` section with three options for ending the recurrence.
- **Never stop** Shows an option that repeats the date indefinitely.
- **Run until date** Shows an option with a date input that opens a date picker and repeats the date until a specific date.
- **Run until occurrences** Shows an option with a numeric input that repeats the date until it reaches a specified number of occurrences.
- **Code preview** Next to the recurrence rule configurator, a code snippet updates to show the selected values and how the recurring rule should be configured.
- **Exclude specific dates** Shows a selectable section for excluding dates from recurring dates with an `Exclude [input] from recurring events` field.
- **Date exclusion picker** Clicking the exclude input opens a date picker where multiple dates can be selected.
- **Recurring exclusions** Shows a third selectable section for defining a specific recurring rule for the days to exclude.
- **Recurring exclusions code preview** Next to this section, a code snippet shows the selected exclusion values and how that recurring rule should be configured.

## Best for

- **Learning recurrence setup** Explaining to Mobiscroll users how recurring date rules can be configured.
