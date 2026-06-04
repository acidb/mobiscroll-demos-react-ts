To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/property-booking-calendar#).

## Demo description

When keeping records of bookings, the event calendar with exact label displays can come in handy. The labels 
accurately mark the exact start (e.g. 14:00) and end times (e.g. 11:00) of bookings, consolidating all booking 
records in a single, clear view.

By combining the `eventDisplay: 'exact'` setting under the `view` option with customizable `renderCalendarEventContent` , you can tailor the calendar to your specific needs. This allows you to create an efficient and user-friendly booking planning UI, ensuring all your bookings are easily managed and clearly displayed.

## Implementation instructions

- Use `calendar: { type: 'month', eventDisplay: 'exact' }` in the view config so each booking renders as a proportional bar spanning its exact check-in-to-check-out date range.
- Give each event a custom `icon` property (platform logo URL), a `title` (guest name), a per-platform `color`, and `start`/`end` both set to 12:00 to represent noon check-in and noon check-out.
- Use `renderCalendarEventContent` (Angular: `calendarEventContentTemplate`, Vue: `calendarEventContent`) to render each label as the platform icon image followed by the guest name.
- Set `extendDefaultEvent` to snap newly created reservations to noon boundaries: set `start` to 12:00 on the drag-start day and `end` to 12:00 on the following day.
- Enable `clickToCreate`, `dragToCreate`, `dragToMove`, `dragToResize`, and `eventOverlap={false}` for full drag-based booking management with automatic overlap prevention.
- In `onEventCreateFailed` and `onEventUpdateFailed`, show a `Toast` with an overlap error message.

## What this demo shows

- A full month Eventcalendar for reservation tracking, with booking labels rendered directly inside the day cells and positioned by exact check-in and check-out times.
- **Header controls** The calendar includes standard month and year navigation, previous and next arrows, and a Today button.
- **Event labels** Reservation labels use exact timing, so they appear inside the day cells according to their start and end times.
- **Event label content** Each booking label shows the reservation guest name and the logo of the platform where the booking was made, such as Airbnb, Booking.com, or MakeMyTrip.
- **Platform colors** Label colors identify the booking platform: yellow for Airbnb, red for Booking.com, and green for MakeMyTrip.
- **Event selection** Clicking a reservation label selects it and highlights the selected booking.
- **Cell hover state** Hovering over a day cell highlights the day number in the top-right corner.
- **Day selection** Clicking empty space in a day cell selects that day and highlights the day number with a blue background.
- **Creating reservations** Double-clicking empty space or clicking and dragging across empty space creates a new event.
- **Exact-time placement** Newly created events start at 12:00 AM by default because exact label display is enabled, so they appear around the middle of the selected or dragged day cell.
- **Overlap validation** If a new reservation would overlap an existing one, the calendar shows a toast message explaining that reservations cannot overlap in the same time period.

## Best for

- **Single-unit reservation overview** Room, property, and short-stay booking interfaces where users need to see reservations directly in a month grid.
- **Reservation management** Booking systems that need to display reservations with exact time labels instead of all-day occupancy blocks.
- **Multi-platform booking records** Workflows that collect reservations from platforms such as Airbnb, Booking.com, and MakeMyTrip into one calendar view.
- **Operational overview** Monthly planning screens where users need to review existing bookings, spot availability, and keep reservation records organized.
