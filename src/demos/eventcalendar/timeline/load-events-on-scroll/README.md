To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/load-events-on-scroll#).

## Demo description

The timeline view is virtualized which means that the markup is being generated and maintained on the fly. Navigating both vertically and horizontally through scrolling fires
the 

`onVirtualLoading`

 lifecycle event which can
be used to load the data on scroll rather than load everything on initial page rendering.

This dramatically improves performance in case of a large event count since not all data is loaded in memory from start.

- **Looking to load resources on scroll?** [Check out this example &#8594;](https://demo.mobiscroll.com/react/timeline/load-resources-on-scroll#)

## Related demos

- [Check out this example &#8594;](https://demo.mobiscroll.com/react/timeline/load-resources-on-scroll#)

## Implementation instructions

- Use `timeline: { type: 'month', resolutionHorizontal: 'hour' }` — a month view with hourly columns, creating a wide horizontally scrollable grid.
- Define 25 resources (Resource 1–25) with varied colors.
- **Scroll-triggered loading** is driven by `onVirtualLoading`, which fires whenever the user scrolls horizontally or vertically through the virtualized timeline. Inside the handler, read `args.viewStart` and `args.viewEnd` to get the currently visible time window, then build the API URL:
  ```
  https://trial.mobiscroll.com/load-data-scroll/?start=YYYY-MM-DD&end=YYYY-MM-DD
  ```
  Format both dates with `formatDate('YYYY-MM-DD', args.viewStart)` and `formatDate('YYYY-MM-DD', args.viewEnd)`.
- The endpoint returns a JSONP object with an `events` property (not a plain array). Read `data.events` after the fetch.
- Fetch via JSONP using `getJson(url, callback, 'jsonp')`. The endpoint returns an object — read `data.events`, not the raw response. After loading, call `inst.setEvents(data.events)` and show a `Toast` with `duration: 1000`.

## What this demo shows

- A desktop month timeline with days arranged horizontally and resources listed as rows on the left.
- **Loading events on scroll** A `Loading events...` toast appears at the bottom center of the timeline on initial load, month change, and vertical or horizontal timeline scrolling.
- **Virtual loading** Scrolling through the virtualized timeline fires the `onVirtualLoading` lifecycle event, which can be used to load events for the visible date range instead of loading all events during initial rendering.
- **Header navigation** The month and year label opens date navigation, the previous and next arrows move between months, and the Today button returns to the current date.
- **Month view** The strip below the header shows the days of the selected month, with the current date highlighted.
- **Timeline grid** The timeline displays hourly columns from 12 AM to 12 PM.
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

- **Large event datasets** Loading events only for the visible timeline range instead of loading every event up front.
- **Resource scheduling** Showing many resources in a timeline where users need to scroll vertically through rows and horizontally through dates.
- **Long-range planning views** Keeping month-based timeline navigation responsive while users move across a wider date range.
- **Performance-sensitive scheduling apps** Reducing initial page load work when the full event set is too large to keep in memory from the start.
