To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/sync-events-google-calendar#).

## Demo description

The event calendar comes with third party calendar integration support through the integration plugin. This needs to be added to the download package or installed separately from a dedicated NPM package.

It includes everything you need to authenticate your users, get their Google calendars and provides functions for CRUD operations. It takes care of loading the events and converts them to the required format so that they can be displayed on the Mobiscroll calendar separately or mixed with other calendars and events.

Customizing the interaction, event workflows, whether the events are read-only is up to you. In this live demo, newly created events will land in the `primary calendar` of the authenticated user.

> **Warning:** This example uses the **integration plugin** to connect to and load events from Google Calendar and it is not available in the trial. Give the live demo a try and see how it can be configured.

## Implementation instructions

- Install `@mobiscroll/calendar-integration`. At component init call `googleCalendarSync.init({ apiKey: '<YOUR_GOOGLE_API_KEY>', clientId: '<YOUR_GOOGLE_CLIENT_ID>', onSignedIn, onSignedOut })`. Use `view: { agenda: { type: 'month' } }` with `exclusiveEndDates: true`.
- Maintain a `calendarIds` array for the currently enabled calendars. In `onPageLoading` store `args.viewStart`/`args.viewEnd`, debounce 200ms, then if signed in call `googleCalendarSync.getEvents(calendarIds, startDate, endDate)` and pass the result to `data`. For the imperative API call `inst.setEvents()`.
- In `onSignedIn`: call `googleCalendarSync.getCalendars()` to get the user's calendar list; initialise `calendarIds` with all calendar IDs (all enabled by default); call `googleCalendarSync.getEvents()` for the current view range. In `onSignedOut`: clear calendars, IDs, and events.
- Build a custom header via `renderHeader` (Angular: `headerTemplate`, Vue: `header` slot) containing: `CalendarNav`, a CSS spinning loader (visible while loading), then a right-aligned flex block with either a "Sync my Google calendars" Button (before login, calls `googleCalendarSync.signIn()`) or a "My Calendars" Button (after login, opens the calendar-list Popup) plus a "Today" Button. End with `CalendarPrev` and `CalendarNext`. The "Today" button updates `selectedDate` to today; JS/jQuery: call `inst.navigate(new Date())`.
- Show the calendar list in a `Popup` anchored to the "My Calendars" button: `display: 'anchored'`, `contentPadding: false`, `scrollLock: false`, `showOverlay: false`, `touchUi: false`, `width: 400`. Inside, render each calendar as a `Switch` — toggling one adds or removes its ID from `calendarIds` and re-fetches events via `googleCalendarSync.getEvents()`. Include a "Sign out" Button that calls `googleCalendarSync.signOut()`. Show API errors in a `Toast`.

## What this demo shows

- Shows a monthly agenda view with events listed and grouped by date.
- **Header navigation** The month and year label in the top left opens date navigation. The previous and next arrows and the Today button on the right move between months and jump back to the current date.
- **Signed-out state** No events are loaded by default. The `Sync My Google Calendars` button in the header prompts the user to sign in to Google Calendar.
- **Authentication flow** Clicking the Google sign-in button opens a new browser tab where the user can authenticate with their Google account.
- **Signed-in state** After sign-in, the header button changes to `My Calendars`.
- **Calendar list** The `My Calendars` popup shows multiple calendar switches, such as the user's personal calendar and country-specific holiday calendars.
- **Sign-out** The bottom of the popup includes a `Log out of my account` button for disconnecting the Google Calendar account.
- **Agenda list** The area below the header lists events for the selected month. Events in the agenda are grouped by date.
- **Sticky day headers** As the agenda scrolls vertically, each day stays visible with a sticky date header while its events appear underneath.
- **Events** Events appear as agenda cards with a colored strip on the left and the event title next to it. Start and end times are stacked on the right side of timed events. All-day events show the all-day label on the right.
- **Event interaction** Hovering an event highlights it.
- **Event selection** Clicking an event selects and highlights it.

## Best for

- **Personal calendar scheduling** Building agenda views where users can browse and manage events from their own Google Calendar.
- **Calendar visibility controls** Letting users toggle individual Google calendars on or off inside the same agenda view.
- **Readonly calendar handling** Displaying calendars without write access while preventing edits to those calendar rows.
