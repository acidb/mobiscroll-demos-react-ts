To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/create-read-update-delete-CRUD#).

## Demo description

**Create new events**

Drag to create and click to create is enabled. Events can be created by dragging or with double clicks. As soon as the initial position is confirmed, a temporary event is created and a custom edit dialog is shown for refinement. On cancel the temporary event will be removed and on confirmation the event will stay in the calendar.

**Edit existing events**

Drag to resize and drag to move is enabled. Events can be reordered and resized. In addition to that, clicking on the event will open a custom dialog that enables editing the various properties.

**Delete events**

Delete can be implemented inside the edit dialog with a button. It's just a matter of removing it from the data object. If a dialog is not shown on click, focused events can be deleted with the *backspace* and *delete* keys.

- **Interested in adding recurrence configuration?** [Check out this example &#8594;](https://demo.mobiscroll.com/react/scheduler/recurring-event-add-edit-dialog#)

## Implementation instructions

- Use `view: { scheduler: { type: 'week' } }`. Enable all four interaction modes: `clickToCreate` (React/Vue/Angular: `true`; JS/jQuery: `'double'`), `dragToCreate: true`, `dragToMove: true`, `dragToResize: true`.
- Start with 4 sample events using `dyndatetime` offsets. Each event carries: `id`, `title`, `description`, `allDay`, `start`, `end`, `bufferBefore`, `free`, and `color`.
- Handle three calendar events: `onEventClick` → opens the edit popup; `onEventCreated` → opens the add popup (the event is already temporarily placed on the calendar); `onEventDeleted` → shows a snackbar ("Event deleted") with an "Undo" button that adds the event back.
- Maintain an `isEdit` flag and an `editedEvent` reference. A `fillPopup(event)` helper populates all form fields from the event object.
- **Edit mode**: set `isEdit = true`, store `editedEvent`, set popup anchor to the clicked element, call `fillPopup`, open with "Edit event" header and a "Save" button.
- **Add mode**: set `isEdit = false`, set `isSuccess = false`, call `fillPopup`, open with "New Event" header and an "Add" button.
- **On popup close (add mode, not confirmed)**: if `isEdit` is false and `isSuccess` is false, refresh the events array (spread trick) to strip the temporary event; for the imperative API, call `calendar.removeEvent(event)` in the popup's `onClose` handler.
- **"Add" button**: build the event from form state, append to the events array, set `isSuccess = true`, call `inst.navigateToEvent(newEvent)`, close popup.
- **"Save" button**: build updated event from form state, find by `id` and splice in place, call `inst.navigateToEvent(updatedEvent)`, close popup.
- **Popup form fields**: **Title** (`Input`), **Description** (`Textarea`), **All-day** (`Switch` — when on, switches the date picker to date-only and removes the Travel time row), **Start/End** (a `Datepicker` in range mode with `startInput`/`endInput`; controls are `['datetime']` normally, `['date']` for all-day), **Travel time** (`Dropdown` with None/5/15/30 min/1 h/1.5 h/2 h options mapped to `bufferBefore` in minutes — hidden when all-day), **Color** (a clickable row opening a color picker popup with 10 swatches), **Show as busy / free** (`SegmentedGroup` mapping to the `free` boolean), and a **Delete event** button (visible in edit mode only).
- The color picker is a separate `Popup` with 10 color swatches in 2 rows of 5. On desktop: clicking applies and closes immediately. On mobile: bottom-sheet with "Set"/"Cancel". The active swatch is highlighted.
- **Delete from popup**: filter the event from the array by `id`, close the popup, show a snackbar with "Undo".

## What this demo shows

- A desktop weekly scheduler layout with a fixed week strip at the top, a fixed all-day row below it, and a scrollable scheduler time grid for the selected week.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed strip below the header displays the days of the selected week, with the current date highlighted by a blue circle.
- **All-day events** All-day events appear in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected week.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid, with a small blue dot marking the current date.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.
- **New event dialog** Creating an event opens a dialog with fields for title, description, all-day, start and end date selection, travel time, event color, and busy or free status.
- **Date selection** The start and end inputs open a date picker calendar with range selection.
- **Cancel behavior** Clicking outside the dialog or pressing Cancel closes it and removes the temporary event from the scheduler.
- **Event editing** Clicking or tapping an existing event opens the same dialog in edit mode with the current values prefilled.
- **Editable properties** In edit mode, the event details and event color can be changed before saving.
- **Save and close behavior** Clicking outside the dialog or pressing Cancel closes the editor without applying changes, while Save updates the event.
- **Delete flow** The edit dialog includes a Delete event action that removes the event from the scheduler.
- **Undo feedback** After deletion, a centered bottom toast appears with an Undo action so the deleted event can be restored.
- **Responsive behavior** The dialog adapts to screen size and device type, using touch-optimized controls such as scrollers on smaller or touch devices.
- **Mobile presentation** On smaller screens, the dialog is shown as a sheet instead of a popover.

## Best for

- **Weekly event management** Managing create, read, update, and delete workflows in a week-based scheduler view.
- **General scheduling** Applications where users need to add, edit, and remove events directly from the scheduler.
- **Mixed event types** Schedulers that need to handle single-day, multi-day, all-day, and timed events in the same interface.
- **Responsive scheduling UIs** Products that need the same event management flow to work well on desktop and touch devices.
