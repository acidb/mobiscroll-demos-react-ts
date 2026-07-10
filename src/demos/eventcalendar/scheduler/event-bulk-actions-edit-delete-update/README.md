To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/event-bulk-actions-edit-delete-update#).

## Demo description

Multiple event selection can be turned on with the `selectMultipleEvents` option. Selecting multiple events can be done through user interaction with `CTRL`/`SHIFT`/`CMD` + click or programmatically eg. click of a button or 'select all' checkbox.

Bulk operations like delete, update can be applied the selected events. Things like deleting with the `backspace` or `delete` buttons work out of the box but custom actions can be also applied. The selection can be easily retrieved and updated with the `getSelectedEvents` and `setSelectedEvents` method.

Custom actions can be performed with external buttons or with context menu activated on right-click.

## Implementation instructions

- Use `view: { scheduler: { type: 'week' } }`. Set `selectMultipleEvents: true` to enable Ctrl/Shift/Cmd+click multi-selection. Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP. For the imperative API, call `inst.setEvents(events)` on load.
- Use a two-column layout: the calendar occupies most of the space; the sidebar contains three action buttons and a scrollable list of selected event titles. Button labels: React/Vue use "Select all this month"; Angular/JS/jQuery use "Select all from view"; all frameworks use "Reset selection" and "Update selected".
- Track `firstDay` and `lastDay` via `onPageLoading` (`args.firstDay`, `args.lastDay`). `onSelectedEventsChange` → update the current selection and refresh the displayed titles list.
- **"Select all"**: call `inst.getEvents(firstDay, lastDay)` to retrieve visible events, then set them as selected; for the imperative API, call `inst.setSelectedEvents(events)`. Show toast.
- **"Reset selection"**: clear `selectedEvents`; for the imperative API, call `inst.setSelectedEvents([])`. Show toast.
- **"Update selected"**: iterate the selected events. For **recurring occurrences**: clear `recurring`, set `color = 'orange'`, append `'_' + formatDate('YYYY-MM-DD', event.start)` to the `id`, push `event.start` to `origEvent.recurringException`, then persist the detached event and the updated original. For **non-recurring**: set `color = 'orange'` and update in place. Update the events array in place; for the imperative API, call `inst.updateEvent(eventsToUpdate)` and `inst.addEvent(newEvents)`. Reset selection, show toast.
- **`deleteSelectedEvents()`**: show a confirm dialog ("Are you sure you want to delete the following events?" / okText: "Delete") with selected event titles joined by `', '`. On confirm: for **recurring** events push `event.start` to `origEvent.recurringException` and update the original; for **non-recurring**, remove from the events array; for the imperative API, call `inst.removeEvent(eventsToDelete)` and `inst.setSelectedEvents([])`. Reset selection, show "Deleted" toast.
- **Delete entry points**: (1) **`onEventDelete`** — `return false` (all frameworks); (2) **`onEventUpdate` with `args.isDelete === true`** — `return false` (React/Angular/JS/jQuery; Vue omits `onEventUpdate`); (3) **context menu "Delete"**. Use a `confirmOpen` flag to prevent double-triggering from (1) and (2).
- **Right-click context menu**: `onEventRightClick` → `args.domEvent.preventDefault()`, open an anchored `Select` popup with "Update" / "Delete" options. Imperative API: also store `selectedEvent = args.event` as a fallback — used in `deleteSelectedEvents` and `updateSelectedEvents` when `inst.getSelectedEvents()` returns an empty array.
- **Keyboard delete**: attach a `keydown` listener on the container; if Delete or Backspace is pressed and no confirm dialog is open, call `deleteSelectedEvents()`.

## What this demo shows

- A desktop weekly scheduler layout with a fixed week strip at the top, a fixed all-day row below it, and a scrollable scheduler time grid for the selected week.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed strip below the header displays the days of the selected week, with the current date highlighted by a blue circle.
- **All-day events** All-day events appear in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected week.
- **Bulk action panel** A side panel next to the scheduler contains `Select all from view`, `Reset selection`, and `Update selected` actions.
- **Select all from view** Clicking this action selects all events currently visible and highlights thei titles in the month view and shows a bottom-centered toast message: `All events selected from the view`.
- **Reset selection** Clicking this action clears the current selection and shows a bottom-centered toast message: `Selection cleared`.
- **Update selected** Clicking this action changes the color of all selected events to orange and shows a bottom-centered toast message: `All selected event's color changed to orange`.
- **Currently selected** The side panel includes a `Currently selected` section that is empty by default and lists the titles of all selected events when one or more events are selected.
- **Multi-selection** Users can select multiple events with `CTRL`/`SHIFT`/`CMD` + click.
- **Context menu** Right-clicking an event opens a small popup with `Update` and `Delete` actions for that event.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid, with a small blue dot marking the current date.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Scheduling tools** Scheduling interfaces where users need to review and manage many visible events in a month view.
- **Resource management** Resource planning workflows that require selecting and adjusting multiple bookings, assignments, or availability blocks together.
- **Operations teams** Internal tools for managing appointments, team shifts, project deadlines, or other time-based records in batches.
- **Mixed individual and batch actions** Use cases that need both multi-event actions and single-event actions from a contextual right-click menu.
