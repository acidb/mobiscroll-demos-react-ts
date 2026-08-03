To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/basic-usage#).

## Demo description

Use the `&lt;mobiscroll.Eventcalendar /&gt;` component and pass all the necessary options as props, like `theme="ios"`.

The events can be [passed in a couple of different ways](https://demo.mobiscroll.com/react/agenda/load-inline-data#). In this example we are loading them through an external API.

- **Interested to learn about the calendar view?** [Learn how to set up the range the agenda covers →](https://demo.mobiscroll.com/react/agenda/daily-weekly-monthly-annual-agenda#)

## Related demos

- [Learn how to set up the range the agenda covers →](https://demo.mobiscroll.com/react/agenda/daily-weekly-monthly-annual-agenda#)

## Implementation instructions

- Use `view: { agenda: { type: 'month' } }`.
- Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. Angular: use `HttpClient.jsonp()` instead. JS/jQuery: call `inst.setEvents(events)` in the callback.
- On `onEventClick`: show a Mobiscroll `Toast` with `args.event.title` as the message.

## What this demo shows

- Shows a monthly agenda view with events listed and grouped by date.
- **Header navigation** The month and year label in the top left opens date navigation. The previous and next arrows and the Today button on the right move between months and jump back to the current date.
- **Agenda list** The area below the header lists events for the selected month. Events in the agenda are grouped by date.
- **Sticky day headers** As the agenda scrolls vertically, each day stays visible with a sticky date header while its events appear underneath.
- **Events:** Events appear as agenda cards with a colored strip on the left and the event title next to it. Start and end times are stacked on the right side of timed events. All-day events show the all-day label on the right.
- **Event interaction** Hovering an event highlights it.
- **Event selection** Clicking an event selects and highlights it.

## Best for

- **Monthly event overviews** Showing a full month of scheduled items in a compact agenda list grouped by date.
- **Team calendars** Reviewing meetings, internal events, deadlines, and milestones without using a full calendar grid.
- **Appointment and booking lists** Presenting booked services or reservations by day while keeping event times visible.
- **Editorial and content schedules** Scanning publish dates, campaign tasks, or content deadlines across a month.
