To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/doctors-availability-calendar-planner#).

## Demo description

You can tailor the scheduler to show availability per doctor using visual indicators in each column.
Availability is marked with a green status track on the left side of each doctor's column,
making open slots easy to spot and supporting quick scheduling decisions.

To create the visual indicator, we added extra resource columns with a narrow width, styled using a custom CSS class set via the `cssClass` property in the resource data. The availability track is shown using events placed on these columns, with their content hidden via renderSchedulerEvent option and resized responsively based on the narrow resource column width. Time ranges outside each doctor's working hours are disabled to reflect their actual schedule.

## Implementation instructions

- Use `type: 'week'` with `startDay: 1`, `endDay: 5`, `startTime: '08:00'`, `endTime: '18:00'`, `timeCellStep: 20`, `timeLabelStep: 20`, and `allDay: false`. Set `groupBy: 'date'` so all doctor columns appear side by side under each day heading.
- Define resources in interleaved pairs for each doctor: a narrow "bar" resource (even ID, `cssClass: 'mds-healthcare-res-col-bar'`) immediately followed by the doctor resource (odd ID, `name`, `img`, `description`, `color`, `cssClass: 'mds-healthcare-res-col'`). Bar resources 4, 6, 8, 10, 12 also carry `eventCreation: false`; bar resource 2 does not. The bar column renders as a narrow green availability track to the left of the doctor's appointment column.
- Add a `type: 'availability'` event for each bar resource covering the doctor's working hours (`start`/`end`), with `recurring: { repeat: 'daily' }` and `editable: false`. The bar events serve purely as a visual availability indicator — their content is suppressed via `renderSchedulerEventContent`.
- Define `invalid` entries per doctor pair: apply two recurring `invalid` entries to both the bar and doctor resource IDs — one covering `'00:00'` to the working-hours start and one from the working-hours end to `'24:00'`, each with `recurring: { repeat: 'daily' }`. This greys out off-hours on both the bar and appointment columns simultaneously.
- Use `renderSchedulerEventContent` (Vue: `schedulerEventContent`; Angular: `[schedulerEventContentTemplate]`) to render event content: return a "Patient: name" label for regular appointment events (check `!event.original.type`), and an empty/null value for availability bar events to hide their content entirely.
- Use `renderResource` (Vue: `resource`; Angular: `[resourceTemplate]`) to differentiate the two column types: for doctor columns (`cssClass === 'mds-healthcare-res-col'`), render an avatar image alongside the doctor's name and description; for bar columns, render an empty fragment.
- Set `eventOverlap: false` and `dragTimeStep: 20`. Drag creation, move, and resize are left commented out in the demo.
- In `onEventCreated`, `onEventUpdated`, and `onEventDeleted`, show a `Toast` with a short status message.

## What this demo shows

- A desktop-style work-week scheduler with a fixed Monday-to-Friday header, repeated doctor resources for each day, and a scrollable 10-hour time grid for the selected week.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed strip below the header displays the days of the selected week, with the current date highlighted by a blue circle.
- **Resources** Each day repeats the same doctor resources, showing an avatar, the doctor's name in bold, and the doctor's profession below the name.
- **Resource columns**: Each resource has its own column inside the day column.
- **Doctor availability** Availability is marked with a green status track on the left side of each doctor's column, making open slots easier to identify.
- **Time grid**: The scheduler displays time from 8 AM to 6 PM.
- **Scrolling behavior**: The scheduler can be scrolled vertically through the time grid and horizontally across the days of the month and their resource columns.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** Events cannot overlap in the scheduler grid.
- **Current time** A blue current-time line appears across the time grid.
- **Disabled hours** Each doctor has individual working hours. Time ranges outside those hours are disabled and shown with a gray background and block event creation, drag-to-move, and drag-to-resize interactions.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** In available time ranges, double-clicking the grid or dragging across a time range creates a new appointment and shows a bottom-center toast with the message `Appointment created`.
- **Event deletion** Removing an event from the scheduler shows a bottom-center toast with the message `Appointment deleted`.
- **Event update** Updateing an appointment from the scheduler shows a bottom-center toast with the message `Appointment updated`.

## Best for

- **Healthcare and medical practices** Schedule patients across doctors, specialists, therapists, nurses, or treatment rooms while keeping provider availability visible.
- **Fitness and wellness centers** Manage appointments for trainers, instructors, physiotherapists, massage therapists, and treatment rooms.
- **Beauty salons and spas** Assign customers to stylists, beauticians, therapists, and service stations throughout the day.
- **Professional services and consulting firms** Schedule client meetings, consultations, coaching sessions, legal appointments, or financial advisory meetings across multiple consultants.
- **Educational institutions and tutoring centers** Coordinate classes, tutoring sessions, instructors, training rooms, and student appointments.
- **Recruitment and HR teams** Manage candidate interviews across recruiters, hiring managers, interview panels, and meeting rooms.
- **Field service and maintenance operations** Schedule technicians, inspectors, engineers, or repair specialists and monitor daily workloads.
- **Customer support and service centers** Allocate appointments, consultations, onboarding sessions, or customer meetings across available agents and specialists.
- **Equipment and facility booking systems** Manage reservations for meeting rooms, studios, workspaces, vehicles, machinery, or shared equipment.
- **Legal, accounting, and financial firms** Coordinate client appointments, consultations, audits, reviews, and advisory sessions across professionals.
- **Real estate agencies** Schedule property viewings, inspections, appraisals, and client meetings across multiple agents.
- **Creative agencies and production teams** Organize project reviews, design consultations, photo shoots, studio bookings, and production resources.
- **Higher education and research organizations** Schedule faculty office hours, lab sessions, equipment usage, academic advising, and research facilities.
