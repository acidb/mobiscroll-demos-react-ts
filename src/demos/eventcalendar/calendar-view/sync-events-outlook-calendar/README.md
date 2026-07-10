To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/sync-events-outlook-calendar#).

## Demo description

The event calendar comes with third party calendar integration support through the integration plugin. This needs to be added to the download package or installed separately from a dedicated NPM package.

It includes everything you need to authenticate your users, get their Outlook calendars and provides functions for CRUD operations. It takes care of loading the events and converts them to the required format so that they can be displayed on the Mobiscroll calendar separately or mixed with other calendars and events.

Customizing the interaction, event workflows, whether the events are read-only is up to you. In this live demo, newly created events will land in the `primary calendar` of the authenticated user.

> **Warning:** This example uses the **integration plugin** to connect to and load events from Outlook Calendars and it is not available in the trial. Give the live demo a try and see how it can be configured.

## Implementation instructions

- Use `view: { calendar: { labels: true } }` with `exclusiveEndDates: true`. Start with empty `data` — no resources are used; all calendar events appear in a single view.
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
- **Custom header**: `CalendarNav` (left), loading spinner (visible while events load), then `CalendarPrev`, `CalendarToday`, `CalendarNext` (right).

## What this demo shows

- Shows how Mobiscroll event calendar can load and display events from a signed-in Outlook Calendar account in a desktop month view.
- **Initial state** The month grid is visible with no events loaded by default.
- **Side panel** A separate panel on the left invites the user to sign in with the text `Log into your Outlook account to view and edit your Outlook Calendar events` and a `Sync My Outlook Calendar` button.
- **Authentication flow** Clicking `Sync My Outlook Calendar` opens a new browser tab where the user signs in to their Microsoft account.
- **Connected state** After sign-in, the side panel updates to show the text `Editing events sync back to your calendar when enabled. You'll be asked for confirmation on every action.`
- **Editing toggle** The connected panel includes an `Enable editing` switch that is off by default.
- **Editing toggle enabled** Editing and event opens a popup with the following message `Are you sure you want to update this event? This actin will affect your Google Calendar event.` and below that ther is a `Cancel` and `Update` button, by clicking the firs one, the popup closes and the event editing won't happen and by clicking the second button will update the event on Mobiscroll calendar and sync back to the Outlook Calendar as well. 
- **Event creation or update** If a new event is created or an existing one updated, a `Event created/updated/ deleted in [the name of your Outlook Calendar] calendar` toast appears at the bottom center of the calendar.
- **Calendar selection** The connected panel includes a `My Calendars` section with separate switches for the available Outlook calendars.
- **Sign-out** The bottom of the side panel includes a `Log Out Of My Account` button for disconnecting the Outlook account.
- **Event rendering** Once Outlook events are loaded, day cells display event labels, and the labels can have different visual styles based on the type of event.
- **Event selection** Hovering over or clicking an event label highlights the selected event.
- **Day hover state** Hovering over a day cell highlights the day number in the top-right corner with a gray background.
- **Day cell states** Hovering a day cell highlights the day number with a gray background, while clicking the empty part of the cell selects the day and highlights the day number with a blue background.
- **Header navigation** The calendar header shows the current month and year on the left, and blue month navigation arrows with a `Today` button between them on the right.
- **Swipe navigation** When event editing is disabled, the displayed month can also be changed by dragging the calendar left or right.

## Best for

- **User-controlled calendar sync** Experiences where users need to connect their own Outlook account, choose which calendars to display, and disconnect when needed.
- **Optional write-back workflows** Scenarios where external calendar events should stay read-only by default, with editing enabled only when the user explicitly turns it on.
- **Multi-calendar visibility** Interfaces that need to surface multiple Outlook calendars, such as personal calendars, shared calendars, or regional holiday calendars, in a single month view.
