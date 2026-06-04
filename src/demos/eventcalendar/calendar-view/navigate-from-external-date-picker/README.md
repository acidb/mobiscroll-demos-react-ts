To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/navigate-from-external-date-picker#).

## Demo description

This example demonstrates how can the Eventcalendar navigated externally. Here we have a two-pane layout with a Datepicker on the left and a Calendar on the right. Changing date on the Datepicker will trigger the date change on the Calendar.

The Datepicker updates the `selectedDate` option of the Calendar in its `onChange` event, while the Calendar updates the datepicker value from its `onSelectedDateChange` event.

## Implementation instructions

- Call the Eventcalendar `navigate` method from the Datepicker change event to move the calendar to the selected date.
- Use the Eventcalendar `onSelectedDateChange` event to keep the Datepicker value in sync with the currently selected calendar date.
- In the JavaScript and jQuery implementations, update the Datepicker with its `setVal` method from the calendar event handler.

## What this demo shows

- This demo shows external navigation between a date picker and a month view event calendar in a two-pane desktop layout.
- **Layout** The date picker is displayed in a separate pane on the left, while the event calendar month view fills the right side.
- **External navigation** Selecting a date in the date picker updates the visible date on the event calendar.
- **Event labels** Days with events display labels directly inside the month cells. Labels use different styles and colors to distinguish all-day events, multi-day, and timed events.
- **Overflow handling** The number of visible event labels depends on the available vertical space in the day cell. Additional events are moved into a popover and indicated by an `X more` label, where `X` represents the number of hidden events. Clicking it opens a popover that lists the remaining events for that day.
- **Label interaction** Hovering over or clicking an event label selects it and highlights the selected label.
- **Day cell states** Hovering a day cell highlights the day number with a gray background, while clicking the empty part of the cell selects the day and highlights the day number with a blue background.
- **Month navigation** The month can be changed by clicking and dragging the calendar left or right.
- **Calendar header** The top-left side shows the current month and year, while the top-right side includes blue previous and next navigation arrows with a `Today` button between them.
- **Date picker header** The date picker header shows the current month and year with previous and next navigation arrows.

## Best for

- **External calendar controls** Apps where users need to navigate the event calendar from a secondary navigation surface.
- **Desktop scheduling layouts** Interfaces that use a two-pane layout to keep date navigation and event overview visible at the same time.
- **Selection-driven workflows** Scheduling and planning experiences where users need clear hover, selection, and active-event states while browsing the calendar.
- **Custom navigation patterns** Products that need to keep multiple calendar-related components in sync when the visible date changes.
