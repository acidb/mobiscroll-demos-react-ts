To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/dynamic-content-based-resource-width#).

## Demo description

When resource content varies, fixed widths might not work well. To handle this, you can define a few preset width classes in CSS,
and assign them conditionally using the `cssClass` property in the resource data based on the content.

This approach lets you adapt the layout dynamically and ensure each resource column has the right width for its content.

## Implementation instructions

- Use `view: { scheduler: { type: 'week', allDay: false, startDay: 1, endDay: 5, startTime: '08:00', endTime: '19:00' } }` — Mon–Fri, 8am–7pm, no all-day row. Set `groupBy: 'date'`.
- Define 4 resources. Each resource has `id`, `name`, `color`, plus three boolean status flags (`inOffice`, `vacation`, `available`) and a `role` string (`'developer'`, `'designer'`, `'support'`). Assign a `cssClass` to each resource (`mds-variable-res-col-small`, `mds-variable-res-col-medium`, or `mds-variable-res-col-large`) based on how many status icons that resource will display. Define matching CSS rules that set the column width for each class.
- Define a large set of inline events (90+) with relative today dates, each assigned to a single resource.
- Pass a custom resource renderer to `renderResource` (Angular: `resourceTemplate`, Vue: `#resource` slot). The renderer builds an icon list from the resource's properties: always include the role icon; add an office icon if `inOffice` is true; add a vacation icon if `vacation` is true; add an unavailable icon if `available` is false. Render the resource name and the assembled icon list.

## What this demo shows

- A desktop weekly scheduler from Monday to Friday, with a fixed week strip, repeated resources for each day, and a vertically scrollable time grid running from 8 AM to 7 PM.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week strip**: The fixed strip below the header displays the days in the selected week, with the current date highlighted by a blue circle.
- **Resources**: Each day repeats the same four resources: Adam Johnson, Hannah Williams, Charlie Smith, and Ethan Roberts.
- **Resource details**: Each resource shows the resource name and a set of icons based on the resource data, such as role, office, vacation, or availability indicators.
- **Resource columns**: Each resource column can use a different CSS-based width, so columns can adapt to the amount of content shown in the resource header.
- **Time grid** The scheduler shows 11-hours range from 8 AM to 7 PM and can be scrolled vertically.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Resource headers with uneven content**: Useful when some resources need more visual details than others, such as extra status icons, role indicators, or availability markers.
- **Role-based scheduling**: Fits schedules where each person or resource has a distinct role, status, or working condition that should be visible directly in the column header.
- **Team availability planning**: Helps compare people, roles, and booked time across the same weekday range while keeping resource-specific context visible.
- **Custom resource layouts**: Useful when resource columns need to be controlled through CSS classes instead of a single fixed width for every resource.
