To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/hour-day-week-month-quarter-year-header-footer-template#).

## Demo description

The headers hold key information like the date, day of the week and in some cases it also holds the full date.
Whenever you need to show extra information, or if you would like to change the styling or date format, time format
you can use the various header templates, depending on the view configuration.
You can also show a footer element, for displaying more information.

Add summaries, statistics or simply color the background depending on the number events that occur on that specific day, like in this example.

- **Check out how you can customize the date header for the scheduler** [Let's go &#8594;](https://demo.mobiscroll.com/react/scheduler/date-header-template#)

## Related demos

- [Let's go &#8594;](https://demo.mobiscroll.com/react/scheduler/date-header-template#)

## Implementation instructions

- Render 6 separate `Eventcalendar` instances on the same page, one for each timeline resolution: hourly, daily, weekly, monthly, quarterly, and yearly. All instances share the same 8 resources (Resource A–H, each with a distinct color). Each instance has its own independent event dataset of 12 events positioned with `dyndatetime` offsets.
- **View configurations:**
  - Hourly: `timeline: { type: 'day' }` — one column per hour for today
  - Daily: `timeline: { type: 'month' }` — one column per day for the current month
  - Weekly: `timeline: { type: 'week', resolutionHorizontal: 'week', size: 6 }` — 6 week columns
  - Monthly: `timeline: { type: 'month', resolutionHorizontal: 'month', size: 6 }` — 6 month columns
  - Quarterly: `timeline: { type: 'year', resolutionHorizontal: 'quarter', size: 1 }` — 4 quarter columns within 1 year
  - Yearly: `timeline: { type: 'year', resolutionHorizontal: 'year', size: 6 }` — 6 year columns
- Implement two helper functions shared across all renderers:
  - `getEventOccurrence(events)` — categorizes the array length as `'none'` (0), `'one'` (1), `'few'` (2–3), or `'more'` (4+). Used to vary the visual density indicator in headers.
  - `getOccuppancy(events)` — counts distinct resource IDs present in the events array, then returns `(count / totalResources * 100).toFixed(0)`. Used to show the occupancy percentage in footers.
- Each instance uses a **header renderer** and a **footer renderer**. Both receive `args` with `args.events` (all events overlapping that column) and `args.date`. The week header additionally receives `args.startDate` and `args.endDate`. Use `formatDate` for date formatting:
  - Hour: `formatDate('h:mm A', args.date)`
  - Day: `formatDate('DDD', args.date)` (abbreviated day name) + `formatDate('DD', args.date)` (day number)
  - Week: `formatDate('MMM DD', args.startDate) + ' - ' + formatDate('MMM DD', args.endDate)`
  - Month: `formatDate('MMM', args.date)`
  - Quarter: compute as `args.date.getMonth() / 3 + 1` and render `'Quarter N'`
  - Year: `formatDate('YYYY', args.date)`
- All footer renderers are identical: render `getOccuppancy(args.events) + ' %'`.
- The renderer option names differ per resolution. React names → Angular template option → Vue slot:
  - Hour header: `renderHour` → `hourTemplate` → `#hour`
  - Hour footer: `renderHourFooter` → `hourFooterTemplate` → `#hourFooter`
  - Day header: `renderTimelineDay` → `timelineDayTemplate` → `#timelineDay`
  - Day footer: `renderDayFooter` → `dayFooterTemplate` → `#dayFooter`
  - Week header: `renderWeek` → `weekTemplate` → `#week`
  - Week footer: `renderWeekFooter` → `weekFooterTemplate` → `#weekFooter`
  - Month header: `renderMonth` → `monthTemplate` → `#month`
  - Month footer: `renderMonthFooter` → `monthFooterTemplate` → `#monthFooter`
  - Quarter header: `renderQuarter` → `quarterTemplate` → `#quarter`
  - Quarter footer: `renderQuarterFooter` → `quarterFooterTemplate` → `#quarterFooter`
  - Year header: `renderYear` → `yearTemplate` → `#year`
  - Year footer: `renderYearFooter` → `yearFooterTemplate` → `#yearFooter`
