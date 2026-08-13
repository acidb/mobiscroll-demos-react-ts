To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/customizing-day-header#).

## Demo description

You can use `renderAgendaDay` to set up a custom day header template. This provides flexibility to format and style the date according to your preferences, allowing further customization of the headers and ensuring a consistent layout that matches your page's overall design.

In this demo, setting the `showEmptyDays`  property to true allows us to add functionalities to the day header, such as creating new events for empty days, which is useful in various situations.

## Implementation instructions

- Use `view: { agenda: { type: 'month', showEmptyDays: true } }`. `showEmptyDays: true` ensures days with no events still render their day header row, which is where the custom template appears.
- Pass a custom day header via `renderAgendaDay` (React/JS/jQuery) / `agendaDayTemplate` (Angular) / `agendaDay` slot (Vue). The template receives the `day` object — render the date with `formatDate('D MMM YYYY', day.date)` and an "Add event" Button alongside it.
- On "Add event" click: append `{ title: 'Event', start: day.date }` to the events array (frameworks) or call `inst.addEvent(...)` (JS/jQuery), then show a Toast confirmation. Load initial events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. Angular: use `HttpClient.jsonp()`. JS/jQuery: call `inst.setEvents(events)` in the callback.

## What this demo shows

- Shows a monthly agenda view with events listed and grouped by date.
- **Header navigation** The month and year label in the top left opens date navigation. The previous and next arrows and the Today button on the right move between months and jump back to the current date.
- **Agenda list** The area below the header lists events for the selected month. Events in the agenda are grouped by date.
- **Sticky day headers** As the agenda scrolls vertically, each day stays visible with a sticky date header while its events appear underneath.
- **Custom day headers** Each day header includes a blue + Add event button on the right. The button is highlighted on hover.
- **Adding events** Clicking + Add event creates an event for that day and displays an Event added toast at the bottom center of the agenda.
- **Events** Events appear as agenda cards with a colored strip on the left and the event title next to it. Start and end times are stacked on the right side of timed events. All-day events show the all-day label on the right.
- **Event interaction** Hovering an event highlights it.
- **Event selection** Clicking an event selects and highlights it.

## Best for

- **Daily event creation** Agenda interfaces where users need to add an event directly from the relevant date header, including days that do not yet contain events.
- **Appointment calendars** Month-based appointment lists that keep date context visible while users review and add appointments.
- **Workforce scheduling** Shift or assignment agendas where schedulers need a quick date-specific action for creating new entries.
- **Operations planning** Delivery, maintenance, or service schedules organized by day, with a persistent date header during scrolling.
