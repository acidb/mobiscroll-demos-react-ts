To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/custom-range-view#).

## Demo description

The scheduler comes with [built-in support for day, week and month views](https://demo.mobiscroll.com/react/scheduler/display-multiple-days-weeks#). For those situations where a custom range makes more sense, it is possible to override the calendar navigation component with a [range picker](https://demo.mobiscroll.com/react/range/date-filtering-with-predefined-ranges#).

The calendar header can be easily customized and a two-way synchronization needs to be kept between the scheduler and range picker.

## Implementation instructions

- Use `view: { scheduler: { type: 'day', size: 14 } }` — a multi-day scheduler where `size` is the number of days shown simultaneously. The initial value is 14; it is updated dynamically whenever the user selects a new range.
- Render a custom header containing: a `Datepicker` in `select: 'range'` mode anchored to a button, a button displaying the formatted current date range, and `CalendarPrev`, `CalendarToday`, `CalendarNext` navigation controls.
- Configure the `Datepicker` with `display: 'anchored'`, `showOverlay: false`, `touchUi: true`, and `buttons: []` (no footer buttons). Anchor it to the date-range button element so it opens positioned directly below it.
- **Two-way sync**: On `onPageLoading` (React/Angular) or `onPageLoaded` (Vue/JS/jQuery), update the button text and datepicker range value to reflect the current calendar page. On datepicker `onClose`, calculate the number of days in the selected range, set `view.scheduler.size` to that count, and navigate the calendar to the range start date.
- Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. For the imperative API, call `inst.setEvents(events)` in the callback.

## What this demo shows

- A desktop scheduler layout with a custom date range in the header, a fixed all-day row below it, and a vertically scrollable time grid for the selected range.
- **Header** The header shows the selected custom date range on the left. Clicking the displayed range opens an anchored range picker where users can choose a custom scheduler range instead of using only fixed day, week, month, or year views.
- **Header navigation** The previous and next controls and the Today button let users move through the scheduler range and return to the current day.
- **Custom range view** The fixed strip below the header displays the days in the selected range, with the current date highlighted.
- **All-day events** All-day events appear in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected custom range.
- **Timed events** Timed events appear as colored cards in the scheduler grid, showing the start and end time above the event title.
- **Event overlapping** Overlapping events are displayed side by side so every event remains visible.
- **Current time** A current-time indicator appears across the scheduler grid.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and displays drag and resize handles for editing.
- **Event creation** Users can create events by double-clicking the grid or by clicking and dragging across a time range.

## Best for

- **Conference and event planning** Coordinate multi-day conferences, trade shows, workshops, festivals, corporate events, meetings, and sessions.
- **Project and program management** Track project phases, milestones, launches, deadlines, and team activities across several weeks in a single scheduler view.
- **Business travel and itineraries** Plan business trips, tours, client visits, training programs, and travel schedules while keeping appointments visible.
- **Marketing and campaign planning** Manage campaigns, content schedules, product launches, promotional events, and key milestones over extended periods.
