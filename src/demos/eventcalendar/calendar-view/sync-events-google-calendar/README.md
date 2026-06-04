To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/sync-events-google-calendar#).

## Demo description

The event calendar comes with third party calendar integration support through the integration plugin. This needs to be added to the download package or installed separately from a dedicated NPM package.

It includes everything you need to authenticate your users, get their Google calendars and provides functions for CRUD operations. It takes care of loading the events and converts them to the required format so that they can be displayed on the Mobiscroll calendar separately or mixed with other calendars and events.

Customizing the interaction, event workflows, whether the events are read-only is up to you. In this live demo, newly created events will land in the `primary calendar` of the authenticated user.

> **⚠️ Note:** This example uses the **integration plugin** to connect to and load events from Google Calendar and it is not available in the trial. Give the live demo a try and see how it can be configured.

## Implementation instructions

- Use the integration plugin for third-party calendar synchronization with Google Calendar. It can be added through the download package or installed separately from its dedicated NPM package.
- The integration handles user authentication, loads the user's Google calendars, fetches events, and exposes CRUD operations for working with Google Calendar data.
- Loaded Google events are converted to the Event Calendar event format, so they can be rendered on their own or combined with other Mobiscroll calendars and event sources.

## What this demo shows

- Shows how Mobiscroll Event Calendar can load and display events from a signed-in Google Calendar account in a desktop month view.
- **Layout** The demo uses a full month calendar layout with a separate panel on the left for Google authentication, editing settings, and calendar selection.
- **Signed-out state** No events are loaded by default, and the side panel prompts the user to sign in with the text "Log into your Google account to view and edit your Google Calendar events" followed by a `Sign in with Google` button.
- **Authentication flow** Clicking the Google sign-in button opens a new browser tab where the user can authenticate with their Google account.
- **Signed-in state** After sign-in, the side panel changes to an authenticated state with guidance about editing events and syncing changes back to Google Calendar.
- **Editing toggle** The authenticated panel includes an `Enable editing` switch, which is off by default and controls whether calendar edits are synced back to Google Calendar.
- **Calendar list** The `My Calendars` section shows multiple calendar switches, such as the user's personal calendar and country-specific holiday calendars.
- **Event rendering** Once events are loaded, days with events display event labels inside the month cells.
- **Event styling** Event labels can appear with different visual styles based on the type or source of the event they represent.
- **Event selection** Clicking an event label highlights the selected event.
- **Hover behavior** Hovering over a day cell highlights the day number in the top-right corner with a gray background.
- **Day selection** Clicking an empty area inside a day cell selects that date and highlights the day number with a blue background.
- **Header navigation** The calendar header shows the current month and year on the left, and `Previous`, `Today`, and `Next` navigation controls on the right.
- **Swipe navigation** The displayed month can also be changed by dragging the calendar left or right.

## Best for

- **Google Calendar synchronization** Showing how to connect Mobiscroll Event Calendar to a user's Google Calendar account and display those events in a month view.
- **Personal scheduling interfaces** Building calendar views where users need to browse and manage their own events from an existing Google Calendar.
- **Calendar overlay experiences** Letting users toggle multiple Google calendars, such as personal and holiday calendars, within the same event calendar.
- **Read-only to editable workflows** Demonstrating a setup where calendar data can first be viewed safely and then made editable only when syncing is explicitly enabled.
- **Month-based planning** Presenting imported calendar events in a familiar desktop-style month grid for overview and navigation.
