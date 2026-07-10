To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/sync-events-google-calendar#).

## Demo description

The event calendar comes with third party calendar integration support through the integration plugin. This needs to be added to the download package or installed separately from a dedicated NPM package.

It includes everything you need to authenticate your users, get their Google calendars and provides functions for CRUD operations. It takes care of loading the events and converts them to the required format so that they can be displayed on the Mobiscroll calendar separately or mixed with other calendars and events.

Customizing the interaction, event workflows, whether the events are read-only is up to you. In this live demo, newly created events will land in the `primary calendar` of the authenticated user.

> **Warning:** This example uses the **integration plugin** to connect to and load events from Google Calendar and it is not available in the trial. Give the live demo a try and see how it can be configured.

## Implementation instructions

- Install `@mobiscroll/calendar-integration` and import `googleCalendarSync`. Call `googleCalendarSync.init({ apiKey: '<YOUR_GOOGLE_API_KEY>', clientId: '<YOUR_GOOGLE_CLIENT_ID>', onSignedIn, onSignedOut })` on component mount.
- Use `view: { calendar: { labels: true } }` with `exclusiveEndDates: true`. Load events on each page navigation via `onPageLoading` (debounced ~200 ms): call `googleCalendarSync.getEvents(calendarIds, viewStart, viewEnd)` and update the events array.
- Layout: `Page` wrapper with a left side panel (auth/calendar controls) and right calendar area. **Signed-out** panel: explanatory text + "Sign in with Google" button (calls `googleCalendarSync.signIn()`). **Signed-in** panel: usage note, "Enable editing" `Switch`, "My Calendars" section with one `Switch` per calendar (toggle fires `googleCalendarSync.getEvents()` for the current range), and "Log out" button (calls `googleCalendarSync.signOut()`).
- On `onSignedIn`: call `googleCalendarSync.getCalendars()`, sort to put primary calendar first, build a `calendarData` map keyed by calendar ID, set `calendarIds` to `[primaryCalendarId]`, then fetch events for the current view range.
- CRUD — all gated by the `editable` switch and `googleCalendarSync.isSignedIn()`: **create** calls `googleCalendarSync.addEvent(primaryCalendarId, event)` in `onEventCreate`; **update** calls `googleCalendarSync.updateEvent(calendarId, event)` in `onEventUpdate` after a `Confirm` dialog; **delete** calls `googleCalendarSync.deleteEvent(calendarId, event)` in `onEventDelete` after a `Confirm` dialog. On API failure, revert the events array to the previous state. Show a `Toast` on each success or error. Pass `clickToCreate`, `dragToCreate`, `dragToMove`, `dragToResize` all bound to the `editable` flag. Set `extendDefaultEvent` to assign the primary calendar's color to newly created events. Use `renderHeader` to show a CSS-animated loading spinner alongside `CalendarNav`, `CalendarPrev`, `CalendarToday`, `CalendarNext`.

## What this demo shows

- Shows how Mobiscroll event calendar can load and display events from a signed-in Google Calendar account in a desktop month view.
- **Layout** The demo uses a full month calendar layout with a separate panel on the left for Google authentication, editing settings, and calendar selection.
- **Signed-out state** No events are loaded by default, and the side panel prompts the user to sign in with the text "Log into your Google account to view and edit your Google Calendar events" followed by a `Sign in with Google` button.
- **Authentication flow** Clicking the Google sign-in button opens a new browser tab where the user can authenticate with their Google account.
- **Signed-in state** After sign-in, the side panel changes to an authenticated state with guidance about editing events and syncing changes back to Google Calendar.
- **Editing toggle** The authenticated panel includes an `Enable editing` switch, which is off by default and controls whether event edits are allowed or not.
- **Editing toggle enabled** Editing an event opens a popup with the following message `Are you sure you want to update this event? This actin will affect your Google Calendar event.` and below that ther is a `Cancel` and `Update` button, by clicking the firs one, the popup closes and the event editing won't happen and by clicking the second button will update the event on Mobiscroll calendar and sync back to the Google Calendar as well. 
- **Event creation or update** If a new event is created or an existing one updated, a `Event created/updated/ deleted in [the name of your Google Calendar] calendar` toast appears at the bottom center of the calendar.
- **Calendar list** The `My Calendars` section shows multiple calendar switches, such as the user's personal calendar and country-specific holiday calendars.
- **Sign-out** The bottom of the side panel includes a `Log out of my account` button for disconnecting the Google Calendar account.
- **Event rendering** Once events are loaded, days with events display event labels inside the month cells.
- **Event styling** Event labels can appear with different visual styles based on the type or source of the event they represent.
- **Event interaction** Hovering over or selecting an event label highlights it. If event editing is enabled this action shows resize handles on both sides, indicating that the event can be resized by clicking and dragging.
- **Day cell states** Hovering a day cell highlights the day number with a gray background, while clicking the empty part of the cell selects the day and highlights the day number with a blue background.
- **Header navigation** The calendar header shows the current month and year on the left, and blue month navigation arrows with a `Today` button between them on the right.
- **Swipe navigation** When event editing is disabled, the displayed month can also be changed by dragging the calendar left or right.

## Best for

- **Personal scheduling interfaces** Building calendar views where users need to browse and manage their own events from an existing Google Calendar.
- **Calendar overlay experiences** Letting users toggle multiple Google calendars, such as personal and holiday calendars, within the same event calendar.
