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
