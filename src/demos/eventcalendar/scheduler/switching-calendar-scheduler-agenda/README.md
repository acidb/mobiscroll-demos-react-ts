To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/switching-calendar-scheduler-agenda#).

## Demo description

Dynamically switch views within one instance. Use a UI control to let users do the switching or do it programmatically.

The example features a month view with events as labels, a weekly schedule view, a daily schedule and a weekly agenda. Use property binding and when the value of the property changes the settings propagate.

## Implementation instructions

- Define five view configurations to switch between:
  - **Year**: `{ calendar: { type: 'year' } }`
  - **Month**: `{ calendar: { labels: true } }` (initial view)
  - **Week**: `{ scheduler: { type: 'week' } }`
  - **Day**: `{ scheduler: { type: 'day' } }`
  - **Agenda**: `{ calendar: { type: 'week' }, agenda: { type: 'week' } }`
- Render a `SegmentedGroup` in the custom header with one option per view. On selection, update the active view; for the imperative API, call `inst.setOptions({ view: newViewConfig })`.
- Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. For the imperative API, call `inst.setEvents(events)` in the callback.

## What this demo shows

- A desktop event calendar with a header segmented control for switching between year, month, week, day, and agenda views.
- **Header and segmented control** A segemnted control with `Year`, `Month`, `Week`, `Day` and `Agenda` options is positioned in the center of the header, between the year navigation label (quick navigation picker) on the left and the blue prev/next arrows with a `Today` button on the right.
- **Month view** The demo opens with the `Month` option selected and displays a desktop month view with event labels.
- **Event labels** Days with events show labels directly inside the month cells, with different colors and styles for all-day, multi-day, and timed events.
- **Overflow handling** When a day cell cannot show all events, additional events are collapsed into an `X more` label. Clicking the label opens a popover with the remaining events for that day.
- **Label interaction** Hovering or clicking an event label selects it and highlights the selected label.
- **Day cell states** Hovering an empty day cell highlights the day number with a gray background. Clicking the empty part of a cell selects the day and highlights the day number with a blue background.
- **Year view** Selecting `Year` shows all twelve months of the current year in a single scrollable layout.
- **Year view events** Days with events show a small label below the date. When multiple events are scheduled, an `X more` label opens a popover above the day cell with the events for that date.
- **Week view** Selecting `Week` shows a desktop weekly scheduler layout with a fixed week strip, a fixed all-day row, and a scrollable time grid for the selected week.
- **Week strip** The strip below the header shows the days of the selected week, with the current date highlighted by a blue circle.
- **Week events** Timed events appear in the scheduler grid as colored cards with a left color stripe, bold event title, and exact start and end time above the title.
- **Current time** A blue current-time line appears across the week time grid, with a small blue dot marking the current date.
- **Time indicator** Hovering over the week time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Day view** Selecting `Day` shows a desktop daily scheduler layout with a fixed week strip, a fixed all-day row, and a scrollable time grid for the selected day.
- **Day navigation** The week strip shows surrounding dates for quick day switching. Dates highlight on hover, and the selected day is marked with a blue circle.
- **Day events** Timed events appear in the daily scheduler grid as colored cards with a left color stripe, bold event title, and exact start and end time above the title.
- **Day current time** A blue current-time line appears across the daily time grid.
- **Day time indicator** Hovering over the daily time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Agenda view** Selecting `Agenda` shows a week calendar at the top and a daily agenda list below it.
- **Agenda selection** The agenda list displays events for the selected date. Selecting a different date in the week calendar updates the agenda automatically.
- **Agenda event markers** Days with events display a small marker below the day in the week calendar.
- **Event creation** Double-clicking or clicking and dragging in the event calendar or scheduler creates a new event.

## Best for

- **Multi-level schedule browsing** Apps where users need to move between year, month, week, day, and agenda views without leaving the same calendar instance.
- **Operational planning** Workflows that need both a broad overview of upcoming activity and detailed time-grid planning for a selected week or day.
- **Daily event review** Interfaces where users need to select a date and review that day’s events in an agenda list.
- **Dense calendars** Schedules where month and year views need to handle days with more events than can fit visibly in the cell.
- **Interactive scheduling** Use cases where users create events directly from the calendar or scheduler grid.
