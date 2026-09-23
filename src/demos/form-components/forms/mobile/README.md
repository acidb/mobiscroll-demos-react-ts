To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/forms/mobile#).

## Demo description

Easily create single column layouts and render mobile forms using the various form elements like [buttons](https://demo.mobiscroll.com/react/forms/buttons#),
[inputs](https://demo.mobiscroll.com/react/forms/inputs-text-areas-date-fields#), [radio buttons](https://demo.mobiscroll.com/react/forms/radio-button#) and more.

Use the global options for setting the theme, localization options and everything that should be consistent across your app.

- **Building for larger screens?** [See how to make forms for tablets & desktops →](https://demo.mobiscroll.com/react/forms/desktop#)

## Related demos

- [See how to make forms for tablets & desktops →](https://demo.mobiscroll.com/react/forms/desktop#)

## Implementation instructions

- The single-column layout needs no grid classes — `Input`/`mbsc-input` fields are stacked directly inside an `mbsc-form-group` container and default to full width, which is what makes the layout mobile-friendly without any breakpoint-specific markup.
- Related fields are grouped into separate `mbsc-form-group` blocks, each with an `mbsc-form-group-title` (a plain `<div>`) labeling the section — e.g. "User Data" and "Phone Number" as two adjacent groups.
- `label` sets each field's title text (JS/jQuery: `data-label` attribute); `placeholder` sets the empty-state hint text shown inside the input.
- A checkbox is added with a `Checkbox`/`mbsc-checkbox`-family component; `label`/`description` (JS/jQuery: `data-label`/`data-description`) attach the acknowledgment title and explanatory text next to it, the same pattern used for other form fields.
- This is the same `Input`/grid-free layout used across the "desktop" demo's single-column variant — the "desktop" demo (`{{demo: section="forms" slug="desktop"}}`) adds the `.mbsc-col-*` grid classes on top of the same field set to span multiple columns on wider screens.

## What this demo shows

- Shows a clean, single-column form designed for touch-friendly data entry on mobile devices.
- **Form sections** Related fields are organized into separate User Data and Phone Number sections.
- **Text inputs** Fields collect a name, username, company, email address, and phone numbers.
- **Placeholder text** Descriptive placeholders indicate the expected value for each field.
- **Checkbox** A checkbox is paired with additional explanatory text.
- **Combined controls** Text inputs and a checkbox are presented together in one consistent mobile form.

## Best for

- **Account registration** Collecting identity, username, company, and contact details during mobile sign-up.
- **User profiles** Creating or editing personal and business contact information from a phone.
- **Customer onboarding** Gathering user and phone details in a clear, step-by-step mobile form.
- **Contact management** Adding or updating records that include email addresses and multiple phone numbers.
- **Forms with acknowledgments** Combining contact fields with a checkbox and supporting explanatory text.
