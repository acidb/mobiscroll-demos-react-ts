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

- Enable multi-event selection with the `selectMultipleEvents` option.
- Support multi-selection through `CTRL`/`SHIFT`/`CMD` + click, and add programmatic selection flows for actions such as `Select all from view`.
- Use `getSelectedEvents` to retrieve the current selection and `setSelectedEvents` to update or clear it.

## What this demo shows

- A desktop month view event calendar that supports selecting and managing multiple events from the current view.
- **Calendar** A full month calendar displays multiple events, with all events visible and row height expanding to fit the content.
- **Header controls** The built-in month header includes month and year navigation, previous and next arrows, and a Today button.
- **Bulk action panel** A side panel next to the calendar contains `Select all from view`, `Reset selection`, and `Update selected` actions.
- **Select all from view** Clicking this action selects all events currently visible in the month view and shows a bottom-centered toast message: `All events selected from the view`.
- **Reset selection** Clicking this action clears the current selection and shows a bottom-centered toast message: `Selection cleared`.
- **Update selected** Clicking this action changes the color of all selected events to orange and shows a bottom-centered toast message: `All selected event's color changed to orange`.
- **Currently selected** The side panel includes a `Currently selected` section that is empty by default and lists the titles of all selected events when one or more events are selected.
- **Multi-selection** Users can select multiple events with `CTRL`/`SHIFT`/`CMD` + click.
- **Context menu** Right-clicking an event opens a small popup with `Update` and `Delete` actions for that event.

## Best for

- **Scheduling tools** Calendar-based scheduling interfaces where users need to review and manage many visible events in a month view.
- **Resource management** Resource planning workflows that require selecting and adjusting multiple bookings, assignments, or availability blocks together.
- **Operations teams** Internal tools for managing appointments, team shifts, project deadlines, or other time-based records in batches.
- **Mixed individual and batch actions** Use cases that need both multi-event actions and single-event actions from a contextual right-click menu.
