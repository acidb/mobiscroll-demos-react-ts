To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/timeline-resource-details-side-panel-footer#).

## Demo description

The resources can be rendered vertically either as plain text or based on a custom grid template. This example utilizes the properties of the resource objects, which are conference rooms with capacities and pricing. Along with the resource template defined using `renderResource` , an additional sidebar is rendered on the opposite side of the row using @if (pagemode == PageMode.Angular) { `sidebarTemplate` } else if (pagemode == PageMode.Vue) { sidebar template } else { `renderSidebar` }, displaying the calculated revenue.

Both the resource and sidebar columns have customizable headers and footers, which are set using the renderResourceHeader,
renderResourceFooter,
renderSidebarHeader,
`renderSidebarFooter`
functions.

The occupancy percentages that can be seen for each day are set through the `renderDayFooter` in a similar way to the [day header templates](https://demo.mobiscroll.com/react/scheduler/custom-resource-header-template#).

The headers are equipped with sorting functionality, allowing data to be sorted on click.
Event listeners are attached to the resource, day, and sidebar headers, making them clickable.
Each header has a custom icon indicating the current sorting state (ascending, descending, or unordered).
Clicking a header cycles through these sorting states, with the corresponding icon reflecting the current state.
The [initial order](https://docs.mobiscroll.com/react/eventcalendar/timeline#resource-order)
in which the resources appear follows the order of the array passed to the component.

The resources column has a default width that may not be sufficient to fit its content. This can be adjusted by overriding it with a CSS rule:

```css
.md-resource-details .mbsc-timeline-resource-col {
width: 280px;
}
```

## Implementation instructions

- Use `timeline: { type: 'month' }` — a full-month view where each row is a conference room resource.
- Define 10 resources, each with `id`, `name`, `seats`, `color`, and `price` (per day). Resources also carry computed `revenue` and `busyHours` fields, updated at runtime.
- Load events from a remote JSON endpoint (`getJson`) — multiday booking events. On load, call a `refreshData()` function that reads all current calendar events, computes per-resource revenue, and updates the total.
- Enable all interactions: `clickToCreate: true`, `dragToCreate: true`, `dragToMove: true`, `dragToResize: true`.
- **Resource column — 3 sub-columns:** Each row shows name, seat count, and price. Implement this with `renderResource` / `resourceTemplate` / `resource` slot. Each row renders three `<div>` cells: name, `{seats} seats`, and `${price}`.
- **Resource column header:** Render three sortable header cells — "Room", "Capacity", "Price/day" — using `renderResourceHeader` / `resourceHeaderTemplate` / `resourceHeader` slot. Each cell is clickable; clicking cycles the sort state for that column (ascending → descending → default). Apply a CSS class (`mds-resource-sort-asc`, `mds-resource-sort-desc`, `mds-resource-sort-def`) to show the current sort arrow.
- **Resource column footer:** Render a static label "Occuppancy" using `renderResourceFooter` / `resourceFooterTemplate` / `resourceFooter` slot.
- **Sidebar column (right side):** Shows calculated revenue per resource using `renderSidebar` / `sidebarTemplate` / `sidebar` slot. Revenue = sum of `days × price` across all events booked on that resource in the visible month, where days = date difference between event start and end.
- **Sidebar header:** Render a sortable "Revenue" header using `renderSidebarHeader` / `sidebarHeaderTemplate` / `sidebarHeader` slot. Clicking it sorts resources by revenue with the same asc/desc/def cycle.
- **Sidebar footer:** Show the total revenue across all resources using `renderSidebarFooter` / `sidebarFooterTemplate` / `sidebarFooter` slot. Recompute on every event change.
- **Day column header:** Render each day's header as a clickable sort control using `renderTimelineDay` / `dayHeaderTemplate` / `dayHeader` slot. Clicking a day header sorts resources by `busyHours` on that day — total booked hours per resource for that specific date. Apply the same sort arrow CSS class as resource headers.
- **Day footer:** Show occupancy percentage per day using `renderDayFooter` / `dayFooterTemplate` / `dayFooter` slot. Occupancy = count of distinct resources that have at least one event on that day, divided by total resource count, expressed as a percentage.
- **Sorting logic:** Maintain `sortColumn`, `sortDirection` (asc/desc/def), and `sortDay` (the clicked day's timestamp, or null for resource-column sorts). Clicking the same column again cycles direction; clicking a different column resets to ascending. When `sortDirection` is `def`, restore original resource order (by `id`). Before sorting by `busyHours`, pre-compute `resource.busyHours` for the clicked day from the loaded events.
- **Data refresh:** Call `refreshData()` in `onPageLoading` (fires on initial load and month navigation) and after `onEventCreated`, `onEventDeleted`, and `onEventUpdated`. After refresh, re-apply the current sort so the order stays consistent.
- **Resource column width:** The demo requires a wider resource column to accommodate the three sub-cells. Override Mobiscroll's default width by targeting the internal `.mbsc-timeline-resource-col` class with a `min-width` or `width` rule scoped to the calendar's CSS class.

## What this demo shows

- A desktop month timeline where days are arranged horizontally and conference room resources are listed as rows.
- **Header navigation** The month and year label opens date navigation, while the previous and next arrows move between months and the Today button returns to the current date.
- **Month view** The day strip below the header shows the selected month, with the current date highlighted.
- **Resources** Each room is shown as a separate timeline row with custom resource details for room name, capacity, and price per day.
- **Sidebar revenue** A right-side sidebar column displays the calculated revenue for each resource over the visible month.
- **Resource summary** The resource footer shows an occupancy label, and the sidebar footer shows total revenue across all resources.
- **Day footer** Each day displays an occupancy percentage based on how many resources have bookings on that date.
- **Sorting** Resource, day, and sidebar headers are clickable and cycle through ascending, descending, and default sorting states.
- **Sorting indicators** Header icons show the current sorting state for each sortable column or day.
- **Event cards** Events are shown as colored cards with a left color stripe, a bold title, and the start and end time of the booking.
- **Date positioning** Events are positioned by assigned resource and exact date range.
- **Event interaction** Events highlight on hover and show drag and resize handles for moving bookings or changing their duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging across a date range.
- **Live summaries** Revenue, occupancy, and sorting data are recalculated when events are added, updated, deleted, or when the visible month changes.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through dates and resources.

## Best for

- **Venue booking** Showing room availability, capacity, pricing, and revenue in the same timeline view.
- **Hospitality timeline** Managing conference rooms, meeting spaces, or rentable areas with occupancy and revenue summaries.
- **Facility management** Comparing resource usage across a month while keeping operational details visible beside the timeline.
- **Coworking spaces** Tracking bookings for rooms or shared spaces with capacity, price, and utilization data.
- **Equipment rental** Scheduling rentable resources where availability, daily pricing, and revenue need to be reviewed together.
- **Operational reporting** Combining booking data with business metrics such as occupancy and revenue without leaving the timeline.
