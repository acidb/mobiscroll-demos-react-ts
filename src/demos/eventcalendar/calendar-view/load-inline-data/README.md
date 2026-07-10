To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/load-inline-data#).

## Demo description

What is an event calendar without any events in it? To populate it with events all you have to do is pass the event array to the `data` option.

In a real-world scenario you would probably [load the events from a remote resource](https://demo.mobiscroll.com/react/eventcalendar/load-events-from-remote-api#) or event better, [load them on demand](https://demo.mobiscroll.com/react/eventcalendar/load-events-on-demand#). However the point of this example is to understand how easy it is to add events to the event calendar.

- **Do you want to learn about the event data sctructure?** [See how the event object is built &#8594;](https://demo.mobiscroll.com/react/eventcalendar/event-data-structure#)

## Implementation instructions

- Use `view: { calendar: { labels: true } }`.
- Define a static event array and pass it directly to the `data` prop/option — no remote fetch. Include a variety of event shapes: timed events (`start`, `end`, `title`, `color`), multi-day events, all-day events (`allDay: true`), and recurring events (e.g., `{ recurring: { repeat: 'yearly', month: 12, day: 25 }, allDay: true, title: 'Christmas Day', color: '#ff0066' }`). Use relative date helpers (`dyndatetime` or equivalent) so events always land near the current month regardless of when the demo is opened.
- No `data` prop change or async loading is needed after mount — the event array is fully static. For JS/jQuery, pass the array as the `data` option directly in the `eventcalendar()` init call.

## What this demo shows

- A month-view event calendar is displayed inside a smartphone frame.
- **Month grid** Days with events display event labels directly in the month cells with different visual styles based on the event type or event data.
- **Overflow handling** The number of visible event labels depends on the available height in each day cell. Additional events are collapsed behind an `X more` link.
- **Popover** Clicking the `X more` link opens a popover that shows the hidden events for that day.
- **Event interaction** Hovering over or selecting an event label highlights it.
- **Day cell states** Hovering a day cell highlights the day number with a gray background, while clicking the empty part of the cell selects the day and highlights the day number with a blue background.
- **Month navigation** You can move between months by clicking and dragging the calendar left or right.
- **Calendar header** The header shows the current month and year on the left, and blue month navigation arrows with a `Today` button (for jumping back to the current date) between them on the right.

## Best for

- **Monthly event overview** Showing a full month of events in a compact calendar layout.
