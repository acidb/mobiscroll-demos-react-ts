To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/event-content-customization#).

## Demo description

Above the built in look & feel, the events can be customized in two ways:

- **Full event customization** - The agenda handles the listing and ordering of the events, while the full styling falls into your hands. Explore [this example](https://demo.mobiscroll.com/react/agenda/full-event-customization#) for more details.
- **Content-only customization** *(like in this example)* - When customizing only the content, the calendar handles the event `start` and `end` times, `allDay` and `color` rendering.

You will have to place and provide styling to the `title` field and any other custom fields you are using, like `description`, `location`, `participants`. You can add custom functionality, buttons and other custom components.

Pass a rendering function to the renderAgendaEventContent option. All original event fields along with computed fields like `isMultiDay`, `lastDay` can be used inside the function.

## Implementation instructions

- Use `view: { calendar: { type: 'week' }, agenda: { type: 'day' } }`. Load events from `https://trial.mobiscroll.com/custom-events/` via JSONP using `getJson(url, callback, 'jsonp')`. Angular: use `HttpClient.jsonp()`. For the imperative API, call `inst.setEvents(events)` in the callback. Events have a custom `participant` field (integer key) referencing a local participants lookup.
- Use `renderAgendaEventContent` (Angular: `agendaEventContentTemplate`, Vue: `agendaEventContent` slot) for content-only customization — the calendar keeps default `start`/`end`, `allDay`, and `color` rendering while the template controls the inner content. The template receives a `data` object with `title`, `original` (the full event with custom fields), `isMultiDay`, and `lastDay`.
- Render the participant's avatar image and name from the lookup map, plus an "Add participant" Button. On button click, show a Toast with the event title.

## What this demo shows

- Shows a mobile-friendly week calendar paired with a daily agenda list in a single view.
- **Header navigation** The month and year label in the top left opens date navigation. The previous and next arrows and the Today button on the right move between weeks and jump back to the current date.
- **Week view** A week calendar is displayed at the top of the view.
- **Week navigation** The week strip can be changed by clicking and dragging left or right.
- **Day cell states** Hovering a day highlights the day number with a gray background. Selecting a day highlights the day number with a blue background. The current date is highlighted by default.
- **Event markers** Days with events show a small dot marker inside the day cell.
- **Agenda list** The area below the calendar lists events for the selected day.
- **Date selection** Selecting a day in the week calendar updates the agenda to show events for that date.
- **Custom event content** Each agenda event displays a colored strip, the event title, and stacked start and end times. A participant avatar and name appear below the title, and an Add participant button appears below the times.
- **Event selection** Clicking an event selects and highlights it.

## Best for

- **Mobile agendas** Combining compact week navigation with a focused list of events for the selected day.
- **Daily schedules** Showing appointments, tasks, shifts, or bookings one day at a time while keeping nearby dates visible.
- **Personal planning** Letting users move quickly between days and review the events scheduled for each date.
- **Field or service teams** Supporting mobile-friendly daily schedules where users need fast access to the current week and selected day.
- **Booking and appointment apps** Displaying a selected day’s events below a week calendar without switching to a separate screen.
- **Lightweight planning views** Giving users a simple week-at-a-glance control with a detailed agenda below it.
