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
