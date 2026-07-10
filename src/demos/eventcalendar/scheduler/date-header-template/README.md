To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/date-header-template#).

## Demo description

Customize the date headers of the scheduler by adding relevant content, labels or completely change how they look. Use the `renderSchedulerDay` option for rendering a custom date header.

## Implementation instructions

- Use `view: { scheduler: { type: 'week', allDay: false, startDay: 1, endDay: 5, startTime: '08:00', endTime: '17:00' } }` — Mon–Fri, 8am–5pm, no all-day row. Set `groupBy: 'date'`. Load events via `getJson` from a JSONP endpoint on mount.
- Define 3 resources, each with `id`, `name`, `color`, and `img` (avatar URL): Ryan, Kate, John.
- Define a local `milestones` array of 3 objects (`date`, `name`, `color`) with dates relative to today (2 days ago, yesterday, tomorrow).
- Pass a custom day header renderer to `renderSchedulerDay` (Angular: `schedulerDayTemplate`, Vue: `#schedulerDay` slot). The renderer receives `args.date` — render the full day name with `formatDate('DDDD', date)` and the month/day with `formatDate('MMMM DD', date)`. Look up a milestone by comparing `+new Date(milestone.date) === +date`; if found, render a colored badge with the milestone name.
- Pass a custom resource renderer to `renderResource` (Angular: `resourceTemplate`, Vue: `#resource` slot). Render the resource's avatar image and name.

## What this demo shows

- A desktop weekly scheduler for Monday through Friday, with repeated daily resources and a vertically scrollable time grid from 8 AM to 5 PM.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Customized date header** Each day header uses a custom layout with bolded full day name, the month name, and the date below.
- **Milestone labels** Some date headers show a colored milestone badge, such as Project review, Product shipping, or Cycle finish.
- **Resources** Each day repeats the same resources: Ryan, Kate and John, showing an avatar and the person's name in bold below the avarat.
- **Time grid** The scheduler shows 9-hours range from 8 AM to 5 PM and can be scrolled vertically.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Team planning and project management** Schedule meetings, project reviews, tasks, and deadlines across multiple team members while keeping resource availability visible.
- **Manufacturing and production scheduling** Coordinate production teams, equipment, and operational activities, with milestones such as shipping dates or cycle completions highlighted in the date header.
- **Healthcare staff scheduling** Manage doctors, nurses, or specialists across shifts, with overlapping appointments and resource allocation shown clearly.
- **Consulting and professional services** Organize client appointments, workshops, and internal work sessions for consultants working across multiple projects.
- **Education and training centers** Plan classes, instructors, rooms, and training sessions, with drag-and-drop interactions for quick schedule adjustments.
- **Creative and marketing agencies** Coordinate designers, developers, content creators, and campaign milestones while keeping workloads and deadlines visible.
- **Field service and maintenance operations** Assign technicians to jobs throughout the week and reschedule appointments as priorities or availability change.
