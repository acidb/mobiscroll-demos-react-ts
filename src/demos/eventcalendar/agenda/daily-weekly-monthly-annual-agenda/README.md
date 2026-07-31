To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/daily-weekly-monthly-annual-agenda#).

## Demo description

Use the `agenda` object inside the `view` option to configure the agenda. `type` and `size` can be set as follows:

- **day** - `agenda: { type: 'day', size: 20 }` can be configured for a single day or a range of days
- **week** - `agenda: { type: 'week', size: 3 }` can be configured for a single or multiple weeks
- **month** - `agenda: { type: 'month' }` can be configured for one or more months
- **year** - `agenda: { type: 'year' }` can be configured for one or more years

- **Interested in combining this with a calendar view?** [Check out the previous example →](https://demo.mobiscroll.com/react/agenda/daily-agenda-with-week-calendar#)

## Related demos

- [Check out the previous example →](https://demo.mobiscroll.com/react/agenda/daily-agenda-with-week-calendar#)

## Implementation instructions

- Render three Eventcalendar instances side by side inside a `Page` component using Mobiscroll's grid (`mbsc-grid` / `mbsc-row` / `mbsc-col`). Configure each with a different `view` type: `{ agenda: { type: 'day' } }`, `{ agenda: { type: 'week' } }`, and `{ agenda: { type: 'month' } }`.
- Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')` and pass the same array to all three instances. Angular: use `HttpClient.jsonp()`. For the imperative API, call `inst.setEvents(events)` on each instance in the callback.

## What this demo shows

- Shows an agenda view where events are listed below the header for the selected date range.
- **View controls:** A control panel on the left lets users switch the agenda type between daily, weekly, monthly, and yearly views.
- **Default view:** The daily agenda is selected by default.
- **Range size:** Users can choose whether to show a single day, week, month, or year, or enter a number to display multiple days, weeks, months, or years.
- **Agenda update:** Changing the agenda type or range size updates the visible agenda view.
- **Header navigation:** The month, selected date, and year label in the top-left header opens date navigation.
- **Date navigation:** The previous and next arrows move through the agenda range, while the Today button jumps back to the current date.
- **Agenda list:** The area below the header lists events for the selected range.
- **Events:** Events appear as agenda cards with a colored strip on the left and the event title beside it.
- **Timed events:** Start and end times are stacked on the right side of timed event cards.
- **Event interaction:** Hovering over an event highlights it.
- **Event selection:** Clicking an event selects and highlights it.

## Best for

- **Configurable agenda views:** Letting users switch between daily, weekly, monthly, and yearly event lists from the same interface.
- **Variable planning ranges:** Showing a single period or multiple consecutive days, weeks, months, or years based on user input.
- **Schedule review:** Browsing upcoming events in a compact list format instead of a calendar grid.
- **Longer-term overviews:** Reviewing events across larger ranges, such as multiple weeks, months, or a full year.
- **Agenda-focused interfaces:** Building event list views where date navigation and event scanning are more important than grid-based scheduling.
