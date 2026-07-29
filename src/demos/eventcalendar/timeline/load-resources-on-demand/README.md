To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/load-resources-on-demand#).

## Demo description

The resources can be populated on initialization or in case of a bigger hierarchy, the more efficient way is to load the child resources and their events on demand.

Getting the resources and the events in real time as the user navigates improves load performance.

Use the 

`onResourceExpand`

 lifecycle event to load the data runtime. You can [learn about lifecycle events](https://demo.mobiscroll.com/react/timeline/event-hooks#) and places where to drop logic to customize the experience.

## Implementation instructions

- Use `timeline: { type: 'day' }` — a single-day view. Apply CSS class `md-load-resources-on-demand` to the calendar and add `.md-load-resources-on-demand .mbsc-timeline-parent { height: 34px }` to keep group header rows compact.
- **Initial resource tree** (9 top-level entries):
  - **Group 1** (id 1) — `collapsed: true`, `eventCreation: false`, 3 real children pre-loaded: Resource 1 (`#e20000`), Resource 2 (`#76e083`), Resource 3 (`#4981d6`)
  - **Group 2** (id 2) — `collapsed: true`, `eventCreation: false`, one placeholder child: `{ id: 21, name: 'Loading...' }`
  - **Group 3** (id 3) — same placeholder pattern: `{ id: 31, name: 'Loading...' }`
  - **Group 4** (id 4) — same placeholder pattern: `{ id: 41, name: 'Loading...' }`
  - **Group 5** (id 5) — `collapsed: true`, `eventCreation: false`, 3 real children pre-loaded: Resource 12 (`#af0000`), Resource 13 (`#446f1c`), Resource 14 (`#1dab2f`)
  - Four standalone leaf resources: Resource 17 (id 6, `#167593`), Resource 18 (id 7, `#93166c`), Resource 19 (id 8, `#e5e923`), Resource 20 (id 9, `#935028`)
  - Placeholder children (`Loading...`) are needed so the group shows an expand arrow before real children arrive.
- Include 4 initial timed events today spread across the 4 standalone leaf resources.
- **`onResourceExpand` handler** (`loadChildResources`):
  1. Get `args.resourceObj` — the expanded group's resource object.
  2. Guard with `if (!resource.loaded)` to prevent re-fetching an already-expanded group.
  3. Fetch `https://trial.mobiscroll.com/load-resources/?res={args.resource}` (JSONP, where `args.resource` is the group's id).
  4. On response: mutate `resource.children = data.resources` and `resource.loaded = true`, then merge `data.events` into the existing events array.
  5. Update both events and resources state with the merged arrays (spread to signal change), and show a Toast `"Resources loaded"`; for the imperative API, call `inst.setOptions({ data: newEvents, resources: newResources })`.

## What this demo shows

- A desktop timeline with hours arranged horizontally and a hierarchical resource tree arranged vertically on the left.
- **Loading resources on demand** Expanding a resource group loads its child resources and events at runtime instead of loading the full hierarchy on initialization.
- **Loading feedback** A `Resources loaded` toast appears at the bottom center of the timeline after child resources are loaded.
- **Header navigation** The month and year label opens date navigation, the previous and next arrows move between days, and the Today button returns to the current date.
- **Day view** The strip below the header shows the selected days, with the current date highlighted.
- **Timeline grid** The timeline displays hourly columns from 12 AM to 12 PM.
- **Resources** The left side shows expandable and collapsible resource groups, including parent groups.
- **Resource hierarchy** Nested resources are grouped under parent rows, such as Group 1 and Group 2, before listing individual resources.
- **Current time** A vertical blue line with a time label marks the current time.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event cards** Events appear as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed below the title.
- **Date positioning** Events are positioned by their assigned resource and exact date range.
- **Event interaction** Events highlight on hover and show drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging across a time range.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through time and resources.

## Best for

- **Large resource hierarchies** Scheduling interfaces where loading every resource and event at startup would slow down the initial view.
- **Expandable team structures** Workforce planning tools with departments, teams, and individual staff members grouped under parent rows.
- **Facility and room scheduling** Calendars where buildings, floors, rooms, or equipment groups only need to load when the user expands them.
- **Field service planning** Dispatch boards with regional groups, crews, vehicles, or technicians that can be loaded as the planner navigates.
- **Asset and equipment booking** Resource timelines with many machines, vehicles, devices, or shared assets organized into nested groups.
- **Enterprise scheduling systems** Applications that need to keep the first load fast while still supporting deeper resource trees and event data.
