To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/display-multiple-days-weeks#).

## Demo description

The scheduler has three types: `day`, `week` and `month`. Use the `size` property of the configuration object to set the length of the range.

Multiples of days, weeks and months are supported. The reference date, controlled through the `refDate` option, is today by default, but it can be set to any date, like the first day of the month, or the first day of the year. The `refDate` serves as the start of the reference range. From that point on you can navigate forward and backward.

A couple of examples:

- **Rolling two weeks** - use `type: 'day'` and `size: 14`
- **Rolling ten days** - use `type: 'day'` and `size: 10`
- **Two weeks (starting with Sun/Mon)** - use `type: 'week'` and `size: 2`
- **Quarter view, starting from January** - use `type: 'month'` and `size: 3` with `refDate: '2021-01-01'`
- **Rolling three months** - use `type: 'month'` and `size: 3`
- **Year view** - use `type: 'month'` and `size: 12` with `refDate: '2021-01-01'`

## Implementation instructions

- Use `view: { scheduler: { type: 'week', size: 2 } }` — a two-week rolling scheduler. The `size` property multiplies the base `type` unit: `type: 'day'` + `size: 14` = 14-day rolling view, `type: 'month'` + `size: 3` = rolling quarter view.
- `refDate` sets the anchor point for navigation. It defaults to today, producing a "rolling" view that always starts relative to the current date. Set it to a fixed date (e.g., `'2024-01-01'`) to lock navigation to calendar boundaries such as a full quarter or year.
- Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. For the imperative API, call `inst.setEvents(events)` in the callback.

## What this demo shows

- A desktop scheduler layout with a custom date range in the header, a fixed all-day row below it, and a vertically scrollable time grid for the selected range.
- **Range controls** A configuration panel beside the scheduler lets users choose a numeric size from a select dropdown and switch between `Day`, `Week`, and `Month`, with `Day` selected by default.
- **Range size** The controls define how many days, weeks, or months are shown in the scheduler.
- **Initial view date** The first checkable option is titled `If unset, the initial view date is today`. When enabled, users can set the initial view date with the `Set the initial view date to` checkbox and date picker.
- **Reference date** The second checkable option is titled `If unset, the reference date is today`. When enabled, users can set the date used for paging calculations with the `Paging is calculated from` checkbox and date picker.
- **Header navigation** The custom date range on the left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Custom range view** The fixed strip below the header displays the days in the selected range, with the current date highlighted and weekends shown with grey backgrounds.
- **All-day events** All-day events appear in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected custom range.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** Overlapping events are displayed side by side so every event remains visible.
- **Current time** A blue current-time line appears across the time grid, with a small blue dot marking the current date.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and displays drag and resize handles for editing.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Users can create events by double-clicking the grid or by clicking and dragging across a time range.

## Best for

- **Event planning** — Planning projects, releases, or roadmaps that span multiple weeks or months.
- **Team management** —  Managing teams that need visibility into schedules beyond a single week.
- **Resource allocation** — Resource allocation and capacity planning across extended time periods.
- **Workload distribution** — Comparing workload distribution and availability across larger date ranges.
