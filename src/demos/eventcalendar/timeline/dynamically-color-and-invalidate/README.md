To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/dynamically-color-and-invalidate#).

## Demo description

The options of the timeline can be dynamically changed. That applies to both the `color` and `invalid` options which control the resource track background colors and their valid state.

Based on the type of event someone wants to add or create we can highlight resources that support that type of event and invalidate resources that don't.

In the following example we have two types of tasks/events: **HW** for Hardware and **SW** for Software tasks. We also have two teams or two groups of resources: **HW Team** and **SW Team**. What we want to do is enforce event creation for teams based on the type of event: **HW** for the hardware team and **SW** for the software team.

We'll use the `onEventDragStart` and `onEventDragEnd` lifecycle events to highlight & invalidate and then set everything back to the default state. We have access to the `event.category` through the lifecycle event's `args`.

- **Want to learn about lifecycle events?** [Learn how you can levarage the various events that are triggered &#8594;](https://demo.mobiscroll.com/react/timeline/event-hooks#)

## Implementation instructions

- Build a two-panel layout: a sidebar listing draggable task cards and a timeline Eventcalendar panel beside it.
- Wrap each task card in the sidebar with the `Draggable` component, passing the full task object (including its `category` field) as `dragData`.
- Enable `externalDrop: true` on the timeline so sidebar cards can be dropped onto it, and `dragToMove: true` so already-scheduled events can be repositioned.
- Define resources as two groups — HW Team and SW Team — each containing leaf resource rows. Set `eventCreation: false` on the group nodes so events are only placed on individual resource rows.
- Give each task a custom `category` property (`'hw'` or `'sw'`) that determines which team it belongs to.
- Pre-define four constant arrays: `hwInvalids` and `swInvalids` (blocking the incompatible team's resource rows) and `hwColors` and `swColors` (highlighting the compatible team's rows). Each entry uses `recurring: { repeat: 'daily' }` and a `resource` array to target whole teams.
- Use `onEventDragStart` to read the dragged event's `category`. Access it via `args.event.original || args.event` to handle both timeline events and externally dragged cards. Set the `invalid` state to the matching `*Invalids` array and the `colors` state to the matching `*Colors` array so incompatible rows are greyed out and valid rows are highlighted while dragging.
- Use `onEventDragEnd` to clear both `invalid` and `colors` back to empty arrays, restoring the default timeline appearance.
- Use `extendDefaultEvent` to assign the correct `category` to a newly dropped event based on the target resource ID, so events created by drop carry the right team association.
- Use `onEventCreated` and `onEventUpdated` to show a `Toast` confirming a successful drop or move. Use `onEventCreateFailed` and `onEventUpdateFailed` to show a `Toast` when a drop or move is blocked by the active `invalid` constraint.
