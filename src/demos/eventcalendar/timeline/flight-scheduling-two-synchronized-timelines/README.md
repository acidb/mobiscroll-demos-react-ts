To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/flight-scheduling-two-synchronized-timelines#).

## Demo description

For creating complex dashboards like for managing jet bookings sometimes two separate timeline instances are necessary.

Sticking two instances together with synchronized horizontal scrolling allows for a setup where the top timeline is a list of bookings with one flight per rows and the bottom timeline holds available aircrafts.

Only moving events from the top timeline is allowed and events are fixed in time, meaning the start and end cannot be changed. Things like `eventOverlap` is set to `false` to avoid overlapping events.

## Implementation instructions

- Render two Eventcalendar instances stacked vertically: the top shows passenger bookings (one row per passenger; drag-out and delete only) and the bottom shows jet aircraft grouped by operator.
- Use `type: 'day'` with `size: 1` on both calendars so they show the same single day.
- On the top calendar, set `externalDrag: true` so bookings can be dragged out onto the bottom calendar. Set `eventDelete: true` to allow deleting bookings directly. Disable `dragToMove`, `dragToCreate`, and `dragToResize`.
- On the bottom calendar, set `externalDrop: true` to accept dropped bookings, `dragToMove: true` to allow reassignment, `dragInTime: false` to prevent time changes, and `eventDelete: true`. Disable `dragToCreate` and `dragToResize`. Set `eventOverlap: false` to prevent double-booking a jet.
- Set `showControls: false` on the bottom calendar so only the top calendar shows the navigation header. Bind `selectedDate` on the bottom calendar and update it via `onPageLoading` on the top calendar to keep both on the same date. Wire `onSelectedDateChange` on the bottom calendar to propagate manual navigation back.
- Synchronize horizontal scrolling: in `onPageLoaded` for each calendar, locate the `.mbsc-timeline-grid-scroll` scroll container and attach a scroll listener. Each listener copies `scrollLeft` to the other container. Use two boolean skip-flags to prevent infinite scroll loops. Remove the listeners in `onDestroy`.
- Define the bottom calendar's resources as a two-level tree: operator groups with `eventCreation: false` and individual jet leaf nodes with custom `img`, `code`, and `crew` properties.
- Use `renderResource` (Angular: `resourceTemplate`, Vue: `resource`) on the bottom calendar to show a jet photo, name, tail code, and crew count for leaf nodes, and just the operator name for group nodes.
- Use `onEventDragStart` on the bottom calendar to compute availability: find all scheduled flights that overlap the dragged booking's time window, collect their jet resource IDs, and set them as `invalid` with `recurring: { repeat: 'daily' }`. Also apply a fade CSS class to the overlapping flights to visually grey them out.
- Use `onEventDragEnd` to clear the `invalid` array and remove the fade class from all flights.
- Use `onEventCreated` and `onEventDeleted` to update the scheduled flights state. Use `onEventCreateFailed` and `onEventUpdateFailed` to show a `Toast` when a booking cannot be placed due to a conflict.
