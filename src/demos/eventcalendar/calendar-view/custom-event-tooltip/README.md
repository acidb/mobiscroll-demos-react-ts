To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/custom-event-tooltip#).

## Demo description

There are several approaches to showing a tooltip when hovering events.

**The native tooltip**
By default, the calendar shows the browser native tooltip when hovering over the event. This includes the times and title of the event, which does the job most of the times.
For showing a custom text use the `tooltip` property of the data object. This tooltip is specific to every event.
If you want to hide the native tooltip, you can set the `showEventTooltip` to `false`.

**Fully custom tooltip**
Setting the `showEventTooltip` to false gives room for a fully custom tooltip that can be implemented by using the

`onEventHoverIn`

 and

`onEventHoverOut`

lifecycle events. With the help of the Mobiscroll popup you can show a custom tooltip that holds details, actions applicable to the event it is anchored to.

**Showing a third party popup**
There are cases when you are using a third party library, something like md-boostrap. For those cases, turn the browser native tooltip off with the
`showEventTooltip` option and use the third-party tooltip accordingly.
In case of md-boostrap, you can add the tooltip directive to the [custom event template](https://demo.mobiscroll.com/react/eventcalendar/customize-label-look-and-feel#)
so that the library knows where and when to show the tooltip.

## Implementation instructions

- For the native browser tooltip, use the `tooltip` property of the event data object when each event needs custom tooltip text.
- Set `showEventTooltip` to `false` when the native browser tooltip should be hidden.
- Build the fully custom tooltip with `onEventHoverIn` and `onEventHoverOut`.

## What this demo shows

- A desktop-style weekly event calendar view with event labels rendered inside day cells.
- **Event labels** Events are shown as labels, with different visual styles based on the event type or event data.

- **Event selection** Clicking an event label highlights the selected event.
- **Day hover state** Hovering over a day cell highlights the day number with a gray background.
- **Day selection** Clicking an empty area of a day cell selects that day and highlights the day number with a blue background.
- **Calendar header** The top-left side shows the current month and year, while the top-right side includes blue previous and next navigation arrows with a `Today` button between them.
- **Drag navigation** The calendar can be dragged left or right to navigate between weeks.
- **Custom event tooltip** Hovering over an event opens a custom tooltip below the hovered event.
- **Tooltip header** The tooltip header uses the event color and shows the patient name, age, and event start and end time.
- **Tooltip details** The tooltip body shows `Status`, `Reason for visiting`, and `Location` rows.
- **Appointment status** The `Status` row shows whether the appointment is confirmed.
- **Status action** The tooltip shows either a `Confirm appointment` or `Cancel appointment` button based on the current appointment status.
- **Status feedback** Clicking the status action changes the appointment status, closes the tooltip, and shows a toast message on the calendar.
- **Reason for visiting** The tooltip includes a short description of why the patient is visiting.
- **Location** The tooltip shows the appointment location.
- **Footer actions** The footer includes a gray `View patient file` button and a red `Delete appointment` button.
- **View patient action** Clicking `View patient file` shows a toast message with the `View file` text.
- **Delete action** Clicking `Delete appointment` removes the event.

## Best for

- **Appointment calendars** Showing patient appointments with status, reason, location, and event-specific actions.
- **Healthcare scheduling** Building calendar views where users need quick access to appointment details without opening a separate page.
- **Desktop workflows** Presenting a weekly calendar layout with hover states, selection states, and header navigation.
- **Event detail previews** Displaying structured event information in a custom tooltip anchored to the hovered event.
- **Inline appointment actions** Letting users confirm, cancel, view, or delete appointments directly from the calendar.
