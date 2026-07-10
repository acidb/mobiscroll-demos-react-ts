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

## What this demo shows

- A desktop weekly timeline for work order scheduling, with Monday to Friday working days arranged horizontally and a hierarchical resource tree arranged vertically on the left.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed strip below the header shows the selected work week from Monday to Friday, using the `DD DDD MMM YYYY` date format.
- **Daily totals** A summary row below the date labels displays aggregated daily revenue in dollars.
- **Time grid** The timeline shows working hours from 5 AM to 9 PM with hourly columns under each day.
- **Resources** The left side shows expandable and collapsible resource groups, including parent groups such as Contractors, Employees, and Equipment.
- **Resource hierarchy** Nested resources are grouped by department or category, such as Cement masons and Drivers, before listing individual team members.
- **Current time** Demonstrates a current time indicator, shown as a vertical blue line with the current time label.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event cards** Events are rendered as colored cards with a colored stripe on the left, the exact start and end time below the title, the project name in bold, and the project value shown as a badge next to the title.
- **Event positioning** Events are positioned by assigned resource, date, start time, and end time.
- **Multi-resource assignments** The same project can be assigned to multiple resources at the same time and appears in each assigned resource row.
- **Resource utilization** Different projects can be assigned to different employees during the same day, making resource usage visible across the timeline.
- **Event creation** New events can be created by double-clicking an individual resource row in the timeline or by clicking and dragging across a time range.
- **New event dialog** Creating an event opens a dialog with fields for Title, Location, Bill to customer ($), and Notes.
- **Resource assignment** The event dialog includes start and end time selection and a checklist for choosing the resources where the event should appear.
- **Time selection** The start and end inputs open a time picker with range selection.
- **Event editing** Clicking or tapping an existing event opens the same dialog in edit mode with the current values prefilled.
- **Editable properties** In edit mode, event details can be changed before saving.
- **Save and close behavior** Clicking outside the dialog or pressing Cancel closes the editor without applying changes, while Save updates or save the event.
- **Delete flow** The edit dialog includes a Delete work order action that removes the event from the timeline.
- **Undo feedback** After deletion, a centered bottom toast appears with an Undo action so the deleted event can be restored.
- **Event interaction** Events are highlighted on hover and show drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Vertical scrolling** The resource area scrolls vertically so many resources can be displayed in one timeline.
- **Horizontal scrolling** The timeline supports horizontal scrolling for navigating a larger date range.

## Best for

- **Work order scheduling** Planning jobs across employees, contractors, equipment, and other assets in a single timeline.
- **Construction and field service planning** Assigning crews, vehicles, tools, and subcontractors to project work by day and hour.
- **Multi-resource dispatching** Scheduling the same job across several resource types when one work order requires multiple people or assets.
- **Revenue-aware scheduling** Showing daily revenue totals and per-project values directly in the timeline while planning work.
- **Hierarchical resource management** Organizing large resource lists by group, department, role, or asset type without losing the time-based scheduling context.
- **Interactive schedule editing** Supporting create, edit, delete, drag, resize, and undo flows for teams that need to adjust work orders directly from the calendar UI.
