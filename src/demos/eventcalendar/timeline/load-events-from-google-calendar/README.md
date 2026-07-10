To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/load-events-from-google-calendar#).

## Demo description

Event data can be loaded from remote sources, like public google calendars.
Through the integration plugin
you can easily show events that are available in a public calendar.
The integration plugin needs to be added to the download package or installed separately from a dedicated NPM package.

You will just need the `CALENDAR_ID` and an `apiKey` from google and you should be ready to roll.

In this example you can see how multiple public holiday calendars are loaded as separate resources into the timeline.

Public calendars are read-only. If you are interested in syncing private google calendars with read/write/delete access, [check out this example](https://demo.mobiscroll.com/react/timeline/sync-events-google-calendar#).

> **Warning:** This example uses the **integration plugin**
to connect to and load events from Google Calendar and it is not available in the trial. Give the live demo a try and see how it can be configured.

## Implementation instructions

- Use `timeline: { type: 'month', eventDisplay: 'fill' }` — a monthly view where events fill the width of their date cell.
- Set `clickToCreate: false`, `dragToCreate: false`, `exclusiveEndDates: true` — the calendar is read-only.
- No user sign-in required. Public Google Calendars are accessed with an API key only.
- Import `googleCalendarSync` from `@mobiscroll/calendar-integration` (a separately installed package).

- Define 7 public Google Calendar holiday feeds as the resources array. Each entry has `id` (the Google Calendar ID), `name`, and `color`:

  | name | id | color |
  |---|---|---|
  | Holidays in France | `en.french#holiday@group.v.calendar.google.com` | `#D81B60` |
  | Holidays in Germany | `en.german#holiday@group.v.calendar.google.com` | `#F4511E` |
  | Holidays in Hungary | `en.hungarian#holiday@group.v.calendar.google.com` | `#AD1457` |
  | Holidays in India | `en.indian#holiday@group.v.calendar.google.com` | `#E4C441` |
  | Holidays in Romania | `en.romanian#holiday@group.v.calendar.google.com` | `#0B8043` |
  | Holidays in United Kingdom | `en.uk#holiday@group.v.calendar.google.com` | `#3F51B5` |
  | Holidays in United States | `en.usa#holiday@group.v.calendar.google.com` | `#8E24AA` |

  Pass this array as both `resources` on the calendar and the source for `calendarIds` (extracted with `.map(cal => cal.id)`).

- Call `googleCalendarSync.init()` on component mount with:
  - `apiKey` — your Google API key (no `clientId` or `redirectUri` needed for public calendars)
  - `onInit` — callback fired when the integration is ready; call `loadEvents()` from here
- **`loadEvents`**: call `googleCalendarSync.getEvents(calendarIds, firstDay, lastDay)`. On success, map each returned event: `event.resource = event.googleCalendarId`, then replace the events array.
- **`onPageLoading`**: uses `args.firstDay` / `args.lastDay` (month view navigation args). Pre-loads one extra month in each direction to avoid visible loading gaps on navigation:
  ```js
  firstDay = new Date(start.getFullYear(), start.getMonth() - 1, start.getDate())
  lastDay  = new Date(end.getFullYear(),   end.getMonth() + 1,   end.getDate())
  ```
  After updating the date variables, call `loadEvents()`.
