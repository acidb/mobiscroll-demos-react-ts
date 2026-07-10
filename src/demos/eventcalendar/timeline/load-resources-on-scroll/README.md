To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/load-resources-on-scroll#).

## Demo description

The timeline view is virtualized which means that the markup is being generated and maintained on the fly. Navigating both vertically and horizontally through scrolling fires
the 

`onVirtualLoading`

 lifecycle event which can
be used to load the data on scroll rather than load everything on initial page rendering.

This dramatically improves performance in case of a large event and resource count since not all data is loaded in memory from start.

- **Looking to load events on scroll?** [Check out this example &#8594;](https://demo.mobiscroll.com/react/timeline/load-events-on-scroll#)

## Related demos

- [Check out this example &#8594;](https://demo.mobiscroll.com/react/timeline/load-events-on-scroll#)

## Implementation instructions

- Use `timeline: { type: 'month', resolutionHorizontal: 'hour' }` — same wide scrollable grid as the `load-events-on-scroll` demo.
- Start with 25 pre-defined resources (Resource 1–25), plain `{ id, name }` objects with no colors. No initial events — the events array starts empty and is populated by the first `onVirtualLoading` call.
- **`onVirtualLoading` handler** — fires on every scroll, both horizontal and vertical. It loads events for the visible time window, and also appends more resources when the user scrolls past the bottom of the currently loaded list:

  1. Format `args.viewStart` / `args.viewEnd` as `YYYY-MM-DD` using `formatDate`.
  2. **Detect whether more resources are needed**: `isEndLoaded = resources[resources.length - 1].id > args.resourceEnd`. When `isEndLoaded` is `false`, the viewport has scrolled past the last loaded resource — show the Toast "Loading Resources..." with `duration: 1000`.
  3. Build the API URL with four query params:
     ```
     https://trial.mobiscroll.com/load-data-scroll/?start=...&end=...&rstart={args.resourceStart}&rend={args.resourceEnd}&load={!isEndLoaded ? args.resourceEnd : 0}
     ```
     - `rstart` / `rend` — the index range of currently visible resource rows.
     - `load` — signals the server how many resources to return: set to `args.resourceEnd` when new resources are needed, `0` otherwise.
  4. On response:
     - If `data.resources` is present: append new resources to the existing list and update events.
     - Otherwise: update events only (no new resources for this scroll position).

- **State update after fetch**: spread new resources into the existing array (`[...resources, ...data.resources]`) and update events; for the imperative API, use `inst.setOptions({ resources: updatedList, data: data.events })` when resources change, or `inst.setEvents(data.events)` when only events change.
