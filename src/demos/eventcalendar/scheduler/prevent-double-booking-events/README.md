To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/prevent-double-booking-events#).

## Demo description

Sometimes it is necessary to guarantee that events don't overlap - eg. when scheduling workorders, interacting with a work calendar.
You can reject the updates or additions and let the user know about it.

The event overlap can be turned on/off on an event basis, per resource or globally on the instance.

- On an [event](https://demo.mobiscroll.com/react/scheduler/event-data-structure#) basis - by setting the `overlap` property to `false` the specified event cannot overlap.
- Per [resource](https://demo.mobiscroll.com/react/scheduler/resource-data-structure#) - by setting the `eventOverlap` property to `false` the events in the specified resource cannot overlap.
- Globally on the instance - by setting `eventOverlap` option to `false` overlap is disbled globally.

If set to `false`, the [resource](https://demo.mobiscroll.com/react/scheduler/resource-data-structure#) and the [event](https://demo.mobiscroll.com/react/scheduler/event-data-structure#) settings have precedence over the global calendar  `eventOverlap` option.

Give feedback to the user - optionally, a toast can be displayed to explain why an event cannot be dropped, moved or created. For this we can use the `onEventCreateFailed` and `onEventUpdateFailed` lifecycle events.

- **Looking to implement time off or block out ranges?** [Learn how to add lunch breaks, working hours and disable weekends &#8594;](https://demo.mobiscroll.com/react/scheduler/time-off-blocked-ranges#)

## Implementation instructions

- Use `view: { scheduler: { type: 'day' } }`. Set `eventOverlap: true` globally so overlap is permitted by default; individual events and resources selectively restrict it.
- Define 4 resources. Resource 4 has `eventOverlap: false` — no event on this resource may overlap with another, regardless of per-event settings.
- Add 6 events for today using `new Date(y, m, d, hour)`. Two events carry `overlap: false` (on Resources 1 and 2); the rest can overlap freely unless their resource blocks it.
- Enable all interactions: `clickToCreate: true`, `dragToCreate: true`, `dragToMove: true`, `dragToResize: true`.
- Handle both `onEventCreateFailed` and `onEventUpdateFailed` with the same function — show a `Toast` with `'Make sure not to double book'`. The calendar automatically rejects and reverts the action.
- **Precedence**: per-event `overlap: false` and per-resource `eventOverlap: false` both override the global `eventOverlap` option.

## What this demo shows

- A desktop day scheduler with date navigation, multiple resources, and a vertically scrollable time grid for the selected day.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between days and jump back to the current day.
- **Day header** The short weekday name and the selected date are shown below the main navigation.
- **Resource strip** Four resources are displayed across the scheduler: Resource 1, Resource 2, Resource 3, and Resource 4 - no event overlap allowed.
- **Event-level restrictions** Resource 1 and Resource 2 contain events with per-event overlap restrictions. Event 2 on Resource 1 and Event 4 on Resource 2 have `overlap: false`, meaning those specific events cannot overlap with any other event. Other events on the same resources can still overlap when the global overlap setting allows it.
- **Resource-level restrictions** Resource 4 - no event overlap allowed has `eventOverlap: false`, which applies a no-overlap rule to every event on that resource.
- **Global overlap control** A switch under this title: `Control the interaction globally (all events/resources)` lets users enable `Events cannot overlap eventOverlap=false` to prevent overlaps across all the scheduler, by default it's disabled. 
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected day.
- **Current time** A horizontal blue line marks the current time across the scheduler.
- **Hover feedback** Hovering over the time grid shows a time indicator that follows the pointer in 15-minute increments.
- **Timed events** Events are displayed as ligh blue cards with a blue left stripe, the event title, and the exact start and end time.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles when the event allows those interactions.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.
- **Creation feedback** When a user tries to create an overlapping event in a restricted cell, a `Make sure not to overbook` toast appears at the bottom center of the calendar.

## Best for

- **Work orders and field service** Preventing technicians, crews, or jobs from being booked into the same time slot.
- **Availability-sensitive booking** Handling internal planning or booking workflows where double booking must be prevented for specific event types, resources, or the entire calendar.
- **Shared resource scheduling** Managing rooms, equipment, vehicles, or other resources that can only be assigned to one event at a time.
- **Interactive planning tools** Giving users immediate feedback when an action would create a scheduling conflict.
- **Mixed scheduling policies** Combining global, resource-level, and event-level overlap rules within the same scheduler.
