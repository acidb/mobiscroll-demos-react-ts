To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/calendar/quarter-year-view#).

## Demo description

Create a calendar with quarter views that can be navigated quarter by quarter or switch to a year view on the fly. Show any relevant information with [labels or add background colors](https://demo.mobiscroll.com/react/calendar/dots-colors-labels#) to days along with [week counters](https://demo.mobiscroll.com/react/calendar/month-change-direction-week-numbers-outer-days#).

## Implementation instructions

- Use `controls: ['calendar']`, `display: 'inline'`, and `calendarSize: 3` so the calendar always renders three months in a grid.
- **Quarter view**: `calendarType: 'month'` combined with `calendarSize: 3` renders the current quarter's three months in a multi-month grid.
- **Year view**: setting `calendarType` to `'year'` renders all 12 months of the year in one scrollable layout; `calendarSize` is left at `3` and has no effect in year mode.
- Set `refDate: '1970-01-01'` so the calendar's month grouping always aligns quarter boundaries to months 0/3/6/9, independent of the current date.
- Build a custom header with `renderCalendarHeader` (Angular: `calendarHeaderTemplate`, Vue: `#header` slot) containing `CalendarNav`/`mbsc-calendar-nav` and `CalendarPrev`/`CalendarNext` (`mbsc-calendar-prev`/`mbsc-calendar-next`); the React version additionally includes a `CalendarToday` button that the other frameworks' header markup omits.
- `calendarType` set to `'month'` renders the current quarter's months; set to `'year'` renders the year view. Navigating to a target month involves setting `calendarType` and calling `navigate(date)` to that month's first day (JS/jQuery: `instance.setOptions({ calendarType })` followed by `instance.navigate(date)`; React/Angular/Vue: update the bound `calendarType` state/binding together with the selected date/model).
- Use the `onPageChange` event (Angular: `(onPageChange)`, Vue: `@page-change`) to read `args.firstDay`/`event.firstDay` and determine which quarter or year is now visible.
- Pass `showWeekNumbers: true` to display the week-number column alongside each month grid.

## What this demo shows

- A date picker calendar with a segmented control for switching between quarter and year views.
- **Header and segmented control:** The centered segmented control provides `Q1`, `Q2`, `Q3`, `Q4`, and `Year` options. It sits between the year quick navigation label on the left and the previous and next navigation arrows on the right.
- **Quarter view:** The current quarter is selected by default, displaying its three months in a compact multi-month grid.
- **Year view:** Selecting `Year` displays all 12 months of the current year in a single scrollable layout.
- **Month calendars:** Each month has a fixed weekday header with abbreviated day names from Sunday through Saturday and a date grid below it. On the left side the week numbers are displayed for each row.
- **Day cell states** Hovering a day highlights the day number with a gray background. Selecting a day highlights the day number with a blue background. The current date is highlighted by default and remains blue when the user selects another date.

## Best for

- **Quarterly planning:** Choosing dates for quarterly milestones, reviews, or deadlines while keeping the full three-month period visible.
- **Annual planning:** Finding and selecting dates for yearly programs, renewal cycles, or recurring business activities with all 12 months available in one view.
- **Seasonal scheduling:** Selecting dates for campaigns, enrollment periods, or other activities organized around a particular quarter or season.
- **Long-range date selection:** Moving between an annual overview and a focused quarter view when the target date may be several months away.
