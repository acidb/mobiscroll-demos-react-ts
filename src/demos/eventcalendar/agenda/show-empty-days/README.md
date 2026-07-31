To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/show-empty-days#).

## Demo description

By default, the agenda doesn't render days with no events. However, in some cases, you might want to display headers for empty days,
especially when you want to add extra functionalities for those days or make it easier to schedule future events.
In such cases, you can use the `showEmptyDays` property under the `view.agenda` option.

- **Interested in how to customize the day headers?** [Check out this example →](https://demo.mobiscroll.com/react/agenda/customizing-day-header#)

## Related demos

- [Check out this example →](https://demo.mobiscroll.com/react/agenda/customizing-day-header#)

## Implementation instructions

- Use `view: { agenda: { type: 'month', showEmptyDays: true } }`. The `showEmptyDays` option inside `view.agenda` causes the agenda to render a day header for every day in the range, even when no events fall on that day (by default those days are hidden). Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. Angular: use `HttpClient.jsonp()`. For the imperative API, call `inst.setEvents(events)` in the callback.

## What this demo shows

- Shows a month agenda view where events are listed below the header and grouped by date.
- **Show empty days:** A control panel on the left lets users show or hide day headers for dates without events.
- **Default state:** Empty day headers are shown when the demo loads, so days without events still appear in the agenda.
- **Header navigation:** The month and year label opens date navigation. The previous and next arrows move between months, and the Today button returns to the current date.
- **Agenda list:** Events for the visible month appear below the header, grouped under their date headers.
- **Empty days:** Dates without events can still render as day headers, which makes the full month visible in the agenda.
- **Sticky day headers:** As the agenda scrolls vertically, the current day header stays visible while its events appear underneath.
- **Events:** Events appear as agenda cards with a colored strip on the left and the event title beside it.
- **Timed events:** Start and end times are shown on the right side of timed events.
- **Event hover:** Hovering over an event highlights it.
- **Event selection:** Clicking an event selects it and applies a selected highlight.

## Best for

- **Monthly agenda overviews:** Showing a full month of agenda content while keeping events grouped by date.
- **Planning future work:** Keeping empty dates visible so users can identify available days for adding or scheduling future events.
- **Date-based workflows:** Supporting interfaces where every day in the range matters, even when some days do not have events yet.
- **Custom day actions:** Leaving empty day headers visible when the app needs to attach extra functionality to days without events.
- **Scrollable agendas:** Presenting longer agenda lists with sticky date headers so users can keep their place while scrolling.
