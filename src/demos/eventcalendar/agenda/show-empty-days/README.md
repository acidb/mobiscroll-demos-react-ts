To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/show-empty-days#).

## Demo description

By default, the agenda doesn’t render days with no events. However, in some cases, you might want to display headers for empty days,
especially when you want to add extra functionalities for those days or make it easier to schedule future events.
In such cases, you can use the `showEmptyDays` property under the `view.agenda` option.

- **Interested in how to customize the day headers?** [Check out this example →](https://demo.mobiscroll.com/react/agenda/customizing-day-header#)

## Related demos

- [Check out this example →](https://demo.mobiscroll.com/react/agenda/customizing-day-header#)

## Implementation instructions

- Use `view: { agenda: { type: 'month', showEmptyDays: true } }`. The `showEmptyDays` option inside `view.agenda` causes the agenda to render a day header for every day in the range, even when no events fall on that day (by default those days are hidden). Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. Angular: use `HttpClient.jsonp()`. For the imperative API, call `inst.setEvents(events)` in the callback.
