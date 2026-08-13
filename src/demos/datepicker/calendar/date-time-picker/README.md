To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/calendar/date-time-picker#).

## Demo description

The date picker ships with five built-in variations for rendering the UI. The controls option supports the following:

- `date` - renders a date-only scroller or dropdown control
- `time` - renders a time-only scroller or dropdown control
- `timegrid` - renders a time grid for time selection
- `datetime` - renders a date & time scroller or dropdown
- `calendar` - renders a calendar view for date picking

Use `controls: ['datetime']` for rendering a date & time picker within the same control, tied to the same input, or use them separately for two inputs - `controls: ['date']` and `controls: ['time']`. It will render a scrollers for `touchUi: true` and a dropdowns for `touchUi: false`.

For a time grid use the `controls: ['timegrid']` instead of `'time'`.

- **Interested in dynamically switching between modes?** [Learn how to set up responsive behavior →](https://demo.mobiscroll.com/react/calendar/responsive#)

## Related demos

- [Learn how to set up responsive behavior →](https://demo.mobiscroll.com/react/calendar/responsive#)

## What this demo shows

- Two inline examples demonstrate different ways to combine date and time selection.
- **Header navigation** The month and year label in the top left opens a month and year picker. The blue previous and next arrow buttons on the right navigate between months.
- **Month view** A fixed weekday header displays abbreviated day names from Sunday through Saturday, with the dates arranged in a grid below it.
- **Month navigation** The month can be changed by clicking and dragging the calendar left or right.
- **Day cell states** Hovering a day highlights the day number with a gray background. Selecting a day highlights the day number with a blue background. The current date is highlighted by default and remains blue when the user selects another date.
- **Adjacent months** Dates from the previous and next months appear with a muted style. Selecting one navigates the calendar to the corresponding month. 
- **Scroller time picker** The first example places a scroller-based time picker next to the single-month calendar. Its three rows contain hours from 1 to 12, minutes from 0 to 59, and AM/PM options. Users scroll each row to select an exact time.
- **Time grid picker** The second example places a time grid next to the single-month calendar. It presents 30-minute time slots from 12:00 AM through 12:00 PM.

## Best for

- **Appointment scheduling** Let users choose a calendar date and an exact appointment time with the scroller.
- **Date and time entry** Present date and time controls together in an inline, side-by-side layout.
- **Compact time selection** Use the scroller when users need to choose hours, minutes, and AM or PM independently.
- **Fixed-interval booking** Use the time grid when users choose from predefined 30-minute slots, such as for appointments or reservations.
- **Selection pattern comparison** Compare scroller and time grid interactions before choosing the approach that fits a date and time workflow.
