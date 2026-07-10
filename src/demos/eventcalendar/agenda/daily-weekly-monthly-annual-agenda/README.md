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
