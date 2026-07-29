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

## What this demo shows

- A desktop daily timeline where hours are arranged horizontally and resources arranged vertically on the left.
- **Header navigation** The month and year label opens date navigation, while the previous and next arrows move between days and the Today button returns to the current date.
- **Day view** The strip below the header shows the selected days, with the current date highlighted. The timeline displays hourly columns from 12 AM to 12 PM.
- **Resources** Multiple resources are shown as separate timeline rows.
- **Current time** A vertical blue line with a time label marks the current time.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event cards** Events appear as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed below the title.
- **Date positioning** Events are positioned by their assigned resource and exact date range.
- **Event interaction** Events highlight on hover and show drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging across a time range.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through time and resources.

## Best for

- **Remote event loading examples** Showing how to fetch events from an API and pass them to the timeline view.
