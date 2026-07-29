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

## What this demo shows

- A desktop daily timeline where hours are arranged horizontally and resources arranged vertically on the left.
- **Loading events on demand** On the initial load or day change, a `New events loaded` toast appears at the bottom center of the timeline. This indicates that the events were loaded real time.
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

- **On-demand event loading** Explaining how to load timeline events as the user navigates between days.
- **Performance-sensitive calendars** Reducing the initial data load by fetching only the events needed for the currently visible date range.
- **Live data scenarios** Showing the most recent event data by requesting it when the timeline view changes.
