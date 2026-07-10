To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/sync-events-outlook-calendar#).

## Demo description

The event calendar comes with third party calendar integration support through the integration plugin. This needs to be added to the download package or installed separately from a dedicated NPM package.

It includes everything you need to authenticate your users, get their Outlook calendars and provides functions for CRUD operations. It takes care of loading the events and converts them to the required format so that they can be displayed on the Mobiscroll calendar separately or mixed with other calendars and events.

Customizing the interaction, event workflows, whether the events are read-only is up to you. In this live demo, newly created events will land in the `primary calendar` of the authenticated user.

> **Warning:** This example uses the **integration plugin** to connect to and load events from Outlook Calendars and it is not available in the trial. Give the live demo a try and see how it can be configured.

## Implementation instructions

- Use `view: { scheduler: { type: 'week' } }` with `exclusiveEndDates: true`. Start with empty `data` — no resources are used; all calendar events appear in a single view.
- Import `outlookCalendarSync` from `@mobiscroll/calendar-integration` (a separately installed package).
- Call `outlookCalendarSync.init()` on mount with `clientId`, `redirectUri`, `onSignedIn`, and `onSignedOut`.
- **`onSignedIn`**: call `outlookCalendarSync.getCalendars()` and sort so the default calendar appears first (`c.isDefaultCalendar ? -1 : 1`). Build a `calendarData` map keyed by `c.id` storing `name` (`c.name`), `color` (`c.hexColor`), and `checked`. Set `calendarIds` to `[primaryCalId]` initially, then call `getEvents([primaryCalId], startDate, endDate)`. Angular: wrap `.then()` callbacks in `NgZone.run()`.
- **`onSignedOut`**: clear events, calendarIds, calendarData, and calendars list.
- **`onPageLoading`**: debounce by 200ms; if `outlookCalendarSync.isSignedIn()`, call `getEvents(calendarIds, args.viewStart, args.viewEnd)` and replace events. Store `args.viewStart`/`args.viewEnd` in refs for use in toggle handlers.
- **Toggle calendar** (per-calendar Switch in sidebar): enabling — push to `calendarIds`, call `getEvents([calendarId], startDate, endDate)`, append returned events; disabling — filter calendarId and events out by `event.outlookCalendarId`.
- Set `extendDefaultEvent` to return `{ color: calendarData[primaryCalendarId].color }` so newly created events use the primary calendar's color.
- **CRUD** — all four options (`clickToCreate`, `dragToCreate`, `dragToMove`, `dragToResize`) controlled by an "Enable editing" Switch (off by default):
  - **Create** (`onEventCreate`): call `outlookCalendarSync.addEvent(primaryCalendarId, event)`. On success, set the new event's color and append it; on failure, show an error toast.
  - **Update** (`onEventUpdate`): `Confirm` dialog ("Are you sure you want to update this event?" / "This action will affect your Outlook Calendar event." / "Update") → `outlookCalendarSync.updateEvent(event.outlookCalendarId, event)`. On cancel or failure, restore `args.oldEvent`.
  - **Delete** (`onEventDelete`): return `false`, `Confirm` dialog ("Delete") → `outlookCalendarSync.deleteEvent(event.outlookCalendarId, event)`, filter the event out on success.
- **Layout**: a persistent sidebar panel alongside the calendar. When not logged in: "Sync my outlook calendars" sign-in button. When logged in: editing note, "Enable editing" Switch, per-calendar Switches (label: `cal.name`), "Log out" button.
- **Custom header**: `CalendarNav` (left), spinner (12 blade divs), then `CalendarPrev`, `CalendarToday`, `CalendarNext` (right).

## What this demo shows

- A desktop weekly scheduler layout with a fixed week strip at the top, a fixed all-day row below it, and a scrollable scheduler time grid for the selected week.
- **Initial state** The scheduler view is visible with no events loaded by default.
- **Side panel** A separate panel on the left invites the user to sign in with the text `Log into your Outlook account to view and edit your Outlook Calendar events` and a `Sync My Outlook Calendar` button.
- **Authentication flow** Clicking `Sync My Outlook Calendar` opens a new browser tab where the user signs in to their Microsoft account.
- **Connected state** After sign-in, the side panel updates to show the text `Editing events sync back to your calendar when enabled. You'll be asked for confirmation on every action.`
- **Editing toggle** The connected panel includes an `Enable editing` switch that is off by default.
- **Editing toggle enabled** Editing and event opens a popup with the following message `Are you sure you want to update this event? This actin will affect your Google Calendar event.` and below that ther is a `Cancel` and `Update` button, by clicking the firs one, the popup closes and the event editing won't happen and by clicking the second button will update the event on Mobiscroll scheduler and sync back to the Outlook Calendar as well. 
- **Event creation or update** If a new event is created or an existing one updated, a `Event created/updated/ deleted in [the name of your Outlook Calendar] calendar` toast appears at the bottom center of the scheduler.
- **Calendar selection** The connected panel includes a `My Calendars` section with separate switches for the available Outlook calendars.
- **Sign-out** The bottom of the side panel includes a `Log Out Of My Account` button for disconnecting the Outlook account.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed strip below the header displays the days of the selected week, with the current date highlighted by a blue circle.
- **All-day events** All-day events appear in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected week.
- **Timed events** Once Outlook events are loaded, timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Current time** A blue current-time line appears across the time grid, with a small blue dot marking the current date.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **User-controlled calendar sync** Experiences where users need to connect their own Outlook account, choose which calendars to display, and disconnect when needed.
- **Optional write-back workflows** Scenarios where external calendar events should stay read-only by default, with editing enabled only when the user explicitly turns it on.
- **Multi-calendar visibility** Interfaces that need to surface multiple Outlook calendars, such as personal calendars, shared calendars, or regional holiday calendars, in a single month view.
