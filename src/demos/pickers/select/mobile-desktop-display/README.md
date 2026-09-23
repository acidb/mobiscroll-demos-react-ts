To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/select/mobile-desktop-display#).

## Demo description

The select/combobox has five built-in display modes that can be controlled through the display option:

- `top` - modal that slides down from the top
- `bottom` - modal that slides up from the bottom
- `center` - modal that shows up in the middle with a pop animation
- `anchored` - modal that shows up anchored to an input or any dom element
- `inline` - embeddable picker that is rendered into the markup without its own modal

Use the touchUi option to switch between touch optimized mobile rendering and pointer optimized desktop rendering. It can be dynamically switched with the help of the `responsive` option.

The defaults change on a theme to theme basis. The `ios` theme comes with `bottom` on mobile and `anchored` on desktop while the `material` and `windows` themes have `center` on mobile and `anchored` on desktop.

- **Want to see how to set up responsiveness?** [Check out the previous example →](https://demo.mobiscroll.com/react/select/responsive#)

## Related demos

- [Check out the previous example →](https://demo.mobiscroll.com/react/select/responsive#)

## Implementation instructions

- `display` accepts five values on the `Select`/select instance: `'top'` (modal sliding down from the top), `'bottom'` (modal sliding up from the bottom), `'center'` (centered modal with a pop animation), `'anchored'` (positioned relative to the bound input/element), and `'inline'` (rendered directly into the page markup with no modal).
- `touchUi` (boolean) switches between touch-optimized rendering (`true`) and pointer-optimized desktop rendering (`false`), independent of `display`; it is commonly paired with the `responsive` option to change per breakpoint.
- Defaults for `display`/`touchUi` are theme-dependent: the `ios` theme defaults to `bottom` on mobile and `anchored` on desktop, while `material` and `windows` default to `center` on mobile and `anchored` on desktop.
- Each non-inline instance is bound to a plain input via `inputElement` (JS/jQuery) so the input stays independent markup from the picker; the `inline` instance has no input and no `inputElement`.
- Framework binding differs only in how `display` is passed: React sets it as a `display` prop on `<Select>` (e.g. `display="anchored"`); Vue sets it as a `display` attribute on `<MbscSelect>`; Angular sets it as a static `display` attribute on `<mbsc-select>` (not a `[display]` binding, since it does not change at runtime in this demo) alongside a `[touchUi]` property binding; JS/jQuery pass `{ display: 'anchored', touchUi: ... }` into `mobiscroll.select(el, {...})` / `$(el).mobiscroll().select({...})`.
- `touchUi` itself is always a bound/dynamic value across frameworks (`touchUi={...}` in React, `:touchUi="..."` in Vue, `[touchUi]="..."` in Angular, `touchUi: ...` in JS/jQuery) because the demo toggles it live to compare mobile vs. desktop rendering per display mode.

## What this demo shows

- Five select pickers demonstrate single-value selection across the supported display modes.
- **Inline select** Embeds the picker directly in the page without an input or modal.
- **Anchored picker** Opens from an input and positions the picker next to that input or another DOM element.
- **Top picker** Opens in a modal that slides down from the top.
- **Bottom picker** Opens in a modal that slides up from the bottom.
- **Center picker** Opens in the middle of the viewport with a pop animation.
- **Modal behavior** Focusing or clicking an input opens its picker, while clicking outside the picker closes it.
- **Picker content** Input-based examples show a predefined list of options in a popup, while inline mode displays the options directly on the page.
- **Hover state** Hovering over an option highlights it in the picker.
- **Selection** Selecting an option marks it with a checkmark to indicate the current value.
- **Footer actions** The gray `Cancel` button discards changes, while the blue `Set` button confirms the selection.
- **Input value** Confirming a selection updates the associated input with the selected value.

## Best for

- **Inline forms** Keep a short list of options visible when selection is a central part of the page and does not need a popup.
- **Desktop forms** Use the anchored display to keep the option list close to its input or another triggering element.
- **Mobile forms** Use the top or bottom display for touch-oriented selection in a modal that enters from a screen edge.
- **Focused selection** Use the center display when choosing a value should appear as a distinct modal task in the middle of the viewport.
- **Responsive interfaces** Switch between touch-optimized mobile rendering and pointer-optimized desktop rendering for the same select control.
