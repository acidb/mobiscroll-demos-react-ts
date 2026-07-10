To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/event-hooks#).

## Demo description

The scheduler ships with different hooks for deep customization. Events are triggered through the lifecycle of the component where you can tie in custom functionality and code.

While users interact with the UI events like `onEventClick`, `onInit`, `onSelectedDateChange` ... will be triggered.

- **For a complete list of events go to the documentation** See available lifecycle events &#8594;

## Related demos

- See available lifecycle events &#8594;

## Implementation instructions

- Use `view: { scheduler: { type: 'day' } }`.
- Define 3 resources (Ryan, Kate, John) with `id`, `name`, and `color`. Load events from `https://trial.mobiscroll.com/resource-events/` via JSONP: React/Vue call `getJson(url, callback, 'jsonp')`; JS calls `mobiscroll.getJson(url, callback, 'jsonp')`; jQuery calls `$.getJSON(url + '&callback=?', callback)`; Angular uses `HttpClient.jsonp()`. Imperative API (JS/jQuery): call `inst.setEvents(events)` in the callback.
- Add an `invalid` entry blocking `12:00–13:00` recurring weekly on `MO,TU,WE,TH,FR` (titled "Lunch break") — all frameworks use the same pattern.
- Enable `dragToCreate: true`, `dragToMove: true`, `dragToResize: true`, and `externalDrop: true`.
- **External draggables** — render 2 styled cards outside the calendar, each an event draggable with `dragData: { title, color }`. React/Vue: use `Draggable` / `MbscDraggable` component with `dragData` and `element` (ref) props. Angular: use the `mbsc-draggable` directive with `[dragData]`. JS/jQuery: use the `mbsc-draggable` attribute with `data-drag-data` as a JSON string.
- **All lifecycle hooks** — register every available hook as an empty handler, grouped by concern:
  - **Cell**: `onCellClick`, `onCellDoubleClick`, `onCellRightClick`, `onCellHoverIn`, `onCellHoverOut`
  - **Event interaction**: `onEventClick`, `onEventDoubleClick`, `onEventRightClick`, `onEventHoverIn`, `onEventHoverOut`
  - **Event create/update/delete**: `onEventCreate`, `onEventCreated`, `onEventCreateFailed`, `onEventDelete`, `onEventDeleted`, `onEventUpdate`, `onEventUpdated`, `onEventUpdateFailed`
  - **Event drag**: `onEventDragStart`, `onEventDragEnd`, `onEventDragEnter`, `onEventDragLeave`
  - **Resource**: `onResourceClick`, `onResourceDoubleClick`, `onResourceRightClick`, `onResourceHoverIn`, `onResourceHoverOut`
  - **Page / lifecycle**: `onInit`, `onDestroy`, `onPageChange`, `onPageLoaded`, `onPageLoading`, `onSelectedDateChange`

## What this demo shows

- A desktop daily scheduler with date navigation, multiple resources, and a vertically scrollable time grid for the selected day.
- **External drag & drop** Two external events are shown above the scheduler and can be dragged onto the day view.
- **Event log** An Event log panel is shown at the left and lists the lifecycle events fired during interactions such as event creation, hover, drag, and similar actions.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between days and jump back to the current day.
- **Day header** The short weekday name and the selected date are shown below the main navigation.
- **All-day events** All-day events appear in a dedicated row that stays fixed above the time grid.
- **Resource strip** Three resources are displayed across the scheduler: `Ryan`, `Kate`, and `John`.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected day.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Current time** A horizontal blue line marks the current time across the scheduler.
- **Hover feedback** Hovering over the time grid shows a time indicator that follows the pointer in 15-minute increments.
- **Timed events** Events are displayed as colored cards with a colored left stripe, the event title, and the exact start and end time.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles when the event allows those interactions.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Lifecycle event discovery** Understanding which scheduler lifecycle hooks fire during common user interactions.
