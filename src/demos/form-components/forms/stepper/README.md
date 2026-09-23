To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/forms/stepper#).

## Demo description

Use the stepper to enable controlled increasing and decreasing of values. Configure the steps and choose to provide an input for manual entry.

## Implementation instructions

- `min` sets the lowest selectable value; the decrement button disables automatically once the value reaches it (e.g. `min={1}` on the Adults stepper).
- `max` sets the highest selectable value; the increment button disables automatically once the value reaches it (e.g. `max={15}`).
- The starting value is set via `value`/`defaultValue` (React `defaultValue={1}`; JS/jQuery `value="1"` attribute; Angular/Vue default to `0` when omitted).
- `label` sets the field title text shown above/beside the stepper (JS/jQuery: `data-label` attribute on the `<input mbsc-stepper>`).
- `description` sets secondary helper text shown under the label (JS/jQuery: `data-description` attribute).
- `inputPosition` controls where the numeric value/input sits relative to the increment/decrement buttons; set to `'start'` to place it before the buttons (default is after).
- Manual entry into the value field is enabled by default — the current value renders as an editable input between the two buttons, not just a static number.
- Framework markup differences: JS/jQuery wraps a plain `<input mbsc-stepper>` in a `<label>` with `data-*` attributes for all options; React uses `<Stepper label="..." description="..." min={1} max={15} defaultValue={1} inputPosition="start" />`; Angular uses `<mbsc-stepper label="..." description="..." [min]="1" [max]="15" inputPosition="start">`; Vue uses `<MbscStepper label="..." description="..." :min="1" :max="15" :defaultValue="1" inputPosition="start" />`.
- Multiple independent steppers (e.g. Adults, Children, Infant) are separate component instances grouped in one `mbsc-form-group`/`Page` container — each keeps its own `min`/`max`/value state.

## What this demo shows

- This demo shows a stepper example where the user can nncrease or decrease numeric values with dedicated stepper buttons.
- **Manual entry** Use an input field to enter a value directly when manual entry is enabled.
- **Configurable increments** Set the amount by which the value changes with each step.
- **Multiple categories** Use separate steppers for values such as the number of adults, children, and infants.
- **Current value** Display the selected value alongside the increment and decrement controls.
- **Layouts** Arrange the value and stepper buttons in different layouts.
- **Minimum value** Disable the decrement button when the configured minimum value is reached.

## Best for

- **Guest selectors** Set the number of adults, children, and infants in booking or reservation forms.
- **Product quantities** Adjust item counts in shopping carts and order forms.
- **Bounded numeric settings** Change values that must stay within a defined minimum and maximum.
- **Increment-based values** Select quantities that change in fixed steps, such as duration, capacity, or units.
- **Compact forms** Provide quick numeric adjustments without requiring keyboard input.
