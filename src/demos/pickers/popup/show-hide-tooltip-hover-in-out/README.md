To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/popup/show-hide-tooltip-hover-in-out#).

## Demo description

Use the popup as a tooltip that gives a quick glance at more event details than just the labels.
This approach is perfect for providing access to information without cluttering the interface.

The popup takes care of auto-positioning, taking the guesswork out of where it should show up.
It also gives you full control over the content where you can use any Mobiscroll or custom component.

- **Looking for more advanced event tooltip ideas?** [Check out this example →](https://demo.mobiscroll.com/react/scheduler/custom-event-tooltip#)

## Related demos

- [Check out this example →](https://demo.mobiscroll.com/react/scheduler/custom-event-tooltip#)

## Implementation instructions

- `Eventcalendar`'s `onEventHoverIn`/`(onEventHoverIn)`/`@event-hover-in` fires when the pointer enters an event; its handler reads `args.event` for the title/start/end and `args.domEvent.target` for the hovered element, formats the times with `formatDate('hh:mm A', ...)`, and opens the tooltip popup anchored to that element (`anchor`/`[anchor]`/`:anchor` set to the target, then `isOpen`/`:isOpen` set `true` in React/Vue or `popup.open()` called in Angular/JS after clearing any pending close timer).
- `onEventHoverOut`/`(onEventHoverOut)`/`@event-hover-out` doesn't close the popup immediately — it starts a `setTimeout` (200ms) that hides it (`isOpen = false` / `popup.close()`), giving the pointer time to move from the event onto the tooltip itself without it flickering closed.
- The tooltip content wraps its own `mouseenter`/`mouseleave` handlers (`onMouseEnter`/`onMouseLeave` in React, `@mouseenter`/`@mouseleave` in Vue, `(mouseenter)`/`(mouseleave)` in Angular): entering the tooltip clears the pending close timeout so it stays open; leaving it restarts the same 200ms close timer, so the two hover targets (event + tooltip) act as one continuous hover region.
- `Popup` options for the tooltip: `display: 'anchored'`, `touchUi: false` (keeps it in anchored/popover mode even in touch environments, since it's not meant to become a mobile action sheet), `showOverlay: false` (no dimmed backdrop, since it's a lightweight tooltip, not a modal), and `width: 250`.
- `Popup` has no `buttons` option set — it's dismiss-only via hover-out, with no footer actions.
- `Eventcalendar`'s `view` is `{ calendar: { type: 'month' } }`, rendering the month grid that the tooltip is anchored against.

## What this demo shows

- A desktop-style monthly event calendar view with event labels rendered inside day cells.
- **Event labels** Events are shown as labels, with different visual styles based on the event type or event data.
- **Event selection** Clicking an event label highlights the selected event.
- **Day hover state** Hovering over a day cell highlights the day number with a gray background.
- **Day selection** Clicking an empty area of a day cell selects that day and highlights the day number with a blue background.
- **Calendar header** The top-left side shows the current month and year, while the top-right side includes blue previous and next navigation arrows with a `Today` button between them.
- **Drag navigation** The calendar can be dragged left or right to navigate between weeks.
- **Custom event tooltip** Hovering over an event opens a popup as a tooltip below the hovered event.
- **Tooltip header** The tooltip header shows the title of the event.
- **Tooltip details** The tooltip body shows the exact start end and time of the hovered event.

## Best for

- **Appointment calendars** Showin appointments with exact start and end time.
- **Healthcare scheduling** Building calendar views where users need quick access to appointment details without opening a separate page.
- **Event detail previews** Displaying structured event information in a custom tooltip anchored to the hovered event.
