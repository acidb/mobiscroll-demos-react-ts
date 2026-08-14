To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/calendar/themes-ios-material-windows#).

## Demo description

The look and feel of the date picker can be deeply customized. There are four levels of customization:

- **Base themes:** Choose between **iOS**, **Material** and **Windows**.
- **Light or dark:** Every theme has a `light` and `dark` variant. Setting the `themeVariant` to `'auto'` will switch based on system settings.
- **Custom themes:** Use the [theme builder](https://mobiscroll.com/themebuilder) to customize the colors and make it match your brand.
- **Custom CSS:** If you need further customization, the sky is the limit with CSS overrides.

You can also see how every example looks by changing the theme from the header.

## What this demo shows

- An inline month-view date picker calendar is shown alongside theme controls so you can preview different calendar looks in the same layout.
- **Theme controls** A segmented picker lets you switch between the `iOS`, `Material`, and `Windows` base themes, with `iOS` selected by default.
- **Theme variant** A dark-theme switch is enabled by default, showing how the same calendar can be previewed in a dark variant.
- **Custom theme option** A separate switch for theme builder or Sass-based customization is present but turned off by default.
- **Header navigation** The month and year label in the upper-left corner opens month and year selection controls. The previous and next arrow buttons on the right move between months.
- **Month view** A fixed weekday header shows abbreviated day names from Sunday through Saturday, with dates arranged in a grid below.
- **Month navigation** Users can also change the displayed month by dragging the calendar left or right.
- **Day cell states** Hovering over a day gives its number a gray background. Selecting a day gives its number a blue background. The current date is highlighted by default and remains blue when another date is selected.
- **Adjacent months** Dates from the previous and next months use a muted style. Selecting one navigates to the corresponding month.

## Best for

- **Theme comparison** Evaluating how the same desktop month-view calendar looks with the `iOS`, `Material`, and `Windows` base themes.
- **Light and dark mode previewing** Checking how a calendar setup behaves across light and dark theme variants.
- **Branded calendar experiences** Exploring how a base theme can be extended with theme builder, Sass, or custom CSS to match a product's visual style.
