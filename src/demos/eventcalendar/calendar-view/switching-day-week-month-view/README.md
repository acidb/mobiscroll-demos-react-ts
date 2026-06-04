To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/switching-day-week-month-view#).

## Demo description

Dynamically switch views within one calendar instance. Use a UI control to let users do the switching or do it programmatically. This example features a segmented component inside the header, but the live option changes can be invoked from anywhere.

Switch between a month view with a monthly agenda, a week view with a weekly agenda and daily event list.

Thanks to property binding and all option changes are live and propagate accordingly.

- **Interested in the agenda?** [How to render an agenda instead of a calendar &#8594;](https://demo.mobiscroll.com/react/agenda/daily-weekly-monthly-annual-agenda#)

## Related demos

- [How to render an agenda instead of a calendar &#8594;](https://demo.mobiscroll.com/react/agenda/daily-weekly-monthly-annual-agenda#)

## Implementation instructions

- Use the `setOptions()` method to update the calendar instance dynamically when the selected view changes.

## What this demo shows

- This demo switches an event calendar instance between month, week, and day layouts from a segmented control in the header.
- **Header control** The center area of the header contains a segmented control for switching between month, week, and day views represented with icons.
- **Calendar header** The top-left side shows the current month and year or the current date in case of day view, while the top-right side includes blue previous and next navigation arrows.
- **Month view** The default layout shows a mobile month calendar at the top and a monthly agenda below it.
- **Month view** Dates that have events are marked with a small dot in the day cell.
- **Monthly agenda** Under the month view, events are grouped by date in a monthy agenda vertical list, with sticky date headers as the user scrolls.
- **Month and agenda sync** Scrolling the agenda updates the selected date in the month calendar so it stays aligned with the visible event group.
- **Date selection** Clicking a date in the month calendar navigates the agenda to that date and reveals its events.
- **Week view** Switching to week view shows a week calendar at the top and a weekly agenda below it.
- **Day view** Switching to day view shows a daily agenda event list for the selected date.
- **Month and week navigation** The month and week view can be changed by clicking and dragging the calendar left or right.
- **Day cell states** Hovering a day cell highlights the day number with a gray background, while clicking the cell selects the day and highlights the day number with a blue background.

## Best for

- **Multi-level schedule browsing** Apps where users need to move between month overview, week planning, and day-level details without leaving the same screen.
- **Mobile scheduling flows** Touch-friendly experiences where a header control is a simple way to switch between calendar scopes.
- **Operational planning** Use cases where users need both a quick overview of upcoming activity and a detailed list of events for the selected date.
