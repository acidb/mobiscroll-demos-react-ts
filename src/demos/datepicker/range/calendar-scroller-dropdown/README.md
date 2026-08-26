To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/range/calendar-scroller-dropdown#).

## Demo description

The picker supports multiple controls:

- **Calendar view** - can be used on its own or combined with a time scroller
- **Date picker** - can be used separately or together with a time picker as a scroller on mobile and as a dropdown on desktop
- **Time picker** - can be used separately or together with a date picker or calendar
- **Datetime picker** - can be used as a scroller on mobile and as a dropdown on desktop

Use the controls option (expecting an array) to configure the picker.

## What this demo shows

- Shows five range picker examples for selecting a start and end date, time or date and time.
- **Calendar view** The first example opens a calendar view for range selection.
- **Input behavior** The range picker opens at the bottom of the input over a darkened backdrop. Clicking outside the picker closes it.
- **Start and end inputs** Clickable inputs appear above the header. The active input has a white background, while the inactive input has a gray background. A clear button appears after a range is selected.
- **Header navigation** The month and year label in the upper-left corner opens the month and year picker. The previous and next arrow buttons on the right navigate between months.
- **Month view** A fixed weekday header shows abbreviated day names from Sunday through Saturday, with dates arranged in a grid below.
- **Month navigation** Drag the calendar left or right to move between months.
- **Day cell states** Hovering over a day highlights its number with a gray background. The first selected day becomes the range start, and the second becomes the range end. Selected days are highlighted in blue. The current date is highlighted by default and remains blue when another date is selected.
- **Adjacent months** Dates from the previous and next months use a muted style. Selecting one navigates to its corresponding month.
- **Date picker** The second example renders a date scroller for touch and a dropdown for pointer interaction.
- **Date and time picker** The third example renders a compact (one wheel) date picker with time. The scroller can be used with touch interaction on mobile and the dropdown for pointer interaction on desktop.
- **Calendar and time picker** The fourth example renders a combined view of a calendar and time scroller/dropdown for date and time range selection.
- **Time picker** The fifth example renders a time scroller for touch and a dropdown for pointer interaction. The time format comes from the locale option that can be overridden.
- **Footer actions** The gray `Cancel` button discards the change, while the blue `Set` button confirms the selected date range. Until a range is selected, the `Set` button remains inactive.
- **Input value** Confirming a date with `Set` displays the selected range in the input using a month, day, and year format.

## Best for

- **Travel bookings** Select check-in and check-out dates for hotels, rentals, or other accommodations.
- **Appointment scheduling** Define a start and end date or time for appointments, meetings, or reservations.
- **Event planning** Select the start and end date and time for multi-day or timed events.
- **Reporting and analytics** Choose a date range for filtering reports, dashboards, or historical data.
- **Availability and working hours** Define time ranges for shifts, opening hours, or employee availability.
- **Rental and reservation periods** Select precise date and time ranges for cars, equipment, rooms, or other bookable resources.
