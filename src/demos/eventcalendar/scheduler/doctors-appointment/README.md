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
- Block past time with two `invalid` entries: a `recurring: { repeat: 'daily', until: yesterday }` entry for all days before today, and a `{ start: yesterday, end: today }` entry where `today` is the current `Date` with minutes set to `59` so the current hour is fully blocked. In a `useEffect`, also set `editable: false` on every scheduled event whose `start` is before `today` to lock past appointments in place.
- Set `dragToMove`, `dragToCreate`, `eventOverlap={false}`, `externalDrop`, and `externalDrag` on the `Eventcalendar` to enable full bidirectional drag between the calendar and the external sidebar.
- Render each unscheduled appointment as a component that uses a ref-callback to obtain its DOM element and mounts a `Draggable` with `dragData={event}` and `element={elem}`. Conditionally render the card only when `!event.hide` — Mobiscroll sets `hide: true` during drag to prevent the source card and the drag ghost from both showing.
- Wrap the unscheduled appointments sidebar in a `Dropcontainer` connected via a ref-callback on the container div. In `onItemDrop`, set `unscheduled: true` on `args.data` and push it into the appointments list. In `onItemDragEnter`, apply a green background to the container only when `args.data.unscheduled` is false (calendar event being dragged back). Clear the background in `onItemDragLeave`.
- In `onEventCreate`, set `event.unscheduled = false` directly on the event object and clear the `colors` array. In `onEventCreated`, add the event to the scheduled list, remove it from the appointments list by ID, and show a `Toast`.
- In `onEventDragEnter` (fires when an external draggable enters the calendar), set a `colors` entry with a green tint spanning `'08:00'–'20:00'` with `recurring: { repeat: 'daily' }` to highlight valid drop targets. Clear it in `onEventDragLeave`.
- In `onEventCreateFailed` and `onEventUpdateFailed`, show a `Toast` whose text depends on whether `event.start <= today` ("Can't add event in the past") or not ("Make sure not to double book"). In `onEventDelete`, show an "unscheduled" `Toast` and remove the event from the scheduled list.
