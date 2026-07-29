To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/prevent-double-booking-events#).

## Demo description

Sometimes it is necessary to guarantee that events don't overlap - eg. when scheduling workorders, interacting with a work calendar.
You can reject the updates or additions and let the user know about it.

The event overlap can be turned on/off on an event basis, per resource or globally on the instance.

- On an [event](https://demo.mobiscroll.com/react/timeline/event-data-structure#) basis - by setting the `overlap` property to `false` the specified event cannot overlap.
- Per [resource](https://demo.mobiscroll.com/react/timeline/resource-data-structure#) - by setting the `eventOverlap` property to `false` the events in the specified resource cannot overlap.
- Globally on the instance - by setting `eventOverlap` option to `false` overlap is disbled globally.

If set to `false`, the [resource](https://demo.mobiscroll.com/react/timeline/resource-data-structure#) and the [event](https://demo.mobiscroll.com/react/timeline/event-data-structure#) settings have precedence over the global calendar  `eventOverlap` option.

Give feedback to the user - optionally, a toast can be displayed to explain why an event cannot be dropped, moved or created. For this we can use the `onEventCreateFailed` and `onEventUpdateFailed` lifecycle events.

## Implementation instructions

- Use `timeline: { type: 'day' }` — a single-day view. Set `eventOverlap: true` globally so overlap is permitted by default; individual events and resources selectively restrict it.
- Define 4 resources. Resources 1–3 have no overlap restriction at the resource level. Resource 4 has `eventOverlap: false` — no event on this resource may overlap with another, regardless of per-event settings.
- Add 6 events (all `new Date(y, m, d, hour)` for today). Two events carry `overlap: false` to restrict them individually: Event 2 on Resource 1 and Event 4 on Resource 2. The remaining events have no `overlap` property and can overlap freely unless their resource blocks it.
- Enable all interactions: `clickToCreate: true`, `dragToCreate: true`, `dragToMove: true`, `dragToResize: true`.
- Handle both `onEventCreateFailed` and `onEventUpdateFailed` with the same function — show a `Toast` with `'Make sure not to double book'`. `onEventCreateFailed` fires when a new event (click/drag-to-create) would violate the overlap rule; `onEventUpdateFailed` fires when a drag or resize would cause overlap. In both cases the calendar automatically rejects and reverts the action — no manual revert is needed.
- **Precedence**: per-event `overlap: false` and per-resource `eventOverlap: false` both override the global `eventOverlap` option.

## What this demo shows

- A desktop daily timeline where hours are arranged horizontally and resources are listed as rows on the left.
- **Header navigation** The month and year label opens date navigation, while the previous and next arrows move between days and the Today button returns to the current date.
- **Day view** The strip below the header shows the selected day, with the current date highlighted. The timeline displays hourly columns from 12 AM to 12 PM.
- **Current time** A vertical blue line with a time label marks the current time.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Resources** Four resources are displayed: Resource 1, Resource 2, Resource 3, and Resource 4 - no event overlap allowed.
- **Event-level restrictions** Resource 1 and Resource 2 contain events with per-event overlap restrictions. Event 2 on Resource 1 and Event 4 on Resource 2 have `overlap: false`, meaning those specific events cannot overlap with any other event. Other events on the same resources can still overlap when the global overlap setting allows it.
- **Resource-level restrictions** Resource 4 - no event overlap allowed has `eventOverlap: false`, which applies a no-overlap rule to every event on that resource.
- **Global overlap control** A switch under this title: `Control the interaction globally (all events/resources)` lets users enable `Events cannot overlap eventOverlap=false` to prevent overlaps across all the timeline, by default it's disabled. 
- **Creation feedback** When a user tries to create an overlapping event in a restricted cell, a `Make sure not to overbook` toast appears at the bottom center of the calendar.
- **Event cards** Events are shown as colored cards with a left color stripe, a bold title, a description, and a bold time range.
- **Date positioning** Events are positioned by their assigned resource and exact date range.
- **Event interaction** Events highlight on hover and show drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging across a time range.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through time and resources.

## Best for

- **Work orders and field service** Preventing technicians, crews, or jobs from being booked into the same time slot.
- **Availability-sensitive booking** Handling internal planning or booking workflows where double booking must be prevented for specific event types, resources, or the entire calendar.
- **Shared resource scheduling** Managing rooms, equipment, vehicles, or other resources that can only be assigned to one event at a time.
- **Interactive planning tools** Giving users immediate feedback when an action would create a scheduling conflict.
- **Mixed scheduling policies** Combining global, resource-level, and event-level overlap rules within the same timeline.
