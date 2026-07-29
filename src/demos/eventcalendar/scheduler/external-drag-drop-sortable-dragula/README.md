To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/external-drag-drop-sortable-dragula#).

## Demo description

**Dragging events on the Mobiscroll event calendar**

Events can be scheduled by dragging and dropping an external item onto the scheduler with Mobiscroll `draggable`.
In order for that to work you will need to have two things set up:

- Enable the scheduler to receive external events by setting `externalDrop` to `true`.

- Initialize the external events (containers) as `draggable` components.

Use the `Draggable` component to specify a skeleton event through its `dragData` option and reference the draggable container in the `element` option. The `dragData` accepts a full event definition that will be added to the event calendar on drop. If omitted, a default event will be created.

**Working together with SortableJS and Dragula lists**

Mobiscroll provides built-in support for two widely used reorderable drag-and-drop list libraries: [SortableJS](https://sortablejs.github.io/Sortable/) and
[Dragula](https://bevacqua.github.io/dragula/). If you are already using any of these libraries to reorder list items,
they can be seamlessly integrated with the scheduler. This integration enables a smooth workflow where items can be dragged from external lists and scheduled directly onto the calendar.

Events can be created and scheduled by dragging items from third-party lists into the event calendar. To enable this behavior you will need to:

- Allow the scheduler to receive external drops by setting `externalDrop`.
- Use the `sortableJsDraggable` or `dragulaDraggable` plugins to connect the third-party list with the scheduler.

The event data will be read from the dragged element's `data-drag-data` attribute, or the plugin's options expose an `eventData` function where the event
definition (title, start, end, resource, etc.) can be specified.

You can then handle the calendars lifecycle events such as 

`onEventCreate`

,

`onEventCreated`

 or

`onEventCreateFailed`

 to run custom logic (e.g. showing a toast) when
a drop succeeds or fails.

**Unscheduling events (or dragging them off a calendar)**

Additionally events can be unscheduled by dragging them out from the scheduler and dropping them
onto an external drop container. To activate this, you will need to:

- Enable the scheduler to allow dragging events out by setting `externalDrag` to `true`.
- Initialize the

`dropcontainer`.

Use the `dropcontainer` component and its `onItemDrop` event to handle dropped events.

Events can also be dropped on another event calendar with `externalDrop` enabled.

When an event is dropped into an external drop container or another calendar, it will be deleted from the original
calendar and the 

`onEventDelete`

 will be fired.

You can also use the :::framework{only="vue"} `event-drag-leave` ::: :::framework{only="angular"} `onEventDragLeave` ::: :::framework{only="react"} `onEventDragLeave` ::: :::framework{only="javascript"} `onEventDragLeave` ::: :::framework{only="jquery"} `onEventDragLeave` ::: and :::framework{only="vue"} `event-drag-enter` ::: :::framework{only="angular"} `onEventDragEnter` ::: :::framework{only="react"} `onEventDragEnter` ::: :::framework{only="javascript"} `onEventDragEnter` ::: :::framework{only="jquery"} `onEventDragEnter` :::, and the drop container's `onItemDragEnter` and `onItemDragLeave` events to provide visual feedback or running custom logic during drag.

Learn more from the external drag & drop documentation.

**Unscheduling events to SortableJS and Dragula lists**
Dropping events from the Eventcalendar to [SortableJS](https://sortablejs.github.io/Sortable/) and
[Dragula](https://bevacqua.github.io/dragula/) lists is also possible with the `sortableJsDraggable`
and `dragulaDraggable` plugins. To enable this behavior you will need to set the following under the `options` configuration:

- Allow the list to receive external drops by setting `exteralDrop` to `true`
- Use the `onExternalDrop` callback to update the content of the third-party list. The function arguments return the `afterElement` - the list element before which the clone is dropped,

`container` - the list container, `dragData` - the dragged event data, `position` - the index where the clone is dropped on the list.

For details, and option lists see the `externalDrop` section in the documentation

- **Looking for external drag into a calendar?** [Check out this example &#8594;](https://demo.mobiscroll.com/react/eventcalendar/external-drag-drop-sortable-dragula#)

## Related demos

- [Check out this example &#8594;](https://demo.mobiscroll.com/react/eventcalendar/external-drag-drop-sortable-dragula#)

## Implementation instructions

- Use `view: { scheduler: { type: 'week' } }`. Enable `externalDrop: true`, `externalDrag: true`, `dragToMove: true`, `dragToCreate: true`. Load events via `getJson` from a JSONP endpoint on mount.
- The sidebar has three separate task lists, each demonstrating a different integration path:
  - **Mobiscroll Draggable** (red, tasks 1–4): wrap each item with `Draggable` (Angular: `mbsc-draggable` directive, Vue: `MbscDraggable`) passing `dragData` set to the event object. Wrap the list in a `Dropcontainer` with `onItemDrop` to re-add events dragged back from the calendar.
  - **SortableJS** (orange, tasks 5–8): `new Sortable(container, { animation: 150, forceFallback: true })`; call `sortableJsDraggable.init(sortableInstance, { externalDrop: true, onExternalDrop })` to connect to the calendar and handle back-drops.
  - **Dragula** (green, tasks 9–12): `dragula([container])`; call `dragulaDraggable.init(drake, { externalDrop: true, onExternalDrop })`.
- On `onEventCreated`, if `args.action === 'externalDrop'`, remove the item by id from all three task arrays and show a toast with the event title + " added".
- On `onEventDeleted`, show a toast with the event title + " unscheduled".
- Each task list is its own state array; items disappear when dropped onto the calendar and reappear when dragged back via `onItemDrop` / `onExternalDrop`.

## What this demo shows

- A desktop weekly scheduler layout with a fixed week strip at the top, a fixed all-day row below it, and a scrollable scheduler time grid for the selected week.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed strip below the header displays the days of the selected week, with the current date highlighted by a blue circle.
- **All-day events** All-day events appear in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected week.
- **External lists** A scrollable panel on the right contains three external event lists: `Mobiscroll draggable` with four red items, `SortableJS list (externally sortable)` with four yellow items, and `Dragula list (externally sortable)` with four green items.
- **Scheduling from lists** Any item from the external lists can be dragged onto the scheduler to create and schedule that event on the target time.
- **Unscheduling back to lists** Scheduled events can be dragged out of the scheduler and dropped back into an external list, removing them from the week view.
- **List behavior** When an item is scheduled from an external list, it disappears from that list and appears on the scheduler.
- **Feedback on drop** After an event is scheduled from an external list, a toast appears near the bottom center of the scheduler showing the event title and the `added` meesage.
- **Feedback on externap list drop** After an event is unscheduled from the scheduler and dropped on the external list a toast appears near the bottom center of the scheduler showing the event title and the `unscheduled` message.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid, with a small blue dot marking the current date.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Unscheduled work queues** Managing tasks, appointments, or work items that start in an external backlog and need to be placed onto specific times.
- **Desktop planning workflows** Weekly scheduler experiences where users need a time-grid view together with a side panel of draggable items.
- **Schedule and unschedule flows** Use cases where users assign items to the scheduler, then move them back out to return them to an unscheduled state.
- **Third-party drag-and-drop integration** Projects that combine Mobiscroll Eventcalendar with existing `SortableJS` or `Dragula` list implementations.
