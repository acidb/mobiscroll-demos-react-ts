To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/calendar/month-change-direction-week-numbers-outer-days#).

## Demo description

The calendar view can be customized with a couple of different parameters:

- **Set a month change direction** - specify `'hoizontal'` or `'vertical'` in the `calendarScroll` option
- **Set the first day of the week** - specify the first day of the week using the `firstDay` option, where Sunday is 0, Monday is 1, etc.
- **Show week numbers** - set the `showWeekNumbers` to true and show a week counter starting from the first week of every year
- **Hide the outer days of a month** - set the `showOuterDays` to false in case you don't want to see days from previous and next months

## What this demo shows

- The demo shows different calendar view customization options for the date picker, each independently configurable.
- **Scrolling direction** — the `calendarScroll` option controls whether months transition horizontally (default) or vertically.
- **First day of the week** — the `firstDay` option sets which day appears in the first column of the calendar grid. When not set, it follows the locale default (e.g. Sunday for `en-US`, Monday for `de-DE`).
- **Week numbers** — the `showWeekNumbers` option toggles a week counter column on the left side of the grid; it is off by default.
- **Outer days** — days from the previous and next month that fill the grid edges. With horizontal scrolling they are shown by default; with vertical scrolling they are hidden by default. The `showOuterDays` option overrides either default explicitly.
