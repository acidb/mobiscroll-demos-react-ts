To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/select/multiple-lines#).

## Demo description

Sometimes, the items of the select can get very long and they won't fit a single line. For those cases you can use the [custom item templating](https://demo.mobiscroll.com/react/select/item-templating#) and `itemHeight` to solve the rendering problems.

## Implementation instructions

- `data` is an array of `{ value, text }` objects; long `text` strings are what forces the wrapped, multi-line rendering shown in this demo.
- `itemHeight` (number, px) sets a fixed row height for every option in the popup list — it must be increased from the default single-line height (e.g. to `60`) so a multi-line custom item template has room to render without clipping or overlapping neighboring rows.
- `maxWidth` (number, px) caps the popup's width (e.g. `400`) so long option text wraps within a readable column instead of stretching the picker edge to edge.
- Custom item markup is supplied per framework: JS/jQuery pass a `renderItem(item)` function option that returns an HTML string, using `item.display` for the option's resolved label; React passes a `renderItem` prop function that returns JSX, also reading `item.display`; Vue uses the `#item` scoped slot on `<MbscSelect>`, receiving the item as the slot prop and reading `item.display`; Angular passes `[itemTemplate]` pointing to an `<ng-template #itemTemp let-item>` and reads `item.display` via interpolation (`{{item.display}}`).
- `item.display` is the resolved/formatted label Mobiscroll computes for the option (distinct from the raw `item.text` on the data object) — templating code should read `.display`, not `.text`, to get the same value the default renderer would have shown.
- The custom item wrapper needs its own CSS to actually use the extra `itemHeight` (e.g. a flex container with `white-space: initial` and a height matching `itemHeight` so wrapped text is vertically centered) — this is regular page CSS, not a Select option.

## What this demo shows

- Shows a single-value select with custom item templates that display options across multiple lines.
- **Opening and closing** Focusing or clicking the input opens the picker below it. Clicking outside the picker closes it.
- **Picker content** A predefined list of options appears in a dropdown-style popup, with each option formatted using a custom multiline template.
- **Hover state** Hovering over an option highlights it in the picker.
- **Selection** Selecting an option marks it with a checkmark to identify the current value.
- **Scrolling** The picker supports scrolling through the full list of options.
- **Input value** Selecting an option updates the input with the chosen value.

## Best for

- **Descriptive choices** Options that combine a primary label with supporting details or explanatory text.
- **People and account selection** Names that need secondary information, such as a role, team, email address, or account identifier.
- **Product and service selection** Items that include a name together with a variant, specification, or short description.
- **Location selection** Long place names or addresses that are easier to scan when displayed across multiple lines.
