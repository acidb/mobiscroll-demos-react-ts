To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/day-cell-aggregate-information#).

## Demo description

This demo showcases an advanced event calendar implementation with extensive day cell customization using the `renderCalendarDay` , which completely overrides the default cell rendering.

The calendar provides a comprehensive visual overview of scheduling density and workload management through custom 
aggregate data visualization with stress-level indicators, weather information, and color-coded backgrounds.

This approach prevents the calendar from rendering individual event labels, allowing full control over the cell content.
Each day cell displays aggregate information calculated from the actual events, received by the custom template.

Users can navigate smoothly from the monthly or weekly overview to a detailed daily schedule by clicking on a day cell, 
which highlights the selected day and loads all events. A convenient back button allows a quick return to the previous view.
Each cell also includes an add button for creating new appointments, and events can be added by dragging or clicking in the week or day view.

## Implementation instructions

- Start in month calendar view (`calendar: { type: 'month' }`) and support switching to week and day scheduler views (`scheduler: { type: 'week'/'day', allDay: false, startTime: '08:00', endTime: '17:00' }`) via a `SegmentedGroup` toggle in the custom header.
- Tag each event with a custom `type` property (`'meeting'` or `'appointment'`) so per-day counts can be split by category in the custom cell renderer.
- Use `renderCalendarDay` (Angular: `calendarDayTemplate`, Vue: `calendarDay`) to fully replace each calendar cell: the renderer receives `date` and `events` for that day. Count meetings vs appointments, compute a stress-level emoji and background color from total event count (0: none; 1–2: green/😃; 3–4: orange/😐; 5+: red/😫), generate and cache a random weather emoji and temperature per date, and render the day label, stress indicator, weather, meeting count, appointment count, and a plus button. Suppress the stress background color in day view.
- Use `renderHeader` (Angular: `headerTemplate`, Vue: `header`) to render the `SegmentedGroup` view toggle (Calendar / Week view), a "Back to calendar" button (visible only in day view), and the standard `CalendarNav`, `CalendarPrev`, `CalendarToday`, `CalendarNext` controls.
- In `onCellClick`, check whether the click target is the plus button: if so, create a new 09:00–10:00 event for that date and show a `Toast`; otherwise navigate to day view for the clicked date.
- Track a `previousView` state so the "Back to calendar" button returns to whichever view (month or week) the user was in before drilling into day view.

## What this demo shows

- A full-month Eventcalendar with fully customized day cells that show daily summary content instead of individual event labels.
- **Day cell content** Each day cell shows the short day name, date, short month name, an optional status emoji when at least one meeting is scheduled, a weather icon with temperature, and separate counts for internal and client meetings.
- **Color coding** Days with no events use a white background, days with 1-2 events use green, days with 3-4 events use orange, and days with more than 4 events use red background.
- **Hover behavior** Hovering a day cell highlights it.
- **Add action** Each day cell includes a circular (+) add button in the lower-right corner for creating a meeting on that date.
- **Day view drill-down** Clicking a day cell opens a daily scheduler for the selected date.
- **Daily scheduling** In the daily scheduler, users can create time-specific events by double-clicking or clicking and dragging on the time grid.
- **Custom day header** The daily scheduler header repeats the daily summary information from the month view and includes a centered Back to calendar button with an X icon that returns to the month view.
- **Header layout** The Eventcalendar header shows the current month and year on the left, a segmented Calendar or Week view switcher in the center, and previous, Today, and next navigation controls on the right.
- **Week view** Switching to Week view opens a weekly scheduler for the current week, with a weekly calendar in the header and a weekly scheduler below it.
- **Weekly scheduling** In the weekly scheduler, users can create time-specific events by double-clicking or clicking and dragging on the time grid.
- **Weekly summaries** The weekly calendar header uses the same customized daily summary cells as the month view.

## Best for

- **Workload overview** Reviewing scheduling density across the month with color-coded daily summaries instead of individual event labels.
- **Meeting-heavy planning** Tracking internal and client meeting counts side by side for each day.
- **Operational context** Combining schedule volume with supporting signals like weather and status indicators across monthly, daily scheduler, and weekly scheduler views.
- **Progressive drill-down** Starting from a high-level monthly overview and opening day or week scheduling views when time-specific event management is needed.
