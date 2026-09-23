To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/select/image-text#).

## Demo description

An image & text value picker can be easily implemented by building a [custom item template](https://demo.mobiscroll.com/react/select/item-templating#). Pass the items with its base properties, like `text` and `value` and all the custom properties needed to the data array.

## Implementation instructions

- `selectMultiple: true` (Angular `[selectMultiple]="true"`, Vue `:selectMultiple="true"`) switches the select into multi-select mode: each `data` item gets a checkmark toggle instead of single-select replace-on-pick behavior, and the bound value becomes an array of selected `value`s.
- `data` items carry the standard `text`/`value` pair plus a custom `avatar` field (e.g. `'m1'`, `'f2'`); any extra field beyond `text`/`value` is passed straight through to the item template via `item.data`.
- The avatar image isn't a built-in option — a custom item template builds its URL from `item.data.avatar` against a fixed `https://img.mobiscroll.com/demos/<avatar>.png` pattern and renders `item.display` (the resolved label) next to it.
- Custom item markup differs per framework: React passes a `renderItem` function prop returning JSX for `(item: MbscSelectItemData)`; Angular uses `[itemTemplate]="itemTemp"` with a named `<ng-template #itemTemp let-item>`; Vue uses the `#item` named slot on `<MbscSelect>`; JS/jQuery pass a `renderItem` function option returning an HTML string.
- `itemHeight={50}` must match the custom template's rendered row height so the scrollable list measures rows correctly.
- Value binding differs per framework: React controls `value`/`onChange` (the change event's `.value` is the full array of selected values, used to update local state); Angular/Vue use two-way binding (`[(ngModel)]="selected"` / `v-model="myValue"`) so the array updates automatically; JS/jQuery would read/set the array via `.getVal()`/`.setVal()` or the `value` option.
- Selected items render as removable chips inside the input; clicking a chip's close icon removes that value from the array (equivalent to unchecking the matching option in the picker) — this chip rendering is built into multi-select mode, not custom markup.
- `inputStyle`/`labelStyle`/`placeholder` are cosmetic input-decoration options and unrelated to the multi-select or templating behavior.

## What this demo shows

- Shows a select that lets users choose multiple options from a predefined list containing images and text.
- **Opening the picker** Focusing or clicking the input opens the picker below it.
- **Closing the picker** Clicking outside the picker closes it.
- **Option content** Each option displays an image or avatar alongside a person's name.
- **Hover state** Hovering over an option highlights it in the picker.
- **Selection** Selecting one or more options adds a checkmark to indicate that it is selected.
- **Scrolling** The picker supports scrolling through the full list of options.
- **Selected values** Selected options appear as chips inside the input.
- **Removing values** Each selected value can be removed individually using the close icon on its chip.

## Best for

- **Team member selection** Choose multiple people from a team directory using avatars and names for quick identification.
- **Participant assignment** Add several attendees, collaborators, or assignees to an item.
- **Contact selection** Select multiple recipients from a contact list where profile images help distinguish people with similar names.
