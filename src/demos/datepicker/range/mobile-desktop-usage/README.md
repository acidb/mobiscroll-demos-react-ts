To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/range/mobile-desktop-usage#).

## Demo description

Use the range picker for both mobile and desktop or set it up responsively.

The main difference between the two rendering modes is how the picker is laid out. Set the `touchUi` option to `false` and the component shows up suitable for larger screens and pointer interaction while setting it to `true` renders it suitable for touch screens.

Use it on an existing form field, custom input or use it on Mobiscroll form fields. You can also embed it directly into your page.
When linked to an input, the component will be shown on focus or when someone clicks on the field. Alternatively, you can leave the input editable and show the component only on a button click.

- **Handle different screen sizes by setting it up responsively** [Check out the responsive demo →](https://demo.mobiscroll.com/react/datetime/responsive#)

## Related demos

- [Check out the responsive demo →](https://demo.mobiscroll.com/react/datetime/responsive#)

## What this demo shows

- Shows four date range picker examples for selecting a start and end date from a monthly calendar.
- **Date range picker with inputs** The first example opens the range picker when the user focuses or clicks a standard input. The second opens it only from the `Show picker` button next to the input. The third uses a Mobiscroll input. 
- **Input behavior** In the three input-based examples, the range picker opens at the bottom of the container over a darkened backdrop. Clicking outside the picker closes it. 
- **Inline date picker** The fourth example embeds the date range picker directly in the page without an input by using inline display mode.
- **Start and end inputs** Clickable inputs appear above the calendar header. The active input has a white background, while the inactive input has a gray background. A clear button appears after a range is selected.
- **Header navigation** The month and year label in the upper-left corner opens the month and year picker. The previous and next arrow buttons on the right navigate between months.
- **Month view** A fixed weekday header shows abbreviated day names from Sunday through Saturday, with dates arranged in a grid below.
- **Month navigation** Drag the calendar left or right to move between months.
- **Day cell states** Hovering over a day highlights its number with a gray background. The first selected day becomes the range start, and the second becomes the range end. Selected days are highlighted in blue. The current date is highlighted by default and remains blue when another date is selected.
- **Adjacent months** Dates from the previous and next months use a muted style. Selecting one navigates to its corresponding month.
- **Footer actions** In the input-based examples, the gray `Cancel` button discards the change, while the blue `Set` button confirms the selected date range. Until a range is selected, the `Set` button remains inactive.
- **Input value** In the input-based examples, confirming a date with `Set` displays the selected range in the input using a month, day, and year format.

## Best for

- **Booking and reservation forms** Users can easily select an arrival and departure date, rental period, or reservation window.
- **Travel and accommodation searches** A date range can be entered through a standard input or a dedicated picker button.
- **Reporting and analytics filters** Users can define a start and end date for filtering data.
- **Forms with different input requirements** The picker can work with a standard HTML input, a Mobiscroll input, a trigger button, or without an input at all.
- **Always-visible date selection** An inline calendar provides direct access to range selection without opening a popup.
