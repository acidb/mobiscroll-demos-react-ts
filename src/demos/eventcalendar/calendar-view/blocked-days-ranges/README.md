To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/blocked-days-ranges#).

## Demo description

Entire days and ranges can be blocked out to manage event creation and editing more efficiently.

To disable specific or recurring days you can pass an array to the `invalid` option. A couple of examples:

- To disable weekends, use the [recurring object](https://demo.mobiscroll.com/react/eventcalendar/recurring-events#) - `recurring: { repeat: 'weekly', weekDays: 'SA,SU' }`
- Disable a specific range - `{ start: new Date(2020, 11, 19), end: new Date(2020, 11, 20) }`

When dragging events onto disabled days, they will automatically be denied and

`onEventCreateFailed`

/

`onEventUpdateFailed`

events will be triggered, from which custom logic can be executed to show a toast or maybe a modal for data correction. The built-in logic of how the calendar handles validation on user interaction can be controlled through the `invalidateEvent` option:

- `'strict'` - Strict being the default, no event overlap is allowed with invalid ranges.
- `'start-end'` - With start-end validation the calendar checks if the start or end of the event coincides with any invalid range. Other overlaps are allowed.

If you're interested in invalids for a given range (including recurring occurrences), you can use the `getInvalids` function.

## Implementation instructions

- Set `view: { calendar: { labels: true } }`. Enable `dragToCreate: true`, `dragToMove: true`, and `dragToResize: true` so users can create and edit events interactively.
- Pass an `invalid` array to block days. Use a recurring rule for recurring days — for example weekends: `{ recurring: { repeat: 'weekly', weekDays: 'SA,SU' } }`. Block specific date ranges with `{ allDay: true, start: '...', end: '...' }`.
- Set `invalidateEvent` to control how strictly events interact with invalid ranges: `'strict'` (the default) blocks any overlap with an invalid range; `'start-end'` allows overlap but prevents the event start or end from landing on an invalid range.
- Handle `onEventCreateFailed` and `onEventUpdateFailed` (Vue: `@event-create-failed`, `@event-update-failed`) to show a `Toast` when Mobiscroll blocks a creation or move due to an invalid date.
- Load events from a remote endpoint using `getJson` and assign them to `data`; for the imperative API, call `inst.setEvents(events)` in the callback.

## What this demo shows

- A desktop month view event calendar shows a full month grid with event labels displayed directly inside the day cells.
- **Invalid days** Weekends are disabled through recurring invalid rules, and additional specific dates are disabled separately.
- **Disabled cell styling** Invalid day cells have a gray overlay that indicates events cannot be created on those days.
- **Month grid** Day cell display events, each event label has a colored line on the left, the event title, and the end time of the event on the right.
- **Event interaction** Hovering over or selecting an event label highlights it and shows resize handles on both sides, indicating that the event can be resized by clicking and dragging.
- **Validation mode selector** A control panel next to the calendar (left side) `Configure the built-in validation` includes two selectable validation modes.
- **Validation options** The first option `Events cannot start or end on invalids, but can overlap` allows events to start and end only on valid dates while still allowing overlap with invalid days.
- **Validation options** The default selected option `Events cannot overlap invalid ranges at all` prevents events from overlapping invalid days.
- **Day cell states** Hovering a day cell highlights the day number with a gray background, while clicking the empty part of the cell selects the day and highlights the day number with a blue background.
- **Event creation** Clicking and dragging on an empty part of a day cell creates a new event.
- **Validation during creation** Event creation follows the active validation mode and is blocked on invalid dates or invalid overlaps based on the selected option.
- **Calendar header** The header shows the current month and year on the left, and blue month navigation arrows with a `Today` button between them on the right.

## Best for

- **Booking and availability rules** Useful when certain days must stay unavailable for booking, scheduling, or reservation creation.
- **Office closures and non-working days** A good fit for workflows where weekends, holidays, or blackout dates should not accept new events.
- **Operational scheduling** Works well for teams that need to enforce date-based scheduling restrictions while still allowing users to view existing events.
- **Validation policy comparisons** Helpful when you want to compare stricter invalid-range enforcement with a more permissive start-and-end-only validation rule.
