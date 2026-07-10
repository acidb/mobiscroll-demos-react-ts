To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/external-drag-drop-sortable-dragula#).

## Demo description

**Dragging events on the Mobiscroll event calendar**

Events can be scheduled by dragging and dropping an external item onto the event calendar with Mobiscroll `draggable`.
In order for that to work you will need to have two things set up:

- Enable the event calendar to receive external events by setting `externalDrop` 
to `true`.
- Initialize the external events (containers) as `draggable` components.

Use the `Draggable` component to specify a skeleton event through its `dragData` option and reference the draggable container in the `element` option. The `dragData` accepts a full event definition that will be added to the event calendar on drop. If omitted, a default event will be created.

**Working together with SortableJS and Dragula lists**

Mobiscroll provides built-in support for two widely used reorderable drag-and-drop list libraries: [SortableJS](https://sortablejs.github.io/Sortable/) and 
[Dragula](https://bevacqua.github.io/dragula/). If you are already using any of these libraries to reorder list items,
they can be seamlessly integrated with the event calendar. This integration enables a smooth workflow where items can be dragged from external lists and scheduled directly onto the calendar.

Events can be created and scheduled by dragging items from third-party lists into the event calendar. To enable this behavior you will need to:

- Allow the event calendar to receive external drops by setting `externalDrop` to `true`.
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

Additionally events can be unscheduled by dragging them out from the calendar and dropping them
onto an external drop container. To activate this, you will need to:

- Enable the calendar to allow dragging events out by setting `externalDrag` to `true`.
- Initialize the

`dropcontainer`.

Use the `dropcontainer` component and its `onItemDrop` event to handle dropped events.

Events can also be dropped on another event calendar with `externalDrop` enabled.

When an event is dropped into an external drop container or another calendar, it will be deleted from the original calendar and the

`onEventDelete`

 will be fired.

You can also use the :::framework{only="vue"} `event-drag-leave` ::: :::framework{only="angular"} `onEventDragLeave` ::: :::framework{only="react"} `onEventDragLeave` ::: :::framework{only="javascript"} `onEventDragLeave` ::: :::framework{only="jquery"} `onEventDragLeave` ::: and :::framework{only="vue"} `event-drag-enter` ::: :::framework{only="angular"} `onEventDragEnter` ::: :::framework{only="react"} `onEventDragEnter` ::: :::framework{only="javascript"} `onEventDragEnter` ::: :::framework{only="jquery"} `onEventDragEnter` :::, and the drop container's `onItemDragEnter` and `onItemDragLeave` events to provide visual feedback or running custom logic during drag.

Learn more from the external drag & drop documentation.

**Unscheduling events to SortableJS and Dragula lists**

Dropping events from the Eventcalendar to [SortableJS](https://sortablejs.github.io/Sortable/) and 
[Dragula](https://bevacqua.github.io/dragula/) lists is also possible with the `sortableJsDraggable` and 
`dragulaDraggable` plugins. To enable this behavior you will need to set the following under the `options` configuration:

- Allow the list to receive external drops by setting `exteralDrop` to `true`
- Use the `onExternalDrop` callback to update the content of the third-party list. The function arguments return the `afterElement` - the list element before which the clone is dropped,
`container` - the list container, `dragData` - the dragged event data,  `position` - the index where the clone is dropped on the list.

For details, and option lists see the [Third-party dragging support](https://docs.mobiscroll.com/react/eventcalendar/drag-and-drop#third-party-dragging-support) section in the documentation

- **Looking for external drag into a scheduler?** [Check out this example &#8594;](https://demo.mobiscroll.com/react/scheduler/external-drag-drop-sortable-dragula#)

## Related demos

- [Check out this example &#8594;](https://demo.mobiscroll.com/react/scheduler/external-drag-drop-sortable-dragula#)

# What this demo shows

- This demo shows a desktop month view event calendar with a separate external event panel for scheduling and unscheduling events by drag and drop.
- **Calendar header** The header shows the current month and year on the left, and blue month navigation arrows with a `Today` button between them on the right.
- **External lists** A scrollable panel on the right contains three external event lists: `Mobiscroll draggable` with four red items, `SortableJS list (externally sortable)` with four yellow items, and `Dragula list (externally sortable)` with four green items.
- **Scheduling from lists** Any item from the external lists can be dragged onto the month view to create and schedule that event on the target day.
- **Unscheduling back to lists** Scheduled events can be dragged out of the calendar and dropped back into an external list, removing them from the month view.
- **List behavior** When an item is scheduled from an external list, it disappears from that list and appears on the calendar.
- **Feedback on drop** After an event is scheduled from an external list, a toast appears near the bottom center of the calendar showing the event title and the `added` meesage.
- **Feedback on externap list drop** After an event is unscheduled from the calendar and dropped on the external list a toast appears near the bottom center of the calendar showing the event title and the `unscheduled` message.
- **Event label rendering** Day cells display event labels with different visual styles for all-day, multi-day, and time-specific events.
- **Overflow handling** The number of visible event labels in a day cell depends on the available vertical space.
- **More events popup** When not all events fit in a day cell, an `X more` label appears; selecting it opens a popup that shows the hidden events for that day.
- **Event interaction** Event labels are highlighted on hover and on selection.
- **Day cell states** Hovering a day cell highlights the day number with a gray background, while clicking the empty part of the cell selects the day and highlights the day number with a blue background.
- **Drag to create** New events can be created directly on the calendar by clicking and dragging across the empty space of the day cells.

## Implementation instructions

- Set `view: { calendar: { labels: true } }`. Enable `externalDrop: true` and `externalDrag: true` to allow events to be dropped in from and dragged out to external lists. Also set `dragToMove: true` and `dragToCreate: true`.
- **Mobiscroll draggable list**: initialize each task item with the `Draggable` component and `dragData` set to the event object (Angular: `mbsc-draggable` directive with `[dragData]`; JS/jQuery: `mobiscroll.draggable(element, { dragData })` or the `mbsc-draggable` attribute with `data-drag-data`). Wrap the list container with a `Dropcontainer` and handle `onItemDrop` (Vue: `@item-drop`) to re-add events that are dragged back from the calendar — `args.data` carries the event object.
- **SortableJS list**: initialize `new Sortable(container, options)`, then call `sortableJsDraggable.init(sortableInstance, { cloneSelector: '.sortable-drag', externalDrop: true, onExternalDrop })`. Supply the event definition via each item's `data-drag-data` attribute. The `onExternalDrop` callback receives `args.dragData`, `args.position`, and `args.container` for re-inserting the item when dropped back from the calendar.
- **Dragula list**: initialize `dragula([container])`, then call `dragulaDraggable.init(drake, { externalDrop: true, onExternalDrop })`. The `onExternalDrop` callback works identically to the SortableJS version.
- Handle `onEventCreated` (Vue: `@event-created`): when `args.action === 'externalDrop'`, remove the item from its source list and show a `Toast` with `args.event.title + ' added'`. Handle `onEventDeleted` (Vue: `@event-deleted`) to show a `Toast` with `args.event.title + ' unscheduled'`.
- Load initial calendar events from a remote endpoint using `getJson` and assign them to `data`; for the imperative API, call `inst.setEvents(events)` in the callback.

## Best for

- **Unscheduled work queues** Managing tasks, appointments, or work items that start in an external backlog and need to be placed onto calendar dates.
- **Desktop planning workflows** Month-based planning experiences where users need a broad date overview together with a side panel of draggable items.
- **Schedule and unschedule flows** Use cases where users need to move items onto the calendar to assign dates and move them back out to return them to an unscheduled state.
- **Third-party drag-and-drop integration** Projects that need to combine Mobiscroll Eventcalendar with existing `SortableJS` or `Dragula` list implementations.
