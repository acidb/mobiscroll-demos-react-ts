To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/calendar/single-select#).

## Demo description

Single value selection is the default behavior of the date picker. You can explicitly enable it by setting the `selectMultiple` to `false`.

You can dynamically switch between single and multiple select or range select which helps with building a system for one-way and two-way bookings.

- **Looking for multiple select?** [See how to enable multi-select →](https://demo.mobiscroll.com/react/calendar/multiple-select#)

## Related demos

- [See how to enable multi-select →](https://demo.mobiscroll.com/react/calendar/multiple-select#)

## What this demo shows

- Three inline examples demonstrate different ways to combine single-date selection with optional time selection.
- **Header navigation** The month and year label in the top left opens a month and year picker. The blue previous and next arrow buttons on the right navigate between months.
- **Month view** A fixed weekday header displays abbreviated day names from Sunday through Saturday, with the dates arranged in a grid below it.
- **Month navigation** The month can be changed by clicking and dragging the calendar left or right.
- **Day cell states** Hovering a day highlights the day number with a gray background. Selecting a day highlights the day number with a blue background. The current date is highlighted by default and remains blue when the user selects another date.
- **Adjacent months** Dates from the previous and next months appear with a muted style. Selecting one navigates the calendar to the corresponding month. 
- **Calendar selection:** The first example shows an inline, single-month date picker for selecting one date.
- **Calendar and scroller time selection:** The second example places a scroller-based time picker next to the single-month calendar. Its three scrollers contain hours from 1 to 12, minutes from 0 to 59, and AM/PM options. Users scroll each one to select an exact time.
- **Calendar and time grid selection:** The third example pairs a single-month date picker with a time slot picker displayed beside it.

## Best for

- **Date-only selection:** Choosing a single date for a delivery, deadline, reminder, or one-way booking.
- **Appointment scheduling:** Selecting an appointment date and exact time with an inline calendar and scroller-based time picker.
- **Reservations:** Choosing a date and time slot for a service, table, room, or other reservable item.
- **Interface comparison:** Evaluating scroller-based and time-grid selection patterns alongside the same single-month calendar.
