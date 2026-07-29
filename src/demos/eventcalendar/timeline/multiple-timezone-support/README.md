To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/multiple-timezone-support#).

## Demo description

If the context requires users being able to change the timezone on the fly, you can add a custom dropdown with the desired timezones to the event calendar header. This can be of course placed externally to the calendar as well, eg. setting page.

Set the timezone of the incoming data through the `dataTimezone` - eg. `'utc'`,  and set the display timezone through the `displayTimezone` - eg. `'America/Los_Angeles'`

## Implementation instructions

- The dayjs setup, events, resources, and `timeline: { type: 'week' }` view config are identical to the `setting-the-timezone` demo. `dataTimezone` is fixed at `'utc'`; `displayTimezone` starts at `'utc'` and is controlled by a `Select` dropdown in the custom header.
- Use `renderHeader` (Angular: `headerTemplate`, Vue: `#header` slot) to build the header in two parts: `CalendarNav` on the left, and a right-aligned group on the right containing `CalendarPrev`, `CalendarToday`, `CalendarNext`, followed by a `Select`.
- Configure the `Select` with `inputStyle="box"`, `touchUi={false}`, `display="anchored"`. Pass a `data` array of 9 `{ text, value }` objects covering US, UTC, European and Asian timezones (America/Los_Angeles, America/Chicago, America/New_York, utc, Europe/London, Europe/Berlin, Europe/Bucharest, Asia/Shanghai, Asia/Tokyo). Default selection is `'utc'`.
- Bind the selected timezone value to `displayTimezone` on the `Eventcalendar`; for the imperative API, call `calendarInst.setOptions({ displayTimezone: ev.value })` in the `Select`'s `onChange` handler.

## What this demo shows

- A desktop weekly timeline where days are arranged horizontally and resources are listed as rows on the left.
- **Header navigation** The month and year label opens date navigation, while the previous and next arrows move between weeks and the Today button returns to the current date.
- **Timezone switcher** A custom dropdown next to the navigation arrows lets the user choose from different timezone options. By default UTC is selected.
- **Timezone behavior** Changing the selected timezone updates the visible event times in the weekly timeline view based on the selected timezone.
- **Week view** The strip below the header shows the selected week from Sunday to Saturday, with the current date highlighted.
- **Time grid** The timeline displays hourly columns from 12 AM to 12 PM.
- **Resources** Multiple resources are shown as separate timeline rows.
- **Current time** A vertical blue line with a time label marks the current time.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event cards** Events are shown as colored cards with a left color stripe, a bold title, and the exact time range.
- **Date positioning** Events are positioned by their assigned resource and exact date and time range.
- **Event interaction** Events highlight on hover and show drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging across a time range.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through time and resources.

## Best for

- **Global scheduling** Apps that need to show the same events for users across multiple countries or regions.
- **Event planning** Event management, conference, webinar, or attendee-facing schedulers where local time presentation matters.
- **Distributed teams** Business calendars used by remote teams working across different timezones.
- **Timezone preview** Products that let users switch the timeline display timezone on the fly from the UI or from external settings.
