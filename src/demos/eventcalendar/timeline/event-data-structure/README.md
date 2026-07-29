To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/event-data-structure#).

## Demo description

The event data structure for the timeline is straightforward with a couple of base properties that the component understands and uses to render the UI. Besides the base properties you can add any custom property, like location, description ...

- `id` - A unique ID for the event. If not specified a unique id will be generated
- `title` - Defines the event text. This can be plaintext or HTML
- `tooltip` - Defines the text for the tooltip which appears on mouse hover. If not specified, it will show the title and the start/end times of the event.
- `color` - Defines the event color
- `start` - Sets the start date and time for the event. It can be a js date object, ISO date string or moment.js object. [Learn about date formats](https://demo.mobiscroll.com/react/timeline/date-object-ISO-8601-moment#)
- `end` - Sets the end date and time for the event. The same formats are supported as for `start`
- `allDay` - Configures the event as a full-day event
- `recurring` - Configures the recurring rules for the event. [Learn about recurring events](https://demo.mobiscroll.com/react/timeline/recurring-events#)
- `recurringException` - Represents the exceptions of a recurring event, when specific dates need to be skipped from the rule.
- `recurringExceptionRule` - Represents the exception rule of a recurring event, when recurring dates need to be skipped from the rule.
- `resource` - Links the event to one or more resources. Expects a list of IDs from the resources array
- `slot` - Links the event to a slot. Expects an ID from the slots array
- `timezone` - The timezone where the event takes place. If specified, it takes precedence over the calendar's specified `dataTimezone`.
- `dragBetweenResources` - Specifies whether the event is movable across resources. If set to `false` has precedence over `eventDragBetweenResources` property in `resources` and the `dragBetweenResources` option  of the calendar.
- `dragInTime` - Specifies whether the event is movable in time. If set to `false` has precedence over `eventDragInTime` property in `resources` and the `dragInTime` option of the calendar.
- `resize` - Specifies whether the event is resizable. If set to `false` has precedence over `eventResize` property in `resources` and the `dragToResize` option of the calendar.
- `overlap` - Specifies whether overlap is allowed on the event. If set to `false` has precedence over `eventOverlap` property in `resources` and the `eventOverlap` option of the calendar.
- `editable` - Denotes if the event is editable. If set `false`, the event cannot be dragged, resized or deleted even if globally enabled
- `cssClass` - A custom css class for the event. Useful for quick styling adjustments of the event container.
- `bufferBefore` - Defines a buffer time in minutes that will be rendered before the start of the event. This buffer area can help you visualise delays or added minutes for tasks. For example travel time for meetings/appointments, check in before a flight.
- `bufferAfter` - Defines a buffer time in minutes that will be rendered after the end of the event. This buffer area can help you visualise delays or added minutes for tasks. For example travel time after meetings/appointments, check out after flights, inspection, cleaning after certain tasks.
- `order` - Specifies the order of the event in the event array. Has precedence over the default ordering rules.

## Implementation instructions

- Use `timeline: { type: 'day' }` — a single-day view.
- Define 5 resources (A–E) with distinct colors: yellow `#fdf500`, red `#ff0101`, blue `#01adff`, green `#239a21`, orange `#ff4600`.
- Start with one pre-loaded event on Resource B demonstrating `bufferBefore: 20` and `bufferAfter: 30`. The buffer zones render as shaded areas before the event start and after the event end, visualising preparation/wrap-up time in minutes.
- Add a button outside the calendar that programmatically adds a second event on Resource D combining base event properties with custom fields (`bufferBefore`, `bufferAfter`, `busy`, `description`, `location`). After adding, call `calInst.navigateToEvent(newEvent)` to scroll the calendar to the new event, then show a `Toast` "Event added". Use `calendar.addEvent(newEvent)` for the imperative API.

## What this demo shows

- A desktop resource timeline with hours arranged horizontally and resources listed as rows on the left.
- **Code example** The left-side code snippet shows an event definition with the event properties used by the timeline.
- **Add event action** A button below the code snippet lets users add a new event to the timeline from the event data shown in the code example.
- **Add event feedback** Hovering the button highlights it, and clicking it adds the event to the timeline and shows a confirmation toast at the bottom center of the timeline.
- **Header navigation** The month and year label opens date navigation, while the previous and next arrows move between weeks and the Today button returns to the current date.
- **Day view** The day strip shows the selected day, with the current date highlighted. The timeline displays hourly columns from 9 AM to 5 PM.
- **Resources** Multiple resources are shown as separate timeline rows.
- **Current time** A vertical blue line with a time label marks the current time.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event cards** Events appear as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed below the title. Also shows buffer times before and after the event.
- **Date positioning** Events are positioned by their assigned resource and exact date and time range.
- **Event interaction** Events highlight on hover and show drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging across a time range.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through time and resources.

## Best for

- **Daily team scheduling** Managing meetings, check-ins, and work blocks in a day-based timeline with quick access to nearby dates.
- **Workforce and shift planning** Viewing all-day and timed items together when teams need to coordinate daily schedules across a structured timeline.
- **Event-dense planning interfaces** Helping users spot categories, overlaps, and gaps quickly through color-coded event blocks.
