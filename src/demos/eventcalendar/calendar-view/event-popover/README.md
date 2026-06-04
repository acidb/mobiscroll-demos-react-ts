To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/event-popover#).

## Demo description

Besides displaying events as labels, you can have them show up in a pop-over. Set it up through the `calendar: {popover: true}` object inside the `view` option.
Using the popover setting saves vertical space and provides a subtle cue to the user that there are events. A small dot will appear in day cells with events or if `calendar: {count: true}` is set, an event count is displayed.

The same popover is rendered when events are displayed as labels and not all fit vertically in the calendar day cells.

- **Interested in customizing how the events look?** [Take a look at how you can do it &#8594;](https://demo.mobiscroll.com/react/eventcalendar/customize-event-popover#)

## Related demos

- [Take a look at how you can do it &#8594;](https://demo.mobiscroll.com/react/eventcalendar/customize-event-popover#)

## Implementation instructions

- Enable the popover month view through the `calendar: { popover: true }` configuration inside the `view` option.

## What this demo shows

- A full month event calendar that keeps the month grid clean by showing daily summary indicators and opening a popover with the events for the selected day.
- **Day cells** Days that have events display a light blue horizontal summary label with `X event` or `X events` text, where `X` represents the number of events, inside the day cell instead of listing every event directly in the month grid.
- **Popover trigger** Clicking or hovering over the summary label highlights it; clicking the label opens a popover above the day cell while the rest of the calendar remains visible in the background.
- **Event list** The popover lists the events for the selected day, and each event has a small colored vertical marker on the left to help distinguish categories.
- **Hover state** Hovering over a day cell highlights the day number in the top-right corner with a gray background.
- **Selection** Clicking an empty part of a day cell selects the day and highlights the day number in blue.
- **Navigation** Users can move between months with the previous and next arrow buttons, the `Today` button in the header, or by clicking and dragging the calendar left or right.

## Best for

- **Booking systems** Reservation and appointment scenarios where each day may contain multiple entries that are easier to inspect in a popover.
- **Event-heavy calendars** Schedules with many events where showing every label directly in the grid would make the month view hard to scan.
