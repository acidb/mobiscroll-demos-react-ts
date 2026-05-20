To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/resource-management-with-dynamic-team-creation#).

## Demo description

By combining the `resourceReorder` feature with external resource drag-and-drop, you can easily organize, group, and adjust resources by dragging them into or out of the timeline view.

**Dragging resources onto the timeline**

Resources can be created by dragging and dropping an external element onto the timeline. In order for that to work you will need to have two things set up:

- Enable the timeline to receive external resources by setting `externalResourceDrop` to `true`.
- Initialize the external resources (containers) as `draggable` components.

Use the `Draggable` component to specify a skeleton event through its `dragData` option and reference the draggable container in the `element` option. The `dragData` accepts a full event definition that will be added to the event calendar on drop. If omitted, a default event will be created.

Use the

`onResourceCreate`

for triggering a custom logic on drop like showing a toast.

**Dragging resources off the timeline)**

Additionally resource can be removed by dragging them out from the timeline and dropping them
onto an external drop container. To activate this, you will need to:

- Enable the timeline to allow dragging events out by setting `externalResourceDrag` to `true`.
- Initialize the :::framework{only="vue"} `dropcontainer` ::: :::framework{only="angular"} `dropcontainer`. ::: :::framework{only="react"} `dropcontainer`. ::: :::framework{only="javascript"} `dropcontainer`. ::: :::framework{only="jquery"} `dropcontainer`. :::

Use the `dropcontainer` component and its `onItemDrop` event to handle dropped events.

Resources can also be dropped on another timeline with `externalResourceDrop` enabled.

When a resource is dropped into an external drop container or another timeline, it will be deleted from the original
calendar and the 

`onResourceDelete`

 will be fired.

You can also use the :::framework{only="vue"} `resource-drag-leave` ::: :::framework{only="angular"} `onResourceDragLeave` ::: :::framework{only="react"} `onResourceDragLeave` ::: :::framework{only="javascript"} `onResourceDragLeave` ::: :::framework{only="jquery"} `onResourceDragLeave` ::: and :::framework{only="vue"} `resource-drag-enter` ::: :::framework{only="angular"} `onResourceDragEnter` ::: :::framework{only="react"} `onResourceDragEnter` ::: :::framework{only="javascript"} `onResourceDragEnter` ::: :::framework{only="jquery"} `onResourceDragEnter` :::, and the drop container's `onItemDragEnter` and `onItemDragLeave` events to provide visual feedback or running custom logic during drag.

Looking for external event drag & drop?&nbsp;
[Check out this example &#8594;](https://demo.mobiscroll.com/react/timeline/external-drag-drop-sortable-dragula#)
