To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/event-hooks#).

## Demo description

The timeline ships with different hooks for deep customization. Events are triggered through the lifecycle of the component where you can tie in custom functionality and code.

While users interact with the UI events like `onEventClick`, `onInit`, `onSelectedDateChange` ... will be triggered.

- **For a complete list of events go to the documentation** See available lifecycle events &#8594;

## Related demos

- See available lifecycle events &#8594;

## Implementation instructions

- Use `timeline: { type: 'day', resourceReorder: true }` — a single-day view with drag-to-reorder resources enabled.
- Define 6 resources with `id`, `name`, and `color`.
- Load events from `https://trial.mobiscroll.com/timeline-events/` via JSONP using `getJson(url, callback, 'jsonp')`. Call `inst.setEvents(events)` for the imperative API.
- Add an `invalid` entry blocking 12:00–13:00 recurring on weekdays (`weekDays: 'MO,TU,WE,TH,FR'`).
- Enable all interactions: `dragToCreate: true`, `dragToMove: true`, `dragToResize: true`, `externalDrop: true`, `externalResourceDrop: true`.
- **External draggables** — render 3 styled cards outside the calendar, each registered as a Mobiscroll draggable:
  - Two event draggables with `dragData: { title, color }` — when dropped onto the calendar, they create new events.
  - One resource draggable with `dragData: { name, color }` and `type="resource"` — when dropped onto the resource column, it creates a new resource row.
  - For the imperative API: use `mbsc-draggable` attribute with `data-drag-data` (JSON string) and `data-type="resource"` on the third card. For component frameworks, use the `Draggable` / `MbscDraggable` component with `dragData` and `type` props.
- **All lifecycle hooks** — register every available hook as an empty handler to catalog them. The handlers contain no logic; the purpose of the demo is to show what hooks exist. Group them by concern:
  - **Cell**: `onCellClick`, `onCellDoubleClick`, `onCellRightClick`, `onCellHoverIn`, `onCellHoverOut`
  - **Event interaction**: `onEventClick`, `onEventDoubleClick`, `onEventRightClick`, `onEventHoverIn`, `onEventHoverOut`
  - **Event create/update/delete**: `onEventCreate`, `onEventCreated`, `onEventCreateFailed`, `onEventDelete`, `onEventDeleted`, `onEventUpdate`, `onEventUpdated`, `onEventUpdateFailed`
  - **Event drag**: `onEventDragStart`, `onEventDragEnd`, `onEventDragEnter`, `onEventDragLeave`
  - **Resource**: `onResourceClick`, `onResourceDoubleClick`, `onResourceRightClick`, `onResourceHoverIn`, `onResourceHoverOut`, `onResourceCreate`, `onResourceCreated`, `onResourceDelete`, `onResourceDeleted`, `onResourceDragStart`, `onResourceDragEnd`, `onResourceDragEnter`, `onResourceDragLeave`, `onResourceOrderUpdate`
  - **Page / lifecycle**: `onInit`, `onDestroy`, `onPageChange`, `onPageLoaded`, `onPageLoading`, `onSelectedDateChange`
- Style each draggable card with padding, border-radius, and `display: inline-block` so they appear as clickable tiles above the calendar.

## What this demo shows

- A desktop daily timeline where hours are arranged horizontally and a hierarchical resource tree arranged vertically on the left.
- **External drag & drop** Three external events are shown above the timeline and can be dragged onto the day view.
- **Event log** An Event log panel is shown at the left and lists the lifecycle events fired during interactions such as event creation, hover, drag, and similar actions.
- **Header navigation** The month and year label opens date navigation, while the previous and next arrows move between days and the Today button returns to the current date.
- **Day view** The strip below the header shows the selected days, with the current date highlighted. The timeline displays hourly columns from 12 AM to 12 PM.
- **Resources** The left side shows expandable and collapsible resource groups, including parent groups and draggable resources.
- **Resource hierarchy** Nested resources are grouped under parent rows, before listing individual resources.
- **Resource template** Each resource header shows the resource name in bold.
- **Current time** A vertical blue line with a time label marks the current time.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event cards** Events are shown as colored cards with a left color stripe, a bold title, a description, and a bold time range.
- **Date positioning** Events are positioned by their assigned resource and exact date range.
- **Event interaction** Events highlight on hover and show drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging across a time range.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through time and resources.

## Best for

- **Lifecycle event discovery** Understanding which timeline lifecycle hooks fire during common user interactions.
