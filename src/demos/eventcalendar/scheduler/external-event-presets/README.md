To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/external-event-presets#).

## Demo description

Use external draggable events to create preset tasks that people can quickly copy and spawn events from. A great example is an auto repair shop where among others, mechanics have to perform the same predefined tasks.

Print a list of predefined tasks and initialize them as `draggable` elements. Enable `externalDrop` for the scheduler and set up the predefined event skeletons for the `draggable` component.

Whenever there is more information to be captured, like detailed task notes, customer information, the name of the technician... you can trigger a `popup` with the task form in the 

`onEventCreate`

 lifecycle event. For failed drops (trying to schedule a task during lunch breaks or weekends) the 
`onEventCreateFailed` event will be triggered.
- **Want to see how external presets look & feel for a calendar?** [Check out this example &#8594;](https://demo.mobiscroll.com/react/eventcalendar/external-event-presets#)

## Implementation instructions

- Use `view: { scheduler: { type: 'week', allDay: false, startTime: '06:00', endTime: '20:00' } }` — no all-day row, 6am–8pm. Enable `externalDrop: true`, `dragToMove: true`. The calendar starts with no events.
- Define an `invalid` array with two recurring ranges: weekends (`SA,SU`) and a lunch break (`12:00–12:30`, Mon–Fri).
- Define 6 static preset tasks, each with `title`, `color`, `start`, `end` (time strings that determine event duration when dropped), and `length` (display string): Tire change (0.5h), Brake maintenance (1.5h), Fluid maintenance (2h), Oil change (2h), Electrical inspection (2.5h), Engine inspection (4.5h).
- Render each task as a draggable item: wrap it with `Draggable` (Angular: `mbsc-draggable` directive, Vue: `MbscDraggable`) and pass `dragData` set to the task object. Tasks remain in the list after dropping — they are presets, not consumed items.
- On `onEventCreated`, open a `Popup` anchored to `args.target` with the title "Assign task". The popup contains a read-only `Input` pre-filled with the task title, a `Textarea` for details, and a `Select` for technician (7 names). On popup close, show a toast "New task added".
- On `onEventCreateFailed`, show a toast "Can't create event on this date". On `onEventUpdateFailed`, show a toast "Can't add event on this date".

## What this demo shows

- A desktop weekly scheduler layout with a fixed week strip at the top, a fixed all-day row below it, and a scrollable scheduler time grid from 6 AM to 8 PM.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed strip below the header displays the days of the selected week, with the current date highlighted by a blue circle.
- **Time grid** The scheduler shows a 14-hour range from 6 AM to 8 PM and supports vertical scrolling.
- **Invalid dates** Weekends and lunch breasks from 12PM to 12:30PM are disabled, so they cannot be used as drop targets for new tasks. When a user tries to drop an event in a restricted date/time, a `Can't create event on this date` toast appears at the bottom center of the scheduler.
- **External task list** A right-side panel titled `Available tasks` displays preset items: `Tire change 0.5 h`, `Break maintenance 1.5 h`, `Fluid maintenance 2 h`, `Oil change 2 h`, `Electric inspection 2.5 h`, and `Engine inspection 4.5 h`.
- **External drag & drop** Tasks can be dragged from the external list and dropped onto the scheduler to schedule predefined events.
- **Created event display** Dropping the task opens a popup below the event label with the title `Assign task`.
- **Popup form** The popup includes a `Task` text field prefilled with the task title, a `Details` text field with the `Add description…` placeholder, and a `Technician` select with the `Please select…` placeholder.
- **Popup confirmation** The popup footer contains a blue `Ok` button in the bottom-right corner to confirm the event details.
- **Scheduled task** After a successful drop and confirmation the task label appears inside day cell and a confirmation toast appears on the bottom center part of the calendar with this message `New task added`.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid, with a small blue dot marking the current date.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Service scheduling** Planning repeatable service tasks, such as auto repair or vehicle maintenance jobs, from predefined task templates.
- **Template-based booking** Letting teams create scheduler events by dragging standard task presets onto available dates and times.
- **Technician assignment workflows** Capturing extra scheduling details, such as task notes and technician selection, when a task is placed.
- **Restricted availability** Preventing task creation during blocked periods, such as weekends or lunch breaks.
- **Dense weekly planning** Managing timed tasks in a weekly scheduler where overlapping events, current-time tracking, and drag interactions need to stay visible.
