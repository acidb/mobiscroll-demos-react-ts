To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/load-events-from-remote-api#).

## Demo description

The calendar can be populated by passing an array to the `data` option, that you can construct either inline or by getting it from a remote API. The important thing to remember is that events need to be [in a format that the calendar understands](https://demo.mobiscroll.com/react/eventcalendar/event-data-structure#).

- **Interested in load on demand?** [Dynamically load events on month change &#8594;](https://demo.mobiscroll.com/react/eventcalendar/load-events-on-demand#)

## Related demos

- [Dynamically load events on month change &#8594;](https://demo.mobiscroll.com/react/eventcalendar/load-events-on-demand#)

## Implementation instructions

- Load the event data from a remote API, then pass the resulting array to the `data` option.

## What this demo shows

- A mobile month view event calendar is shown inside a smartphone frame.
- **Month grid** Day cells display event labels directly on the calendar when there is enough vertical space.
- **Event rendering** Labels use different colors and styles to distinguish between all-day, multi-day all-day, and timed events.
- **Overflow handling** When a day has more events than can fit in the cell, the extra items are hidden behind an `X more` label.
- **Popover** Clicking the `X more` label opens a popover with the remaining events for that day.
- **Event interaction** Clicking or hovering an event label highlights it.
- **Day hover state** Hovering an empty area of a day cell highlights the day number with a gray background.
- **Day selection** Clicking the empty area of a day cell selects the day and highlights the day number with a blue background.
- **Month navigation** The month can be changed by dragging the calendar left or right.
- **Header navigation** The header shows the current month and year, previous and next navigation arrows, and a `Today` button for returning to the current date.

## Best for

- **Remote event loading examples** Showing how to fetch events from an API and pass them to the Eventcalendar month view.
- **Month-view event rendering** Explaining how all-day, multi-day, and timed events appear in month cells.
- **Overflow behavior** Demonstrating how the calendar handles more events than can fit in a day cell.
- **Mobile calendar patterns** Illustrating a touch-friendly month view with built-in navigation and event popovers.
