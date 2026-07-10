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
