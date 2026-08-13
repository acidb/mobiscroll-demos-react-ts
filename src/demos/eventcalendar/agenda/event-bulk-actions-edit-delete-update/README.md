To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/event-bulk-actions-edit-delete-update#).

## Demo description

Multiple event selection can be turned on with the `selectMultipleEvents` option. Selecting multiple events can be done through user interaction with `CTRL`/`SHIFT`/`CMD` + click or programmatically eg. click of a button or 'select all' checkbox.

Bulk operations like delete, update can be applied the selected events. Things like deleting with the `backspace` or `delete` buttons work out of the box but custom actions can be also applied. The selection can be easily retrieved and updated with the `getSelectedEvents` and `setSelectedEvents` method.

Custom actions can be performed with external buttons or with context menu activated on right-click.

## Implementation instructions

- Use `view: { agenda: { type: 'month' } }`. Enable multi-event selection with `selectMultipleEvents: true`. Users can select via `CTRL`/`SHIFT`/`CMD` + click. Track selection with the `selectedEvents` option and `onSelectedEventsChange`.
- Use `inst.getEvents()` (no arguments) to retrieve all visible events in the current view range — use this for "Select all from view". Use `inst.getSelectedEvents()` and `inst.setSelectedEvents()` to programmatically read and update the selection.
- Wire `onEventRightClick` to open a Mobiscroll `Select` component anchored to `args.domEvent.target`, populated with "Update" and "Delete" actions.
- Intercept keyboard Delete/Backspace via `onEventDelete` and `onEventUpdate` (checking `args.isDelete`) to route deletion through a confirm dialog before removing events.
- For recurring event occurrences, handle update and delete by adding the occurrence date to `event.original.recurringException` and, for updates, pushing a new non-recurring event with the modified properties. For the imperative API, call `inst.updateEvent()`, `inst.addEvent()`, and `inst.removeEvent()`.
- Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. Angular: use `HttpClient.jsonp()`. For the imperative API, call `inst.setEvents(events)` in the callback.

## What this demo shows

- Shows a monthly agenda view with events listed and grouped by date.
- **Header navigation** The month and year label in the top left opens date navigation. The previous and next arrows and the Today button on the right move between months and jump back to the current date.
- **Agenda list** The area below the header lists events for the selected month. Events in the agenda are grouped by date.
- **Sticky day headers** As the agenda scrolls vertically, each day stays visible with a sticky date header while its events appear underneath.
- **Bulk action panel** A side panel next to the agenda contains `Select all from view`, `Reset selection`, and `Update selected` actions.
- **Select all from view** Clicking this action selects all events currently visible and highlights thei titles in the week view and shows a bottom-centered toast message: `All events selected from the view`.
- **Reset selection** Clicking this action clears the current selection and shows a bottom-centered toast message: `Selection cleared`.
- **Update selected** Clicking this action changes the color of all selected events to orange and shows a bottom-centered toast message: `All selected event's color changed to orange`.
- **Currently selected** The side panel includes a `Currently selected` section that is empty by default and lists the titles of all selected events when one or more events are selected.
- **Multi-selection** Users can select multiple events with `CTRL`/`SHIFT`/`CMD` + click.
- **Context menu** Right-clicking an event opens a small popup with `Update` and `Delete` actions for that event.
- **Events** Events appear as agenda cards with a colored strip on the left and the event title next to it. Start and end times are stacked on the right side of timed events. All-day events show the all-day label on the right.
- **Event interaction** Hovering an event highlights it.
- **Event selection** Clicking an event selects and highlights it.actions for that event.

## Best for

- **Scheduling tools** Calendar-based scheduling interfaces where users need to review and manage many visible events in a month view.
- **Resource management** Resource planning workflows that require selecting and adjusting multiple bookings, assignments, or availability blocks together.
- **Operations teams** Internal tools for managing appointments, team shifts, project deadlines, or other time-based records in batches.
- **Mixed individual and batch actions** Use cases that need both multi-event actions and single-event actions from a contextual right-click menu.
