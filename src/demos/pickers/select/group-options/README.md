To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/select/group-options#).

## Demo description

Enable group headers through the `group` property of the options or the `optgroup` of the native select.

Grouping works for both single and multiple select pickers.

## Implementation instructions

- Group headers come from a `group` field on each data item: `{ text: 'Atlanta', value: 'atl', group: 'US' }`. Items are grouped by that field's value and a non-selectable header row showing the group name is inserted above each cluster of matching items.
- Markup-based JS/jQuery selects (native `<select>`) get the same grouping from `<optgroup label="US">...</optgroup>` wrapping the relevant `<option>` elements — the `group` field on `data` items is the equivalent for React/Angular/Vue and for JS/jQuery when using the `data` option instead of markup.
- `showGroupWheel: true` adds a second, separate wheel to the left of the item list showing only the group names; selecting a group in that wheel scrolls/filters the item wheel to that group's options, while group headers remain in the item list itself.
- `selectMultiple: true` switches the picker to multi-select: selected items are marked with a checkmark in the list and rendered as removable chips inside the bound input, each with a close icon; grouping (headers and, if enabled, the group wheel) works the same way as in single-select mode.
- Per-framework binding for the grouped `data` array is the same as in data-sources: React `data={myData}` prop, Angular `[data]="myData"`, Vue `:data="myData"`, JS/jQuery `data: [...]` inside `.select({...})`; `showGroupWheel` and `selectMultiple` follow the same per-framework option/prop/binding convention (plain option in JS/jQuery, prop in React, `[showGroupWheel]`/`[selectMultiple]` in Angular, `:showGroupWheel`/`:selectMultiple` in Vue).

## What this demo shows

- Three select examples demonstrate different ways to group options.
- **Select inputs** Each example opens the picker when the user focuses or clicks the input.
- **Input behavior** The picker opens below the input and closes when the user clicks outside it.
- **Group headers** The first example organizes the option list with group headers and allows a single selection.
- **Group wheel** The second example adds a group wheel to the left of the option list, retains group headers, and allows a single selection.
- **Multiple selection with group headers** The third example organizes the option list with group headers and allows multiple selections. Selected options appear as chips inside the input, and each selection can be removed using the close icon on its chip.
- **Hover state** Hovering over an option highlights it in the picker.
- **Selection** Selected options are marked with a checkmark to indicate the current value.
- **Scrolling** The picker supports scrolling through the full list of options.
- **Input value** Selecting an option updates the input with the selected value or values.

## Best for

- **Long option lists** Organizing many options into labeled groups so users can scan and find values more easily.
- **Location selection** Grouping countries, regions, cities, or offices by geographic area.
- **People and resources** Grouping employees, team members, rooms, or equipment by department, role, or resource type.
- **Catalog selection** Grouping products, services, or inventory items by category.
- **Multiple-value workflows** Allowing users to select and review several grouped values as removable chips.
