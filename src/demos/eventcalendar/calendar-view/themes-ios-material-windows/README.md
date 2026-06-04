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

- Use Mobiscroll theming options to switch between the `iOS`, `Material`, and `Windows` base themes.
- Set the `themeVariant` to control light and dark appearance. Use `'dark'` for a forced dark variant or `'auto'` to follow system settings.
- Use the theme builder when you need a custom theme derived from a base theme, and extend it further with Sass or CSS overrides when deeper visual changes are required.

## What this demo shows

- A desktop month-view event calendar is shown alongside theme controls so you can preview different calendar looks in the same layout.
- **Theme controls** A segmented picker lets you switch between the `iOS`, `Material`, and `Windows` base themes, with `iOS` selected by default.
- **Theme variant** A dark-theme switch is enabled by default, showing how the same calendar can be previewed in a dark variant.
- **Custom theme option** A separate switch for theme builder or Sass-based customization is present but turned off by default.
- **Month grid** The calendar displays a full desktop month view with event labels rendered directly inside day cells.
- **Event labels** Events use different label styles and colors to distinguish all-day events, multi-day all-day events, and timed events.
- **Overflow handling** The number of visible events in a day cell depends on the available height, and overflowed events are grouped under an `X more` indicator.
- **Event popover** Clicking the `X more` indicator opens a popover with the additional events for that day.
- **Event selection** Clicking an event label highlights the selected event.
- **Day hover state** Hovering over a day cell highlights the day number in the top-right corner with a gray background.
- **Day selection** Clicking the empty area of a day cell selects that day and highlights the day number with a blue background.
- **Header navigation** The header shows the current month and year, plus previous and next navigation arrows and a `Today` button to jump back to the current date.
- **Month navigation gesture** The calendar also supports changing months by dragging the calendar left or right.

## Best for

- **Theme comparison** Evaluating how the same desktop month-view event calendar looks with the `iOS`, `Material`, and `Windows` base themes.
- **Light and dark mode previewing** Checking how a calendar setup behaves across light and dark theme variants.
- **Branded calendar experiences** Exploring how a base theme can be extended with theme builder, Sass, or custom CSS to match a product's visual style.
