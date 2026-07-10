To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/themes-ios-material-windows#).

## Demo description

The look and feel of the event calendar can be deeply customized. There are four levels of customization:

- **Base themes:** Choose between **iOS**, **Material** and **Windows**.
- **Light or dark:** Every theme has a `light` and `dark` variant. Setting the `themeVariant` to `'auto'` will switch based on system settings.
- **Custom themes:** Use the [theme builder](https://mobiscroll.com/themebuilder) to customize the colors and make it match your brand.
- **Custom CSS:** If you need further customization, the sky is the limit with CSS overrides.

You can also see how every example looks by changing the theme from the header.

## Implementation instructions

- Use `view: { calendar: { labels: true } }`. Pass `theme` and `themeVariant` as props to the Eventcalendar. Both default to `'auto'` — `theme: 'auto'` lets Mobiscroll pick based on the platform, `themeVariant: 'auto'` follows the OS light/dark preference.
- Render two `Dropdown` components above the calendar in a two-column Mobiscroll grid: a "Theme" dropdown with options `auto`, `ios`, `material`, `windows`; and a "Theme variant" dropdown with options `auto`, `light`, `dark`. For the imperative API, call `inst.setOptions({ theme: value })` / `inst.setOptions({ themeVariant: value })` on each change.
- Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. Angular: use `HttpClient.jsonp()` instead. JS/jQuery: call `inst.setEvents(events)` in the callback.
- Wrap the page in a Mobiscroll `Page` component. Use a `mbsc-flex-col` layout so the dropdowns sit above the calendar and the calendar fills the remaining height.

## What this demo shows

- A desktop month-view event calendar is shown alongside theme controls so you can preview different calendar looks in the same layout.
- **Theme controls** A segmented picker lets you switch between the `iOS`, `Material`, and `Windows` base themes, with `iOS` selected by default.
- **Theme variant** A dark-theme switch is enabled by default, showing how the same calendar can be previewed in a dark variant.
- **Custom theme option** A separate switch for theme builder or Sass-based customization is present but turned off by default.
- **Month grid** The calendar displays a full desktop month view with event labels rendered directly inside day cells.
- **Event labels** Events use different label styles and colors to distinguish all-day events, multi-day events, and timed events.
- **Overflow handling** The number of visible event labels depends on the available height in each day cell. Additional events are collapsed behind an `X more` link.
- **Popover** Clicking the `X more` link opens a popover that shows the hidden events for that day.
- **Label interaction** Hovering over or clicking an event label selects it and highlights the selected label.
- **Day cell states for future days** Hovering a day cell highlights the day number with a gray background, while clicking the empty part of the cell selects the day and highlights the day number with a blue background.
- **Calendar header** The header shows the current month and year on the left, and blue month navigation arrows with a `Today` button (for jumping back to the current date) between them on the right. 
- **Month navigation gesture** The calendar also supports changing months by clicking and dragging the calendar left or right.

## Best for

- **Theme comparison** Evaluating how the same desktop month-view event calendar looks with the `iOS`, `Material`, and `Windows` base themes.
- **Light and dark mode previewing** Checking how a calendar setup behaves across light and dark theme variants.
- **Branded calendar experiences** Exploring how a base theme can be extended with theme builder, Sass, or custom CSS to match a product's visual style.
