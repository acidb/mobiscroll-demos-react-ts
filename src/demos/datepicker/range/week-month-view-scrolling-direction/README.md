To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/range/week-month-view-scrolling-direction#).

## Demo description

The calendar view can be customized with a couple of different parameters:

- **Month or week calendar** - switch between `month` and `week` through the `calendarType` option and set the number of months or weeks through the `pages` and `calendarSize` options
- **Set a month change direction** - specify `'horizontal'` or `'vertical'` in the `calendarScroll` option
- **Show week numbers** - set the `showWeekNumbers` to true and show a week counter starting from the first week of every year
- **Hide the outer days of a month** - set the `showOuterDays` to false in case you don't want to see days from previous and next months

## What this demo shows

- This demo shows independently configurable calendar view options for the date range picker.
- **Month or week view** Users can select if they want to show a month or a week view, by default the month is selected and if they want to display one or two months or weeks.
- **Week numbers** The `showWeekNumbers` option toggles a week counter column on the left side of the grid. Week numbers are hidden by default.
- **Scrolling direction** The `calendarScroll` option controls whether users move between months horizontally, which is the default, or vertically.
- **Outer days** The calendar can display days from the previous and next months at the edges of the grid. They are shown by default with horizontal scrolling and hidden by default with vertical scrolling. The `showOuterDays` option explicitly overrides either default.
- **Inline date range picker** This example embeds the date range picker directly in the page without an input by using inline display mode.
- **Start and end inputs** Clickable inputs appear above the calendar header. The active input has a white background, while the inactive input has a gray background. A clear button appears after a range is selected.
- **Header navigation** The month and year label in the upper-left corner opens the month and year picker. The previous and next arrow buttons on the right navigate between months.
- **Month view** A fixed weekday header shows abbreviated day names from Sunday through Saturday, with dates arranged in a grid below.
- **Month navigation** Drag the calendar left or right to move between months.
- **Day cell states** Hovering over a day highlights its number with a gray background. The first selected day becomes the range start, and the second becomes the range end. Selected days are highlighted in blue. The current date is highlighted by default and remains blue when another date is selected.
- **Adjacent months** Dates from the previous and next months use a muted style. Selecting one navigates to its corresponding month.

## Best for

- **Scrolling direction** Date range pickers that need horizontal month paging in compact interfaces or vertical month browsing in a scrolling layout.
- **Week-based planning** Workflows where users refer to dates by week number, such as weekly scheduling, reporting, or delivery planning.
- **Focused month views** Calendars that hide outer days to emphasize the current month and reduce visual clutter.
- **Continuous date context** Calendars that show outer days so users can see adjacent dates without changing months.
