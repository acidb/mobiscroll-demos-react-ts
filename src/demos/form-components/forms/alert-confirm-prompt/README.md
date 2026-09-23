To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/forms/alert-confirm-prompt#).

## Demo description

Use the alert, confirm and prompt messages to pop a message box in the middle of the screen. Alert the user or collect feedback at the same time. These controls cannot be dismissed by pressing the overlay, which avoids closing it by mistake.

## Implementation instructions

- `title` and `message` are the common options shared by `Alert`, `Confirm`, and `Prompt`.
- `Confirm` adds `okText` and `cancelText` to relabel its two action buttons (defaults are generic Ok/Cancel text).
- `Prompt` adds `placeholder` (helper text shown in the empty input) and `inputType` (e.g. `'password'` to mask the entered value).
- Overlay-click dismissal is disabled by default on all three dialog types, so the required action stays in focus until an explicit button is pressed.
- Invocation differs by framework: JS/jQuery call the imperative functions `mobiscroll.alert({...})`, `mobiscroll.confirm({...})`, `mobiscroll.prompt({...})` directly from a click handler, and the dialog opens immediately; Angular injects the `Notifications` service (`constructor(public notify: Notifications) {}`) and calls `this.notify.alert({...})`, `this.notify.confirm({...})`, `this.notify.prompt({...})` the same way.
- React and Vue render the dialogs as declarative components instead — `<Alert>`, `<Confirm>`, `<Prompt>` in React and `<MbscAlert>`, `<MbscConfirm>`, `<MbscPrompt>` in Vue — each controlled by an `isOpen` boolean prop; a button's `onClick`/`@click` sets `isOpen` to `true`, and the dialog's `onClose`/`@close` callback sets it back to `false`.
- `Prompt`'s close callback receives the entered value as its argument (`null` if the dialog was cancelled), e.g. `closePrompt = (value: string | null) => {...}` in React.

## What this demo shows

- This demo shows three common dialog types: Alert, Confirm, and Prompt.
- **Alert** Displays a title, message, and confirmation button.
- **Confirm** Presents separate actions with customizable button text.
- **Prompt** Collects user input directly within the dialog.
- **Input types** Configures the Prompt with different input types, including a password field.
- **Modal behavior** Opens each dialog as a modal overlay and prevents dismissal by clicking the overlay, keeping the required action in focus.

## Best for

- **Alerts and notifications** Presenting important information that users must acknowledge before continuing.
- **Action confirmation** Asking users to confirm or cancel a consequential action, such as deleting an item or submitting a change.
- **Short text input** Collecting a name, note, reference, or other brief value without navigating to a separate form.
- **Sensitive input** Requesting a password or similar concealed value within a focused dialog.
- **Required decisions** Keeping users focused when they must choose an action or provide input before returning to the underlying interface.
