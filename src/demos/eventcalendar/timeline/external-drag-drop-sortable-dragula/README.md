To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/external-drag-drop-sortable-dragula#).

## Demo description

**Dragging events and resources on the Mobiscroll event calendar**

Events and resources can be scheduled by dragging and dropping an external item onto the timeline with Mobiscroll `draggable`.
In order for that to work you will need to have two things set up:

- Enable the timeline to receive external events and/or resources by setting `externalDrop`  and/or  `externalResourceDrop` to `true`.
- Initialize the external events or/and resources (containers) as `draggable` components.

Use the `Draggable` component to specify a skeleton event through its `dragData` option and reference the draggable container in the `element` option. The `dragData` accepts a full event definition that will be added to the event calendar on drop. If omitted, a default event will be created.

**Working together with SortableJS and Dragula lists**

Mobiscroll provides built-in support for two widely used reorderable drag-and-drop list libraries: [SortableJS](https://sortablejs.github.io/Sortable/) and 
[Dragula](https://bevacqua.github.io/dragula/). If you are already using any of these libraries to reorder list items,
they can be seamlessly integrated with the timeline. This integration enables a smooth workflow where items can be dragged from external lists and scheduled directly onto the calendar.

Events and resources can be created and scheduled by dragging items from third-party lists into the event calendar. To enable this behavior you will need to:

- Allow the timeline to receive external drops by setting `externalDrop` or/and  `externalResourceDrop`to `true`.
- Use the `sortableJsDraggable` or `dragulaDraggable` plugins to connect the third-party list with the scheduler. The event data will be read from the dragged element's `data-drag-data` attribute, or the plugin's options expose an `eventData` function where the event definition (title, start, end, resource, etc.) can be specified.

You can then handle the calendars lifecycle events such as 

`onEventCreate`

,

`onEventCreated`

 or

`onEventCreateFailed`

 to run custom logic (e.g. showing a toast) when
a drop succeeds or fails.

**Unscheduling events and resources (or dragging them off a calendar)**

Additionally events and resources can be unscheduled by dragging them out from the timeline and dropping them
onto an external drop container. To activate this, you will need to:

- Enable the timeline to allow dragging events or resources out by setting `externalDrag`  or `externalResourceDrag` to `true`.
- Initialize the :::framework{only="vue"} `dropcontainer` ::: :::framework{only="angular"} `dropcontainer`. ::: :::framework{only="react"} `dropcontainer`. ::: :::framework{only="javascript"} `dropcontainer`. ::: :::framework{only="jquery"} `dropcontainer`. :::

Use the `dropcontainer` component and its `onItemDrop` event to handle dropped events.

Events can also be dropped on another event calendar with `externalDrop` enabled.

When an event is dropped into an external drop container or another calendar, it will be deleted from the original
calendar and the 

`onEventDelete`

 will be fired.

You can also use the :::framework{only="vue"} `event-drag-leave` ::: :::framework{only="angular"} `onEventDragLeave` ::: :::framework{only="react"} `onEventDragLeave` ::: :::framework{only="javascript"} `onEventDragLeave` ::: :::framework{only="jquery"} `onEventDragLeave` ::: and :::framework{only="vue"} `event-drag-enter` ::: :::framework{only="angular"} `onEventDragEnter` ::: :::framework{only="react"} `onEventDragEnter` ::: :::framework{only="javascript"} `onEventDragEnter` ::: :::framework{only="jquery"} `onEventDragEnter` :::, and the drop container's `onItemDragEnter` and `onItemDragLeave` events to provide visual feedback or running custom logic during drag.

Learn more from the external drag & drop documentation.

**Unscheduling events or resources to SortableJS and Dragula lists**

Dropping events or resources from the Eventcalendar to [SortableJS](https://sortablejs.github.io/Sortable/) and 
[Dragula](https://bevacqua.github.io/dragula/) lists is also possible with the `sortableJsDraggable` and `dragulaDraggable` plugins. 
To enable this behavior you will need to set the following under the `options` configuration:

- Allow the list to receive external drops by setting `exteralDrop` to `true`
- Use the `onExternalDrop` callback to update the content of the third-party list. The function arguments return the `afterElement` - the list element before which the clone is dropped, `container` - the list container, `dragData` - the dragged event data,  `position` - the index where the clone is dropped on the list.

For details, and option lists see the [Third-party dragging support](https://docs.mobiscroll.com/react/eventcalendar/drag-and-drop#third-party-dragging-support) section in the documentation

## Implementation instructions

- Use `timeline: { type: 'day' }` with 5 fixed calendar resources (A–E). Enable `externalDrop: true`, `externalDrag: true`, and `externalResourceDrop: true` on the `Eventcalendar`.
- The page has three side-by-side external panel sections, each with an **Event list** and a **Resource list**. The three sections demonstrate three integration paths: Mobiscroll `Draggable`, SortableJS, and Dragula.
- **Mobiscroll Draggable (native path):**
  - Each task item renders a `Draggable` component (Angular: `mbsc-draggable` directive, Vue: `MbscDraggable`) with `dragData` set to the full event object and `element` pointing to the item's DOM node.
  - Resource items use the same pattern with `type="resource"` on the `Draggable`.
  - Wrap the event list in a `Dropcontainer` (Vue: `MbscDropcontainer`) with `onItemDrop` to handle events dragged back from the calendar — add the returned `args.data` back to the list.
- **SortableJS (plugin path):**
  - Initialize `new Sortable(container, { animation: 150, forceFallback: true })` on the list container.
  - Call `sortableJsDraggable.init(sortableInstance, { cloneSelector: '.sortable-drag' })` from `@mobiscroll/*` to connect the list to the calendar. Pass `type: 'resource'` for resource lists. Pass `externalDrop: true` and `onExternalDrop` for event lists that should also receive events back from the calendar; the callback receives `{ dragData, position }` — splice `dragData` into the list at `position`.
  - Event data is read from each item element's `data-drag-data` attribute (a stringified JSON of the event object).
- **Dragula (plugin path):**
  - Initialize `dragula([container])` on the list container.
  - Call `dragulaDraggable.init(drake, { ... })` with the same option shape as the SortableJS path.
- **Calendar event handling:**
  - `onEventCreated`: if `args.action === 'externalDrop'`, remove the item from whichever source list contains a matching `id`, then show a `Toast` confirming the event was added.
  - `onEventDelete`: fires when an event is dragged out of the calendar to the `Dropcontainer` — show a toast indicating the event was unscheduled.
  - `onResourceCreated`: if `args.type === 'onResourceCreated'`, remove the matching resource from the source list and show a toast.
- Store each panel's items as separate mutable state arrays so items disappear from the list once dropped onto the calendar and re-appear when dragged back.

## What this demo shows

- A desktop daily timeline where hours are arranged horizontally and resources are listed as rows on the left.
- **Header navigation** The month and year label opens date navigation, while the previous and next arrows move between weeks and the Today button returns to the current date.
- **Day view** The strip below the header shows the selected day, with the current date highlighted. The timeline displays hourly columns from 12 AM to 12 PM.
- **Resources** Multiple resources are shown as separate timeline rows.
- **Current time** A vertical blue line with a time label marks the current time.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **External lists** A scrollable panel on the right contains three external event lists: `Mobiscroll draggable` with four red items, `SortableJS list (externally sortable)` with four yellow items, and `Dragula list (externally sortable)` with four green items. Each list contains four grey resources as well.
- **Scheduling from lists** Any item from the external lists can be dragged onto the timeline to create and schedule that event on the target time or drop a resource to the resource column.
- **Unscheduling back to lists** Scheduled events can be dragged out of the timeline and dropped back into an external list, removing them from the day view.
- **List behavior** When an item is scheduled from an external list, it disappears from that list and appears on the timeline.
- **Feedback on drop** After an event is scheduled from an external list, a toast appears near the bottom center of the timeline showing the event title and the `added` meesage.
- **Feedback on externap list drop** After an event is unscheduled from the timeline and dropped on the external list a toast appears near the bottom center of the timeline showing the event title and the `unscheduled` message.
- **Event cards** Events are shown as colored cards with a left color stripe, a bold title, and the start and end time below the title.
- **Date positioning** Events are positioned by their assigned resource and exact date range.
- **Event interaction** Events highlight on hover and show drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging across a time range.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through time and resources.

## Best for

- **Unscheduled work queues** Managing tasks, appointments, or resources that start in an external backlog and need to be placed onto specific times.
- **Desktop planning workflows** Daily timeline experiences where users need a time-grid view together with a side panel of draggable events and resources.
- **Schedule and unschedule flows** Use cases where users assign items to the timeline, then move them back out to return them to an unscheduled state.
- **Third-party drag-and-drop integration** Projects that combine Mobiscroll timeline with existing `SortableJS` or `Dragula` list implementations.
