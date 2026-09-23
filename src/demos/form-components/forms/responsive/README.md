To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/forms/responsive#).

## Demo description

Build in responsiveness into your @framework form using the grid layout. Define how the form elements behave across multiple screen sizes.

- The column widths will adapt to the screen size based on the predefined **.mbsc-col-{breakpoint}-{size}** classes.
- The examples are using the **.mbsc-col-md-6**, **.mbsc-col-lg-6** and **.mbsc-col-lg-3** classes.

## Implementation instructions

- The layout uses Mobiscroll's grid CSS classes, not a component option: a `.mbsc-grid`/`.mbsc-form-grid` wrapper contains one or more `.mbsc-row` elements, each holding column `<div>`s.
- Column width per breakpoint is set with `.mbsc-col-{breakpoint}-{size}` classes (size out of 12), stacked per element: e.g. `mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3` renders full width below the `md` breakpoint, half width at `md`, and quarter width at `lg` and above.
- A field with no breakpoint-specific class keeps its base `mbsc-col-12` width (full row) at every viewport size until a narrower class overrides it, e.g. `mbsc-col-12 mbsc-col-lg-6` stays full width until `lg`.
- The same markup/component tree is reused across breakpoints — only the grid classes change; there is no separate mobile vs. desktop form definition.
- `inputStyle="box"` and `labelStyle="floating"` are applied to each `Input`/`mbsc-input` field for the boxed-input-with-floating-label appearance used throughout the grid (JS/jQuery: `data-input-style="box"` / `data-label-style="floating"` attributes).
- `passwordToggle` (JS/jQuery: `data-password-toggle="true"`) adds a show/hide toggle to a `type="password"` input.
- Framework markup differences: JS/jQuery wraps plain `<input mbsc-input>` elements in `<label>`s inside `<div class="mbsc-col-...">` wrappers; React uses `<Input .../>` inside `<div className="mbsc-col-...">`; Angular uses `<mbsc-input ...></mbsc-input>` inside `<div class="mbsc-col-...">`, with boolean options like `[passwordToggle]="true"` bound; Vue uses `<MbscInput .../>` inside `<div class="mbsc-col-...">`, with boolean options like `:passwordToggle="true"`.
- A `Button`/`<button mbsc-button>` with `color="success"` (JS/jQuery: `data-color="success"`) submits the form; it sits in its own row/column span like any other grid item.

## What this demo shows

- Shows a sesponsive form grid which adapts the form layout to different viewport widths.
- **Breakpoint behavior** Changes fields from a single-column layout to multiple columns as more horizontal space becomes available.
- **Column spans** Uses different column widths to control how much horizontal space each field occupies at each breakpoint.
- **Screen sizes** Uses the same form configuration to create layouts suited to mobile, tablet, and desktop screens.
- **Form controls** Includes text and password inputs with a Create account button.
- **Grid classes** Uses Mobiscroll grid classes to build one responsive form instead of maintaining separate layouts for each screen size.

## Best for

- **Account registration** Arrange sign-up fields clearly across phones, tablets, and desktop screens.
- **Checkout forms** Reflow customer, shipping, and payment fields as the available width changes.
- **Profile and settings forms** Present related fields in columns on wider screens while keeping them readable on smaller devices.
- **Contact and application forms** Support forms that need to work across a range of devices without separate layouts.
