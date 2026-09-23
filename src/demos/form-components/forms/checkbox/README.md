To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/forms/checkbox#).

## Demo description

Use checkboxes for multiple choice lists or properties or `true/false` properties of an event. Different color presets are available.

## Implementation instructions

- `label` sets the checkbox's primary text; `description` adds secondary supporting text below/beside it.
- `disabled` (boolean prop/attribute) disables the checkbox in either its checked or unchecked state; it does not change the checked value.
- `color` accepts six presets: `primary`, `secondary`, `success`, `danger`, `warning`, `info` (no `light`/`dark` variant for checkboxes).
- Checked state handling differs by framework: React exposes `checked`/`defaultChecked` (controlled/uncontrolled); Vue two-way binds via `v-model` on a `ref<boolean>`, with no separate `defaultChecked` — the bound ref's initial value is the initial checked state; Angular two-way binds via `[(ngModel)]`; JS/jQuery uses the native `checked` attribute on `input[type="checkbox"][mbsc-checkbox]`.
- Framework differences: React `<Checkbox label="..." description="..." defaultChecked={true} disabled={true} color="primary" />`; Vue `<MbscCheckbox v-model="option1" label="..." description="..." :disabled="true" color="primary" />`; Angular `<mbsc-checkbox label="..." description="..." [(ngModel)]="ch1" [disabled]="true" color="primary"></mbsc-checkbox>`; JS/jQuery `<label><input mbsc-checkbox type="checkbox" data-label="..." data-description="..." data-color="primary" checked disabled /></label>`.

## What this demo shows

- This demo shows different examples for checkboxes.
- **Checkbox states** Checkboxes in checked and unchecked states.
- **Disabled states** Disabled checkboxes in both checked and unchecked states.
- **Supporting content** Checkboxes with titles and descriptive text.
- **Color presets** The primary, secondary, success, danger, warning, and info checkbox colors.
- **Selection patterns** Checkboxes for selecting multiple options and setting `true/false` event properties.

## Best for

- **Multiple-choice lists** Letting users select any number of options from a list.
- **Event properties** Setting independent `true/false` properties for an event.
- **Settings forms** Pairing checkbox titles with descriptive text when an option needs additional context.
- **Unavailable options** Showing checked or unchecked values that users cannot currently change.
- **Color-coded options** Applying preset colors when checkboxes need distinct visual meaning.
