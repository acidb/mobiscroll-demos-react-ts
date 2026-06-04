To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/multiple-timezone-support#).

## Demo description

If the context requires users being able to change the timezone on the fly, you can add a custom dropdown with the desired timezones to the event calendar header. This can be of course placed externally to the calendar as well, eg. setting page.

Set the timezone of the incoming data through the `dataTimezone` - eg. `'utc'`,  and set the display timezone through the `displayTimezone` - eg. `'America/Los_Angeles'`

## Implementation instructions

- Set the timezone of the incoming event data with `dataTimezone` such as `'utc'`.
- Set the calendar display timezone with `displayTimezone` such as `'America/Los_Angeles'`.
- Render the custom timezone selector in the calendar header with the `renderHeader` function.
- Update the selected `displayTimezone` value from the dropdown so the month view re-renders the events in the chosen timezone.

## What this demo shows

- A monthly event calendar view where the same event data can be displayed in different timezones.
- **Month grid** Day cells display events as labels with a colored marker on the left, the event title, and the event start time at the end of the label.
- **Event interaction** Hovering or selecting an event highlights it and shows resize handles on both sides.
- **Event creation** Clicking and dragging on a day cell creates a new event.
- **Day hover state** Hovering over a day cell highlights the day number in the top-right corner with a gray background.
- **Day selection** Clicking the empty area of a day cell selects the day and highlights the day number with a blue background.
- **Header navigation** The header shows the current month and year on the left. On the right side, the previous and next arrow buttons for changing months, and a Today button for returning to the current date.
- **Timezone switcher** A custom dropdown in the right side of the header lets the user choose from different timezone options.
- **Timezone behavior** Changing the selected timezone updates the visible event times in the month view based on the selected timezone.

## Best for

- **Global scheduling** Apps that need to show the same events for users across multiple countries or regions.
- **Event planning** Event management, conference, webinar, or attendee-facing calendars where local time presentation matters.
- **Distributed teams** Business calendars used by remote teams working across different timezones.
- **Timezone preview** Products that let users switch the calendar display timezone on the fly from the calendar UI or from external settings.
