To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/select/rtl-right-to-left#).

## Demo description

RTL support is built in and can be explicitly controlled through the `rtl` option. If not set, it is inherited from the `locale` settings.

- **Explore the different locales** [Check out this example →](https://demo.mobiscroll.com/react/select/localization#)

## Related demos

- [Check out this example →](https://demo.mobiscroll.com/react/select/localization#)

## Implementation instructions

- `rtl` is a boolean option on the `Select` instance; `true` mirrors the picker layout (text direction, checkmark side, popup alignment) for right-to-left locales. When left unset, direction is inherited from the active `locale`.
- The demo toggles the switch by calling `.setOptions({ rtl: checked })` on the select instance obtained via `.mobiscroll('getInst')` — `rtl` can be flipped at runtime without recreating the component.
- `inputElement` points the select at a separate `<input>` used as the trigger/display field, decoupled from the `<select>` element that supplies the option list; the popup opens on focus/click of that input and closes on outside click.
- The underlying `<select>` element's `<option value="...">Label</option>` pairs are consumed directly as the option list — no separate `data` array is required when a native `<select>` is used as the source element.
- Per framework: JS/jQuery pass `rtl: true` inside `.select({ ... })` / `mobiscroll.select(el, { ... })` at init and change it later via `.setOptions({ rtl })`; React sets `rtl={true}` as a prop on `<Select>`; Angular binds `[rtl]="true"` on `<mbsc-select>`; Vue binds `:rtl="true"` on `<MbscSelect>`.

## What this demo shows

- Shows a single-value select example with RTL support.
- **RTL control** A side panel next to the select includes an `Enable Right-To-Left rendering` switch, which is enabled by default.
- **Select inputs** This example opens the picker when the user focuses or clicks the input.
- **Input behavior** The picker opens below the input and closes when the user clicks outside it.
- **Picker content** Show a predefined list of options in a dropdown-style popup.
- **Hover state** Hovering over an option highlights it in the picker.
- **Selection** Selecting an option marks it with a checkmark to indicate the current value.
- **Input value** Selecting an option updates the associated input with that value.

## Best for

- **RTL interfaces** Building select for products used in right-to-left languages such as Arabic, Hebrew, or Farsi.
- **Multilingual applications** Supporting users who need the same select workflow in both LTR and RTL rendering modes.
