To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/desktop-month-view#).

## Demo description

Desktops or larger screens provide more space, which means you can use not just the horizontal but vertical space as well. Horizontally the calendar grows to fill the full width of the parent container while the height can be adjusted through the `height` option.

The number of visible labels are determined by the available space and the ones that don't fit will be shown in a popover. To save vertical space you can [show all events in a popover](https://demo.mobiscroll.com/react/eventcalendar/event-popover#).

- **Interested to see how the event calendar looks on smaller screens?** [Check out the previous demo &#8594;](https://demo.mobiscroll.com/react/eventcalendar/mobile-month-view#)

## Related demos

- [Check out the previous demo &#8594;](https://demo.mobiscroll.com/react/eventcalendar/mobile-month-view#)

## Implementation instructions

- Set `view: { calendar: { labels: true } }` to display a month grid with inline event labels in each day cell. When labels overflow the available cell height, the remainder appear in an `X more` popover automatically.
- Load events from a remote endpoint using `getJson` and assign them to `data`; for the imperative API, call `inst.setEvents(events)` in the callback.
- Handle `onEventClick` to show a `Toast` with `args.event.title`.

## What this demo shows

- A desktop month view event calendar is displayed with a full monthly grid and event labels inside the day cells.
- **Responsive layout** The month grid expands horizontally to fill the available width of the parent container as the screen size or browser width changes.
- **Event labels** Days with events display labels directly in the cell, with different label styles and colors to distinguish all-day, multi-day all-day, and timed events.
- **Overflow handling** The number of visible event labels depends on the available vertical space in the day cell. Additional events are moved into a popover and indicated by an `X more` label.
- **Popover events** Clicking the `X more` label opens a popover that shows the events that do not fit in the cell.
- **Event selection** Clicking an event label highlights it and shows a toast at the bottom center of the calendar with the event title.
- **Day hover and selection** Hovering over a day highlights the day number in the top-right corner with a gray background. Clicking an empty area in the cell (or an event) selects the day and changes that highlight to blue.
- **Month navigation** The month can be changed by clicking and dragging the calendar left or right.
- **Header controls** The header shows the current month and year on the left, with blue previous and next arrows plus a `Today` button on the right.
- **Header navigation** Clicking the current month and year opens a popover with month selection and year selection views. The arrow buttons move the calendar backward or forward by month, and the `Today` button returns to the month that contains today's date.

## Best for

- **Desktop scheduling overviews** Showing a full month of events on larger screens where both horizontal and vertical space are available.
- **Event-heavy month grids** Displaying multiple events per day with label styles, colors, and overflow handling that keep the calendar readable.
- **Visual monthly planning** Giving users a quick overview of all-day, multi-day, and timed events in a single desktop calendar view.
- **Responsive embedded calendars** Adding a month view that naturally grows to fit the width of its parent container without custom resizing logic.
