To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/cut-copy-paste-events-between-calendars#).

## Demo description

While copy & pasting one or more events is useful, sometimes being able to move events between two separate calendars can improve productivity. How the calendars are laid out depends on the application, but the basic idea is that you will need to be able to tell where the events from the clipboard will be pasted.

In this example this is implemented by tracking the active instance, which is determined by the active tab of the segmented control. With this out of the way, `CTRL`/`CMD`+`C`/`X`/`Z`/`V` handle the copy, cut, undo and paste actions.

- **Looking for multiple event selection & bulk operations?** [Take a look at the previous example &#8594;](https://demo.mobiscroll.com/react/eventcalendar/event-bulk-actions-edit-delete-update#)

## Related demos

- [Take a look at the previous example &#8594;](https://demo.mobiscroll.com/react/eventcalendar/event-bulk-actions-edit-delete-update#)

## Implementation instructions

- Use `view: { calendar: { labels: 'all' } }` (not `true` — `'all'` shows every event label without collapsing). Enable `clickToCreate: true`, `dragToCreate: true`, `dragToMove: true`, `dragToResize: true`, and `selectMultipleEvents: true` on both calendar instances.
- Render two `Eventcalendar` instances in a stacked container. Both are always in the DOM; the inactive one is hidden with a CSS class (`visibility: hidden; position: absolute`). A `SegmentedGroup` above the container switches between "First calendar" and "Second calendar". On switch, toggle visibility, update `activeCalendar`/`activeInst`, restore the inactive calendar's last known `toDate`, and clear the now-inactive calendar's selection.
- Track each calendar's current month separately (`firstToDate`, `secondToDate`) via `onPageLoading` using `args.month`. Also keep a shared `toDate` pointing to the active calendar's current month — this is the paste destination month.
- Maintain clipboard state: `selectedEvents` (events to paste), `action` (`'copy'`, `'cut'`, `'delete'`), `originDate` (the active `toDate` at copy/cut time), `deletedEvents` and `moveEvents`/`pastedEvents` (for undo).
- **Copy** (`Ctrl/Cmd+C`): store the active calendar's selected events in `selectedEvents`, record `originDate = toDate`, set `action = 'copy'`, show toast.
- **Cut** (`Ctrl/Cmd+X`): same as copy but `action = 'cut'`, record `cutCalendar`/`originInst`. Events are not removed until paste.
- **Paste** (`Ctrl/Cmd+V`): for each event in `selectedEvents`, clone it, delete its `id`, then adjust start/end by subtracting `monthDiff(toDate, originDate)` months (preserving duration). Add the cloned event to the active calendar. For **cut**: also remove the originals from the source calendar, show snackbar with "Undo"; for **copy**: show toast. After paste, clear `selectedEvents` only if action was cut.
- **Delete** (`Delete` key or context menu): remove selected events from the active calendar, store them in `deletedEvents`, show snackbar with "Undo" that re-adds them. After triggering, move focus to a hidden dummy element (`tabIndex={-1}`) to prevent the keyboard event from re-firing.
- **Undo** (`Ctrl/Cmd+Z`): if `action === 'delete'`, re-add `deletedEvents` to the source calendar; if `action === 'cut'`, re-add `moveEvents` to the source calendar and remove `pastedEvents` from the destination.
- **Right-click context menu**: a `Select` popup with options `Copy`, `Cut`, `Paste`, `Delete`. On `onEventRightClick`: open with all options enabled; if the event right-clicked is not already among multiple selected events, select just that event. On `onCellRightClick` (empty cell): open with Copy/Cut/Delete disabled, Paste enabled only. Dispatch the chosen action through the same `detectAction(key)` handler as keyboard shortcuts.
- `monthDiff(d1, d2)`: returns `d2.getMonth() - d1.getMonth() + 12 * (d2.getFullYear() - d1.getFullYear())` — used to shift pasted event dates to the destination calendar's current month.

## What this demo shows

- A desktop month view event calendar with multiple events and the standard calendar header controls.
- **Calendar header** The header shows the current month and year on the left, and blue month navigation arrows with a `Today` button (for jumping back to the current date) between them on the right. 
- **Event creation** Users can create events by clicking and dragging across day cells or by double-clicking a day cell.
- **Calendar switcher** A segmented control above the calendar lets users switch between the First calendar and the Second calendar.
- **Default state** The First calendar is selected when the demo loads.
- **Selection and transfer** One or more events can be selected in the active calendar and then copied or cut for transfer to the other calendar.
- **Keyboard actions** `CTRL`/`CMD` + `C`, `X`, `Z`, and `V` support copy, cut, undo, and paste actions.
- **Context menu** Right-clicking selected events opens a popup with Copy, Cut, Paste, and Delete actions.
- **Cross-calendar workflow** After selecting events in one calendar, users can switch to the other calendar and paste them there.
- **Day cell states for future days** Hovering a day cell highlights the day number with a gray background, while clicking the empty part of the cell selects the day and highlights the day number with a blue background.
- **Label interaction** Hovering over or clicking an event label selects it and highlights the selected label.
- **Event interaction** Hovering over or selecting an event label highlights it and shows resize handles on both sides, indicating that the event can be resized by clicking and dragging.

## Best for

- **Multi-calendar workflows** Applications where users need to move or duplicate events between separate calendars.
- **Planning tools** Scheduling and planning interfaces that need month-based visibility together with fast event transfer actions.
- **Desktop-heavy use cases** Workflows where keyboard shortcuts and right-click actions help users work more efficiently.
- **Bulk event handling** Scenarios where users may need to select and move multiple events instead of updating them one by one.
