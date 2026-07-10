To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/check-list-tasks-within-events#).

## Demo description

When there are subtasks related to work orders, it may be necessary to display them in the context of work order (or event).
Subtasks can be rendered as a list with the possibility of adding new items using the [<code>Prompt</code>](https://demo.mobiscroll.com/react/forms/alert-confirm-prompt#) or more sophisticated modals even. The height of resources will dynamically
increase depending on the height of the events/length of lists.

To allow dynamic changes in heights according to the length of subtask lists, `eventHeight: 'variable'` is used, along with custom event content rendering to maintain the appropriate theme styles.

## Implementation instructions

- Use `type: 'week'` with `eventDisplay: 'fill'` and `eventHeight: 'variable'` so event rows grow automatically as subtasks are added.
- Give each event a custom `tasks` array of strings representing the subtask list. Use `extendDefaultEvent` to pre-populate newly created events with a default title and a starter task.
- Use `renderTimelineEventContent` (Angular: `timelineEventContentTemplate`, Vue: `timelineEventContent`) to render the event body: show the event title, a "Task list" label, the current tasks as list items, and a "+ Add task" clickable item at the bottom.
- When the "+ Add task" item is clicked inside `renderTimelineEventContent`, open a `Prompt` dialog with a title referencing the event name. Pass the event reference to state so the correct event is updated on confirm.
- In the `Prompt` `onClose` handler, if the user entered a value, push it onto the event's `tasks` array, replace the event in the events list, and update state. Show a `Toast` confirming the update.
- Use `renderResource` (Angular: `resourceTemplate`, Vue: `resource`) to display the resource name and a description line beneath it.
- Enable `clickToCreate`, `dragToCreate`, `dragToMove`, and `dragToResize` for full event management directly on the timeline.

## What this demo shows

- A desktop weekly timeline where days are arranged horizontally and resources are listed vertically on the left.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed strip below the header shows the selected week from Sunday to Saturday, using the `DD DDD MMM YYYY` date format, with the current date highlighted.
- **Resources** The left side shows six resources, each with a custom description displayed beneath the resource name.
- **Resource rows** Resource row height increases dynamically based on the height of the events and the length of their task lists.
- **Resource colors** Assigned projects use a consistent color per resource, so events for the same team share the same color.
- **Event cards** Events are rendered as large colored cards with the project name in bold, a task list below it, and a "+ Add task" action at the bottom.
- **Task entry** Clicking "+ Add task" opens a popup with an input field for the new task, plus Cancel and Ok buttons for dismissing or confirming the change.
- **Dynamic event height** Event card height updates as tasks are added to the card.
- **Event positioning** Events are positioned by assigned resource and by start and end date.
- **Event creation** New events can be created by double-clicking an individual resource row in the timeline or by clicking and dragging across a time range.
- **Event interaction** Events are highlighted on hover and show drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Vertical scrolling** The resource area scrolls vertically so more resources can be displayed in the same timeline.

## Best for

- **Construction project planning** Scheduling resource-based assignments where each project or work order includes its own editable task list.
- **Installation workflows** Planning team assignments across a week while keeping installation tasks visible inside each scheduled event.
- **Maintenance projects** Managing work orders that need subtasks, changing durations, and resource-specific scheduling.
- **Field operations** Coordinating crews, teams, or resources across time while keeping task details attached to each assignment.
- **Task-driven project management** Using timeline events as containers for checklists that can grow as new tasks are added.
