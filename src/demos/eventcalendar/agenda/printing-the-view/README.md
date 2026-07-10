To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/printing-the-view#).

## Demo description

The agenda includes print optimized styling through the print add-on. This needs to be added to the download package or installed separately from a dedicated NPM package.

Print styling is applied when print is called on a page that contains the agenda. In addition to that, you can call the `print` method on the instance which grabs only the markup of the agenda places it onto a temporary page and calls the browsers printing function. This is especially useful when you want to add a button to only print the agenda rather than the whole page.

Besides printing, PDF export is possible through the print dialog of the browser.

> **Warning:** The **print module** is not available in the trial. You can try the live demo to see how it looks.

## Implementation instructions

- Install `@mobiscroll/print` as a separate package. Import `print` from it and pass it to the Eventcalendar via the `modules` option: `modules: [print]`.
- Use `view: { agenda: { type: 'month' } }`. Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. Angular: use `HttpClient.jsonp()`. For the imperative API, call `inst.setEvents(events)` in the callback.
- Get a reference to the component instance. On a "Print agenda" Button click (with `startIcon: 'print'`), call `inst.print()` — this extracts the calendar markup into a temporary page and invokes the browser print dialog. Angular: use `@ViewChild` to get the `MbscEventcalendar` reference.
- Wrap the layout in a `Page` component with a flex column: Button in a fixed-height top row, Eventcalendar filling the remaining height (`mbsc-flex-1-1`).
