To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/show-multiple-timezones#).

## Demo description

When operating across multiple timezones, coordinating resources and getting people on the same page is a challenge. It helps if events can be seen across these timezones.

Use the `timezones` property of the `view.scheduler` option and set the timezone tracks with custom labels. The order of the tracks is determined by the order they are added to the array.

## Implementation instructions

- Use `view: { scheduler: { type: 'week', timezones: [...] } }`. Pass `dataTimezone: 'utc'`, `displayTimezone: 'America/New_York'`, and `timezonePlugin: dayjsTimezone` to the Eventcalendar.
- **Timezone plugin setup**: import `dayjsTimezone` from the Mobiscroll package; import `dayjs` and its `utc` and `timezone` plugins; call `dayjs.extend(utc)` and `dayjs.extend(timezone)`; then set `dayjsTimezone.dayjs = dayjs`. JS/jQuery: assign via `mobiscroll.dayjsTimezone.dayjs = dayjs`.
- **`timezones` array** (three entries, order determines display order in the header): `{ timezone: 'America/Los_Angeles', label: 'LA (-3)' }`, `{ timezone: 'America/Chicago', label: 'CHI (-1)' }`, `{ timezone: 'America/New_York', label: 'PHI' }`.
- Define 7 events inline using `dyndatetime` offsets (spread across day−2 through day+4), each with `title` and `color`. No drag interactions.

## What this demo shows

- A desktop weekly scheduler layout with a fixed week strip at the top, a fixed all-day row below it, and a scrollable scheduler time grid for the selected week.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed strip below the header displays the days of the selected week, with the current date highlighted by a blue circle.
- **All-day events** All-day events appear in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected week.
- **Time zone panel** The scheduler displayes multiple timezones simultaneously through a dedicated timezone panel on the left side. Each timezone is shown in its own column, allowing users to instantly compare local times across different regions.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid, with a small blue dot marking the current date.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Global organizations**: Coordinating schedules across multiple office locations, regions, or operating timezones.
- **Remote teams**: Comparing local times when planning meetings, handoffs, or collaborative work across distributed teams.
- **Cross-region scheduling**: Showing timed events against several timezone tracks without requiring users to calculate time differences manually.
- **Business operations**: Managing schedules for teams or resources that regularly work across geographic regions.
