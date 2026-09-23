To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/select/single-select#).

## Demo description

Single value selection is the default behavior of the picker. You can explicitly enable it by setting the `selectMultiple` to `false`.

You can dynamically switch between single and multiple select.

- **Looking for multiple select?** [Check out the next example →](https://demo.mobiscroll.com/react/select/multiple-select#)

## Related demos

- [Check out the next example →](https://demo.mobiscroll.com/react/select/multiple-select#)

## Implementation instructions

- `selectMultiple` defaults to `false`, so a `Select` instance is single-value out of the box; it only needs to be set explicitly when switching a given instance between single- and multiple-select behavior at runtime.
- `data` is an array of `{ text, value }` objects (e.g. `{ text: 'Atlanta', value: 'atl' }`); when no `data` is passed, the select instead reads `<option value="...">Label</option>` entries from the native `<select>` element it's bound to.
- `inputElement` points the select at a separate `<input>` used as the display/trigger field — the popup opens on focus/click of that input, positioned below it, and closes on outside click; the selected option's text becomes the input's value and the selected option itself is marked with a checkmark in the list.
- `touchUi` (boolean) switches the picker's rendering between the touch-optimized scroller/dialog layout (`true`) and the compact desktop dropdown layout (`false`); the demo's responsive layout toggle drives this option to preview both.
- Per framework: JS/jQuery pass `touchUi`/`inputElement`/`data` inside `.select({ ... })` / `mobiscroll.select(el, { ... })`; React sets `touchUi`/`data` as props on `<Select>`; Angular binds `[touchUi]`/`[data]` on `<mbsc-select>`; Vue binds `:touchUi`/`:data` on `<MbscSelect>`.

## What this demo shows

- Shows a single-value select example.
- **Select inputs** This example opens the picker when the user focuses or clicks the input.
- **Input behavior** The picker opens below the input and closes when the user clicks outside it.
- **Picker content** Show a predefined list of options in a dropdown-style popup.
- **Hover state** Hovering over an option highlights it in the picker.
- **Selection** Selecting an option marks it with a checkmark to indicate the current value.
- **Scrolling** The picker supports scrolling through the full list of options.
- **Input value** Selecting an option updates the input with that value.

## Best for

- **Responsive forms** Use the touch or desktop layout to match the input method and available screen space.
- **Profile and account forms** Let users choose a single predefined value, such as a country, language, or notification preference.
- **Filters and settings** Provide a compact list for selecting one status, category, display mode, or configuration value.
