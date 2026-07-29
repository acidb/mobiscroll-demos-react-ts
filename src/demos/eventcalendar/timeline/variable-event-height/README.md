To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/variable-event-height#).

## Demo description

By default, events are equal in height and content is truncated by default where necessary. There are cases however where event height should match the content so that everything fits. To render events with variable height, use the `eventHeight: 'variable'` property under the `view` option's timeline configuration and the custom event templates: `renderTimelineEvent` or @if (pagemode == PageMode.Angular) { `timelineEventContentTemplate` } else if (pagemode == PageMode.Vue) { `timelineEventContent` } else { `renderTimelineEventContent` } . When the latter is used, to let the event container grow, the height of the inner content must be set to auto: `.mbsc-schedule-event-inner { height: auto }`. The height of the timeline events grow with the internal content, and the height of the resource rows adjust themselves to the events.

In the following example the height of the resource rows change dynamically based on the height of their events. Resources are the rooms where events are held and events have varying descriptions.

- **Variable event height is an experimental feature.** [Learn more about it in the documentation &#8594;](https://docs.mobiscroll.com/react/eventcalendar/timeline#variable-event-height)

## Implementation instructions

- Set `timeline: { type: 'week', eventHeight: 'variable', startTime: '07:00', endTime: '21:00' }`. The `eventHeight: 'variable'` option makes each resource row grow to fit the tallest event it contains instead of truncating content to a fixed height. This is an experimental feature.
- Use `renderTimelineEventContent` (Angular: `timelineEventContentTemplate`, Vue: `#timelineEventContent` slot) to render a custom two-element layout inside each event: a title div and a description div. Access the description via `event.original.description`. Using the content renderer (rather than the full event renderer `renderTimelineEvent`) is sufficient here — Mobiscroll handles the container height automatically when `eventHeight: 'variable'` is active.
- When rendering multi-line text inside `renderTimelineEventContent`, apply `white-space: normal` to text elements — this enables line wrapping, which drives the variable row height. Without it, text stays single-line and rows don't expand.
- Define 6 building/hall resources, each with `id`, `name`, and `color`. Load events remotely via `getJson` from a JSONP endpoint — the remote events carry varying `description` lengths, which is what makes the height difference between rows visually apparent.
- Disable drag-to-create and click-to-create (`dragToCreate: false`, `clickToCreate: false`). Enable drag-to-move, drag-to-resize, and drag-in-time so users can interact with events without accidentally creating new ones.

## What this demo shows

- A desktop weekly timeline where days are arranged horizontally and resources are listed as rows on the left.
- **Header navigation** The month and year label opens date navigation, while the previous and next arrows move between weeks and the Today button returns to the current date.
- **Week view** The strip below the header shows the selected week from Sunday to Saturday, with the current date highlighted.
- **Time grid** The timeline displays hourly columns from 7 AM to 9 PM.
- **Resources** Multiple resources are shown as separate timeline rows.
- **Current time** A vertical blue line with a time label marks the current time.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event cards** Events appear as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed below the title.
- **Variable event height** Timeline events grow to fit their custom event content instead of forcing every event into the same fixed height.
- **Resource row height** Resource rows adjust dynamically based on the height of the events they contain.
- **Date positioning** Events are positioned by their assigned resource and exact date range.
- **Event interaction** Events highlight on hover and show drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** New events can be created by double-clicking the timeline or by clicking and dragging across a time range.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through time and resources.

## Best for

- **Room and hall schedules** Showing bookings where each event needs a title, time range, and longer description without cutting off important details.
- **Conference and session planning** Displaying sessions with variable-length descriptions across rooms, tracks, or venues.
- **Resource timelines with detailed notes** Presenting tasks, reservations, or appointments where some events need more explanatory text than others.
- **Operational schedules** Comparing events across resources while keeping longer instructions, agendas, or context visible directly in the timeline.
- **Content-sensitive event layouts** Building timelines where row height should follow the amount of event content instead of using a uniform fixed height.
