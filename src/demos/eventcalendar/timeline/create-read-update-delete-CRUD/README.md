To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/create-read-update-delete-CRUD#).

## Demo description

**Create new events**

Drag to create and click to create is enabled. Events can be created by dragging or with double clicks. As soon as the initial position is confirmed, a temporary event is created and a custom edit dialog is shown for refinement. On cancel the temporary event will be removed and on confirmation the event will stay in the calendar.

**Edit existing events**

Drag to resize and drag to move is enabled. Events can be reordered and resized. In addition to that, clicking on the event will open a custom dialog that enables editing the various properties.

**Delete events**

Delete can be implemented inside the edit dialog with a button. It's just a matter of removing it from the data object. If a dialog is not shown on click, focused events can be deleted with the *backspace* and *delete* keys.

- **Interested in adding recurrence configuration?** [Check out this example &#8594;](https://demo.mobiscroll.com/react/eventcalendar/recurring-event-add-edit-dialog#)

## Implementation instructions

- Use `timeline: { type: 'day' }` — a single-day timeline with each resource as a row.
- Enable all four interaction modes: `clickToCreate: true`, `dragToCreate: true`, `dragToMove: true`, `dragToResize: true`.
- Define 5 resources (A–E) with `id`, `name`, and `color`.
- Start with 4 sample events using `dyndatetime` offsets for today. Each event carries: `id`, `title`, `description`, `allDay`, `start`, `end`, `bufferBefore`, `free`, and `resource`.
- Handle three calendar events: `onEventClick` → opens the edit popup (passes `args.event`, `args.domEvent.currentTarget` as anchor, `args.resourceObj.color` as fallback color); `onEventCreated` → opens the add popup (passes `args.event`, `args.target`, `args.resourceObj.color`; the event is already temporarily placed on the calendar by Mobiscroll); `onEventDeleted` → shows a snackbar ("Event deleted") with an "Undo" button that adds the event back.
- Maintain an `isEdit` flag and an `editedEvent` reference. A `fillPopup(event, resourceColor)` helper populates all form fields from the event object, falling back to `resourceColor` for color when the event has none.
- **Edit mode** (`createEditPopup`): set `isEdit = true`, store `editedEvent`, set popup anchor to the clicked element, call `fillPopup`, open with "Edit event" header and a "Save" button.
- **Add mode** (`createAddPopup`): set `isEdit = false`, set `isSuccess = false`, set popup anchor to `args.target`, call `fillPopup`, open with "New Event" header and an "Add" button.
- **On popup close (add mode, not confirmed):** when `isEdit` is false and `isSuccess` is false, refresh the events array — this strips the temporary event Mobiscroll placed on the calendar.
- **"Add" button:** build the event from form state (`getEventData()`), append to the events array, set `isSuccess = true`, call `calendar.navigateToEvent(newEvent)`, close popup.
- **"Save" button:** build updated event from form state, find by `id` and splice in place, call `calendar.navigateToEvent(updatedEvent)`, close popup.
- The popup form contains: **Title** (`Input`), **Description** (`Textarea`), **All-day** (`Switch` — when on, switches the date picker to date-only controls and removes the Travel time dropdown from the DOM; when off, restores both), **Start/End** (a `Datepicker` in range mode with `startInput`/`endInput` pointing to two separate `Input` fields; controls are `['datetime']` normally, `['date']` when all-day; on medium+ screens uses anchored calendar+time picker with `touchUi: false`), **Travel time** (`Dropdown` bound to `bufferBefore` in minutes: None/5/15/30 min/1 h/1.5 h/2 h — hidden when all-day is on), **Color** (a clickable row with a filled circle showing the current event color; clicking opens the color picker popup anchored to that element), **Show as busy / Show as free** (`SegmentedGroup` with `value="busy"`/`value="free"`, maps to the `free` boolean via `free: statusValue === 'free'`), and a **Delete event** button (danger/outline, visible in edit mode only).
- The color picker is a separate `Popup` with 10 color swatches in 2 rows of 5: `#ffeb3c`, `#ff9900`, `#f44437`, `#ea1e63`, `#9c26b0` / `#3f51b5`, empty string (no color), `#009788`, `#4baf4f`, `#7e5d4e`. Each swatch is a `div` with `data-value`. On desktop (`display: 'anchored'`, no buttons): clicking applies and closes immediately. On mobile: bottom-sheet with "Set"/"Cancel" — "Set" applies `selectedColor`. The active swatch is highlighted with the `mds-crud-color-value-selected` CSS class.
- **Delete from popup:** filter the event from the array by `id`, close the popup, show a snackbar ("Event deleted") with "Undo" that re-adds the event.
