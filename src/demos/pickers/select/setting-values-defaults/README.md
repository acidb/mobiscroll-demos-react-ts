To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/select/setting-values-defaults#).

## Demo description

Values can change in a couple of different ways: through defaults, interacting with the UI or programmatically. The select defaults to `null` (nothing is selected), which can be easily overridden with the `defaultSelection` option.
The values are set by interacting with the component and making a selection or it can be done programmatically.
Use the `buttons` option for showing/hiding `set`, `cancel` or add custom buttons.

## Implementation instructions

- `data` is an array of `{ text, value }` objects (e.g. `{ text: 'Atlanta', value: 'atl' }`) that defines the option list; it is the same shape whether the select is input-based or `display: 'inline'`.
- With no `defaultSelection` set, the select's value starts as `null`/unselected and the input shows the `placeholder` text.
- `defaultSelection` takes a `value` from `data` (e.g. `'ber'`) and pre-highlights that option when the picker opens; it does not set the committed value until the user confirms it (via the `set`/default confirm action).
- `display: 'inline'` renders the option list directly on the page instead of behind an input-triggered popup; it is combined with a `height` (e.g. `300`) to make the list scrollable within a fixed area.
- The `.setVal(value)` instance method sets the selected value programmatically at runtime, independent of `defaultSelection` — the demo calls it from external button click handlers (e.g. `.setVal('bos')`, `.setVal('lon')`).
- The `.setTempVal(value)` instance method stages a value into the (not-yet-confirmed) temporary selection without committing it — used from a custom `buttons` handler so the value still requires the `set`/confirm action (or auto-set) to apply.
- `buttons` is an array mixing predefined action strings (`'set'`, `'cancel'`) and custom button objects `{ text, handler }`; a custom entry is inserted between the predefined ones to add a dedicated action (e.g. `{ text: 'Custom', handler: () => instance.setTempVal('chi') }`).
- Omitting `'set'` from `buttons` (e.g. `buttons: ['cancel']`) switches the picker to auto-set behavior: selecting an option applies the value and closes the popup immediately, without a separate confirm step.
- Per framework, programmatic value control differs: JS/jQuery call `.setVal(value)` / `.setTempVal(value)` on the instance from `.mobiscroll('getInst')`; React drives value via a `value` prop bound to component state (`useState`) updated from button `onClick` handlers, and reads/sets a `ref` (`selectRef.current!.setTempVal(...)`) for the buttons-API case; Vue binds `v-model` to a `ref()` for the runtime-value case, and accesses `customRef.value.instance.setTempVal(...)` for the buttons-API case; Angular binds `[(ngModel)]` to a component property for the runtime-value case, and calls `.setTempVal(...)` through a `@ViewChild` reference to the `<mbsc-select>` for the buttons-API case.

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
