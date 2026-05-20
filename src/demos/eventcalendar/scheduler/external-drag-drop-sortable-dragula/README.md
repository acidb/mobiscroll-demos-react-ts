To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/external-drag-drop-sortable-dragula#).

## Demo description

**Dragging events on the Mobiscroll event calendar**

Events can be scheduled by dragging and dropping an external item onto the scheduler with Mobiscroll `draggable`.
In order for that to work you will need to have two things set up:

- Enable the scheduler to receive external events by setting `externalDrop`

to `true`.

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

if (pagemode != PageMode.Vue)
{
    Learn more from the external drag & drop documentation.
}

**Unscheduling events to SortableJS and Dragula lists**
Dropping events from the Eventcalendar to [SortableJS](https://sortablejs.github.io/Sortable/) and
[Dragula](https://bevacqua.github.io/dragula/) lists is also possible with the `sortableJsDraggable`
and `dragulaDraggable` plugins. To enable this behavior you will need to set the following under the `options` configuration:

- Allow the list to receive external drops by setting `exteralDrop` to `true`
- Use the `onExternalDrop` callback to update the content of the third-party list. The function arguments return the `afterElement` - the list element before which the clone is dropped,

`container` - the list container, `dragData` - the dragged event data, `position` - the index where the clone is dropped on the list.

For details, and option lists see the `externalDrop` section in the documentation

## Related demos

- **Looking for external drag into a calendar?** [Check out this example &#8594;](https://demo.mobiscroll.com/react/eventcalendar/external-drag-drop-sortable-dragula#)
