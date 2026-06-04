To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/cut-copy-paste-events-between-calendars#).

## Demo description

While copy & pasting one or more events is useful, sometimes being able to move events between two separate calendars can improve productivity. How the calendars are laid out depends on the application, but the basic idea is that you will need to be able to tell where the events from the clipboard will be pasted.

In this example this is implemented by tracking the active instance, which is determined by the active tab of the segmented control. With this out of the way, `CTRL`/`CMD`+`C`/`X`/`Z`/`V` handle the copy, cut, undo and paste actions.

- **Looking for multiple event selection & bulk operations?** [Take a look at the previous example &#8594;](https://demo.mobiscroll.com/react/eventcalendar/event-bulk-actions-edit-delete-update#)

## Related demos

- [Take a look at the previous example &#8594;](https://demo.mobiscroll.com/react/eventcalendar/event-bulk-actions-edit-delete-update#)

## Implementation instructions

- Enable multi-event selection with the `selectMultipleEvents` option.
- Support multi-selection through `CTRL`/`SHIFT`/`CMD` + click, and add programmatic selection flows for actions such as `Select all from view`.
- Use `getSelectedEvents` to retrieve the current selection and `setSelectedEvents` to update or clear it.

## What this demo shows

- A desktop month view event calendar with multiple events and the standard calendar header controls.
- **Header controls** Previous and next arrows, month and year navigation, and a Today button are available above the calendar.
- **Event creation** Users can create events by dragging across day cells or by double-clicking a day cell.
- **Calendar switcher** A segmented control above the calendar lets users switch between the First calendar and the Second calendar.
- **Default state** The First calendar is selected when the demo loads.
- **Selection and transfer** One or more events can be selected in the active calendar and then copied or cut for transfer to the other calendar.
- **Keyboard actions** `CTRL`/`CMD` + `C`, `X`, `Z`, and `V` support copy, cut, undo, and paste actions.
- **Context menu** Right-clicking selected events opens a popup with Copy, Cut, Paste, and Delete actions.
- **Cross-calendar workflow** After selecting events in one calendar, users can switch to the other calendar and paste them there.

## Best for

- **Multi-calendar workflows** Applications where users need to move or duplicate events between separate calendars.
- **Planning tools** Scheduling and planning interfaces that need month-based visibility together with fast event transfer actions.
- **Desktop-heavy use cases** Workflows where keyboard shortcuts and right-click actions help users work more efficiently.
- **Bulk event handling** Scenarios where users may need to select and move multiple events instead of updating them one by one.
