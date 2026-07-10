To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/searching-events-in-sidebar#).

## Demo description

Inline search can be easily implemented with the help of a separate [agenda](https://demo.mobiscroll.com/react/agenda/#) instance.
This example is relying on a single API endpoint for getting the data onto the primary calendar view and also for getting the filtered data based on the search terms.

[Events can be filtered in real time](https://demo.mobiscroll.com/react/eventcalendar/resource-filtering-in-header#) so using an agenda view for the search results is an easy choice.
It provides all the necessary styling and advanced features that you might need to customize the experience.

Alternatively, search can be implemented in the header of the event calendar using a similar search box with an
[agenda listed in a popup](https://demo.mobiscroll.com/react/eventcalendar/searching-events-in-popup#) instead of rendered inline.

## Implementation instructions

- Build a split layout: a fixed-width sidebar on the left containing a search `Input` and an inline results `Eventcalendar`, and the main month calendar filling the remaining width on the right.
- Set `view: { calendar: { labels: true } }` for the main calendar. Load events via `onPageLoading` using `getJson` with `args.viewStart`/`args.viewEnd` as date range params.
- Place a Mobiscroll `Input` with `startIcon="material-search"` and placeholder "Search events" at the top of the sidebar. On `onChange`, debounce by 200ms, then call `getJson` with the search text appended to the API URL. Pass the returned events to the inline results `Eventcalendar` and show it.
- The results `Eventcalendar` in the sidebar uses `showControls: false` and `view: { agenda: { type: 'year', size: 5 } }`. Render it conditionally — show it only after the first search has been performed.
- On `onEventClick` in the results agenda, call `inst.navigateToEvent(args.event)` on the main calendar instance (Angular: use `@ViewChild`) to jump to that event's date, and set it as `selectedEvents` to highlight it.

## What this demo shows

- A full month event calendar with event labels rendered directly inside the day cells and a search sidebar placed next to it.
- **Event labels** Labels use different visual styles for all-day events, multi-day events, and timed events, with different colors representing different events.
- **Event selection** Hovering over or selecting an event label highlights that event.
- **Day cells** Hovering over a day cell highlights the day number in the top-right corner with a gray background.
- **Date selection** Clicking the empty area of a day cell selects the day and highlights the day number with a blue background.
- **Month navigation** The month can be changed by clicking and dragging the calendar left or right.
- **Header layout** The header shows the current month and year on the left and previous, next, and `Today` controls on the right.
- **Search sidebar** The sidebar contains a search field with a search icon and the `Search events` placeholder text.
- **Search results** Typing in the search field displays matching events in an agenda-style list below the input.
- **Agenda result** Search results are grouped by date, and each event row shows a colored marker, the event title, and the event type, such as all-day or timed.
- **Result selection** Clicking an event in the agenda list navigates the month view to the date that contains the selected event.
- **Empty state** If the search returns no matches, a `No events` message is shown below the search box.

## Best for

- **Busy event calendars** Interfaces where users need to find specific events quickly without leaving the main month view.
- **Employee scheduling** Workforce and shift planning tools where users search for people, absences, or schedule entries across a larger calendar.
- **Project and team planning** Planning tools where users search by keyword, event type, or participant while keeping the broader schedule visible.
