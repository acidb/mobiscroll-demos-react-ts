To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/doctors-appointment#).

## Demo description

The scheduler can be set up for scheduling/unscheduling booked appointments.
Simply set up a daily schedule view with multiple resources representing dentists or doctors.
Next to the calendar you can render a list of unscheduled appointments.

Enabling [advanced validation](https://demo.mobiscroll.com/react/scheduler/time-off-blocked-ranges#) and combining that with the
[drag & drop between the calendar and external list](https://demo.mobiscroll.com/react/scheduler/external-drag-drop-sortable-dragula#)
on a resource to resource basis you got a pretty nice working base for appointment scheduling that can be further customized.

## Implementation instructions

- Use `type: 'day'` with `startTime: '08:00'`, `endTime: '20:00'`, and `allDay: false`. Define resources as a flat list of doctors, each with an `id` and `name`.
- Block past time with two `invalid` entries: a `recurring: { repeat: 'daily', until: yesterday }` entry for all days before today, and a `{ start: yesterday, end: today }` entry where `today` is the current `Date` with minutes set to `59` so the current hour is fully blocked. On mount, also set `editable: false` on every scheduled event whose `start` is before `today` to lock past appointments in place.
- Set `dragToMove`, `dragToCreate`, `eventOverlap={false}`, `externalDrop`, and `externalDrag` on the `Eventcalendar` to enable full bidirectional drag between the calendar and the external sidebar.
- Render each unscheduled appointment as a component that uses a ref-callback to obtain its DOM element and mounts a `Draggable` with `dragData={event}` and `element={elem}`. Conditionally render the card only when `!event.hide` — Mobiscroll sets `hide: true` during drag to prevent the source card and the drag ghost from both showing.
- Wrap the unscheduled appointments sidebar in a `Dropcontainer` connected via a ref-callback on the container div. In `onItemDrop`, set `unscheduled: true` on `args.data` and push it into the appointments list. In `onItemDragEnter`, apply a green background to the container only when `args.data.unscheduled` is false (calendar event being dragged back). Clear the background in `onItemDragLeave`.
- In `onEventCreate`, set `event.unscheduled = false` directly on the event object and clear the `colors` array. In `onEventCreated`, add the event to the scheduled list, remove it from the appointments list by ID, and show a `Toast`.
- In `onEventDragEnter` (fires when an external draggable enters the calendar), set a `colors` entry with a green tint spanning `'08:00'–'20:00'` with `recurring: { repeat: 'daily' }` to highlight valid drop targets. Clear it in `onEventDragLeave`.
- In `onEventCreateFailed` and `onEventUpdateFailed`, show a `Toast` whose text depends on whether `event.start <= today` ("Can't add event in the past") or not ("Make sure not to double book"). In `onEventDelete`, show an "unscheduled" `Toast` and remove the event from the scheduled list.

## What this demo shows

- A desktop daily scheduler for doctor or dentist appointments, with date navigation, multiple resources, a scrollable time grid, and an external list of unscheduled appointments.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between dates and jump back to the current day.
- **Day header** The curent or selected date and short weekday name are shown below the main navigation.
- **Resource strip** Multiple resources are shown below the date header, representing dentists or doctors.
- **Time grid** The scheduler displays a vertical day grid from 8AM to 8PM for the selected day.
- **Current time** A blue horizontal line marks the current time across the scheduler.
- **Past hours** Time ranges before the current time are disabled and shown with a gray background.
- **Disabled past interactions** Disabled past hours block event creation and drag-and-drop interactions in those time ranges.
- **Past events** Events scheduled in past hours remain visible, but they cannot be moved or repositioned.
- **Failed past updates** When a user tries to create or move an event into a past time range, a bottom-center toast appears with the message: `Can't add event in the past`.
- **Hover feedback** Hovering the time grid shows a time indicator that follows the pointer in 15-minute increments.
- **External task list** A right-side panel titled `Unscheduled appointments` shows four unscheduled appointments by default with different colors: `Winfred Lesley - Teeth whitening 1.5 hours` - yellow, `Rosaline Delice - Crown and bridge 2 hours` - green, `Macy Steven - Root canal treatment` - red,`Lavern Cameron / Rartar removal 1 hour` - purple.
- **External drag and drop** Appointments can be dragged from the external list onto the scheduler to add appointments.
- **Unscheduling events** Scheduled appointments can be dragged from the scheduler and dropped back onto the external list.
- **Confirmation messages** When an appointment is scheduled from the external list, a bottom-center toast confirms that the client was added. When an appointment is moved back to the external list, a toast confirms that the client was unscheduled.
- **External task list state** When a scheduled event is dragged over the external list, the panel background changes to light green.
- **Event rendering** Events appear as colored cards with a colored stripe on the left, the event time above the title which is the patient name shown in bold.
- **Event overlapping** Events cannot overlap. If a user tries to create, move, or resize an event and it overlaps another scheduled event, a bottom-center toast appears with the message: `Make sure not to double book`.
- **Event interactions** Hovering over a future event highlights it and shows drag and resize handles, indicating that it can be moved or resized.
- **Event creation** On future hours, double-clicking the time grid or clicking and dragging on it creates a new event and shows a bottom-center toast with the message: `New event added`.
- **Event selection** Clicking an event selects and highlights it.

## Best for

- **Dental clinics and dental practices** Schedule patients with specific dentists or hygienists while keeping new or unconfirmed appointments in an unscheduled queue until a resource becomes available.
- **Medical offices and healthcare providers** Manage consultations, treatments, examinations, and follow-up visits across multiple doctors, nurses, or specialists.
- **Veterinary clinics** Coordinate appointments across veterinarians, treatment rooms, and support staff while tracking patients waiting to be scheduled.
- **Beauty salons and spas** Assign customers to stylists, therapists, or treatment rooms and drag unscheduled bookings into available time slots.
- **Physical therapy and rehabilitation centers** Schedule therapists, treatment sessions, and equipment while maintaining visibility into pending appointments.
- **Automotive service centers** Organize repair jobs, inspections, and maintenance appointments across service technicians and service bays.
- **Professional service businesses** Manage consultations, assessments, interviews, or client meetings across multiple specialists or advisors.
- **Home services and field operations** Schedule technicians, installers, inspectors, or maintenance crews and assign incoming jobs from a backlog.
- **Call centers and customer appointment teams** Coordinate customer appointments across available agents while tracking unassigned requests.
- **Educational and tutoring services** Match students with instructors, classrooms, or training resources and schedule sessions as availability opens up.
