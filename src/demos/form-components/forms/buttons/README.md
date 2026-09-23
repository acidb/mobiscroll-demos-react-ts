To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/forms/buttons#).

## Demo description

Use the buttons on any mobile and desktop form or page. The buttons come with several rendering modes and styles. Use it as:

- fluid-width buttons (the buttons grow with their content)
- justified
- full width buttons

Icon support is built in along with three different styles:

- filled buttons
- flat buttons
- outlined buttons

- **Customize the look & feel:** [See how to apply color presets →](https://demo.mobiscroll.com/react/forms/button-segmented-stepper-colors#)

## Related demos

- [See how to apply color presets →](https://demo.mobiscroll.com/react/forms/button-segmented-stepper-colors#)

## Implementation instructions

- Style is set via `variant`: unset/default renders a filled button, `variant="flat"` renders a flat (borderless) button, `variant="outline"` renders an outlined button (`data-variant` in JS/jQuery).
- `icon` renders an icon-only button with no text; `startIcon` renders an icon before the button's text label (`data-icon`/`data-start-icon` in JS/jQuery). Both work with any `variant`.
- `disabled` (boolean prop/attribute; `[disabled]` in Angular) disables a button in any style or icon combination.
- Layout is controlled by the wrapping container class rather than a per-button option: `mbsc-button-group` gives fluid-width buttons that size to their content, `mbsc-button-group-block` stacks full-width buttons, and `mbsc-button-group-justified` distributes buttons evenly across the available width.
- Framework differences: React `<Button variant="flat" icon="..." startIcon="..." disabled>`; Angular `<mbsc-button variant="flat" icon="..." startIcon="..." [disabled]="true">`; Vue `<MbscButton variant="flat" icon="..." startIcon="..." disabled>`; JS/jQuery `<button mbsc-button data-variant="flat" data-icon="..." data-start-icon="..." disabled>`.
- The "Click for action" button's click handler fires a toast notification confirming the click — JS/jQuery via `mobiscroll.toast({ message: '...' })`, Angular via the injected `Notifications` service's `this.notify.toast({...})`; this demonstrates wiring a button's click event to an imperative action rather than a new button option.

## What this demo shows

- Demonstrates button styles, content options, layouts, and states for mobile and desktop forms or pages.
- **Width and layout** Fluid-width buttons grow with their content, while justified and full-width layouts distribute buttons across the available space.
- **Button content** Buttons can display text, an icon, or a combination of an icon and text.
- **Styles** Filled, flat, and outlined variants provide different visual treatments.
- **Icons** Data icons can be added to buttons.
- **States** Enabled and disabled states are shown across the different button styles.

## Best for

- **Form actions** Presenting primary and secondary actions with distinct filled, flat, or outlined styles.
- **Responsive layouts** Arranging actions as content-width, justified, or full-width buttons on mobile and desktop screens.
- **Compact controls** Using icon-only buttons where space is limited and the action is recognizable from its icon.
- **Descriptive actions** Combining icons and text when an action benefits from both a visual cue and a clear label.
- **Unavailable actions** Keeping actions visible in a disabled state when they cannot currently be used.
