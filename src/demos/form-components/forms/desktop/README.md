To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/forms/desktop#).

## Demo description

Use the grid layout to create single and multiple column forms suited for medium and large screens. Don't go overboard with too many columns but make use of the available horizontal space on bigger screens.

Use the global options for setting the theme, localization options and everything that should be consistent across your app.

- **Looking for mobile forms?** [Learn how to create full width, single column forms →](https://demo.mobiscroll.com/react/forms/mobile#)

## Related demos

- [Learn how to create full width, single column forms →](https://demo.mobiscroll.com/react/forms/mobile#)

## Implementation instructions

- The multi-column layout uses Mobiscroll's grid CSS classes on plain wrapper `<div>`s, not a component option: `.mbsc-grid.mbsc-grid-fixed` containing `.mbsc-row` elements with `.mbsc-col-{breakpoint}-{size}` columns (size out of 12).
- Column spans stack per breakpoint, e.g. `mbsc-col-md-6 mbsc-col-12` is full width below `md` and half width from `md` up; `mbsc-col-md-4 mbsc-col-6` is half width by default and a third at `md`.
- `mbsc-row.mbsc-justify-content-center` combined with a bounded column width on the row's own wrapper (e.g. `mbsc-col-md-10 mbsc-col-xl-8`) centers and caps the grid's overall width on large screens instead of letting it stretch edge to edge.
- The single-column variant is the same grid classes with no multi-column split — each field's wrapper stays at its default full-row width, producing one field per row.
- `inputStyle="box"` and `labelStyle="floating"` (JS/jQuery: `data-input-style="box"` / `data-label-style="floating"`) are applied per field for the boxed-input-with-floating-label style used in the multi-column example; the single-column example omits them for the plain underline style.
- `passwordToggle` (JS/jQuery: `data-password-toggle="true"`) adds a show/hide control to a password-type `Input`/`mbsc-input`.
- A `Dropdown`/`mbsc-dropdown`/`MbscSelect`-family select field is populated with plain `<option>` children for the state/choice list.

## What this demo shows

- Shows a single-column and multi-column grid layouts for forms on medium and large screens.
- **Responsive grid** Fields spanning different column widths to use the available horizontal space without overcrowding the form.
- **Multi-column form** Text, password, and select inputs arranged within the same grid layout.
- **Password field** A visibility toggle for showing or hiding the entered password.
- **Select field** A dropdown for choosing from a set of options.
- **Single-column form** A compact layout with consistently aligned labels and inputs.
- **Field organization** Form grids used to arrange related fields in a clear, structured layout.

## Best for

- **Account and profile forms** Arrange related user details side by side on wider screens.
- **Checkout and billing forms** Group contact, address, and payment-related fields in a compact desktop layout.
- **Admin and data-entry forms** Make forms with many fields easier to scan and complete without excessive vertical scrolling.
- **Settings forms** Organize related configuration fields into clear rows and columns.
- **Registration and onboarding forms** Present related information in logical groups while adapting the layout to the available width.
