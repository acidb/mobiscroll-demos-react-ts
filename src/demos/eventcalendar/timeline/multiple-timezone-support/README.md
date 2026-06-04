To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/multiple-timezone-support#).

## Demo description

If the context requires users being able to change the timezone on the fly, you can add a custom dropdown with the desired timezones to the event calendar header. This can be of course placed externally to the calendar as well, eg. setting page.

Set the timezone of the incoming data through the `dataTimezone` - eg. `'utc'`,  and set the display timezone through the `displayTimezone` - eg. `'America/Los_Angeles'`

## Implementation instructions

- The dayjs setup, events, resources, and `timeline: { type: 'week' }` view config are identical to the `setting-the-timezone` demo. `dataTimezone` is fixed at `'utc'`; `displayTimezone` starts at `'utc'` and is controlled by a `Select` dropdown in the custom header.
- Use `renderHeader` (Angular: `headerTemplate`, Vue: `#header` slot) to build the header in two parts: `CalendarNav` on the left, and a right-aligned group on the right containing `CalendarPrev`, `CalendarToday`, `CalendarNext`, followed by a `Select`.
- Configure the `Select` with `inputStyle="box"`, `touchUi={false}`, `display="anchored"`. Pass a `data` array of 9 `{ text, value }` objects covering US, UTC, European and Asian timezones (America/Los_Angeles, America/Chicago, America/New_York, utc, Europe/London, Europe/Berlin, Europe/Bucharest, Asia/Shanghai, Asia/Tokyo). Default selection is `'utc'`.
- Bind the selected timezone value to `displayTimezone` on the `Eventcalendar`. In React/Vue, store the active timezone in state/ref and pass it as the prop — it re-renders automatically when changed. In JS/jQuery, call `calendarInst.setOptions({ displayTimezone: ev.value })` in the `Select`'s `onChange` handler.
