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
