To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/sync-events-outlook-calendar#).

## Demo description

The event calendar comes with third party calendar integration support through the integration plugin. This needs to be added to the download package or installed separately from a dedicated NPM package.

It includes everything you need to authenticate your users, get their Outlook calendars and provides functions for CRUD operations. It takes care of loading the events and converts them to the required format so that they can be displayed on the Mobiscroll calendar separately or mixed with other calendars and events.

Customizing the interaction, event workflows, whether the events are read-only is up to you. In this live demo, newly created events will land in the `primary calendar` of the authenticated user.

> **⚠️ Note:** This example uses the **integration plugin** to connect to and load events from Outlook Calendars and it is not available in the trial. Give the live demo a try and see how it can be configured.

## Implementation instructions

- Use the integration plugin to connect Mobiscroll Eventcalendar with Outlook Calendar. The plugin handles user authentication, calendar access, event loading, and CRUD support.
- Add the integration plugin to your download package or install it separately from the dedicated NPM package before setting up the Outlook connection flow.

## What this demo shows

- This demo shows a desktop month view event calendar synchronized with Outlook Calendar.
- **Initial state** The month grid is visible with no events loaded by default.
- **Side panel** A separate panel on the left invites the user to sign in with the text `Log into your Outlook account to view and edit your Outlook Calendar events` and a `Sync My Outlook Calendar` button.
- **Authentication flow** Clicking `Sync My Outlook Calendar` opens a new browser tab where the user signs in to their Microsoft account.
- **Connected state** After sign-in, the side panel updates to show the text `Editing events sync back to your calendar when enabled. You'll be asked for confirmation on every action.`
- **Editing toggle** The connected panel includes an `Enable editing` switch that is off by default. When enabled, events can be edited in the calendar and those changes sync back to Outlook Calendar.
- **Calendar selection** The connected panel includes a `My Calendars` section with separate switches for the available Outlook calendars, such as a personal calendar or holiday calendars.
- **Sign-out** The bottom of the side panel includes a `Log Out Of My Account` button for disconnecting the Outlook account.
- **Event rendering** Once Outlook events are loaded, day cells display event labels, and the labels can have different visual styles based on the type of event.
- **Event selection** Clicking an event label highlights the selected event.
- **Day hover state** Hovering over a day cell highlights the day number in the top-right corner with a gray background.
- **Day selection** Clicking an empty area in a day cell selects that day and highlights the day number in blue.
- **Month navigation** The month view can be changed by dragging the calendar left or right.
- **Calendar header** The top-left side of the header shows the current month and year.
- **Header actions** The top-right side of the header includes previous and next navigation arrows with a `Today` button between them to jump back to the current date.

## Best for

- **Outlook-connected scheduling** Apps that need to display Outlook Calendar events inside a Mobiscroll month view and keep users in sync with their Microsoft account data.
- **User-controlled calendar sync** Experiences where users need to connect their own Outlook account, choose which calendars to display, and disconnect when needed.
- **Optional write-back workflows** Scenarios where external calendar events should stay read-only by default, with editing enabled only when the user explicitly turns it on.
- **Multi-calendar visibility** Interfaces that need to surface multiple Outlook calendars, such as personal calendars, shared calendars, or regional holiday calendars, in a single month view.
- **Desktop-style month planning** Products that need a familiar full-month layout with quick navigation, day selection, and event label scanning.
