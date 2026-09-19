To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/datetime/localization#).

## Demo description

All components are fully localized.
In case of the date picker this covers date and time format, button copy, rtl and more.
You can see how each example shows up by clicking on the small flag icon or checking the examples below.

- **All settings can be manually overridden** See what options the localization impacts →

## Related demos

- See what options the localization impacts →

## Implementation instructions

- Use `controls: ['date']` and `display: 'inline'` on a single inline `Datepicker` (wheel-style, not the month-grid `calendar` control), initialized with `locale: 'en'`. A "Set localization to" dropdown lists roughly three dozen languages/locales and, on change, calls `setOptions({ locale: mobiscroll.locale[code] })` to live-switch the picker's localization — this is a dropdown-driven live switcher on one picker, not a static single-locale picker.
- React/Angular/Vue import the desired locale as a named export from `@mobiscroll/react`/`@mobiscroll/angular`/`@mobiscroll/vue` (e.g. `localeEs`) and pass it to the `locale` prop/binding. JS/jQuery reference locales off the `mobiscroll` namespace instead (e.g. `mobiscroll.localeEs`) and set it via the `locale` option.
- `locale` also accepts a plain locale code string (e.g. `'en'`) in place of the imported locale object — used for the picker's initial state before a locale is selected from the dropdown.
- `locale` drives month/day names, first-day-of-week, button copy, and date/time formatting conventions together; pair it with `calendarSystem` only when also switching to a non-Gregorian calendar (see the Gregorian/Jalali/Hijri demo).

## What this demo shows

- Shows a wheel-style inline date picker with different localizations.
- **Locale selector** The left side of the date picker shows a "Set localization to" label with a dropdown. That opens a list of available locales that updates the date picker localization.
- **Localization behavior** The localized setup affects date and time formatting, button labels, RTL layout support, and other built-in UI text and behaviors.
- **Inline date picker** The example embeds the picker directly in the page without an input by using inline display mode.
- **Date selection** Separate scrollable wheels let users select the month, day, and year. The selected values appear in a central selection area, while neighboring values remain visually subdued.
- **Scrolling behavior** Users can scroll vertically through neighboring values to move between dates, including dates in other months or years.

## Best for

- **Multi-language date picker UIs** Apps that need the same date picker experience in multiple languages and regional formats.
- **Region-specific experiences** Products that need localized date formats, time formats, and translated interface copy without rebuilding the date picker UI.
