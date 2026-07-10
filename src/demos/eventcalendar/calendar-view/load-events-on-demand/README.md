To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/load-events-on-demand#).

## Demo description

The event calendar supports [remote](https://demo.mobiscroll.com/react/eventcalendar/load-events-from-remote-api#) and [local data sources](https://demo.mobiscroll.com/react/eventcalendar/load-inline-data#). Besides that, events can be populated on initialization or loaded on demand.

Getting the events in real time as the user navigates improves load performance and always serves the most recent data.

Use the 

`onPageLoading`

 lifecycle event to load the data runtime. You can [learn about lifecycle events](https://demo.mobiscroll.com/react/eventcalendar/event-hooks#) and places where to drop logic to customize the experience.

- **Interested in loading events from Google Calendar?** [Show events from Google Calendar &#8594;](https://demo.mobiscroll.com/react/eventcalendar/load-events-from-google-calendar#)

## Related demos

- [Show events from Google Calendar &#8594;](https://demo.mobiscroll.com/react/eventcalendar/load-events-from-google-calendar#)

## Implementation instructions

- Set `view: { calendar: { labels: true } }`.
- Handle the `onPageLoading` event, which fires on the initial load and on each page change. The event argument includes a `month` property (a JS `Date`) — extract `year` and `month` from it to build the request URL. Vue: bind as `@page-loading` in the template.
- Inside the handler, call `getJson(url, callback, 'jsonp')` with a URL that includes `year` and `month` as query params. In the callback, set the returned array as the calendar's `data` and show a `Toast` with `'New events loaded'`. Angular: use `HttpClient.jsonp()` instead of `getJson` and the `Notifications` service for the toast. JS/jQuery: call `inst.setEvents(data)` on the calendar instance instead of updating reactive data; jQuery: use `$.getJSON()` instead of `getJson`.

## What this demo shows

- A mobile month view event calendar is shown inside a smartphone frame.
- **Month grid** Day cells display events, each label has a colored line on the left, the event title, and an `end` value that shows the event end time.
- **Loading events on demand** On the initial load or month change, a `New events loaded` toast appears at the bottom center of the calendar. This indicates that the events were loaded real time.
- **Event interaction** Hovering over or selecting an event label highlights it.
- **Day cell states** Hovering a day cell highlights the day number with a gray background, while clicking the empty part of the cell selects the day and highlights the day number with a blue background.
- **Month navigation** You can move between months by clicking and dragging the calendar left or right.
- **Calendar header** The header shows the current month and year on the left, and blue month navigation arrows with a `Today` button (for jumping back to the current date) between them on the right.

## Best for

- **On-demand event loading** Explaining how to load calendar events as the user navigates between months.
- **Performance-sensitive calendars** Reducing the initial data load by fetching only the events needed for the currently visible date range.
- **Live data scenarios** Showing the most recent event data by requesting it when the calendar view changes.
- **Month-view event calendars** Demonstrating lazy loading in a month grid where users browse forward and backward through dates.
