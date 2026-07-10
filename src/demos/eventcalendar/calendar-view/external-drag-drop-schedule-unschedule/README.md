To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/external-drag-drop-schedule-unschedule#).

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

- **Looking for external drag into a scheduler?** [Check out this example &#8594;](https://demo.mobiscroll.com/react/scheduler/external-drag-drop-sortable-dragula#)

## Implementation instructions

- Use `view: { calendar: { labels: true } }`. Enable `dragToMove: true`, `dragToCreate: true`, `externalDrop: true`, `externalDrag: true`.
- Layout: a Mobiscroll 9/3 grid row — Eventcalendar in the left 9 columns, task sidebar in the right 3 columns. The sidebar is a `Dropcontainer` (`MbscDropcontainer` in Vue; `mbsc-dropcontainer` directive in Angular) with an "Available tasks" heading and 4 pre-defined task cards: `Product team meeting` (#cf4343, 08:00–09:30), `General orientation` (#e49516, 08:00–10:00), `Client Training` (#8c429f, 10:00–14:00), `CEO Conference` (#63b548, 12:00–18:00). Each task card is a draggable: React/Vue use the `Draggable` component with `dragData` (full task object: `id`, `title`, `color`, `start`, `end`) and `element` (ref to the card DOM node); Angular uses `mbsc-draggable` directive with `[dragData]`; JS/jQuery use the `mbsc-draggable` attribute on the element with `data-drag-data` as a stringified JSON object.
- `onEventCreate` (task dropped onto calendar): remove the task from the sidebar task list by `id` (React/Vue: filter state array; JS/jQuery: remove the DOM element). Show a `Toast` saying `"[title] added"`.
- `onEventDelete` (event dragged off calendar): show a `Toast` saying `"[title] unscheduled"`. The calendar removes the event automatically.
- `Dropcontainer.onItemDrop`: when an event lands back in the task sidebar, re-add it to the task list (React/Vue: append to state array; JS/jQuery: create the DOM element, append to the task container, and call `mobiscroll.draggable('#element-id', { dragData: event })`).
- Load initial calendar events from `https://trial.mobiscroll.com/drag-drop-events/` via JSONP using `getJson(url, callback, 'jsonp')`. Angular: use `HttpClient.jsonp()` instead. JS/jQuery: call `myCalendar.setEvents(events)` in the callback.
