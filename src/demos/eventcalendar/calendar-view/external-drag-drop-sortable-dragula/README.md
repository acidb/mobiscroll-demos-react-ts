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
- **Calendar layout** The main area shows a full desktop month calendar with event labels rendered inside the day cells.
- **External lists** A scrollable panel on the right contains three external event lists: `Mobiscroll draggable` with four red items, `SortableJS list (externally sortable)` with four yellow items, and `Dragula list (externally sortable)` with four green items.
- **Scheduling from lists** Any item from the external lists can be dragged onto the month view to create and schedule that event on the target day.
- **Unscheduling back to lists** Scheduled events can be dragged out of the calendar and dropped back into an external list, removing them from the month view.
- **List behavior** When an item is scheduled from an external list, it disappears from that list and appears on the calendar.
- **Feedback on drop** After an event is scheduled from an external list, a toast appears near the bottom center of the calendar showing the event title.
- **Event label rendering** Day cells display event labels with different visual styles for all-day, multi-day, and time-specific events.
- **Color coding** Event label colors vary to indicate different event types or sources.
- **Overflow handling** The number of visible event labels in a day cell depends on the available vertical space.
- **More events popup** When not all events fit in a day cell, an `X more` label appears; selecting it opens a popup that shows the hidden events for that day.
- **Event interaction** Event labels are highlighted on hover and on selection.
- **Day hover state** Hovering a day cell highlights the day number in the top-right corner with a gray background.
- **Day selection** Clicking an empty part of a day cell selects that day and highlights the day number with a blue background.
- **Drag to create** New events can also be created directly on the calendar by dragging across day cells.
- **Header navigation** The header shows the current month and year on the left, with previous and next navigation arrows plus a `Today` button on the right.

## Implementation instructions

- Enable external scheduling onto the calendar by setting `externalDrop` to `true`.
- Set up the Mobiscroll external list items as `draggable` components so they can be dropped onto the Eventcalendar.
- When using `SortableJS` or `Dragula`, the dragged element's `data-drag-data` can supply the event definition, or the plugin `eventData` option can return the event object programmatically.
- Use calendar lifecycle events such as `onEventCreate`, `onEventCreated`, and `onEventCreateFailed` to handle success and failure states, such as showing a toast after a successful drop.
- Enable dragging events out of the calendar by setting `externalDrag` to `true`.
- Initialize a `dropcontainer` when you want scheduled events to be unscheduled by dropping them onto an external target. Handle the drop through its `onItemDrop` event.
- When an event is dropped into an external drop container or another calendar with `externalDrop` enabled, it is removed from the original calendar and the delete lifecycle event fires.
- Use `onEventDragEnter`, `onEventDragLeave`, `onItemDragEnter`, and `onItemDragLeave` to provide visual feedback while items are dragged between the calendar and external containers.

## Best for

- **Unscheduled work queues** Managing tasks, appointments, or work items that start in an external backlog and need to be placed onto calendar dates.
- **Desktop planning workflows** Month-based planning experiences where users need a broad date overview together with a side panel of draggable items.
- **Schedule and unschedule flows** Use cases where users need to move items onto the calendar to assign dates and move them back out to return them to an unscheduled state.
- **Third-party drag-and-drop integration** Projects that need to combine Mobiscroll Eventcalendar with existing `SortableJS` or `Dragula` list implementations.
- **Mixed event presentation** Scenarios that need to show all-day, multi-day, and timed events together in a month view with clear label styling and overflow handling.
