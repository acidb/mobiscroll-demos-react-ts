To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/switching-day-week-work-week-timeline#).

## Demo description

Scheduling people, teams or an entire workforce requires different views. Sometimes you'll be needing a helicopter view of a week and other times you might want to dig into a specific day. This all can be served through a simple switching mechanism implemented with a segmented control right in the header of the calendar.

By dynamically changing the options you can set the level of detail you want to see. *Eg. Show a daily timeline with hourly steps, show the work week with the same resolution or zoom out for a full week-view with 12 hour steps.*

- **Want to see how to set other views?** [Check out this example for switching views &#8594;](https://demo.mobiscroll.com/react/scheduler/switching-calendar-scheduler-agenda#)

## Implementation instructions

- Set `timeline: { type: 'week' }` as the default view. The three switchable views are:
  - **Day**: `timeline: { type: 'day' }`
  - **Work week**: `timeline: { type: 'week', startDay: 1, endDay: 5 }`
  - **Week** (default): `timeline: { type: 'week' }`
- Use `renderHeader` (Angular: `headerTemplate`, Vue: `#header` slot) with the same structure as the event-listing demo: `CalendarNav`, a centered `SegmentedGroup` with three `Segmented` options (`day` / `workweek` / `week`), then `CalendarPrev`, `CalendarToday`, `CalendarNext`. When the selection changes, replace the active view config accordingly.
- Define 5 people resources, each with `id`, `name`, `color`, a `title` (job title string), and an `img` (avatar URL from `https://img.mobiscroll.com/demos/`).
- Use `renderResource` (Angular: `resourceTemplate`, Vue: `#resource` slot) to render a custom resource label showing the person's avatar, name, and job title.
- Define an `invalid` array to block off non-working time on all resources:
  - `{ start: '00:00', end: '06:00', recurring: { repeat: 'weekly', weekDays: 'MO,TU,WE,TH,FR' } }` — early morning
  - `{ start: '20:00', end: '23:59', recurring: { repeat: 'weekly', weekDays: 'MO,TU,WE,TH,FR' } }` — late evening
  - `{ recurring: { repeat: 'weekly', weekDays: 'SA,SU' } }` — full weekend
- Handle `onEventCreateFailed` and `onEventUpdateFailed` by showing a `Toast` with the message "Can't schedule outside of working hours". This fires when drag-to-create or drag-to-move lands in an invalid slot.
- Load events remotely via `getJson` from the trial endpoint.

## What this demo shows

- A desktop scheduler timeline with days arranged horizontally and resources listed as rows on the left.
- **Header navigation** The month and year label opens date navigation, the previous and next buttons move between weeks, and the Today button returns to the current date.
- **View switcher** The header includes Day, Work week, and Week options, with Week selected by default.
- **Day view** Selecting Day updates the timeline to a single-day timeline view.
- **Work week view** Selecting Work week updates the timeline to show Monday through Friday.
- **Week view** Selecting Week updates the timeline to show a full Sunday-to-Saturday week.
- **Week strip** The strip below the header shows the selected week from Sunday to Saturday, with the current date highlighted.
- **Time grid** The timeline displays hourly columns across the visible day range.
- **Invalid time ranges** Early-morning and late-evening hours are blocked on weekdays, appear with a gray background, and do not allow event creation or event movement.
- **Invalid weekend** Saturdays and Sundays are blocked, so the weekend columns appear with a gray background and do not allow event creation.
- **Resources** Each resource is displayed as a separate timeline row with an avatar, person name, and job title.
- **Current time** A vertical blue line with a time label marks the current time.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event cards** Events are shown as colored cards with a left color stripe, bold title, and time range.
- **Date positioning** Events are positioned by their assigned resource, date, start time, and end time.
- **Event interaction** Events highlight on hover and expose drag and resize handles for moving the event or changing its duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging across a time range.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through time and resources.

## Best for

- **Workforce scheduling** Switching between day, work-week, and full-week views for teams that need both detailed daily planning and broader weekly coverage.
- **Resource planning** Assigning events to people, teams, rooms, equipment, or other resources that need separate rows in a timeline.
- **Shift and availability planning** Blocking non-working hours and weekends so users schedule only inside allowed time ranges.
- **Operational calendars** Reviewing many scheduled items across multiple resources while keeping resource details visible on the left.
- **Staffing dashboards** Showing names, roles, and avatars next to each resource so planners can identify the right person quickly.
- **Drag-and-drop scheduling flows** Creating, moving, and resizing events directly on the timeline while preventing updates in invalid time ranges.
