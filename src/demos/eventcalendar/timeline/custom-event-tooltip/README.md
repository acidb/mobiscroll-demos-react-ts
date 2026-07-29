To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/custom-event-tooltip#).

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
In case of md-boostrap, you can add the tooltip directive to the [custom event template](https://demo.mobiscroll.com/react/timeline/timeline-custom-event-rendering#)
so that the library knows where and when to show the tooltip.

## Implementation instructions

- Use `timeline: { type: 'day', startDay: 1, endDay: 5, startTime: '08:00', endTime: '16:00' }` — Mon–Fri, 8am–4pm.
- Define 3 doctor resources, each with `id`, `name`, and `color`. Each appointment event carries custom properties: `age`, `confirmed` (boolean), `reason`, and `location`, in addition to the standard `title`, `start`, `end`, and `resource`.
- Set `showEventTooltip: false` to suppress the native browser tooltip. Set `dragToMove: true`; disable all create and resize interactions.
- Use a `Popup` component as the custom tooltip. Configure it with `display="anchored"`, `showOverlay={false}`, `scrollLock={false}`, `touchUi={false}`, `contentPadding={false}`. The `anchor` prop is set dynamically to the hovered event's DOM element, obtained via `args.domEvent.target.closest('.mbsc-timeline-event')` inside the hover handler.
- **Tooltip open/close logic** — use a shared timer ref to bridge the gap between the event element and the popup:
  - `onEventHoverIn` / `onEventClick`: clear any pending close timer, populate popup state from `args.event` (title, age, confirmed, reason, location) and `args.resourceObj` (color), format the time range with `formatDate`, set the anchor, and open the popup.
  - `onEventHoverOut`: start a 200ms timer to close the popup.
  - Mouse-enter on the popup itself: clear the close timer so the popup stays open when the cursor moves from the event onto the popup.
  - Mouse-leave on the popup: start a 200ms close timer.
  - `onEventDragStart`: close the popup immediately.
- **Popup content**: a colored header showing patient name + age and the formatted appointment time (color driven by `args.resourceObj.color`); a body with the appointment status (Confirmed/Canceled) and a toggle button (`Button color="warning"|"success" variant="outline"`), reason for visit, location, a "View patient file" button (`color="secondary"`), and a "Delete appointment" button (`color="danger" variant="outline"`).
- Use a `Toast` component to confirm user actions: status toggle, file view, and deletion.

## What this demo shows

- A desktop daily timeline where hours are arranged horizontally and resources are listed as rows on the left.
- **Header navigation** The month and year label opens date navigation, while the previous and next arrows move between days and the Today button returns to the current date.
- **Day view** The strip below the header shows the selected day with the timeline displays hourly columns from 8 AM to 4 PM.
- **Resources** Multiple resources are shown as separate timeline rows.
- **Current time** A vertical blue line with a time label marks the current time.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event cards** Events are shown as colored cards with a left color stripe, a bold title, and the start and end time.
- **Custom event tooltip** Hovering over an event opens a custom tooltip below the hovered event.
- **Tooltip header** The tooltip header uses the event color and shows the patient name, age, and event start and end time.
- **Tooltip details** The tooltip body shows `Status`, `Reason for visiting`, and `Location` rows.
- **Appointment status** The `Status` row shows whether the appointment is confirmed.
- **Status action** The tooltip shows either a `Confirm appointment` or `Cancel appointment` button based on the current appointment status.
- **Status feedback** Clicking the status action changes the appointment status, closes the tooltip, and shows a toast message on the timeline.
- **Reason for visiting** The tooltip includes a short description of why the patient is visiting.
- **Location** The tooltip shows the appointment location.
- **Footer actions** The footer includes a gray `View patient file` button and a red `Delete appointment` button.
- **View patient action** Clicking `View patient file` shows a toast message with the `View file` text.
- **Delete action** Clicking `Delete appointment` removes the event.
- **Date positioning** Events are positioned by their assigned resource and exact date and time range.
- **Event selection** Clicking an event selects and highlights it.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through time and resources.

## Best for

- **Appointment schedulers** Showing patient appointments with status, reason, location, and event-specific actions.
- **Healthcare scheduling** Building timeline views where users need quick access to appointment details without opening a separate page.
- **Desktop workflows** Presenting a weekly timeline layout with hover states, selection states, and header navigation.
- **Event detail previews** Displaying structured event information in a custom tooltip anchored to the hovered event.
- **Inline appointment actions** Letting users confirm, cancel, view, or delete appointments directly from the scheduler.
