To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/event-buffer#).

## Demo description

Use the `bufferBefore` and `bufferAfter` to add buffer times that will be rendered before and after the event.

These areas can help you visualize delays or added minutes for tasks. Here are some examples:
- Travel time for meetings, appointments, work orders
- Check in and check out times around flights
- Loading/unloading for bus/truck
- Cleaning, inspection, maintenance work that happen on a recurring basis

- **Looking to customize event buffers?** [Check out the templating capabilities &#8594;](https://demo.mobiscroll.com/react/timeline/timeline-custom-event-rendering#)

## Implementation instructions

- Set `timeline: { type: 'day' }` for a single-day timeline view showing all resources as rows.
- Enable buffer rendering by setting `showEventBuffer: true` on the `Eventcalendar` component. Without this prop the buffer zones are not displayed even if events carry buffer data.
- Add `bufferBefore` and/or `bufferAfter` to individual event objects. Both values are in minutes and are independent — an event can have only before, only after, or both. The buffer zone is rendered as a distinct shaded area adjacent to the event block.
- Define 4 resources with `id`, `name`, and `color`. Use today's date with time offsets (via a relative date helper) for event `start` and `end` so events always appear on the current day.
- Include a variety of buffer combinations to illustrate all cases: `bufferAfter` only (e.g. 30 min after morning routine), `bufferBefore` + `bufferAfter` (e.g. 30 min before and 120 min after a long session), and small symmetric buffers (e.g. 10 min on both sides of a short meeting).

## What this demo shows

- A desktop timeline showing a single day with hours arranged horizontally and resources arranged vertically.
- **Header navigation** The month and year label opens date navigation, while the previous and next arrows and the Today button move between dates and return to the current day.
- **Day view** A fixed date strip below the header shows the selected date in `DD DDD MMM YYYY` format, with the current date highlighted.
- **Time grid** The timeline displays hourly columns from 12 AM to 12 PM.
- **Resources** Multiple resources appear as separate rows on the left side of the timeline.
- **Current time** A vertical blue line with a time label marks the current time.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event cards** Events appear as colored cards with a left color stripe, the time range below the title, and the title shown in bold.
- **Event buffers** When event buffer display is enabled, buffer time renders before and/or after the event block to show added time around the scheduled event.
- **Buffer control** A control above the timeline lets users turn event buffer display on or off. Buffer display is enabled by default.
- **Event overlapping** Overlapping events are placed side by side so each event remains visible.
- **Event positioning** Events are positioned by assigned resource, date, start time, and end time.
- **Event interaction** Events highlight on hover and expose drag and resize handles for moving events or changing their duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Users can create events by double-clicking the timeline or by clicking and dragging across a time range.
- **Scrolling** The timeline supports horizontal and vertical scrolling for navigating through time and resources.

## Best for

- **Travel time** Showing travel time before or after meetings, appointments, and work orders.
- **Check-in and check-out windows** Visualizing time around flights, bookings, or scheduled appointments.
- **Loading and unloading time** Planning additional time around bus, truck, delivery, or transport work.
- **Preparation and cleanup work** Displaying cleaning, inspection, maintenance, or other recurring work that happens before or after the main scheduled event.
- **Delay visibility** Making added minutes or expected delays visible directly in the timeline.
