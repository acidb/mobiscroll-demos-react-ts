To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/forms/themes-ios-material-windows#).

## Demo description

Forms can be themed and customized. There are four levels of customization:

- Base themes: Choose between `iOS`, `Material` and `Windows`.
- Light or dark: Every theme has a `light` and `dark` variant. Setting the `themeVariant` to `'auto'` will switch based on system settings.
- Custom themes: Use the [theme builder](https://mobiscroll.com/themebuilder) to customize the colors and make it match your brand.
- Custom Sass and CSS: If you need further customization, the sky is the limit with Sass and CSS overrides.

You can also see how the other demos look by changing the theme in the floating action bar on the right side (not this example, the themes are hardcoded here).

## Implementation instructions

- `theme` selects the base theme applied to every component instance: `'ios'`, `'material'`, or `'windows'`.
- `themeVariant` selects the light/dark variant: `'light'` or `'dark'`; setting it to `'auto'` follows the OS/browser color-scheme preference instead of a fixed value.
- A custom theme is applied by passing a custom theme name to `theme` (e.g. `'material-indigo'`, `'ios-gray'`, `'windows-yellow'`) — these names come from the Theme Builder export or a custom Sass build, not a separate option.
- `theme`/`themeVariant` are global settings: JS/jQuery applies them via `mobiscroll.setOptions({ theme, themeVariant })` before initializing components, or per-instance on an existing instance — JS calls `instance.setOptions({ theme, themeVariant })` directly on the value captured from the init call, jQuery instead chains `.mobiscroll('setOptions', { theme, themeVariant })`; React/Angular/Vue apply them via each framework's global `setOptions({ theme, themeVariant })` call (same import used for locale) since `theme`/`themeVariant` are not per-component props in the framework wrappers.
- Changing the theme at runtime re-applies `setOptions({ theme: newTheme })` (and `{ themeVariant: newVariant }`) to every already-rendered instance — the demo does this to every visible input, select, switch, checkbox, radio group, stepper, button, and segmented control on toggle.
- Deeper customization beyond the four base themes and light/dark variants is done externally, through the Theme Builder (colors) or custom Sass/CSS overrides — neither is a runtime option.

## What this demo shows

- This demo shows different examples for theming options for the form components.
- **Base themes** Previews the `iOS`, `Material`, and `Windows` base themes.
- **Theme variants** Switches between the light and dark variants of each theme.
- **Component preview** Applies the selected theme to inputs, selects, switches, checkboxes, radio buttons, steppers, buttons, and segmented controls.
- **Live updates** Updates the component preview when the selected theme or variant changes.
- **Theme customization** Shows how a base theme can be customized further with the Theme Builder or Sass.

## Best for

- **Theme comparison**: Evaluating how form components look with the `iOS`, `Material`, and `Windows` base themes.
- **Light and dark mode previewing**: Checking how a form component setup looks across light and dark theme variants.
- **Branded form experiences**: Exploring how to extend a base theme with the Theme Builder, Sass, or custom CSS to match a product's visual style.
