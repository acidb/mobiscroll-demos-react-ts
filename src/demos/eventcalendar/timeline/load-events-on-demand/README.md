To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/load-events-on-demand#).

## Demo description

The timeline supports [remote](https://demo.mobiscroll.com/react/timeline/load-events-from-remote-api#) and [local data sources](https://demo.mobiscroll.com/react/timeline/load-inline-data#). Besides that, events can be populated on initialization or loaded on demand.

Getting the events in real time as the user navigates improves load performance and always serves the most recent data.

Use the 

`onPageLoading`

 lifecycle event to load the data runtime. You can [learn about lifecycle events](https://demo.mobiscroll.com/react/timeline/event-hooks#) and places where to drop logic to customize the experience.

- **Interested in loading events from Google Calendar?** [Show events from Google Calendar &#8594;](https://demo.mobiscroll.com/react/scheduler/load-events-from-google-calendar#)

## Related demos

- [Show events from Google Calendar &#8594;](https://demo.mobiscroll.com/react/scheduler/load-events-from-google-calendar#)

## Implementation instructions

- Use `timeline: { type: 'day' }` — a single-day view.
- Define 5 resources: Resource A (yellow `#fdf500`), Resource B (red `#ff0101`), Resource C (blue `#01adff`), Resource D (green `#239a21`), Resource E (orange `#ff4600`).
- **On-demand loading** is driven by `onPageLoading` (Vue: `@page-loading`), which fires on every page navigation. Inside the handler, read `args.firstDay` to get the first visible day, then build the API URL:
  ```
  https://trial.mobiscroll.com/weeklyevents/?year=YYYY&month=M&day=D
  ```
  using `args.firstDay.getFullYear()`, `args.firstDay.getMonth()`, `args.firstDay.getDate()`.
- The endpoint returns a JSONP array. Map each item to `{ start, end, title, resource }` and push to a new array, then set it as the calendar's events.
- After loading completes, show a Toast with message `"New events loaded"`.
- Fetch via JSONP using `getJson(url, callback, 'jsonp')`. In the callback, map each returned item to `{ start, end, title, resource }`, set as the calendar's events, and show a `Toast` with `"New events loaded"`. Use `inst.setEvents(events)` for the imperative API.
