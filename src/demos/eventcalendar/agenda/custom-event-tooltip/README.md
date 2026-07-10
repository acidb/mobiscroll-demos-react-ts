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
