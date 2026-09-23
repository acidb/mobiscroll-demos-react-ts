To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/select/multiple-select#).

## Demo description

Use it on mobile and desktop for listing different options with multiple select. It can be tied to an input, native select or rendered inline. Turn it on by setting `selectMultiple` to `true`.

As an alternative to the [checkbox list](https://demo.mobiscroll.com/react/forms/checkbox#) it works great for category filtering... eg. e-commerce solutions.

- **Looking for single value selection?** [Check out the previous example →](https://demo.mobiscroll.com/react/select/single-select#)

## Related demos

- [Check out the previous example →](https://demo.mobiscroll.com/react/select/single-select#)

## Implementation instructions

- `selectMultiple` (boolean) is the option that turns the picker from single-value into multi-value selection; it is the only option that differs between this demo and a single-select instance built from the same `data`.
- `data` is an array of `{ value, text }` objects (e.g. `{ value: 1, text: 'Books' }`); with `selectMultiple: true` the resolved value becomes an array of the selected `value`s instead of a single scalar.
- Framework binding is a plain prop/attribute/option in every framework, with no imperative wiring needed for the multi-select behavior itself: React `selectMultiple={true}` on `<Select>`, Vue `:selectMultiple="true"` on `<MbscSelect>`, Angular `[selectMultiple]="true"` on `<mbsc-select>`, JS/jQuery `selectMultiple: true` in the options object passed to `mobiscroll.select(el, {...})` / `$(el).mobiscroll().select({...})`.
- Selected options are marked with a checkmark inside the popup list, and once confirmed each selected value renders as its own removable chip inside the bound input — this chip rendering is automatic once `selectMultiple` is on and the picker is bound to an input (`inputElement` in JS/jQuery, or the component's own rendered input in React/Vue/Angular), not a separately configured option.
- Removing a chip's value from the input (via its close icon) deselects that option in the picker; no separate event handler is required to keep the input and the picker's selection in sync — the bound input and the picker's checked state stay linked through the shared `data`/value binding.
- JS/jQuery can alternatively source `data` from a native multi-select element (`<select multiple>` with `<option>` children) instead of passing a `data` array — the demo's fullscreen markup uses this native-`<select>` form, while the framework code snippets use an explicit `data` array.

## What this demo shows

- Shows a select that lets users choose multiple options from a predefined list.
- **Opening the picker** Focusing or clicking the input opens the picker below it.
- **Closing the picker** Clicking outside the picker closes it.
- **Picker content** Show a predefined list of options in a dropdown-style popup.
- **Hover state** Hovering over an option highlights it in the picker.
- **Selection** Selecting one or more options adds a checkmark to indicate that it is selected.
- **Scrolling** The picker supports scrolling through the full list of options.
- **Selected values** Selected options appear as chips inside the input.
- **Removing values** Each selected value can be removed individually using the close icon on its chip.

## Best for

- **Team member selection** Choose multiple people from a team directory using avatars and names for quick identification.
- **Participant assignment** Add several attendees, collaborators, or assignees to an item.
- **Contact selection** Select multiple recipients from a contact list where profile images help distinguish people with similar names.
