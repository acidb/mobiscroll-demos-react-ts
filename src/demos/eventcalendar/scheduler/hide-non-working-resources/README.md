To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/hide-non-working-resources#).

## Demo description

The scheduler can automatically hide non-working resource columns using the `hideInvalidColumns` property of
view option.

The calendar is set to a weekly view (Monday to Friday, 8:00–20:00) and displays multiple doctors as resources, each with unique working days.
Recurring invalids are used to mark specific weekdays when a doctor is unavailable, while static invalids indicate individual days off.
As a result, only the columns for resources who are working on a given day are shown, making the schedule cleaner and easier to read.
This approach is ideal for managing staff with varying shifts and availability.

## Implementation instructions

- Use `view: { scheduler: { type: 'week', allDay: false, startDay: 1, endDay: 5, startTime: '08:00', endTime: '20:00', hideInvalidColumns: true } }` — Mon–Fri, 8am–8pm, no all-day row. Set `groupBy: 'date'`.
- Define 5 doctor resources. Each has `id`, `name`, plus custom fields: `specialty`, `bgColor`, `textColor`, and `img` (avatar URL).
- Define a large set of inline events (~75) with relative today dates, each assigned to a single doctor.
- Add a `colors` entry per resource: a daily recurring tint (`08:00–20:00`, `repeat: 'daily'`) giving each doctor's column a distinct semi-transparent background.
- Add `invalid` entries in two forms:
  - **Recurring weekly non-working days** per resource (e.g. Dr. Alice: Mon/Wed/Fri off; Dr. Brian: Mon off; etc.) — these hide the resource's column on those days when `hideInvalidColumns: true` is set.
  - **Specific individual days off** per resource: one `allDay: true` invalid with a `title` like "Dr. Alice Johnson OFF", scoped to that resource.
- Pass a custom resource renderer to `renderResource` (Angular: `resourceTemplate`, Vue: `#resource` slot). Render the doctor's avatar, name, and specialty, styled using `resource.bgColor` and `resource.textColor`.

## What this demo shows

- A desktop weekly scheduler from Monday to Friday, with a fixed week strip, repeated resources for each day, and a vertically scrollable time grid running from 8 AM to 8 PM.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week strip**: The fixed strip below the header displays days from Monday to Friday in the selected week, with the current date highlighted by a blue circle.
- **Hidden invalid resources**: Resources that are marked as unavailable for a day are hidden from that day's scheduler columns.
- **Resource grouping**: Each visible doctor appears as a separate resource column inside the corresponding day column.
- **Custom resources**: Each resource header shows the doctor's picture, name, and specialty, with resource-specific colors used for the column styling.
- **Time grid** The scheduler shows 12-hours range from 8 AM to 8 PM and can be scrolled vertically.
- **Timed events** Timed events are displayed in the weekly scheduler grid as light blue cards with a blue stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Staff schedules with different working days**: Hide unavailable staff from days when they are not scheduled to work.
- **Healthcare appointments**: Show only doctors, specialists, nurses, or treatment rooms that are available on the selected day.
- **Consulting and professional services**: Display only consultants, advisors, or service providers who are bookable on a given weekday.
- **Education and training**: Hide instructors, classrooms, or labs that are unavailable on specific days.
- **Field service scheduling**: Show only technicians, crews, or vehicles assigned to work in a specific daily schedule.
- **Shared equipment booking**: Keep unavailable machines, rooms, vehicles, or other resources out of the visible schedule.
- **Cleaner resource-heavy schedules**: Reduce empty columns in weekly scheduler views where many resources have different availability patterns.
