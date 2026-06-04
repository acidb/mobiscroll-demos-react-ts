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
