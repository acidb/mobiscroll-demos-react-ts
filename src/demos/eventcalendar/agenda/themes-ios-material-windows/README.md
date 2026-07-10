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
