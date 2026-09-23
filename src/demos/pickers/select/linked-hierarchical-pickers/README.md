To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/select/linked-hierarchical-pickers#).

## Demo description

Multiple selects can be linked together as a hierarchy. A region > division > subdivision is a great example of such a hierarchy where each level is dynamically populated based on the selection of the previous level.

## Implementation instructions

- Three independent `Select` instances (Region, Division, Subdivision) are linked purely through app-level state — the component has no built-in hierarchy/parent-child option; each level's `data` array and `disabled` flag are recomputed and pushed down on the parent's change event.
- Region's `data` is the static top-level list; Division's and Subdivision's `data` start as empty arrays and are only populated once their preceding level has a value.
- `disabled: true` on the Division and Subdivision selects keeps them non-interactive until a value is chosen one level up; the demo's `getData(region, division)` helper looks up `divisions[region]` or `subdivisions[division]` from plain lookup objects keyed by the parent's `value`.
- The `onChange` event is the wiring mechanism: Region's change handler reads the new `value`, looks up that region's divisions, replaces Division's `data`, and clears `disabled` on Division (while re-disabling Subdivision and clearing its `data`, since the previous Division selection is no longer valid). Division's change handler does the same one level down for Subdivision; an empty/`null` `value` (cleared selection) re-disables the next level instead of populating it.
- Event/data binding differs per framework: React passes `data`/`disabled`/`onChange` as props, with `onChange` receiving `(event: MbscSelectChangeEvent)` and `event.value` holding the newly selected value; Angular binds `[data]`/`[disabled]` inputs and `(onChange)="handler($event)"` output on `<mbsc-select>`; the value is read the same way off the emitted event object in both.
- `touchUi={false}` forces the picker to render in the desktop dropdown style regardless of the input device — unrelated to the linking logic itself.
- This pattern generalizes to any number of dependent levels (e.g. maker → model → trim) by chaining the same disable-until-parent-has-value / repopulate-on-parent-change logic at each level.

## What this demo shows

- Three linked select inputs create a region, division, and subdivision hierarchy.
- **Inputs** The Region, Division, and Subdivision inputs are displayed vertically in hierarchical order.
- **Initial state** The Region input is enabled by default, while the Division and Subdivision inputs remain disabled until the preceding level has a value.
- **Dependent options** Each selection populates the options available at the next level of the hierarchy.
- **Picker interaction** Focusing or clicking an enabled input opens its picker below the input; clicking outside closes it.
- **Picker content** Each picker displays a predefined list of options in a dropdown-style popup.
- **Hover state** Hovering over an option highlights it in the picker.
- **Selection** Selecting an option marks it with a checkmark and updates the associated input value.

## Best for

- **Geographic selection** Guide users through related location levels, such as region, division, and subdivision.
- **Organizational structures** Select a department, team, and role from dependent options.
- **Product catalogs** Narrow a selection by category, subcategory, and product.
- **Vehicle selection** Choose a maker, model, and trim in sequence.
