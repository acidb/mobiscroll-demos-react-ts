To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/custom-event-tooltip#).

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
In case of md-boostrap, you can add the tooltip directive to the [custom event template](https://demo.mobiscroll.com/react/scheduler/customizing-events#)
so that the library knows where and when to show the tooltip.

## Implementation instructions

- Use `view: { scheduler: { type: 'week', startDay: 1, endDay: 5, startTime: '08:00', endTime: '16:00', allDay: false } }` — Mon–Fri, 8am–4pm.
- Define 3 doctor resources, each with `id`, `name`, and `color`. Each appointment event carries custom properties: `age`, `confirmed` (boolean), `reason`, and `location`, in addition to `title`, `start`, `end`, and `resource`.
- Set `showEventTooltip: false` to suppress the native browser tooltip. Set `dragToMove: true`.
- Use a `Popup` component as the custom tooltip. Configure it with `display="anchored"`, `showOverlay={false}`, `scrollLock={false}`, `touchUi={false}`, `contentPadding={false}`. The `anchor` prop is set dynamically to the hovered event's DOM element via `args.domEvent.target.closest('.mbsc-schedule-event')`.
- **Tooltip open/close logic** — use a shared timer ref to bridge the gap between the event element and the popup:
  - `onEventHoverIn` / `onEventClick`: clear any pending close timer, populate popup state from `args.event` and `args.resourceObj` (color), format the time range with `formatDate`, set anchor, open.
  - `onEventHoverOut`: start a 200ms timer to close.
  - Mouse-enter on the popup: clear the close timer. Mouse-leave on the popup: start a 200ms close timer.
  - `onEventDragStart`: close immediately.
- **Popup content**: colored header with patient name, age, and appointment time; status (Confirmed/Canceled) with a toggle button; reason for visit; location; "View patient file" and "Delete appointment" buttons. Use a `Toast` to confirm actions.

## What this demo shows

- A desktop weekly scheduler from Monday to Friday, with a fixed resource and week strip, repeated resources for each week, and a vertically scrollable time grid running from 8 AM to 4 PM.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Resources with week view** The fixed strip below the header displays resources at the top and below that the weeks so in this case resources are grouped by resource which means for each resources appears the selected week.
- **Time grid** The scheduler shows 8-hours range from 8 AM to 4 PM and can be scrolled vertically.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Current time** A blue current-time line appears across the time grid.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Custom event tooltip** Hovering over an event opens a custom tooltip below the hovered event.
- **Tooltip header** The tooltip header uses the event color and shows the patient name, age, and event start and end time.
- **Tooltip details** The tooltip body shows `Status`, `Reason for visiting`, and `Location` rows.
- **Appointment status** The `Status` row shows whether the appointment is confirmed.
- **Status action** The tooltip shows either a `Confirm appointment` or `Cancel appointment` button based on the current appointment status.
- **Status feedback** Clicking the status action changes the appointment status, closes the tooltip, and shows a toast message on the scheduler.
- **Reason for visiting** The tooltip includes a short description of why the patient is visiting.
- **Location** The tooltip shows the appointment location.
- **Footer actions** The footer includes a gray `View patient file` button and a red `Delete appointment` button.
- **View patient action** Clicking `View patient file` shows a toast message with the `View file` text.
- **Delete action** Clicking `Delete appointment` removes the event.
- **Event selection** Clicking an event selects and highlights it.

## Best for

- **Appointment schedulers** Showing patient appointments with status, reason, location, and event-specific actions.
- **Healthcare scheduling** Building scheduler views where users need quick access to appointment details without opening a separate page.
- **Desktop workflows** Presenting a weekly scheduler layout with hover states, selection states, and header navigation.
- **Event detail previews** Displaying structured event information in a custom tooltip anchored to the hovered event.
- **Inline appointment actions** Letting users confirm, cancel, view, or delete appointments directly from the scheduler.
