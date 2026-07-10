To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/event-bulk-actions-edit-delete-update#).

## Demo description

Multiple event selection can be turned on with the `selectMultipleEvents` option. Selecting multiple events can be done through user interaction with `CTRL`/`SHIFT`/`CMD` + click or programmatically eg. click of a button or 'select all' checkbox.

Bulk operations like delete, update can be applied the selected events. Things like deleting with the `backspace` or `delete` buttons work out of the box but custom actions can be also applied. The selection can be easily retrieved and updated with the `getSelectedEvents` and `setSelectedEvents` method.

Custom actions can be performed with external buttons or with context menu activated on right-click.

## Implementation instructions

- Use `timeline: { type: 'week' }` — a weekly view.
- Set `selectMultipleEvents: true` to enable Ctrl/Shift/Cmd+click multi-selection.
- Define 6 named resources (Ryan, Kate, John, Mark, Sharon, Ashley) each with `id`, `name`, and `color`.
- Load events asynchronously from `https://trial.mobiscroll.com/timeline-events/` via JSONP; set them on the calendar after load.
- Use a two-column layout: the calendar occupies 9/12 columns (pushed right), the sidebar 3/12 (pulled left). The sidebar contains three action buttons ("Select all from view", "Reset selection", "Update selected") and a scrollable list of currently selected event titles.
- Track `firstDay` and `lastDay` via `onPageLoading` (`args.firstDay` / `args.lastDay`). These are used by "Select all from view".
- `onSelectedEventsChange` → update the current selection and refresh the displayed titles list.
- **"Select all from view"** → call `calendar.getEvents(firstDay, lastDay)`, pass the result to `calendar.setSelectedEvents()`, and update the titles list. Shows toast "All events selected from view".
- **"Reset selection"** → `calendar.setSelectedEvents([])`, clear the titles list. Shows toast "Selection cleared".
- **"Update selected"** → `updateSelectedEvents()`: get selected events via `calendar.getSelectedEvents()`, iterate and change color to orange. For **recurring occurrences**: detach the occurrence — set `recurring = undefined`, assign a new `id` by appending `_` + `formatDate('YYYY-MM-DD', event.start)`, add the occurrence's start to `origEvent.recurringException`, then call `calendar.updateEvent(origEvent)` and `calendar.addEvent(newEvent)`. For **non-recurring**: set `color = 'orange'` and call `calendar.updateEvent(event)`. After: `calendar.setSelectedEvents([])`, show toast "All selected event's color changed to orange".
- **`deleteSelectedEvents()`** → set `confirmOpen = true`, show a confirm dialog ("Are you sure you want to delete the following events?") with the selected event titles joined as the message and "Delete" as the ok button. On confirm: for **recurring** events, push `event.start` into `origEvent.recurringException` and call `calendar.updateEvent(origEvent)`; for **non-recurring**, collect them and call `calendar.removeEvent(eventsToDelete)`. After: `calendar.setSelectedEvents([])`, show toast "Deleted", set `confirmOpen = false`.
- Three entry points trigger `deleteSelectedEvents()`: (1) **`onEventDelete`** — fired by the Delete/Backspace key; use the `confirmOpen` flag to prevent double-triggering, then `return false`; (2) **`onEventUpdate` with `args.isDelete === true`** — fired when Mobiscroll attempts a keyboard delete on a multi-selection; same guard and `return false`; (3) **context menu "Delete" option**.
- **Right-click context menu**: `onEventRightClick` → store `selectedEvent = args.event` as a fallback (used if no events are selected), `args.domEvent.preventDefault()`, set the menu anchor to `args.domEvent.target`, open an anchored `Select` popup (`display: 'anchored'`, `touchUi: false`, no buttons) with two options ("Update" / "Delete"). On selection dispatch to `updateSelectedEvents()` or `deleteSelectedEvents()`; `updateSelectedEvents` / `deleteSelectedEvents` fall back to `[selectedEvent]` when `getSelectedEvents()` returns empty. On menu close, clear the selected value.
- **Keyboard delete**: attach a `keydown` listener on the `.md-bulk-operations` container; if Delete or Backspace is pressed and no confirm dialog is open, call `deleteSelectedEvents()`.
