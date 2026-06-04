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
- Configure the **search results** `Eventcalendar` with `view: { agenda: { type: 'year', size: 5 } }`, `showControls={false}`, and the same 6 resources as the main calendar. No drag/create options are needed. In React/Vue render it conditionally based on a `displayResults` state/ref; in JS hide/show the container element with `visibility`; in jQuery use `.hide()` / `.show()`.
- Configure the **main timeline** `Eventcalendar` with `view: { timeline: { type: 'month', eventDisplay: 'fill' } }`, `clickToCreate={false}`, `dragToCreate={false}`, `dragToMove={false}`, `dragToResize={false}`, and `selectMultipleEvents={true}`.
- Define 6 generic resources (Resource 1–6) with `id`, `name`, and `color`, shared by both calendar instances.
- **Debounced search**: on each input change, clear any pending timeout and set a new 200ms timer. When the timeout fires and the search text is non-empty, call `getJson` to `https://trial.mobiscroll.com/searchevents-timeline/?text=<searchText>` and populate the agenda list, then reveal the results panel. When the text is cleared, hide the results panel without making a request. (Angular: use `HttpClient.jsonp()` instead of `getJson`.)
- **Page-level data loading**: handle `onPageLoading` on the main calendar. Format `args.viewStart` and `args.viewEnd` as `'YYYY-MM-DD'` using `formatDate`, then call `getJson` (Angular: `HttpClient.jsonp`) to `https://trial.mobiscroll.com/searchevents-timeline/?start=<start>&end=<end>` and set the main calendar's events. Wrap the `getJson` call in `setTimeout` with no delay to defer it past the current rendering cycle.
- **Navigating on result click**: handle `onEventClick` on the search results agenda. Call `navigateToEvent(args.event)` on the main calendar instance to jump to that event's date, then set `selectedEvents` to `[args.event]` to highlight it. In React/Vue, hold the selected event in state/ref and pass it as the `selectedEvents` prop. In JS/jQuery, call `calendarInstance.setSelectedEvents([args.event])` directly.
- Keep a ref/`@ViewChild` reference to the main calendar instance to call `navigateToEvent` imperatively.
