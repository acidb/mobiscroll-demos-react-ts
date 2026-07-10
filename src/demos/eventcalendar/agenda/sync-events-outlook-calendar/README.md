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
