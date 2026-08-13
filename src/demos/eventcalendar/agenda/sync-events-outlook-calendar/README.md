To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/sync-events-outlook-calendar#).

## Demo description

The event calendar comes with third party calendar integration support through the integration plugin. This needs to be added to the download package or installed separately from a dedicated NPM package.

It includes everything you need to authenticate your users, get their Outlook calendars and provides functions for CRUD operations. It takes care of loading the events and converts them to the required format so that they can be displayed on the Mobiscroll calendar separately or mixed with other calendars and events.

Customizing the interaction, event workflows, whether the events are read-only is up to you. In this live demo, newly created events will land in the `primary calendar` of the authenticated user.

> **Warning:** This example uses the **integration plugin** to connect to and load events from Outlook Calendars and it is not available in the trial. Give the live demo a try and see how it can be configured.

## Implementation instructions

- This demo is structurally identical to `sync-events-google-calendar` with the following Outlook-specific differences:
- Install `@mobiscroll/calendar-integration`. Import `outlookCalendarSync`. Call `outlookCalendarSync.init({ clientId: '<YOUR_OUTLOOK_CLIENT_ID>', redirectUri: '<YOUR_OUTLOOK_REDIRECT_URI>', onSignedIn, onSignedOut })` at component init (no `apiKey`). Use `view: { agenda: { type: 'month' } }` with `exclusiveEndDates: true`.
- In `onSignedIn`: call `outlookCalendarSync.getCalendars()`. Calendars have a `name` property (not `summary`) and sort by `isDefaultCalendar` (not `primary`). Initialize `calendarIds` with all IDs, then call `outlookCalendarSync.getEvents(calendarIds, startDate, endDate)`.
- Toggling a calendar **on**: fetch only that single calendar's events — `outlookCalendarSync.getEvents([calendarId], startDate, endDate)` — and **append** the result to the existing events array. Toggling **off**: filter the events array by `event.outlookCalendarId !== calendarId` (no re-fetch needed).
- `onPageLoading`, custom header (sign-in button → "My Calendars" button after login), loading spinner, `Popup` with `Switch` list and "Sign out" button, `Toast` for errors, and "Today" button are all identical to `sync-events-google-calendar`.

## What this demo shows

- Shows a monthly agenda view with events listed and grouped by date.
- **Header navigation** The month and year label in the top left opens date navigation. The previous and next arrows and the Today button on the right move between months and jump back to the current date.
- **Signed-out state** No events are loaded by default. The `Sync My Outlook Calendars` button in the header prompts the user to sign in to Outlook Calendar.
- **Authentication flow** Clicking the Outlook sign-in button opens a new browser tab where the user can authenticate with their Outlook account.
- **Signed-in state** After sign-in, the header button changes to `My Calendars`.
- **Calendar list** The `My Calendars` popup shows multiple calendar switches, such as the user's personal calendar and country-specific holiday calendars.
- **Sign-out** The bottom of the popup includes a `Log out of my account` button for disconnecting the Outlook Calendar account.
- **Agenda list** The area below the header lists events for the selected month. Events in the agenda are grouped by date.
- **Sticky day headers** As the agenda scrolls vertically, each day stays visible with a sticky date header while its events appear underneath.
- **Events** Events appear as agenda cards with a colored strip on the left and the event title next to it. Start and end times are stacked on the right side of timed events. All-day events show the all-day label on the right.
- **Event interaction** Hovering an event highlights it.
- **Event selection** Clicking an event selects and highlights it.

## Best for

- **Personal calendar scheduling** Building agenda views where users can browse and manage events from their own Outlook Calendar.
- **Calendar visibility controls** Letting users toggle individual Outlook calendars on or off inside the same agenda view.
- **Readonly calendar handling** Displaying calendars without write access while preventing edits to those calendar rows.
