To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/load-events-from-google-calendar#).

## Demo description

Event data can be loaded from remote sources, like public google calendars.
Through the integration plugin
you can easily show events that are available in a public calendar.
The integration plugin needs to be added to the download package or installed separately from a dedicated NPM package.

You will just need the `CALENDAR_ID` and an `apiKey` from google and you should be ready to roll.

Public calendars are read-only. If you are interested in syncing private google calendars with read/write/delete access, [check out this example](https://demo.mobiscroll.com/react/eventcalendar/sync-events-google-calendar#).

> **⚠️ Note:** This example uses the **integration plugin**
to connect to and load events from Google Calendar and it is not available in the trial. Give the live demo a try and see how it can be configured.

## Implementation instructions

- Use the integration plugin to load events from Google Calendar into the Event Calendar.
- Add the integration plugin to the download package or install it separately from the dedicated NPM package.
- Provide the Google Calendar `CALENDAR_ID` and `apiKey` to connect to a public calendar data source.
- Public Google Calendars are supported as read-only sources in this setup.

## What this demo shows

- A desktop month-view event calendar with event labels loaded from public Google Calendars.
- **Custom header**: the current month and year are shown on the left side of the header.
- **View switching**: a segmented control in the center lets users switch between Month, Week, Day, and Agenda views, with Month selected by default.
- **Primary navigation**: black previous and next arrow buttons are shown with a Today button between them for returning to the current date.
- **Secondary navigation**: blue previous and next arrow buttons are also shown on the right side of the header with a Today button between them.
- **Month view**: days with events display event labels inside the month grid cells.
- **Event selection**: clicking an event label highlights the selected event.
- **Cell hover state**: hovering over a day cell highlights the day number in the top-right corner with a gray background.
- **Date selection**: clicking the empty area of a day cell selects that day and highlights the day number in blue.
- **Swipe navigation**: the calendar supports changing months by dragging the view left or right.

## Best for

- **Google Calendar overlays**: showing events from public Google Calendars inside a branded month-view calendar.
- **Desktop scheduling dashboards**: giving users a full-month overview with quick access to week, day, and agenda views from the same header.
- **Read-only event publishing**: sharing team, organization, or community calendars where visitors need to browse events but not edit them.
- **Multi-view calendar navigation**: demonstrating a custom header pattern with date controls, today shortcuts, and view switching.
- **Event browsing workflows**: helping users scan a month, open event labels, and select dates directly from the calendar grid.
