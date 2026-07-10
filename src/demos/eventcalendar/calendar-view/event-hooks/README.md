To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/event-hooks#).

## Demo description

The event calendar ships with different hooks for deep customization. Events are triggered through the lifecycle of the component where you can tie in custom functionality and code.

While users interact with the UI events like `onEventClick`, `onInit`, `onSelectedDateChange` ... will be triggered.

- **For a complete list of events go to the documentation** See available lifecycle events &#8594;

## Related demos

- See available lifecycle events &#8594;

## Implementation instructions

- Use `view: { calendar: { labels: true } }`. Enable `dragToCreate: true`, `dragToMove: true`, `dragToResize: true`, and `externalDrop: true`.
- Add an `invalid` entry blocking weekends: `{ recurring: { repeat: 'weekly', weekDays: 'SA,SU' } }`.
- **External draggables** — render 2 styled cards above the calendar, each an external draggable with `dragData: { title, color }`. Card 1: `{ title: 'External drag 1', color: '#ffdab8' }`; card 2: `{ title: 'External drag 2', color: '#ddfcf7' }`. React/Vue: use the `Draggable` component with `dragData` and `element` (ref) props. Angular: use the `mbsc-draggable` directive with `[dragData]`. JS/jQuery: use the `mbsc-draggable` attribute with `data-drag-data` as a JSON string.
- Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. Angular: use `HttpClient.jsonp()` instead. JS/jQuery: call `inst.setEvents(events)` in the callback.
- **All lifecycle hooks** — register every available hook as an empty handler, grouped by concern:
  - **Cell**: `onCellClick`, `onCellDoubleClick`, `onCellRightClick`, `onCellHoverIn`, `onCellHoverOut`
  - **Event interaction**: `onEventClick`, `onEventDoubleClick`, `onEventRightClick`, `onEventHoverIn`, `onEventHoverOut`, `onLabelClick`
  - **Event create/update/delete**: `onEventCreate`, `onEventCreated`, `onEventCreateFailed`, `onEventDelete`, `onEventDeleted`, `onEventUpdate`, `onEventUpdated`, `onEventUpdateFailed`
  - **Event drag**: `onEventDragStart`, `onEventDragEnd`, `onEventDragEnter`, `onEventDragLeave`
  - **Page / lifecycle**: `onInit`, `onDestroy`, `onPageChange`, `onPageLoaded`, `onPageLoading`, `onSelectedDateChange`

## What this demo shows

- A desktop month-view event calendar that demonstrates lifecycle events triggered by calendar interactions.
- **External drag & drop** Two external events are shown above the calendar and can be dragged onto the month grid.
- **Month grid** The calendar displays a full month view with weekends disabled.
- **Event labels** Days with events show colored labels inside the day cells, with different colors distinguishing different events.
- **Overflow handling** The number of visible event labels depends on the available height in each day cell. Additional events are collapsed behind an `X more` link.
- **Popover** Clicking the `X more` link opens a popover that shows the hidden events for that day.
- **Label interaction** Hovering over or clicking an event label selects it and highlights the selected label.
- **Day cell states for future days** Hovering a day cell highlights the day number with a gray background, while clicking the empty part of the cell selects the day and highlights the day number with a blue background.
- **Event creation** Users can create events by clicking and dragging across calendar cells or by double-clicking a day cell.
- **Calendar header** The header shows the current month and year on the left, and blue month navigation arrows with a `Today` button (for jumping back to the current date) between them on the right. 
- **Event log** An Event log panel is shown at the left and lists the lifecycle events fired during interactions such as event creation, hover, drag, and similar actions.

## Best for

- **Lifecycle event discovery** Understanding which Event calendar lifecycle hooks fire during common user interactions.
