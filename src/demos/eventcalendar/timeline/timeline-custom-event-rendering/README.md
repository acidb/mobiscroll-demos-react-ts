To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-react-ts?tab=readme-ov-file#mobiscroll-react-typescript-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/react/timeline/timeline-custom-event-rendering#).

## Demo description

Events can be customized through the `renderTimelineEvent` option. How the events look are fully up to you. Base event fields along with custom fields can be accessed when writing the rendering function.

The before/after buffers can help you visualise delays or added minutes for tasks. For example travel time for meetings/appointments, check in/check out for flights.

The buffers can be customized through the `renderBufferBefore` and `renderBufferAfter` options.

- **Want to see how custom event rendering looks on the time grid?** [Check out this example &#8594;](https://demo.mobiscroll.com/react/scheduler/customizing-events#)

## Implementation instructions

- Use `timeline: { type: 'day' }` for a single-day view with all resources as rows.
- Define 3 person resources (Ryan, Kate, John), each with `id`, `name`, and `color`. Event colors are set per-event independently of resource colors.
- Add a custom `taskType` property to each event containing a Mobiscroll icon name string (e.g. `'cogs'`, `'material-repeat'`, `'material-search'`, `'material-format-paint'`). Each event also carries `bufferBefore` and `bufferAfter` values in minutes. Use `dyndatetime` offsets so events always fall on today.
- Use `renderTimelineEvent` (Angular: `timelineEventTemplate`, Vue: `#timelineEvent`) to fully replace the default event rendering. The render function receives `data` with `data.original` (the raw event object), `data.color` (the resolved event color), and `data.start` (a pre-formatted start time string). Render a Mobiscroll icon via the class `mbsc-icon mbsc-font-icon mbsc-icon-{taskType}`, the formatted start time, and the event title.
- Use `renderBufferBefore` (Angular: `bufferBeforeTemplate`, Vue: `#bufferBefore`) and `renderBufferAfter` (Angular: `bufferAfterTemplate`, Vue: `#bufferAfter`) to render custom buffer zones. Both receive `args.original` (the event). Render "Prep" with `event.bufferBefore` minutes in the before-buffer, and "Inspection" with `event.bufferAfter` minutes in the after-buffer.
- Use `extendDefaultEvent` returning `{ taskType: 'cogs', bufferBefore: 30, bufferAfter: 60, color: '#239a21' }` so newly drag-created events get a default icon, buffer times, and color.
