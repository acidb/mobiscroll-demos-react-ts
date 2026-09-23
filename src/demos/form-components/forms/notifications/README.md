To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/forms/notifications#).

## Demo description

Use toast and snackbars to post updates to the users without interrupting them. These notifications can be top/bottom positioned and come in different colors.

## Implementation instructions

- `message` sets the notification text for both `toast` and `snackbar`.
- `color` sets a preset color for either notification type: `primary`, `secondary`, `success`, `danger`, `warning`, `info`. Omitting it renders the default (neutral) style.
- `display: 'top'` positions the notification at the top of its container; omitting `display` defaults to bottom placement.
- `context` scopes the notification to render inside a given container element/selector instead of the document body — used in the demo to keep each notification confined to the demo panel.
- A snackbar action button is added with `button: { text: string, action: () => void }`; `text` labels the button and `action` runs on click (the demo's action re-triggers a `toast` call to confirm the retry).
- Framework invocation differs by framework: JS/jQuery call the global `mobiscroll.toast({...})` / `mobiscroll.snackbar({...})` functions imperatively from a click handler; Angular injects the `Notifications` service and calls `this.notify.toast({...})` / `this.notify.snackbar({...})`; React and Vue instead render declarative `<Toast>`/`<Snackbar>` components (`MbscToast`/`MbscSnackbar` in Vue) with a boolean `isOpen` prop (`:isOpen` in Vue) held in state and set to `true` to show the notification, and an `onClose`/`@close` callback that resets that state when the notification dismisses itself.

## What this demo shows

- This demo shows Toast and Snackbar notifications for providing feedback and status updates without interrupting the user.
- **Placement** Notifications positioned at the top or bottom of the screen.
- **Preset styles** Primary, secondary, success, danger, warning, and info color options.
- **Toast** Lightweight, temporary messages that confirm an action has been completed.
- **Snackbar** Notifications displayed with or without an action button.
- **Snackbar actions** Custom action labels that execute application logic, such as retrying a failed operation.

## Best for

- **Save confirmations** Letting users know that their data was saved successfully.
- **Event creation feedback** Confirming that an event was created without interrupting the workflow.
- **Status updates** Communicating short, temporary updates while users continue their current task.
- **Recoverable errors** Providing a Snackbar action that lets users retry a failed operation.
- **Non-blocking feedback** Sharing information that does not require a modal dialog or immediate response.
