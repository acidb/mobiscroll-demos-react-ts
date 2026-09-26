To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/popup/mobile-desktop-display#).

## Demo description

The popup has four built-in display modes that can be controlled through the `display` option:

- `top` - popup that slides down from the top
- `bottom` - popup that slides up from the bottom
- `center` - popup that shows up in the middle with a pop animation
- `anchored` - popup that shows up anchored to an input or any dom element

The defaults change on a theme-to-theme basis. it defaults to `bottom` for the iOS theme and to `center` for all other themes.

- **Want to see how to set up responsiveness?** [Check out this example →](https://demo.mobiscroll.com/react/popup/responsive#)

## Related demos

- [Check out this example →](https://demo.mobiscroll.com/react/popup/responsive#)

## Implementation instructions

- `display` accepts four values: `'top'` (slides down from the top edge), `'bottom'` (slides up from the bottom edge), `'center'` (pops up centered with a scale/fade animation), and `'anchored'` (positions relative to a DOM element rather than the viewport).
- Default `display` is theme-dependent: `'bottom'` for the iOS theme, `'center'` for Material/Windows and other themes — set `display` explicitly to override the theme default.
- `display: 'anchored'` requires an `anchor` value (a DOM element) to position against; without a valid `anchor` the popup has nothing to attach to. In JS/jQuery, `anchor` is set as a plain DOM element reference in the options object (JS: `anchor: document.getElementById('trigger-btn')`; jQuery: `anchor: $('#trigger-btn')[0]`); React/Vue instead track the anchor element in state (captured from a `ref`, e.g. via `buttonRef.current.nativeElement`) and bind it as the `anchor`/`:anchor` prop.
- `touchUi` (shown per-mode in this demo) controls whether the popup renders touch-optimized (mobile-style) or desktop-style controls independent of `display`; it can be combined with any of the four `display` modes.
- Framework binding for `display`/`touchUi`: React passes them as `display`/`touchUi` props on `<Popup>`; Vue as `display`/`:touchUi` on `<MbscPopup>`; Angular as a plain `display="..."` attribute plus `[touchUi]="..."` binding on `<mbsc-popup>`; JS/jQuery pass both inside the `.popup({ display: '...', touchUi: ... })` options object.
- Opening each mode is imperative in JS/jQuery: each display mode is a separate popup instance — JS captures it directly from the return value of `mobiscroll.popup('#id', {...})`, jQuery instead calls `$('#id').mobiscroll().popup({...}).mobiscroll('getInst')` — and its trigger button's click handler calls that instance's `.open()`. React binds each mode's visibility to its own boolean state variable through the `isOpen` prop, set to `true` by the corresponding trigger button's `onClick` and reset to `false` in `onClose`.
- `buttons: ['ok', 'cancel']` renders the predefined confirm/dismiss buttons in the popup footer for every display mode in this demo.

## What this demo shows

- Four popup examples demonstrate the supported display modes.
- **Anchored popup** Opens from a button and positions the popup below to that button or another DOM element.
- **Top popup** Opens as a modal that slides down from the top of the viewport.
- **Center popup** Opens in the middle of the viewport with a pop animation.
- **Bottom popup** Opens as a modal that slides up from the bottom of the viewport.
- **Modal layout** Each popup uses a custom layout and content.
- **Custom content** Each popup contains a custom image or logo, a heading, and descriptive text.
- **Button actions** The Cancel button dismisses the popup, while the blue Ok button confirms it.
- **Visual separation** A modal overlay and shadow separate the popup from the underlying content.

## Best for

- **Anchored popups** Contextual information or actions that need to remain visually connected to an input or another page element.
- **Top popups** Messages and prompts that should enter from the top of the viewport.
- **Center popups** Confirmations and focused messages that need a prominent position in the viewport.
- **Bottom popups** Mobile-friendly prompts and actions that should enter from the bottom of the viewport.
