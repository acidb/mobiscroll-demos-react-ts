To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/load-events-from-remote-api#).

## Demo description

The scheduler can be populated by passing an array to the `data` option, that you can construct either inline or by getting it from a remote API. The important thing to remember is that events need to be [in a format that the scheduler understands](https://demo.mobiscroll.com/react/scheduler/event-data-structure#).

- **Interested in load on demand?** [Dynamically load events on month change &#8594;](https://demo.mobiscroll.com/react/scheduler/load-events-on-demand#)

## Related demos

- [Dynamically load events on month change &#8594;](https://demo.mobiscroll.com/react/scheduler/load-events-on-demand#)

## Implementation instructions

- Use a combined view: `view: { calendar: { type: 'week' }, scheduler: { type: 'day' } }` — a week calendar strip above and a day scheduler below.
- Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. For the imperative API, call `inst.setEvents(events)` in the callback.

## What this demo shows

- A mobile daily scheduler view with a fixed week strip at the top, a fixed all-day row below it, and a scrollable time grid for the selected day.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between dates and jump back to the current day.
- **Week view** The fixed week strip below the header shows the surrounding dates for quick day switching. Dates highlight on hover, and the selected day is marked with a blue circle.
- **All-day events** All-day events are displayed in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler below the all-day row scrolls vertically through the hours of the selected day.
- **Hover feedback** Hovering the time grid shows a time indicator that follows the pointer in 15-minute increments.
- **Event rendering** Events appear as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Event interactions** Hovering an event highlights it and shows resize and drag handles, indicating that events can be resized or repositioned.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.
- **Event selection** Clicking an event selects and highlights it.
- **Current time** A blue line across the scheduler indicates the current time.

## Best for

- **Remote event loading examples** Showing how to fetch events from an API and pass them to the scheduler view.
