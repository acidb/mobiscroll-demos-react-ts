To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/prevent-double-booking-events#).

## Demo description

Sometimes it is necessary to guarantee that events don't overlap - eg. when scheduling workorders, interacting with a work calendar.
You can reject the updates or additions and let the user know about it.

The event overlap can be turned on/off on an event basis or globally on the instance.

- On an [event](https://demo.mobiscroll.com/react/eventcalendar/event-data-structure#) basis - by setting the `overlap` property to `false` the specified event cannot overlap.
- Globally on the instance - by setting `eventOverlap` option to `false` overlap is disbled globally.

If set to `false`, the [event](https://demo.mobiscroll.com/react/eventcalendar/event-data-structure#) settings have precedence over the global calendar  `eventOverlap` option.

Give feedback to the user - optionally, a toast can be displayed to explain why an event cannot be dropped, moved or created. For this we can use the `onEventCreateFailed` and `onEventUpdateFailed` lifecycle events.

- **Looking to implement time off or block out ranges?** [Learn how to add lunch breaks, working hours and disable weekends &#8594;](https://demo.mobiscroll.com/react/scheduler/time-off-blocked-ranges#)

## Implementation instructions

- The demo shows two ways to control overlap behavior in the Eventcalendar.
- **Per event** Set the `overlap` property to `false` on an event to prevent other events from overlapping with that specific event.
- **Globally** Set the `eventOverlap` option to `false` on the calendar instance to disable overlapping events across the calendar.
- **Precedence** Event-level settings take precedence over the global `eventOverlap` option when overlap is set on individual events.
- **Failed create or move feedback** Use the `onEventCreateFailed` and `onEventUpdateFailed` lifecycle events to notify users when an overlapping event cannot be created or updated.

## What this demo shows

- A desktop month view event calendar where events can be allowed or prevented from overlapping, either per event or for the whole calendar.
- **Month view** The calendar shows a full month grid with the current month and year in the header.
- **Header navigation** Previous and next arrow buttons navigate between months, and the `Today` button returns to the current date.
- **Events in day cells** Days with events display blue event labels with a small line on the left, the event title, and an `end` label followed by the event end time.
- **Per-event overlap prevention** Events titled `Event 2 (no event overlap)` and `Event 4 (no event overlap)` block new event creation in their occupied day cells.
- **Creation feedback** When a user tries to create an overlapping event in a restricted cell, a `Make sure not to overbook` toast appears at the bottom center of the calendar.
- **Global overlap control** A switch under the text `Control the interaction globally (all events)` lets users enable `Events cannot overlap eventOverlap=false` to prevent overlaps across all events.
- **Hover states** Hovering a day cell highlights the day number, and any events in that cell are highlighted as well.
- **Event interaction** Clicking, hovering, or selecting an event label highlights that event.
- **Date selection** Clicking the empty area of a day cell selects the day and highlights the day number with a blue background.
- **Event creation** Double-clicking or dragging on the empty area of a day cell creates a new event.

## Best for

- **Work orders and field service** Preventing technicians, crews, or jobs from being booked into the same time slot when overlap is not allowed.
- **Resource scheduling** Managing rooms, equipment, vehicles, or other shared resources that cannot be assigned to multiple events at once.
- **Availability-sensitive booking** Handling internal planning or booking flows where double booking needs to be blocked for some event types or for the whole calendar.
- **Mixed scheduling rules** Supporting calendars where some events can overlap, while specific events must remain exclusive.
- **Interactive planning UIs** Showing users immediately when an event cannot be created because it would overbook the selected date or time range.
