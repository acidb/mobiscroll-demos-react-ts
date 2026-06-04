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

- Use the `invalid` option with an array of invalid rules to disable both recurring and specific dates.
- **Recurring invalids** To disable weekends, use a recurring rule such as `recurring: { repeat: 'weekly', weekDays: 'SA,SU' }`.
- **Specific invalid ranges** To disable a fixed date range, pass objects such as `{ start: new Date(2020, 11, 19), end: new Date(2020, 11, 20) }`.
- **Built-in validation mode** Control how event creation and updates interact with invalid ranges through the `invalidateEvent` option.
- **`invalidateEvent: 'strict'`** This is the default mode and prevents any overlap with invalid ranges.
- **`invalidateEvent: 'start-end'`** This mode only checks whether the event start or end falls on an invalid range, while allowing other overlaps.
- **Failed create or move attempts** When a user drags or creates an event on invalid dates, the action is denied automatically and the `onEventCreateFailed` or `onEventUpdateFailed` events are triggered.

## What this demo shows

- A desktop month view event calendar shows a full month grid with event labels displayed directly inside the day cells.
- **Invalid days** Weekends are disabled through recurring invalid rules, and additional specific dates are disabled separately.
- **Disabled cell styling** Invalid day cells have a gray overlay that indicates events cannot be created on those days.
- **Event rendering** Days with events show label-style event cards inside the cell.
- **Event label layout** Each event label has a colored line on the left, the event title in the middle, and an `end` label with the event's end time on the right.
- **Event label states** Event labels are highlighted on hover and on selection.
- **Validation mode selector** A control panel next to the calendar includes the text `Configure the built-in validation.` with two selectable validation modes.
- **Validation options** One option allows events to start and end only on valid dates while still allowing overlap with invalid ranges.
- **Validation options** The default selected option prevents events from overlapping invalid ranges at all.
- **Cell hover behavior** Hovering a day cell highlights the day number in the top-right corner and also highlights the events in that cell.
- **Day selection** Clicking the empty area of a day cell selects the day and shows the day number with a blue highlighted background.
- **Event creation** Double-clicking or dragging on an empty part of a day cell starts event creation.
- **Validation during creation** Event creation follows the active validation mode and is blocked on invalid dates or invalid overlaps based on the selected option.
- **Calendar header** The header shows the current month and year on the left.
- **Navigation** Previous and next arrow buttons move between months, and a `Today` button between them returns the calendar to the current date.

## Best for

- **Booking and availability rules** Useful when certain days must stay unavailable for booking, scheduling, or reservation creation.
- **Office closures and non-working days** A good fit for workflows where weekends, holidays, or blackout dates should not accept new events.
- **Operational scheduling** Works well for teams that need to enforce date-based scheduling restrictions while still allowing users to view existing events.
- **Validation policy comparisons** Helpful when you want to compare stricter invalid-range enforcement with a more permissive start-and-end-only validation rule.
- **Guided event creation** Useful in products where users create events directly on the calendar and need immediate visual feedback about which dates are valid.
