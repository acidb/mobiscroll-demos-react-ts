To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/load-inline-data#).

## Demo description

What is a timeline without any events in it? To populate it with events all you have to do is pass the event array to the `data` option.

In a real-world scenario you would probably [load the events from a remote resource](https://demo.mobiscroll.com/react/timeline/load-events-from-remote-api#) or event better, [load them on demand](https://demo.mobiscroll.com/react/timeline/load-events-on-demand#). However the point of this example is to understand how easy it is to add events to the timeline.

- **Do you want to learn about the event data sctructure?** [See how the event object is built &#8594;](https://demo.mobiscroll.com/react/timeline/event-data-structure#)

## Related demos

- [See how the event object is built &#8594;](https://demo.mobiscroll.com/react/timeline/event-data-structure#)

## Implementation instructions

- Use `timeline: { type: 'day' }` — a single-day view.
- Define 5 resources: Resource A (yellow `#fdf500`), Resource B (red `#ff0101`), Resource C (blue `#01adff`), Resource D (green `#239a21`), Resource E (orange `#ff4600`).
- Pass a static array directly to the `data` option.
- The dataset demonstrates the full range of Mobiscroll event patterns:
  - **Timed events** with `dyndatetime` offsets (yesterday, today, tomorrow, today+N) so the demo always shows content relative to the current date
  - **Multi-day events** spanning several days, including events crossing midnight
  - **All-day events** via `allDay: true`
  - **Multi-resource events** by setting `resource` to an array of IDs (e.g. `resource: [1, 4, 5]`) — the event appears in all listed resource rows simultaneously
  - **Recurring yearly events** using `recurring: { repeat: 'yearly', month: M, day: D }`, including entries anchored to the current month via `now.getMonth() + 1`
  - **Recurring weekly events** using `recurring: { repeat: 'weekly', weekDays: 'WE' }` for specific weekday patterns
