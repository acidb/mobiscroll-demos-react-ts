To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/scheduler/event-buffer#).

## Demo description

Use the `bufferBefore` and `bufferAfter` to add buffer times that will be rendered before and after the event.

These areas can help you visualize delays or added minutes for tasks. Here are some examples:
- Travel time for meetings, appointments, work orders
- Check in and check out times around flights
- Loading/unloading for bus/truck
- Cleaning, inspection, maintenance work that happen on a recurring basis

- **Looking to customize event buffers?** [Check out the templating capabilities &#8594;](https://demo.mobiscroll.com/react/scheduler/customizing-events#)

## Implementation instructions

- Use `view: { scheduler: { type: 'week' } }` and set `showEventBuffer: true` on the Eventcalendar. Without this prop buffer zones are not displayed even if events carry buffer data.
- Add `bufferBefore` and/or `bufferAfter` to individual event objects (values in minutes). Both are independent — an event can have only before, only after, or both. The buffer zone renders as a distinct shaded area adjacent to the event block.
- Define events inline using today's date with time offsets so events always appear on the current week. Include a variety of buffer combinations: `bufferAfter` only, `bufferBefore` + `bufferAfter`, and small symmetric buffers on both sides.

## What this demo shows

- A desktop weekly scheduler layout with a fixed week strip at the top, a fixed all-day row below it, and a scrollable scheduler time grid for the selected week.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed strip below the header displays the days of the selected week, with the current date highlighted by a blue circle.
- **All-day events** All-day events appear in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected week.
- **Timed events** Timed events are displayed in the weekly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title. 
- **Event buffers** When event buffer display is enabled, buffer time renders before and/or after the event block to show added time around the scheduled event.
- **Eventt buffer controls** A `Displaye the event buffer display globally` label appears next to the week view left uppder sied and under that a switchable button lets users turn event buffer display on or off. By default it's enabled. 
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid, with a small blue dot marking the current date.
- **Hover behavior** Hovering over the time grid shows a time indicator that follows the cursor in 15-minute increments.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Travel time** Showing travel time before or after meetings, appointments, and work orders.
- **Check-in and check-out windows** Visualizing time around flights, bookings, or scheduled appointments.
- **Loading and unloading time** Planning additional time around bus, truck, delivery, or transport work.
- **Preparation and cleanup work** Displaying cleaning, inspection, maintenance, or other recurring work that happens before or after the main scheduled event.
- **Delay visibility** Making added minutes or expected delays visible directly in the scheduler grid.
