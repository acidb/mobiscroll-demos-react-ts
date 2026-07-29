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

## What this demo shows

- A desktop weekly timeline where days are arranged horizontally and resources are listed as rows on the left.
- **Header navigation** The month and year label opens date navigation, while the previous and next arrows move between weeks, and the Today button returns to the current date.
- **Week view** The strip below the header shows the selected week from Sunday to Saturday, with the current date highlighted.
- **Time grid** The timeline displays hourly columns from 12 AM to 12 PM.
- **Resources** Multiple resources are shown as separate timeline rows.
- **Current time** A vertical blue line with a time label marks the current time.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Bulk action panel** A side panel next to the timeline contains `Select all from view`, `Reset selection`, and `Update selected` actions.
- **Select all from view** Clicking this action selects all events currently visible, highlights their titles in the week view, and shows a bottom-centered toast message: `All events selected from the view`.
- **Reset selection** Clicking this action clears the current selection and shows a bottom-centered toast message: `Selection cleared`.
- **Update selected** Clicking this action changes the color of all selected events to orange and shows a bottom-centered toast message: `All selected event's color changed to orange`.
- **Currently selected** The side panel includes a `Currently selected` section that is empty by default and lists the titles of all selected events when one or more events are selected.
- **Multi-selection** Users can select multiple events with `CTRL`/`SHIFT`/`CMD` + click.
- **Context menu** Right-clicking an event opens a small popup with `Update` and `Delete` actions for that event.
- **Event cards** Events appear as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed below the title.
- **Variable event height** Timeline events grow to fit their custom event content instead of forcing every event into the same fixed height.
- **Resource row height** Resource rows adjust dynamically based on the height of the events they contain.
- **Date positioning** Events are positioned by their assigned resource and exact date range.
- **Event interaction** Events highlight on hover and show drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging across a time range.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through time and resources.

## Best for

- **Bulk schedule updates** Selecting several events and applying the same change, such as updating the color or status of multiple scheduled items at once.
- **Resource planning workflows** Managing schedules where events are grouped by resource and users need to act on several assignments in the same timeline view.
- **Operational cleanup** Reviewing a week of visible events and clearing, updating, or deleting selected items without editing each event individually.
- **Multi-event review** Tracking the current selection in a side panel so users can confirm which events will be affected before running a bulk action.
- **Context-specific actions** Giving users quick access to update and delete actions from a right-click menu while still supporting toolbar-style bulk actions.
