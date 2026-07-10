To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/sync-events-google-calendar#).

## Demo description

The event calendar comes with third party calendar integration support through the integration plugin. This needs to be added to the download package or installed separately from a dedicated NPM package.

It includes everything you need to authenticate your users, get their Google calendars and provides functions for CRUD operations. It takes care of loading the events and converts them to the required format so that they can be displayed on the Mobiscroll calendar separately or mixed with other calendars and events.

Customizing the interaction, event workflows, whether the events are read-only is up to you. In this live demo, newly created events will land in the `primary calendar` of the authenticated user.

> **Warning:** This example uses the **integration plugin** to connect to and load events from Google Calendar and it is not available in the trial. Give the live demo a try and see how it can be configured.

## Implementation instructions

- Use `view: { scheduler: { type: 'week' } }` with `exclusiveEndDates: true`. Start with empty `data` — no resources are used; all calendar events appear in a single view.
- Import `googleCalendarSync` from `@mobiscroll/calendar-integration` (a separately installed package). Call `googleCalendarSync.init()` on mount with `apiKey`, `clientId`, `onSignedIn`, and `onSignedOut`.
- **`onSignedIn`**: call `googleCalendarSync.getCalendars()`, sort so the primary calendar appears first, then build a `calendarData` map keyed by `c.id` storing `{ name: c.summary, color: c.backgroundColor, checked }`. Initialize `calendarIds` to `[primaryCalId]` and call `getEvents([primaryCalId], startDate, endDate)` to load the first batch of events. For the imperative API, call `inst.setEvents(events)` in the callback.
- **`onSignedOut`**: clear events, `calendarIds`, `calendarData`, and the calendars list.
- **`onPageLoading`**: debounce by 200ms. If `googleCalendarSync.isSignedIn()`, call `getEvents(calendarIds, args.viewStart, args.viewEnd)` and replace the entire events array. Store `args.viewStart`/`args.viewEnd` in variables — they are also needed by the toggle-calendar handler.
- **Toggle calendar** (per-calendar Switch in sidebar): update `calendarIds` by adding or removing the toggled calendar ID. If the resulting list is empty, clear events immediately and return. Otherwise call `googleCalendarSync.getEvents(calendarIds, startDate, endDate)` with the **full updated list** and replace the entire events array — every toggle reloads all currently-checked calendars together. For the imperative API, call `inst.setEvents(events)`.
- Set `extendDefaultEvent` to return `{ color: calendarData[primaryCalendarId].color }` so newly created events inherit the primary calendar's color.
- **"Enable editing" Switch**: toggles `clickToCreate`, `dragToCreate`, `dragToMove`, and `dragToResize` simultaneously (all off by default). For the imperative API, call `inst.setOptions({ clickToCreate, dragToCreate, dragToMove, dragToResize })` on change.
- **`onEventCreate`**: call `googleCalendarSync.addEvent(primaryCalendarId, event)`. On success, assign `newEvent.color = event.color` and add the server-returned event to the list (for the imperative API, call `inst.removeEvent(event)` then `inst.addEvent(resp)`); show a toast naming the target calendar. On failure, remove the optimistic event and show an error toast.
- **`onEventUpdate`**: show a confirm dialog ("Are you sure you want to update this event?" / "Update"). On confirm, call `googleCalendarSync.updateEvent(event.googleCalendarId, event)` and show a success toast. On cancel or failure, restore `args.oldEvent` (for the imperative API, call `inst.updateEvent(args.oldEvent)`).
- **`onEventDelete`**: return `false` to suppress the default removal. Show a confirm dialog ("Delete"). On confirm, call `googleCalendarSync.deleteEvent(event.googleCalendarId, event)`, remove the event from the list (for the imperative API, call `inst.removeEvent(event)`), and show a toast.
- **Custom header** (`renderHeader` / `#header` slot): `CalendarNav` on the left, a loading spinner in the center (visible only while events are loading), then `CalendarPrev`, `CalendarToday`, `CalendarNext` on the right.
- **Layout**: fixed-width sidebar alongside the calendar. Logged-out state: sign-in button. Logged-in state: editing note, "Enable editing" Switch, per-calendar Switches with each calendar's name, "Log out" button.

## What this demo shows

- A desktop weekly scheduler layout with a fixed week strip at the top, a fixed all-day row below it, and a scrollable scheduler time grid for the selected week.
- **Layout** Next to the scheduler a separate panel on the left is displayed for Google authentication, editing settings, and calendar selection.
- **Signed-out state** No events are loaded by default, and the side panel prompts the user to sign in with the text `Log into your Google account to view and edit your Google Calendar events` followed by a `Sign in with Google` button.
- **Authentication flow** Clicking the Google sign-in button opens a new browser tab where the user can authenticate with their Google account.
- **Signed-in state** After sign-in, the side panel changes to an authenticated state with guidance about editing events and syncing changes back to Google Calendar.
- **Editing toggle** The authenticated panel includes an `Enable editing` switch, which is off by default and controls whether event edits are allowed or not.
- **Editing toggle enabled** Editing an event opens a popup with the following message `Are you sure you want to update this event? This actin will affect your Google Calendar event.` and below that ther is a `Cancel` and `Update` button, by clicking the firs one, the popup closes and the event editing won't happen and by clicking the second button will update the event on Mobiscroll scheduler and sync back to the Google Calendar as well. 
- **Event creation or update** If a new event is created or an existing one updated, a `Event created/updated/ deleted in [the name of your Google Calendar] calendar` toast appears at the bottom center of the scheduler.
- **Calendar list** The `My Calendars` section shows multiple calendar switches, such as the user's personal calendar and country-specific holiday calendars.
- **Sign-out** The bottom of the side panel includes a `Log out of my account` button for disconnecting the Google Calendar account.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed strip below the header displays the days of the selected week, with the current date highlighted by a blue circle.
- **All-day events** All-day events appear in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected week.
- **Timed events** Once Google Calendar events are loaded, timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Current time** A blue current-time line appears across the time grid, with a small blue dot marking the current date.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Personal scheduling interfaces** Building scheduler views where users need to browse and manage their own events from an existing Google Calendar.
- **Calendar overlay experiences** Letting users toggle multiple Google calendars, such as personal and holiday calendars, within the same event calendar.
