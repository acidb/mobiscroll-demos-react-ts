To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/datetime/setting-values-defaults#).

## Demo description

Values can change in a couple of different ways: through defaults, interacting with the UI or programmatically. The date and time picker defaults to `now`, which can be easily overridden with the `defaultSelection` option. The values are set by interacting with the component and making a selection or it can be done programmatically by updating the bound value. Use the `buttons` option for showing/hiding `set`, `cancel` or add custom buttons.

## What this demo shows

- Three example groups demonstrate how to control a wheel-style date picker value through defaults, runtime updates, and action buttons.
- **Date selection** Separate scrollable wheels let users select the month, day, and year. The selected values appear in a central selection area, while neighboring values remain visually subdued.
- **Scrolling behavior** Users can scroll vertically through neighboring values to move between dates, including dates in other months or years.
- **Footer actions** In the input-based examples, the gray `Cancel` button discards the change, while the blue `Set` button confirms the selected date.
- **Input value** In the input-based examples, confirming a date with `Set` displays the selected value in the input using a month, day, and year format.
- **Default values**: The first example group compares the default behavior with a date picker initialized to a specific value through the `defaultSelection` option.
- **Runtime values**: The second example group combines interactive selection with programmatic updates. Two external buttons set a specific date or return the date picker to the current date.
- **Button-based values**: The third example group demonstrates the button API with three configurations: a `Now` button that selects the current date, a custom button that selects a predefined date, and automatic value confirmation with the Set button removed.

## Best for

- **Preselected dates** Initialize a date picker with a meaningful default, such as a previously saved date or a suggested appointment date.
- **External controls** Update the selected date from controls outside the date picker, such as date shortcuts, reset actions, or workflow navigation.
- **Date shortcuts** Provide one-click actions for commonly used values, including the current date or a predefined date.
- **Automatic confirmation** Apply a date immediately after selection in workflows where a separate Set action is unnecessary.
