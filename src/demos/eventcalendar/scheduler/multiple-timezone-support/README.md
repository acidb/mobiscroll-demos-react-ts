To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/multiple-timezone-support#).

## Demo description

If the context requires users being able to change the timezone on the fly, you can add a custom dropdown with the desired timezones to the event calendar header. This can be of course placed externally to the calendar as well, eg. setting page.

Set the timezone of the incoming data through the `dataTimezone` - eg. `'utc'`,  and set the display timezone through the `displayTimezone` - eg. `'America/Los_Angeles'`

- **Wanna show multiple timezone tracks?** [Check out the next example &#8594;](https://demo.mobiscroll.com/react/scheduler/show-multiple-timezones#)

## Implementation instructions

- The dayjs setup and event data are the same as the `setting-the-timezone` demo: import `dayjs` + `utc` + `timezone` plugins, extend dayjs with both, and assign `dayjsTimezone.dayjs = dayjs`. Set `dataTimezone="utc"` and `timezonePlugin={dayjsTimezone}` on the Eventcalendar. `displayTimezone` starts at `'utc'` and is controlled by a dropdown in the custom header.
- Use `view: { scheduler: { type: 'week' } }`.
- Use `renderHeader` (Angular: `headerTemplate`, Vue: `#header` slot) to build the header: `CalendarNav` on the left, and a right-aligned group containing `CalendarPrev`, `CalendarToday`, `CalendarNext`, followed by a `Select`.
- Configure the `Select` with `inputStyle="box"`, `touchUi={false}`, `display="anchored"`. Pass 9 `{ text, value }` objects covering US, UTC, European, and Asian timezones (America/Los_Angeles through Asia/Tokyo). Default selection is `'utc'`.
- Bind the selected timezone value to `displayTimezone` on the Eventcalendar; for the imperative API, call `inst.setOptions({ displayTimezone: ev.value })` in the `Select`'s `onChange`.

## What this demo shows

- A desktop weekly scheduler where the same event data can be displayed in different timezones.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Timezone switcher** A custom dropdown next to the navigation arrows lets the user choose from different timezone options. By default UTC is selected.
- **Timezone behavior** Changing the selected timezone updates the visible event times in the weekly scheduler view based on the selected timezone.
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

- **Global scheduling** Apps that need to show the same events for users across multiple countries or regions.
- **Event planning** Event management, conference, webinar, or attendee-facing schedulers where local time presentation matters.
- **Distributed teams** Business calendars used by remote teams working across different timezones.
- **Timezone preview** Products that let users switch the scheduler display timezone on the fly from the UI or from external settings.
