To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/range/customizing-labels-selection#).

## Demo description

Whether you are using the calendar or scroller for range selection, the microcopy for `rangeStartLabel` and `rangeEndLabel` can be easily overridden. For flight booking *"Outbound"* and *"Return"* makes sense while for accommodation booking *"Check in"* and *"Check out"* might be more appropriate.

The range start/end labels can also be hidden in some cases if needed. Use the `showRangeLabels` option for that.

Furthermore, you have the option to toggle the range highlight with the `rangeHighlight` option, if needed.

## What this demo shows

- A configuration panel for customizing the range picker inputs and selection display.
- **View selection** Switch between the calendar and scroller range picker views. The calendar view is selected by default.
- **Range labels** Show or hide the start and end labels. The labels are visible by default.
- **Custom labels** Replace the default start and end labels with custom text.
- **Label helpers** Add custom helper text below the start and end input labels.
- **Range highlighting** Highlight the full selected range or only its start and end dates. Full-range highlighting is enabled by default.
- **Inline date range picker** Display the date range picker directly on the page without an input by using inline display mode.
- **Start and end inputs** Use the clickable inputs above the calendar header to choose which range boundary to set. The active input has a white background, while the inactive input has a gray background. A clear button appears after a range is selected.
- **Header navigation** Open the month and year picker from the label in the upper-left corner, or use the previous and next arrow buttons to navigate between months.
- **Month view** View dates in a grid below a fixed weekday header with abbreviated day names from Sunday through Saturday.
- **Month navigation** Drag the calendar left or right to move between months.
- **Day cell states** Hover over a day to highlight its number with a gray background. The first selected day sets the range start, and the second sets the range end. Selected days are highlighted in blue.
- **Current date** The current date is highlighted by default and remains blue when another date is selected.
- **Adjacent months** Dates from the previous and next months use a muted style. Selecting one navigates to its corresponding month.

## Best for

- **Bookings and reservations** Selecting hotel stays, travel dates, rentals, and other reservation periods that require start and end dates.
- **Reporting periods** Choosing a date range for reports and other time-based data views.
