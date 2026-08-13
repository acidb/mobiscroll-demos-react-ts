To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/agenda/custom-event-tooltip#).

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
In case of md-boostrap, you can add the tooltip directive to the [custom event template](https://demo.mobiscroll.com/react/agenda/full-event-customization#)
so that the library knows where and when to show the tooltip.

## Implementation instructions

- Use `view: { agenda: { type: 'week' } }`. Define a static inline event array with medical-appointment fields: `title`, `age`, `start`, `end`, `confirmed`, `reason`, `location`, `color`. Use relative dates so appointments always appear around the current day.
- Set `showEventTooltip: false` to suppress the native browser tooltip. Handle `onEventHoverIn` to open a Mobiscroll `Popup` anchored to `args.domEvent.target.closest('.mbsc-event')`. Popup options: `display: 'anchored'`, `touchUi: false`, `showOverlay: false`, `scrollLock: false`, `width: 350`, `contentPadding: false`. Handle `onEventHoverOut` with a 200 ms delay before closing — cancel the timer on mouseenter into the Popup, reset it on mouseleave.
- Wire `onEventClick` to the same open logic for touch/mobile support.
- Tooltip content: colored header with patient name+age and formatted time range; status line with a confirm/cancel toggle button; reason for visit; location; "View patient file" and "Delete appointment" action buttons.

## What this demo shows

- Shows a weekly agenda view with events listed and grouped by date.
- **Header navigation** The date range label in the top left opens date navigation. The previous and next arrows and the Today button on the right move between weeks and jump back to the current date.
- **Agenda list** The area below the header lists events for the selected week. Events in the agenda are grouped by date.
- **Sticky day headers** As the agenda scrolls vertically, each day stays visible with a sticky date header while its events appear underneath.
- **Events** Events appear as agenda cards with a colored strip on the left and the event title next to it. Start and end times are stacked on the right side of timed events. All-day events show the all-day label on the right.
- **Custom event tooltip** Hovering over an event opens a custom tooltip below the hovered event.
- **Tooltip header** The tooltip header uses the event color and shows the patient name, age, and event start and end time.
- **Tooltip details** The tooltip body shows `Status`, `Reason for visiting`, and `Location` rows.
- **Appointment status** The `Status` row shows whether the appointment is confirmed.
- **Status action** The tooltip shows either a `Confirm appointment` or `Cancel appointment` button based on the current appointment status.
- **Status feedback** Clicking the status action changes the appointment status, closes the tooltip, and shows a toast message on the agenda.
- **Reason for visiting** The tooltip includes a short description of why the patient is visiting.
- **Location** The tooltip shows the appointment location.
- **Footer actions** The footer includes a gray `View patient file` button and a red `Delete appointment` button.
- **View patient action** Clicking `View patient file` shows a toast message with the `View file` text.
- **Delete action** Clicking `Delete appointment` removes the event.
- **Event selection** Clicking an event selects and highlights it.

## Best for

- **Appointment schedulers** Showing patient appointments with status, reason, location, and event-specific actions.
- **Healthcare scheduling** Building agenda views where users need quick access to appointment details without opening a separate page.
- **Desktop workflows** Presenting a weekly agenda layout with hover states, selection states, and header navigation.
- **Event detail previews** Displaying structured event information in a custom tooltip anchored to the hovered event.
- **Inline appointment actions** Letting users confirm, cancel, view, or delete appointments directly from the agenda.
