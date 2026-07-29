To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/setting-the-timezone#).

## Demo description

The event calendar works with local times by default, but ships with support for changing the timezone. The conversions and correct output relies on either of these three external libraries: [luxon](https://moment.github.io/luxon/), [moment-timezone](https://momentjs.com/timezone/) and [day.js](https://day.js.org/). For installing and using these libraries check out this guide.

There are two angles regarding timezones:

- `dataTimezone` - the calendar expects this format and returns this format. It is `'local'` by default if the date-times don't contain any timezone information. It can be set globally on the calendar using the `dataTimezone` option, or specifically for the event using the `timezone` property of the [event data](https://demo.mobiscroll.com/react/timeline/event-data-structure#).
- `displayTimezone` - the calendar displays the events in this timezone. The date-times will be converted from the `dataTimezone` and displayed accordingly. It is `'local'` by default

- **Enable switching the timezone in the UI?** [Learn how to dynamically change timezones &#8594;](https://demo.mobiscroll.com/react/timeline/multiple-timezone-support#)

## Implementation instructions

- Install `dayjs` and its `utc` and `timezone` plugins. At the top of the component file, extend dayjs with both plugins and wire the dayjs instance to Mobiscroll's adapter:
  ```js
  import dayjs from 'dayjs'
  import utc from 'dayjs/plugin/utc'
  import timezone from 'dayjs/plugin/timezone'
  import { dayjsTimezone } from '@mobiscroll/react' // or vue / angular / javascript / jquery

  dayjs.extend(utc)
  dayjs.extend(timezone)
  dayjsTimezone.dayjs = dayjs
  ```
  The `dayjsTimezone.dayjs = dayjs` assignment is required — Mobiscroll does not bundle dayjs itself and needs this reference. Luxon and moment-timezone are also supported as alternatives; only the adapter import name changes.
- Set `dataTimezone="utc"`, `displayTimezone="local"`, and `timezonePlugin={dayjsTimezone}` on the `Eventcalendar`. `dataTimezone` tells Mobiscroll how to interpret event start/end strings; `displayTimezone` controls what the user sees. With `'utc'` + `'local'`, events stored in UTC are shifted to the visitor's local offset for display.
- Use `timeline: { type: 'week' }` — no special view config beyond the week type is needed for this demo.
- Define 5 generic resources (A–E) with `id`, `name`, and `color`.
- Add 7 meeting events with `dyndatetime` offsets (today−1 to today+3). Several events span multiple resources using `resource: [1, 2, 4]` (array of IDs), demonstrating that timezone handling applies equally to single-resource and multi-resource events.
- Enable `dragToCreate`, `dragToMove`, and `dragToResize` so users can interactively create and adjust events and observe how the timezone conversion applies to newly created event times.

## What this demo shows

- A desktop weekly timeline where days are arranged horizontally and resources are listed as rows on the left.
- **Timezone controls** A `Date timezone is:` label appears next to the week view left uppder sied which shows the event data timezone as UTC in a non-editable input.
- **Display timezone selector** A `Display timezone is:` label appears below the data timezone field and is paired with a selectable input that opens a timezone picker.
- **Timezone conversion** Choosing a different display timezone updates the visible event times in the week view based on the selected timezone.
- **Header navigation** The month and year label opens date navigation, while the previous and next arrows move between weeks and the Today button returns to the current date.
- **Week view** The strip below the header shows the selected week from Sunday to Saturday, with the current date highlighted.
- **Time grid** The timeline displays hourly columns from 12 AM to 12 PM.
- **Resources** Multiple resources are shown as separate timeline rows.
- **Current time** A vertical blue line with a time label marks the current time.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event cards** Events are shown as colored cards with a left color stripe, a bold title, and the exact time range.
- **Date positioning** Events are positioned by their assigned resource and exact date and time range.
- **Event interaction** Events highlight on hover and show drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging across a time range.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through time and resources.

## Best for

- **Global scheduling** Apps that need to show the same events to users in different countries or regions.
- **Remote teams** Business schedulers that need to display meetings and work schedules consistently for distributed teams.
- **Travel and cross-region planning** Tools where users compare dates and event times across locations.
- **Timezone-aware previews** Products that let users switch the visible scheduler timezone before confirming schedules.
