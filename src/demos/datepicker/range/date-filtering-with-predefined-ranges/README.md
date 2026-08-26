To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/range/date-filtering-with-predefined-ranges#).

## Demo description

When building a date filtering UI a date range picker is essential. On top of being able to select custom start and end dates presets can be very helpful and provide a nice productivity boost. A more advanced filtering experience can be created in a couple of steps:

- **Custom popup with an inline calendar** - Create a custom popup and place an inline date picker with start/end selection
- **Select with common presets** - Populate a dropdown with values like **Today**, **Yesterday**, **Last week**, **Last month**, **Last 7 days**, **Last 30 days**
- **Inputs for typing dates** - Adding two inputs next to the range picker enables users to type in a date rather than solely relying on manual selection
- **Make it fully responsive** - Use the `responsive` api to customize the desktop experience - dropdown with inputs for typing - and the mobile experience - touch optimized interface

## What this demo shows

- Shows a clickable input which opens a custom range picker with preset options.
- **Popup behavior** The range picker opens below the input and closes when the user clicks outside it.
- **Month view** The popup contains an inline date picker for selecting start and end dates. A fixed weekday header displays abbreviated day names from Sunday through Saturday, with the dates arranged in a grid below.
- **Header navigation** Clicking the month and year label in the upper-left corner opens the month and year picker. The previous and next arrow buttons on the right move between months.
- **Swipe navigation** Dragging the calendar left or right moves between months.
- **Day cell states** Hovering over a day displays a gray background behind its number. The first selected day becomes the range start, and the second becomes the range end. Selected dates appear in blue. The current date is highlighted by default and remains blue when another date is selected.
- **Adjacent months** Dates from the previous and next months use a muted style. Selecting one opens its corresponding month.
- **Presets** The **Date range** dropdown beside the inline calendar provides **Custom**, **Today**, **Yesterday**, **Last week**, **Last month**, **Last 7 days**, and **Last 30 days** options. **Custom** is selected by default and allows free start and end date selection from the calendar.
- **Start and end inputs** The **Start** and **End** inputs below the preset dropdown support date selection and manual date entry. They are enabled only when **Custom** is selected.
- **Actions** The `Apply` button confirms the selected date range, while the gray `Cancel` button discards the change.
- **Input value** After the user confirms the selection with `Apply`, the input displays the date range in month, day, and year format.

## Best for

- **Analytics and reporting** Filter dashboards and reports by common periods such as today, last week, or last month, while retaining a custom range option.
- **Transaction history** Review orders, payments, or account activity across frequently used date ranges.
- **Logs and audit records** Narrow time-based records to recent periods or a manually entered start and end date.
- **Operational dashboards** Switch quickly between standard monitoring windows such as the last 7 or 30 days.
- **Search and data tables** Add compact date filtering where users need both preset ranges and precise custom selection.
