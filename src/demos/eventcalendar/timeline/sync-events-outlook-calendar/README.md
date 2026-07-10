To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/sync-events-outlook-calendar#).

## Demo description

The event calendar comes with third party calendar integration support through the integration plugin. This needs to be added to the download package or installed separately from a dedicated NPM package.

It includes everything you need to authenticate your users, get their Outlook calendars and provides functions for CRUD operations. It takes care of loading the events and converts them to the required format so that they can be displayed on the Mobiscroll calendar separately or mixed with other calendars and events.

Customizing the interaction, event workflows, whether the events are read-only is up to you. In this live demo, the different calendars are handled as resources and have their own timeline rows. You can manipulate events in the desired calendars, while read-only calendars are greyed out.

> **Warning:** This example uses the **integration plugin** to connect to and load events from Outlook Calendars and it is not available in the trial. Give the live demo a try and see how it can be configured.

## Implementation instructions

- Use `timeline: { type: 'week', eventDisplay: 'fill' }` — a weekly view where events fill the width of their cell.
- No initial resources or events — both are loaded dynamically from the user's Outlook account after sign-in.
- Set `exclusiveEndDates: true` on the calendar.
- Import `outlookCalendarSync` from `@mobiscroll/calendar-integration` (a separately installed package).
- Call `outlookCalendarSync.init()` on component mount with:
  - `clientId` — your Azure app client ID
  - `redirectUri` — your OAuth redirect URI
  - `onSignedIn` callback — triggered when the user completes OAuth
  - `onSignedOut` callback — triggered when the user signs out
- **`onSignedIn`**:
  1. Call `outlookCalendarSync.getCalendars()` to retrieve the user's calendar list.
  2. Sort calendars so the default calendar appears first (`c.isDefaultCalendar ? -1 : 1`).
  3. Build resources: `{ id: c.id, name: c.name, color: c.hexColor }` — each calendar becomes a timeline row.
  4. Build a `readonlyCalendars` list: calendars where `!c.canEdit`.
  5. Set an `invalid` block to grey out all time slots on readonly rows: `[{ recurring: { repeat: 'daily', interval: 1 }, resource: readonlyCalendarIds }]`.
  6. Call `outlookCalendarSync.getEvents(calendarIds, startDate, endDate)` and map `event.resource = event.outlookCalendarId` on each result.
- **`onSignedOut`**: Clear all events, resources, calendarIds, and calendarData. Close the popup if open.
- **`onPageLoading`**: Fires on every page navigation. Debounce by 200ms (clear the previous timeout, set a new one). Inside the timeout, if `outlookCalendarSync.isSignedIn()`, call `outlookCalendarSync.getEvents(calendarIds, args.viewStart, args.viewEnd)` and replace the events array. Store `args.viewStart` / `args.viewEnd` in variables — they are also needed by the toggle-calendar handler.

  > **Vue:** Uses `@page-loading` event binding; all others use `onPageLoading`.

- **Toggle calendar**: To enable a calendar, push its ID into `calendarIds`, call `getEvents([calendarId], startDate, endDate)`, add the new resource, and append the returned events. To disable, filter the resource, calendarId, and events out by `event.outlookCalendarId !== calendarId`.
- All four drag/create/move/resize options (`clickToCreate`, `dragToCreate`, `dragToMove`, `dragToResize`) are bound to the "Enable editing" Switch toggle — off by default, toggled by the user in the popup.
- **`onEventCreate`**:
  1. Check if `event.resource` is in `readonlyCalendars`. If so, show a "This calendar is readonly" toast and return.
  2. Otherwise, call `outlookCalendarSync.addEvent(calendarId, event)`. On success, replace the optimistic event with the returned Outlook event (`newEvent.resource = event.resource`). On failure, remove the optimistic event and show an error toast.
- **`onEventUpdate`**:
  1. Show a confirmation dialog: "Are you sure you want to update this event?" / "This action will affect your Outlook Calendar event." / OK: "Update".
  2. If confirmed, call `outlookCalendarSync.updateEvent(event.outlookCalendarId, event)`.
  3. If cancelled or API call fails, restore `args.oldEvent`.
- **`onEventDelete`**:
  1. Return `false` to suppress default delete behavior.
  2. Show a confirmation dialog: "Are you sure you want to delete this event?" / "This action will remove the event from your Outlook Calendar as well." / OK: "Delete".
  3. If confirmed, call `outlookCalendarSync.deleteEvent(event.outlookCalendarId, event)` and filter the event out on success.

  > **Angular:** Wrap all async Outlook API `.then()` callbacks (Create, Update, Delete) in `NgZone.run()` to ensure change detection fires after async operations.

  For the imperative API, use `inst.updateEvent()`, `inst.removeEvent()`, and `inst.addEvent()` to mutate the calendar directly instead of updating the events array.

- **Custom header**: Replace the default header with `CalendarNav` (left-aligned), a loading spinner (visible while events load), and a button group (right-aligned): a "Sync my outlook calendars" button when not signed in, a "My Calendars" button when signed in, a "Today" button, and `CalendarPrev` / `CalendarNext`.
- **Popup**: An anchored popup on the "My Calendars" button. Contains a note about sync behavior, an "Enable editing" Switch (controls all four drag/create options), a "My Calendars" section with one Switch per calendar (each toggles visibility and events), and a "Log out of my account" button → calls `outlookCalendarSync.signOut()`.
