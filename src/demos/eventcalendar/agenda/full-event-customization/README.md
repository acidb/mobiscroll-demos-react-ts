To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/full-event-customization#).

## Demo description

Above the built in rendering mode you can either customize the full event or just the content of the event. If we break up the event into pieces there are four fields that we are interested in:

- The event `start` and `end` time
- Whether it is an `allDay` event or not
- The event `color`
- The event `title`

If you would like to keep the styling of the `start/end` times, `allDay` and `color` you will want to [customize the content only](https://demo.mobiscroll.com/react/agenda/event-content-customization#), not the full event. In case of the full event customization the agenda takes care of positioning the event container and everything else is your responsibility.

You will have to place and provide styling to all event fields. Beside the ones mentioned above you'll be able to render other custom fields, like `description`, `location`, `participants` ...

Pass a rendering function to the renderAgendaEvent option. All original event fields along with computed fields like `isMultiDay`, `lastDay` are available in the function.

## Implementation instructions

- Use `view: { agenda: { type: 'month' } }`. Load events from `https://trial.mobiscroll.com/agenda-events/` via JSONP using `getJson(url, callback, 'jsonp')`. Angular: use `HttpClient.jsonp()`. For the imperative API, call `inst.setEvents(events)` in the callback. Events have custom fields: `img` (image filename) and `location` (string).
- Use `renderAgendaEvent` (Angular: `agendaEventTemplate`, Vue: `agendaEvent` slot) for full event customization. The agenda handles positioning of the event container; all rendering of `start`/`end`, `allDay`, `color`, and `title` is the template's responsibility. The template receives a `data` object with: `title`, `start` (pre-formatted time string), `original` (the full event object including custom fields), `isMultiDay`, and `lastDay`.
- Inside the template, render a thumbnail image (sourced from `data.original.img`), the event title, and two side-by-side columns: location (`data.original.location`) and start time (`data.start`). Use Mobiscroll flex utilities (`mbsc-flex`, `mbsc-flex-1-1`) for the layout.

## What this demo shows

- Shows a monthly agenda view with events listed and grouped by date.
- **Header navigation** The month and year label in the top left opens date navigation. The previous and next arrows and the Today button on the right move between months and jump back to the current date.
- **Agenda list** The area below the header lists events for the selected month. Events in the agenda are grouped by date.
- **Sticky day headers** As the agenda scrolls vertically, each day stays visible with a sticky date header while its events appear underneath.
- **Custom event cards** Each event appears as a rich list item with a thumbnail image, title, location, and start time.
- **Custom layout** A full event template controls the agenda item layout, including its media and event details.
- **Event interaction** Hovering an event highlights it.

## Best for

- **Event guides** Pair event imagery with titles, locations, and start times in a scannable agenda.
- **Community calendars** Help people distinguish local events quickly using visual, location, and time details.
- **Conference schedules** Present sessions with recognizable imagery, venue details, and start times.
- **Travel itineraries** Organize scheduled stops and activities with location, time, and visual context.
- **Activity planners** Make planned activities easier to identify when several events appear on the same date.
- **Mobile event discovery apps** Support compact event browsing with the key details visible in each agenda item.
