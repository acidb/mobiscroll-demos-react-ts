To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/show-summaries-aggregates-for-resource-groups#).

## Demo description

When scheduling across multiple groups of resources it sometimes is helpful to provide summaries and aggregate calculations on a group level. These dynamically calculated values can be presented as custom templated events in resource parent rows.
Whenever new bookings are made, updated or deleted, use the 

`onEventCreated`

,

`onEventUpdated`

 and

`onEventDeleted`

 lifecycle events to update the aggregates for their parent resource.

As we are working with variable event heights, make sure to set `eventHeight: 'variable'`
which can be configured under the `view`. This is necessary if the actual booked events have a different height than the summary events (for parent resources).

- **Variable event height is an experimental feature.** [Learn more about it in the documentation &#8594;](https://docs.mobiscroll.com/react/eventcalendar/timeline#variable-event-height)

## Implementation instructions

- Use `timeline: { type: 'week', eventDisplay: 'fill', eventHeight: 'variable' }`. `eventHeight: 'variable'` is required because summary events on parent rows and regular events on child rows have different heights.
- Restrict the calendar to a 2-week window centered on today: `min: dyndatetime('y,m,d-7')`, `max: dyndatetime('y,m,d+6')`.
- Define 3 parent resource groups (by city), each with 3 child vehicle resources. Use city-prefixed IDs to establish parent–child relationships (e.g. `orlando`, `orlando_1`, `orlando_2`, `orlando_3`). Parent resources carry `name`, `address`, `color: 'transparent'`, and `eventCreation: false`, `eventDragBetweenResources: false`, `eventDragInTime: false`, `eventResize: false` — they display summary data only and cannot be booked directly. Child resources carry `car`, `plate`, and `type` as custom properties.
- Add ~66 regular events (all `allDay: true`), each assigned to a child resource. Every event carries two custom numeric properties: `distance` (miles) and `consumption` (gallons). Use `dyndatetime` offsets relative to today for dates.
- Enable `clickToCreate: true`, `dragToMove: true`. Set `dragToCreate: false`, `dragToResize: false`, `eventOverlap: false`. Provide `extendDefaultEvent` to supply defaults for newly created events (`title: 'New event'`, `name: 'John Doe'`, `distance: 42`, `consumption: 6`, `allDay: true`).
- **Summary (aggregate) events** — generated programmatically, not from user input:
  - For each visible day and each parent resource, create one summary event object: `{ id: parentId + dayTimestamp, isSummary: true, allDay: true, start: day, end: day, resource: parentId, distance: 0, consumption: 0 }`.
  - Iterate over all non-summary events; for each, derive the parent resource ID by splitting the child resource ID on `_` (e.g. `'orlando_1'.split('_')[0]` → `'orlando'`). Add the event's `distance` and `consumption` to the matching (parent, day) summary object.
  - Estimated cost is computed in the render layer: `Math.round(consumption * 3.706)`.
  - Merge the original events and the generated summaries into a single array and pass it to the calendar's `data` prop.
- **Refresh cycle**: Store original events in a mutable ref (not state). On `onPageLoading`, capture `args.firstDay` / `args.lastDay`, then call the aggregate recalculation in a `setTimeout`. On `onEventCreated`, `onEventUpdated`, and `onEventDeleted`, update the events ref and call the same recalculation.
- **Custom resource column** (`renderResource` / `resourceTemplate` / `resource` slot): check `res.isParent` — if true, render `name` + `address`; otherwise render `car`, licence plate, and vehicle type.
- **Custom event content** (`renderTimelineEventContent` / `timelineEventContentTemplate` / `timeline-event-content` slot): check `event.currentResource.isParent` — if true (summary row), render "Total dist.", "Total cons.", "Est. cost" aggregates; otherwise render the booking title, driver name, estimated distance/consumption, and formatted pick-up / drop-off times using `formatDate('hh:mm A', ...)`.
