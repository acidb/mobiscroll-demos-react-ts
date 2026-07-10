To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/setting-the-timezone#).

## Demo description

The event calendar works with local times by default, but ships with support for changing the timezone. The conversions and correct output relies on either of these three external libraries: [luxon](https://moment.github.io/luxon/), [moment-timezone](https://momentjs.com/timezone/) and [day.js](https://day.js.org/). For installing and using these libraries check out this guide.

There are two angles regarding timezones:

- `dataTimezone` - the calendar expects this format and returns this format. It is `'local'` by default if the date-times don't contain any timezone information.

It can be set globally on the calendar using the `dataTimezone` option, or
specifically for the event using the `timezone` property of the [event data](https://demo.mobiscroll.com/react/scheduler/event-data-structure#).

- `displayTimezone` - the calendar displays the events in this timezone. The date-times will be converted from the `dataTimezone` and displayed accordingly. It is `'local'` by default

- **Enable switching the timezone in the UI?** [Learn how to dynamically change timezones &#8594;](https://demo.mobiscroll.com/react/scheduler/multiple-timezone-support#)

## Implementation instructions

- Register the Day.js timezone adapter: import `dayjs`, `dayjs/plugin/utc`, and `dayjs/plugin/timezone`; call `dayjs.extend(utc)` and `dayjs.extend(timezone)`; then assign `dayjsTimezone.dayjs = dayjs` (where `dayjsTimezone` is the Mobiscroll timezone adapter imported alongside the component). Luxon and moment-timezone are supported alternatives.
- Set `dataTimezone="utc"`, `displayTimezone="local"`, and `timezonePlugin={dayjsTimezone}` on the Eventcalendar. `dataTimezone` is the timezone events are stored and parsed in; `displayTimezone` is the timezone they are rendered in — the calendar converts between the two automatically. Both default to `'local'` if omitted.
- Use `view: { scheduler: { type: 'week' } }` with `dragToCreate`, `dragToMove`, and `dragToResize` all set to `true`.
- Define events as inline static data using `dyndatetime()` offsets for relative dates. Each event has `start`, `end`, `title`, and `color`.

## What this demo shows

- A desktop weekly scheduler layout with a fixed week strip at the top, a fixed all-day row below it, and a scrollable scheduler time grid for the selected week.
- **Timezone controls** A `Date timezone is:` label appears next to the week view left uppder sied which shows the event data timezone as UTC in a non-editable input.
- **Display timezone selector** A `Display timezone is:` label appears below the data timezone field and is paired with a selectable input that opens a timezone picker.
- **Timezone conversion** Choosing a different display timezone updates the visible event times in the week view based on the selected timezone.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed strip below the header displays the days of the selected week, with the current date highlighted by a blue circle.
- **All-day events** All-day events appear in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected week.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid, with a small blue dot marking the current date.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Global scheduling** Apps that need to show the same events to users in different countries or regions.
- **Remote teams** Business schedulers that need to display meetings and work schedules consistently for distributed teams.
- **Travel and cross-region planning** Tools where users compare dates and event times across locations.
- **Timezone-aware previews** Products that let users switch the visible scheduler timezone before confirming schedules.
