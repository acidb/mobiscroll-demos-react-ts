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

## What this demo shows

- Shows a weekly agenda view with events listed and grouped by date.
- **Custom header** The current month and year are shown on the left side of the header.
- **View switching** A segmented control in the center lets users switch between `Month`, `Week`, `Day`, and `Agenda` views, with `Agenda` selected by default.
- **Secondary navigation** Blue previous and next arrow buttons are shown on the right side of the header with a `Today` button between them.
- **Week view** A week calendar is displayed at the top of the view.
- **Week navigation** The week strip can be changed by clicking and dragging left or right.
- **Day cell states** Hovering a day highlights the day number with a gray background. Selecting a day highlights the day number with a blue background. The current date is highlighted by default.
- **Event markers** Days with events show a small dot marker inside the day cell.
- **Agenda list** The area below the calendar lists events for the selected day.
- **Date selection** Selecting a day in the week calendar updates the agenda to show events for that date.
- **Events** Events appear as agenda cards with a colored strip on the left and the event title next to it. Start and end times are stacked on the right side of timed events. All-day events show the all-day label on the right.
- **Event interaction** Hovering an event highlights it.
- **Event selection** Clicking an event selects and highlights it.
- **Weekly scheduler view** Selecting the `Week` option from the segmented control switches the layout to a weekly scheduler view. This shows the days of the week at the top, an all-day section for all-day events, and a 24-hour time grid for each day of the week for timed events.
- **Daily scheduler view** Selecting the `Day` option from the segmented control switches the layout to a daily scheduler view. This shows the days of the week at the top, an all-day section for all-day events, and a 24-hour time grid for one day for timed events.
- **Scheduler view** The current time is marked with a blue line in the time grid.
- **Scheduler view** The time grid can be scrolled vertically with the mouse wheel while the header stays sticky.
- **Monthly calendar view** Selecting the `Month` option from the segmented control switches the layout to a monthly calendar view. Days with events display event labels inside the month grid cells.

## Best for

- **Google Calendar overlays** Showing events from public Google Calendars inside an agenda view.
- **Read-only event publishing** Sharing team, organization, or community calendars where visitors need to browse events but not edit them.
