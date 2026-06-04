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

- Render the preset task list outside the calendar and initialize each item as a `draggable` element.
- Enable `externalDrop` on the Eventcalendar so items from the external list can be dropped onto the month view.
- Define the preset event skeletons for the external `draggable` items so each dropped task creates the correct multi-day event.
- Configure the calendar as a desktop month view and mark weekends as invalid dates to block scheduling on those days.
- Use the

`onEventCreate`

 lifecycle event to open a `popup` after a successful drop when more details need to be collected.
- Build the popup form with fields for the task title, additional details, and technician selection, then confirm the assignment from the popup action button.
- Handle rejected drops with the

`onEventCreateFailed`

 event, for example when a task is dropped onto an invalid weekend date.

## What this demo shows

- A desktop month view Eventcalendar paired with an external list of predefined tasks that can be dragged onto the calendar.
- **Calendar layout** The main view shows a full month grid with the current month and year in the top-left corner.
- **Calendar navigation** The header includes previous and next month buttons, plus a `Today` button between them to jump back to the current date.
- **Invalid dates** Weekend days are disabled, so they cannot be used as drop targets for new tasks.
- **External task list** A right-side panel titled `Available tasks` displays preset items: `Small wrap 2 day`, `Full-size wrap 3 days`, `Mid-size wrap 3 days`, `Roadster wrap 3 days`, `SUV wrap 4 days`, and `Hypercar wrap 5 days`.
- **Empty initial state** The month cells start without any scheduled events.
- **External drag & drop** Tasks can be dragged from the external list and dropped onto a calendar day to create a new event.
- **Created event display** After a successful drop, the task label appears inside the selected day cell.
- **Assignment popup** Creating an event opens a popup below the event label with the title `Assign task`.
- **Popup form** The popup includes a `Task` text field prefilled with the task title, a `Details` text field with the `Add description…` placeholder, and a `Technician` select with the `Please select…` placeholder.
- **Popup confirmation** The popup footer contains a blue `Ok` button in the bottom-right corner to confirm the event details.
- **Hover state** Hovering over a day cell highlights the day number in the top-right corner with a gray background.
- **Selection state** Clicking an empty area in a day cell selects that day and highlights the day number with a blue background.
- **Gesture navigation** The month view can also be changed by dragging the calendar left or right.

## Best for

- **Service scheduling** Planning repeatable job types, such as vehicle wrapping tasks, from predefined task templates.
- **Template-based booking** Letting teams create new calendar events by dragging standard task presets onto available dates.
- **Desktop monthly planning** Reviewing capacity and assigning longer multi-day work across a full month view.
- **Technician assignment workflows** Capturing extra scheduling details, such as notes and technician selection, at the moment a task is placed.
- **Availability-aware scheduling** Preventing drops on non-working dates like weekends.
