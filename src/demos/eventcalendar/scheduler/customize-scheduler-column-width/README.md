To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/customize-scheduler-column-width#).

## Demo description

Customize the width of scheduler columns using the `.mbsc-schedule-col-width` CSS class. This allows you to define fixed or dynamic column widths to fit your layout needs.

When using resources, the defined width is applied to resource columns. If no resources are present, it applies to day columns instead.

- **Interested in individually adjusting resource widths?** [Discover how &#8594;](https://demo.mobiscroll.com/react/scheduler/dynamic-content-based-resource-width#)

## Implementation instructions

- Use `view: { scheduler: { type: 'month', startTime: '08:00', endTime: '20:00', allDay: false } }` — a monthly scheduler with a custom visible time range and the all-day row hidden.
- Define 6 resources, each with `id`, `name`, and `color`. Set `groupBy: 'date'` so columns are days and rows are resources.
- Maintain two event datasets using `dyndatetime` offsets: one with `resource` references (for resource mode) and one without (for no-resource mode).
- **Column width**: Set the column width by applying a scoped CSS rule targeting Mobiscroll's internal `.mbsc-schedule-col-width` class. Pass a `cssClass` to the Eventcalendar to scope the rule — swapping the `cssClass` value dynamically switches between width presets. When resources are active, `.mbsc-schedule-col-width` controls resource column width; without resources, it controls day column width.
- **Width switcher**: Render a `SegmentedGroup` with three width options above the calendar. On selection, update the Eventcalendar's `cssClass` to the matching preset; for the imperative API, call `inst.setOptions({ cssClass: ... })` followed by `inst.navigate(new Date())` to re-render at the current date.
- **Resource toggle**: Render a second `SegmentedGroup` to switch between "With resources" and "Without resources" modes. On selection, update both `resources` and `data` on the Eventcalendar simultaneously.

## What this demo shows

- A desktop monthly scheduler layout with a fixed month strip, repeated resources for each day, and a scrollable 12-hour time grid for the selected month.
- **Column width switcher**: A segmented control lets users switch between 50px, 100px, and 150px scheduler column widths.
- **Default width**: The 150px column width option is selected by default.
- **Column width behavior**: When resources are shown, the configured width applies to resource columns. When resources are hidden, the same width applies to day columns.
- **Resource toggle**: A second segmented control switches between showing and hiding resources.
- **Default resource mode**: Resources are shown by default.
- **No-resource mode**: Switching to the no-resource option updates the scheduler so resource columns are no longer displayed.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between month and jump back to the current day.
- **Month strip**: The fixed strip below the header displays the days of the selected month, with the current date highlighted by a blue circle.
- **Resources**: Each day shows the same resources: Bart, Jake, Carl, Dana, Evan, and Faye.
- **Resource columns**: Each resource has its own column inside the day column when resources are enabled.
- **Time grid**: The scheduler displays time from 8 AM to 8 PM.
- **Scrolling behavior**: The scheduler can be scrolled vertically through the time grid and horizontally across the days of the month and their resource columns.
- **Timed events** Timed events are displayed in the monthly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Overlapping events**: Events that overlap are placed side by side so each event remains visible.
- **Current time**: A blue current-time line appears across the time grid.
- **Hover time indicator**: Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection**: Clicking an event highlights the selected event.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Scheduler column sizing**: Showing how to customize scheduler column width with fixed pixel values.
- **Dense desktop schedules**: Working with month-based scheduler views that need horizontal and vertical scrolling.
