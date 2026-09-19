To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/datetime/rtl-right-to-left#).

## Demo description

RTL support is built in and can be explicitly controlled through the `rtl` option. If not set, it is inherited from the `locale` settings.

- **Explore the different locales** [Check out this example →](https://demo.mobiscroll.com/react/datetime/localization#)

## Related demos

- [Check out this example →](https://demo.mobiscroll.com/react/datetime/localization#)

## Implementation instructions

- Use `controls: ['datetime']` and `display: 'inline'`.
- Set `rtl: true` to mirror the entire wheel layout — the AM/PM, minute, hour, and date wheel columns all flip order and direction, and all supporting UI text aligns right-to-left; `rtl: false` (or omitting it) renders left-to-right.
- Toggle at runtime via `setOptions({ rtl: true | false })` on the instance.
- Pair `rtl` with a matching RTL `locale` (e.g. `mobiscroll.locale.ar`, `mobiscroll.locale.he`) when the language itself is right-to-left, since `rtl` only controls layout direction, not translated day/month names.

## What this demo shows

- Shows a wheel-style inline date picker with RTL mode enabled.
- **RTL control** A side panel next to the date picker includes an `Enable Right-To-Left rendering` switch, which is enabled by default.
- **Inline date picker** The example embeds the picker directly in the page without an input by using inline display mode.
- **Date selection** Separate scrollable wheels let users select the AM/PM, minute, hours and the exact date. The selected values appear in a central selection area, while neighboring values remain visually subdued.
- **Scrolling behavior** Users can scroll vertically through neighboring values to move between dates, including dates in other months or years.

## Best for

- **RTL interfaces** Building date picker calendars for products used in right-to-left languages such as Arabic, Hebrew, or Farsi.
- **Multilingual applications** Supporting users who need the same date picker workflow in both LTR and RTL rendering modes.
