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
