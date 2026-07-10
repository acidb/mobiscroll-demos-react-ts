To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/work-week-hours#).

## Demo description

Customize the scheduler by not only [disabling certain hours](https://demo.mobiscroll.com/react/scheduler/time-off-blocked-ranges#) but hide them through setting the `startTime` and `endTime` properties of the `view.schedule` option. Quikcly set up a work calendar that goes from Monday through Friday with the `startDay` and `endDay` properties and renders the schedule from 8AM to 6PM.

You can easily add breaks - like a "Lunch break" - or disable times with the invalid option.

## Implementation instructions

- Use `view: { scheduler: { type: 'week', startDay: 1, endDay: 5, startTime: '09:00', endTime: '18:00' } }` to restrict the scheduler to Mon–Fri working hours only.
- Define the lunch break as an `invalid` entry with `start: '12:00'`, `end: '13:00'`, a `title`, a custom `type: 'lunch'` property for identification, and `recurring: { repeat: 'weekly', weekDays: 'MO,TU,WE,TH,FR' }` so it blocks the slot on every weekday.
- Enable `dragToCreate` and `dragToMove` for full event management directly on the calendar.
- In `onEventCreateFailed` and `onEventUpdateFailed`, check `args.invalid.type === 'lunch'` and show a `Toast` with a descriptive error message when the user tries to place an event on the lunch break.

## What this demo shows

- A desktop-style work-week scheduler with a fixed Monday-to-Friday header, a fixed all-day row, and a vertically scrollable time grid for the selected week.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Work-week layout** The scheduler shows Monday through Friday and hides weekends.
- **All-day row** All-day events appear in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler grid shows working hours from 9 AM to 6 PM and scrolls vertically through the visible time range.
- **Lunch break** The 12 PM to 1 PM segment is disabled across the whole work week.
- **Invalid time range** Disabled lunch-break segments appear with a gray background and a Lunch break title in each day column.
- **Invalid event creation** Events cannot be created on lunch-break segments.
- **Invalid event resizing** Events cannot be resized or moved so they overlap the lunch-break segments.
- **Create error feedback** Trying to create an event during lunch break shows a bottom-centered toast with the message: `Can't create this task on lunch break.`
- **Update error feedback** Trying to resize or reschedule an event so it overlaps lunch break shows a toast with the message: `Can't schedule this task on lunch break.`
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid, with a small blue dot marking the current day.
- **Hover feedback** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Team calendars and meeting management** Plan meetings, workshops, training sessions, and collaborative work across a Monday-to-Friday schedule.
- **Consulting and professional services** Schedule client meetings, discovery calls, presentations, and project work with clear weekly availability.
- **Healthcare appointments** Manage consultations, treatments, follow-up visits, and practitioner schedules in a familiar calendar layout.
- **Service-based businesses** Schedule hourly appointments for salons, fitness trainers, therapists, coaches, and similar service providers.
