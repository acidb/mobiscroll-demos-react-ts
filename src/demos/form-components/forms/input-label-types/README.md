To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/forms/input-label-types#).

## Demo description

The three input styles: `underline`, `box` and `outline` can be combined with three label styles: `stacked`, `inline` or `floating`. Try different combinations to find what's right for you.

## Implementation instructions

- `inputStyle` accepts `underline`, `box`, or `outline`; `labelStyle` accepts `stacked`, `inline`, or `floating`. Both options apply uniformly to `Input`, `Textarea`, and `Dropdown` (and to a `type="file"` input, which is just an `Input` variant) and can be combined freely (`data-input-style`/`data-label-style` in JS/jQuery).
- `startIcon`/`endIcon` (`data-start-icon`/`data-end-icon` in JS/jQuery) place an icon inside the field, before or after the value.
- `error` (boolean) applies error styling to a field; `errorMessage` adds explanatory text shown below it.
- `passwordToggle` (boolean), combined with `type="password"`, adds a show/hide toggle control to a password field.
- Omitting the `label` prop/attribute (and its wrapping text in JS/jQuery) renders the field with no label, keeping only its `placeholder`.
- `Dropdown`/`mbsc-dropdown`/`select[mbsc-dropdown]` takes the same `inputStyle`, `labelStyle`, `startIcon`, and `endIcon` options as `Input`; its options are plain `<option>` elements.
- Switching the input/label style dynamically (as this demo's style switcher does) is done by calling `.setOptions({ inputStyle: ... })` / `.setOptions({ labelStyle: ... })` on each field instance in JS/jQuery; in React/Angular/Vue it's done by updating the bound `inputStyle`/`labelStyle` prop value on re-render.
- Framework differences: React `<Input inputStyle="underline" labelStyle="stacked" startIcon="..." error={true} errorMessage="..." passwordToggle={true} label="..." />`; Vue `<MbscInput inputStyle="underline" labelStyle="stacked" startIcon="..." :error="true" :passwordToggle="true" label="..." />`; Angular `<mbsc-input inputStyle="underline" labelStyle="stacked" startIcon="..." error="true" label="...">`; JS/jQuery `<label>Name<input mbsc-input data-input-style="underline" data-label-style="stacked" data-start-icon="..." data-error="true" /></label>`.

## What this demo shows

- This demo shows examples for different input and label styles.
- **Input styles** Underline, box, and outline styling for form controls.
- **Label styles** Stacked, inline, and floating labels combined with each input style.
- **Style controls** Controls for dynamically switching between the available input and label styles.
- **Field types** Consistent styling across text inputs, text areas, select inputs, and file uploads.
- **Field variations** Fields with icons, validation error styling, and no labels.

## Best for

- **Brand-aligned forms** Comparing input and label combinations when adapting forms to a product's visual style.
- **Mixed-field forms** Applying consistent styling across text inputs, text areas, selects, and file uploads.
- **Compact and spacious layouts** Evaluating inline, stacked, and floating labels for forms with different space constraints.
- **Validation states** Styling fields that need clear error feedback alongside their standard state.
- **Icon-supported inputs** Presenting fields that use icons to provide additional visual context.
