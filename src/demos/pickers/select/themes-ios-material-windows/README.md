To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/select/themes-ios-material-windows#).

## Demo description

The look and feel of the select can be deeply customized. There are four levels of customization:

- **Base themes:** Choose between **iOS**, **Material** and **Windows**.
- **Light or dark:** Every theme has a `light` and `dark` variant. Setting the `themeVariant` to `'auto'` will switch based on system settings.
- **Custom themes:** Use the [theme builder](https://mobiscroll.com/themebuilder) to customize the colors and make it match your brand.
- **Custom CSS:** If you need further customization, the sky is the limit with CSS overrides.

You can also see how every example looks by changing the theme from the header.

## Implementation instructions

- `theme` selects the base visual theme by name: `'ios'`, `'material'`, or `'windows'`. It can be changed at runtime via `.setOptions({ theme: '<name>' })` on the select instance.
- `themeVariant` selects `'light'`, `'dark'`, or `'auto'` (follows system/OS dark-mode setting); combined with `theme`, e.g. `theme: 'ios'` + `themeVariant: 'dark'`. Also settable at runtime through `.setOptions({ themeVariant })`.
- A custom (Theme Builder-generated) theme is applied by passing its generated theme name as the `theme` value instead of a base name, e.g. `'material-indigo'`, `'windows-yellow'`, `'ios-gray'` — in that mode `themeVariant` is not set alongside it, since the custom theme name already encodes light/dark.
- `display: 'inline'` renders the option list directly on the page (no separate trigger input), used here so the theme changes are visible immediately without opening a popup.
- Per framework: JS/jQuery pass `theme`/`themeVariant` inside `.select({ ... })` at init and update them later via `.setOptions({ theme, themeVariant })`; React sets `theme`/`themeVariant` as props on `<Select>`; Angular binds `theme`/`themeVariant` as plain (non-bracketed) string attributes on `<mbsc-select>` since they're static per render; Vue sets `theme`/`themeVariant` as plain string attributes on `<MbscSelect>`.
- Beyond the `theme`/`themeVariant` options, deeper customization (brand colors, spacing) is done outside the component API — through the Theme Builder tool or Sass variable overrides — and isn't controlled through select instance options.

## What this demo shows

- An inline, single-value select is displayed alongside theme controls for previewing different appearances in the same layout.
- **Theme controls:** A segmented control switches between the `iOS`, `Material`, and `Windows` base themes, with `iOS` selected by default.
- **Theme variant:** A dark-theme switch is enabled by default, showing the select with the dark theme variant.
- **Custom theme option:** A separate switch for Theme Builder or Sass-based customization is available and disabled by default.
- **Inline select:** The picker is embedded directly in the page without an input by using inline display mode.
- **Picker content:** The available options are displayed directly on the page.
- **Hover state:** Hovering over an option highlights it in the picker.
- **Selection:** Selecting an option marks it with a checkmark to indicate the current value.

## Best for

- **Theme comparison:** Comparing the same select component across the `iOS`, `Material`, and `Windows` base themes.
- **Light and dark theme previews:** Checking the select's appearance with light and dark theme variants.
- **Branded select experiences:** Exploring how Theme Builder, Sass, or custom CSS can extend a base theme to match a product's visual style.
