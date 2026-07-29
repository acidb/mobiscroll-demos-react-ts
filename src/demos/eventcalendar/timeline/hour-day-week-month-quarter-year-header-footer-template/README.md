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

## What this demo shows

- Shows six timeline configurations with hour, day, week, month, quarter, and year resolutions.
- **Timeline layout** Time periods are arranged horizontally, while resources are listed as rows on the left.
- **Header templates** Each timeline resolution uses a custom header format for its time scale, such as hours, days, weeks, months, quarters, or years.
- **Footer templates** Footer cells display the resource occupancy percentage for each visible time slot.
- **Occupancy calculation** Percentages are calculated from the number of distinct resources occupied by events in each time slot.
- **Density overview** Values such as 25%, 63%, 88%, and 100% highlight how fully booked each time slot is.
- **Header and footer rendering** The demo demonstrates custom rendering for timeline header and footer cells with aggregated scheduling metrics.
- **Dynamic updates** Occupancy values update as events are created, moved, resized, or removed.
- **Event cards** Events are shown as colored cards with a left color stripe, a bold title, and the exact start and end time.
- **Date positioning** Events are positioned by their assigned resource and exact date and time range.
- **Event interaction** Events highlight on hover and show drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging across a time range.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through time and resources.

## Best for

- **Workforce planning** Compare staffing coverage and open capacity across different timeline resolutions.
- **Equipment scheduling** Track when shared equipment is booked and identify time slots with remaining availability.
- **Room booking** Review resource occupancy across rooms while keeping the individual event schedule visible.
- **Asset management** Monitor scheduled usage for multiple resources in a row-based timeline layout.
- **Capacity analysis** Show high-level utilization metrics without hiding the detailed events for each resource.
- **Custom scheduling dashboards** Add summary values, occupancy indicators, or other aggregated metrics to timeline headers and footers.
