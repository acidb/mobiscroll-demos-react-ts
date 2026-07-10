To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/control-number-of-concurrently-shown-events#).

## Demo description

The scheduler renders all concurrent (overlapping) events by default, and the available horizontal space will be divided between them.
When there are a lot of concurrent events, displaying all of them isn't always helpful.

A maximum number of concurrent events can be set by passing a number to the `maxEventStack`
property of the `view.scheduler` option.

Alternatively `maxEventStack: 'auto'` can also be set, in this case the value will be determined automatically,
based on the available horizontal space.
It's poosible to also set a minimum event width, using the `minEvenWidth` property of the `view.scheduler` option.
If not specified, it defaults to 50px;

## Implementation instructions

- Use `view: { scheduler: { type: 'week', allDay: false, maxEventStack: 2 } }` — a weekly scheduler with the all-day row hidden. `maxEventStack: 2` limits visible concurrent events per time slot to 2; excess overlapping events are collapsed behind a "+N more" indicator.
- `maxEventStack` accepts a number (hard cap) or `'auto'` (limit determined by available horizontal space). When using `'auto'`, set `minEventWidth` on the same `view.scheduler` object to control the minimum column width allocated per event; it defaults to 50 if omitted.
- Define events as inline static data. Use `new Date(year, month, day ± N, hour)` offsets to anchor events relative to today, and RRULE strings (e.g., `recurring: 'FREQ=WEEKLY;BYDAY=MO,TH'`) for recurring events.

## What this demo shows

- A desktop weekly scheduler layout with a fixed week strip at the top and a scrollable scheduler time grid for the selected week.
- **View selection** A configuration panel next to the scheduler lets users switch between `Day view` and `Week view`, with week view selected by default.
- **Label count options** Below the segmented controls, an option list is shown from which users can choose between: `Show all event` (will display all concurrent events), `Show up to (a specified maximum number of) labels` (specify the maximum number of events shown), or `Events depending on available space` (showing as many events as fit).
- **Default label behavior** `Show all event` is selected by default, so all concurrent events are displayed.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed strip below the header displays the days of the selected week, with the current date highlighted by a blue circle.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected week.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **More events popover** When the visible label count is limited, hidden events are collapsed behind a `+X` label, where `X` is the number of hidden events.
- **Popover interaction** Clicking the `+X` label opens a popover that lists the hidden events for that time period.
- **Current time** A blue current-time line appears across the time grid, with a small blue dot marking the current date.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Healthcare scheduling** Managing doctor appointments, consultations, and overlapping patient visits across multiple practitioners or rooms.
- **Field service and maintenance planning** Coordinating technician schedules, service calls, and on-site appointments when multiple jobs can happen at the same time.
- **Educational institutions** Organizing class schedules, office hours, tutoring sessions, and resource bookings throughout the week.
