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

- **Looking for external event drag & drop?** [Check out this example &#8594;](https://demo.mobiscroll.com/react/timeline/external-drag-drop-sortable-dragula#)

## Implementation instructions

- Use `type: 'day'` with `startTime: '07:00'`/`endTime: '18:00'` and `resourceReorder: true` in the view config to allow drag-reordering of resources within the timeline.
- Set `externalResourceDrop: true` to allow resources dragged from the sidebar to be added to the timeline, and `externalResourceDrag: true` to allow timeline resources to be dragged back out. Set `dragBetweenResources: false` to prevent events from being reassigned across team members.
- Define the timeline resources as a two-level tree of team groups (`eventCreation: false`, `reorder: false`) with installer leaf nodes (custom `name`, `color`, `title`). When a team has no members, give it a single placeholder child (`placeholder: true`, `reorder: false`) with a descriptive name like "Drag Technicians here".
- Build a separate `availableInstallers` state for the sidebar list. Render each available installer as an `Installer` card component that uses a ref callback to obtain its DOM element, then mounts a `Draggable` with `dragData` set to the resource object and `type: 'resource'`.
- Wrap the sidebar list in a `Dropcontainer` (with its DOM element passed via a ref callback to the `element` prop). In `onItemDrop`, check that `args.dataType === 'resource'` and add `args.data` back to `availableInstallers`. After adding, increment a `shouldScroll` counter and use a `useEffect` to call `scrollIntoView` on the last card's ref to bring the returned installer into view.
- In `onResourceCreate`, remove the dropped installer from `availableInstallers` by ID, and show a `Toast` announcing that the person was added to `args.parent.name`.
- In `onResourceDelete`, show a `Toast` announcing the removal from `args.parent.name`.
- In `onResourceOrderUpdate`, show a `Toast` when `args.parent` and `args.oldParent` both exist (indicating a cross-team move). Remove the placeholder child from the destination team and, if the source team is now empty, push a new placeholder child onto its `children` array.
- Use `renderResourceHeader` (Angular: `resourceHeaderTemplate`, Vue: `resourceHeader`) to render a "Set up teams" label alongside an "Add team" `Button`.
- Use `renderResource` (Angular: `resourceTemplate`, Vue: `resource`) to handle three cases: parent/group nodes render just the team name; placeholder nodes render a styled placeholder label; leaf nodes render a colored avatar (first letter of the name), the installer's name, and their job title.
- In the Add team handler, append a new group to the installers array with a placeholder child, then call `navigateToEvent` on the calendar instance ref with the new resource ID to scroll the timeline to the newly added team.
