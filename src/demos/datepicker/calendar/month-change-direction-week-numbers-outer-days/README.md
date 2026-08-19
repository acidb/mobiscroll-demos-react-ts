To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/calendar/month-change-direction-week-numbers-outer-days#).

## Demo description

The calendar view can be customized with a couple of different parameters:

- **Set a month change direction** - specify `'horizontal'` or `'vertical'` in the `calendarScroll` option
- **Set the first day of the week** - specify the first day of the week using the `firstDay` option, where Sunday is 0, Monday is 1, etc.
- **Show week numbers** - set the `showWeekNumbers` to true and show a week counter starting from the first week of every year
- **Hide the outer days of a month** - set the `showOuterDays` to false in case you don't want to see days from previous and next months

## What this demo shows

- The demo presents independently configurable calendar view options for the date picker.
- **Scrolling direction** The `calendarScroll` option controls whether users move between months horizontally, which is the default, or vertically.
- **First day of the week** The `firstDay` option sets which day appears in the first column of the calendar grid. When it is not set, the calendar follows the locale default, such as Sunday for `en-US` or Monday for `de-DE`.
- **Week numbers** The `showWeekNumbers` option toggles a week counter column on the left side of the grid. Week numbers are hidden by default.
- **Outer days** The calendar can display days from the previous and next months at the edges of the grid. They are shown by default with horizontal scrolling and hidden by default with vertical scrolling. The `showOuterDays` option explicitly overrides either default.

## Best for

- **Scrolling direction** Date pickers that need horizontal month paging in compact interfaces or vertical month browsing in a scrolling layout.
- **Regional calendars** Date pickers that need the first day of the week to match a locale, workplace convention, or regional calendar format.
- **Week-based planning** Workflows where users refer to dates by week number, such as weekly scheduling, reporting, or delivery planning.
- **Focused month views** Calendars that hide outer days to emphasize the current month and reduce visual clutter.
- **Continuous date context** Calendars that show outer days so users can see adjacent dates without changing months.
