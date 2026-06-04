To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/setting-the-timezone#).

## Demo description

The event calendar works with local times by default, but ships with support for changing the timezone. The conversions and correct output relies on either of these three external libraries: [luxon](https://moment.github.io/luxon/), [moment-timezone](https://momentjs.com/timezone/) and [day.js](https://day.js.org/). For installing and using these libraries check out this guide.

There are two angles regarding timezones:

- `dataTimezone` - the calendar expects this format and returns this format. It is `'local'` by default if the date-times don't contain any timezone information.
It can be set globally on the calendar using the `dataTimezone` option, or
specifically for the event using the `timezone` property of the [event data](https://demo.mobiscroll.com/react/eventcalendar/event-data-structure#).
- `displayTimezone` - the calendar displays the events in this timezone. The date-times will be converted from the `dataTimezone` and displayed accordingly. It is `'local'` by default

- **Enable switching the timezone in the UI?** [Learn how to dynamically change timezones &#8594;](https://demo.mobiscroll.com/react/eventcalendar/multiple-timezone-support#)

## Implementation instructions

- Configure the event data with `dataTimezone` to define the timezone the calendar expects when receiving and returning dates. If timezone information is not included in the event dates, the default is `'local'`.
- Use `displayTimezone` to control how events are rendered in the UI. The calendar converts event times from `dataTimezone` to the selected display timezone.
- Set `dataTimezone` globally on the calendar when all events use the same source timezone, or use the event `timezone` property when individual events need their own timezone definition.

## What this demo shows

- A monthly event calendar view where the same event data can be displayed in different timezones.
- **Month grid** Day cells display events as labels with a colored marker on the left, the event title, and the event start time at the end of the label.
- **Event interaction** Hovering over or selecting an event label highlights it and shows resize handles on both sides, indicating that the event can be resized by clicking and dragging.
- **Day interaction** Clicking a day cell selects the day and changes the day-number highlight to blue and if that contains events, opens a popover with the list of events for that date.
- **Creating events** Clicking and dragging across day cells creates a new event.
- **Day states** Hovering over a day cell highlights the day number in the top-right corner with a gray background.
- **Calendar header** The header shows the current month and year on the left. On the right side, the previous and next arrow buttons for changing months, and a Today button for returning to the current date.
- **Timezone controls** A `Date timezone is:` label appears next to the month view left uppder sied which shows the event data timezone as UTC in a non-editable input.
- **Display timezone selector** A `Display timezone is:` label appears below the data timezone field and is paired with a selectable input that opens a timezone picker.
- **Timezone conversion** Choosing a different display timezone updates the visible event times in the month view based on the selected timezone.

## Best for

- **Global scheduling** Apps that need to show the same events for users in different countries or regions.
- **International events** Event platforms, conferences, and webinar calendars with attendees across multiple timezones.
- **Remote teams** Business calendars that need to present meetings and work schedules consistently for distributed teams.
- **Travel and cross-region planning** Tools where users need to compare dates and event times across locations.
- **Timezone-aware previews** Products that let users switch the visible calendar timezone before confirming schedules.
