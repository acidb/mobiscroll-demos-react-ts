To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/forms/button-segmented-stepper-colors#).

## Demo description

Use presets with pre-defined colors on top of the theme colors. Every theme ships with eight customizable presets that can be used across various components including buttons, segmented and steppers:

- Primary &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
- Secondary &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
- Success &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
- Danger &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
- Warning &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
- Info &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
- Light &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
- Dark &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

- **Customize the colors or use your own colors:** Learn how to change the Sass variables for the presets →

## Related demos

- Learn how to change the Sass variables for the presets →

## Implementation instructions

- `color` (React/Vue/Angular `color` prop, JS/jQuery `data-color` attribute) accepts all eight presets on `Button`/`mbsc-button`: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`.
- The same `color` option applies to `SegmentedGroup`/`mbsc-segmented-group` and each `Segmented`/`mbsc-segmented` child, and to `Stepper`/`mbsc-stepper` — but only six presets are used there: `primary`, `secondary`, `success`, `danger`, `warning`, `info` (no `light`/`dark` variant for segmented or stepper controls).
- Segmented items share a `name` to group them into one control; each item takes an `icon`/`data-icon` plus `defaultChecked` (React), `[checked]` (Angular), `:defaultChecked` (Vue), or the `checked` attribute (JS/jQuery) to mark the initially selected option.
- `Stepper`/`mbsc-stepper` also takes `min`, `max`, `step`, and `label`/`data-label`; this demo sets `min={-500}`, `max={500}`, `step={100}` with an initial value of `100`.
- Framework differences: React `<Button color="primary">`, `<SegmentedGroup name="..." color="primary"><Segmented value="..." icon="..." defaultChecked={true}>...</Segmented></SegmentedGroup>`, `<Stepper color="primary" defaultValue={100} min={-500} max={500} step={100} />`; Angular `<mbsc-button color="primary">`, `<mbsc-segmented-group color="primary"><mbsc-segmented [checked]="true">...</mbsc-segmented></mbsc-segmented-group>`, `<mbsc-stepper color="primary" [(ngModel)]="value" [min]="-500" [max]="500" [step]="100">`; Vue `<MbscButton color="primary">`, `<MbscSegmentedGroup color="primary"><MbscSegmented :defaultChecked="true">...</MbscSegmented></MbscSegmentedGroup>`, `<MbscStepper color="primary" v-model="value" :min="-500" :max="500" :step="100" />`; JS/jQuery plain markup attributes — `data-color`, `data-icon`, the `checked` attribute, and numeric `min`/`step`/`max`/`value` attributes on `input[mbsc-stepper]`/`input[mbsc-segmented]`.

## What this demo shows

- This example demonstrates the available preset colors (primary, secondary, success, danger, warning, info, light, and dark).
- **Buttons** Shows each preset color applied to buttons.
- **Segmented controls** Applies the same preset colors to segmented controls with text and icons.
- **Selection** Keeps the selected segment visually distinct in every color variant.
- **Steppers** Demonstrates primary, secondary, success, danger, warning, and info color variants for steppers.
- **Consistent styling** Shows how preset colors provide consistent styling across buttons, segmented controls, and steppers.

## Best for

- **Action hierarchy** Distinguishing primary actions from secondary or lower-priority actions.
- **Outcome-based actions** Using success, danger, or warning colors for confirm, delete, and caution-related buttons.
- **Informational actions** Applying the info preset to actions that open help, details, or supporting information.
- **Contrasting controls** Using light and dark presets where controls need to stand out against different backgrounds.
- **Consistent control states** Carrying the same color meaning across buttons, segmented controls, and steppers.
