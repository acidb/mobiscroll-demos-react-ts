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

## Related demos

- **Want to prevent double booking?** [Learn how to manage event overlaps &#8594;](https://demo.mobiscroll.com/react/scheduler/prevent-double-booking-events#)
