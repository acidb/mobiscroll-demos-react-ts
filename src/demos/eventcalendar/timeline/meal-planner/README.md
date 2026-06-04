To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/meal-planner#).

## Demo description

Use the [timeline summary mode/event listing](https://demo.mobiscroll.com/react/timeline/event-listing#) to create a weekly meal planner. Meal types are represented as resources with a [custom template](https://demo.mobiscroll.com/react/scheduler/custom-resource-header-template#). Events are the actual meals with custom properties, like calories or notes.

The add/edit form shows up in a custom popover that opens on double click for meal creation and on click for editing.

The popover header is customized with a custom header renderer function using the `renderHeader` option.

By default the second dimension of the timeline (vertical axis) is reserved for resources, however it can be configured and used as "time slots" if the times are not relevant.

## Implementation instructions

- Use the timeline view with `type: 'week'` and `eventDisplay: 'fill'` so each meal event fills the full timeline cell for its day.
- Define resources for each meal type (Breakfast, Elevenses, Lunch, Dinner, Snack) with a `color`, a recommended `kcal` range, and an emoji `icon`. Resources serve as the vertical axis; no time grid is shown.
- Use `renderResource` (Angular: `resourceTemplate`, Vue: `resource`) to display the meal type icon, name (in the resource color), and recommended calorie range in each resource row header.
- Use `renderTimelineEventContent` (Angular: `timelineEventContentTemplate`, Vue: `timelineEventContent`) to render a custom event body showing the meal title and calorie count inside the timeline cell.
- Enable `clickToCreate` so a single click on an empty cell creates a new meal. Set `dragToMove: true` to allow moving meals to different days or resource rows. Set `dragToCreate: false` and `dragToResize: false`.
- Use `extendDefaultEvent` to pre-populate newly created events with a default title and `allDay: true`.
- Use `onEventCreated` to open the add popup. Read `args.event` to set the popup header date and derive the meal type from the event's `resource`.
- Use `onEventClick` to open the edit popup. Read `args.resourceObj.name` and format `args.event.start` with `formatDate` to populate the popup header.
- Use `onEventDeleted` to handle keyboard-triggered deletions by calling the same delete helper as the Delete button in the popup.
- Build the popup with the `Popup` component; default to `display="bottom"` with `fullScreen: true` on mobile, and use the `responsive` option to switch to `display: 'center'` at the medium breakpoint.
- Render a custom two-line popup header via the popup's `renderHeader` prop: a primary line showing the meal type name or "New meal", and a secondary line with the formatted date.
- Include a `SegmentedGroup` with one `Segmented` per meal type so users can change the category from within the popup. On change, update the in-progress event's `resource` to the selected ID.
- Add `Input` fields for name and calories and a `Textarea` for notes. Show a "Save" button in edit mode and an "Add" button in create mode, both alongside a Cancel action.
- For deletion, clicking the Delete button in the edit popup removes the event from state and shows a `Snackbar` with an Undo action that restores the meal.
- On popup close when the add form was canceled, refresh the events list to remove the temporary placeholder event that was added to the timeline.

## What this demo shows

- Displays a weekly timeline-based meal planner where days are shown horizontally and meal types are shown as resource rows.
- **Resources** Each resource row represents a meal type, and each meal type has its own color so related events are easy to distinguish.
- **Events** Events represent the planned food item for a specific day and meal, using the resource color across the timeline cell.
- **Editing** Clicking an existing meal opens a popup with an edit form for updating the meal name, calories, and notes.
- **Deleting** The edit popup includes a delete action that removes the selected meal immediately, then shows a snackbar confirmation with an Undo action to restore it.
- **Creating** Double-clicking an empty timeline cell opens a popup for creating a new meal for the selected day and meal row.
- **Form behavior** The create popup lets users enter the meal name, calories, and notes before saving the new event.

## Best for

- **Meal planning** Weekly meal planning workflows for restaurants, schools, kindergartens, nursing homes, and similar institutions.
- **Day-based planning** Scenarios where items need to be planned by day without showing exact start and end times.
- **Resource-based organization** Setups where color-coded meal categories or resource rows make planned items easier to scan.
- **Direct calendar editing** Applications that need users to add, edit, delete, and restore planned items directly from the calendar UI.
