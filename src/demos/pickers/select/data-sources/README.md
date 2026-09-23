To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/select/data-sources#).

## Demo description

The select component takes care of rendering data in a scrollable and consumable way for the user. The date can be passed a couple of different ways:

- **Inline HTML**, embedded in the markup - This is good if you only have a couple of static options.
- With the **`data` option** - If you want to load model data this is the way to do it. This is the way to populate the select if you want to create a [custom item template](https://demo.mobiscroll.com/react/select/item-templating#).
- **Remote data** - Load it through the `data` option from a remote api/data source.

## Implementation instructions

- **Inline HTML** works only for JS/jQuery: a native `<select>` with `<option value="...">Text</option>` children is passed to `mobiscroll.select('#id', {...})` / `$('#id').mobiscroll().select({...})` as-is, with no `data` option needed. React, Angular, and Vue always populate options through the `data` option/prop — there is no inline-markup path for those frameworks.
- **Data object** populates the picker from an array of `{ text, value }` objects passed to `data` (JS/jQuery `data: [...]` in `.select({...})`; React `data={myData}` prop on `<Select>`; Angular `[data]="myData"` binding with `myData` defined on the component; Vue `:data="myData"` binding with `myData` defined in `<script setup>`).
- **Remote data** loads the same `{ text, value }` shape asynchronously and assigns it after the initial render/init rather than at construction time:
  - JS/jQuery: get the instance via `.mobiscroll('getInst')` (or the return value of `mobiscroll.select(...)`), fetch with `mobiscroll.getJson(url, callback, 'jsonp')` / `$.getJSON(url, callback, 'jsonp')`, then call `inst.setOptions({ data: resp })` in the callback.
  - React: fetch inside a `useEffect` and store the response in state (`useState([])`), then bind `data={remoteData}` — the picker re-renders once the state updates.
  - Angular: fetch in `ngOnInit` via `this.http.get(url).subscribe(...)`, assign the response to a component property, and bind `[data]="remoteData"`.
  - Vue: fetch in `onMounted` and assign the response to a `ref([])`, bound as `:data="remoteData"`.
- `inputElement` points the picker at a separate `<input>` element (rather than the `<select>`/component itself) so the popup opens when that input is focused/clicked and shows the selected value there.
- The example data uses string `value`s (e.g. `'atl'`, `'ber'`); `text` is the label shown in the option list and, once selected, in the bound input.

## What this demo shows

- Three single-value select examples using different data population methods.
- **Inline HTML** Embeds the select and its options directly in the markup.
- **Data object** Passes model data to the `data` option, which also supports custom item templates.
- **Remote data** Passes data loaded from a remote API or data source to the `data` option.
- **Select inputs** Opens the picker when the user focuses or clicks the associated input.
- **Input behavior** Displays the picker below the input and closes it when the user clicks outside.
- **Picker content** Presents a predefined list of options in a dropdown-style popup.
- **Hover state** Highlights an option when the user hovers over it.
- **Selection** Marks the selected option with a checkmark to indicate the current value.
- **Input value** Updates the associated input with the selected value.

## Best for

- **Small static lists** Embed a few fixed options directly in the markup with inline HTML.
- **Model-driven options** Populate the select through the `data` option when values come from application data.
- **Custom item layouts** Use the `data` option when select items need custom templates.
- **Remote datasets** Load options from a remote API or data source and pass the results to the `data` option.
