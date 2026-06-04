To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/calendar/appointment-booking#).

## Demo description

Book single or multiple appointments depending on the use-case or set up recurring date and time selection. Limit the available dates with the `min` and `max` options. Make dates un-selectable with the `invalid` option.
Load pricing, available spots on demand and show it as [labels](https://demo.mobiscroll.com/react/calendar/dots-colors-labels#) that help people book the appointment.

The calendar can be displayed inline with one or more months or linked to an input. [Learn how to initialize the calendar.](https://demo.mobiscroll.com/react/calendar/usage-on-input-or-inline#)

- **Looking for flight or hotel booking?** [Check out the range picker →](https://demo.mobiscroll.com/react/range/flight-booking#)

## Related demos

- [Check out the range picker →](https://demo.mobiscroll.com/react/range/flight-booking#)

## Implementation instructions

- **Booking window** Use `min` and `max` to limit selection to the allowed booking range, such as from today through the next six months.
- **Unavailable dates** Use `invalid` to disable dates that are fully booked or otherwise unavailable.
- **Day labels** Use `labels` to display supporting day-level information such as pricing or remaining spots.
- **Dynamic data loading** Set `invalid` dates and `labels` on load or update them in the `onPageLoading` lifecycle event when availability and pricing need to be loaded for the visible date range.
- **Date and time booking** Combine the calendar with a timegrid for date-and-time selection, then filter the time slots based on availability for the selected day.
- **Multi-date booking** Set `selectMultiple` to `true` when the booking flow needs to allow selecting more than one date.

## What this demo shows

- Three inline appointment-booking examples that show different date-selection patterns.
- **Single-date booking** The first example shows an inline calendar with two months visible side by side.
- **Single-date booking** Past dates are disabled, and booking is limited to a six-month window starting from today.
- **Single-date booking** Some dates are unavailable because they are already booked.
- **Single-date booking** Each day shows a price label below the date.
- **Date and time booking** The second example pairs a single-month date picker with a time slot picker shown next to it.
- **Date and time booking** Users can browse dates from today up to six months ahead and then select from the available time slots for the chosen day.
- **Date and time booking** Each day shows how many spots are still available.
- **Date and time booking** Fully booked days are disabled, and taken time slots remain visible but cannot be selected.
- **Multi-date booking** The third example shows an inline two-month calendar with multiple date selection enabled.
- **Multi-date booking** Each day shows the number of available spots, and dates with no remaining availability are disabled.
- **Calendar header** All three examples include month labels and navigation arrows in the calendar header.

## Best for

- **Single-appointment booking** Consumer-facing flows where users need to choose one available date and see day-based pricing.
- **Date and time selection** Booking experiences where users pick a date first and then choose from the remaining time slots for that day.
- **Multi-visit booking** Flows that let people book multiple appointment dates in one interaction.
- **Availability-driven booking** Interfaces that need to show remaining capacity, disable fully booked dates, and surface useful day-level booking details.
- **Common appointment scenarios** Service bookings, home visits, consultations, demos, sales meetings, and similar scheduled appointments.
