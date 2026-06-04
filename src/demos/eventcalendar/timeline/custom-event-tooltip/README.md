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
