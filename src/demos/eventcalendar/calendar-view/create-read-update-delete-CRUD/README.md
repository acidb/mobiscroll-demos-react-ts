To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/create-read-update-delete-CRUD#).

## Demo description

**Create new events**

Drag to create and click to create is enabled. Events can be created by dragging or with double clicks. As soon as the initial position is confirmed, a temporary event is created and a custom edit dialog is shown for refinement. On cancel the temporary event will be removed and on confirmation the event will stay in the calendar.

**Edit existing events**

Drag to resize and drag to move is enabled. Events can be reordered and resized. In addition to that, clicking on the event will open a custom dialog that enables editing the various properties.

**Delete events**

Delete can be implemented inside the edit dialog with a button. It's just a matter of removing it from the data object. If a dialog is not shown on click, focused events can be deleted with the *backspace* and *delete* keys.

- **Interested in adding recurrence configuration?** [Check out the next example &#8594;](https://demo.mobiscroll.com/react/eventcalendar/recurring-event-add-edit-dialog#)

## Implementation instructions

- Use `view: { calendar: { labels: true } }`. Enable all four interaction modes: `clickToCreate` (React/Vue/Angular: `true`; JS/jQuery: `'double'`), `dragToCreate: true`, `dragToMove: true`, `dragToResize: true`.
- Start with 4 sample events using `dyndatetime` offsets. Each event carries: `id`, `title`, `description`, `allDay`, `start`, `end`, `bufferBefore`, `free`, and `color`.
- Handle three calendar events: `onEventClick` → opens the edit popup; `onEventCreated` → opens the add popup (the event is already temporarily placed on the calendar); `onEventDeleted` → shows a snackbar ("Event deleted") with an "Undo" button that adds the event back. Angular: use the `Notifications` service for the snackbar.
- Maintain an `isEdit` flag and an `editedEvent` reference. A `fillPopup(event)` helper populates all form fields from the event object.
- **Edit mode**: set `isEdit = true`, store `editedEvent`, set popup anchor to the clicked element, call `fillPopup`, open with "Edit event" header and a "Save" button.
- **Add mode**: set `isEdit = false`, set `isSuccess = false`, call `fillPopup`, open with "New Event" header and an "Add" button.
- **On popup close (add mode, not confirmed)**: if `isEdit` is false and `isSuccess` is false, refresh the events array (spread trick) to strip the temporary event; for the imperative API, call `calendar.removeEvent(event)` in the popup's `onClose` handler.
- **"Add" button**: build the event from form state, append to the events array, set `isSuccess = true`, call `inst.navigateToEvent(newEvent)`, close popup.
- **"Save" button**: build updated event from form state, find by `id` and splice in place, call `inst.navigateToEvent(updatedEvent)`, close popup.
- **Popup form fields**: **Title** (`Input`), **Description** (`Textarea`), **All-day** (`Switch` — when on, switches the date picker to date-only and removes the Travel time row), **Start/End** (a `Datepicker` in range mode with `startInput`/`endInput`; controls are `['datetime']` normally, `['date']` for all-day), **Travel time** (`Dropdown` with None/5/15/30 min/1 h/1.5 h/2 h options mapped to `bufferBefore` in minutes — hidden when all-day), **Color** (a clickable row opening a color picker popup with 10 swatches), **Show as busy / free** (`SegmentedGroup` mapping to the `free` boolean), and a **Delete event** button (visible in edit mode only).
- The color picker is a separate `Popup` with 10 color swatches in 2 rows of 5: `#ffeb3c`, `#ff9900`, `#f44437`, `#ea1e63`, `#9c26b0` / `#3f51b5`, empty string (no color), `#009788`, `#4baf4f`, `#7e5d4e`. On desktop (`display: 'anchored'`, no buttons): clicking applies and closes immediately. On mobile: bottom-sheet with "Set"/"Cancel". The active swatch is highlighted.
- **Delete from popup**: filter the event from the array by `id`, close the popup, show a snackbar with "Undo".

## What this demo shows

- A full month event calendar with multiple events and the standard header controls for month and year navigation, previous and next arrows, and a Today button.
- **Event creation** Users can create events by clicking and dragging across calendar cells or by double-clicking a day cell.
- **New event dialog** Creating an event opens a dialog with fields for title, description, all-day, start and end date selection, travel time, event color, and busy or free status.
- **Date selection** The start and end inputs open a date picker calendar with range selection.
- **Cancel behavior** Clicking outside the dialog or pressing Cancel closes it and removes the temporary event from the calendar.
- **Event editing** Clicking or tapping an existing event opens the same dialog in edit mode with the current values prefilled.
- **Editable properties** In edit mode, the event details and event color can be changed before saving.
- **Save and close behavior** Clicking outside the dialog or pressing Cancel closes the editor without applying changes, while Save updates the event.
- **Delete flow** The edit dialog includes a Delete event action that removes the event from the calendar.
- **Undo feedback** After deletion, a centered bottom toast appears with an Undo action so the deleted event can be restored.
- **Responsive behavior** The dialog adapts to screen size and device type, using touch-optimized controls such as scrollers on smaller or touch devices.
- **Mobile presentation** On smaller screens, the dialog is shown as a sheet instead of a popover.
- **Day cell states** Hovering a day cell highlights the day number with a gray background, while clicking the empty part of the cell selects the day and highlights the day number with a blue background.

## Best for

- **Monthly event management** Managing create, read, update, and delete workflows in a month-based calendar view.
- **General scheduling** Applications where users need to add, edit, and remove events directly from the calendar.
- **Mixed event types** Calendars that need to handle single-day, multi-day, all-day, and timed events in the same interface.
- **Responsive scheduling UIs** Products that need the same event management flow to work well on desktop and touch devices.
