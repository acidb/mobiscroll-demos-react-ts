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

## What this demo shows

- A desktop daily timeline with a horizontal 24-hour time grid, a hierarchical resource tree on the left, and an external task list for drag-and-drop scheduling.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between days and jump back to the current day.
- **Day view** A fixed strip below the header shows the selected day using the `DD DDD MMM YYYY` date format, with the current date highlighted.
- **Time grid** The timeline displays the selected day as hourly columns across a full 24-hour range.
- **Resources** The left side shows expandable and collapsible resource groups, including parent groups such as HW Team and SW Team.
- **Resource hierarchy** Individual resources are organized under their respective team groups.
- **External task list** A left-side panel titled `Available tasks` lists preset tasks: `Task 1 HW`, `Task 2 HW`, `Task 3 HW`, `Task 4 SW`, `Task 5 SW`, and `Task 6 SW`.
- **External drag and drop** Tasks can be dragged from the external list and dropped onto the timeline to create predefined events.
- **Drop validation** Tasks ending in HW can only be dropped on HW Team resources, while tasks ending in SW can only be dropped on SW Team resources.
- **Drag feedback** While dragging an external task, compatible resource backgrounds are highlighted in green and incompatible team resources are shown in gray.
- **Created and updated event confirmation** Creating, dropping, or updating a task on the timeline shows a confirmation toast in the center of the timeline.
- **Current time** A vertical blue line with a time label marks the current time.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event cards** The demo starts with no loaded events. Events can be scheduled from the external task list or created directly on the timeline.
- **Event rendering** Events appear as colored cards with a colored left stripe, exact start and end times above the title, and the project name in bold.
- **Event positioning** Events are positioned by assigned resource, date, start time, and end time.
- **Event creation** New events can be created by double-clicking an individual resource row or by clicking and dragging across a time range.
- **Team constraints** Events created in one team cannot be moved to the other team.
- **Event interaction** Events are highlighted on hover and show drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Vertical scrolling** The resource area scrolls vertically so many resources can be displayed in one timeline.
- **Horizontal scrolling** The timeline supports horizontal scrolling for navigating the full time range.

## Best for

- **Task assignment** Assigning work items to specific resources through direct drag-and-drop scheduling.
- **Dispatching** Scheduling hardware and software tasks against the correct team or resource group.
- **Field service planning** Matching task types to available people, crews, or equipment while preventing invalid assignments.
- **Manufacturing workflows** Scheduling categorized work across grouped production resources.
- **Project scheduling** Planning team-based tasks on a daily timeline with visible resource availability.
- **Validation-heavy scheduling** Enforcing resource rules while giving users clear visual feedback during drag and drop.
