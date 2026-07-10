To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/searching-events-in-sidebar#).

## Demo description

Inline search can be easily implemented with the help of a separate [agenda](https://demo.mobiscroll.com/react/agenda/#) instance.
This example is relying on a single API endpoint for getting the data onto the primary schedule view and also for getting the filtered data based on the search terms.

[Events can be filtered in real time](https://demo.mobiscroll.com/react/scheduler/resource-filtering-in-header#) so using an agenda view for the search results is an easy choice.
It provides all the necessary styling and advanced features that you might need to customize the experience.

Alternatively, search can be implemented in the header using a similar search box with an
[agenda listed in a popup](https://demo.mobiscroll.com/react/eventcalendar/searching-events-in-popup#) instead of rendered inline.

## Implementation instructions

- Use a two-panel layout: a left sidebar with the search input and results, and a right panel with the main scheduler.
- Configure the **search results** `Eventcalendar` with `view: { agenda: { type: 'year', size: 5 } }` and `showControls: false`. Show it only when there are results (React/Vue/Angular: conditional render; JS: `element.style.visibility`; jQuery: `$el.show()`/`$el.hide()`).
- Configure the **main scheduler** `Eventcalendar` with `view: { scheduler: { type: 'week' } }`, all drag/create options off, and `selectMultipleEvents: true`.
- **Debounced search**: on each input change, clear any pending timeout and set a 200ms timer. When it fires with non-empty text, fetch from `https://trial.mobiscroll.com/searchevents/?text=<searchText>` via JSONP: React/Vue call `getJson(url, callback, 'jsonp')`; JS calls `mobiscroll.getJson(url, callback, 'jsonp')`; jQuery calls `$.getJSON(url + '&callback=?', callback)`; Angular uses `HttpClient.jsonp()`. Imperative API (JS/jQuery): call `list.setEvents(data)` in the callback.
- **Page-level data loading**: handle `onPageLoading` on the main calendar. Format `args.viewStart` and `args.viewEnd` as `'YYYY-MM-DD'` with `formatDate`, then fetch from `https://trial.mobiscroll.com/searchevents/?start=<start>&end=<end>` via JSONP. React/Vue/Angular: wrap the fetch call in a no-delay `setTimeout` to defer past the current rendering cycle. Imperative API (JS/jQuery): call `calendar.setEvents(data)` in the callback.
- **Navigating on result click**: handle `onEventClick` on the search results agenda. Call `navigateToEvent(args.event)` on the main calendar instance to jump to that event's date. Then highlight it: set `selectedEvents` to `[args.event]`; for the imperative API, call `calendar.setSelectedEvents([args.event])`.

## What this demo shows

- A desktop weekly scheduler layout with a fixed week strip at the top, a fixed all-day row below it, a scrollable scheduler time grid for the selected week and a search sidebar placed next to it.
- **Search sidebar** The left sidebar contains a search field with a search icon and the `Search events` placeholder text.
- **Search results** Typing in the search field displays matching events in an agenda-style list below the input.
- **Agenda results** Search results are grouped by date, and each event row shows a colored marker, the event title, and the event type, such as all-day or timed.
- **Result selection** Clicking an event in the agenda list navigates the scheduler to the date and hour that contain the selected event.
- **Empty state** When the search returns no matches, a `No events` message appears below the search box.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed strip below the header displays the days of the selected week, with the current date highlighted by a blue circle.
- **All-day events** All-day events appear in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected week.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid, with a small blue dot marking the current date.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Searchable scheduler interfaces** Schedulers where users need to find specific events without leaving the main scheduler view.
- **Employee scheduling** Workforce and shift planning tools where users search for people, absences, or schedule entries across a larger calendar.
- **Project and team planning** Planning tools where users search by keyword, event type, or participant while keeping the broader schedule visible.
