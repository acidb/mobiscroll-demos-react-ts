To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/load-events-on-demand#).

## Demo description

The agenda supports [remote](https://demo.mobiscroll.com/react/agenda/load-events-from-remote-api#) and [local data sources](https://demo.mobiscroll.com/react/agenda/load-inline-data#). Besides that, events can be populated on initialization or loaded on demand.

Getting the events in real time as the user navigates improves load performance and always serves the most recent data.

Use the `onPageLoading` lifecycle event to load the data runtime. You can [learn about lifecycle events](https://demo.mobiscroll.com/react/agenda/event-hooks#) and places where to drop logic to customize the experience.

- **Interested in loading events from Google Calendar?** [Show events from Google Calendar →](https://demo.mobiscroll.com/react/agenda/load-events-from-google-calendar#)

## Related demos

- [Show events from Google Calendar →](https://demo.mobiscroll.com/react/agenda/load-events-from-google-calendar#)

## Implementation instructions

- Use `view: { agenda: { type: 'month' } }`. Wire the `onPageLoading` event to fetch events for the newly visible page. In the handler, extract the year and month from `args.firstDay` (or `args.month` depending on framework) and build the request URL: `https://trial.mobiscroll.com/monthlyevents/?year={year}&month={month}&vers=5`.
- Fetch the data via JSONP using `getJson(url, callback, 'jsonp')`. Angular: use `HttpClient.jsonp()`. jQuery: `$.getJSON(url+'&callback=?', callback)`. For the imperative API, call `inst.setEvents(events)` in the callback. Replace the entire events array on each page change — do not accumulate.
- Show a Toast with "New events loaded" after each successful fetch to confirm the data refresh.

## What this demo shows

- Shows a monthly agenda view with events listed and grouped by date.
- **Loading events on demand** On the initial load or day change, a `New events loaded` toast appears at the bottom center of the timeline. This indicates that the events were loaded real time.
- **Header navigation** The month and year label in the top left opens date navigation. The previous and next arrows and the Today button on the right move between months and jump back to the current date.
- **Agenda list** The area below the header lists events for the selected month. Events in the agenda are grouped by date.
- **Sticky day headers** As the agenda scrolls vertically, each day stays visible with a sticky date header while its events appear underneath.
- **Events** Events appear as agenda cards with a colored strip on the left and the event title next to it. Start and end times are stacked on the right side of timed events. All-day events show the all-day label on the right.
- **Event interaction** Hovering an event highlights it.
- **Event selection** Clicking an event selects and highlights it.

## Best for

- **On-demand event loading** Explaining how to load agenda events as the user navigates between months.
- **Performance-sensitive calendars** Reducing the initial data load by fetching only the events needed for the currently visible date range.
- **Live data scenarios** Showing the most recent event data by requesting it when the agenda view changes.
