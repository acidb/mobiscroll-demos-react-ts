To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/select/responsive#).

## Demo description

The select has a liquid layout, which means it nicely adapts to its surroundings. There are times however when you would like to set up the component responsively.

Use the responsive option to configure the picker and change the options based on the viewport width. There are five predefined breakpoints:

- `xsmall` - min-width: 0px
- `small` - min-width: 576px
- `medium` - min-width: 768px
- `large` - min-width: 992px
- `xlarge` - min-width: 1200px
- use `custom` for setting a custom `breakpoint`

It is a good idea to change the `display` or `controls` option to tailor the UX. This way you can have a **bottom positioned picker on mobile**, a **popover anchored to the input on tablet** and **desktop display on large screens**.

## Implementation instructions

- `responsive` is an object keyed by breakpoint name, where each value is a partial options object applied when the viewport matches that breakpoint; this demo overrides `display` and `touchUi` per breakpoint, but any picker option can be set the same way.
- The five predefined breakpoint keys are `xsmall` (min-width 0px), `small` (min-width 576px), `medium` (min-width 768px), `large` (min-width 992px), and `xlarge` (min-width 1200px); a `custom` key is also supported for an arbitrary threshold.
- The `custom` breakpoint requires its own `breakpoint` field with a pixel value (e.g. `{ custom: { breakpoint: 800, display: 'anchored', touchUi: false } }`) — this is the only breakpoint entry that needs an explicit width, since the five named breakpoints have built-in widths.
- In this demo, `xsmall` sets `{ display: 'bottom', touchUi: true }`, `small` sets `{ display: 'anchored', touchUi: true }`, and the `custom` (800px) breakpoint sets `{ display: 'anchored', touchUi: false }` — so the picker moves from a touch bottom-sheet, to a touch-optimized anchored popover, to a pointer-optimized anchored popover as the viewport widens; `medium`/`large`/`xlarge` are left unset and fall through to the next-smaller matching breakpoint's values.
- `responsive` resolves at runtime as the viewport width crosses a breakpoint — no resize handler or manual `setOptions` call is needed; the component re-evaluates which breakpoint object applies and merges its overrides into the active options.
- The option is passed the same way across frameworks, just as a plain object: React `responsive={{...}}` prop on `<Select>`; Vue `:responsive="myResp"` binding a plain object on `<MbscSelect>`; Angular `[responsive]="myResp"` binding on `<mbsc-select>`; JS/jQuery `responsive: {...}` inside the options object passed to `mobiscroll.select(el, {...})` / `$(el).mobiscroll().select({...})`.
- `responsive` composes with the liquid/fluid layout the Select has by default — it is only needed when the picker's interaction pattern (not just its size) should change across breakpoints, e.g. switching `display` and `touchUi` together rather than relying on the picker's own responsive sizing.

## What this demo shows

- Shows a single-value picker that changes its display mode and interaction pattern across touch and desktop viewport presets.
- **Viewport switcher** A segmented control above the picker switches between the available viewport presets.
- **Small screen layout** At the `375px` preset, the picker opens at the bottom of the screen with a wheel-style scroller. Users can scroll or drag through the options, and the current value appears in a centered gray selection band while the other options use muted text.
- **Small screen actions** The bottom of the picker contains a gray `Cancel` button that discards changes and a blue `Set` button that confirms the selection.
- **Medium screen layout** At the `576px` and `768px` presets, the picker opens in a popover anchored to the input. It uses the same wheel-style scrolling, centered selection band, and `Cancel` and `Set` actions as the small screen layout.
- **Large screen layout** At the `992px` and `1200px` presets, the picker uses a desktop display. Hovering highlights an option, and selecting it adds a checkmark to identify the current value.
- **Opening the picker** Focusing or clicking the input opens the picker.
- **Backdrop and dismissal** The first three viewport presets use a darkened backdrop. The two largest presets do not. Clicking outside the picker closes it.
- **Picker content** The popup displays a predefined list of options.
- **Input value** Selecting an option updates the associated input with that value.

## Best for

- **Cross-device forms** Select controls that need to remain usable across mobile, tablet, and desktop layouts.
- **Mobile data entry** Touch-first forms where a bottom-positioned wheel scroller makes options easier to browse and select on a small screen.
- **Tablet forms** Interfaces where an input-anchored popover keeps the picker close to its field while providing touch-friendly scrolling.
- **Desktop workflows** Larger-screen forms where a compact desktop picker supports mouse-based option highlighting and selection.
- **Responsive product interfaces** Applications that need the same select field to adopt different display modes at predefined or custom breakpoints.
