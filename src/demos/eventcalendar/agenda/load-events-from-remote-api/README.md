To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/load-events-from-remote-api#).

## Demo description

The agenda can be populated by passing an array to the `data` option, that you can construct either inline or by getting it from a remote API. The important thing to remember is that events need to be [in a format that the agenda understands](https://demo.mobiscroll.com/react/agenda/event-data-structure#).

- **Interested in load on demand?** [Dynamically load events on month change →](https://demo.mobiscroll.com/react/agenda/load-events-on-demand#)

## Related demos

- [Dynamically load events on month change →](https://demo.mobiscroll.com/react/agenda/load-events-on-demand#)

## Implementation instructions

- Use `view: { agenda: { type: 'month' } }`. Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. Angular: use `HttpClient.jsonp()`. For the imperative API, call `inst.setEvents(events)` in the callback. Pass the returned array directly to the `data` option — no transformation needed as long as events use the standard Mobiscroll event structure (`title`, `start`, `end`, etc.).

## What this demo shows

- Shows a monthly agenda view with events listed and grouped by date.
- **Header navigation** The month and year label in the top left opens date navigation. The previous and next arrows and the Today button on the right move between months and jump back to the current date.
- **Agenda list** The area below the header lists events for the selected month. Events in the agenda are grouped by date.
- **Sticky day headers** As the agenda scrolls vertically, each day stays visible with a sticky date header while its events appear underneath.
- **Events** Events appear as agenda cards with a colored strip on the left and the event title next to it. Start and end times are stacked on the right side of timed events. All-day events show the all-day label on the right.
- **Event interaction** Hovering an event highlights it.
- **Event selection** Clicking an event selects and highlights it.

## Best for

- **Remote event loading examples** Showing how to fetch events from an API and pass them to the agenda view.
