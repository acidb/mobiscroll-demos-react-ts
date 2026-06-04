To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/printing-the-view#).

## Demo description

The timeline includes print optimized styling through the print add-on. This needs to be added to the download package or installed separately from a dedicated NPM package.

Print styling is applied when someone prints the page that contains the timeline. In addition to that, you can call the `print` method on the instance which grabs only the markup of the timeline, places it onto a temporary page and calls the browsers printing function. This is especially useful when you want to add a button to only print the timeline rather than the whole page.

Besides printing, PDF export is possible through the print dialog of the browser.

> **⚠️ Note:** The **print module** is not available in the trial. You can try the live demo to see how it looks.

## Implementation instructions

- Install `@mobiscroll/print` as a separate npm package (not included in the trial). Import `print` from it and pass it to the `modules` prop on the `Eventcalendar` component (Angular: `modules` input).
- Capture the calendar instance via a `ref`. In React, use a callback ref or `useState` setter as the `ref` prop and call `inst.print()`. In Vue, use a template ref and call `calendarRef.value.instance.print()`. In Angular, use `@ViewChild` and call `instance.print()`.
- Add a `Button` above the calendar bound to the print callback. Clicking it extracts the calendar markup into a temporary page and calls the browser's print function — only the timeline is printed, not the surrounding page.
- Configure `timeline: { type: 'week', startDay: 1, endDay: 5, eventDisplay: 'fill' }` so the printed view shows a compact Monday–Friday work week with events filling the full height of their cell.
- Define room or venue resources with `id`, `name`, and `color`. Load events from a remote endpoint using `getJson` and pass them to `data`.
- PDF export requires no extra configuration — users can choose "Save as PDF" from the browser's print dialog.
