To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/daily-agenda-with-week-calendar#).

## Demo description

With the agenda you can list out events for any range grouped by days. Use it as a stand alone UI component or combine it with a [calendar week view](https://demo.mobiscroll.com/react/calendar/week-view#) to make navigation easier.

You can add the components - like the calendar and agenda - and configure them in the `view` option.

- **Interested to learn about the calendar view?** [Check out the event calendar →](https://demo.mobiscroll.com/react/eventcalendar/#)

## Related demos

- [Check out the event calendar →](https://demo.mobiscroll.com/react/eventcalendar/#)

## Implementation instructions

- Use `view: { calendar: { type: 'week' }, agenda: { type: 'day' } }` — the week calendar grid and the daily agenda list are rendered together as a single component; clicking a day in the calendar scrolls the agenda to that day.
- Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. Angular: use `HttpClient.jsonp()` instead. JS/jQuery: call `inst.setEvents(events)` in the callback.
- On `onEventClick`: show a Mobiscroll `Toast` with `args.event.title`.

## What this demo shows

- Shows a mobile-friendly week calendar paired with a daily agenda list in a single view.
- **Header navigation** The month and year label in the top left opens date navigation. The previous and next arrows and the Today button on the right move between weeks and jump back to the current date.
- **Week view** A week calendar is displayed at the top of the view.
- **Week navigation** The week strip can be changed by clicking and dragging left or right.
- **Day cell states** Hovering a day highlights the day number with a gray background. Selecting a day highlights the day number with a blue background. The current date is highlighted by default.
- **Event markers** Days with events show a small dot marker inside the day cell.
- **Agenda list** The area below the calendar lists events for the selected day.
- **Date selection** Selecting a day in the week calendar updates the agenda to show events for that date.
- **Events** Events are displayed as agenda cards with a colored strip on the left, the event title next to it, and the start and end time stacked on the right.
- **Event interaction** Hovering an event highlights it.
- **Event selection** Clicking an event selects and highlights it, then shows a toast message with the event title.

## Best for

- **Mobile agendas** Combining compact week navigation with a focused list of events for the selected day.
- **Daily schedules** Showing appointments, tasks, shifts, or bookings one day at a time while keeping nearby dates visible.
- **Personal planning** Letting users move quickly between days and review the events scheduled for each date.
- **Field or service teams** Supporting mobile-friendly daily schedules where users need fast access to the current week and selected day.
- **Booking and appointment apps** Displaying a selected day’s events below a week calendar without switching to a separate screen.
- **Lightweight planning views** Giving users a simple week-at-a-glance control with a detailed agenda below it.
