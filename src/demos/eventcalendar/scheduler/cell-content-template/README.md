To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/cell-content-template#).

## Demo description

Events appear over scheduler cells, which provide a great background layer for information.
They can be `disabled`, styled with `colored backgrounds`, or used to present rich content.

Cell content in the scheduler can be customized using the renderCell option. The callback receives cell data such as the date, resource, and overlapping events in the cell. This lets you add custom content like icons or badges to cells based on their data. It's useful for showing holidays, availability, or statuses.

Cells can be hourly, 30 minute long, or however it is setup using the
[timeCellStep](https://docs.mobiscroll.com/react/eventcalendar/timeline#view-timeline-timeCellStep) option.

## Implementation instructions

- Use `view: { scheduler: { type: 'week', startTime: '08:00', endTime: '18:00', startDay: 1, endDay: 5 } }` — Mon–Fri, 8am–6pm.
- Define 14 inline events with relative dates; each has `title`, `start`, `end`, and `id`.
- Pass a cell renderer to `renderCell` (Vue: `#cell` slot; Angular: `[cellTemplate]`). The renderer receives the cell's `date` — read `.getHours()` and `.getDay()` to determine which icon badges to show:
  - Mon/Fri at h=9: people + message icons; h=13: lunch icon; Mon–Fri at h=17: clock icon; Tue at h=10–11: loop icon; `h % 4 === 0`: cogs icon; h=3: connection icon; h=12: upload icon; h=15: lock icon (React/Vue/JS/jQuery; Angular omits this condition); Wed at h=14: deploy icon.
  - Each icon is rendered as a `mbsc-font-icon mbsc-icon-{name}` element with a `title` attribute. Return `null`/empty string when the cell has no icons.

## What this demo shows

- A desktop weekly scheduler for Monday through Friday, with a fixed week strip, a fixed all-day row, and a vertically scrollable time grid from 8 AM to 6 PM.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed strip below the header shows the selected work week from Monday to Friday, with the current date highlighted by a blue circle.
- **All-day events** All-day events appear in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler shows a 10-hour range from 8 AM to 6 PM and supports vertical scrolling.
- **Timed events** Timed events appear as blue cards in the weekly scheduler grid, with a blue stripe on the left, the exact start and end time above the title, and the event title shown in bold.
- **Custom cell content** Some time-grid cells use custom content, including a gray background and icons on the left side of the cell.
- **Cell data usage** Custom cell rendering can show icons, badges, or status markers based on cell data such as holidays, availability, or other scheduling states.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid, with a small blue dot marking the current date.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Employee shift scheduling** Plan weekly work schedules, manage overlapping shifts, track availability, and show all-day absences or holidays in the scheduler.
- **Appointment and service booking** Manage appointments for clinics, salons, consulting firms, and service businesses that need clear time slots and conflict visibility.
- **Resource and room management** Coordinate meeting rooms, equipment, shared workspaces, or other resources with reservations throughout the work week.
- **Project and team planning** Organize weekly tasks, workshops, standups, and milestones while keeping work, availability, and time allocation visible.
