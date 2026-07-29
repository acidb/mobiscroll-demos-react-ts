To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/dynamic-calculation-resource-sort#).

## Demo description

For advanced resource sorting and ordering calculations, sorting just by resource properties might not be enough.
In those situations you can provide a modal or popup that is invoked either from outside of the calendar
or from within the calendar header itself and you can get as sophisticated as you have to.

In this example trucks are listed as resources along with the scheduled tours as events. The sort popup that can be invoked from the header through templating allows you to perform calculations based on truck parameters and tour events. Once the calculation options are selected, the resulting metrics are displayed in the resources column, dynamically updating to reflect the results using the @if (pagemode == PageMode.Angular) { `resourceTemplate` } else if (pagemode == PageMode.Vue) { `resource` } else { `renderResource` } templating option.

Since the tours affect the resource order, on new event creation or reassignment a
[snackbar](https://demo.mobiscroll.com/react/forms/notifications#)
is shown with a 3 second timer and a "Sort now" button for an instant order update.

## Implementation instructions

- Use `timeline: { type: 'week', resolutionHorizontal: 'day' }` — a week view with a column per day.
- Define 14 truck resources, each with `id`, `name`, `capacity` (tons), `location`, and `model`. Resources also carry computed fields (`standby`, `deadhead`, `payload`) that are recalculated after every event change.
- Add 23 tour events with `dyndatetime` offsets around today. Each event carries a `payload` property (tons carried; `0` = empty/deadhead run) and a `color`. Enable all interactions: `clickToCreate: true`, `dragToCreate: true`, `dragToMove: true`, `dragToResize: true`, `eventOverlap: false`. When a new event is created, assign it a random payload (5–17 tons) in `onEventCreated`.
- **Three metrics**, all calculated per resource against the currently visible week (`weekStart` / `weekEnd` captured from `onPageLoading`'s `args.firstDay` / `args.lastDay`):
  - **Standby time** (hours): `168` minus the total hours the truck is on tour within the week. Clamp event start/end to week boundaries before computing overlap.
  - **Deadhead time** (hours): hours within the week where the truck is on a tour with `payload === 0` (empty runs).
  - **Payload efficiency** (%): `Math.round((sum of tour payloads / number of tours / truck capacity) * 100)`. Returns 0 if no tours.
- **Sorting**: Sort the resource array by the active `sortColumn` (`'standby'`, `'payload'`, or `'deadhead'`) in `sortDirection` (`'asc'` or `'desc'`). Ties are broken by `name`. Default: standby time ascending.
- **Sort popup** (`Popup`, display `'anchored'`, anchored to the "Sort Trucks" button): Contains a `RadioGroup` with three metric options and a `SegmentedGroup` for ascending/descending. Changes are staged in temporary state until "Apply" is clicked — Apply commits the selection, closes the popup, and shows a `Toast` "Resources sorted". Cancel discards changes.
- **Snackbar on event changes**: After any event created/deleted/updated that affects the metric, open a `Snackbar` (3-second auto-dismiss, "Sort now" button, `display: 'center'`). When the snackbar closes (either by timer or the button), sort the resources, navigate the calendar to the affected event using `calRef.current.navigateToEvent(...)`, and briefly apply `cssClass: 'mbsc-timeline-parent-hover'` to the resource row for a highlight animation (clear after 1 second). Increment a `snackbarKey` on each new event change to restart the snackbar timer from zero.
- **`onPageLoading`**: Capture `firstDay`/`lastDay`, then recalculate metrics and sort in a `setTimeout`.
- **Custom resource column header** (`renderResourceHeader` / `resourceHeaderTemplate` / `resourceHeader` slot): Static "Trucks" label.
- **Custom resource row** (`renderResource` / `resourceTemplate` / `resource` slot): Shows truck name (bold), model, capacity in tons, then the currently active metric label + value + unit (`h` for time-based metrics, `%` for payload). Below that, render a colored progress bar: green if ≤ 33%, yellow if ≤ 66%, red if > 66%. For payload efficiency the bar value equals the metric percentage directly; for standby/deadhead, compute `(metricValue / 168) * 100`. Apply a brief CSS animation class on the bar immediately after a sort.
- **Custom event content** (`renderTimelineEventContent` / `timelineEventContentTemplate` / `timeline-event-content` slot): Shows the tour title and a payload line — `"X T"` if payload > 0, `"empty"` otherwise.
- **Custom header** (`renderHeader` / `headerTemplate` / `header` slot): `CalendarPrev`, `CalendarNext`, `CalendarNav`, then a "Sort Trucks" `Button` with a bars icon aligned to the right.

## What this demo shows

- A desktop timeline that displays one week at a time, with days arranged horizontally and trucks listed as resources on the left.
- **Header navigation** The month and year label opens date navigation, while the blue previous and next arrows move between weeks.
- **Week view** The timeline shows the selected week from Sunday to Saturday, with the current date highlighted.
- **Resources** Trucks are displayed as separate resource rows, each with model, capacity, and the currently active calculated metric.
- **Sorting panel** In the header the Sort Trucks button opens a custom sort popup that lets users choose which metric controls the resource order.
- **Sort metrics** Resources can be sorted by Standby Time, Payload Efficiency, or Deadhead Time.
- **Sort direction** Users can choose ascending or descending order before applying the new sort.
- **Staged sorting** Sort options are staged until Apply is clicked, while Cancel leaves the current resource order unchanged.
- **Automatic reordering** Resources are reordered from calculated business metrics rather than a fixed resource order.
- **Metric display** The calculated metric is shown directly in each resource row, with a progress bar that reflects the active value.
- **Event cards** Tour events show the tour title and payload value, or an empty-run label when the payload is zero.
- **Date positioning** Events are positioned by their assigned truck and exact date range.
- **Event interaction** Events highlight on hover and show drag and resize handles for moving tours or changing their duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging across a time range.
- **Event changes** When a tour is created, deleted, updated, or reassigned, a snackbar appears with a 3-second timer and a "Sort now" action.
- **Delayed sorting** The snackbar lets users apply the new order immediately or wait for the timed update.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through days and truck rows.

## Best for

- **Fleet dispatching** Scheduling tours across trucks while keeping the resource order aligned with current operating metrics.
- **Logistics planning** Comparing vehicles by standby time, deadhead time, or payload efficiency in a weekly timeline.
- **Transportation operations** Identifying underused, overused, or inefficient trucks without manually scanning every assignment.
- **Asset management** Organizing resources automatically based on calculated performance data.
- **Operational dashboards** Combining scheduled work with resource-level metrics in the same timeline view.
- **Custom resource ordering** Building scheduler interfaces where resource order depends on event data, calculated values, or user-selected KPIs.
