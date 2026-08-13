To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/event-hooks#).

## Demo description

The agenda ships with different hooks for deep customization. Events are triggered through the lifecycle of the component where you can tie in custom functionality and code.

While users interact with the UI events like `onEventClick`, `onInit`, `onSelectedDateChange` ... will be triggered.

- **For a complete list of events go to the documentation** See available lifecycle events →

## Related demos

- See available lifecycle events →

## Implementation instructions

- Use `view: { agenda: { type: 'month' } }`. Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. Angular: use `HttpClient.jsonp()`. For the imperative API, call `inst.setEvents(events)` in the callback.
- Wire all lifecycle hooks on the `Eventcalendar` component. Each handler receives an `args` object (except `onInit` and `onDestroy`). Group the hooks by purpose:
  - **Initialization**: `onInit` — fires once when the component initialises; `onDestroy` — fires on teardown.
  - **Event interaction**: `onEventClick`, `onEventDoubleClick`, `onEventHoverIn`, `onEventHoverOut`, `onEventRightClick` — each receives `args` with the event data and DOM event.
  - **Page lifecycle**: `onPageChange` — fires when the calendar navigates to a new page; `onPageLoading` — use this to load data on demand; `onPageLoaded` — use this to inject custom markup or attach DOM listeners after rendering.
  - **Date tracking**: `onSelectedDateChange` — fires when the selected date changes; use it to keep external state in sync.
- In this demo all handlers log to the console as a reference implementation. Replace each handler body with the application-specific logic needed.

## What this demo shows

- Shows a monthly agenda view with events listed and grouped by date.
- **Header navigation** The month and year label in the top left opens date navigation. The previous and next arrows and the Today button on the right move between months and jump back to the current date.
- **Agenda list** The area below the header lists events for the selected month. Events in the agenda are grouped by date.
- **Sticky day headers** As the agenda scrolls vertically, each day stays visible with a sticky date header while its events appear underneath.
- **Events** Events appear as agenda cards with a colored strip on the left and the event title next to it. Start and end times are stacked on the right side of timed events. All-day events show the all-day label on the right.
- **Event interaction** Hovering an event highlights it.
- **Event selection** Clicking an event selects and highlights it.
- **Event log** An Event log panel is shown at the left and lists the lifecycle events fired during interactions such as event creation, hover, drag, and similar actions.

## Best for

- **Lifecycle event discovery** Understanding which agenda lifecycle hooks fire during common user interactions.
