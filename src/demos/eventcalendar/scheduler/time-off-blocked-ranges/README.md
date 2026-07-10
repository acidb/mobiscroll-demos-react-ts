To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/time-off-blocked-ranges#).

## Demo description

Entire days and time ranges can be blocked out to manage event creation and editing more efficiently.

To disable specific times, ranges, days or recurring days and times you can pass an array to the `invalid` option. A couple of examples:

- To disable weekends, use the [recurring object](https://demo.mobiscroll.com/react/scheduler/recurring-events#) - `recurring: { repeat: 'weekly', weekDays: 'SA,SU' }`
- Lunch break between 12 PM and 1 PM with `title` - `{ start: "12:00", end: "13:00", title: 'Lunch break', recurring: { repeat: 'weekly', weekDays: 'MO,TU,WE,TH,FR' }`

When dragging events onto disabled days or time-slots, they will automatically be denied and

`onEventCreateFailed`

 /

`onEventUpdateFailed`

 events will be triggered, from which custom logic can be executed to show a toast or maybe a modal for data correction.
The built-in logic of how the calendar handles validation on user interaction can be controlled through the
`invalidateEvent` option:

- `'strict'` - Strict being the default, no event overlap is allowed with invalid ranges.
- `'start-end'` - With start-end validation the calendar checks if the start or end of the event coincides with any invalid range. Other overlaps are allowed.

If you're interested in invalids for a given range (including recurring occurrences), you can use the `getInvalids` function.

- **Want to prevent double booking?** [Learn how to manage event overlaps &#8594;](https://demo.mobiscroll.com/react/scheduler/prevent-double-booking-events#)

## Related demos

- [Learn how to manage event overlaps &#8594;](https://demo.mobiscroll.com/react/scheduler/prevent-double-booking-events#)

## Implementation instructions

- Use `view: { scheduler: { type: 'week' } }`. Enable `dragToCreate: true`, `dragToMove: true`, `dragToResize: true`. Set `invalidateEvent: 'strict'`.
- Load events via `getJson` from a JSONP endpoint on mount; for the imperative API, call `inst.setEvents(events)`.
- Pass an `invalid` array with four recurring ranges:
  - Weekends: `{ recurring: { repeat: 'weekly', weekDays: 'SA,SU' } }`
  - Lunch break: `{ start: '12:00', end: '13:00', title: 'Lunch break', recurring: { repeat: 'weekly', weekDays: 'MO,TU,WE,TH,FR' } }`
  - Before-hours: `{ start: '00:00', end: '08:00', recurring: { repeat: 'weekly', weekDays: 'MO,TU,WE,TH,FR' } }`
  - After-hours: `{ start: '17:00', end: '23:59', recurring: { repeat: 'weekly', weekDays: 'MO,TU,WE,TH,FR' } }`
- On `onEventCreateFailed`, show a toast: "Can't create event on this date". On `onEventUpdateFailed`, show a toast: "Can't add event on this date".

## What this demo shows

- A desktop weekly scheduler layout with a fixed week strip at the top, a fixed all-day row below it, and a scrollable scheduler time grid for the selected week.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed strip below the header displays the days of the selected week, with the current date highlighted by a blue circle.
- **All-day events** All-day events appear in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected week.
- **Invalid days** Weekends are disabled with recurring invalid rules.
- **Invalid hours** Additional recurring invalid ranges disable weekday lunch breaks from 12 PM to 1 PM.
- **Disabled cell styling** Invalid day cells use a gray overlay to indicate that events cannot be created there.
- **Validation mode selector** A side panel labeled `Configure the built-in validation` provides two selectable validation modes.
- **Validation options** The `Events cannot start or end on invalids, but can overlap` mode allows events to start and end only on valid times while still allowing overlap with invalid ranges.
- **Validation options** The default `Events cannot overlap invalid ranges at all` mode prevents events from overlapping invalid ranges.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid, with a small blue dot marking the current date.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Booking and availability rules** Useful when specific days or time ranges must remain unavailable for booking, scheduling, or reservation creation.
- **Office closures and non-working time** A good fit for workflows where weekends, holidays, lunch breaks, or blackout periods should not accept new events.
- **Operational scheduling** Works well for teams that need to enforce scheduling restrictions while still showing existing events in context.
- **Validation policy comparisons** Helpful for comparing strict invalid-range enforcement with a more permissive start-and-end validation rule.
