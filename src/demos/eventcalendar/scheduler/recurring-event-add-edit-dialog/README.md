To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/recurring-event-add-edit-dialog#).

## Demo description

As seen in the [previous example](https://demo.mobiscroll.com/react/scheduler/create-read-update-delete-CRUD#), an add/edit form can be created with custom and base event fields. While the CRUD example features delete with undo, this example shows off how to build a fully customizable recurrence editor right in the add/edit screen.

Above some common presets, like **Daily**, **Weekly on X day**, **Monthly on Xth**, **Annually on the same day**, **Every Weekday** a fully custom recurrence editor is implemented.

Copy & paste or delve into the code and understand how to generate recurrence objects or RRULES as seen in this [live rule builder](https://demo.mobiscroll.com/react/scheduler/recurring-events#).

## Implementation instructions

- Use `view: { scheduler: { type: 'week' } }` with `clickToCreate: 'double'`, `dragToCreate: true`, `dragToMove: true`, `dragToResize: true`. Pre-load 4 default recurring events: "Take vitamins" (daily every day, 10:00–12:00, `#67ab0d`), "Football training" (weekly Monday, 18:00–20:00, `#fd966a`), "Rent payment" (monthly on day 10, 17:00–18:00, `#3ea39e`), "Dexter BD" (yearly June 6, all-day, `#d00f0f`).
- The **add/edit popup** (`Popup`, responsive: anchored 510px on medium, bottom full-screen on mobile) contains: **Title** (`Input`), **Description** (`Textarea`), **All-day** (`Switch`), **Start/End** (`Datepicker` range with `startInput`/`endInput`; controls: `['calendar', 'time']` normally, `['calendar']` all-day; mobile: `['datetime']` / `['date']`), **Repeats** (`Select`), the **custom recurrence editor** section (shown only when repeat is `'custom'` or `'custom-value'`), and a **Delete event** button (edit mode only).
- The **Repeats `Select`** data has these preset values whose display texts update dynamically based on the event's start date: `norepeat` ("Does not repeat"), `daily` ("Daily"), `weekly` ("Weekly on [day name]"), `monthly` ("Monthly on day [N]"), `monthly-pos` ("Monthly on the [ordinal] [day name]"), `yearly` ("Annually on [Month] [day]"), `yearly-pos` ("Annually on the [ordinal] [day name] of [Month]"), `weekday` ("Every weekday (Monday to Friday)"), `custom` ("Custom"). When an existing event has a custom rule with `interval`/`count`/`until`, a `custom-value` entry with generated descriptive text is inserted dynamically.
- **`loadPopupForm(event)`**: populates all popup fields from the event object; sets the default `untilDate` to the day after `event.start`; rebuilds the Repeats data with date-specific labels. For recurring events: if the rule has `interval`/`count`/`until` set `selectedRepeat = 'custom-value'` and add the generated text entry; if `weekDays === 'MO,TU,WE,TH,FR'` → `'weekday'`; if positional (`pos`) → `repeat + '-pos'`; otherwise → `repeat`. Calls `resetCustomValues()` for non-recurring events.
- **Custom recurrence editor**: a `SegmentedGroup` (Daily/Weekly/Monthly/Yearly) picks `repeatType`. Below it: "Repeat every [interval `Input`] [days/weeks/months/years]". For Weekly: a multi-select weekday `SegmentedGroup` (Sun–Sat). For Monthly: day `Select` (1–31). For Yearly: day `Select` + month `Select`. An **Ends** section with a `RadioGroup`: "Never" (repeat indefinitely) / "Until [date `Datepicker`]" / "After [count `Input`] occurrences".
- **`getCustomRule()`**: builds the `recurring` object to save on the event. Presets map directly using the event's start date for weekday/day/month values. `weekday` → `{ repeat: 'weekly', weekDays: 'MO,TU,WE,TH,FR' }`. `custom`/`custom-value` → `{ repeat: repeatType, interval: repeatNr, ...weekDays/day/month as needed, ...until/count from condition }`. Returns `null`/`undefined` for `norepeat`.
- `onEventClick` → open popup in **edit mode**: store `originalRecurringEvent = event.original` if recurring, call `loadPopupForm(event)`, set anchor to clicked element, open with "Edit event" header and "Save" button.
- `onEventCreated` → open popup in **add mode**: call `resetCustomValues()`, `loadPopupForm(event)`, open with "New Event" header and "Add" button. **On popup close without confirming** (add mode): refresh the events array to strip the temporary event; for the imperative API, call `inst.removeEvent(event)` in the popup's `onClose` callback.
- `onEventCreate` → if `args.originEvent` is a recurring event: store `args.event` as `newEvent` and `return false` (prevents duplicate creation; the recurrence mode popup will complete the operation).
- `onEventUpdate` → if the updated event is recurring: store `args.oldEvent` as `originalRecurringEvent` and `args.oldEventOccurrence` as `eventOccurrence`; open the **recurrence mode popup** in "Edit" or "Delete" mode (based on `args.isDelete`); `return false`.
- Handle `onEventDeleted` to delete the event by filtering the events array; for the imperative API, handle deletion in the Delete button's click handler with `inst.removeEvent(editedEvent)`.
- **Recurrence mode popup** (separate `Popup`): header "[Edit/Delete] recurring event"; `RadioGroup`: "This event only" / "This and following events" / "All events" (default: `current`); buttons: Cancel / Ok.
  - **Ok → delete** (`deleteRecurringEvent`): `current` — push `event.start` to `recurringException`, update original; `following` — set `original.recurring.until = event.start`, update original; `all` — remove original. apply changes to the events array; for the imperative API, call `inst.updateEvent(original)` or `inst.removeEvent(original)`.
  - **Ok → edit**: call `updateRecurringEvent(originalRecurringEvent, eventOccurrence, newEvent, updatedEventOrNull, recurringEditMode)`. React imports it from `@mobiscroll/react`, Vue from `@mobiscroll/vue`, Angular from `@mobiscroll/angular`, JS/jQuery use `mobiscroll.updateRecurringEvent`. Returns `{ updatedEvent, newEvent? }` — replace the original in the list and, if `newEvent` exists, append it; for the imperative API, call `inst.updateEvent(result.updatedEvent)` and `inst.addEvent(result.newEvent)`.
  - When triggered from the **popup Save button** (edit path): pass the form-built event as the 4th argument and `null` as the 3rd. When triggered from **drag/drop** (`onEventUpdate` path): pass `null` as 4th and the drag-created `newEvent` as 3rd.
- **Add button**: build event from form state with `getCustomRule()` as `recurring`, append to the events list; JS/jQuery: call `inst.updateEvent(newEvent)` to finalize the temp event. Then call `navigateTo()` and close popup.
- **Save button (non-recurring)**: build updated event from form state, replace in list, call `navigateTo()`, close popup.
- **`navigateTo()`**: for yearly events, compute the correct year and navigate to `recurring.month`/`recurring.day`; for all others, navigate to `event.start`.

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
- **Create dialog** Creating an event opens an event editor with fields for title, description, all-day, start date, end date, and recurrence.
- **Date selection** The start and end fields open a date picker with range selection.
- **Recurring presets** The Repeats field opens a dropdown with preset options including Does not repeat, Daily, Weekly, Monthly, Yearly, and Custom.
- **Custom recurrence** Choosing Custom expands the editor with additional controls for defining a custom recurring rule.
- **Event editing** Clicking an existing event opens the same dialog in edit mode with the current event values prefilled.
- **Save and cancel flow** Clicking outside the dialog or pressing Cancel closes the editor without applying changes, while Save applies the changes to the event.
- **Delete flow** In edit mode, the dialog includes a Delete event action for removing the selected event.
- **Recurring delete options** When deleting a recurring event, a confirmation popup appears with options for This event only, This and following events, and All events, plus Cancel and Ok actions.
- **Responsive editor** The event editor adapts to screen size and device type, using touch-friendly controls such as scrollers on smaller or touch devices.

## Best for

- **Recurring event management** Apps that need users to create, edit, and delete repeating events directly from a scheduler view.
- **Exception handling** Scenarios where users may need to delete a single occurrence, all following occurrences, or the entire recurring series.
- **Business and operational scheduling** Internal tools or customer-facing products for planning appointments, classes, shifts, programs, or other repeating activities.
