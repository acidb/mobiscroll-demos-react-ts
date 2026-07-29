To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/resource-drag-drop-reorder#).

## Demo description

Resources can be reordered directly through the UI by enabling `resourceReorder: true` under the `timeline` settings of the `view` option.
When enabled, a drag handle icon will appear next to each resource, allowing users to drag and reorder resources.

When a resource is dropped into a new position, the 

`onResourceOrderUpdate`

 lifecycle event is triggered.
To prevent the resource order from being updated, return `false` in the handler function of this event.

Use the `immutableData` option to ensure the original data remains unchanged when validating resource positions after a drop.

## Implementation instructions

- Use `timeline: { type: 'month', resourceReorder: false }` as the default view. `resourceReorder` is toggled dynamically — `false` in normal mode, `true` in reorder mode.
- Set `immutableData: true` on the calendar. This ensures the original resource order is not mutated in place when `onResourceOrderUpdate` fires, which is required if you need to validate or cancel the reorder before committing it.
- Define ~22 leaf resources and 4 groups (each with 3 children). Two individual resources have `reorder: false` set on the resource object (Resource 2 and Resource 4) — their drag handles are hidden and they cannot be moved by the user. Groups and children without this property are all reorderable.
- Add 43 events with `dyndatetime` offsets across the current month, each with a `color` property, assigned to various resources.
- **Reorder mode state machine**: Maintain a boolean flag (`isReorder`) that controls which buttons appear in the custom header, and what `resourceReorder` value is passed to the view. Also maintain `tempResources` — a pending copy of the resource order that accumulates changes during a reorder session before they are committed or discarded.
  - **Enable reorder**: set `isReorder = true`, set `resourceReorder: true` in the view. The calendar renders drag handles next to each reorderable resource row.
  - **Save**: set `isReorder = false`, set `resourceReorder: false`, commit `tempResources` as the new canonical resource order.
  - **Cancel**: set `isReorder = false`, set `resourceReorder: false`, restore the previous committed resource order, show a `Toast` ("Resource order canceled").
- **`onResourceOrderUpdate`**: fires each time the user drops a resource into a new position. `args.resources` contains the full reordered resource array. Store it in `tempResources` (not committed yet). Return `false` from the handler to reject a specific drop.
- **Custom header** (`renderHeader` / `headerTemplate` / `header` slot): renders `CalendarNav` on the left, then conditionally:
  - When NOT in reorder mode: a flat "Reorder resources" button.
  - When IN reorder mode: "Save" and "Cancel" buttons side by side.
  - `CalendarPrev`, `CalendarToday`, `CalendarNext` on the right.

## What this demo shows

- A desktop timeline in month view, with days arranged horizontally and a hierarchical resource tree arranged vertically on the left.
- **Header navigation** The month and year label opens date navigation, the previous and next arrows move between months, and the Today button returns to the current date.
- **Reorder action** The custom header includes a Reorder resources button before the navigation arrows. Clicking it enables resource reordering and replaces the button with Save and Cancel actions.
- **Month view** The timeline header shows the days in the selected month, with the current date highlighted.
- **Resources** The left side shows expandable and collapsible resource groups, including parent groups and fixed resources where reordering is disabled.
- **Resource hierarchy** Nested resources are grouped under parent rows, such as Group 1 and Group 2, before listing individual resources.
- **Non-reorderable resources** Resource 2 and Resource 4 remain visible in the schedule, but their drag handles are hidden and they cannot be moved.
- **Resource reordering** Reorder mode lets users move reorderable resources with drag and drop while keeping existing events assigned to their resources.
- **Grouped resources** Resources can be reordered within the existing expandable group structure.
- **Drag feedback** A drop indicator shows where the dragged resource will be placed.
- **Save and cancel flow** Save commits the pending resource order, while Cancel exits reorder mode and restores the previously committed order.
- **Cancel notification** Canceling the reorder flow shows a notification confirming that the resource order was canceled.
- **Event cards** Events are shown as colored cards with a left color stripe and the event time displayed under the title.
- **Date positioning** Events are positioned by their assigned resource and date range.
- **Event interaction** Events highlight on hover and show drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging across a time range.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through dates and resources.

## Best for

- **Operational resource planning** Applications where users need to customize resource order based on priorities, preferences, or frequently accessed resources.
- **Grouped resource schedules** Timelines that organize people, rooms, equipment, or other resources under expandable parent groups.
- **Controlled manual organization** Workflows where users can review a new resource order before saving or canceling the change.
- **Mixed reorder rules** Schedules that need some resources to remain fixed while others can be manually rearranged.
- **Dense timeline views** Desktop timeline interfaces that need horizontal date navigation and vertical resource navigation in the same view.
