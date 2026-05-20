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
