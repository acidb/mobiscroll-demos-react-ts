To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/select/setting-values-defaults#).

## Demo description

Values can change in a couple of different ways: through defaults, interacting with the UI or programmatically. The select defaults to `null` (nothing is selected), which can be easily overridden with the `defaultSelection` option.
The values are set by interacting with the component and making a selection or it can be done programmatically.
Use the `buttons` option for showing/hiding `set`, `cancel` or add custom buttons.

## What this demo shows

- Three groups of Select examples demonstrate how to initialize, change, and confirm selected values.
- **Controlling the default value** The first example starts with no selected value. The second uses the `defaultSelection` option to highlight an initial value when the picker opens; the user must confirm it before it becomes the selected value.
- **Setting values at runtime** An inline Select displays the picker directly on the page without an input. The Boston and London buttons above it use the `setVal` method to change the value programmatically, while the value can still be changed through the Select UI.
- **Setting values with buttons** The first example adds a custom button between the Cancel and Set buttons in the picker header. The second shows only a Cancel button in the footer and applies a value automatically when the user selects it, closing the dialog without requiring a separate Set action.
- **Select inputs** Focusing or clicking an input opens its picker below the input. Clicking outside the picker closes it.
- **Picker content** Input-based examples display a predefined list of options in a dropdown-style popup, while the inline example displays the options directly on the page.
- **Hover state** Hovering over an option highlights it.
- **Selection** Selecting an option marks it with a checkmark to indicate the current value.
- **Input value** In the input-based examples, confirming a selection updates the associated input with that value.

## Best for

- **Optional form fields** Start with no selected value when users should make an explicit choice.
- **Suggested defaults** Present a preselected option while requiring users to confirm it before applying the value.
- **External controls** Update a Select programmatically from preset buttons or other controls outside the component.
- **Inline selection** Keep a small set of options visible on the page when opening a separate popup would interrupt the workflow.
- **Explicit confirmation** Use Cancel and Set actions when users should review a choice before applying it.
- **Immediate selection** Remove the Set action when choosing an option should apply the value and close the dialog immediately.
- **Custom picker actions** Add a custom button when the selection flow needs a dedicated shortcut alongside the standard actions.
