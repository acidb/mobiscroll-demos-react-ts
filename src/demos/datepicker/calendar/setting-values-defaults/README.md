To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/calendar/setting-values-defaults#).

## Demo description

Values can change in a couple of different ways: through defaults, interacting with the UI or programmatically. The date and time picker defaults to `now`, which can be easily overridden with the `defaultSelection` option. The values are set by interacting with the component and making a selection or it can be done programmatically by updating the bound value. Use the `buttons` option for showing/hiding `set`, `cancel` or add custom buttons.

## What this demo shows

- Three example groups demonstrate how to control a monthly date picker value through defaults, runtime updates, and action buttons.
- **Header navigation** The month and year label opens the month and year picker, while the previous and next arrow buttons navigate between months.
- **Month view** A fixed weekday header displays abbreviated day names from Sunday through Saturday, with dates arranged in a grid below.
- **Month navigation** Users can navigate between months by dragging the calendar left or right.
- **Day cell states** Hovering over a date adds a gray highlight, while selecting a date adds a blue highlight. The current date remains highlighted when another date is selected.
- **Adjacent months** Dates from the previous and next months use a muted style. Selecting one navigates to its corresponding month.
- **Footer actions** In the input-based examples, Cancel discards the change and Set confirms the selected date.
- **Input value** Confirming a date displays it in the input using a month, day, and year format.
- **Default values** The first example group compares the default behavior with a Datepicker initialized to a specific value through the `defaultSelection` option.
- **Runtime values** The second example group combines interactive selection with programmatic updates. Two external buttons set a specific date or return the Datepicker to the current date.
- **Button-based values** The third example group demonstrates the button API with three configurations: a Now button that selects the current date, a custom button that selects a predefined date, and automatic value confirmation with the Set button removed.

## Best for

- **Preselected dates** Initialize a Datepicker with a meaningful default, such as a previously saved date or a suggested appointment date.
- **External controls** Update the selected date from controls outside the Datepicker, such as date shortcuts, reset actions, or workflow navigation.
- **Date shortcuts** Provide one-click actions for commonly used values, including the current date or a predefined date.
- **Automatic confirmation** Apply a date immediately after selection in workflows where a separate Set action is unnecessary.
