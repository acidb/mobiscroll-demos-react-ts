To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/role-based-views-with-different-permission#).

## Demo description

The following example demonstrates how to implement role-based permissions in a calendar by simulating a logged in user. The selected user determines which role and permissions are applied:

- **Project manager (Full access)** - can manage all tasks
- **Employees (Limited access)** - can only edit their own tasks
- **Clients (Read-only)** - can view the schedule without making changes

The demo uses an outside control to simulate logging in as a specific user. Based on the chosen role, the calendar applies the corresponding permissions conditionally.

This approach shows how you could pass the logged in user's role from your authentication system and dynamically configure what actions are allowed in the timeline.
