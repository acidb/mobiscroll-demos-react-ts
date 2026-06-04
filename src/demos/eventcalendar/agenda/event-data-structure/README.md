To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/event-data-structure#).

## Demo description

The event data structure for the agenda is straightforward with a couple of base properties that the component understands and uses to render the UI. Besides the base properties you can add any custom property, like location, description ...

- `id` - A unique ID for the event. If not specified a unique id will be generated
- `title` - Defines the event text. This can be plaintext or HTML
- `tooltip` - Defines the text for the tooltip which appears on mouse hover. If not specified, it will show the title and the start/end times of the event.
- `color` - Defines the event color
- `start` - Sets the start date and time for the event. It can be a js date object, ISO date string or moment.js object. [Learn about date formats](https://demo.mobiscroll.com/react/agenda/date-object-ISO-8601-moment#)
- `end` - Sets the end date and time for the event. The same formats are supported as for `start`
- `allDay` - Configures the event as a full-day event
- `recurring` - Configures the recurring rules for the event. [Learn about recurring events](https://demo.mobiscroll.com/react/agenda/recurring-events#)
- `recurringException` - Represents the exceptions of a recurring event, when specific dates need to be skipped from the rule.
- `recurringExceptionRule` - Represents the exception rule of a recurring event, when recurring dates need to be skipped from the rule.
- `resource` - Links the event to one or more resources. Expects a list of IDs part of the resources array.
- `timezone` - The timezone where the event takes place. If specified, it takes precedence over the calendar's specified `dataTimezone`.
- `editable` - Denotes if the event is editable. If set `false`, the event cannot be dragged, resized or deleted even if globally enabled
- `cssClass` - A custom css class for the event. Useful for quick styling adjustments of the event container.
- `bufferBefore` - Defines a buffer time in minutes that happens before the start of the event. This buffer area can help you visualise delays or added minutes for tasks. It is not automatically rendered in case of the agenda, but can be used in the custom template.
- `bufferAfter` - Defines a buffer time in minutes that happens after the end of the event. It is not automatically rendered in case of the agenda, but can be used in the custom template.
- `order` - Specifies the order of the event in the event array. Has precedence over the default ordering rules.
