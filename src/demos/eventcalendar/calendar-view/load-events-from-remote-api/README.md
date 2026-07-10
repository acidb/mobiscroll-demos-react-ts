To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/load-events-from-remote-api#).

## Demo description

The calendar can be populated by passing an array to the `data` option, that you can construct either inline or by getting it from a remote API. The important thing to remember is that events need to be [in a format that the calendar understands](https://demo.mobiscroll.com/react/eventcalendar/event-data-structure#).

- **Interested in load on demand?** [Dynamically load events on month change &#8594;](https://demo.mobiscroll.com/react/eventcalendar/load-events-on-demand#)

## Related demos

- [Dynamically load events on month change &#8594;](https://demo.mobiscroll.com/react/eventcalendar/load-events-on-demand#)

## Implementation instructions

- Set `view: { calendar: { labels: true } }`.
- Use `getJson(url, callback, 'jsonp')` to fetch events from a remote endpoint. In the callback, set the received array as the calendar's `data`. Angular: use `HttpClient.jsonp()` instead of `getJson`. JS/jQuery: call `inst.setEvents(events)` on the calendar instance in the callback.

## What this demo shows

- A mobile month view event calendar is shown inside a smartphone frame.
- **Month grid** Days with events display event labels directly in the month cells with different visual styles based on the event type or event data.
- **Overflow handling** The number of visible event labels depends on the available height in each day cell. Additional events are collapsed behind an `X more` link.
- **Popover** Clicking the `X more` link opens a popover that shows the hidden events for that day.
- **Event interaction** Hovering over or selecting an event label highlights it.
- **Day cell states** Hovering a day cell highlights the day number with a gray background, while clicking the empty part of the cell selects the day and highlights the day number with a blue background.
- **Month navigation** You can move between months by clicking and dragging the calendar left or right.
- **Calendar header** The header shows the current month and year on the left, and blue month navigation arrows with a `Today` button (for jumping back to the current date) between them on the right.

## Best for

- **Remote event loading examples** Showing how to fetch events from an API and pass them to the event calendar view.
