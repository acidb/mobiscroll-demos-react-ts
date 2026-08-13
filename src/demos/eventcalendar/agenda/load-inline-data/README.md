To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/load-inline-data#).

## Demo description

What is an agenda without any events in it? To populate it with events all you have to do is pass the event array to the data option.

In a real-world scenario you would probably [load the events from a remote resource](https://demo.mobiscroll.com/react/agenda/load-events-from-remote-api#) or event better, [load them on demand](https://demo.mobiscroll.com/react/agenda/load-events-on-demand#). However the point of this example is to understand how easy it is to add events to the agenda.

- **Do you want to learn about the event data sctructure?** [See how the event object is built →](https://demo.mobiscroll.com/react/agenda/event-data-structure#)

## Related demos

- [See how the event object is built →](https://demo.mobiscroll.com/react/agenda/event-data-structure#)

## Implementation instructions

- Use `view: { agenda: { type: 'month' } }`. Pass a static event array directly to the `data` option — no remote loading.
- The array demonstrates the three main event types in one place:
  - **Timed events**: `start` and `end` set to specific times using the `dyndatetime()` helper (demo repo utility for relative dates, e.g. `dyndatetime('y,m,d,9')` = today at 09:00, `dyndatetime('y,m,d+1,7')` = tomorrow at 07:00).
  - **All-day multi-day events**: `allDay: true` with `start`/`end` as date-only values.
  - **Recurring events**: `recurring: { repeat: 'yearly', month: ..., day: ... }` for annual events; `recurring: { repeat: 'weekly', weekDays: 'WE' }` for weekly events. Recurring events have no `start`/`end` — only the `recurring` rule and `allDay: true`.

## What this demo shows

- Shows a monthly agenda view with events listed and grouped by date.
- **Header navigation** The month and year label in the top left opens date navigation. The previous and next arrows and the Today button on the right move between months and jump back to the current date.
- **Agenda list** The area below the header lists events for the selected month. Events in the agenda are grouped by date.
- **Sticky day headers** As the agenda scrolls vertically, each day stays visible with a sticky date header while its events appear underneath.
- **Events** Events appear as agenda cards with a colored strip on the left and the event title next to it. Start and end times are stacked on the right side of timed events. All-day events show the all-day label on the right.
- **Event interaction** Hovering an event highlights it.
- **Event selection** Clicking an event selects and highlights it.

## Best for

- **Monthly event overview** Showing a full month of events in a compact agenda layout.
