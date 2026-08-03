To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/searching-events-in-popup#).

## Demo description

Use the available real estate in the calendar header to add event search. With the [templating capabilities of the header](https://demo.mobiscroll.com/react/agenda/customizing-calendar-header#)
you can easily add a search box and use a separate agenda instance to show the search results.
This example is relying on a single API endpoint for getting the data onto the primary view and also for getting the filtered data based on the search terms.

[Events can be filtered in real time](https://demo.mobiscroll.com/react/agenda/resource-filtering-in-header#) so using an agenda view for the search results is an easy choice.
It provides all the necessary styling and advanced features that you might need to customize the experience.

Alternatively, search can be implemented in a [sidebar next to the event calendar](https://demo.mobiscroll.com/react/eventcalendar/searching-events-in-sidebar#)
using a similar search box with an inline agenda instead of a dropdown.

## Implementation instructions

- Use two Eventcalendar instances. The main calendar uses `view: { agenda: { type: 'month' } }` with `selectMultipleEvents: true`. The results list uses `view: { agenda: { type: 'year', size: 5 } }` with `showControls: false` — this renders as a flat scrollable event list with no calendar chrome.
- Load main calendar events on `onPageLoading`: use `formatDate('YYYY-MM-DD', args.viewStart)` and `formatDate('YYYY-MM-DD', args.viewEnd)` to build the URL, then JSONP from `https://trial.mobiscroll.com/searchevents/?start={start}&end={end}`. Angular: use `HttpClient.jsonp()`. For the imperative API, call `inst.setEvents()` in the callback.
- Build a custom header via `renderHeader` (Angular: `headerTemplate`, Vue: `header` slot) with `CalendarNav` on the left, a Mobiscroll `Input` (`autoComplete: 'off'`, `inputStyle: 'box'`, `startIcon: 'material-search'`, `placeholder: 'Search events'`) in the center (`mbsc-flex-1-0`), and `CalendarPrev`/`CalendarToday`/`CalendarNext` on the right.
- On input change: debounce 200ms. If the text is non-empty, JSONP `https://trial.mobiscroll.com/searchevents/?text={searchText}`, load results into the results Eventcalendar, and open the Popup. If empty, close the Popup. On input focus: if the current value is non-empty, reopen the Popup.
- Wrap the results Eventcalendar in a `Popup` anchored to the search input element: `display: 'anchored'`, `focusElm` = the input's native element, `focusOnOpen: false`, `focusOnClose: false`, `contentPadding: false`, `scrollLock: false`, `showArrow: false`, `showOverlay: false`, `width: 400`.
- On event click in the results list: call `inst.navigateToEvent(args.event)` on the main calendar to scroll it into view, set `selectedEvents: [args.event]` to highlight it, and close the Popup. Angular: use `@ViewChild` to get both the main calendar instance and the popup instance (`popup.open()` / `popup.close()`).

## What this demo shows

- Shows a monthly agenda view with events listed and grouped by date.
- **Header navigation** The month and year label in the top left opens date navigation. A centered search input and the previous and next arrows and the Today button on the right move between months and jump back to the current date.
- **Search input** The search field includes a search icon and the `Search events` placeholder text.
- **Search results popup** Typing into the search field opens a popup below the input with matching events in an agenda-style list.
- **Agenda results** Search results are grouped by date, and each event row shows a colored marker, the event title, and the event type, such as all-day or timed.
- **Result selection** Clicking an event in the agenda list closes the popup and navigates the month view to the date that contains the selected event.
- **Agenda list:** The area below the header lists events for the selected month. Events in the agenda are grouped by date.
- **Sticky day headers** As the agenda scrolls vertically, each day stays visible with a sticky date header while its events appear underneath.
- **Events:** Events appear as agenda cards with a colored strip on the left and the event title next to it. Start and end times are stacked on the right side of timed events. All-day events show the all-day label on the right.
- **Event interaction:** Hovering an event highlights it.
- **Event selection:** Clicking an event selects and highlights it.

## Best for

- **Search-heavy agendas** Interfaces where users need to quickly find events by person, keyword, event type, or absence period.
- **Admin and operations tools** Admin dashboards, employee scheduling tools, and internal planning interfaces where users review and search event-heavy agendas.
- **Enterprise planning** Multi-day planning scenarios where users need to move between agenda context and filtered event results without leaving the month view.
