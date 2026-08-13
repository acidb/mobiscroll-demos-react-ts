To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/themes-ios-material-windows#).

## Demo description

The look and feel of the agenda can be deeply customized. There are four levels of customization:

- Base themes: Choose between `Mobiscroll`, `iOS`, `Android Material` and `Windows`.
- Light or dark: Every theme has a `light` and `dark` variant. Setting the `themeVariant` to `'auto'` will switch based on system settings.
- Custom themes: Use the [theme builder](https://mobiscroll.com/themebuilder) to customize the colors and make it match your brand.
- Custom CSS: If you need further customization, the sky is the limit with CSS overrides.

You can also see how every example looks by changing the theme from the header.

## Implementation instructions

- Use `view: { agenda: { type: 'month' } }`. Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. Angular: use `HttpClient.jsonp()`. For the imperative API, call `inst.setEvents(events)` in the callback.
- Add two `Dropdown` controls (both with `inputStyle: 'box'`, `labelStyle: 'stacked'`): one for **Theme** (options: `auto`, `ios`, `material`, `windows`) and one for **Theme variant** (options: `auto`, `light`, `dark`). Pass the selected values to the Eventcalendar's `theme` and `themeVariant` options. For the imperative API, call `inst.setOptions({ theme })` and `inst.setOptions({ themeVariant })` on each dropdown change.
- Wrap the layout in a `Page` component as a flex column: a `mbsc-grid` row at the top holds the two dropdowns side by side (each `mbsc-col-sm-6`), and the Eventcalendar fills the remaining height (`mbsc-flex-1-1`).

## What this demo shows

- Shows a monthly agenda view with events listed and grouped by date.
- **Theme controls** A segmented picker lets you switch between the `iOS`, `Material`, and `Windows` base themes, with `iOS` selected by default.
- **Theme variant** A dark-theme switch is enabled by default, showing how the same calendar can be previewed in a dark variant.
- **Custom theme option** A separate switch for theme builder or Sass-based customization is present but turned off by default.
- **Header navigation** The month and year label in the top left opens date navigation. The previous and next arrows and the Today button on the right move between months and jump back to the current date.
- **Agenda list** The area below the header lists events for the selected month. Events in the agenda are grouped by date.
- **Sticky day headers** As the agenda scrolls vertically, each day stays visible with a sticky date header while its events appear underneath.
- **Events** Events appear as agenda cards with a colored strip on the left and the event title next to it. Start and end times are stacked on the right side of timed events. All-day events show the all-day label on the right.
- **Event interaction** Hovering an event highlights it.
- **Event selection** Clicking an event selects and highlights it.

## Best for

- **Theme comparison** Evaluating how the same agenda view looks with the `iOS`, `Material`, and `Windows` base themes.
- **Light and dark mode previewing** Checking how an agenda setup behaves across light and dark theme variants.
- **Branded calendar experiences** Exploring how a base theme can be extended with theme builder, Sass, or custom CSS to match a product's visual style.
