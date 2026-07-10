To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/printing-the-view#).

## Demo description

The scheduler includes print optimized styling through the print add-on. This needs to be added to the download package or installed separately from a dedicated NPM package.

Print styling is applied when someone prints the page that contains the scheduler. In addition to that, you can call the `print` method on the instance which grabs only the markup of the scheduler, places it onto a temporary page and calls the browsers printing function. This is especially useful when you want to add a button to only print the scheduler rather than the whole page.

Besides printing, PDF export is possible through the print dialog of the browser.

> **Warning:** The **print module** is not available in the trial. You can try the live demo to see how it looks.

## Implementation instructions

- Import `print` from `@mobiscroll/print` and pass it to the `modules` option as an array; JS/jQuery: assign `mobiscroll.print = print` first, then pass `modules: [mobiscroll.print]`. The print add-on is a separate package, not included in the trial.
- Use `view: { scheduler: { type: 'week' } }`. JS uses `type: 'day'` instead.
- Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. For the imperative API, call `inst.setEvents(events)` in the callback. jQuery: use `$.getJSON('https://trial.mobiscroll.com/events/?vers=5&callback=?', callback)`. Vue: loads from `https://trial.mobiscroll.com/work-events/` instead.
- Render a "Print scheduler" button above the calendar. On click, call `inst.print()` — this extracts only the calendar markup, places it in a temporary page, and triggers the browser's print dialog. The same dialog supports PDF export.

## What this demo shows

- A desktop weekly scheduler layout with a fixed week strip at the top, a fixed all-day row below it, and a scrollable scheduler time grid for the selected week.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed strip below the header displays the days of the selected week, with the current date highlighted by a blue circle.
- **All-day events** All-day events appear in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected week.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid, with a small blue dot marking the current date.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event highlights the selected event.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.
- **Printing** A `Print the calendar` button is displayed next to the month view on the left side and opens the browser print dialog, applying print styling so the calendar can be printed or exported to PDF.

## Best for

- **Printable scheduler** Creating printable scheduler that can be shared or posted.
- **Schedules and planning** Preparing printed schedules, planning overviews, and event-based scheduler for review or distribution.
- **Archiving and reporting** Printing or exporting scheduler views for record-keeping, handouts, or browser-based PDF generation.
