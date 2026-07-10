To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/load-events-from-google-calendar#).

## Demo description

Event data can be loaded from remote sources, like public google calendars.
Through the integration plugin
you can easily show events that are available in a public calendar.
The integration plugin needs to be added to the download package or installed separately from a dedicated NPM package.

You will just need the `CALENDAR_ID` and an `apiKey` from google and you should be ready to roll.

Public calendars are read-only. If you are interested in syncing private google calendars with read/write/delete access, [check out this example](https://demo.mobiscroll.com/react/scheduler/sync-events-google-calendar#).

> **Warning:** This example uses the **integration plugin**
to connect to and load events from Google Calendar and it is not available in the trial. Give the live demo a try and see how it can be configured.

## Implementation instructions

- Import `googleCalendarSync` from `@mobiscroll/calendar-integration` (a separately installed package). Define a single `CALENDAR_ID` constant — one public Google Calendar. No user sign-in required; access is via API key only. Set `exclusiveEndDates: true`. The calendar is read-only (no `clickToCreate`/`dragToCreate`).
- Default view: `scheduler: { type: 'week' }`. A `SegmentedGroup` view switcher in the header lets the user pick between four views:
  - `'month'` → `{ calendar: { labels: true } }`
  - `'week'` → `{ scheduler: { type: 'week' } }`
  - `'day'` → `{ scheduler: { type: 'day' } }`
  - `'agenda'` → `{ calendar: { type: 'week' }, agenda: { type: 'week' } }`
- Call `googleCalendarSync.init({ apiKey, onInit: loadEvents })` on mount. `onInit` fires when the integration is ready.
- **`loadEvents`**: calls `googleCalendarSync.getEvents(CALENDAR_ID, firstDay.current, lastDay.current)` and replaces the events array on success.
- **`onPageLoading`**: sets date refs and calls `loadEvents()`. For `'month'` view use `args.viewStart`/`args.viewEnd` directly. For all other views, pre-load ±7 days: `firstDay = start − 7 days`, `lastDay = end + 7 days`.
- **Custom header**: `CalendarNav` (left), spinner (12 blade divs, visible while loading), `SegmentedGroup` (Month/Week/Day/Agenda), then `CalendarPrev`, `CalendarToday`, `CalendarNext` (right).

## What this demo shows

- A desktop weekly scheduler layout with a fixed week strip at the top, a fixed all-day row below it, and a scrollable scheduler time grid for the selected week.
- **Custom header** The current month and year are shown on the left side of the header.
- **View switching** A segmented control in the center lets users switch between `Month`, `Week`, `Day`, and `Agenda` views, with `Week` selected by default.
- **Secondary navigation** Blue previous and next arrow buttons are shown on the right side of the header with a `Today` button between them.
- **Week view** The fixed strip below the header displays the days of the selected week, with the current date highlighted by a blue circle.
- **All-day events** All-day events appear in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected week.
- **Timed events** Timed events are displayed in the weekly scheduler grid as light blue cards with a blue stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid, with a small blue dot marking the current date.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.
- **Monthly calendar view** Selecting the `Month` option from the segmented control switches the layout to a monthly calendar view. This shows a desktop month view event calendar with a full monthly grid and event labels inside the day cells.
- **Daily scheduler view** Selecting the `Day` option from the segmented control switches the layout to a daily scheduler view. This shows the days of the week at the top, an all-day section for all-day events, and a 24-hour time grid for one day for timed events.
- **Weekly agenda view** Selecting the `Agenda` option from the segmented control switches the layout to a weekly agenda view. This shows the days of the week at the top, and below the events listed in weekly agenda.

## Best for

- **Google Calendar overlays** Showing events from public Google Calendars inside a Mobiscroll calendar.
- **Read-only event publishing** Sharing team, organization, or community calendars where visitors need to browse events but not edit them.
