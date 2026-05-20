To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/external-drag-drop-schedule-unschedule#).

## Demo description

**Scheduling events (or dragging them onto a calendar)**

Events can be created and scheduled by dragging and dropping an external resource (event) onto the scheduler.
In order for that to work you will need to have two things set up:

- Enable the scheduler to receive external events by setting `externalDrop` to `true`.
- Initialize the external events (containers) as `draggable` components.

Use the `Draggable` component to specify a skeleton event through its `dragData` option and reference the draggable container in the `element` option. The `dragData` accepts a full event definition that will be added to the event calendar on drop. If omitted, a default event will be created.

Use the

`onEventCreate`

 and

`onEventCreateFailed`

 for triggering a custom logic on drop like showing a toast.
The appropriate lifecycle event will be triggered if the drop is successful or fails.

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

Looking for external drag into a calendar?&nbsp;
[Check out this example &#8594;](https://demo.mobiscroll.com/react/eventcalendar/external-drag-drop-sortable-dragula#)
