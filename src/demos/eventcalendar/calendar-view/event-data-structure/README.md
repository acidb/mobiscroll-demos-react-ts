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

- Pass events to the Eventcalendar through the `data` option, which accepts the built-in event properties supported by Mobiscroll.
- Use the event object in the code example to demonstrate common event fields such as `id`, `title`, `start`, `end`, `color`, `allDay`, recurrence-related properties, and any custom fields your app needs.

## What this demo shows

- A desktop month view event calendar is displayed alongside a code example that explains the structure of an event object and its supported properties.
- **Code example** The left-side snippet shows an event definition with the event properties used by the calendar.
- **Add event action** A button below the snippet lets users add a new event to the calendar from the event data shown in the code example.
- **Add event feedback** Hovering the button highlights it, and clicking it adds the event to the calendar and shows a confirmation toast at the bottom center of the calendar.
- **Event labels** Day cells that contain events render labels inside the month grid.
- **Initial event state** The demo starts with a single event added to today's date.
- **Event selection** Clicking an event label highlights it and shows a toast at the bottom center of the calendar with the event title.
- **Day cell hover** Hovering over a day cell highlights the day number in the top-right corner with a gray background.
- **Day selection** Clicking the empty area of a day cell selects that day and highlights the day number with a blue background.
- **Month navigation** Users can change months by dragging the calendar left or right.
- **Header navigation** The header shows the current month and year, previous and next month arrow buttons, and a `Today` button for returning to the current date.

## Best for

- **Understanding event data** Showing how Mobiscroll event objects are structured and which built-in properties affect calendar rendering and behavior.
- **Developer onboarding** Helping developers learn how event data is passed to the Eventcalendar and how those properties appear in a month view.
- **Interaction walkthroughs** Explaining common month-view interactions such as selecting days, clicking event labels, changing months, and showing user feedback with toasts.
- **Documentation and demos** Creating educational examples that connect event object definitions with visible results in the UI.
- **Quick prototyping** Testing how a single event definition behaves in a desktop month calendar before wiring in larger datasets.
