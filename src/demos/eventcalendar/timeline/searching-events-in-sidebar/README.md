To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/searching-events-in-sidebar#).

## Demo description

Inline search can be easily implemented with the help of a separate [agenda](https://demo.mobiscroll.com/react/agenda/#) instance.
This example is relying on a single API endpoint for getting the data onto the primary timeline view and also for getting the filtered data based on the search terms.

[Events can be filtered in real time](https://demo.mobiscroll.com/react/scheduler/resource-filtering-in-header#) so using an agenda view for the search results is an easy choice.
It provides all the necessary styling and advanced features that you might need to customize the experience.

Alternatively, search can be implemented in the header using a similar search box with an
[agenda listed in a popup](https://demo.mobiscroll.com/react/eventcalendar/searching-events-in-popup#) instead of rendered inline.

## Implementation instructions

- Use a two-panel layout: a left sidebar containing the search input and the results list, and a right panel containing the main timeline calendar.
- The sidebar holds two elements: a Mobiscroll `Input` with `startIcon="material-search"`, `inputStyle="outline"`, `autoComplete="off"`, `placeholder="Search events"`; and a second `Eventcalendar` instance (the search results list) that is only shown when there are results.
- Configure the **search results** `Eventcalendar` with `view: { agenda: { type: 'year', size: 5 } }`, `showControls={false}`, and the same 6 resources as the main calendar. Show it only when there are results to display.
- Configure the **main timeline** `Eventcalendar` with `view: { timeline: { type: 'month', eventDisplay: 'fill' } }`, `clickToCreate={false}`, `dragToCreate={false}`, `dragToMove={false}`, `dragToResize={false}`, and `selectMultipleEvents={true}`.
- Define 6 generic resources (Resource 1–6) with `id`, `name`, and `color`, shared by both calendar instances.
- **Debounced search**: on each input change, clear any pending timeout and set a new 200ms timer. When the timeout fires and the search text is non-empty, call `getJson` to `https://trial.mobiscroll.com/searchevents-timeline/?text=<searchText>` and populate the agenda list, then reveal the results panel. When the text is cleared, hide the results panel without making a request. (Angular: use `HttpClient.jsonp()` instead of `getJson`.)
- **Page-level data loading**: handle `onPageLoading` on the main calendar. Format `args.viewStart` and `args.viewEnd` as `'YYYY-MM-DD'` using `formatDate`, then call `getJson` (Angular: `HttpClient.jsonp`) to `https://trial.mobiscroll.com/searchevents-timeline/?start=<start>&end=<end>` and set the main calendar's events. Wrap the `getJson` call in `setTimeout` with no delay to defer it past the current rendering cycle.
- **Navigating on result click**: handle `onEventClick` on the search results agenda. Call `navigateToEvent(args.event)` on the main calendar instance to jump to that event's date, then set `selectedEvents` to `[args.event]` to highlight it; for the imperative API, call `calendarInstance.setSelectedEvents([args.event])` directly.
- Keep a ref/`@ViewChild` reference to the main calendar instance to call `navigateToEvent` imperatively.

## What this demo shows

- A desktop monthly timeline where days are arranged horizontally and resources are listed as rows on the left.
- **Search sidebar** The left sidebar contains a search field with a search icon and the `Search events` placeholder text.
- **Search results** Typing in the search field displays matching events in an agenda-style list below the input.
- **Agenda results** Search results are grouped by date, and each event row shows a colored marker, the event title, and the event type, such as all-day or timed.
- **Result selection** Clicking an event in the agenda list navigates the timeline to the date that contain the selected event.
- **Empty state** When the search returns no matches, a `No events` message appears below the search box.
- **Header navigation** The month and year label opens date navigation, while the previous and next arrows move between month and the Today button returns to the current date.
- **Month view** The strip below the header shows the days of the selected month, with the current date highlighted.
- **Resources** Multiple resources are shown as separate timeline rows.
- **Event labels** Events are shown as colored labels with a bold title.
- **Date positioning** Events are positioned by their assigned resource and exact date range.
- **Event interaction** Events highlight on hover.
- **Event selection** Clicking an event selects and highlights it.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through time and resources.

## Best for

- **Searchable timeline interfaces** Timelines where users need to find specific events without leaving the main timeline view.
- **Employee scheduling** Workforce and shift planning tools where users search for people, absences, or schedule entries across a larger calendar.
- **Project and team planning** Planning tools where users search by keyword, event type, or participant while keeping the broader timeline visible.
