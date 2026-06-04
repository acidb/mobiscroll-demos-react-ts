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

- Use the event calendar create, click, update, and delete lifecycle hooks to open the add or edit dialog at the right point in the user flow.
- For new events, create a temporary event first, then remove it if the dialog is dismissed or canceled before confirmation.
- Implement deletion either with a confirmation step or with an undoable delete flow using a toast message and restore action.
- Use the `responsive` option to switch the dialog layout and behavior between desktop and smaller screens.
- Use `touchUi` either inside the `responsive` configuration or directly on initialization to control whether touch-optimized UI is used.
- The start and end fields can open a date picker configured for range selection.
- The event color selector can be implemented as a lightweight custom color picker rendered inside a buttonless popup.

## What this demo shows

- A full month event calendar with multiple events and the standard header controls for month and year navigation, previous and next arrows, and a Today button.
- **Event creation** Users can create events by dragging across calendar cells or by double-clicking a day cell.
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

## Best for

- **Monthly event management** Managing create, read, update, and delete workflows in a month-based calendar view.
- **General scheduling** Applications where users need to add, edit, and remove events directly from the calendar.
- **Mixed event types** Calendars that need to handle single-day, multi-day, all-day, and timed events in the same interface.
- **Responsive scheduling UIs** Products that need the same event management flow to work well on desktop and touch devices.
