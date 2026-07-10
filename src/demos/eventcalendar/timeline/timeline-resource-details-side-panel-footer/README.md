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
