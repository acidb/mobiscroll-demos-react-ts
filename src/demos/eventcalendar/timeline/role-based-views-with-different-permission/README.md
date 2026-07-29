To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/role-based-views-with-different-permission#).

## Demo description

The following example demonstrates how to implement role-based permissions in a calendar by simulating a logged in user. The selected user determines which role and permissions are applied:

- **Project manager (Full access)** - can manage all tasks
- **Employees (Limited access)** - can only edit their own tasks
- **Clients (Read-only)** - can view the schedule without making changes

The demo uses an outside control to simulate logging in as a specific user. Based on the chosen role, the calendar applies the corresponding permissions conditionally.

This approach shows how you could pass the logged in user's role from your authentication system and dynamically configure what actions are allowed in the timeline.

## Implementation instructions

- Use `timeline: { type: 'week', startTime: '08:00', endTime: '20:00' }` to show a week view restricted to business hours.
- Define 5 named employee resources (Jude Chester, Willis Cane, Derek Austyn, Merv Kenny, Fred Waldez), each with a distinct `color`.
- Prepare 15 tasks using `dyndatetime` offsets spread across today−1, today, and today+1. Each task has a single `resource` ID. Store them as the initial (unmodified) event array.
- Represent the current user as an object with `id`, `name`, and `role` (`'full'` / `'limited'` / `'readonly'`). The demo hard-codes Willis Cane with `role: 'limited'` as the default logged-in user.
- **Run the login simulation on mount.** It works on shallow copies of the event and resource arrays to avoid mutating the originals, then applies role logic:
  - **`'readonly'`**: Set `editable: false` and `color: '#af2ec3'` on every event. Show a Toast: "Client with read-only access logged in".
  - **`'limited'`**: For each event, if `task.resource !== user.id` set `editable: false` and `color: '#6a6a6a'`; otherwise set `color: '#af2424'` (the user's own color). For each resource other than the user's own, set `eventCreation: false` to block creating events on foreign rows. Show a Toast: "User [name] with limited access logged in".
  - **`'full'`**: Leave all events and resources unmodified. Show a Toast: "User with full access logged in".
- Derive an `editEvents` boolean: `true` for `'full'` and `'limited'`, `false` for `'readonly'`. Pass this single value to `clickToCreate`, `dragToCreate`, `dragToMove`, `dragToResize`, and `eventDelete` simultaneously.
- Pass `extendDefaultEvent` returning `{ color: defaultColor }` where `defaultColor` is `'#af2424'` for `'limited'` and `''` for the other roles. This ensures newly drag-created events inherit the user's own color in limited mode.

## What this demo shows

- A desktop weekly timeline for role-based access control, with days arranged horizontally and resources listed as rows on the left.
- **Header navigation** The month and year label opens date navigation, while the previous and next arrows move between weeks and the Today button returns to the current date.
- **Week view** The strip below the header shows the selected week from Sunday to Saturday, with the current date highlighted.
- **Role selection** The demo simulates different logged-in users to show how permissions change by role.
- **Full access role** The Project manager can create, edit, drag, resize, and delete tasks across all resources.
- **Limited access role** Employees can view the full schedule but can only modify tasks assigned to themselves.
- **Employee preview** Selecting different employees shows the editing permissions for each employee.
- **Read-only role** Clients can browse the full schedule but cannot create, edit, move, resize, or delete tasks.
- **Permission handling** Editing capabilities are enabled or disabled automatically according to the active user role.
- **Shared timeline data** The same timeline data is shown with different interaction levels without changing the underlying schedule.
- **Time grid** The timeline displays hourly columns from 8 AM to 8 PM.
- **Resources** Multiple resources are shown as separate timeline rows.
- **Current time** A vertical blue line with a time label marks the current time.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event cards** Events are shown as colored cards with a left color stripe, a bold title, a description, and a bold time range.
- **Date positioning** Events are positioned by their assigned resource and exact date and time range.
- **Event interaction** Editable events highlight on hover and show drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging across a time range when the active role allows it.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through time and resources.

## Best for

- **Frontend permission handling** Demonstrating how to apply role-based editing rules while keeping a shared timeline interface visible to every user.
- **Project management tools** Showing different task management permissions for managers, team members, and external clients.
- **Workforce scheduling** Letting employees view the full team timeline while limiting edits to their own assigned work.
- **Team collaboration apps** Supporting shared planning views where each role has a different level of control over the same timeline.
- **Client-facing timeline** Providing read-only access to project timelines without exposing editing actions.
- **Permission testing** Previewing how the same timeline behaves for full access, limited access, and read-only users.
- **Resource-based timelines** Managing tasks across multiple people or resources in a weekly business-hours timeline.
