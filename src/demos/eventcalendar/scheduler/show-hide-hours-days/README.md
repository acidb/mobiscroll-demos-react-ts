To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/show-hide-hours-days#).

## Demo description

Customize the visible days and hours along with the scale of the time grid through the `scheduler` object under the view option. You can control the days to display (eg. Weekdays), the visible time range (eg. 8AM to 6PM), set the time scale (eg. 30 minutes) and set the labels shown (eg. every 15 minutes).

- **Specify the first and last day** - Use the `startDay` and `endDay` properties
- **Set the visible time range** - Use the `startTime` and `endTime` properties
- **Shift the visible time window** - Use the `startTime` and `endTime` properties to include ranges that extend into the previous or next day
- **Control the visibility of empty columns** - Use the `hideEmptyColumns` property
- **Control the visibility of fully invalid columns** - Use the `hideInvalidColumns` property
- **Control the granularity of the time grid** - Use the `timeCellStep` and `timeLabelStep` properties

- **Building a work calendar?** [Check out this example &#8594;](https://demo.mobiscroll.com/react/scheduler/work-week-hours#)

## Implementation instructions

- Use `view: { scheduler: { type: 'week', startDay: 1, endDay: 5, startTime: '09:00', endTime: '18:00', timeCellStep: 30, timeLabelStep: 30 } }` — a Mon–Fri scheduler visible from 9 AM to 6 PM with 30-minute grid cells and labels.
  - `startDay`/`endDay`: first and last visible day (0 = Sunday … 6 = Saturday)
  - `timeCellStep`: grid interval in minutes; `timeLabelStep`: interval between time axis labels — both set to 30 here, but they can differ (e.g. 15-minute cells with 60-minute labels)
- React additionally defines a recurring `invalid` range (12:00–13:00, Mon–Fri, weekly) and passes it as the `invalid` prop to block the lunch hour across all weekdays.
- Load events from `https://trial.mobiscroll.com/workday-events/?vers=5` via JSONP: React/Vue call `getJson(url, callback, 'jsonp')`; JS calls `mobiscroll.getJson(url, callback, 'jsonp')`; jQuery calls `$.getJSON(url + '&callback=?', callback)`; Angular uses `HttpClient.jsonp()`. Imperative API (JS/jQuery): call `inst.setEvents(events)` in the callback.

## What this demo shows

- A desktop weekly scheduler from Sunday to Saturday, with a fixed resource and week strip, repeated resources for each week, and a vertically scrollable time grid running from 9 AM to 5 PM.
- **View controls** A configuration panel beside the scheduler lets users choose from a segmented button between `Day`, `Week`, and `Month` views, with `Week` view selected by default.
- **Days configuration** Below the segmented button, there is the following text: Display days from [day selection dropdown] to [day selection dropdow] - and users can select from the day selection dropdown from which to which day to be displayed on the scheduler. By default the start day is Sunday and the end day is Saturday.
- **Hours configuration** Below the day configuration line, there is the following text: Display hours from [hour selection dropdown] to [hour selection dropdow] - and users can select from the hour selection dropdown from which to which hour to be displayed on the time grid. By default the start hour is 9 AM and the end hour is 5 PM.
- **Time scale control** Below the hour configuration line, there is the following text: Set the time scale to [hour selection dropdow] - and users can set the time scale on the time grid from the hour selection dropdown.
- **Time labels control** Below the time scale configuration line, there is the following text: Show time lables for every [hour selection dropdow] - and users can set the time labels on the time grid from the hour selection dropdown.
- **Hide controls** Below the time label configuration line, there are tree switchable buttons: Hide empty columns (disabled by default), Hide invalid columns (disabled by default) and Show current time indicator (enabled by default).
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Resources with week view** The fixed strip below the header displays resources at the top and below that the weeks so in this case resources are grouped by resource which means for each resources appears the selected week.
- **All-day events** All-day events appear in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler shows 8-hours range from 9 AM to 5 PM and can be scrolled vertically.
- **Weekends** Saturdays and Sundays are disabled so the time grids for those days appears with a grey background and can't create or move events to those periods.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Employee scheduling and availability management** Display team schedules, vacations, days off, and availability across multiple employees in a single weekly calendar view.
- **Resource and shift planning** Organize shifts, assignments, and workload distribution while keeping meetings, tasks, and absences visible.
- **Team operations and project coordination** Track recurring meetings, deadlines, field activities, and employee commitments alongside personal time-off information.
