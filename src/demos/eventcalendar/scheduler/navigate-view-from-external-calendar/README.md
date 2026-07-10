To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/navigate-view-from-external-calendar#).

## Demo description

This example demonstrates how can the Scheduler navigated externally. Here we have a two-pane layout with a Datepicker on the left and a Scheduler on the right. Changing date on the Datepicker will trigger the date change on the Scheduler.

The Datepicker updates the `selectedDate` option of the Scheduler in its `onChange` event, while the Scheduler updates the datepicker value from its `onSelectedDateChange` event.

## Implementation instructions

- Place a `Datepicker` with `display="inline"` in a sidebar next to the `Eventcalendar`. `display="inline"` renders it as an embedded mini calendar.
- Configure the `Eventcalendar` with `view: { scheduler: { type: 'day' } }`. Load events on mount via `getJson` from a remote JSONP endpoint.
- Bind both components to the same selected date. In `Datepicker`'s `onChange`, update the shared date and sync the `Eventcalendar`; for the imperative API, call `calendarInst.navigate(args.value)`. In `Eventcalendar`'s `onSelectedDateChange`, sync back to the `Datepicker`; for the imperative API, call `datepickerInst.setVal(args.date)`.

## What this demo shows

- This demo shows external navigation between an inline Datepicker and a daily Scheduler view in a two-pane desktop layout.
- **Layout** The Datepicker is displayed in a left sidebar, while the daily Scheduler fills the main area on the right.
- **External navigation** Selecting a date in the Datepicker navigates the Scheduler to the selected date.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between dates and jump back to the current day.
- **Week view** The fixed week strip below the header shows the surrounding dates for quick day switching. Dates highlight on hover, and the selected day is marked with a blue circle.
- **All-day events** All-day events are displayed in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler below the all-day row scrolls vertically through the hours of the selected day.
- **Hover feedback** Hovering the time grid shows a time indicator that follows the pointer in 15-minute increments.
- **Event rendering** Events appear as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Event interactions** Hovering an event highlights it and shows resize and drag handles, indicating that events can be resized or repositioned.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.
- **Event selection** Clicking an event selects and highlights it.
- **Current time** A blue line across the scheduler indicates the current time.

## Best for

- **External calendar controls** Apps where users navigate the Scheduler from a separate calendar control.
- **Desktop scheduling layouts** Interfaces that use a two-pane layout to keep date navigation and the daily schedule visible at the same time.
- **Selection-driven workflows** Scheduling and planning experiences that need clear hover, selection, and active-event states while users browse the calendar.
- **Custom navigation patterns** Products that need to keep multiple calendar components in sync when the visible date changes.
