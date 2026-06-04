To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/work-order-scheduling#).

## Demo description

When scheduling work orders and synchronizing them across various assets, the timeline can be of enormous value.
Resources of the same type can be grouped and arranged in multi-depth hierarchies.
The list of various assets, employees, contractors can be added and organized under it.

For add/edit a custom form with the necessary fields (including resources) can be built.
Resources linked to a work order can be of various categories, eg. drivers, trucks, contractors and will show up in their respective rows.

You can use the
[date header template](https://demo.mobiscroll.com/react/timeline/hour-day-week-month-quarter-year-header-footer-template#)
and add a simple
[event template](https://demo.mobiscroll.com/react/timeline/timeline-custom-event-rendering#)
to show the $ value and print the total daily revenue below every day in the header.

## Implementation instructions

- Use the timeline view with `type: 'week'` and `startDay: 1` / `endDay: 5` to show a Mon–Fri planning week.
- Define a three-level resource tree: top-level groups → subcategory groups → individual leaf resources. Set `eventCreation: false` on all group and subgroup nodes so events are only associated with individual resources, not with the category rows themselves.
- Set `collapsed: true` on top-level groups that should start folded, such as Contractors and Equipment.
- Assign a work order to multiple resources by setting its `resource` property to an array of leaf resource IDs. The event will appear in every row whose ID is included in the array.
- Enable `clickToCreate="double"` for double-click creation and `dragToCreate={true}` for drag-based creation. Set `dragToMove: true` and `dragToResize: true` to allow repositioning and resizing. Use `dragTimeStep: 30` to snap all drag operations to 30-minute increments.
- Use `extendDefaultEvent` to pre-populate sensible defaults (title, location, cost) on every newly created work order event.
- Use `renderTimelineEventContent` (Angular: `timelineEventContentTemplate`, Vue: `timelineEventContent`) to display a custom event body that shows the work order title alongside a cost badge.
- Use `renderTimelineDay` (Angular: `timelineDayTemplate`, Vue: `timelineDay`) to render a custom column header for each day. Calculate the total daily revenue by summing the `cost` field from the `events` array provided in the render args, and display it below the date label.
- Use `onEventCreated` to intercept newly created events and open the add popup. Use `onEventClick` to open the edit popup for existing events. Pass `args.target` from `onEventCreated` as the popup `anchor` so the anchored popover positions itself relative to the new event.
- Build the popup with the `Popup` component. Use the `responsive` option to show a full-screen bottom sheet on mobile and a fixed-width anchored popover on larger screens.
- Include a resource assignment section in the popup using checkboxes for each leaf resource, grouped visually by subcategory. Initialize the checked state from the event's `resource` array and write it back on save so the work order is reassigned across the correct rows.
- After saving, call `navigateToEvent` on the calendar instance ref to scroll the timeline to the updated or newly created work order.
- For deletion, remove the event immediately from the data array and show a `Snackbar` with an Undo action that restores it if the user reverses the action.
