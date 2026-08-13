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

## Implementation instructions

- Use `view: { agenda: { type: 'month' } }`. Pre-seed the calendar with one event for today using standard fields: `title`, `color`, `start`, `end`.
- Add an "Add event to calendar" Button. On click, create a new event object combining base Mobiscroll fields (`title`, `color`, `start`, `end`) with any custom application fields (e.g. `busy`, `description`, `location`), then add it to the events array. After adding, call `inst.navigateToEvent(newEvent)` to scroll the agenda to the new event. For the imperative API, call `inst.addEvent(newEvent)` before `inst.navigateToEvent(newEvent)`. Show a Toast on success.

## What this demo shows

- Shows a daily agenda view with events listed.
- **Code example** The left-side code snippet shows an event definition with the event properties used by the agenda.
- **Add event action** A button below the code snippet lets users add a new event to the agenda from the event data shown in the code example.
- **Add event feedback** Hovering the button highlights it, and clicking it adds the event to the agenda and shows a confirmation toast at the bottom center of the agenda.
- **Header navigation** The month and year label in the top left opens date navigation. The previous and next arrows and the Today button on the right move between days and jump back to the current date.
- **Agenda list** The area below the header lists events for the selected month. Events in the agenda are grouped by date.
- **Events** Events are displayed as agenda cards with a colored strip on the left, the event title next to it, and the start and end time stacked on the right.
- **Event interaction** Hovering an event highlights it.
- **Event selection** Clicking an event selects and highlights it, then shows a toast message with the event title.

## Best for

- **Understanding event data** Showing how Mobiscroll event objects are structured and which built-in properties affect agenda rendering and behavior.
