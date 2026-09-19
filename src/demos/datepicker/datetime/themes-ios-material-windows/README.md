To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/datetime/themes-ios-material-windows#).

## Demo description

The look and feel of the date picker can be deeply customized. There are four levels of customization:

- **Base themes:** Choose between **iOS**, **Material** and **Windows**.
- **Light or dark:** Every theme has a `light` and `dark` variant. Setting the `themeVariant` to `'auto'` will switch based on system settings.
- **Custom themes:** Use the [theme builder](https://mobiscroll.com/themebuilder) to customize the colors and make it match your brand.
- **Custom CSS:** If you need further customization, the sky is the limit with CSS overrides.

You can also see how every example looks by changing the theme from the header.

## Implementation instructions

- Use `controls: ['date']` and `display: 'inline'` — despite living under the `datetime` view, this demo's live instance is a date-only wheel picker (no time or datetime controls are used).
- Set `theme` to `'ios'`, `'material'`, or `'windows'` to pick the base theme.
- Set `themeVariant` to `'light'` or `'dark'` to switch the variant within the chosen base theme.
- Update either at runtime via `setOptions({ theme })` / `setOptions({ themeVariant })` on the instance — the theme segmented control and the dark-mode switch both drive the same live picker instance through these calls rather than re-initializing it.
- Toggling the "custom theme" switch swaps in a custom-named theme (e.g. `'material-indigo'`, `'windows-yellow'`, `'ios-gray'`) built on top of the base theme via `setOptions({ theme: customName })`, and hides the theme-variant switch while active, since a custom theme name already encodes its own variant.

## What this demo shows

- An inline wheel-style date picker is shown alongside theme controls so you can preview different date picker looks in the same layout.
- **Theme controls** A segmented picker lets you switch between the `iOS`, `Material`, and `Windows` base themes, with `iOS` selected by default.
- **Theme variant** A dark-theme switch is enabled by default, showing how the same date picker can be previewed in a dark variant.
- **Custom theme option** A separate switch for theme builder or Sass-based customization is present but turned off by default.
- **Inline date picker** The example embeds the picker directly in the page without an input by using inline display mode.
- **Date selection** Separate scrollable wheels let users select the month, day, and year. The selected values appear in a central selection area, while neighboring values remain visually subdued.
- **Scrolling behavior** Users can scroll vertically through neighboring values to move between dates, including dates in other months or years.

## Best for

- **Theme comparison** Evaluating how the same date picker looks with the `iOS`, `Material`, and `Windows` base themes.
- **Light and dark mode previewing** Checking how a date picker setup behaves across light and dark theme variants.
- **Branded calendar experiences** Exploring how a base theme can be extended with theme builder, Sass, or custom CSS to match a product's visual style.
