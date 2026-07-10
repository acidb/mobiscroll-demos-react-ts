To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/load-events-from-google-calendar#).

## Demo description

Event data can be loaded from remote sources, like public google calendars.
Through the integration plugin
you can easily show events that are available in a public calendar.
The integration plugin needs to be added to the download package or installed separately from a dedicated NPM package.

You will just need the `CALENDAR_ID` and an `apiKey` from google and you should be ready to roll.

Public calendars are read-only. If you are interested in syncing private google calendars with read/write/delete access, [check out this example](https://demo.mobiscroll.com/react/agenda/sync-events-google-calendar#).

> **Warning:** This example uses the **integration plugin** to connect to and load events from Google Calendar and it is not available in the trial. Give the live demo a try and see how it can be configured.

## Implementation instructions

- Install the `@mobiscroll/calendar-integration` package. Call `googleCalendarSync.init({ apiKey: '<YOUR_GOOGLE_API_KEY>', onInit: loadEvents })` on mount to authenticate. Provide a `CALENDAR_ID` (the public Google Calendar ID).
- Set `exclusiveEndDates: true` on the Eventcalendar — Google Calendar uses exclusive end dates.
- Start with `view: { calendar: { type: 'week' }, agenda: { type: 'week' } }`. The view is switchable via a `SegmentedGroup` (Month / Week / Day / Agenda) in the custom header. On segment change, update the view: month → `{ calendar: { type: 'month' } }`, week → `{ scheduler: { type: 'week' } }`, day → `{ scheduler: { type: 'day' } }`, agenda → `{ calendar: { type: 'week' }, agenda: { type: 'week' } }`.
- Use `onPageLoading` to load events on every page change. Extract `args.viewStart` and `args.viewEnd` to determine the range. For non-month views, extend the range ±7 days to pre-load the previous and next pages. Call `googleCalendarSync.getEvents(CALENDAR_ID, firstDay, lastDay)` — it returns a Promise. On resolve, update the events array; on reject, show a Toast with the error message from `resp.error` or `resp.result.error.message`.
- Build a custom header using `renderHeader` (Angular: `headerTemplate`, Vue: `header` slot) containing: `CalendarNav`, a CSS loading spinner (toggle visibility while the Promise is pending), a `SegmentedGroup` for view switching, `CalendarPrev`, `CalendarToday`, `CalendarNext`.
