To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/navigate-view-from-external-calendar#).

## Demo description

This example demonstrates how can the Timeline navigated externally. Here we have a two-pane layout with a Datepicker on the left and a Timeline on the right. Changing date on the Datepicker will trigger the date change on the Timeline.

The Datepicker updates the `selectedDate` option of the Timeline in its `onChange` event, while the Timeline updates the datepicker value from its `onSelectedDateChange` event.

## Implementation instructions

- Place a `Datepicker` with `display="inline"` in a sidebar next to the timeline `Eventcalendar`. No other `Datepicker` options are needed — `display="inline"` renders it as an embedded mini calendar.
- Configure the `Eventcalendar` with `view: { timeline: { type: 'day' } }` and 3 resources with `id`, `name`, and a named color (red, orange, blue).
- Load events once on mount via `getJson` from `https://trial.mobiscroll.com/filter-resource-events/` (Angular: `HttpClient.jsonp`).
- **Sync between the two components** — the approach differs by framework:
  - **React/Vue**: Hold a shared `selectedDate` state/ref initialised to `new Date()`. Pass it as `value` to the `Datepicker` and as `selectedDate` to the `Eventcalendar`. In the `Datepicker`'s `onChange`, update `selectedDate` from `args.value`. In the `Eventcalendar`'s `onSelectedDateChange`, update it from `args.date`. Changing either component updates the shared value and keeps both in sync.
  - **Angular**: Bind both components to the same `selectedDate` class property using two-way binding — `[(ngModel)]="selectedDate"` on `mbsc-datepicker` and `[(selectedDate)]="selectedDate"` on `mbsc-eventcalendar`. No explicit event handlers are needed; Angular's two-way binding handles sync automatically.
  - **JS/jQuery**: In the `Datepicker`'s `onChange`, call `calendarInst.navigate(args.value)` to drive the timeline forward. In the `Eventcalendar`'s `onSelectedDateChange`, call `datepickerInst.setVal(args.date)` to update the mini calendar when the user navigates the timeline directly.

## What this demo shows

- A desktop daily timeline where hours are arranged horizontally and resources are listed as rows on the left.
- **Layout** The datepicker is displayed in a left sidebar, while the daily timeline fills the main area on the right.
- **External navigation** Selecting a date in the datepicker navigates the timeline to the selected date.
- **Header navigation** The month and year label opens date navigation, while the previous and next arrows move between weeks and the Today button returns to the current date.
- **Day view** The strip below the header shows the selected day, with the current date highlighted. The timeline displays hourly columns from 12 AM to 12 PM.
- **Resources** Multiple resources are shown as separate timeline rows.
- **Current time** A vertical blue line with a time label marks the current time.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event cards** Events are shown as colored cards with a left color stripe, a bold title, and the exact time range.
- **Date positioning** Events are positioned by their assigned resource and exact date and time range.
- **Event interaction** Events highlight on hover and show drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging across a time range.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through time and resources.

## Best for

- **External calendar controls** Apps where users navigate the timeline from a separate calendar control.
- **Desktop timeline layouts** Interfaces that use a two-pane layout to keep date navigation and the daily timeline visible at the same time.
- **Selection-driven workflows** Scheduling and planning experiences that need clear hover, selection, and active-event states while users browse the calendar.
- **Custom navigation patterns** Products that need to keep multiple calendar components in sync when the visible date changes.
