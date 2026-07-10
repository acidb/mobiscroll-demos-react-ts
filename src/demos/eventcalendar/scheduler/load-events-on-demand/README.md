To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/load-events-on-demand#).

## Demo description

The scheduler supports [remote](https://demo.mobiscroll.com/react/scheduler/load-events-from-remote-api#) and [local data sources](https://demo.mobiscroll.com/react/scheduler/load-inline-data#). Besides that, events can be populated on initialization or loaded on demand.

Getting the events in real time as the user navigates improves load performance and always serves the most recent data.

Use the 

`onPageLoading`

 lifecycle event to load the data runtime. You can [learn about lifecycle events](https://demo.mobiscroll.com/react/scheduler/event-hooks#) and places where to drop logic to customize the experience.

- **Interested in loading events from Google Calendar?** [Show events from Google Calendar &#8594;](https://demo.mobiscroll.com/react/scheduler/load-events-from-google-calendar#)

## Related demos

- [Show events from Google Calendar &#8594;](https://demo.mobiscroll.com/react/scheduler/load-events-from-google-calendar#)

## Implementation instructions

- Use `view: { scheduler: { type: 'day' } }`.
- **On-demand loading** is driven by `onPageLoading`, which fires on every page navigation. Inside the handler, read the year, month, and day from the event args — React/Vue use `args.month`; Angular/JS/jQuery use `args.firstDay` — then build `https://trial.mobiscroll.com/weeklyevents/?year=YYYY&month=M&day=D`.
- Fetch via JSONP: React/Vue call `getJson(url, callback, 'jsonp')`; JS calls `mobiscroll.getJson(url, callback, 'jsonp')`; jQuery calls `$.getJSON(url + '&callback=?', callback)`; Angular uses `HttpClient.jsonp()`. React/Angular/JS/jQuery map each returned item to `{ start, end: item.end || '', allDay, title, color }` before setting events; Vue sets the raw response directly. Imperative API (JS/jQuery): call `inst.setEvents(events)` in the callback. Show a `Toast` with `"New events loaded"` after each load.

## What this demo shows

- A mobile daily scheduler view with a fixed week strip at the top, a fixed all-day row below it, and a scrollable time grid for the selected day.
- **Loading events on demand** On the initial load or month change, a `New events loaded` toast appears at the bottom center of the Scheduler. This indicates that the events were loaded real time.
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

- **On-demand event loading** Explaining how to load scheduler events as the user navigates between months.
- **Performance-sensitive calendars** Reducing the initial data load by fetching only the events needed for the currently visible date range.
- **Live data scenarios** Showing the most recent event data by requesting it when the scheduler view changes.
