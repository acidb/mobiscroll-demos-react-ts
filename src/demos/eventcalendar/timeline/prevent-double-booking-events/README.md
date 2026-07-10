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
