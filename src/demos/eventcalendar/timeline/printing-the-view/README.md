To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/printing-the-view#).

## Demo description

The timeline includes print optimized styling through the print add-on. This needs to be added to the download package or installed separately from a dedicated NPM package.

Print styling is applied when someone prints the page that contains the timeline. In addition to that, you can call the `print` method on the instance which grabs only the markup of the timeline, places it onto a temporary page and calls the browsers printing function. This is especially useful when you want to add a button to only print the timeline rather than the whole page.

Besides printing, PDF export is possible through the print dialog of the browser.

> **Warning:** The **print module** is not available in the trial. You can try the live demo to see how it looks.

## Implementation instructions

- Install `@mobiscroll/print` as a separate npm package (not included in the trial). Import `print` from it and pass it to the `modules` prop on the `Eventcalendar` component (Angular: `modules` input).
- Capture the calendar instance via a ref (Angular: use `@ViewChild`) and call `inst.print()`.
- Add a `Button` above the calendar bound to the print callback. Clicking it extracts the calendar markup into a temporary page and calls the browser's print function — only the timeline is printed, not the surrounding page.
- Configure `timeline: { type: 'week', startDay: 1, endDay: 5, eventDisplay: 'fill' }` so the printed view shows a compact Monday–Friday work week with events filling the full height of their cell.
- Define room or venue resources with `id`, `name`, and `color`. Load events from a remote endpoint using `getJson` and pass them to `data`.
- PDF export requires no extra configuration — users can choose "Save as PDF" from the browser's print dialog.

## What this demo shows

- A desktop weekly timeline for Monday through Friday, with days arranged horizontally and resources arranged vertically on the left.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed strip below the header shows the selected work week from Monday to Friday, with the current date highlighted.
- **Resources** Shows multiple resources vertically on the left side of the timeline as individual rows.
- **Event labels** Renders events as colored labels inside the day cells with event title shown in bold.
- **Date positioning** Positions events according to both their assigned resource and exact date range.
- **Event interaction** Highlights events on hover and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Selects and highlights an event when it is clicked.
- **Event creation** Creates a new event by double-clicking the timeline or by clicking and dragging on it.
- **Printing** A `Print the calendar` button is displayed next to the timeline view on the left side and opens the browser print dialog, applying print styling so the timeline can be printed or exported to PDF.

## Best for

- **Printable timelines** Creating printable timelines that can be shared or posted.
- **Schedules and planning** Preparing printed schedules, planning overviews, and event-based timelines for review or distribution.
- **Archiving and reporting** Printing or exporting timeline views for record-keeping, handouts, or browser-based PDF generation.
