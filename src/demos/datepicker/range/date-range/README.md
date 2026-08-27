To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/range/date-range#).

## Demo description

Set up the range picker for date pair selection. Regardless if you are interested in the start/end date or the actual range, you have several possibilities of rendering a date range picker. The `controls` option supports different values:

- `calendar` - will render a calendar view for date range selection
- `date` - will render a date scroller or dropdown for date range selection
- `datetime` - will render a compact date scroller or dropdown with time picker for date & time range selection ([explore date & time ranges](https://demo.mobiscroll.com/react/range/date-time-range#))
- `time` - will render a time picker for range selection ([explore time ranges](https://demo.mobiscroll.com/react/range/time-range#))
- `timegrid` - will render a time grid for range selection ([explore time ranges](https://demo.mobiscroll.com/react/range/time-range#))

## What this demo shows

- Shows five range picker examples for selecting start and end dates.
- **Inline calendar** The first example displays two months in an inline calendar for range selection.
- **Inline date scroller** The second example uses an inline date scroller designed for touch interaction.
- **Preset date range** The third example displays a two-month inline calendar with preset selection parameters instead of unrestricted start and end date selection.
- **Input-triggered calendar** The fourth example opens a two-month range calendar below an input when the input is clicked.
- **Separate start and end inputs** The fifth example uses separate inputs for the start and end dates and opens a two-month range calendar for each input.
- **Popup behavior** Clicking outside the picker closes it.
- **Start and end controls** Clickable start and end inputs appear above the calendar header. The active input has a white background, while the inactive input has a gray background. A clear button appears after a range is selected.
- **Month view** A fixed weekday header displays abbreviated day names from Sunday through Saturday, with dates arranged in a grid below.
- **Month navigation** Drag the calendar left or right to move between months.
- **Day states** Hovering over a day highlights its number with a gray background. The first selected day sets the range start, and the second sets the range end. Selected days are highlighted in blue. The current date is highlighted by default and remains blue when another date is selected.
- **Footer actions** In the input-based examples, `Cancel` discards the change and `Set` confirms the selected date range. The `Set` button remains inactive until a complete range is selected.
- **Input value** Selecting `Set` displays the confirmed range in the input using a month, day, and year format.

## Best for

- **Travel bookings** Select check-in and check-out dates for hotels, rentals, and other accommodations.
- **Appointment scheduling** Define start and end dates for appointments, meetings, and reservations.
- **Event planning** Select start and end dates for multi-day events.
- **Reporting and analytics** Choose a date range for filtering reports, dashboards, and historical data.
