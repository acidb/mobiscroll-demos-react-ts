To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/event-grouping-bulk-action#).

## Demo description

When managing a large volume of events across multiple clients and time periods, handling items one by one quickly becomes inefficient.
Users often need to move entire sets of related tasks together, not individual events. To support this, grouping and bulk interaction are essential.

The starting point is being able to look at the same dataset through different lenses. The demo supports switching between an assignee view, where each row represents a person responsible for the work, and a work type view, where each row represents a task category. A segmented control in the header allows adjusting the time granularity of the timeline while keeping a full year in view, enabling users to switch between quarterly, monthly, or weekly breakdowns. The view selector, grouping toggle, and segmented control are all rendered via the [renderHeader](https://docs.mobiscroll.com/react/eventcalendar/timeline#renderer-renderHeader)
function, keeping the controls integrated into the timeline header. The @if (pagemode == PageMode.Angular) { [resourceTemplate option](https://docs.mobiscroll.com/react/eventcalendar/timeline#template-resourceTemplate) } else if (pagemode == PageMode.Vue) { [resource slot](https://docs.mobiscroll.com/react/eventcalendar/timeline#slot-resource) } else { [renderResource function](https://docs.mobiscroll.com/react/eventcalendar/timeline#renderer-renderResource) } adapts the resource column accordingly, displaying employee avatars and job titles in assignee view, and work type color indicators in type view.

Once the right perspective is selected, individual events are not rendered one by one. Using the [renderTimelineEvent](https://docs.mobiscroll.com/react/eventcalendar/timeline#renderer-renderTimelineEvent)
function, related tasks are automatically grouped into consolidated blocks per client and per quarter. These blocks can be expanded to reveal the individual tasks inside, or collapsed to keep the timeline readable at scale.

With grouping in place, bulk interaction becomes natural. An entire grouped block can be dragged along the timeline, moving all underlying events simultaneously.
The system calculates the time delta and applies it uniformly to every event in the group.
At the same time, individual tasks within a group remain accessible and can be edited through the edit button, which opens a range picker to update the event dates.
Because both views are projections of the same event store, a change made in one view is immediately reflected in the other.

## Implementation instructions

- Use `type: 'year'` with `resolutionHorizontal` driven by a `zoomLevel` state (values: `'quarter'`, `'month'`, `'week'`) and `eventHeight: 'variable'` to accommodate collapsible grouped event blocks.
- Define two separate resource arrays: `assigneeResources` (employees with `name`, `title`, `color`, `img`) and `typeResources` (work categories with `name`, `color`). Keep a `groupBy` state (`'assignee'` or `'type'`) and pass the matching array to `resources`. When `groupBy` is `'type'`, the event's `type` field is used as the `resource` key; when `'assignee'`, the `resource` field is used.
- Keep a `groupByClientQuarter` boolean toggle state. When disabled, map each event to a display-ready object with the correct resource key for the current `groupBy` mode. When enabled, compute grouped events instead.
- To compute grouped events, group the flat event array by `(resourceId, clientGroup, year, quarter)`. For each group, create a synthetic event object with a `title` (client name), a `start` (earliest start), an `end` (latest end), a `count`, an `originalEvents` array, and a `collapsed` flag read from a `collapsedMap` state (defaulting to `true`).
- Use `renderTimelineEvent` (Angular: `timelineEventTemplate`, Vue: `timelineEvent`) for event rendering. When `groupByClientQuarter` is on, render the grouped block; when off, render a simple individual event with the event title, date range, and either a type color dot or an assignee avatar.
- The grouped event block shows the client group name, a formatted date range, a task count and unique type/employee count, and a collapse/expand arrow button. When expanded, render each original event as a proportional mini bar positioned by its relative offset within the group's time span using computed `marginLeft` and `width` percentages.
- On the collapse arrow click, call `stopPropagation`, toggle the group's key in `collapsedMap`, and call `calendarRef.current.refresh()` after a short timeout to force Mobiscroll to recalculate event heights.
- Each expanded original event has a pencil icon button. On click, call `stopPropagation` and open a `Datepicker` in `select: 'range'` and `controls: ['calendar']` mode centered on screen, pre-populated with the event's current dates.
- In the `Datepicker` `onChange` handler, if the new dates move the event to a different quarter and grouping is on, show a `Confirm` dialog before applying. Store the apply callback in a ref so the `onOk` handler can execute it after the user confirms.
- In `onEventUpdate`, distinguish drag-move from drag-resize by comparing start and end deltas. For a grouped event move, shift all `originalEvents` by the same time delta. For a resize, proportionally remap each child's start and end within the new group span. After applying, update the `collapsedMap` with a new key reflecting the event's new quarter. In non-grouped mode, update the single event's dates and, if the resource row changed, update the event's `resource` or `type` field accordingly.
- Set `dragBetweenResources` to `true` in non-grouped mode and `false` in grouped mode (a single expression: `!groupByClientQuarter`). Keep `dragToMove: true` and `dragToResize: true`; disable `clickToCreate` and `dragToCreate`.
- Use `renderResource` (Angular: `resourceTemplate`, Vue: `resource`) to show a photo, name, and title for assignee resources, and a colored badge with name for type resources.
- Use `renderHeader` (Angular: `headerTemplate`, Vue: `header`) to render `CalendarNav`, a `Checkbox` for the group toggle, a `Select` for switching between assignee and type views, a `SegmentedGroup` with three `Segmented` controls for zoom level, and `CalendarPrev`/`CalendarToday`/`CalendarNext`.

## What this demo shows

- A desktop monthly timeline for event grouping and bulk actions, with January to December months arranged horizontally and resources arranged vertically on the left.
- **Header navigation** The year label in the top left opens month navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between months and jump back to the current day.
- **Custom parts of the header** In the header there are three custom options all arranged to the right but before the navigation arrows and today button: a checkable Group by Client/Quarter option, allows related projects to be organized by customer and reporting period. Next to it a dropdown select from which the user can select to show resourses view by ASssignee or View by Type. The last option is a segmented button with which you can change the zoom level of the calendar by default is set to Monthly, but you can change to Quearterly or Weekly.
- **Month view** The fixed strip below the header shows the selected years months from January to December, with the current month highlighted.

## Best for

- **Portfolio management** Reviewing client or portfolio-level work across a full year while keeping individual projects available on demand.
- **Program planning** Coordinating multiple related projects by customer, quarter, assignee, or project type.
- **Enterprise project roadmaps** Showing long-running initiatives with expandable summary rows and detailed project cards in the same timeline.
- **Capital project tracking** Planning installation, maintenance, inspection, upgrade, and repair work across months or quarters.
- **Long-term resource planning** Comparing workload by employee or work category without changing the underlying project data.
- **Bulk schedule adjustments** Moving grouped project work together when related tasks need to shift as a set.
