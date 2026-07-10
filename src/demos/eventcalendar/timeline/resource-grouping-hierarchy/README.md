To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/resource-grouping-hierarchy#).

## Demo description

Resources can be fixed to the top through the `fixed` property of the resource object. The fixed resources
have to be placed before any other resource in the order of resources.

Resources can be placed into collapsible groups that can be collapsed or expanded on load through the `collapsed` property of the resource object.
Parents have a slightly different styling compared to child elements that spans across the entire timeline.
While the height of the rows are the same for all resources, these can be
[customized with CSS](https://demo.mobiscroll.com/react/timeline/setting-row-height#), the same way as seen in this example.

The hierarchy can be of multiple levels. Event creation, drag & drop is enabled for parent and child resources alike, that can be turned off through the
`eventCreation` property of the `resource` object.

The width of the resource column adjusts dynamically as resources are expanded or collapsed to fit their content.
The default increment step can be modified with a CSS rule, without affecting the algorithm's behavior:

```css
.md-resource-grouping-hierarchy .mbsc-timeline-resource-depth-step {
width: 20px;
}
```

If the step adjustment is not needed and you want to keep the width of the resources column unchanged, you can disable it by setting the value to `width: 0;`.

## Implementation instructions

- Use `timeline: { type: 'month' }` — a full-month view.
- Enable all interactions: `clickToCreate: true`, `dragToCreate: true`, `dragToMove: true`, `dragToResize: true`.
- Define resources with a multi-level nested hierarchy using the `children` array on parent resource objects. Groups carry `eventCreation: false` so only leaf (child) resources receive events — clicking or dragging onto a group header row does nothing. The demo structure has up to 5 levels of nesting:
  - **Fixed resources** (pinned to top): Resource 1 (`fixed: true`) and Resource 2 (`fixed: true`). Fixed resources must be placed at the beginning of the resource array, before all other resources and groups.
  - Resource 3 — standalone, no group
  - Group 1 (`eventCreation: false`): children Resource 4, Resource 5. Expanded on load (no `collapsed` property).
  - Group 2 (`eventCreation: false`, `collapsed: true`): children Resource 6 and Group 3. Collapsed on load.
    - Group 3 (`eventCreation: false`, `collapsed: true`): children Resource 7, Resource 8, Group 4.
      - Group 4 (`eventCreation: false`, `collapsed: true`): children Resource 9 and Group 5.
        - Group 5 (`eventCreation: false`, `collapsed: true`): children Resource 10, Resource 11.
  - Resources 12–19 — standalone resources after the groups.
- Add 18 events with `dyndatetime` offsets distributed across the current month, each assigned to a leaf resource `id`.
- The resource column width expands and contracts automatically as groups are collapsed or expanded to accommodate the indentation depth. The default indentation step can be overridden by targeting Mobiscroll's internal `.mbsc-timeline-resource-depth-step` class; set the width to `0` to disable dynamic column width adjustment entirely.
