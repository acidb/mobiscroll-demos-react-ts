To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/popup/themes-ios-material-windows#).

## Demo description

The look and feel of the popover can be deeply customized. There are four levels of customization:

- **Base themes:** Choose between **iOS**, **Material** and **Windows**.
- **Light or dark:** Every theme has a `light` and `dark` variant. Setting the `themeVariant` to `'auto'` will switch based on system settings.
- **Custom themes:** Use the [theme builder](https://mobiscroll.com/themebuilder) to customize the colors and make it match your brand.
- **Custom CSS:** If you need further customization, the sky is the limit with CSS overrides.

You can also see how every example looks by changing the theme from the header.

## Implementation instructions

- `theme` accepts `'ios'`, `'material'`, `'windows'`, or `'auto'`; `'auto'` picks the base theme automatically based on the detected platform.
- `themeVariant` accepts `'light'`, `'dark'`, or `'auto'`; `'auto'` follows the active system theme.
- `display: 'anchored'` anchors the popup to a trigger element instead of centering it; `anchor` supplies the DOM element it positions against.
- `buttons: ['ok', 'cancel']` renders Ok/Cancel action buttons in the popup's footer.
- `showOverlay: false` removes the dimmed backdrop behind the popup so surrounding content stays visible while it's open.
- Opening is imperative in JS/jQuery and Angular, declarative in React/Vue: JS/jQuery call `.mobiscroll('getInst')` once to get the popup instance, set `anchor` on the trigger button, then call `.open()` on click; Angular keeps a `@ViewChild` reference (`popup: MbscPopup`) with `[anchor]` bound in the template and calls `popup.open()` from the click handler; React and Vue instead bind the popup's `isOpen`/`:isOpen` prop to state the click handler sets to `true` (together with an `anchor`/`:anchor` state update from the clicked element), and reset that state through an `onClose`/`@close` callback.
- Changing the base theme or variant at runtime is imperative in JS/jQuery — call `.setOptions({ theme })` or `.setOptions({ themeVariant })` on the popup instance (and on any other themed component instances) — since `theme`/`themeVariant` are otherwise fixed props/options set once at initialization in React, Angular, and Vue.
- `theme` and `themeVariant` are top-level options on the `Popup`/`MbscPopup` component (prop in React/Vue, `[options]` field in Angular, `.popup({...})` config in JS/jQuery) — they are not scoped to a single instance and are commonly set once globally via `setOptions()` from the framework package instead.

## What this demo shows

- This demo shows a popup which can be opened and closed with buttons.
- **Theme controls** A segmented picker lets you switch between the `iOS`, `Material`, and `Windows` base themes, with `iOS` selected by default.
- **Theme variant** A dark-theme switch is enabled by default, showing how the same popup can be previewed in a dark variant.
- **Custom theme option** A separate switch for theme builder or Sass-based customization is present but turned off by default.
- **Opening and closing** Buttons programmatically open and close the popup.
- **Modal layout** The popup appears as a centered modal with a custom layout and content.
- **Custom content** The popup contains a custom image or logo, a heading, and descriptive text.
- **Button actions** A `Cancel` and an `Ok` button dismisses the popup.
- **Visual separation** A modal overlay and shadow separate the popup from the underlying content.

## Best for

- **Theme comparison** Evaluating how the popup looks with the `iOS`, `Material`, and `Windows` base themes.
- **Light and dark mode previewing** Checking how a popup setup behaves across light and dark theme variants.
- **Branded calendar experiences** Exploring how a base theme can be extended with theme builder, Sass, or custom CSS to match a product's visual style.
