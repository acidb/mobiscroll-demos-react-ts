To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/external-event-presets#).

## Demo description

Use external draggable events to create preset tasks that people can quickly copy and spawn events from. A great example is a car wrapping shop where different jobs need to be set up depending on the type of vehicle.

Print a list of predefined tasks and initialize them as `draggable` elements.
Enable `externalDrop` for the calendar and set up the predefined event skeletons for the
`draggable` component.

Whenever there is more information to be captured, like detailed task notes, customer information, the name of the technician... you can trigger a `popup` with the task form in the

`onEventCreate`

 lifecycle event.
For failed drops (trying to schedule a task during lunch breaks or weekends) the

`onEventCreateFailed`

 event will be triggered.

- **Want to see how external presets look & feel for a scheduler?** [Check out this example &#8594;](https://demo.mobiscroll.com/react/scheduler/external-event-presets#)

## Implementation instructions

- Set `view: { calendar: { labels: true } }`. Enable `externalDrop: true` to accept drops from outside the calendar and `dragToMove: true` to allow moving already-placed events. Block weekends with `invalid: [{ recurring: { repeat: 'weekly', weekDays: 'SA,SU' } }]`.
- Define each preset task as an object with `title`, `color`, `start`, and `end` fields (where `start`/`end` represent today-relative offsets that set the event duration when dropped). Render the task list outside the calendar and initialize each item as a draggable element using the `Draggable` component with `dragData` set to the task object. Angular: use the `mbsc-draggable` directive with `[dragData]`. JS/jQuery: call `mobiscroll.draggable(element, { dragData: task })` for each task element.
- Handle `onEventCreated` (Vue: `@event-created`) after a successful drop: open an anchored `Popup` targeting `args.target` with `display="anchored"`. The popup contains a read-only `Input` prefilled with `args.event.title`, a `Textarea` for details, and a `Select` for technician assignment, with an `['ok']` button to confirm. Show a `Toast` with `'New task added'` when the popup closes. Angular: use `@ViewChild` to get the `MbscPopup` instance and call `.open()` imperatively.
- Handle `onEventCreateFailed` and `onEventUpdateFailed` (Vue: `@event-create-failed`, `@event-update-failed`) to show a `Toast` when a drop lands on a weekend or other invalid date.

## What this demo shows

- A desktop month view event calendar paired with an external list of predefined tasks that can be dragged onto the calendar.
- **Calendar layout** The main view shows a full month grid with no events.
- **Calendar header** The header shows the current month and year on the left, and blue month navigation arrows with a `Today` button between them on the right.
- **Invalid dates** Weekend days are disabled, so they cannot be used as drop targets for new tasks. When a user tries to drop an event in a restricted cell, a `Can't create event on this date` toast appears at the bottom center of the calendar.
- **External task list** A right-side panel titled `Available tasks` displays preset items: `Small wrap 2 day`, `Full-size wrap 3 days`, `Mid-size wrap 3 days`, `Roadster wrap 3 days`, `SUV wrap 4 days`, and `Hypercar wrap 5 days`.
- **External drag & drop** Tasks can be dragged from the external list and dropped onto a calendar day to schedule predefined events.
- **Created event display** Dropping the task opens a popup below the event label with the title `Assign task`.
- **Popup form** The popup includes a `Task` text field prefilled with the task title, a `Details` text field with the `Add description…` placeholder, and a `Technician` select with the `Please select…` placeholder.
- **Popup confirmation** The popup footer contains a blue `Ok` button in the bottom-right corner to confirm the event details.
- **Scheduled task** After a successful drop and confirmation the task label appears inside day cell and a confirmation toast appears on the bottom center part of the calendar with this message `New task added`.
- **Day cell states** Hovering a day cell highlights the day number with a gray background, while clicking the empty part of the cell selects the day and highlights the day number with a blue background.
- **Gesture navigation** The month view can also be changed by clicking and dragging the calendar left or right.

## Best for

- **Service scheduling** Planning repeatable job types, such as vehicle wrapping tasks, from predefined task templates.
- **Template-based booking** Letting teams create new calendar events by dragging standard task presets onto available dates.
- **Technician assignment workflows** Capturing extra scheduling details, such as notes and technician selection, at the moment a task is placed.
