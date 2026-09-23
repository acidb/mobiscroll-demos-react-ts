To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/popup/event-hooks#).

## Demo description

The popover ships with different hooks for deep customization.
Events are triggered through the lifecycle of the component where you can tie in custom functionality and code.

While users interact with the UI events like `onInit`, `onOpen`, `onPosition` ... will be triggered.

- **For a complete list of events go to the documentation** See available lifecycle events →

## Related demos

- See available lifecycle events →

## Implementation instructions

- The popup exposes five lifecycle events used in this demo: `onInit` (fires once when the popup instance is created), `onOpen` (fires when the popup starts opening), `onPosition` (fires whenever the popup is positioned/repositioned relative to its `anchor`, including during open and on scroll/resize), `onClose` (fires when the popup starts closing), and `onDestroy` (fires when the popup instance is destroyed).
- All five handlers receive `(event, inst)` in JS/jQuery — `event` carries hook-specific data and `inst` is the popup instance.
- `display: 'anchored'` combined with `anchor: <element>` anchors the popup below the triggering button so `onPosition` has something to report; `showOverlay: false` and `focusOnOpen: false` are demo-page display tweaks, not required for the events themselves.
- `buttons: [{ text: 'Ok', handler: 'set' }, 'cancel']` shows a custom-labeled button using the predefined `'set'` action alongside the predefined `'cancel'` button.
- Event wiring differs per framework: JS/jQuery pass `onInit`/`onOpen`/`onPosition`/`onClose`/`onDestroy` as function options inside `.popup({ ... })`; React binds them as `onInit`/`onOpen`/`onPosition`/`onClose`/`onDestroy` props on `<Popup>`, each taking a callback with no required arguments; Vue binds them as `@init`/`@open`/`@position`/`@close`/`@destroy` on `<MbscPopup>`; Angular binds them as `(onInit)`/`(onOpen)`/`(onPosition)`/`(onClose)`/`(onDestroy)` output bindings on `<mbsc-popup>`, each calling a component method.
- In React/Vue, opening is declarative: a boolean state (`isPopupOpen`/`isOpen`) drives the `isOpen`/`:isOpen` prop, and the `onClose`/`@close` handler is responsible for resetting that state to `false` — the popup does not close itself just because the lifecycle event fired.
- In JS/jQuery and Angular, opening/closing is imperative: JS/jQuery call `.mobiscroll('getInst')` once to obtain the popup instance and call `.open()` on it (e.g. from the trigger button's click handler); Angular keeps a `@ViewChild` reference to the `<mbsc-popup>` and calls `popup.open()`/`popup.close()` directly.
- The demo's event log panel appends one line per fired event, naming the event and linking to its API documentation entry — this logging is demo-page instrumentation, not a popup feature.

## What this demo shows

- This demo shows a popup which can be opened and closed with buttons.
- **Opening and closing** Buttons programmatically open and close the popup.
- **Modal layout** The popup appears as a centered modal with a custom layout and content.
- **Custom content** The popup contains a custom image or logo, a heading, and descriptive text.
- **Close action** A `Close` and `oOk` button dismisses the popup.
- **Visual separation** A modal overlay and shadow separate the popup from the underlying content.
- **Event log** An Event log panel is shown on the left and lists the lifecycle events fired during interactions such as event creation, hover, drag, and similar actions.

## Best for

- **Lifecycle event discovery** Understanding which popup lifecycle hooks fire during common user interactions.
