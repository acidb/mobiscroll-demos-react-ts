To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/forms/radio-button#).

## Demo description

Set up radio-button lists for mutually exclusive value selection. Different color presets are available.

## Implementation instructions

- Radios are grouped with `RadioGroup`/`mbsc-radio-group` (JS/jQuery: a `div` carrying the `mbsc-radio-group` attribute); an individual option is `Radio`/`mbsc-radio`/`input[mbsc-radio][type="radio"]`.
- Mutual exclusivity within a group comes from a shared `name`: set on the group in React/Vue (`RadioGroup name="group"`), or on each input in JS/jQuery and Angular.
- `label` sets an option's primary text; `description` (`data-description` in JS/jQuery) adds secondary explanatory text beneath the label.
- Selection state is bound differently per framework: Angular and Vue bind the selected value on the group itself (`[(ngModel)]="group"` in Angular, `v-model="radio"` in Vue) with each option supplying its own `value`; React marks the initially selected option with `defaultChecked={true}`; JS/jQuery marks it with the plain `checked` attribute on that option's input.
- `disabled` makes a single option non-selectable: React `disabled={true}`, Vue `:disabled="true"`, Angular `[disabled]="true"`, JS/jQuery the bare `disabled` attribute.
- `color` (`data-color` in JS/jQuery) sets a preset color per option: `primary`, `secondary`, `success`, `danger`, `warning`, `info`.

## What this demo shows

- This demo shows different examples for radio buttons.
- **Single selection** Radio button groups for selecting one option from a set of mutually exclusive choices.
- **Option content** Radio buttons with labels and optional descriptive text.
- **States** Selected, unselected, and disabled radio button states.
- **Color presets** Primary, secondary, success, danger, warning, and info radio button colors.
- **Selection indicator** A checkmark identifies the currently selected option.

## Best for

- **Settings and preferences** Choosing one value from a small set of configuration options.
- **Forms and questionnaires** Presenting mutually exclusive answers that remain visible for quick comparison.
- **Plans and service levels** Selecting one option when labels and supporting descriptions help explain the differences.
- **Availability constraints** Showing choices that are currently unavailable with a disabled state.
- **Status-based choices** Using color presets to distinguish options with different meanings or levels of importance.
