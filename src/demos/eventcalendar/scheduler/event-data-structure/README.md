To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/event-data-structure#).

## Demo description

The event data structure for the scheduler is straightforward with a couple of base properties that the component understands and uses to render the UI. Besides the base properties you can add any custom property, like location, description ...

- `id` - A unique ID for the event. If not specified a unique id will be generated
- `title` - Defines the event text. This can be plaintext or HTML
- `tooltip` - Defines the text for the tooltip which appears on mouse hover. If not specified, it will show the title and the start/end times of the event.
- `color` - Defines the event color
- `start` - Sets the start date and time for the event. It can be a js date object, ISO date string or moment.js object. [Learn about date formats](https://demo.mobiscroll.com/react/scheduler/date-object-ISO-8601-moment#)
- `end` - Sets the end date and time for the event. The same formats are supported as for `start`
- `allDay` - Configures the event as a full-day event
- `recurring` - Configures the recurring rules for the event. [Learn about recurring events](https://demo.mobiscroll.com/react/scheduler/recurring-events#)
- `recurringException` - Represents the exceptions of a recurring event, when specific dates need to be skipped from the rule.
- `recurringExceptionRule` - Represents the exception rule of a recurring event, when recurring dates need to be skipped from the rule.
- `resource` - Links the event to one or more resources. Expects a list of IDs from the resources array
- `timezone` - The timezone where the event takes place. If specified, it takes precedence over the calendar's specified `dataTimezone`.
- `dragBetweenResources` - Specifies whether the event is movable across resources. If set to `false` has precedence over `eventDragBetweenResources` property in `resources` and the `dragBetweenResources` option  of the calendar.
- `dragInTime` - Specifies whether the event is movable in time. If set to `false` has precedence over `eventDragInTime` property in `resources` and the `dragInTime` option of the calendar.
- `resize` - Specifies whether the event is resizable. If set to `false` has precedence over `eventResize` property in `resources` and the `dragToResize` option of the calendar.
- `overlap` - Specifies whether overlap is allowed on the event. If set to `false` has precedence over `eventOverlap` property in `resources` and the `eventOverlap` option of the calendar.
- `editable` - Denotes if the event is editable. If set `false`, the event cannot be dragged, resized or deleted even if globally enabled
- `cssClass` - A custom css class for the event. Useful for quick styling adjustments of the event container.
- `bufferBefore` - Defines a buffer time in minutes that will be rendered before the start of the event. This buffer area can help you visualise delays or added minutes for tasks.
For example travel time for meetings/appointments, check in before a flight.
- `bufferAfter` - Defines a buffer time in minutes that will be rendered after the end of the event. This buffer area can help you visualise delays or added minutes for tasks.
For example travel time after meetings/appointments, check out after flights, inspection, cleaning after certain tasks.
- `order` - Specifies the order of the event in the event array. Has precedence over the default ordering rules.

## Implementation instructions

- Use `view: { scheduler: { type: 'day' } }`.
- Pre-load one event with `bufferBefore: 20` and `bufferAfter: 30` (values in minutes). The buffer zones render as shaded areas before the event start and after the event end.
- Add a button outside the calendar. On click, build a new event with base properties (`title`, `color`, `start`, `end`, `bufferBefore: 20`, `bufferAfter: 30`) and custom fields (`busy: true`, `description`, `location`). Add the event to the events array; for the imperative API, call `inst.addEvent(newEvent)`. Call `inst.navigateToEvent(newEvent)` to scroll the view to the new event, then show a `Toast`.

## What this demo shows

- A desktop daily scheduler layout with a fixed week strip at the top, a fixed all-day event row below it, and a scrollable time grid for the selected day.
- **Code example** The left-side code snippet shows an event definition with the event properties used by the scheduler.
- **Add event action** A button below the code snippet lets users add a new event to the scheduler from the event data shown in the code example.
- **Add event feedback** Hovering the button highlights it, and clicking it adds the event to the scheduler and shows a confirmation toast at the bottom center of the scheduler.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between dates and jump back to the current day.
- **Week view** The fixed week strip below the header shows the surrounding dates for quick day switching. Dates highlight on hover, and the selected day is marked with a blue circle.
- **All-day events** All-day events are displayed in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler below the all-day row scrolls vertically through the hours of the selected day.
- **Hover feedback** Hovering the time grid shows a time indicator that follows the pointer in 15-minute increments.
- **Event rendering** Events appear as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title. Also shows buffer times before and after the event.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Event interactions** Hovering an event highlights it and shows resize and drag handles, indicating that events can be resized or repositioned.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.
- **Event selection** Clicking an event selects and highlights it.
- **Current time** A blue line across the scheduler indicates the current time.

## Best for

- **Daily team scheduling** Managing meetings, check-ins, and work blocks in a day-based scheduler with quick access to nearby dates.
- **Workforce and shift planning** Viewing all-day and timed items together when teams need to coordinate daily schedules across a structured timeline.
- **Event-dense planning interfaces** Helping users spot categories, overlaps, and gaps quickly through color-coded event blocks.
