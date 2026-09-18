To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/calendar/rtl-right-to-left#).

## Demo description

RTL support is built in and can be explicitly controlled through the `rtl` option. If not set, it is inherited from the `locale` settings.

- **Explore the different locales** [Check out this example →](https://demo.mobiscroll.com/react/calendar/localization#)

## Related demos

- [Check out this example →](https://demo.mobiscroll.com/react/calendar/localization#)

## Implementation instructions

- Use `controls: ['calendar']` and `display: 'inline'`.
- Set `rtl: true` to mirror the entire calendar layout — header, weekday row, day grid, and navigation arrows all flip to right-to-left; `rtl: false` (or omitting it) renders left-to-right.
- Toggle at runtime via `setOptions({ rtl: true | false })` on the instance.
- Pair `rtl` with a matching RTL `locale` (e.g. `mobiscroll.locale.ar`, `mobiscroll.locale.he`) when the language itself is right-to-left, since `rtl` only controls layout direction, not translated day/month names.

## What this demo shows

- Shows date picker examples for selecting a single date.
- **RTL control** A side panel next to the date picker calendar includes an `Enable Right-To-Left rendering` switch, which is enabled by default.
- **Header navigation** The month and year label in the upper-right corner opens the month and year picker. The previous and next arrow buttons on the left navigate between months.
- **Month view** A fixed weekday header displays abbreviated day names from Sunday through Saturday, with the dates arranged in a grid below it.
- **Month navigation** The month can be changed by clicking and dragging the calendar left or right.
- **Day cell states** Hovering a day highlights the day number with a gray background. Selecting a day highlights the day number with a blue background. The current date is highlighted by default and remains blue when the user selects another date.
- **Adjacent months** Dates from the previous and next months appear with a muted style. Selecting one navigates the calendar to the corresponding month.

## Best for

- **RTL interfaces** Building date picker calendars for products used in right-to-left languages such as Arabic, Hebrew, or Farsi.
- **Multilingual applications** Supporting users who need the same date picker workflow in both LTR and RTL rendering modes.
