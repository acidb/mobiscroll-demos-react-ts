To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/control-number-of-concurrently-shown-events#).

## Demo description

The timeline renders all concurrent (overlapping) events by default, and the height of the resource row will increase to fit those events.
If equal row height is used, the available vertical space will be divided between them.
When there are a lot of concurrent events, displaying all of them isn't always helpful.

A maximum number of concurrent events can be set by passing a number to the `maxEventStack`
property of the `view.timeline` option.

## Implementation instructions

- Set `timeline: { type: 'week', resolutionHorizontal: 'day', eventDisplay: 'fill', maxEventStack: 2 }` under the `view` option. `maxEventStack: 2` caps the number of concurrent events shown per resource row to 2; any additional overlapping events are hidden (Mobiscroll shows a "+N more" indicator). Remove or increase the value to allow more stacked rows.
- Define 4 people resources without a `color` property — event colors are set per-event instead.
- Build the event dataset so that concurrent overlaps are visible: assign multiple overlapping timed events to the same resource on the same day (e.g. 08:00–16:00 and 08:00–18:00 on Resource 1; four overlapping events on Resource 4 on today's date). This makes the `maxEventStack` cap immediately visible.
- Use recurring events (RRULE string in the `recurring` field, e.g. `'FREQ=WEEKLY;BYDAY=MO'`) without a `resource` field to create week-spanning background events that appear on all resource rows.
- Assign an event to multiple resources simultaneously by setting `resource` to an array of IDs (e.g. `resource: [1, 2]`). The event appears as a separate block in each listed resource row.
- Use JavaScript `Date` offsets relative to today (`new Date(year, month, day - 1, ...)`) so overlapping events always fall around the current date and remain visible on load.

## What this demo shows

- A desktop weekly timeline layout with days arranged horizontally and resources listed vertically on the left.
- **Daily summary option** A configuration panel next to the timeline lets users enable or disable daily event summaries. The option is enabled by default.
- **Label count options** The configuration panel includes label display options for showing all events or limiting the number of visible labels.
- **Default label behavior** The demo uses the limited label option by default, with the maximum number of visible labels set to `2`.
- **Header navigation** The month and year label opens date navigation, while the previous and next arrows and the Today button move between weeks or return to the current day.
- **Week view** A fixed strip below the header shows the selected week using the `DD DDD MMM YYYY` date format, with the current date highlighted.
- **Resources** The left side of the timeline shows four resources.
- **Events** Events appear as colored labels with the job name shown in bold.
- **Event positioning** Events are placed by assigned resource and by start and end date.
- **Event interaction** Events highlight on hover and expose drag and resize handles for moving events or changing their duration.
- **Event selection** Clicking an event selects and highlights it.
- **More events indicator** When the visible label count is limited, hidden events are collapsed behind an `X more` label, where `X` is the number of hidden events.
- **More events popover** Clicking the `X more` label opens a popover that lists the hidden events.
- **Scrolling** The timeline supports both vertical and horizontal scrolling for navigating the timeline view.

## Best for

- **Healthcare** Managing doctor appointments, consultations, and overlapping patient visits across multiple practitioners or rooms.
- **Field service planning** Coordinating technician schedules, service calls, and on-site appointments when multiple jobs can overlap.
- **Education scheduling** Organizing classes, office hours, tutoring sessions, and resource bookings across a weekly timeline.
