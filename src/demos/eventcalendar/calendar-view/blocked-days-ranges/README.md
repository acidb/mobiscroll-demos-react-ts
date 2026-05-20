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
