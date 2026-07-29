To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/dynamic-cell-content-template#).

## Demo description

Dynamically customize the cell content of the timeline by showing event-related icons, visual indicators, and a quick add button directly in each cell.

This is achieved using the [renderCell](https://docs.mobiscroll.com/react/eventcalendar/timeline#renderer-renderCell)
function, where event data in each cell is used to display icons based on the event, a badge showing total event hours, and a button to quickly add new events. The add event icon is dynamically added during [onCellHoverIn](https://docs.mobiscroll.com/react/eventcalendar/timeline#event-onCellHoverIn). An event cap per cell is implemented by reading the event count from [onCellHoverIn](https://docs.mobiscroll.com/react/eventcalendar/timeline#event-onCellHoverIn) args and enforcing it in [onEventCreate](https://docs.mobiscroll.com/react/eventcalendar/timeline#event-onEventCreate), blocking event creation by returning `false`. This approach helps visualize workload per day and enables quick actions, making scheduling more efficient and user-friendly.

In this demo, cells represent a day. Depending on the resolution, they can also stand for a week, month, or more, while remaining fully customizable.
See this
[configuration demo](https://demo.mobiscroll.com/react/timeline/multiple-days-weeks-months-quarters-years-variable-resolution#)
to try out different timeline resolution settings.

## Implementation instructions

- Use `timeline: { type: 'month', resolutionHorizontal: 'day', startDay: 1, endDay: 5, eventDisplay: 'fill' }` — a monthly timeline with one column per day, Mon–Fri only, events listed as fills rather than positioned by time.
- Define 4 plain resources (Resource A–D) with only `id` and `name` — no `color` needed. Events have no `color` either; the cell badge provides the workload indicator instead.
- Build an `iconMap` that maps event title strings to Mobiscroll icon names (e.g. `Review → 'calendar'`, `Demo → 'play'`, `Kickoff → 'flag'`). Use the keys of this map as the pool of valid event titles.
- Use `renderCell` (Angular: `cellTemplate`, Vue: `#cell`) to inject content into each timeline cell. The render function receives a `cell` object with `cell.events` (the events on that cell), `cell.date`, and `cell.resource`. From `cell.events`, compute the total scheduled hours by summing each event's duration, and render: a workload badge showing `{hours}h / 8h`, a "+" add button, and a row of deduplicated event-type icons (one icon per distinct title using `mbsc-icon-{iconName}`).
- Use `renderTimelineEventContent` (Angular: `timelineEventContentTemplate`, Vue: `#timelineEventContent`) to render a compact event label showing the event title and its duration in hours, calculated from `event.endDate` and `event.startDate`.
- In the "+" button's click handler, read `cell.events.length`. If it is 4 or more, show a `Toast` with "Task limit reached" and return early. Otherwise, add a new event to the events array with `start: cell.date`, `end: 2 hours later`, `resource: cell.resource.id`, and a random title from the titles pool. In Angular, call `stopPropagation()` on the click event to prevent the calendar from handling it.
- Use `extendDefaultEvent` returning a random title from the titles pool and an `end` 2 hours after `args.start`, so the same defaults apply to any events created via other means.
- Disable all built-in interaction: set `clickToCreate`, `dragToCreate`, `dragToMove`, and `dragToResize` all to `false`.

## What this demo shows

- A desktop monthly timeline where days are arranged horizontally and resources are listed as rows on the left.
- **Header navigation** The month and year label opens date navigation, the previous and next arrows move the visible timeline range, and the Today button returns to the current date.
- **Month view** The timeline header shows the days of the selected month, with the current date highlighted.
- **Resources** Multiple resources are displayed as separate timeline rows.
- **Custom cell content** Each resource-day cell shows scheduled hours against available working hours, such as `8h`.
- **Workload indicators** Color-coded badges show resource utilization at a glance, including fully utilized, partially utilized, and overloaded or underutilized states based on the configured rules.
- **Task overview** Individual tasks remain visible beneath the workload summary, so each cell shows both daily capacity and scheduled work.
- **Dynamic summaries** Workload totals reflect the current events in the cell when event data changes.
- **Status icons** Custom icons can represent task metadata, priorities, activity types, or other event categories.
- **Event labels** Events are displayed as blue labels with the event title and duration.
- **Event creation** A `+` button appears in the upper-right corner of a cell on hover and can be used to add a new event.
- **Date positioning** Events are placed by their assigned resource and date.
- **Event interaction** Events highlight on hover.
- **Event selection** Clicking an event selects and highlights it.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through dates and resources.

## Best for

- **Workforce scheduling** Planning daily work across multiple people, teams, or resource groups.
- **Project planning** Comparing assigned work against available capacity by resource and day.
- **Field service scheduling** Reviewing technician or crew workload across a monthly timeline.
- **Manufacturing planning** Balancing daily tasks across machines, stations, or production resources.
- **Resource management** Spotting overbooked, underused, or partially allocated resources in a timeline layout.
- **Capacity planning** Showing workload totals and task details together without leaving the calendar view.
