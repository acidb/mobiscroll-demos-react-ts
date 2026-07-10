To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/load-events-from-remote-api#).

## Demo description

The timeline can be populated by passing an array to the `data` option, that you can construct either inline or by getting it from a remote API. The important thing to remember is that events need to be [in a format that the timeline understands](https://demo.mobiscroll.com/react/timeline/event-data-structure#).

- **Interested in load on demand?** [Dynamically load events on month change &#8594;](https://demo.mobiscroll.com/react/timeline/load-events-on-demand#)

## Related demos

- [Dynamically load events on month change &#8594;](https://demo.mobiscroll.com/react/timeline/load-events-on-demand#)

## Implementation instructions

- Use `timeline: { type: 'day' }` — a single-day view.
- Define 6 named resources: Ryan (yellow `#fdf500`), Kate (orange `#ff4600`), John (red `#ff0101`), Mark (green `#239a21`), Sharon (purple `#8f1ed6`), Ashley (blue `#01adff`).
- On mount, fetch events from `https://trial.mobiscroll.com/timeline-events/` via JSONP using `getJson(url, callback, 'jsonp')`. In the callback, pass the returned array to the calendar — call `inst.setEvents(events)` for the imperative API.
