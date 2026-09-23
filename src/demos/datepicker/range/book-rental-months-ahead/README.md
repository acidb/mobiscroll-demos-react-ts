To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/range/book-rental-months-ahead#).

## Demo description

Use the multiple month view of the date picker for building an availability calendar for a vacation rental. The [colored backgrounds and labels](https://demo.mobiscroll.com/react/range/dots-colors-labels#) can be used to display season and pricing information and [half-day styling](https://demo.mobiscroll.com/react/range/half-day-styling#) to show check-in and check-out dates.

Booked dates are [disabled](https://demo.mobiscroll.com/react/range/disabled-invalid-values#) and validation on check-in and check-out dates is automatic based on the data as a range for a new booking is applied.

## Implementation instructions

- Set `select: 'range'`, `controls: ['calendar']`, `display: 'inline'`, `calendarType: 'month'`, and `calendarSize: 6` on `Datepicker` to render six consecutive months of an inline range calendar.
- `min` restricts selection to today or later (e.g. `min: <today's date>`).
- Seasonal/pricing backgrounds are supplied through the `colors` option as an array of `{ background, cellCssClass, start, end, recurring: { repeat: 'yearly', month, day } }` entries — one entry per season block (pre-season, in-season, off-season), each with its own CSS background color and cell class, recurring yearly.
- Daily rates are shown via the `labels` option as an array of `{ date, text, textColor }` (or `{ start, end, text, textColor }` for a booked span) entries, one per date/range, rendering the price or "booked" text inside each cell.
- Existing bookings are excluded from selection through `invalid`, passed as an array of `{ start, end }` date-range objects matching each booking's check-in/check-out span.
- `inRangeInvalid: false` (default) still allows a selected range's endpoints to land next to invalid dates while blocking overlap with them; `rangeEndInvalid: true` additionally disallows the invalid start/end boundary dates themselves from being chosen as range endpoints.
- The calendar header (season legend plus nav/prev/next controls) is a custom renderer: React uses the `renderCalendarHeader` prop (returning JSX with `CalendarNav`, `CalendarPrev`, `CalendarToday`, `CalendarNext`); Angular uses `[calendarHeaderTemplate]` bound to an `ng-template` containing `mbsc-calendar-nav`/`mbsc-calendar-prev`/`mbsc-calendar-next`; Vue uses the `#header` named slot on `MbscDatepicker` containing `MbscCalendarNav`/`MbscCalendarPrev`/`MbscCalendarNext`.

## What this demo shows

- Displays availability across six consecutive months in a multi-month range booking calendar.
- **Seasonal pricing** Uses distinct date-cell backgrounds to identify pre-season, in-season, and off-season pricing periods.
- **Daily rates** Shows the price inside each available date cell for at-a-glance rate comparison.
- **Booked dates** Displays existing bookings in the calendar and distinguishes them from available dates.
- **Range selection** Highlights the check-in and check-out dates and the selected period between them.
- **Availability validation** Prevents users from selecting a range that conflicts with an existing booking.
- **Unavailable dates** Uses subdued styling for disabled dates while keeping the surrounding pricing and availability context visible.
- **Navigation** Supports moving between calendar periods and returning to the current date with the Today action.

## Best for

- **Accommodation booking** Showing long-term availability and seasonal rates for hotels, apartments, and other lodging.
- **Vacation rentals** Comparing daily prices and selecting stays around existing bookings.
- **Vehicle rentals** Presenting availability and rates across an extended booking window.
- **Seasonal pricing** Communicating rate changes across pre-season, in-season, and off-season periods.
- **Availability-based reservations** Preventing range selections that overlap unavailable or booked dates.
