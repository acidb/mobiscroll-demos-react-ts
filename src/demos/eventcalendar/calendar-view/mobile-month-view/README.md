To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/mobile-month-view#).

## Demo description

Use the event calendar for mobile, desktop and everything in-between. The content perfectly fills the parent container or the mobile screen in full width.
You can choose to render an agenda below the calendar broken up into days ordered chronologically. All of this is configured in the `view` option.

You can use the calendar and agenda together or separately. For more ways to use the agenda [learn about how to configure it](https://demo.mobiscroll.com/react/agenda/#).

- **Interested to see how the event calendar looks on largers screens with labels?** [Check out the next demo &#8594;](https://demo.mobiscroll.com/react/eventcalendar/desktop-month-view#)

## Related demos

- [Check out the next demo &#8594;](https://demo.mobiscroll.com/react/eventcalendar/desktop-month-view#)

## Implementation instructions

- Combine the calendar and agenda views in the `view` option.
- Configure both views on the same Eventcalendar instance to render the month grid on top and the agenda below.
- Mobiscroll automatically keeps the calendar selection and agenda position synchronized when both views are enabled together, without requiring extra wiring.

## What this demo shows

- Shows a mobile-friendly month calendar paired with an agenda list in a single view.
- **Month calendar** A full month calendar is displayed at the top of the view.
- **Event markers** Days that contain events show a small dot marker inside the day cell.
- **Agenda list** The area below the calendar lists events grouped by date.
- **Sticky day headers** As the agenda scrolls vertically, each day stays visible with a sticky date header while its events appear underneath.
- **Scroll synchronization** Scrolling the agenda updates the selected date in the month calendar so the two views stay in sync.
- **Date navigation** Selecting a day in the month calendar scrolls the agenda to that date and reveals its events.
- **Event interaction** Selecting an event in the agenda shows a toast message with the event title.

## Best for

- **Small screens** Mobile layouts where a full month overview and an event list need to fit in a compact space.
- **Small containers** Embedded calendar panels inside dashboards or other constrained layouts.
- **Browse-and-detail workflows** Interfaces where users need a quick month-level overview on top and a chronological event listing below.
- **Compact navigation** Scenarios where users should be able to jump to a date from the calendar and immediately see that day's events in the agenda.
