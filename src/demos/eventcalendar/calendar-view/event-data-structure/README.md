To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/event-data-structure#).

## Demo description

The event data structure for the calendar is straightforward with a couple of base properties that the component understands and uses to render the UI. Besides the base properties you can add any custom property, like location, description ...

- `id` - A unique ID for the event. If not specified a unique id will be generated
- `title` - Defines the event text. This can be plaintext or HTML
- `tooltip` - Defines the text for the tooltip which appears on mouse hover. If not specified, it will show the title and the start/end times of the event.
- `color` - Defines the event color
- `start` - Sets the start date and time for the event. It can be a js date object, ISO date string or moment.js object. [Learn about date formats](https://demo.mobiscroll.com/react/eventcalendar/date-object-ISO-8601-moment#)
- `end` - Sets the end date and time for the event. The same formats are supported as for `start`
- `allDay` - Configures the event as a full-day event
- `recurring` - Configures the recurring rules for the event. [Learn about recurring events](https://demo.mobiscroll.com/react/eventcalendar/recurring-events#)
- `recurringException` - Represents the exceptions of a recurring event, when specific dates need to be skipped from the rule.
- `recurringExceptionRule` - Represents the exception rule of a recurring event, when recurring dates need to be skipped from the rule.
- `resource` - Links the event to one or more resources. Expects a list of IDs part of the resources array.
- `timezone` - The timezone where the event takes place. If specified, it takes precedence over the calendar's specified `dataTimezone`.
- `dragInTime` - Specifies whether the event is movable in time. If set to `false` has precedence over the `dragInTime` option of the calendar.
- `resize` - Specifies whether the event is resizable. If set to `false` has precedence over the `dragToResize` option of the calendar.
- `overlap` - Specifies whether overlap is allowed on the event. If set to `false` has precedence over the `eventOverlap` option of the calendar.
- `editable` - Denotes if the event is editable. If set `false`, the event cannot be dragged, resized or deleted even if globally enabled
- `cssClass` - A custom css class for the event. Useful for quick styling adjustments of the event container.
- `bufferBefore` - Defines a buffer time in minutes that happens before the start of the event. This buffer area can help you visualise delays or added minutes for tasks. It is not automatically rendered in case of the calendar view, but can be used in the custom template.
- `bufferAfter` - Defines a buffer time in minutes that happens after the end of the event. It is not automatically rendered in case of the calendar view, but can be used in the custom template.
- `order` - Specifies the order of the event in the event array. Has precedence over the default ordering rules.

## Implementation instructions

- Set `view: { calendar: { labels: true } }`. Initialize `data` with one event for today's date to show the calendar populated on load.
- An event object requires at minimum a `start` value; `title`, `color`, and `end` are the most commonly used display properties. Beyond the built-in properties, any custom field (e.g. `busy`, `description`, `location`) can be added to the event object — Mobiscroll passes custom fields through transparently so they remain accessible in event handlers and templates.
- Render an "Add event to calendar" button outside the calendar. When clicked, construct a new event object with base and custom properties, append it to `data`, call `navigateToEvent(newEvent)` on the calendar instance to jump to the event's date, and show a `Toast` with `'Event added'`. Vue: access the calendar instance via `calInst.value.instance`. Angular: use `@ViewChild` to access the `MbscEventcalendar` instance and the `Notifications` service for the toast. JS/jQuery: call `calendar.addEvent(newEvent)` then `calendar.navigateToEvent(newEvent)` imperatively.

## What this demo shows

- A desktop month view event calendar is displayed alongside a code example that explains the structure of an event object and its supported properties.
- **Code example** The left-side code snippet shows an event definition with the event properties used by the calendar.
- **Add event action** A button below the code snippet lets users add a new event to the calendar from the event data shown in the code example.
- **Add event feedback** Hovering the button highlights it, and clicking it adds the event to the calendar and shows a confirmation toast at the bottom center of the calendar.
- **Event labels** Day cells that contain events render labels inside the month grid.
- **Initial event state** The demo starts with a single event added to today's date.
- **Event interaction** Hovering over or selecting an event label highlights it.
- **Day cell states** Hovering a day cell highlights the day number with a gray background, while clicking the empty part of the cell selects the day and highlights the day number with a blue background.
- **Month navigation** Months can be changed by clicking and dragging the calendar left or right.
- **Calendar header** The header shows the current month and year on the left, and blue month navigation arrows with a `Today` button between them on the right.

## Best for

- **Understanding event data** Showing how Mobiscroll event objects are structured and which built-in properties affect calendar rendering and behavior.
