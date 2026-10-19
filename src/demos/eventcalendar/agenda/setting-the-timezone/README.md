To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/setting-the-timezone#).

## Demo description

The event calendar works with local times by default, but ships with support for changing the timezone. The conversions and correct output relies on either of these three external libraries: [luxon](https://moment.github.io/luxon/), [moment-timezone](https://momentjs.com/timezone/) and [day.js](https://day.js.org/). For installing and using these libraries check out this guide.

There are two angles regarding timezones:

- `dataTimezone` - the calendar expects this format and returns this format. It is `'local'` by default if the date-times don't contain any timezone information.
It can be set globally on the calendar using the `dataTimezone` option, or
specifically for the event using the `timezone` property of the [event data](https://demo.mobiscroll.com/react/eventcalendar/event-data-structure#).
- `displayTimezone` - the calendar displays the events in this timezone. The date-times will be converted from the `dataTimezone` and displayed accordingly. It is `'local'` by default

- **Enable switching the timezone in the UI?** [Learn how to dynamically change timezones &#8594;](https://demo.mobiscroll.com/react/eventcalendar/multiple-timezone-support#)

## Implementation instructions

- Any `dataTimezone` or `displayTimezone` value other than `'local'` needs a timezone plugin. This demo uses `dayjs` with `dayjs/plugin/utc` and `dayjs/plugin/timezone`: call `dayjs.extend(utc)` and `dayjs.extend(timezone)`, import `dayjsTimezone` from the Mobiscroll package, assign `dayjsTimezone.dayjs = dayjs`, and pass `dayjsTimezone` to the `timezonePlugin` option. With Luxon or moment-timezone, use the `luxonTimezone` or `momentTimezone` adapter instead.
- Set `dataTimezone: 'utc'` so the Eventcalendar reads event dates as UTC, and `displayTimezone: 'local'` to convert and list them in the browser's local timezone. The demo's `start` and `end` values are ISO 8601 strings without an offset (for example, `'2026-10-12T07:00'`). A string that includes an offset, such as `'2021-03-28T01:00:00Z'`, is read in that offset instead of `dataTimezone`.
- Set `view: { agenda: { type: 'week' } }` for a weekly agenda that lists the displayed week's events grouped by day. Days without events are left out unless `showEmptyDays: true` is added to the agenda view options.
- To display events in a specific timezone at runtime, update `displayTimezone` to an IANA timezone name (for example, `'America/New_York'`). To set the source timezone per event instead of globally, use the event's own `timezone` property instead of `dataTimezone`.

## What this demo shows

- A weekly agenda whose events are stored in UTC and listed in the browser's local timezone.
- **Timezone panel** A gray panel above the agenda, part of the demo page rather than the Eventcalendar, shows the timezones in use. `Data timezone is:` shows `UTC`, the timezone the event data is stored in.
- **Display timezone** `Display timezone is:` is a dropdown showing the timezone the agenda lists events in, set to the browser's local offset (for example, `UTC+2 Local`).
- **Browser timezone** The last line of the panel names the browser's timezone, for example `The local timezone your browser is in: "Europe/Berlin"`.
- **Header** The header shows the displayed week, Sunday to Saturday, as a date range on the left (for example, `Oct 11, 2026 - Oct 17, 2026`). On the right, previous and next arrows move between weeks, and a `Today` button returns to the current week.
- **Day headers** Events are grouped under a header for each day, such as `12 Mon Oct 2026`.
- **Empty days** Days without events get no header and are left out of the list.
- **Events** Each event is a row with a colored bar on the left and the event title in bold. The start time is on the right, with the end time below it in lighter text.
- **Event order** Events within a day are listed by start time.
- **Timezone conversion** Event times are shifted from UTC to the display timezone. With the browser in UTC+2, an event stored as 07:00 to 09:00 UTC is listed from 9:00 AM to 11:00 AM.

## Best for

- **Global scheduling** Apps that need to show the same events to users in different countries or regions.
- **International events** Event, conference, and webinar platforms that list sessions for attendees across multiple timezones.
- **Remote teams** Weekly meeting lists that show distributed team members the same schedule in their own local time.
- **Travel and cross-region planning** Itineraries and trip plans where users compare dates and event times across locations.
- **Timezone-aware previews** Products that let users switch the agenda's display timezone before confirming schedules.
