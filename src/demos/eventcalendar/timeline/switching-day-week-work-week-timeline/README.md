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
