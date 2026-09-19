To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/datetime/responsive#).

## Demo description

The date & time has a liquid layout, which means it nicely adapts to its surroundings. There are times however when you would like to set up the component responsively.

Use the responsive option to configure the picker and change the options based on the viewport width. There are five predefined breakpoints:

- `xsmall` - min-width: 0px
- `small` - min-width: 576px
- `medium` - min-width: 768px
- `large` - min-width: 992px
- `xlarge` - min-width: 1200px
- use `custom` for setting a custom `breakpoint`

It is a good idea to change the `display` or `controls` option to tailor the UX. This way you can have a **bottom positioned calendar on mobile**, a **popover anchored to the input on tablet** and **desktop display on large screens**.

## Implementation instructions

- Use the `responsive` option to configure per-breakpoint overrides; keys are the predefined breakpoints `xsmall` (min-width 0px), `small` (576px), `medium` (768px), `large` (992px), `xlarge` (1200px), or `custom` with an explicit `breakpoint` number.
- Each breakpoint entry is a partial options object — commonly `display` (e.g. `'bottom'`, `'anchored'`, `'center'`) and `controls` (e.g. `['date']`, `['calendar']`) — plus `touchUi` to force wheel-style touch UI (`true`) or a compact desktop-style UI (`false`) regardless of viewport.
- A typical pattern: `xsmall: { display: 'bottom', touchUi: true }`, `small: { display: 'anchored', touchUi: true }`, `custom: { breakpoint: 800, display: 'anchored', touchUi: false }` — bottom sheet on mobile, anchored popover on tablet, and a desktop-style anchored layout above the custom breakpoint.
- `responsive` is a plain reactive prop/binding in React, Vue, and Angular; in JS/jQuery it's passed in the init config object and can be changed at runtime via `setOptions({ responsive: {...} })`.
- Breakpoints only apply on window resize/reflow — there is no separate live "viewport switcher" API; simulating different widths (as the demo's own preset switcher does) means resizing the container the picker is bound to.

## What this demo shows

- Shows a wheel-style date picker example for selecting a single date across touch and desktop layouts.
- **Viewport switcher** A segmented control above the date picker switches between the demo's viewport presets.
- **Small screen layout** At the `375px` viewport preset, the date picker opens at the bottom of the screen.
- **Medium screen layout** At the `576px` and `768px` viewport presets, the date picker opens in a popover anchored to the input.
- **Large screen layout** At the `992px` and `1200px` viewport presets, the date picker uses a desktop display.
- **Date picker input** Focusing or clicking the input opens the picker.
- **Date selection** Separate scrollable wheels let users select the month, day, and year. The selected values appear in a central selection area, while neighboring values remain visually subdued.
- **Scrolling behavior** Users can scroll vertically through neighboring values to move between dates, including dates in other months or years.
- **Footer actions** In the input-based examples, the gray `Cancel` button discards the change, while the blue `Set` button confirms the selected date.
- **Input value** In the input-based examples, confirming a date with `Set` displays the selected value in the input using a month, day, and year format.

## Best for

- **Appointment booking** Letting users choose an appointment date from phones, tablets, or desktop computers.
- **Travel and accommodation forms** Providing a date picker that adapts to the available screen size when selecting departure, arrival, or check-in dates.
- **Responsive business applications** Using a bottom-positioned date picker on small screens and an input-anchored popover when more space is available.
