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
