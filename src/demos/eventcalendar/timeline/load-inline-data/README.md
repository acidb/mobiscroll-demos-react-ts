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

## What this demo shows

- A desktop daily timeline where hours are arranged horizontally and resource arranged vertically on the left.
- **Header navigation** The month and year label opens date navigation, while the previous and next arrows move between days and the Today button returns to the current date.
- **Day view** The strip below the header shows the selected days, with the current date highlighted. The timeline displays hourly columns from 12 AM to 12 PM.
- **Resources** Multiple resources are shown as separate timeline rows.
- **Current time** A vertical blue line with a time label marks the current time.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event cards** Events appear as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed below the title.
- **Date positioning** Events are positioned by their assigned resource and exact date range.
- **Event interaction** Events highlight on hover and show drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging across a time range.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through time and resources.

## Best for

- **Business schedules** Daily meeting-heavy calendars for product teams, leadership groups, internal planning, and other workdays with overlapping appointments.
- **Operational scheduling** Use cases such as field service, medical scheduling, conference planning, or shift coordination where users need a fast day-by-day view on mobile.
