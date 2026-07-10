To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/navigate-from-external-calendar#).

## Demo description

This example demonstrates how can the Agenda navigated externally. Here we have a two-pane layout with a Datepicker on the left and an Agenda on the right. Changing date on the Datepicker will trigger the date change on the Agenda.

The Datepicker updates the `selectedDate` option of the Agenda in its `onChange` event, while the Agenda updates the datepicker value from its `onSelectedDateChange` event.

## Implementation instructions

- Use `view: { agenda: { type: 'day' } }`. Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. Angular: use `HttpClient.jsonp()`. For the imperative API, call `inst.setEvents(events)` in the callback.
- Place a Mobiscroll `Datepicker` with `display: 'inline'` and an `Eventcalendar` side by side in a flex row. The Datepicker is a fixed-width left pane; the Eventcalendar takes the remaining width (`mbsc-flex-1-1`).
- Keep a shared `selectedDate` value in sync across both components:
  - On Datepicker change (`onChange`), update `selectedDate` to `args.value` and pass it to the Eventcalendar's `selectedDate` option.
  - On Eventcalendar `onSelectedDateChange`, update `selectedDate` to `args.date` and pass it back to the Datepicker's `value`.
  - **Angular**: use two-way binding `[(selectedDate)]` on the Eventcalendar and `[(ngModel)]` on the Datepicker — both bind to the same variable, no explicit event handlers needed.
  - **JS/jQuery**: use the imperative API — call `agendaInst.navigate(args.value)` in the Datepicker's `onChange`, and `datepickerInst.setVal(args.date)` in the Eventcalendar's `onSelectedDateChange`.
