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
