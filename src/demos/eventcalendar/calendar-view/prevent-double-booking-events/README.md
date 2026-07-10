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

- Set `view: { calendar: { type: 'month', labels: 'all' } }`. Enable `clickToCreate: true`, `dragToCreate: true`, `dragToMove: true`, and `dragToResize: true` so users can create and edit events interactively. Set `exclusiveEndDates: true` so that events touching at a boundary are not treated as overlapping.
- Set `eventOverlap: false` on the calendar to prevent any two events from overlapping across the whole instance. To prevent a specific event from overlapping regardless of the global setting, set `overlap: false` directly on that event data object.
- Handle `onEventCreateFailed` and `onEventUpdateFailed` (Vue: `@event-create-failed`, `@event-update-failed`) to show a `Toast` with `'Make sure not to double book'` whenever Mobiscroll blocks a creation or move due to an overlap violation.

## What this demo shows

- A desktop month view event calendar where events can be allowed or prevented from overlapping, either per event or for the whole calendar.
- **Calendar header** The header shows the current month and year on the left, and blue month navigation arrows with a `Today` button between them on the right.
- **Month grid** Day cells display events, each label has a blue line on the left, the background of the event have the same color, the event title, and an `end` value that shows the event end time.
- **Event interaction** Hovering over or selecting an event label highlights it and shows resize handles on both sides, indicating that the event can be resized by clicking and dragging.
- **Per-event overlap prevention** Events titled `Event 2 (no event overlap)` and `Event 4 (no event overlap)` block new event creation in their occupied day cells.
- **Creation feedback** When a user tries to create an overlapping event in a restricted cell, a `Make sure not to overbook` toast appears at the bottom center of the calendar.
- **Global overlap control** A switch under this title: `Control the interaction globally (all events)` lets users enable `Events cannot overlap eventOverlap=false` to prevent overlaps across all events.
- **Day cell states** Hovering a day cell highlights the day number with a gray background, while clicking the empty part of the cell selects the day and highlights the day number with a blue background.
- **Event creation** Double-clicking or clicking and dragging on the empty area of a day cell creates a new event.

## Best for

- **Work orders and field service** Preventing technicians, crews, or jobs from being booked into the same time slot when overlap is not allowed.
- **Availability-sensitive booking** Handling internal planning or booking flows where double booking needs to be blocked for some event types or for the whole calendar.
- **Interactive planning UIs** Showing users immediately when an event cannot be created because it would overbook the selected date or time range.
