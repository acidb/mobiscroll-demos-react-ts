To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/customizing-day-header#).

## Demo description

You can use `renderAgendaDay` to set up a custom day header template. This provides flexibility to format and style the date according to your preferences, allowing further customization of the headers and ensuring a consistent layout that matches your page's overall design.

In this demo, setting the `showEmptyDays`  property to true allows us to add functionalities to the day header, such as creating new events for empty days, which is useful in various situations.

## Implementation instructions

- Use `view: { agenda: { type: 'month', showEmptyDays: true } }`. `showEmptyDays: true` ensures days with no events still render their day header row, which is where the custom template appears.
- Pass a custom day header via `renderAgendaDay` (React/JS/jQuery) / `agendaDayTemplate` (Angular) / `agendaDay` slot (Vue). The template receives the `day` object — render the date with `formatDate('D MMM YYYY', day.date)` and an "Add event" Button alongside it.
- On "Add event" click: append `{ title: 'Event', start: day.date }` to the events array (frameworks) or call `inst.addEvent(...)` (JS/jQuery), then show a Toast confirmation. Load initial events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. Angular: use `HttpClient.jsonp()`. JS/jQuery: call `inst.setEvents(events)` in the callback.
