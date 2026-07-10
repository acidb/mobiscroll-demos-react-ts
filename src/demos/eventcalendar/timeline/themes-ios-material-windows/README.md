To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/themes-ios-material-windows#).

## Demo description

The look and feel of the timeline can be deeply customized. There are four levels of customization:

- **Base themes:** Choose between **iOS**, **Material** and **Windows**.
- **Light or dark:** Every theme has a `light` and `dark` variant. Setting the `themeVariant` to `'auto'` will switch based on system settings.
- **Custom themes:** Use the [theme builder](https://mobiscroll.com/themebuilder) to customize the colors and make it match your brand.
- **Custom CSS:** If you need further customization, the sky is the limit with CSS overrides.

You can also see how every example looks by changing the theme from the header.

## Implementation instructions

- Use `timeline: { type: 'day' }` — a single-day timeline view.
- Define 6 resources, each with `id`, `name`, and `color`.
- Load events from `https://trial.mobiscroll.com/timeline-events/` via JSONP using `getJson(url, callback, 'jsonp')`. In the callback, call `inst.setEvents(events)` for the imperative API.
- Pass `theme` and `themeVariant` as props to the `Eventcalendar`. Both default to `'auto'` — `theme: 'auto'` lets Mobiscroll pick the theme based on the platform, and `themeVariant: 'auto'` follows the OS light/dark preference.
- **Theme switcher UI** — render two `Dropdown` components (Mobiscroll's `Dropdown`) above the calendar, using a Mobiscroll grid layout (`mbsc-grid` / `mbsc-row` / `mbsc-col-sm-6`):
  - "Theme" dropdown with options: `auto`, `ios`, `material`, `windows`
  - "Theme variant" dropdown with options: `auto`, `light`, `dark`
  - For the imperative API, attach `change` listeners to the select elements and call `inst.setOptions({ theme: value })` / `inst.setOptions({ themeVariant: value })` on each change.
- Wrap the whole page in a Mobiscroll `Page` component. Use a flex column layout (`mbsc-flex-col`) so the dropdowns sit above the calendar and the calendar fills the remaining height (`mbsc-flex-1-1`).
- Add a `.mds-full-height { height: 100%; }` CSS rule to make the page and calendar fill the available viewport height.
