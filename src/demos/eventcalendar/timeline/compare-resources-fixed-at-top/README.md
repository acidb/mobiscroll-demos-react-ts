To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/compare-resources-fixed-at-top#).

## Demo description

With the combination of the timeline view along with fixed `resources` and `renderResource` you can create a UI for comparison.

In this example resources are people with tasks. There is a button in the resource template which on click dynamically moves the resource to/from a comparison section, located at the top of the view.
Compare up to 3 resources at a time, but adjust this as you like in your own implementation.

## Implementation instructions

- Use `type: 'week'` with `startDay: 1`/`endDay: 5`, `startTime: '09:00'`/`endTime: '17:00'`, and `resolutionHorizontal: 'hour'` for a Mon–Fri working-hours timeline.
- Set `fixed: true` on a resource object to pin its row to the top of the timeline so it stays visible while the rest of the list scrolls.
- Use `renderResource` (Angular: `resourceTemplate`, Vue: `resource`) to show the resource name alongside a Compare or Remove button.
- Show a "Compare" button (success style) for unfixed resources when fewer than 3 are already pinned; show a "Remove" button (danger style) for pinned resources; hide the button entirely once the 3-resource limit is reached.
- On Compare click, set `fixed: true` on the resource, add it to the fixed list, and rebuild the resources array with fixed resources first followed by the rest — this drives both the pin behavior and the visual order in the timeline.
- On Remove click, set `fixed: false`, remove the resource from the fixed list, and rebuild the array in the same way.
- Track the number of fixed resources in state and show a `Toast` when the user pins the third resource (the maximum allowed is 3).
- Enable `dragToMove: true` so tasks can be repositioned across resources and days.

## What this demo shows

- A desktop timeline view for comparing work assignments across multiple resources in a Monday-to-Friday work week.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed date strip shows the selected work week from Monday to Friday using the `DD DDD MMM YYYY` date format, with the current date highlighted in blue.
- **Time grid** The timeline displays working hours from 9 AM to 5 PM with hourly columns under each day.
- **Resources** The left side lists 12 resources, each with a Compare button next to the resource name.
- **Resource comparison** Clicking Compare pins that resource to the top of the resource list so the remaining resources can scroll below it for comparison.
- **Pinned resources** A pinned resource shows a Remove button, which unpins it and returns it to the scrolling resource list.
- **Comparison limit** Up to 3 resources can be pinned at the top of the timeline at the same time.
- **Current time** The current time is marked with a vertical blue line and a time label.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event cards** Events are shown as colored cards with a colored stripe, bold event title, and exact start and end time.
- **Resource colors** Events use a consistent color per resource, so tasks belonging to the same resource share the same event color.
- **Event positioning** Events are positioned by resource, date, start time, and end time.
- **Event overlapping** Overlapping events stack within the resource row so each event remains visible, with the row height increasing as needed.
- **Event creation** New events can be created by double-clicking in the timeline or by dragging across a time range.
- **Event interaction** Events highlight on hover and show drag and resize handles for moving events or changing their duration.
- **Event selection** Clicking an event selects and highlights it.
- **Vertical scrolling** The resource area scrolls vertically so the timeline can display many resources.
- **Horizontal scrolling** The timeline supports horizontal scrolling for navigating the visible date and time grid.

## Best for

- **Field service scheduling** Assigning jobs to technicians across multiple workdays while keeping selected team members pinned for comparison.
- **Workforce planning** Comparing availability, assignments, and workload across several people or teams in the same timeline.
- **Maintenance management** Scheduling maintenance tasks across resources while reviewing fixed resources against the rest of the list.
- **Work order assignment** Placing and adjusting tasks by resource, date, start time, and end time.
- **Resource comparison** Keeping up to 3 important resources fixed at the top while scrolling through the remaining resources.
- **Multi-resource scheduling** Managing many resources and tasks at the same time in a work-week timeline.
