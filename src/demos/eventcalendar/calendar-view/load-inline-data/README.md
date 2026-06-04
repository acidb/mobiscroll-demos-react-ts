To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/eventcalendar/load-inline-data#).

## Demo description

What is an event calendar without any events in it? To populate it with events all you have to do is pass the event array to the `data` option.

In a real-world scenario you would probably [load the events from a remote resource](https://demo.mobiscroll.com/react/eventcalendar/load-events-from-remote-api#) or event better, [load them on demand](https://demo.mobiscroll.com/react/eventcalendar/load-events-on-demand#). However the point of this example is to understand how easy it is to add events to the event calendar.

- **Do you want to learn about the event data sctructure?** [See how the event object is built &#8594;](https://demo.mobiscroll.com/react/eventcalendar/event-data-structure#)

## Implementation instructions

- Pass the event array to the `data` option to populate the Eventcalendar with inline events.

## What this demo shows

- A month-view event calendar is displayed inside a smartphone frame.
- **Month grid** Day cells can show inline event labels directly in the calendar.
- **Event labels** Labels use different visual styles to distinguish all-day events, multi-day all-day events, and timed events.
- **Color coding** Event colors help distinguish different events at a glance.
- **Overflow handling** The number of visible event labels per day depends on the available vertical space in the day cell.
- **More events popup** When not all events fit, the day shows an `X more` label that indicates how many additional events are hidden.
- **Popup interaction** Clicking the `X more` label opens a popup with the hidden events for that day.
- **Event states** Clicking or hovering an event label highlights it.
- **Day hover state** Hovering a day cell highlights the day number in the top-right corner with a gray background.
- **Day selection** Clicking the empty area of a day cell selects that date and highlights the day number with a blue background.
- **Month navigation** You can move between months by dragging the calendar left or right.
- **Header navigation** The header shows the current month and year, with previous and next arrow buttons plus a Today button for jumping back to the current date.

## Best for

- **Monthly event overview** Showing a full month of events in a compact calendar layout.
- **Inline event browsing** Scenarios where users need to scan visible event labels directly in the month grid.
- **Mixed event types** Calendars that need to distinguish all-day, multi-day, and timed events with different label styles.
- **Dense day cells** Use cases where some days contain more events than can fit inline and should be accessible through a popup.
- **Desktop and larger layouts** Interfaces with enough vertical space to make inline event labels in month cells more useful and readable.
