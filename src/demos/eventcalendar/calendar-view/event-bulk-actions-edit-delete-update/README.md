To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/event-bulk-actions-edit-delete-update#).

## Demo description

Multiple event selection can be turned on with the `selectMultipleEvents` option. Selecting multiple events can be done through user interaction with `CTRL`/`SHIFT`/`CMD` + click or programmatically eg. click of a button or 'select all' checkbox.

Bulk operations like delete, update can be applied the selected events. Things like deleting with the `backspace` or `delete` buttons work out of the box but custom actions can be also applied. The selection can be easily retrieved and updated with the `getSelectedEvents` and `setSelectedEvents` method.

Custom actions can be performed with external buttons or with context menu activated on right-click.

- **Interested in moving events between two separate calendars?** [Check out the next example for cut, copy, paste events &#8594;](https://demo.mobiscroll.com/react/eventcalendar/cut-copy-paste-events-between-calendars#)

## Related demos

- [Check out the next example for cut, copy, paste events &#8594;](https://demo.mobiscroll.com/react/eventcalendar/cut-copy-paste-events-between-calendars#)

## Implementation instructions

- Use `view: { calendar: { labels: true } }`. Set `selectMultipleEvents: true` to enable Ctrl/Shift/Cmd+click multi-selection. Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP. JS/jQuery: call `inst.setEvents(events)` on load.
- Use a two-column layout: the calendar occupies most of the space; the sidebar contains three action buttons and a scrollable list of selected event titles. Button labels: React/Vue use "Select all this month"; Angular/JS/jQuery use "Select all from view"; all frameworks use "Reset selection" and "Update selected".
- Track `firstDay` and `lastDay` via `onPageLoading` (`args.firstDay`, `args.lastDay`). `onSelectedEventsChange` → update the current selection and refresh the displayed titles list.
- **"Select all"**: call `inst.getEvents(firstDay, lastDay)` to retrieve visible events, then set them as selected; for the imperative API, call `inst.setSelectedEvents(events)`. Show toast.
- **"Reset selection"**: clear `selectedEvents`; for the imperative API, call `inst.setSelectedEvents([])`. Show toast.
- **"Update selected"**: iterate the selected events. For **recurring occurrences**: clear `recurring`, set `color = 'orange'`, append `'_' + formatDate('YYYY-MM-DD', event.start)` to the `id`, push `event.start` to `origEvent.recurringException`, then persist the detached event and the updated original. For **non-recurring**: set `color = 'orange'` and update in place. Update the events array in place; for the imperative API, call `inst.updateEvent(eventsToUpdate)` and `inst.addEvent(newEvents)`. Reset selection, show toast.
- **`deleteSelectedEvents()`**: show a confirm dialog ("Are you sure you want to delete the following events?" / okText: "Delete") with selected event titles. On confirm: for **recurring** events push `event.start` to `origEvent.recurringException` and update the original; for **non-recurring**, remove from the events array; for the imperative API, call `inst.removeEvent(eventsToDelete)` and `inst.setSelectedEvents([])`. Reset selection, show "Deleted" toast.
- **Delete entry points**: (1) **`onEventDelete`** — `return false` (all frameworks); (2) **`onEventUpdate` with `args.isDelete === true`** — `return false` (React/Angular/JS/jQuery; Vue omits `onEventUpdate`); (3) **context menu "Delete"**. Use a `confirmOpen` flag to prevent double-triggering from (1) and (2).
- **Right-click context menu**: `onEventRightClick` → `args.domEvent.preventDefault()`, open an anchored `Select` popup with "Update" / "Delete" options. Imperative API: also store `selectedEvent = args.event` as a fallback — used in `deleteSelectedEvents` and `updateSelectedEvents` when `inst.getSelectedEvents()` returns an empty array.
- **Keyboard delete**: attach a `keydown` listener on the container; if Delete or Backspace is pressed and no confirm dialog is open, call `deleteSelectedEvents()`.

## What this demo shows

- A desktop month view event calendar that supports selecting and managing multiple events from the current view.
- **Calendar** A full month calendar displays multiple events, with all events visible and row height expanding to fit the content.
- **Calendar header** The header shows the current month and year on the left, and blue month navigation arrows with a `Today` button (for jumping back to the current date) between them on the right. 
- **Bulk action panel** A side panel next to the calendar contains `Select all from view`, `Reset selection`, and `Update selected` actions.
- **Select all from view** Clicking this action selects all events currently visible and highlights thei titles in the month view and shows a bottom-centered toast message: `All events selected from the view`.
- **Reset selection** Clicking this action clears the current selection and shows a bottom-centered toast message: `Selection cleared`.
- **Update selected** Clicking this action changes the color of all selected events to orange and shows a bottom-centered toast message: `All selected event's color changed to orange`.
- **Currently selected** The side panel includes a `Currently selected` section that is empty by default and lists the titles of all selected events when one or more events are selected.
- **Multi-selection** Users can select multiple events with `CTRL`/`SHIFT`/`CMD` + click.
- **Context menu** Right-clicking an event opens a small popup with `Update` and `Delete` actions for that event.
- **Label interaction** Hovering over or clicking an event label selects it and highlights the selected label.
- **Day cell states for future days** Hovering a day cell highlights the day number with a gray background, while clicking the empty part of the cell selects the day and highlights the day number with a blue background.

## Best for

- **Scheduling tools** Calendar-based scheduling interfaces where users need to review and manage many visible events in a month view.
- **Resource management** Resource planning workflows that require selecting and adjusting multiple bookings, assignments, or availability blocks together.
- **Operations teams** Internal tools for managing appointments, team shifts, project deadlines, or other time-based records in batches.
- **Mixed individual and batch actions** Use cases that need both multi-event actions and single-event actions from a contextual right-click menu.
