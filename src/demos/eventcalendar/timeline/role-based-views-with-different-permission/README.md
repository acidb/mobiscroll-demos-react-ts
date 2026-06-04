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
- **Run the login simulation on mount** (React: `useEffect`, Angular: `ngOnInit`, Vue/JS/jQuery: called directly at startup). It works on shallow copies of the event and resource arrays to avoid mutating the originals, then applies role logic:
  - **`'readonly'`**: Set `editable: false` and `color: '#af2ec3'` on every event. Show a Toast: "Client with read-only access logged in".
  - **`'limited'`**: For each event, if `task.resource !== user.id` set `editable: false` and `color: '#6a6a6a'`; otherwise set `color: '#af2424'` (the user's own color). For each resource other than the user's own, set `eventCreation: false` to block creating events on foreign rows. Show a Toast: "User [name] with limited access logged in".
  - **`'full'`**: Leave all events and resources unmodified. Show a Toast: "User with full access logged in".
- Derive an `editEvents` boolean: `true` for `'full'` and `'limited'`, `false` for `'readonly'`. Pass this single value to `clickToCreate`, `dragToCreate`, `dragToMove`, `dragToResize`, and `eventDelete` simultaneously.
- Pass `extendDefaultEvent` returning `{ color: defaultColor }` where `defaultColor` is `'#af2424'` for `'limited'` and `''` for the other roles. This ensures newly drag-created events inherit the user's own color in limited mode.
- **Angular**: Use the injected `Notifications` service (`this.notify.toast(...)`) instead of the `Toast` component used in other frameworks.
