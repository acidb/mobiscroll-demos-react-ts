To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/printing-the-view#).

## Demo description

The event calendar includes print optimized styling through the print add-on. This needs to be added to the download package or installed separately from a dedicated NPM package.

Print styling is applied when someone prints the page that contains the calendar. In addition to that, you can call the `print` method on the instance which grabs only the markup of the calendar, places it onto a temporary page and calls the browsers printing function. This is especially useful when you want to add a button to only print the calendar rather than the whole page.

Besides printing, PDF export is possible through the print dialog of the browser.

> **⚠️ Note:** The **print module** is not available in the trial. You can try the live demo to see how it looks.

## Implementation instructions

- Call the instance `print()` method to print only the calendar markup instead of the entire page.
- The `print()` method copies the calendar markup to a temporary page and then triggers the browser's print function.
- This pattern is useful when adding a dedicated `Print the calendar` button that prints just the calendar area.

## What this demo shows

- A full month event calendar with multiple color-coded event labels rendered directly inside the day cells and the standard header controls for month and year navigation, previous and next arrows, and a Today button.
- **Overflow and more events** The number of visible labels per day depends on the available space in the cell. Events that do not fit are moved into a popover, and the cell shows an `X more` label where `X` is the number of hidden events. Clicking the `X more` label opens a popup that shows the additional events for that day.
- **Event selection** Clicking or hovering over an event label highlights the selected event and the day number in the top-right corner with a blue background.
- **Cell hover state** Hovering over a day cell highlights the day number in the top-right corner with a gray background.
- **Day selection** Clicking the empty area of a day cell selects the day and highlights the day number in the top-right corner with a blue background.
- **Month navigation** The calendar supports changing months by clicking and dragging the view left or right.
- **Printing** A `Print the calendar` button is displayed next to the month view on the left side and opens the browser print dialog, applying print styling so the calendar can be printed or exported to PDF.

## Best for

- **Printable calendars** Creating printable event calendars that can be shared or posted.
- **Schedules and planning** Preparing printed schedules, planning overviews, and event-based calendars for review or distribution.
- **Archiving and reporting** Printing or exporting calendar views for record-keeping, handouts, or browser-based PDF generation.
