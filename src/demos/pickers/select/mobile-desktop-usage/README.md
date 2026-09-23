To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/select/mobile-desktop-usage#).

## Demo description

Use the select/combobox for both mobile and desktop or set it up responsively.

The main difference between the two rendering modes is how the picker is laid out. Set the `touchUi` option to `false` and the component shows up suitable for larger screens and pointer interaction while setting it to `true` renders it suitable for touch screens.

Use it on an existing form field, custom input, native select or use it on Mobiscroll form fields. You can also embed it directly into your page.
When linked to an input, the component will be shown on focus or when someone clicks on the field. Alternatively, you can leave the input editable and show the component only on a button click.

- **Handle different screen sizes by setting it up responsively** [Check out the responsive demo →](https://demo.mobiscroll.com/react/select/responsive#)

## Related demos

- [Check out the responsive demo →](https://demo.mobiscroll.com/react/select/responsive#)

## Implementation instructions

- `touchUi` (boolean) is the option that switches all four examples between touch-optimized mobile layout (`true`) and pointer-optimized desktop layout (`false`); it does not change which display mode is used, only how the picker is rendered/positioned within it.
- `data` is an array of `{ text, value }` objects (e.g. `{ text: 'Atlanta', value: 'atl' }`); JS/jQuery and Angular instead source the same options from a native `<select>`'s `<option value="...">Text</option>` children (Angular can alternatively use `<mbsc-select-option value="...">`).
- The first example binds the picker to a plain input: React/Vue pass `inputComponent="input"` on `<Select>`/`<MbscSelect>` so the component renders its own bound `<input>`; Angular passes `[inputElement]="myinput"` pointing at a template-referenced `<input #myinput>`; JS/jQuery pass `inputElement: document.getElementById('my-input')`. Focusing or clicking that input opens the picker by default.
- The second example disables the default open triggers with `showOnClick={false}` / `:showOnClick="false"` / `[showOnClick]="false"` / `showOnClick: false` and `showOnFocus` (same pattern) so the picker only opens from a separate `Show picker` button.
- Opening on the button click is declarative in React/Vue: a boolean state (`openPicker`/`isPickerOpen`) drives the `isOpen`/`:isOpen` prop, the button's click handler sets it `true`, and the `onClose`/`@close` handler resets it to `false`. It is imperative in Angular and JS/jQuery: Angular keeps a `@ViewChild('picker', { static: false })` reference to the select and calls `pickerInst.open()`; JS/jQuery call `.mobiscroll('getInst')` (jQuery) or capture the return value of `mobiscroll.select(...)` (JS) once to get the instance, then call `.open()` from the button's click handler.
- The third example binds the picker to a Mobiscroll-styled input instead of a plain one: the trigger input carries the `mbsc-input` attribute/directive (JS/jQuery/Angular) so it renders with Mobiscroll's label/box styling; React/Vue use the same `data`/`touchUi` props without `inputComponent`, since `<Select>`/`<MbscSelect>` renders a Mobiscroll input by default.
- The fourth example sets `display="inline"` (React/Vue prop, Angular attribute) or `display: 'inline'` (JS/jQuery option) to embed the option list directly on the page with no input and no modal.
- `.setVal(value, fireChange)` (JS/jQuery instance method) programmatically preselects a value on the picker instance after creation, e.g. `buttonSelect.setVal('atl', true)` on the button-triggered example; the second argument controls whether the picker's `onChange` handling fires for that programmatic update.

## What this demo shows

- Shows four single-value select examples in touch and desktop layouts.
- **Select inputs** The first example opens the picker when the user focuses or clicks a standard input. The second opens it only from the `Show picker` button next to the input. The third uses a Mobiscroll input as the trigger.
- **Input behavior** In the three input-based examples, the picker opens below the input and closes when the user clicks outside it.
- **Inline select** The fourth example embeds the picker directly in the page without an input by using inline display mode.
- **Picker content** The input-based examples show a predefined list of options in a dropdown-style popup. Inline mode displays the options directly on the page.
- **Hover state** Hovering over an option highlights it in the picker.
- **Selection** Selecting an option marks it with a checkmark to indicate the current value.
- **Input value** In the input-based examples, selecting an option updates the associated input with that value.

## Best for

- **Responsive forms** Use the touch or desktop layout to match the input method and available screen space.
- **Profile and account forms** Let users choose a single predefined value, such as a country, language, or notification preference.
- **Filters and settings** Provide a compact list for selecting one status, category, display mode, or configuration value.
- **Editable text fields** Keep an input editable while opening the predefined options from a separate button.
- **Always-visible choices** Use inline mode when the option list should remain visible without opening a popup.
