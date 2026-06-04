To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/event-labels#).

## Demo description

Events can be displayed in a couple of different ways. Most of the time showing the event data inside and across the calendar cells is the way to go. When configuring the `calendar` object, you can set `labels: true`. All of this happens under the `view` option.

The number of visible labels are determined by the available space and the ones that don't fit will be shown in a popover. To save vertical space you can [show all events in a popover](https://demo.mobiscroll.com/react/eventcalendar/event-popover#).

- **Rather show events in a pop-over?** [Take a look at the next example &#8594;](https://demo.mobiscroll.com/react/eventcalendar/event-popover#)

## Related demos

- [Take a look at the next example &#8594;](https://demo.mobiscroll.com/react/eventcalendar/event-popover#)

## Implementation instructions

- Enable event labels in the calendar view by setting `labels: true` on the `calendar` configuration under the `view` option.

## What this demo shows

- A desktop month view event calendar that expands horizontally to fill the available width of its parent container as the screen size or browser width changes.
- **Month grid:** Day cells display event labels directly inside the calendar, giving users a full-month overview on larger screens.
- **Event labels:** Labels use different visual styles for different event types, including all-day events, multi-day all-day events, and timed events with a specific end time.
- **Color coding:** Event colors help distinguish events at a glance.
- **Overflow handling:** The number of visible labels in each day cell depends on the available vertical space.
- **More events popover:** When a day contains more events than can fit, an `X more` label appears in the cell and opens a popover with the remaining events when clicked.
- **Event selection:** Clicking or hovering an event label highlights it. Clicking an event also shows a toast at the bottom center of the view with the event title.
- **Day hover state:** Hovering a day cell highlights the day number in the top-right corner with a gray background.
- **Day selection:** Clicking an empty area of a day cell selects that day and highlights the day number with a blue background.
- **Swipe navigation:** The month can be changed by clicking and dragging the calendar left or right.
- **Header navigation:** The header shows the current month and year on the left, with previous and next arrow buttons for changing months and a `Today` button (between the navigation arrows) for returning to today's date.

## Best for

- **Desktop month overviews:** Showing a full month of events on larger screens where both horizontal and vertical space are available.
- **Color-coded planning:** Scenarios where users need to visually distinguish event types and scan the month quickly.
- **Interactive browsing:** Use cases where users need to inspect events, select days, and move between months directly from the month grid.
