To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/select/disabled-invalid-values#).

## Demo description

Enforcing validation is essential to a great UX. It supports the following: You can set an option to invalid through the disabled property: ` data: [ ... { text: 'Chicago', value: 'chi', disabled: true }] `

Having invalids set up correctly not just enhances the UX, but improves performance.

## Implementation instructions

- Two equivalent ways to mark an option unselectable, matching the two data-population paths from data-sources:
  - **Markup-based (JS/jQuery only)**: add the `disabled` attribute to the `<option>` element, e.g. `<option value="chi" disabled>Chicago</option>`.
  - **`data`-option based (all frameworks)**: add `disabled: true` to that item's object, e.g. `{ text: 'Chicago', value: 'chi', disabled: true }`. This is the only path available to React, Angular, and Vue — they always populate via `data`/`[data]`/`:data`, never inline markup.
- `display: 'inline'` renders the picker directly in the page as a static list (no separate input, no popup/dropdown chrome) — this is what the demo uses so both enabled and disabled options are visible side by side at once.
- Disabled entries stay in the list (order and full option set are preserved) but render in a muted/gray style, show a disabled indicator on hover, and cannot be clicked/selected; enabled entries remain fully interactive and the current value is marked with a checkmark as usual.
- There is no separate `invalid`/`valid` option on Select for this — unlike Datepicker's `invalid`/`valid` options, Select disabling is per-item (`disabled` on the option/data entry), not a picker-level exclusion list.

## What this demo shows

- A single-value Select with specific options disabled.
- **Inline select** Embeds the picker directly in the page without an input by using the inline display mode.
- **Picker options** Displays enabled and disabled options together, with disabled values shown in gray.
- **Hover state** Highlights an option on hover and shows an icon for disabled values to indicate that they cannot be selected.
- **Selection** Marks the current value with a checkmark and allows selection only from enabled options.

## Best for

- **Temporary unavailability** Keeping unavailable products, services, locations, or time slots visible while preventing users from selecting them.
- **Eligibility rules** Showing choices that are unavailable because of permissions, account settings, or other requirements.
- **Dependent selections** Disabling choices that conflict with a value selected in another field.
- **Inventory or capacity limits** Indicating sold-out, fully booked, or out-of-stock choices without removing them from the list.
- **Fixed option lists** Preserving the full list and its order while clearly distinguishing valid choices from disabled ones.
