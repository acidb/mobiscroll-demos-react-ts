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
