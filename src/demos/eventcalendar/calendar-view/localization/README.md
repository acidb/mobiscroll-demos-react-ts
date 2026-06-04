To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/localization#).

## Demo description

The components are fully localized.
In case of the event calendar this covers date and time format, button copy, rtl and more.
You can see how each example shows up by clicking on the small flag icon or checking the examples below.

- **All settings can be manually overridden** See what options the localization impacts &#8594;

## Related demos

- See what options the localization impacts &#8594;

## Implementation instructions

- Use the `locale` option to switch the language and localization settings of the Eventcalendar.

## What this demo shows

- A desktop month-view event calendar with a locale selector above the calendar for switching between supported localizations.
- **Locale selector** Clicking the `Locale` dropdown opens a list of available locales that updates the calendar localization.
- **Localization behavior** The localized setup affects date and time formatting, button labels, RTL layout support, and other built-in UI text and behaviors.
- **Month grid** The calendar displays events as labels inside day cells across a full monthly grid.
- **Event labels** Events use different label styles and colors to distinguish between all-day events, multi-day all-day events, and timed events.
- **Overflow handling** The number of visible event labels in a day cell depends on the available vertical space.
- **More events popup** When a day has more events than can fit, the cell shows an `X more` label, where `X` is the number of hidden events.
- **Popover details** Clicking the `X more` label opens a popup that shows the additional events for that day.
- **Event selection** Clicking an event label highlights the selected event.
- **Day hover state** Hovering over a day cell highlights the day number in the top-right corner with a gray background.
- **Day selection** Clicking the empty area of a day cell selects that day and highlights the day number with a blue background.
- **Month navigation** The month can be changed by dragging the calendar left or right.
- **Header navigation** The header shows the current month and year, previous and next navigation arrows, and a `Today` button for jumping back to the current date.

## Best for

- **Multi-language calendar UIs** Apps that need the same event calendar experience in multiple languages and regional formats.
- **Localization testing** Verifying how month-view calendar layouts, labels, buttons, and popups behave across supported locales.
- **RTL support validation** Checking calendar behavior and layout in right-to-left languages such as Arabic or Hebrew.
- **Region-specific event experiences** Products that need localized date formats, time formats, and translated interface copy without rebuilding the calendar UI.
