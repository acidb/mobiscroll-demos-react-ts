To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/forms/inputs-text-areas-date-fields#).

## Demo description

Use the input styling in desktop and mobile forms. The inputs feature three styles:

- Underline
- Box
- Outline

Besides that, you can pick from three label types: `inline`, `stacked` and `floating` labels.

Play around and combine different [input types with various label positions](https://demo.mobiscroll.com/react/forms/input-label-types#) to find out what fits you best.

While Mobiscroll doesn't provide built-in validation, it provides styling for error messages, disabled fields, labels and more. See how the fields look in different themes by changing it dynamically from the floating action bar on the right.

## Implementation instructions

- `Input`, `Textarea`, and `Dropdown` all accept `label` (React/Vue prop, Angular `label` attribute, JS/jQuery `data-label` attribute) and `startIcon`/`endIcon` (JS/jQuery `data-start-icon`/`data-end-icon`) for left/right icons.
- Password fields use `type="password"` plus `passwordToggle` to add a show/hide toggle icon: React `passwordToggle={true}`, Vue `:passwordToggle="true"`, Angular `[passwordToggle]="true"`, JS/jQuery `data-password-toggle="true"`.
- Disabled state: React `disabled={true}`, Vue `:disabled="true"`, Angular `[disabled]="true"`, JS/jQuery the bare `disabled` attribute — supported on `Input`, `Textarea`, and `Dropdown`.
- Error state and message: React `error={true} errorMessage="Error message!"`, Vue `:error="true" errorMessage="Error message!"`, Angular `[error]="true" [errorMessage]="errorMessage"`, JS/jQuery `data-error="true" data-error-message="Error message!"` — supported on `Input`, `Textarea`, and `Dropdown`.
- File upload is an `Input` with `type="file"` (no separate file-upload component).
- Numeric entry is an `Input` with `type="number"`, rendering the browser's native increment/decrement controls.
- Native date entry is an `Input` with `type="date"`, rendering the browser's own date control.
- The calendar-picker date field and the scroller date field are both a `Datepicker` bound to a text input: `controls: ['calendar']` opens a month-view calendar, `controls: ['date']` opens scroller wheels instead. In JS/jQuery this is `$(el).mobiscroll().datepicker({ controls: [...] })`; the demo also sets `display: 'anchored', touchUi: false` so the picker opens as a desktop-anchored popup rather than a full-screen touch picker.
- Native select uses `<select mbsc-dropdown>`/`Dropdown` with `<option>` children; it supports the same `label`, `startIcon`/`endIcon`, `disabled`, and `error`/`errorMessage` options as `Input`. Angular additionally binds the selected value with `[(ngModel)]` on the `mbsc-dropdown`.

## What this demo shows

- This demo shows text inputs, text areas, date fields, selects, file uploads, and numeric inputs in a single form.
- **Text inputs** Shows single-line fields with labels, placeholders, password entry, and left or right icons.
- **Field states** Includes disabled fields and error states with custom validation messages.
- **File upload** Shows a file input with an upload icon.
- **Text areas** Demonstrates multi-line fields with icons, disabled states, and validation errors.
- **Date entry** Shows native date input, calendar picker, and date scroller options.
- **Select inputs** Demonstrates native option lists with left or right icons, disabled states, and validation errors.
- **Numeric input** Shows a native number field with increment and decrement controls.

## Best for

- **Registration and account forms** Combine text, password, date, select, and numeric fields for structured user data entry.
- **Profile and settings forms** Present editable, disabled, and invalid fields with clear labels, icons, and error messages.
- **Contact and feedback forms** Use single-line inputs and multi-line text areas for short details and longer responses.
- **Document submission** Add a file upload field alongside other form details.
- **Booking and date-based forms** Offer native date entry, a calendar picker, or a date scroller to suit the workflow.
- **Form pattern evaluation** Compare field types, states, and configurations before applying them to a larger form.
