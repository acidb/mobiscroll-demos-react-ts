To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/setting-row-height#).

## Demo description

The height of the rows is determined by the maximum number of events it houses at any moment, but in some cases this needs to be overridden.
The height of a resource row or track can be adjusted in CSS. Let's explore a couple of scenarios.

## Implementation instructions

- Use `timeline: { type: 'month' }` — a monthly timeline view.
- Define a hierarchical resource tree: 3 group resources (Team 1–3), each with a `children` array of leaf resources. Set `eventCreation: false` on each group so events can only be created on leaf rows. Leaf resources each have `id`, `name`, `color`, `title` (job title), and `img` (avatar URL). Populate 12 events across the leaf resources using `dyndatetime` offsets.
- Use `renderResource` (Angular: `resourceTemplate`, Vue: `#resource`) to render resource labels differently depending on row type. Check `resource.children`: if present (group row), render only the group name; if absent (leaf row), render the member's name, job title, and avatar image. All other interactions are enabled: `clickToCreate`, `dragToCreate`, `dragToMove`, `dragToResize` all `true`.
- Row heights for group rows and leaf rows are different. Apply a `cssClass` to the calendar to scope the overrides, then target Mobiscroll's internal `.mbsc-timeline-resource` (resource label column) and `.mbsc-timeline-row` (event track area) classes with custom `min-height` values — one size for leaf rows, a shorter size for group header rows.
