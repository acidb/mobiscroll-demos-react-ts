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

## What this demo shows

- Shows three monthly timelines with days arranged horizontally and resources listed as rows on the left. The examples show how to override parent row height, set resource row height, and remove extra bottom gutter spacing.
- **Header navigation** The month and year label opens date navigation, the previous and next arrows move between months, and the Today button returns to the current date.
- **Month view** The strip below the header shows the days of the selected month, with the current date highlighted.
- **Resource tree** Resources are grouped into parent rows with child resource rows underneath.
- **Parent row height** The first timeline uses CSS overrides to control the height of parent resource rows independently.
- **Resource row height** The second timeline shows how to set a consistent height for all resource rows.
- **Bottom gutter** The third timeline shows how to remove the extra bottom spacing from the timeline row area.
- **Event cards** Events are shown as colored cards with a left color stripe, a bold title, and the event start and end time.
- **Date positioning** Events are positioned by their assigned resource and exact date and time range.
- **Event interaction** Events highlight on hover and show drag or resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging across a time range on leaf resource rows.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through dates and resources.

## Best for

- **Grouped resource timelines** Scheduling views where parent rows need to stay compact while child resource rows need more vertical space for details and events.
- **Team planning boards** Resource timelines that show people, roles, and avatars in the left column and need enough row height for readable custom resource labels.
- **Dense scheduling layouts** Month timelines where row height should be reduced to fit more resources on screen without changing the event data.
- **Custom timeline spacing** Interfaces where default row or track spacing does not match the product layout and needs to be adjusted with scoped CSS.
- **Resource-heavy schedules** Planning screens with many rows where controlling row height and gutter spacing helps keep the timeline easier to scan.
