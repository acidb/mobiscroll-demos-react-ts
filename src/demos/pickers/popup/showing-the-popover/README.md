To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/popup/showing-the-popover#).

## Demo description

Use the popup to render any content or form in a modal box that can be programmatically shown or hidden.
For that the `open` and `close` methods can be used.

To check whether the popup is opened or not, use the `isVisible` method.

## Implementation instructions

- The popup is opened and closed with the `.open()` and `.close()` instance methods — there is no option that shows the popup on init; visibility is always driven by calling these methods.
- `isVisible` (a method on the popup instance) returns whether the popup is currently open, for cases where code needs to check state rather than react to the `onOpen`/`onClose` events.
- `display: 'center'` renders the popup as a centered modal (used in this demo); `showOverlay: false` removes the dimmed backdrop that normally sits behind the popup; `closeOnOverlayClick: false` prevents clicking outside the popup from dismissing it, so the `Close` button is the only way to dismiss it.
- `focusOnOpen: false` prevents the popup from auto-focusing its first focusable element when it opens.
- Opening/closing is imperative everywhere except React and Vue: JS captures the popup instance directly from the return value of `mobiscroll.popup(...)`; jQuery instead calls `.mobiscroll('getInst')` once to get it; either way, `.open()`/`.close()` is then called on it from the trigger/close buttons' click handlers. Angular keeps a template reference (`#popup`) resolved via `@ViewChild('popup') popup!: MbscPopup`, with component methods calling `this.popup.open()`/`this.popup.close()`.
- React and Vue instead bind the popup's visibility declaratively: a boolean state (`isPopupOpen`) is passed as the `isOpen`/`:isOpen` prop, the trigger button's click handler sets it to `true`, and both the popup's `onClose`/`@close` callback and the in-popup Close button's click handler set it back to `false` — there is no direct `.open()`/`.close()` call in these two frameworks for this pattern.
- Content placed inside the popup (image, heading, paragraph, Close button) is rendered as children of `<Popup>`/`<MbscPopup>`/`<mbsc-popup>` in React/Vue/Angular, or as the markup inside the target container element (`<div id="demo-popup">`) that `.popup()` is initialized on in JS/jQuery.

## What this demo shows

- This demo shows a popup which can be opened and closed with buttons.
- **Opening and closing** Buttons programmatically open and close the popup.
- **Modal layout** The popup appears as a centered modal with a custom layout and content.
- **Custom content** The popup contains a custom image or logo, a heading, and descriptive text.
- **Close action** A Close button dismisses the popup.
- **Visual separation** A modal overlay and shadow separate the popup from the underlying content.

## Best for

- **Welcome messages** Present introductory content when users enter a page or workflow.
- **Announcements** Display important updates or notices in a focused modal.
- **Confirmations** Ask users to acknowledge information or confirm an action.
- **Promotional content** Highlight a promotion with custom imagery and supporting text.
- **Custom modal interactions** Present focused content that users can dismiss before returning to the underlying page.
