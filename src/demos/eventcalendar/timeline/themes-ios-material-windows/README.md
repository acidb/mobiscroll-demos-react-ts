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

## What this demo shows

- A desktop daily timeline where hours are arranged horizontally and resources arranged vertically on the left.
- **Theme controls** A segmented picker lets you switch between the `iOS`, `Material`, and `Windows` base themes, with `iOS` selected by default.
- **Theme variant** A dark-theme switch is enabled by default, showing how the same timeline can be previewed in a dark variant.
- **Custom theme option** A separate switch for theme builder or Sass-based customization is present but turned off by default.
- **Header navigation** The month and year label opens date navigation, while the previous and next arrows move between days and the Today button returns to the current date.
- **Day view** The strip below the header shows the selected days, with the current date highlighted. The timeline displays hourly columns from 12 AM to 12 PM.
- **Resources** Multiple resources are shown as separate timeline rows.
- **Current time** A vertical blue line with a time label marks the current time.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event cards** Events are shown as colored cards with a left color stripe, a bold title, a description, and a bold time range.
- **Date positioning** Events are positioned by their assigned resource and exact date range.
- **Event interaction** Events highlight on hover and show drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging across a time range.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through time and resources.

## Best for

- **Theme comparison** Evaluating how the timeline looks with the `iOS`, `Material`, and `Windows` base themes.
- **Light and dark mode previewing** Checking how a timeline setup behaves across light and dark theme variants.
- **Branded calendar experiences** Exploring how a base theme can be extended with theme builder, Sass, or custom CSS to match a product's visual style.
