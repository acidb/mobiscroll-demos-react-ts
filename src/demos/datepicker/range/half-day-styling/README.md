To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/range/half-day-styling#).

## Demo description

In situations when you need to style the days a little differently you'll get built-in tools for setting [background color, highlight color, add day marks or labels](https://demo.mobiscroll.com/react/range/dots-colors-labels#).

But sometimes that is not enough. Luckily you can use the `cellCssClass` property of the `colors` option to pass a CSS class that will be added to the day cell and apply any custom styling you write in CSS. These days can be recurring days, ranges or individual days.

You can use the `cellCssClass` in combination with custom cell `background` to highlight a range of days and show the ends as check-in and check-out days.

## What this demo shows

- An inline date range picker calendar with two months view and custom day cell styling.
- **Inline date range picker** This example embeds the date range picker directly in the page without an input by using inline display mode.
- **Start and end inputs** Clickable inputs appear above the calendar header. The active input has a white background, while the inactive input has a gray background. A clear button appears after a range is selected.
- **Header navigation** The month and year label in the upper-left corner opens the month and year picker. The previous and next arrow buttons on the right navigate between months.
- **Month view** A fixed weekday header shows abbreviated day names from Sunday through Saturday, with dates arranged in a grid below.
- **Month navigation** Drag the calendar left or right to move between months.
- **Day cell states** Hovering over a day highlights its number with a gray background. The first selected day becomes the range start, and the second becomes the range end. Selected days are highlighted in blue. The current date is highlighted by default and remains blue when another date is selected.
- **Adjacent months** Dates from the previous and next months use a muted style. Selecting one navigates to its corresponding month.
- **Custom day cell styling** The `cellCssClass` property and a custom cell `background` highlight a date range and distinguish its check-in and check-out dates.

## Best for

- **Accommodation booking** Distinguishing check-in and check-out dates within a selected stay.
- **Availability calendars** Marking available, unavailable, or partially available dates with custom styles.
- **Date-based pricing** Highlighting dates with special rates, discounts, or pricing tiers.
- **Deadlines and milestones** Drawing attention to due dates, release dates, or other important days.
